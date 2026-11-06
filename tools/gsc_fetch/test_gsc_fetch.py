"""Unit tests for the paging, de-duplication, pacing and diff logic (no network).

Run:  python3 -I -m unittest test_gsc_fetch -v
"""
from __future__ import annotations

import datetime as dt
import importlib
import sys
import unittest
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))

import fetch_search_analytics as fsa  # noqa: E402
import inspect_sweep as isw  # noqa: E402
from fake_gsc import FakeSearchAnalytics, FakeUrlInspection  # noqa: E402


class PagingTests(unittest.TestCase):
    def test_single_page_day(self):
        svc = FakeSearchAnalytics(rows_per_day=37)
        rows = fsa.fetch_day(svc, "sc-domain:x", dt.date(2026, 10, 1), ["date", "page", "query"], "web", "final")
        self.assertEqual(len(rows), 37)
        # one request returned 37 (< rowLimit) rows, then one more returned 0 rows -> 2 requests
        self.assertEqual([r["body"]["startRow"] for r in svc.requests], [0, 25_000])
        self.assertEqual(svc.requests[0]["body"]["rowLimit"], 25_000)
        self.assertEqual(svc.requests[0]["body"]["startDate"], svc.requests[0]["body"]["endDate"])

    def test_multi_page_day_exact_multiple(self):
        # 50,000 rows == exactly two full pages; the loop must still issue a third (empty) request
        svc = FakeSearchAnalytics(rows_per_day=50_000)
        rows = fsa.fetch_day(svc, "sc-domain:x", dt.date(2026, 10, 1), ["date", "page", "query"], "web", "final")
        self.assertEqual(len(rows), 50_000)
        self.assertEqual([r["body"]["startRow"] for r in svc.requests], [0, 25_000, 50_000])

    def test_multi_page_partial_last_page(self):
        svc = FakeSearchAnalytics(rows_per_day=30_001)
        rows = fsa.fetch_day(svc, "sc-domain:x", dt.date(2026, 10, 1), ["date", "page", "query"], "web", "final")
        self.assertEqual(len(rows), 30_001)
        self.assertEqual(len(svc.requests), 3)

    def test_retry_then_raise(self):
        svc = FakeSearchAnalytics(rows_per_day=5, fail_dates={"2026-10-02"})
        import time
        original = time.sleep
        time.sleep = lambda s: None
        try:
            with self.assertRaises(RuntimeError):
                fsa.fetch_day(svc, "sc-domain:x", dt.date(2026, 10, 2), ["date", "page", "query"], "web", "final", max_retries=2)
        finally:
            time.sleep = original
        self.assertEqual(len(svc.requests), 2)

    def test_dedup_and_records(self):
        rows = [{"keys": ["2026-10-01", "https://x/a", "q"], "clicks": 1, "impressions": 10, "ctr": 0.1, "position": 3.0},
                {"keys": ["2026-10-01", "https://x/a", "q"], "clicks": 1, "impressions": 10, "ctr": 0.1, "position": 3.0},
                {"keys": ["2026-10-01", "https://x/b", "q"], "clicks": 0, "impressions": 4, "ctr": 0.0, "position": 9.0}]
        recs = fsa.rows_to_records(rows, ["date", "page", "query"])
        self.assertEqual(len(recs), 2)
        self.assertEqual(recs[0], {"date": "2026-10-01", "page": "https://x/a", "query": "q", "clicks": 1, "impressions": 10, "ctr": 0.1, "position": 3.0})

    def test_day_range_is_chronological(self):
        days = fsa.day_range(dt.date(2026, 10, 10), 3)
        self.assertEqual([d.isoformat() for d in days], ["2026-10-08", "2026-10-09", "2026-10-10"])


class SitemapAndPacingTests(unittest.TestCase):
    def test_sitemap_index_is_followed(self):
        index = "<sitemapindex><sitemap><loc>https://x/s1.xml</loc></sitemap><sitemap><loc>https://x/s2.xml</loc></sitemap></sitemapindex>"
        children = {"https://x/s1.xml": "<urlset><url><loc>https://x/a</loc></url></urlset>",
                    "https://x/s2.xml": "<urlset><url><loc> https://x/b </loc></url><url><loc>https://x/c</loc></url></urlset>"}
        urls = isw.sitemap_urls(index, loader=lambda u: children[u])
        self.assertEqual(urls, ["https://x/a", "https://x/b", "https://x/c"])

    def test_pacer_sleeps_when_bucket_full(self):
        clock = [0.0]
        slept = []
        pacer = isw.Pacer(3, clock=lambda: clock[0], sleeper=lambda s: (slept.append(s), clock.__setitem__(0, clock[0] + s)))
        for _ in range(3):
            pacer.wait()
        self.assertEqual(slept, [])
        pacer.wait()  # 4th call within the same minute must wait ~60s
        self.assertEqual(len(slept), 1)
        self.assertGreaterEqual(slept[0], 60)


