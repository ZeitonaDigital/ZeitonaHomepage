# Homepage minimal refresh + news — Design Spec

**Date:** 2026-08-12  
**Status:** Approved for planning  
**Scope:** Homepage simplification, news section, whitepaper removal, concise copy

---

## Goal

Simplify the Zeitona homepage into a minimal, calm composition: short hero, brief About path, and a maintainable News & updates section. Remove the whitepaper surface entirely. Keep Zeitona’s existing color palette and site architecture.

## Constraints

- Preserve the existing Zeitona color palette and logo treatment (immutable).
- Keep the static HTML / CSS / JS architecture (no new framework).
- Do not invent products, named partners, universities, or program affiliations beyond broad positioning already agreed in copy.
- Update all active locales: `en-us`, `en-gb`, `es`, `pt-pt`, `pt-br`.
- Vanessa / About-page rules from `AGENTS.md` are out of scope for this change.

## Decisions (locked)

| Topic | Choice |
|---|---|
| Homepage density | Drop three initiative cards; keep hero + About strip + News |
| Hero visual | Text-only (no banner image) |
| Hero headline | Growing change through innovation |
| Hero subtitle | None (omit from markup) |
| Page meta description | Zeitona. Growing change through innovation. |
| News source | `news.json` fetched and rendered on the homepage |
| Whitepaper | Remove page and all nav/homepage references |
| Card image assets | Leave files in repo; stop referencing them |

## Page structure

Top to bottom on `index.html`:

1. **Shared header** (existing injection)
2. **Hero** — headline only; generous whitespace; existing hero spacing language, simplified
3. **About strip** — one short line + text link to `about.html` (no card chrome)
4. **News** — section heading + list rendered from `news.json`; empty state when no items
5. **Shared footer** (existing injection)

### Navigation changes

In the shared header (`script.js`):

- Remove: Initiatives, Whitepaper
- Add: News → `index.html#news` (or `#news` on homepage)
- Keep: About, Get in Touch, theme toggle, language selector

## News data model

File: `news.json` at project root (or `data/news.json` if a `data/` folder is preferred during implementation — default **project root** `news.json`).

```json
{
  "items": [
    {
      "id": "example-id",
      "date": "2026-08-12",
      "title": {
        "en-us": "",
        "en-gb": "",
        "es": "",
        "pt-pt": "",
        "pt-br": ""
      },
      "summary": {
        "en-us": "",
        "en-gb": "",
        "es": "",
        "pt-pt": "",
        "pt-br": ""
      },
      "url": null
    }
  ]
}
```

### Rendering rules

- Sort by `date` descending.
- Each row: formatted date, title, optional summary.
- If `url` is a non-empty string, title (or row) is a link; otherwise plain text.
- On locale change, re-resolve `title` / `summary` for the active locale (fallback to `en-us` if a locale key is missing).
- Empty `items` array → show i18n empty-state string.
- Seed with **zero or one** neutral sample item only if needed to verify layout; do not invent company news claims. Prefer empty list + empty state if no real update is supplied.

### Failure handling

- If `news.json` fails to load, show the empty-state (or a short “Unable to load updates” string if added in i18n). Do not break the rest of the page.

## Copy (EN-US baseline)

| Surface | Copy |
|---|---|
| Hero headline | Growing change through innovation |
| Hero subtitle | *(removed)* |
| Page `<title>` | Zeitona |
| Page meta description | Zeitona. Growing change through innovation. |
| About strip | Meet the team behind Zeitona. |
| About link label | About |
| News heading | News & updates |
| News empty | No updates yet. |
| Nav | News · About · Get in Touch |

Equivalent concise translations required for `en-gb`, `es`, `pt-pt`, `pt-br`.

Positioning note for translators: Zeitona is a startup oriented toward innovation programs, universities, and positive impact — keep language broad; do not name specific institutions unless later supplied by founders.

## Visual treatment

- Reuse existing CSS variables / palette; no new brand colors.
- No cards for About or News (no border/shadow/radius containers unless required for focus/accessibility).
- News items separated by light dividers or spacing only.
- Preserve accessible focus styles, semantic headings, and meaningful link text.
- Responsive: single column stacking; readable line length for headline and news list.
- Remove unused homepage CSS for initiative/info cards only when those selectors are no longer referenced; avoid a broad theme rewrite.

## Removals

- Delete `whitepaper.html`.
- Remove whitepaper links from homepage and shared nav.
- Remove or stop using whitepaper-related i18n keys and any leftover initiative-card homepage keys that become unused.
- Stop linking `assets/homepage/card-*.png` and `hero-banner.png` from the homepage (files may remain untracked/unused).

## Files likely touched

- `index.html` — new structure
- `style.css` — minimal new section styles; prune dead homepage card styles if safe
- `script.js` — nav update; news fetch/render; locale re-render hook
- `i18n.js` — concise copy; remove whitepaper/homepage-dead keys; add news strings
- `news.json` — new
- `whitepaper.html` — delete

## Out of scope

- About page redesign
- CMS / backend for news
- Using `hero-banner.png` or initiative card images
- Palette / logo changes
- German locale (already removed per prior work)
- Committing or inventing real news items without founder-supplied content

## Acceptance criteria

- [ ] Homepage shows hero (headline only), About strip, and News section
- [ ] Initiative cards and whitepaper info card are gone
- [ ] `whitepaper.html` is removed and unreachable from nav/homepage
- [ ] News loads from `news.json` and respects active locale
- [ ] Empty / failed-load states do not break the page
- [ ] Copy is concise; meta description is “Zeitona. Growing change through innovation.”
- [ ] All active locales updated consistently
- [ ] Existing color palette unchanged
- [ ] Layout remains usable on mobile and desktop
- [ ] Site scripts still initialize header/footer/i18n/theme correctly

## Approach summary

**Lean strip + news list:** minimal marketing surface, JSON-maintained updates, whitepaper fully removed.
