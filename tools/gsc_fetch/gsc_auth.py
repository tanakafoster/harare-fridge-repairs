"""Credential helpers shared by the Search Console scripts.

Both the Search Analytics API (``webmasters`` v3 ``searchanalytics.query``) and the
URL Inspection API (``searchconsole`` v1 ``urlInspection.index.inspect``) accept the
read-only scope ``https://www.googleapis.com/auth/webmasters.readonly`` according to the
Google method reference pages recorded in the research notes (03_technical_seo_automation.md
line 88; 04_data_driven_seo_gsc_ga4.md line 17). The full ``webmasters`` scope is only
needed for write methods (sitemap submit/delete, site add/delete), which these scripts never call.

All Google imports are lazy so the scripts import cleanly (and ``--dry-run`` works) on a
machine without ``google-api-python-client`` installed.
"""
from __future__ import annotations

import json
import os
from pathlib import Path

READONLY_SCOPE = "https://www.googleapis.com/auth/webmasters.readonly"


def load_credentials(service_account: str | None, oauth_client: str | None, token_file: str | None):
    """Return google.auth credentials from a service-account JSON or an OAuth client file.

    Precedence: explicit ``service_account`` path, then ``oauth_client`` (installed-app flow
    with a cached token in ``token_file``), then the ``GOOGLE_APPLICATION_CREDENTIALS`` env var.
    A service account must be added as a user (Full or Restricted) on the Search Console property.
    """
    service_account = service_account or os.environ.get("GOOGLE_APPLICATION_CREDENTIALS")
    if service_account:
        from google.oauth2 import service_account as sa  # lazy
        return sa.Credentials.from_service_account_file(service_account, scopes=[READONLY_SCOPE])
    if oauth_client:
        from google.auth.transport.requests import Request  # lazy
        from google.oauth2.credentials import Credentials  # lazy
        token_path = Path(token_file or "gsc_token.json")
        creds = None
        if token_path.exists():
            creds = Credentials.from_authorized_user_info(json.loads(token_path.read_text()), [READONLY_SCOPE])
        if creds and creds.expired and creds.refresh_token:
            creds.refresh(Request())
        if not creds or not creds.valid:
            from google_auth_oauthlib.flow import InstalledAppFlow  # lazy
            flow = InstalledAppFlow.from_client_secrets_file(oauth_client, [READONLY_SCOPE])
            creds = flow.run_local_server(port=0)
            token_path.write_text(creds.to_json())
        return creds
    raise SystemExit("no credentials: pass --service-account FILE, --oauth-client FILE, or set GOOGLE_APPLICATION_CREDENTIALS")


def build_service(api: str, version: str, creds):
    """Build a discovery client (``webmasters`` v3 or ``searchconsole`` v1)."""
    from googleapiclient.discovery import build  # lazy
    return build(api, version, credentials=creds, cache_discovery=False)
