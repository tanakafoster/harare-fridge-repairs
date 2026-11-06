#!/usr/bin/env python3
"""Find SEO opportunities in a Search Console page x query x date export.

Input: a CSV with columns ``date,page,query,clicks,impressions,ctr,position``
(the shape of a Search Analytics export with dimensions date/page/query), or the
API's JSON ``rows`` shape (``{"rows": [{"keys": [date, page, query], "clicks": ..}]}``).

Analyses (each written as its own CSV into ``--out-dir`` and summarised on stdout):

a. ``ctr_gap.csv``       pages whose CTR is below a position-bucketed expected-CTR table;
                         ``opportunity_score = (expected_ctr - ctr) * impressions``.
b. ``striking.csv``      queries whose impression-weighted average position is 4-20
                         with impressions >= ``--min-impressions``.
c. ``cannibal.csv``      queries where >= 2 pages each take >= 10% of the query's clicks
                         (impressions when clicks are sparse) plus an overlap score
                         (1 - Herfindahl index of the share split; 0 = one page owns it).
d. ``decay.csv``         per-page clicks in the latest 28 days vs the prior 28 and vs the
                         best 28-day window, flagging drops >= 20% with volume guards.
e. every table carries a ``sparse`` flag: rows under the minimum impression/click
   volume are labelled noise rather than dropped silently.

Pages are tagged by template (service/suburb/symptom/brand/other) with regexes so
results can be aggregated per template (``by_template.csv``).

The expected-CTR table is a deliberately conservative default (documented in the
README); pass ``--ctr-table my.csv`` (columns ``position,ctr``) to use your own curve
or ``--site-curve`` to derive the curve from the input itself.

Example::

    python3 -I gsc_opportunities.py synthetic_gsc.csv --out-dir out --min-impressions 50
"""
from __future__ import annotations

import argparse
import json
import re
import sys
from pathlib import Path

import numpy as np
import pandas as pd

# Position bucket -> expected CTR. Conservative blend of the public curves that
# circulate in GSC tooling (they disagree by a few points at positions 1-3; the
# gap, not the absolute value, drives the ranking). Position 11+ falls off to 0.5%.
DEFAULT_EXPECTED_CTR = {1: 0.27, 2: 0.15, 3: 0.11, 4: 0.08, 5: 0.065, 6: 0.05,
                        7: 0.04, 8: 0.033, 9: 0.028, 10: 0.024}

TEMPLATE_RULES = [
    # Harare Fridge Repairs URL scheme (adapted from the generator site's rules).
    ("suburb", re.compile(r"^/areas/(?!harare-(north|south|east|west)/?$)[a-z0-9-]+/?$")),
    ("region", re.compile(r"^/areas/harare-(north|south|east|west)/?$")),
    ("symptom", re.compile(r"^/problems/[a-z0-9-]+/?$")),
    ("brand", re.compile(r"^/[a-z0-9-]+-fridge-repairs/?$")),
    ("guide", re.compile(r"^/(fridge-regassing-cost-harare|does-my-fridge-need-regassing|fridge-repair-or-replace|fridge-repair-cost-harare|protect-fridge-from-load-shedding|fridge-on-solar-inverter|tips)/?$")),
    ("service", re.compile(r"^/([a-z0-9-]+-repairs|fridge-regassing|compressor-replacement|thermostat-replacement|fridge-servicing)/?$")),
    ("home", re.compile(r"^/$")),
]


def tag_template(path: str) -> str:
    """Classify a URL path into service/suburb/symptom/brand/home/other via regex."""
    path = re.sub(r"^https?://[^/]+", "", path) or "/"
    for name, rx in TEMPLATE_RULES:
        if rx.match(path):
            return name
    return "other"


def expected_ctr_for(position: float, table: dict[int, float]) -> float:
    p = int(np.floor(position))
    if p < 1:
        p = 1
    if p in table:
        return table[p]
    tail = table[max(table)]
    return max(0.005, tail - 0.002 * (p - max(table)))


