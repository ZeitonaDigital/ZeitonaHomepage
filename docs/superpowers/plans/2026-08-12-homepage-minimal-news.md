# Homepage Minimal + News Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Simplify the homepage to hero + About strip + News (from `news.json`), remove the whitepaper surface, and tighten copy across all active locales.

**Architecture:** Keep the existing static HTML/CSS/JS site. Restructure `index.html` to three lean sections. Add `news.json` at the project root; homepage JS fetches it, sorts by date, and renders localized title/summary into `#news-list`, re-rendering on `zeitona:locale-changed`. Shared nav in `script.js` drops Initiatives/Whitepaper and adds News. Delete `whitepaper.html`. Preserve palette tokens in `style.css`.

**Tech Stack:** Static HTML, CSS custom properties, vanilla JS, client-side i18n (`i18n.js`). No build step / no test runner in repo — verify with Node one-liners for pure helpers and manual browser checks for UI.

**Spec:** `docs/superpowers/specs/2026-08-12-homepage-minimal-news-design.md`

## Global Constraints

- Do not change existing brand color values (`--brand-dark-green`, `--brand-olive`, `--brand-forest`, `--brand-red`, or logo colors).
- Locales to update: `en-us`, `en-gb`, `es`, `pt-pt`, `pt-br` only.
- Do not invent named universities, programs, products, or news claims.
- Hero subtitle omitted from markup.
- Page `<title>` copy key resolves to `Zeitona`; meta description to `Zeitona. Growing change through innovation.` (translated equivalents).
- Prefer empty `news.json` items + empty state over fabricated sample news.
- Leave unused homepage image assets on disk; stop referencing them.
- Vanessa / About-page work is out of scope.

## File map

| File | Responsibility |
|---|---|
| `news.json` | Source of truth for news items |
| `index.html` | Homepage structure: hero, about strip, news shell |
| `style.css` | Minimal styles for about strip + news; remove dead initiative/info card rules |
| `script.js` | Nav links; `initNews()` fetch/render; locale re-render |
| `i18n.js` | Concise homepage/nav/news strings; remove whitepaper + unused homepage card keys |
| `whitepaper.html` | Delete |

---

### Task 1: Add `news.json` and pure news helpers

**Files:**
- Create: `news.json`
- Modify: `script.js` (append helpers + `initNews` near end, before/inside `init`)

**Interfaces:**
- Consumes: `window.i18n.getCurrentLocale()`, `window.i18n.t(key)`, `zeitona:locale-changed` event
- Produces:
  - `window.ZeitonaNews.localizeField(field, locale) -> string`
  - `window.ZeitonaNews.sortItems(items) -> items` (newest first)
  - `window.ZeitonaNews.renderNewsList(container, items, locale, t) -> void`
  - `initNews()` called from `init()`

- [ ] **Step 1: Create empty news feed**

Create `news.json`:

```json
{
  "items": []
}
```

- [ ] **Step 2: Verify JSON parses**

Run:

```bash
node -e "const n=require('./news.json'); if(!Array.isArray(n.items)) process.exit(1); console.log('ok', n.items.length);"
```

Expected: `ok 0`

- [ ] **Step 3: Add pure helpers on `window.ZeitonaNews`**

Add near the top of `script.js` (after any existing top-level comments, before `function init()`):

```javascript
window.ZeitonaNews = {
    localizeField(field, locale) {
        if (!field || typeof field !== 'object') return '';
        const value = field[locale] || field['en-us'] || '';
        return typeof value === 'string' ? value : '';
    },
    sortItems(items) {
        return (items || []).slice().sort((a, b) => {
            const da = Date.parse(a && a.date) || 0;
            const db = Date.parse(b && b.date) || 0;
            return db - da;
        });
    },
    formatDate(isoDate, locale) {
        const ms = Date.parse(isoDate);
        if (!Number.isFinite(ms)) return isoDate || '';
        try {
            return new Intl.DateTimeFormat(locale || 'en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
            }).format(new Date(ms));
        } catch (_) {
            return isoDate;
        }
    },
    escapeHtml(text) {
        return String(text)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;');
    },
    renderNewsList(container, items, locale, t) {
        if (!container) return;
        const sorted = this.sortItems(items);
        if (!sorted.length) {
            container.innerHTML = `<p class="news-empty">${this.escapeHtml(t('news.empty'))}</p>`;
            return;
        }
        container.innerHTML = sorted.map((item) => {
            const title = this.escapeHtml(this.localizeField(item.title, locale));
            const summaryRaw = this.localizeField(item.summary, locale);
            const summary = summaryRaw
                ? `<p class="news-item-summary">${this.escapeHtml(summaryRaw)}</p>`
                : '';
            const dateLabel = this.escapeHtml(this.formatDate(item.date, locale));
            const url = typeof item.url === 'string' && item.url.trim() ? item.url.trim() : null;
            const titleHtml = url
                ? `<a class="news-item-title" href="${this.escapeHtml(url)}">${title}</a>`
                : `<span class="news-item-title">${title}</span>`;
            return `<article class="news-item" data-news-id="${this.escapeHtml(item.id || '')}">
                <time class="news-item-date" datetime="${this.escapeHtml(item.date || '')}">${dateLabel}</time>
                ${titleHtml}
                ${summary}
            </article>`;
        }).join('');
    }
};
```

