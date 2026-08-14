# Zeitona Corporate Website — Architecture

## Status

Authoritative architecture baseline for ZT-WEB-001.

## Architecture goals

The website architecture should optimize for:

- long-term maintainability;
- minimal operational complexity;
- standards-based implementation;
- excellent static-hosting compatibility;
- strong browser performance;
- straightforward accessibility;
- low dependency risk;
- easy inspection and editing by humans and coding agents.

## Technology constraints

Allowed runtime technologies:

- HTML5
- CSS3
- Vanilla JavaScript
- ES Modules
- JSON

No framework or required build step is part of the architecture.

## Runtime model

```text
Static HTTP host
    |
    +-- HTML documents
    +-- CSS stylesheets
    +-- ES Modules
    +-- JSON locale files
    +-- JSON news/content data
    +-- local images from assets/
            |
            v
        Web browser
```

There is no application server and no database in ZT-WEB-001.

## Page model

The website is a multi-page static site:

```text
index.html
company.html
collaboration.html
innovation.html
news.html
contact.html
```

This is intentional.

Do not convert the project into a client-side SPA.

Each page should contain meaningful semantic HTML and useful fallback copy. JavaScript should enhance behavior, not create an empty shell that only becomes content after execution.

## Proposed directories

```text
assets/      Existing Zeitona images. Preserve and reuse.
css/         Design tokens, global styles, layout, reusable components, page styles.
js/          ES Modules for shared behavior.
locales/     JSON translations.
data/        Static structured content such as news.
.spec/       Product and implementation intent.
```

## CSS organization

Recommended responsibilities:

### `css/reset.css`

Minimal browser normalization. Do not paste a huge third-party reset.

### `css/tokens.css`

Define custom properties for:

- palette;
- typography;
- spacing;
- borders;
- radii;
- shadows;
- transition durations;
- content widths;
- z-index layers where needed.

Theme differences should primarily be represented through CSS custom properties.

### `css/base.css`

Global element styling and typography.

### `css/layout.css`

Reusable layout primitives: containers, grids, sections, clusters, stacks, split layouts.

### `css/components.css`

Navigation, buttons/links, locale selector, theme control, founder presentation, editorial cards/teasers when actually needed, footer, news items.

### `css/pages.css`

Page-specific compositions that do not justify a separate reusable component.

Avoid overengineering CSS into dozens of tiny files.

## JavaScript modules

### `js/main.js`

Small application bootstrap. Initializes page enhancements.

### `js/navigation.js`

Responsible for small-screen navigation behavior and navigation-related accessibility.

### `js/theme.js`

Responsible for:

- reading persisted theme choice;
- falling back to OS preference;
- applying theme state;
- handling the theme control;
- persisting explicit user choice.

### `js/i18n.js`

Responsible for:

- locale detection;
- locale normalization/fallback;
- loading locale JSON;
- applying translated strings;
- updating `document.documentElement.lang`;
- persisting explicit language selection.

### `js/news.js`

Only required for structured rendering/filtering of static news data if the final design needs it.

Do not create JavaScript modules merely to imitate framework components.

## Internationalization architecture

Locale files:

```text
locales/en.json
locales/en-GB.json
locales/pt-BR.json
locales/pt-PT.json
```

### Source locale

`en` is the source/fallback language.

### Semantic keys

Example:

```json
{
  "home": {
    "hero": {
      "title": "...",
      "description": "..."
    }
  }
}
```

Avoid flat sentence-as-key dictionaries.

### DOM bindings

Simple text may use attributes such as:

```html
<h1 data-i18n="home.hero.title">Default English title</h1>
```

For attributes:

```html
<img data-i18n-attr="alt:company.founders.fabricio.imageAlt" ...>
```

The initial HTML should include useful English fallback text rather than blank nodes wherever practical.

### Fallback strategy

1. Explicit persisted locale.
2. Supported exact browser locale.
3. Closest supported language variant.
4. `en`.

Missing translation key:

1. requested locale value;
2. `en` value;
3. existing fallback DOM text;
4. never display a raw internal key as normal UI if avoidable.