def load_rows(path: Path) -> pd.DataFrame:
    """Load either the CSV export shape or the API JSON ``rows`` shape."""
    if path.suffix.lower() == ".json":
        payload = json.loads(path.read_text())
        rows = payload["rows"] if isinstance(payload, dict) else payload
        df = pd.DataFrame([{"date": r["keys"][0], "page": r["keys"][1], "query": r["keys"][2],
                            "clicks": r["clicks"], "impressions": r["impressions"],
                            "ctr": r.get("ctr", 0), "position": r["position"]} for r in rows])
    else:
        df = pd.read_csv(path)
    needed = {"date", "page", "query", "clicks", "impressions", "position"}
    missing = needed - set(df.columns)
    if missing:
        sys.exit(f"input is missing columns: {sorted(missing)}")
    df["date"] = pd.to_datetime(df["date"]).dt.normalize()
    for c in ("clicks", "impressions"):
        df[c] = df[c].astype(int)
    df["position"] = df["position"].astype(float)
    df["template"] = df["page"].map(tag_template)
    return df


def weighted_position(g: pd.DataFrame) -> float:
    w = g["impressions"].to_numpy()
    return float(np.average(g["position"].to_numpy(), weights=w)) if w.sum() else float("nan")


def aggregate(df: pd.DataFrame, keys: list[str]) -> pd.DataFrame:
    agg = df.groupby(keys).apply(
        lambda g: pd.Series({"clicks": g["clicks"].sum(), "impressions": g["impressions"].sum(),
                             "position": weighted_position(g)}), include_groups=False).reset_index()
    agg["ctr"] = np.where(agg["impressions"] > 0, agg["clicks"] / agg["impressions"], 0.0)
    return agg


def ctr_gap(df: pd.DataFrame, table: dict[int, float], min_impr: int) -> pd.DataFrame:
    pages = aggregate(df, ["page", "template"])
    pages["expected_ctr"] = pages["position"].map(lambda p: expected_ctr_for(p, table))
    pages["gap"] = pages["expected_ctr"] - pages["ctr"]
    pages["opportunity_score"] = (pages["gap"] * pages["impressions"]).round(1)
    pages["sparse"] = pages["impressions"] < min_impr
    out = pages[(pages["gap"] > 0.01) & (pages["position"] <= 20)].sort_values("opportunity_score", ascending=False)
    return out.round({"position": 2, "ctr": 4, "expected_ctr": 4, "gap": 4})


def site_curve(df: pd.DataFrame, min_impr: int) -> dict[int, float]:
    """Derive the site's own CTR curve from queries with enough impressions (ContextBolt-style)."""
    q = aggregate(df, ["query"])
    q = q[q["impressions"] >= min_impr]
    q["bucket"] = q["position"].clip(lower=1).astype(int).clip(upper=10)
    curve = q.groupby("bucket").apply(lambda g: g["clicks"].sum() / max(1, g["impressions"].sum()), include_groups=False)
    table = dict(DEFAULT_EXPECTED_CTR)
    table.update({int(k): float(v) for k, v in curve.items()})
    return table


def striking_distance(df: pd.DataFrame, min_impr: int, lo: float = 4.0, hi: float = 20.0) -> pd.DataFrame:
    q = aggregate(df, ["query"])
    # best page per query by clicks (so the action list can name the page)
    best = aggregate(df, ["query", "page"]).sort_values(["query", "clicks"], ascending=[True, False]).drop_duplicates("query")
    q = q.merge(best[["query", "page"]].rename(columns={"page": "top_page"}), on="query", how="left")
    q["template"] = q["top_page"].map(tag_template)
    q["sparse"] = q["impressions"] < min_impr
    out = q[(q["position"] >= lo) & (q["position"] <= hi) & (~q["sparse"])]
    return out.sort_values("impressions", ascending=False).round({"position": 2, "ctr": 4})