- [ ] **Step 4: Verify helpers with Node (extract check via jsdom-free logic copy)**

Run:

```bash
node -e "
const localize=(f,l)=> (!f||typeof f!=='object')?'':(f[l]||f['en-us']||'');
const sort=(items)=>(items||[]).slice().sort((a,b)=>(Date.parse(b.date)||0)-(Date.parse(a.date)||0));
const a=sort([{date:'2024-01-01'},{date:'2026-08-12'}]);
if(a[0].date!=='2026-08-12') process.exit(1);
if(localize({ 'pt-pt':'Oi','en-us':'Hi'},'pt-pt')!=='Oi') process.exit(1);
if(localize({ 'en-us':'Hi'},'es')!=='Hi') process.exit(1);
console.log('helpers ok');
"
```

Expected: `helpers ok`

- [ ] **Step 5: Wire `initNews` inside `init()`**

Inside `init()`, after header injection and before `applyTranslations()`, add:

```javascript
    initNews();
```

And define (same file, before `init`):

```javascript
function initNews() {
    const list = document.getElementById('news-list');
    if (!list) return;

    let cachedItems = null;
    const t = (key) => (window.i18n ? window.i18n.t(key) : key);
    const locale = () => (window.i18n ? window.i18n.getCurrentLocale() : 'en-us');

    const paint = () => {
        if (cachedItems === null) return;
        window.ZeitonaNews.renderNewsList(list, cachedItems, locale(), t);
    };

    const showLoadError = () => {
        list.innerHTML = `<p class="news-empty">${window.ZeitonaNews.escapeHtml(t('news.loadError'))}</p>`;
    };

    fetch('news.json', { cache: 'no-store' })
        .then((res) => {
            if (!res.ok) throw new Error('news fetch failed');
            return res.json();
        })
        .then((data) => {
            cachedItems = Array.isArray(data && data.items) ? data.items : [];
            paint();
        })
        .catch(() => {
            cachedItems = [];
            showLoadError();
        });

    document.addEventListener('zeitona:locale-changed', paint);
}
```

Note: on fetch failure use `news.loadError`; on successful empty array use `news.empty` via `renderNewsList`.

- [ ] **Step 6: Commit**

```bash
git add news.json script.js
git commit -m "$(cat <<'EOF'
feat: add news.json feed and homepage news renderer

EOF
)"
```

---

### Task 2: Restructure homepage markup

**Files:**
- Modify: `index.html`

**Interfaces:**
- Consumes: i18n keys `page.title`, `page.description`, `hero.headline`, `aboutStrip.text`, `aboutStrip.link`, `news.heading`; `#news-list` for Task 1
- Produces: DOM ids `hero`, `about-strip`, `news`, `news-list`

- [ ] **Step 1: Replace `<main>` contents in `index.html`**

Replace the entire `<main>...</main>` block with:

```html
    <main>
        <section class="hero-banner" id="hero">
            <div class="container">
                <h1 class="hero-banner-title fade-up" data-i18n="hero.headline">
                    Growing change through innovation
                </h1>
            </div>
        </section>

        <section class="about-strip" id="about-strip" aria-label="About">
            <div class="container">
                <p class="about-strip-text fade-up">
                    <span data-i18n="aboutStrip.text">Meet the team behind Zeitona.</span>
                    <a href="about.html" class="about-strip-link" data-i18n="aboutStrip.link">About</a>
                </p>
            </div>
        </section>

        <section class="news-section" id="news" aria-labelledby="news-heading">
            <div class="container">
                <h2 id="news-heading" class="news-heading fade-up" data-i18n="news.heading">News &amp; updates</h2>
                <div id="news-list" class="news-list fade-up delay-100" aria-live="polite"></div>
            </div>
        </section>
    </main>
```

