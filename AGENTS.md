# AGENTS.md — Zeitona Corporate Website

This repository contains the Zeitona corporate website.

The project is intentionally small, static, dependency-light, and framework-free. Keep it that way.

## 1. Non-negotiable stack

Use only:

- HTML5
- CSS3
- Vanilla JavaScript
- ES Modules
- JSON

Do **not** introduce, unless the user explicitly changes the project direction:

- Angular, React, Vue, Svelte, Astro, Next.js, Nuxt, or any other application/site framework
- TypeScript
- Tailwind, Bootstrap, Material UI, or other CSS/UI frameworks
- jQuery
- npm runtime dependencies
- bundlers, transpilers, or mandatory build steps
- CMS dependencies
- backend services
- Firebase-specific files or configuration at this stage

The website must be usable by opening/serving its static files from a normal HTTP server. JavaScript modules and JSON fetches may require HTTP rather than `file://` access.

Prefer native browser features over dependencies.

## 2. Current repository assumption

At the start of this rebuild, the repository may contain only:

```text
assets/
```

The `assets/` folder contains images from the previous Zeitona website.

Before implementing visual sections:

1. Inspect the existing files under `assets/`.
2. Reuse suitable existing images from that folder.
3. The two founder photographs must use the existing founder images from `assets/`.
4. Do not replace existing founder photographs with generated images, stock photos, avatars, illustrations, or remote image URLs.
5. Do not delete or rename existing assets merely to fit a preferred convention unless a rename is necessary and all references are updated safely.
6. Prefer existing Zeitona imagery over decorative stock imagery.
7. Do not invent claims about what an image depicts when filenames or content are ambiguous. Inspect the asset before using it.

Remote images must not be added merely for decoration. The default is to work with the repository's existing assets.

## 3. Intended repository structure

Build toward this structure:

```text
/
├── AGENTS.md
├── index.html
├── company.html
├── collaboration.html
├── innovation.html
├── news.html
├── contact.html
├── assets/
│   └── ... existing Zeitona images ...
├── css/
│   ├── reset.css
│   ├── tokens.css
│   ├── base.css
│   ├── layout.css
│   ├── components.css
│   └── pages.css
├── js/
│   ├── main.js
│   ├── navigation.js
│   ├── theme.js
│   ├── i18n.js
│   └── news.js
├── locales/
│   ├── pt-PT.json
│   ├── pt-BR.json
│   ├── en.json
│   └── en-GB.json
├── data/
│   └── news.json
└── .spec/
    ├── product.md
    ├── architecture.md
    ├── decisions/
    │   └── 0001-static-framework-free-site.md
    └── features/
        └── ZT-WEB-001-corporate-website-rebuild.md
```

Do not create empty folders just to satisfy the tree. Create files/folders when their implementation begins.

## 4. Spec-driven workflow

The `.spec/` directory is authoritative for product intent and architectural constraints.

Before implementing a meaningful change:

1. Read `.spec/product.md`.
2. Read `.spec/architecture.md`.
3. Read the applicable feature specification.
4. Inspect existing code and assets before proposing replacements.
5. Implement the smallest coherent slice that satisfies the specification.
6. Verify acceptance criteria after implementation.
7. Keep documentation aligned when implementation changes a documented behavior.

If implementation convenience conflicts with the specification, the specification wins unless the user explicitly changes it.

Do not silently expand scope.

## 5. Product identity rules

Zeitona must be presented as a **technology company** without defining the company by one specific technical field, industry, product category, or current service line.

The website should make it clear that Zeitona can work with:

- companies;
- public or private institutions;
- universities;
- research organizations;
- innovation programmes;
- consortia;
- other technology and engineering companies.

Collaboration may include joint projects, research, innovation initiatives, technological development, institutional programmes, and multi-party projects.

Do not imply that Zeitona works only in one market or discipline.

## 6. Copywriting rules

Copy should be substantive and confident without becoming inflated.

Prefer meaningful paragraphs over empty slogans. Longer copy is welcome when it adds information, context, or credibility.

Avoid filler, unsupported superlatives, vague marketing language, and clichés that could describe any technology company.

Examples of language to avoid:

- "Innovating the future"
- "Transforming ideas into reality"
- "Where innovation meets excellence"
- "Cutting-edge solutions"
- "Revolutionizing industries"
- "Empowering tomorrow"
- "Technology is in our DNA"
- "We are passionate about innovation" when no concrete meaning follows

Do not make unsupported claims such as market leadership, customer counts, impact metrics, awards, certifications, partnerships, or project outcomes.

When evidence is unavailable, write accurately and modestly rather than inventing social proof.

## 7. Visual direction

The visual language must be:

- clean;
- minimalist;
- modern;
- editorial/corporate rather than SaaS-dashboard-like;
- visually dense enough to avoid feeling unfinished or excessively empty;
- restrained rather than ornamental.

### Light theme

Use a palette inspired by olive oil rather than generic green:

- warm off-whites;
- stone and sand neutrals;
- muted olive / golden-olive accents;
- olive-oil-inspired gradients;
- dark warm text colors.

### Dark theme

The dark theme should remain related to the olive identity but must not become a green interface.

Prefer:

- charcoal;
- warm dark grey;
- deep muted olive accents;
- subdued olive/gold gradients;
- soft off-white text.

Avoid:

- pure black as the dominant surface when a warmer dark neutral is appropriate;
- neon green;
- saturated green surfaces;
- excessive gradients;
- glowing cyberpunk effects;
- glassmorphism used everywhere;
- generic card grids for every section.

### Composition

Use whitespace intentionally, but do not rely on huge empty 100vh sections.

Prefer:

- strong typography;
- editorial grids;
- alternating image/text compositions;
- subtle separators;
- restrained gradients;
- large existing images where useful;
- asymmetry when it improves hierarchy;
- responsive compositions that remain visually complete on mobile.

## 8. Founders

The website must visibly present both founders.

Each founder presentation should include, when known from project content:

- photograph from `assets/`;
- full name;
- role/title;
- concise biography;
- LinkedIn link, if a verified URL is available in repository content/specification.

Do not invent biography facts, titles, credentials, or profile URLs.

Founder images should be treated as meaningful editorial photography, not tiny circular avatars.

## 9. Internationalization

Required language variants:

- Portuguese — Portugal: `pt-PT`
- Portuguese — Brazil: `pt-BR`
- International/default English: `en`
- British English: `en-GB`

These canonical language tags implement the user's requested pt-pt, pt-br, en-en, and en-uk variants.

Rules:

- Store translatable strings in locale JSON files.
- Use semantic translation keys such as `home.hero.title`.
- Do not use full English sentences as translation keys.
- Keep structural HTML and translations separate where practical.
- Update the document `lang` attribute when language changes.
- Persist an explicit user language selection locally.
- On first visit, use browser language when a supported variant can be resolved; otherwise use the default English locale.
- `pt-*` may fall back to the closest supported Portuguese variant.
- `en-GB` should use British spelling where relevant.
- `en` is the neutral/international English source locale.
- Portuguese variants should be genuinely localized when wording differs; do not assume `pt-PT` and `pt-BR` are interchangeable.

The site should remain intelligible if a translation key is missing. Use the English source string as the final fallback rather than exposing raw keys.

## 10. Theme behavior

Provide light and dark themes.

- Respect `prefers-color-scheme` when no manual preference has been stored.
- Allow manual switching.
- Persist the explicit user choice locally.
- Avoid a flash of the wrong theme where reasonably possible without introducing a framework/build system.
- Both themes must meet accessibility contrast requirements.

## 11. Accessibility

Use semantic HTML first.

Required practices include:

- one meaningful `h1` per page;
- logical heading hierarchy;
- keyboard-accessible navigation and controls;
- visible focus states;
- suitable `alt` text for meaningful images;
- empty `alt` for purely decorative images;
- sufficient contrast;
- skip-to-content support;
- accessible language and theme selectors;
- respect for `prefers-reduced-motion`;
- no essential information conveyed only by color, hover, or animation.

Do not recreate native controls with inaccessible custom elements unless necessary.

## 12. Performance and resilience

The site should remain small and fast.

- Keep JavaScript focused on progressive enhancement, shared UI behavior, i18n, theme, and data-driven news where needed.
- Avoid large dependency payloads.
- Use responsive images where practical.
- Lazy-load below-the-fold images.
- Do not lazy-load the primary above-the-fold image if it harms perceived loading performance.
- Set image dimensions/aspect ratios to reduce layout shift.
- Avoid autoplay video backgrounds.
- Core navigation and primary page meaning should not depend on animation.

## 13. Responsive behavior

Support current desktop, tablet, and mobile viewport sizes.

Prefer fluid CSS (`clamp`, grid, flexbox, intrinsic sizing) over many hard-coded breakpoints.

Never accept horizontal page scrolling as a normal mobile behavior.

Navigation must have an intentional small-screen mode rather than merely wrapping desktop links.

## 14. Pages

The initial information architecture is:

- Home — `index.html`
- Company — `company.html`
- Collaboration — `collaboration.html`
- Innovation — `innovation.html`
- News — `news.html`
- Contact — `contact.html`

Do not add a generic "Solutions" page unless the product specification is explicitly changed.

The site should not force Zeitona into a fixed list of present-day service areas.

## 15. Shared UI

Keep repeated behavior and styling centralized.

ES Modules may be used for shared navigation, theme, locale selection, and page-level enhancements.

Avoid copy-pasting complex JS between pages.

For shared HTML fragments, choose the simplest maintainable approach compatible with a static site. Do not introduce a templating framework solely to remove a few lines of HTML duplication.

Core SEO-visible page copy should exist in the document as meaningful fallback content where practical; JavaScript should enhance or translate it rather than turning the entire site into an empty client-rendered shell.

## 16. News/content data

The initial news system may be backed by static JSON.

Do not introduce a CMS, database, admin panel, feed scraper, or social-media integration as part of ZT-WEB-001 unless the user explicitly expands the scope.

News data must separate content from rendering logic.

## 17. SEO and metadata

Each page must have:

- a unique meaningful `<title>`;
- a meaningful meta description;
- suitable Open Graph metadata;
- semantic headings;
- correct document language;
- sensible canonical metadata strategy when deployment URL is known.

Do not invent production URLs before they are provided.

## 18. Security and privacy

This is a static public website. Keep its attack surface minimal.

- Do not embed secrets, API keys, private endpoints, credentials, or tokens in JavaScript/JSON/HTML.
- Do not add trackers or third-party analytics unless explicitly requested.
- Do not add remote scripts merely for convenience.
- Treat external links safely (`rel="noopener noreferrer"` where applicable for new tabs).
- Do not build a contact-form backend in this scope.

## 19. Quality bar

Before declaring ZT-WEB-001 complete, verify at minimum:

- all six pages load;
- no broken internal links;
- no missing local assets referenced by the website;
- both founder images render from repository assets;
- all four locale files load and switching works;
- light/dark theme works and persists;
- responsive navigation is keyboard accessible;
- layouts are usable at common mobile and desktop widths;
- browser console has no uncaught errors during normal navigation;
- no framework or prohibited dependency has been introduced;
- page copy follows the positioning and anti-cliché constraints;
- no unverified claims were invented.

Use simple browser/devtools verification or lightweight static checks. Do not introduce a heavy test framework solely to test this static website.