def cannibalisation(df: pd.DataFrame, min_impr: int, share_floor: float = 0.10, basis: str = "auto") -> pd.DataFrame:
    qp = aggregate(df, ["query", "page"])
    totals = qp.groupby("query").agg(q_clicks=("clicks", "sum"), q_impr=("impressions", "sum")).reset_index()
    qp = qp.merge(totals, on="query")
    # auto: use clicks as the share basis unless the query has fewer than 20 clicks in total
    if basis == "auto":
        qp["basis"] = np.where(qp["q_clicks"] >= 20, "clicks", "impressions")
    else:
        qp["basis"] = basis
    qp["share"] = np.where(qp["basis"] == "clicks", qp["clicks"] / qp["q_clicks"].clip(lower=1),
                           qp["impressions"] / qp["q_impr"].clip(lower=1))
    contenders = qp[qp["share"] >= share_floor]
    counts = contenders.groupby("query")["page"].nunique()
    multi = counts[counts >= 2].index
    rows = []
    for q in multi:
        g = qp[qp["query"] == q].sort_values("share", ascending=False)
        shares = g["share"].to_numpy()
        hhi = float((shares ** 2).sum())
        rows.append({
            "query": q, "pages": int((g["share"] >= share_floor).sum()), "basis": g["basis"].iloc[0],
            "q_clicks": int(g["q_clicks"].iloc[0]), "q_impressions": int(g["q_impr"].iloc[0]),
            "overlap_score": round(1 - hhi, 3),
            "top_page": g["page"].iloc[0], "top_share": round(float(shares[0]), 3), "top_position": round(float(g["position"].iloc[0]), 2),
            "second_page": g["page"].iloc[1], "second_share": round(float(shares[1]), 3), "second_position": round(float(g["position"].iloc[1]), 2),
            "sparse": bool(g["q_impr"].iloc[0] < min_impr),
        })
    out = pd.DataFrame(rows)
    return out.sort_values(["sparse", "q_impressions"], ascending=[True, False]) if len(out) else out


def _windows(df: pd.DataFrame, metric: str, window: int) -> pd.DataFrame:
    """Per-page totals of ``metric`` for the latest window, the prior window and the best window."""
    end = df["date"].max()
    daily = df.groupby(["page", "date"])[metric].sum().unstack(fill_value=0)
    daily = daily.reindex(columns=pd.date_range(df["date"].min(), end), fill_value=0)
    latest = daily.loc[:, end - pd.Timedelta(days=window - 1):end].sum(axis=1)
    prior = daily.loc[:, end - pd.Timedelta(days=2 * window - 1):end - pd.Timedelta(days=window)].sum(axis=1)
    rolling = daily.T.rolling(window).sum().T
    out = pd.DataFrame({"latest": latest.astype(int), "prior": prior.astype(int),
                        "peak": rolling.max(axis=1).astype(int), "peak_end": pd.to_datetime(rolling.idxmax(axis=1)).dt.date})
    out["vs_prior_pct"] = np.where(out["prior"] > 0, (out["latest"] - out["prior"]) / out["prior"] * 100, np.nan)
    out["vs_peak_pct"] = np.where(out["peak"] > 0, (out["latest"] - out["peak"]) / out["peak"] * 100, np.nan)
    return out


def decay(df: pd.DataFrame, min_clicks: int, min_impr: int, window: int = 28, drop: float = 0.20,
          peak_drop: float = 0.30) -> pd.DataFrame:
    """Flag pages whose clicks (or, when clicks are sparse, impressions) fell >= ``drop``.

    Volume guard: the prior or peak window must hold >= ``min_clicks`` clicks for a
    click-based flag; pages under that are re-tested on impressions with ``min_impr``
    as the guard and labelled ``basis=impressions``. Pages under both guards are sparse.
    The peak comparison uses a stricter ``peak_drop`` because the best of many rolling
    windows is biased upward (a 20% gap from the peak is normal noise).
    """
    c = _windows(df, "clicks", window)
    i = _windows(df, "impressions", window)
    c_ok = c[["prior", "peak"]].max(axis=1) >= min_clicks
    i_ok = i[["prior", "peak"]].max(axis=1) >= min_impr
    use = pd.Series(np.where(c_ok, "clicks", np.where(i_ok, "impressions", "none")), index=c.index)
    mask = pd.DataFrame(np.repeat(use.eq("clicks").to_numpy()[:, None], c.shape[1], axis=1), index=c.index, columns=c.columns)
    pick = c.where(mask, i)
    out = pick.rename(columns={"latest": f"latest_{window}", "prior": f"prior_{window}", "peak": f"peak_{window}", "peak_end": "peak_window_end"})
    out["basis"] = use
    out["sparse"] = use.eq("none")
    vp, vk = out["vs_prior_pct"] <= -drop * 100, out["vs_peak_pct"] <= -peak_drop * 100
    out["reason"] = np.select([vp & vk, vp, vk], ["vs_prior+vs_peak", "vs_prior", "vs_peak"], default="")
    out["flag"] = out["reason"].ne("") & ~out["sparse"]
    out = out.reset_index().rename(columns={"index": "page"})
    out["template"] = out["page"].map(tag_template)
    cols = ["page", "template", "basis", f"latest_{window}", f"prior_{window}", f"peak_{window}", "peak_window_end",
            "vs_prior_pct", "vs_peak_pct", "reason", "sparse", "flag"]
    return out.loc[out["flag"], cols].sort_values("vs_prior_pct").round({"vs_prior_pct": 1, "vs_peak_pct": 1})