Also update `<head>` defaults:

```html
    <title data-i18n="page.title">Zeitona</title>
    <meta name="description" data-i18n-content="page.description"
        content="Zeitona. Growing change through innovation." />
```

- [ ] **Step 2: Confirm no whitepaper / initiative markup remains**

Run:

```bash
rg -n "whitepaper|initiative|info-card|info-section" index.html
```

Expected: no matches

- [ ] **Step 3: Commit**

```bash
git add index.html
git commit -m "$(cat <<'EOF'
refactor: simplify homepage to hero, about strip, and news

EOF
)"
```

---

### Task 3: Styles for About strip + News; prune dead card CSS

**Files:**
- Modify: `style.css`

**Interfaces:**
- Consumes: existing CSS variables (`--background`, `--foreground`, `--brand-dark-green`, etc.)
- Produces: `.about-strip*`, `.news-section*`, `.news-item*`, `.news-empty` rules

- [ ] **Step 1: Remove obsolete homepage card CSS**

Delete the blocks for:
- `.initiatives-section` through `.initiative-card:hover .initiative-card-link` (approx. lines 355–429)
- `.info-section` through `.info-card:hover .info-card-link` (approx. lines 431–497)
- Dark-theme overrides that only target initiative/info cards (approx. lines 1301–1320 in `[data-theme="dark"]`)

Do **not** change any `:root` or brand color token values.

- [ ] **Step 2: Add minimal About + News styles**

Insert after `.hero-banner-title` (subtitle rule may be deleted if unused):

```css
.hero-banner-title {
  font-size: clamp(2.5rem, 5.5vw, 4rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.1;
  margin-bottom: 0;
  max-width: 18ch;
}

/* About strip — text + link, no card chrome */
.about-strip {
  padding: 3rem 0;
  background-color: var(--background);
}

.about-strip-text {
  margin: 0;
  font-size: 1.125rem;
  line-height: 1.6;
  color: var(--foreground);
  max-width: 40rem;
}

.about-strip-link {
  margin-left: 0.5rem;
  color: var(--brand-dark-green);
  font-weight: 700;
  text-decoration: underline;
  text-underline-offset: 0.15em;
}

.about-strip-link:hover {
  color: var(--brand-forest);
}

/* News list */
.news-section {
  padding: 2rem 0 5rem;
  background-color: var(--background);
}

.news-heading {
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 700;
  margin: 0 0 1.75rem;
  color: var(--foreground);
}

.news-list {
  display: flex;
  flex-direction: column;
  max-width: 42rem;
}

.news-item {
  padding: 1.25rem 0;
  border-top: 1px solid rgba(1, 61, 47, 0.12);
}

.news-item:last-child {
  border-bottom: 1px solid rgba(1, 61, 47, 0.12);
}

.news-item-date {
  display: block;
  font-size: 0.85rem;
  opacity: 0.7;
  margin-bottom: 0.35rem;
}

.news-item-title {
  display: inline-block;
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--foreground);
  text-decoration: none;
}

a.news-item-title:hover {
  color: var(--brand-forest);
  text-decoration: underline;
  text-underline-offset: 0.15em;
}

.news-item-summary {
  margin: 0.5rem 0 0;
  font-size: 1rem;
  line-height: 1.6;
  opacity: 0.85;
}

.news-empty {
  margin: 0;
  font-size: 1rem;
  opacity: 0.75;
}
```

Add dark-theme companions near other `[data-theme="dark"]` rules (reuse existing dark tokens; do not invent new brand hues):

```css
[data-theme="dark"] .news-item {
  border-top-color: rgba(255, 255, 255, 0.12);
}

[data-theme="dark"] .news-item:last-child {
  border-bottom-color: rgba(255, 255, 255, 0.12);
}

[data-theme="dark"] .about-strip-link,
[data-theme="dark"] a.news-item-title:hover {
  color: var(--brand-olive);
}
```

- [ ] **Step 3: Confirm brand tokens untouched**

Run:

```bash
rg -n "--brand-dark-green:|--brand-olive:|--brand-forest:|--brand-red:" style.css
```

Expected values still:
- `#013D2F`
- `#7FA800`
- `#328217`
- `#EB0008`

- [ ] **Step 4: Commit**

```bash
git add style.css
git commit -m "$(cat <<'EOF'
style: add minimal about/news layout and remove homepage cards

EOF
)"
```

---

### Task 4: Update i18n strings (all locales)

**Files:**
- Modify: `i18n.js`

