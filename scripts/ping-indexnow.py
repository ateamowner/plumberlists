#!/usr/bin/env python3
"""Ping IndexNow with plumberlists.com sitemap locs.

The IndexNow key is public by design (hosted at /{key}.txt). This script does
not read secrets or env vars. It is meant to run after a GitHub Pages deploy.
"""

from __future__ import annotations

import argparse
import json
import sys
import urllib.error
import urllib.request
import xml.etree.ElementTree as ET
from pathlib import Path

HOST = "plumberlists.com"
KEY = "501c87b49c5782ddc058aaea38764d39"
KEY_LOCATION = f"https://{HOST}/{KEY}.txt"
INDEXNOW_ENDPOINT = "https://api.indexnow.org/indexnow"
SITEMAP_NS = {"sm": "http://www.sitemaps.org/schemas/sitemap/0.9"}


def loc_texts(root: ET.Element) -> list[str]:
    locs = [el.text.strip() for el in root.findall(".//sm:loc", SITEMAP_NS) if el.text]
    if locs:
        return locs
    return [el.text.strip() for el in root.findall(".//{*}loc") if el.text]


def read_sitemap(path: Path) -> list[str]:
    root = ET.parse(path).getroot()
    urls = loc_texts(root)
    if not urls:
        raise SystemExit(f"No <loc> entries in {path}")
    return urls


def post_indexnow(urls: list[str]) -> int:
    payload = {
        "host": HOST,
        "key": KEY,
        "keyLocation": KEY_LOCATION,
        "urlList": urls,
    }
    body = json.dumps(payload).encode("utf-8")
    request = urllib.request.Request(
        INDEXNOW_ENDPOINT,
        data=body,
        headers={"Content-Type": "application/json; charset=utf-8"},
        method="POST",
    )
    try:
        with urllib.request.urlopen(request, timeout=30) as response:
            status = response.getcode()
            print(f"IndexNow POST {status} for {len(urls)} URLs")
            return 0 if status in {200, 202} else 1
    except urllib.error.HTTPError as error:
        detail = error.read().decode("utf-8", errors="replace")
        print(f"IndexNow POST failed: {error.code} {detail}", file=sys.stderr)
        return 1
    except urllib.error.URLError as error:
        print(f"IndexNow POST failed: {error.reason}", file=sys.stderr)
        return 1


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument(
        "--sitemap",
        type=Path,
        default=Path("out/sitemap.xml"),
        help="Built sitemap.xml whose <loc> values are submitted",
    )
    args = parser.parse_args()
    if not args.sitemap.is_file():
        raise SystemExit(f"Missing sitemap: {args.sitemap}")
    urls = read_sitemap(args.sitemap)
    return post_indexnow(urls)


if __name__ == "__main__":
    raise SystemExit(main())