def by_template(df: pd.DataFrame, ctr: pd.DataFrame, dec: pd.DataFrame) -> pd.DataFrame:
    base = aggregate(df, ["template"]).set_index("template")
    base["pages"] = df.groupby("template")["page"].nunique()
    base["ctr_gap_pages"] = ctr[~ctr["sparse"]].groupby("template")["page"].nunique()
    base["ctr_gap_score"] = ctr[~ctr["sparse"]].groupby("template")["opportunity_score"].sum()
    base["decaying_pages"] = dec.groupby("template")["page"].nunique() if len(dec) else 0
    return base.fillna(0).sort_values("impressions", ascending=False).round({"position": 2, "ctr": 4, "ctr_gap_score": 1})


def main() -> None:
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("input", type=Path, help="CSV export or API JSON rows")
    ap.add_argument("--out-dir", type=Path, default=Path("out"))
    ap.add_argument("--min-impressions", type=int, default=100, help="rows below this are marked sparse (default 100)")
    ap.add_argument("--min-clicks", type=int, default=20, help="decay guard: prior/peak window must have >= this many clicks")
    ap.add_argument("--ctr-table", type=Path, help="CSV with columns position,ctr to replace the default expected-CTR table")
    ap.add_argument("--site-curve", action="store_true", help="derive expected CTR from this site's own queries")
    ap.add_argument("--cannibal-basis", choices=["auto", "clicks", "impressions"], default="auto",
                    help="share basis for cannibalisation (auto = clicks when the query has >= 20 clicks, else impressions)")
    ap.add_argument("--top", type=int, default=10, help="rows to print per table")
    args = ap.parse_args()

    df = load_rows(args.input)
    table = dict(DEFAULT_EXPECTED_CTR)
    if args.ctr_table:
        t = pd.read_csv(args.ctr_table)
        table = {int(r.position): float(r.ctr) for r in t.itertuples()}
    if args.site_curve:
        table = site_curve(df, args.min_impressions)
    args.out_dir.mkdir(parents=True, exist_ok=True)

    print(f"rows={len(df)} pages={df['page'].nunique()} queries={df['query'].nunique()} "
          f"dates={df['date'].min().date()}..{df['date'].max().date()} min_impressions={args.min_impressions}")
    print("expected CTR table:", {k: round(v, 3) for k, v in sorted(table.items())})

    results = {
        "ctr_gap": ctr_gap(df, table, args.min_impressions),
        "striking": striking_distance(df, args.min_impressions),
        "cannibal": cannibalisation(df, args.min_impressions, basis=args.cannibal_basis),
        "decay": decay(df, args.min_clicks, args.min_impressions),
    }
    results["by_template"] = by_template(df, results["ctr_gap"], results["decay"])
    with pd.option_context("display.width", 200, "display.max_columns", 20, "display.max_colwidth", 48):
        for name, table_df in results.items():
            path = args.out_dir / f"{name}.csv"
            table_df.to_csv(path, index=name == "by_template")
            sparse_n = int(table_df["sparse"].sum()) if "sparse" in table_df else 0
            print(f"\n== {name}: {len(table_df)} rows ({sparse_n} sparse) -> {path}")
            shown = table_df[~table_df["sparse"]] if "sparse" in table_df else table_df
            print(shown.head(args.top).to_string(index=name == "by_template"))


if __name__ == "__main__":
    main()