**Interfaces:**
- Consumes: existing `TRANSLATIONS` structure
- Produces: keys used by homepage/nav/news:
  - `page.title`, `page.description`
  - `nav.news`, `nav.about`, `nav.getInTouch` (keep existing about/getInTouch)
  - `hero.headline`
  - `aboutStrip.text`, `aboutStrip.link`
  - `news.heading`, `news.empty`, `news.loadError`
- Removes unused: `nav.initiatives`, `nav.whitepaper`, `page.whitepaperTitle`, `page.whitepaperDescription`, `hero.whitepaperBtn`, `initiatives.*`, `infoCards.*`, `whitepaper.*` (page block)

- [ ] **Step 1: Update `en-us` keys**

For `'en-us'`:

```javascript
page: {
    title: 'Zeitona',
    description: 'Zeitona. Growing change through innovation.',
    aboutTitle: 'About | Zeitona',
    aboutDescription: 'Meet Zeitona, a technology company focused on practical software and digital solutions.'
},
nav: {
    services: 'Services',
    news: 'News',
    about: 'About',
    getInTouch: 'Get in Touch',
    backToHomepage: '← Back to Homepage',
    openMenu: 'Open navigation',
    closeMenu: 'Close navigation'
},
hero: {
    badge: 'Technology for Real Needs',
    title: 'Turning Ideas Into',
    titleAccent: 'Practical Technology',
    description: 'Zeitona creates software and digital solutions around real business needs, turning complex challenges into clear, useful technology.',
    exploreBtn: 'Explore Our Vision',
    headline: 'Growing change through innovation'
},
aboutStrip: {
    text: 'Meet the team behind Zeitona.',
    link: 'About'
},
news: {
    heading: 'News & updates',
    empty: 'No updates yet.',
    loadError: 'Unable to load updates.'
},
```

Delete from `en-us`: `nav.initiatives`, `nav.whitepaper`, whitepaper page keys, `hero.whitepaperBtn`, `hero.subtitle`, entire `initiatives` and `infoCards` objects, and the `whitepaper: { heading, description }` block.

Keep unrelated keys used by About/modal (`about.*`, `services.*` if still referenced by `about.html`, modal strings, footer, etc.).

- [ ] **Step 2: Mirror concise translations for other locales**

Apply the same key shape to `en-gb`, `es`, `pt-pt`, `pt-br`:

| Key | en-gb | es | pt-pt | pt-br |
|---|---|---|---|---|
| `page.title` | Zeitona | Zeitona | Zeitona | Zeitona |
| `page.description` | Zeitona. Growing change through innovation. | Zeitona. Impulsando el cambio a través de la innovación. | Zeitona. A crescer a mudança através da inovação. | Zeitona. Crescendo a mudança através da inovação. |
| `nav.news` | News | Noticias | Notícias | Notícias |
| `hero.headline` | Growing change through innovation | Impulsando el cambio a través de la innovación | A crescer a mudança através da inovação | Crescendo a mudança através da inovação |
| `aboutStrip.text` | Meet the team behind Zeitona. | Conoce al equipo detrás de Zeitona. | Conheça a equipa por trás da Zeitona. | Conheça a equipe por trás da Zeitona. |
| `aboutStrip.link` | About | Acerca | Sobre | Sobre |
| `news.heading` | News & updates | Noticias y actualizaciones | Notícias e atualizações | Notícias e atualizações |
| `news.empty` | No updates yet. | Aún no hay actualizaciones. | Ainda sem atualizações. | Ainda sem atualizações. |
| `news.loadError` | Unable to load updates. | No se pudieron cargar las actualizaciones. | Não foi possível carregar as atualizações. | Não foi possível carregar as atualizações. |

- [ ] **Step 3: Grep for leftover whitepaper/initiative homepage keys**

Run:

```bash
rg -n "nav\.whitepaper|nav\.initiatives|infoCards|whitepaperTitle|initiatives\.|hero\.subtitle" i18n.js index.html script.js about.html
```

Expected: no remaining references in HTML/JS consumers. Orphan translation keys under unused `services`/`hero` legacy fields may remain if still used by `about.html` — do not delete keys still referenced there.

- [ ] **Step 4: Commit**

```bash
git add i18n.js
git commit -m "$(cat <<'EOF'
i18n: concise homepage copy and news strings across locales

EOF
)"
```

---

### Task 5: Update shared nav and delete whitepaper page

**Files:**
- Modify: `script.js` (header HTML only)
- Delete: `whitepaper.html`

**Interfaces:**
- Consumes: `nav.news` i18n key from Task 4
- Produces: nav order News → About → Get in Touch

