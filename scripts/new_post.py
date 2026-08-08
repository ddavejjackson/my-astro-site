#!/usr/bin/env python3
"""
Interactive frontmatter generator for Astro blog posts.
Run with: python3 scripts/new_post.py
"""

import re
import sys
from datetime import date, datetime
from pathlib import Path

BLOG_DIR = Path("src/content/blog")


def slugify(title: str) -> str:
    slug = title.lower().strip()
    slug = re.sub(r"[^a-z0-9\s-]", "", slug)
    slug = re.sub(r"\s+", "-", slug)
    slug = re.sub(r"-+", "-", slug)
    return slug.strip("-")


def prompt(label: str, required: bool = True, default: str = "") -> str:
    suffix = f" [{default}]" if default else ""
    while True:
        value = input(f"{label}{suffix}: ").strip()
        if not value and default:
            return default
        if not value and required:
            print("  This field is required.")
            continue
        return value


def prompt_date(label: str = "Publish date (DD/MM/YYYY)") -> str:
    default_str = date.today().strftime("%d/%m/%Y")
    while True:
        raw = input(f"{label} [{default_str}]: ").strip()
        if not raw:
            raw = default_str
        try:
            parsed = datetime.strptime(raw, "%d/%m/%Y").date()
            return parsed.isoformat()
        except ValueError:
            print("  Please use DD/MM/YYYY format, e.g. 08/08/2026.")


def prompt_list(label: str) -> list[str]:
    raw = input(f"{label} (comma-separated, optional): ").strip()
    if not raw:
        return []
    return [item.strip() for item in raw.split(",") if item.strip()]


def main() -> None:
    print("=== New Blog Post ===\n")

    title = prompt("Title")
    description = prompt("Description")
    pub_date = prompt_date()
    tags = prompt_list("Tags")
    category = prompt("Category")

    slug = slugify(title)
    BLOG_DIR.mkdir(parents=True, exist_ok=True)
    file_path = BLOG_DIR / f"{slug}.md"

    if file_path.exists():
        print(f"\nFile already exists: {file_path}")
        sys.exit(1)

    tags_yaml = "[" + ", ".join(f'"{t}"' for t in tags) + "]"

    frontmatter = f"""---
title: "{title}"
description: "{description}"
pubDate: {pub_date}
tags: {tags_yaml}
category: "{category}"
---

"""

    file_path.write_text(frontmatter, encoding="utf-8")
    print(f"\nCreated {file_path}")


if __name__ == "__main__":
    main()