class DiffTests(unittest.TestCase):
    def test_diff_detects_transitions_added_removed_errors(self):
        prev = {"https://x/a": {"url": "https://x/a", "verdict": "PASS", "coverageState": "Submitted and indexed", "googleCanonical": "https://x/a", "userCanonical": "https://x/a", "indexingState": "INDEXING_ALLOWED", "robotsTxtState": "ALLOWED", "pageFetchState": "SUCCESSFUL", "error": ""},
                "https://x/b": {"url": "https://x/b", "verdict": "PASS", "coverageState": "Submitted and indexed", "googleCanonical": "https://x/b", "userCanonical": "https://x/b", "indexingState": "INDEXING_ALLOWED", "robotsTxtState": "ALLOWED", "pageFetchState": "SUCCESSFUL", "error": ""},
                "https://x/gone": {"url": "https://x/gone", "verdict": "PASS", "coverageState": "", "googleCanonical": "", "userCanonical": "", "indexingState": "", "robotsTxtState": "", "pageFetchState": "", "error": ""}}
        cur = {"https://x/a": {**prev["https://x/a"], "verdict": "NEUTRAL", "coverageState": "Crawled - currently not indexed"},
               "https://x/b": {**prev["https://x/b"], "googleCanonical": "https://x/hub"},
               "https://x/new": {"url": "https://x/new", "verdict": "PASS", "coverageState": "Submitted and indexed", "googleCanonical": "", "userCanonical": "", "indexingState": "", "robotsTxtState": "", "pageFetchState": "", "error": ""},
               "https://x/err": {"url": "https://x/err", "verdict": "", "coverageState": "", "googleCanonical": "", "userCanonical": "", "indexingState": "", "robotsTxtState": "", "pageFetchState": "", "error": "HttpError 403"}}
        prev["https://x/err"] = {**prev["https://x/gone"], "url": "https://x/err"}
        changes = isw.diff_sweeps(prev, cur)
        kinds = {(c["url"], c["change"], c["field"]) for c in changes}
        self.assertIn(("https://x/a", "changed", "verdict"), kinds)
        self.assertIn(("https://x/a", "changed", "coverageState"), kinds)
        self.assertIn(("https://x/b", "changed", "googleCanonical"), kinds)
        self.assertIn(("https://x/gone", "removed", ""), kinds)
        self.assertIn(("https://x/new", "added", ""), kinds)
        self.assertIn(("https://x/err", "error", "error"), kinds)
        self.assertEqual(len(changes), 6)

    def test_sweep_with_fake_client_and_summary(self):
        svc = FakeUrlInspection({"https://x/b": {"verdict": "NEUTRAL", "coverageState": "Crawled - currently not indexed"},
                                 "https://x/c": {"googleCanonical": "https://x/hub"}})
        rows = isw.sweep(svc, "https://x/", ["https://x/a", "https://x/b", "https://x/c"], isw.Pacer(600, sleeper=lambda s: None), log=lambda *_: None)
        self.assertEqual([r["verdict"] for r in rows], ["PASS", "NEUTRAL", "PASS"])
        self.assertEqual(svc.requests[0], {"inspectionUrl": "https://x/a", "siteUrl": "https://x/"})
        s = isw.summarise(rows)
        self.assertEqual(s["PASS / Submitted and indexed"], 2)
        self.assertEqual(s["NEUTRAL / Crawled - currently not indexed"], 1)
        self.assertEqual(s["google canonical != user canonical"], 1)


class ImportCleanTests(unittest.TestCase):
    def test_modules_import_without_google_libraries(self):
        # gsc_auth must import even when googleapiclient is absent (it is absent in this environment)
        mod = importlib.import_module("gsc_auth")
        self.assertEqual(mod.READONLY_SCOPE, "https://www.googleapis.com/auth/webmasters.readonly")
        with self.assertRaises(SystemExit):
            mod.load_credentials(None, None, None)


if __name__ == "__main__":
    unittest.main()