- [ ] **Step 1: Replace nav links in header template**

In `script.js` headerHTML, change the links block to:

```html
            <div class="navbar-links" id="nav-links">
                <a href="index.html#news" data-i18n="nav.news">News</a>
                <a href="about.html" data-i18n="nav.about">About</a>
                <button type="button" class="btn btn-primary btn-sm navbar-action" onclick="openContactModal()" data-i18n="nav.getInTouch">
                    Get in Touch
                </button>
```

- [ ] **Step 2: Delete `whitepaper.html`**

```bash
git rm whitepaper.html
```

If untracked/already gone, delete the file from disk instead.

- [ ] **Step 3: Verify no remaining whitepaper routes**

Run:

```bash
rg -n "whitepaper\.html|nav\.whitepaper" .
```

Expected: matches only in docs/specs/plans (if any), not in runtime HTML/JS/CSS.

- [ ] **Step 4: Commit**

```bash
git add script.js
git commit -m "$(cat <<'EOF'
feat: replace nav whitepaper/initiatives with news; remove whitepaper page

EOF
)"
```

---

### Task 6: End-to-end verification

**Files:**
- Test: manual browser + ripgrep acceptance pass (no automated suite)

**Interfaces:**
- Consumes: all prior tasks

- [ ] **Step 1: Serve the site locally**

From repo root (pick one):

```bash
npx --yes serve -l 5173
```

or

```bash
python -m http.server 5173
```

Open `http://localhost:5173/index.html`.

- [ ] **Step 2: Visual / functional checklist**

Verify:
1. Hero shows only “Growing change through innovation” (no subtitle).
2. About strip text + About link → `about.html`.
3. News heading visible; empty state “No updates yet.”
4. Nav: News, About, Get in Touch — no Whitepaper/Initiatives.
5. `whitepaper.html` 404s.
6. Language switch updates hero, about strip, news chrome strings.
7. Light/dark theme still works; greens unchanged.
8. Mobile width (~375px): single column, readable headline, no overflow.
9. View-source / Elements: no initiative cards, no whitepaper card.

- [ ] **Step 3: Temporary feed smoke test**

Replace `news.json` briefly with:

```json
{
  "items": [
    {
      "id": "smoke-test",
      "date": "2026-08-12",
      "title": {
        "en-us": "Smoke test update",
        "en-gb": "Smoke test update",
        "es": "Actualización de prueba",
        "pt-pt": "Atualização de teste",
        "pt-br": "Atualização de teste"
      },
      "summary": {
        "en-us": "Temporary item to verify rendering.",
        "en-gb": "Temporary item to verify rendering.",
        "es": "Elemento temporal para verificar el renderizado.",
        "pt-pt": "Item temporário para verificar a renderização.",
        "pt-br": "Item temporário para verificar a renderização."
      },
      "url": null
    }
  ]
}
```

Reload homepage → item appears (date + title + summary). Switch locale → title/summary change. Then restore:

```json
{
  "items": []
}
```

- [ ] **Step 4: Final acceptance grep**

```bash
rg -n "whitepaper\.html|initiative-card|info-card" index.html script.js style.css
rg -n "--brand-dark-green: #013D2F|--brand-olive: #7FA800|--brand-forest: #328217|--brand-red: #EB0008" style.css
```

Expected: first command no runtime matches; second command finds all four tokens.

- [ ] **Step 5: Commit any leftover fixes** (only if Step 2–4 required code changes)

```bash
git add -A
git status
git commit -m "$(cat <<'EOF'
fix: address homepage minimal refresh verification findings

EOF
)"
```

If clean, skip commit.

---

## Spec coverage checklist

| Spec requirement | Task |
|---|---|
| Hero headline only + agreed copy | 2, 4 |
| About strip without cards | 2, 3 |
| News from `news.json` | 1, 2, 3 |
| Locale-aware news + empty/error states | 1, 4 |
| Remove whitepaper page + links | 2, 5 |
| Nav News instead of Initiatives/Whitepaper | 5 |
| Concise i18n all locales | 4 |
| Preserve palette | 3, 6 |
| Leave image assets unreferenced | 2 (implicit) |
| Responsive / no card chrome | 3, 6 |

## Self-review notes

- No CMS, no fabricated real news — empty feed by default.
- Helpers exposed on `window.ZeitonaNews` for clarity and Node-style verification without a test runner.
- `about.html` untouched aside from shared nav injection.
- Commit steps included for agent runners; follow repo/user commit policy if executing interactively.
