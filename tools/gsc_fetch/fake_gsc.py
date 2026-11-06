"""Fake Search Console clients for ``--dry-run`` and unit tests.

They mimic the small slice of the googleapiclient discovery interface the scripts use:

* ``service.searchanalytics().query(siteUrl=..., body=...).execute()``
* ``service.urlInspection().index().inspect(body=...).execute()``

The fake Search Analytics client synthesises deterministic rows for a date and honours
``rowLimit``/``startRow`` so paging logic can be tested (including the case where a day
has exactly ``rowLimit`` rows, which must trigger one extra empty request). Rows are
sorted by clicks descending like the real API.
"""
from __future__ import annotations

import datetime as dt
import hashlib


class _Call:
    def __init__(self, result):
        self._result = result

    def execute(self):
        return self._result


class FakeSearchAnalytics:
    """``rows_per_day``: dict date-> number of rows, or an int used for every day."""

    def __init__(self, rows_per_day=37, fail_dates: set[str] | None = None):
        self.rows_per_day = rows_per_day
        self.fail_dates = fail_dates or set()
        self.requests: list[dict] = []

    def searchanalytics(self):
        return self

    def query(self, siteUrl: str, body: dict):
        self.requests.append({"siteUrl": siteUrl, "body": body})
        day = body["startDate"]
        if day in self.fail_dates:
            raise RuntimeError(f"simulated API error for {day}")
        n = self.rows_per_day.get(day, 0) if isinstance(self.rows_per_day, dict) else self.rows_per_day
        start, limit = body.get("startRow", 0), body.get("rowLimit", 1000)
        rows = []
        for i in range(start, min(n, start + limit)):
            h = int(hashlib.md5(f"{day}:{i}".encode()).hexdigest()[:6], 16)
            impressions = max(1, (n - i) * 3 + h % 7)
            clicks = max(0, (n - i) // 2 - h % 3)
            rows.append({"keys": [day, f"https://example.test/page-{i % 20}", f"query {i}"],
                         "clicks": clicks, "impressions": impressions,
                         "ctr": round(clicks / impressions, 4), "position": round(1 + (i % 15) + h % 10 / 10, 2)})
        result = {"rows": rows, "responseAggregationType": "byPage"}
        if body.get("dataState") == "all" and body["endDate"] >= (dt.date.today() - dt.timedelta(days=2)).isoformat():
            result["metadata"] = {"first_incomplete_date": body["startDate"]}
        return _Call(result)


class FakeUrlInspection:
    """Returns a verdict per URL from a fixed dict (default: PASS) so diffs can be tested."""

    def __init__(self, verdicts: dict[str, dict] | None = None):
        self.verdicts = verdicts or {}
        self.requests: list[dict] = []

    def urlInspection(self):
        return self

    def index(self):
        return self

    def inspect(self, body: dict):
        self.requests.append(body)
        url = body["inspectionUrl"]
        base = {"verdict": "PASS", "coverageState": "Submitted and indexed", "robotsTxtState": "ALLOWED",
                "indexingState": "INDEXING_ALLOWED", "lastCrawlTime": "2026-10-20T03:14:00Z",
                "pageFetchState": "SUCCESSFUL", "googleCanonical": url, "userCanonical": url, "crawledAs": "MOBILE"}
        base.update(self.verdicts.get(url, {}))
        return _Call({"inspectionResult": {"inspectionResultLink": f"https://search.google.com/search-console/inspect?resource_id=x&id={url}",
                                           "indexStatusResult": base}})