## Theme architecture

Use an attribute such as:

```html
<html data-theme="dark">
```

or an equivalent class-based approach.

Theme values should be expressed with custom properties rather than duplicated component rules.

Persist manual preference with local storage.

If no preference is stored, honor `prefers-color-scheme`.

## Asset architecture

`assets/` is an existing source of Zeitona images and is part of the product input, not disposable legacy output.

Implementation must inspect it before layout work.

Rules:

- reuse founder photos from `assets/`;
- reuse other suitable existing images where they strengthen a section;
- do not hotlink replacements;
- preserve reasonable image quality and aspect ratio;
- use `object-fit` intentionally rather than destructive stretching;
- define width/height or aspect ratio to limit layout shift;
- use lazy loading for appropriate below-the-fold imagery;
- never infer founder identity purely from ordering if filenames/content do not make it clear.

If an asset genuinely cannot be mapped safely to a content role, leave that role unimplemented or use a non-image layout rather than inventing identity/context.

## Shared header/footer

Because the project is intentionally framework-free, do not introduce a framework solely for shared HTML.

Acceptable strategies include:

1. Small duplicated semantic header/footer markup kept intentionally consistent across six pages; or
2. Progressive enhancement that loads shared fragments with JavaScript while retaining meaningful fallback navigation.

Choose the simpler approach after implementation begins. SEO/accessibility-critical navigation must remain usable and understandable.

## News architecture

Initial content source:

```text
data/news.json
```

Recommended fields may include:

```json
{
  "id": "stable-slug",
  "date": "2026-08-14",
  "titleKey": "news.items.someItem.title",
  "summaryKey": "news.items.someItem.summary",
  "url": null,
  "image": "assets/..."
}
```

Only include fields actually needed.

No CMS/database integration belongs to this feature.

## Accessibility architecture

Accessibility should be structural, not patched later.

Use:

- landmarks (`header`, `nav`, `main`, `footer`);
- semantic buttons/links;
- proper form labeling if contact details include controls;
- skip link;
- heading hierarchy;
- appropriate ARIA only where native semantics are insufficient;
- reduced-motion media query;
- focus-visible styling.

## Responsive architecture

Use intrinsic layouts and fluid sizing first.

Preferred tools:

- CSS Grid;
- Flexbox;
- `min()`, `max()`, `clamp()`;
- `minmax()`;
- container-friendly content widths;
- a small number of content-driven media queries.

Avoid device-specific breakpoint lists.

## Performance architecture

Performance budget is qualitative but strict:

- no framework bundle;
- no third-party UI runtime;
- no autoplay video hero;
- minimal blocking JavaScript;
- defer module execution naturally with `type="module"`;
- use system font stack or locally available fonts unless a specific font decision is later approved;
- optimize image usage without destroying originals unnecessarily.

## SEO architecture

The static multi-page model should expose real page content to crawlers.

Each document should define its own:

- title;
- description;
- Open Graph title/description;
- language state;
- heading structure.

Do not hard-code a canonical production domain until the user supplies it.

Because translations are client-selected in the baseline architecture, do not invent locale-specific public URLs or hreflang routes without a separate decision/spec change.

## Error behavior

The site should fail gracefully.

Examples:

- If locale JSON fails, retain the English HTML fallback.
- If optional news JSON fails, show a small non-blocking empty/unavailable state rather than breaking the page.
- If local storage is unavailable, theme and locale controls should continue to work for the current session where possible.
- Missing optional image content must not destroy layout.

## No-secret architecture

Nothing in this static repository is private at runtime.

Never commit credentials, access tokens, private API keys, or secrets to HTML, JS, or JSON.

## Verification strategy

No heavy testing framework is required for the first release.

Verification should include:

- HTML structure inspection;
- keyboard navigation;
- responsive browser/devtools testing;
- locale switching for all four locale files;
- theme switching and persistence;
- missing-file/network-error behavior where relevant;
- console error check;
- link check;
- asset path check;
- accessibility audit using browser tooling when available;
- basic performance audit when available.
