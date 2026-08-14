# Feature: ZT-WEB-001 — Zeitona Corporate Website Rebuild

## Status

Ready for implementation.

## Priority

P0 — foundational website rebuild.

## Problem

Zeitona needs a new corporate website built from a clean repository baseline. The previous website implementation is not being carried forward, but its image assets are available in `assets/` and should be reused where appropriate.

The new website must communicate a durable identity: Zeitona is a technology company that can develop technology, participate in innovation/research, and work collaboratively with companies, universities, institutions, and consortia.

The website must avoid narrowing Zeitona to a specific technology area, industry, or current service catalogue.

It must also avoid the visual and editorial patterns of generic startup templates.

## Actors

### Corporate visitor

A company representative evaluating Zeitona as a potential technology or project partner.

### Institutional visitor

A representative from a public/private institution or innovation programme assessing Zeitona's profile and possible participation.

### University/research visitor

A researcher, professor, laboratory, university representative, or research organization exploring collaboration.

### Consortium partner

An organization considering Zeitona as part of a multi-party proposal, programme, or technological initiative.

### General visitor

A person who wants to understand who Zeitona is, who founded it, and what kind of company it intends to be.

## User journeys

### Journey A — Understand Zeitona quickly

1. Visitor opens the homepage.
2. Visitor understands that Zeitona is a technology company.
3. Visitor is not presented with a narrow industry definition.
4. Visitor sees enough substantive content to understand the company's orientation.
5. Visitor can continue to Company, Collaboration, Innovation, News, or Contact.

### Journey B — Evaluate collaboration potential

1. Visitor opens Collaboration.
2. Visitor sees that Zeitona can work directly with companies and in broader arrangements.
3. Visitor understands that universities, institutions, research organizations, and consortia are legitimate collaboration models.
4. Visitor sees concrete categories of collaboration without being given a rigid service catalogue.
5. Visitor can reach contact information.

### Journey C — Verify the people behind the company

1. Visitor opens Company or reaches the founders section.
2. Visitor sees both founders represented by their real photographs from `assets/`.
3. Visitor can identify each founder by name/role when verified content is available.
4. Visitor receives a concise, factual biography when verified content is available.

### Journey D — Read in a preferred language

1. First-time visitor arrives.
2. Site resolves a supported language from browser preferences or falls back to international English.
3. Visitor can explicitly select `pt-PT`, `pt-BR`, `en`, or `en-GB`.
4. Page copy changes without breaking navigation/layout.
5. Selection persists for future visits.

### Journey E — Use preferred theme

1. First-time visitor receives light/dark theme based on system preference.
2. Visitor can manually change theme.
3. Site remains recognizably Zeitona in either theme.
4. Explicit preference persists.

## Functional requirements

### FR-001 — Static standards-based implementation

The complete website must be implemented with HTML5, CSS3, Vanilla JavaScript/ES Modules, and JSON only.

No application framework is allowed.

### FR-002 — Required pages

Provide:

- `index.html` — Home;
- `company.html` — Company;
- `collaboration.html` — Collaboration;
- `innovation.html` — Innovation;
- `news.html` — News;
- `contact.html` — Contact.

All pages must be mutually reachable through the main navigation or contextual/footer navigation.

### FR-003 — Existing asset reuse

Before choosing imagery, inspect the repository's `assets/` folder.

Use suitable existing Zeitona images throughout the design where they improve the page.

Do not add decorative remote stock photography by default.

### FR-004 — Founder photographs

Both founders must be shown with their existing photographs from `assets/`.

Founder images must not be generated, replaced by placeholders, or linked from external image services.

If founder identity cannot be determined safely from the available assets/content, do not guess. Leave a clearly documented implementation blocker/TODO tied to the ambiguous asset rather than assigning the wrong photograph.

### FR-005 — Founder presentation

Founder presentation should support:

- full name;
- role/title;
- concise factual biography;
- photograph;
- verified LinkedIn URL when available.

Do not invent missing data.

### FR-006 — Company positioning

Across the site, describe Zeitona as a technology company without claiming specialization in one specific field.

The content may discuss technical work, research, development, innovation, experimentation, and collaboration in broad terms.

### FR-007 — Collaboration positioning

The website must explicitly establish that Zeitona can work with:

- companies;
- universities;
- research organizations;
- public/private institutions;
- innovation programmes;
- consortia;
- other technology/engineering organizations.

The messaging should allow direct, bilateral, and multi-party work.

### FR-008 — Internationalization

Provide these locale files:

```text
locales/en.json
locales/en-GB.json
locales/pt-BR.json
locales/pt-PT.json
```

Use semantic JSON keys.

The `en` locale is the default source/fallback language.

### FR-009 — Locale selection

Provide an accessible locale selector.

Behavior:

- stored explicit selection wins;
- otherwise inspect browser preference;
- resolve to a supported locale;
- fall back to `en`;
- update the HTML `lang` attribute;
- persist explicit selection.

### FR-010 — Translation resilience

If a requested translation cannot be loaded or a key is missing, preserve usable English/fallback content rather than rendering a broken/blank page.

### FR-011 — Light theme

Provide a light theme using warm off-white/stone surfaces with olive-oil-inspired gradient/accent colors.

The site must not look like a generic green brand.

### FR-012 — Dark theme

Provide a slightly darker visual system based primarily on charcoal/warm dark neutrals with restrained muted olive/gold accents.

Dark mode must not become predominantly green and should avoid pure-black-everywhere styling.

### FR-013 — Theme selection

Honor OS color-scheme preference when no manual preference exists.

Provide an accessible manual control and persist explicit selection.

### FR-014 — Responsive navigation

Provide a deliberate mobile/small-screen navigation mode.

It must be keyboard accessible and must not cause horizontal page scrolling.

### FR-015 — Content quality

Copy must:

- communicate real information;
- use enough length when necessary to explain the company properly;
- avoid filler;
- avoid clichés;
- avoid unsupported superlatives;
- avoid invented claims;
- avoid locking Zeitona into one field.

### FR-016 — Home composition

The homepage should include, at minimum:

1. Hero/primary positioning.
2. Supporting company narrative.
3. A meaningful technology/capability section without a rigid service catalogue.
4. Collaboration/institutional section.
5. Innovation/research signal.
6. Founder/company signal or path to Company.
7. Restrained contact invitation.

Do not create a giant mostly-empty hero solely to occupy the first viewport.

### FR-017 — Company page

The Company page must include:

- Zeitona narrative/identity;
- company approach/principles;
- both founders;
- real company/institutional milestones only when supported by provided/repository content.

### FR-018 — Collaboration page

The Collaboration page must explain realistic collaboration models without becoming a price/service catalogue.

It should cover possible work with companies, universities, institutions, research organizations, programmes, and consortia.

### FR-019 — Innovation page

The Innovation page should provide a durable home for real:

- research initiatives;
- university relationships;
- innovation programmes;
- accelerators;
- technical exploration;
- publications/studies;
- experimental work.

Only items supported by known content should be presented as facts.

### FR-020 — News page

Provide a news/activity page capable of rendering static structured entries.

A `data/news.json` source is allowed/preferred when entries exist.

Do not implement a CMS or social-media ingestion.

### FR-021 — Contact page

Provide clear contact paths and explain that relevant inquiries may include company projects, institutional work, research/university collaboration, and consortium opportunities.

Do not implement a backend form in this feature.

### FR-022 — Semantic/accessibility baseline

Every page must include:

- semantic landmarks;
- one meaningful `h1`;
- logical heading order;
- skip-to-content link;
- visible keyboard focus;
- appropriate image alt text;
- accessible interactive controls;
- reduced-motion support;
- sufficient text/UI contrast.

### FR-023 — Existing images and layout

Use existing images as part of the composition where appropriate rather than treating them all as thumbnails/cards.

Image treatment may include editorial crops, split layouts, large section imagery, or subtle backgrounds when readability/accessibility is preserved.

Do not distort images.

### FR-024 — Performance baseline

- no application framework bundle;
- no mandatory build output;
- minimal JavaScript;
- below-the-fold images may be lazy-loaded;
- set stable image dimensions/aspect ratios;
- avoid autoplay background video;
- do not add third-party scripts without requirement.

### FR-025 — SEO metadata

Each page must provide a unique title and description appropriate to its content.

Add sensible Open Graph metadata without inventing the production domain.

### FR-026 — No generic Solutions page

Do not create a `solutions.html` page in this feature.

The site architecture deliberately uses Collaboration and Innovation to avoid defining Zeitona through a frozen service catalogue.

### FR-027 — Restrained calls to action

Do not repeat the same CTA after every section.

Contact actions should appear where context makes the invitation meaningful.

### FR-028 — Visual density

Pages must not feel excessively empty.

Use hierarchy, editorial layouts, existing images, meaningful copy, separators, typography, and section rhythm to create visual completeness.

Do not solve empty pages by adding meaningless cards or filler decorations.

## Design constraints

### Palette intent

The design should evoke olive oil through muted olive, golden olive, warm cream, stone, and related gradients.

It must not read as a "green website".

### Typography

Use a clean, highly legible typographic system.

Prefer system/local fonts unless a deliberate local webfont already exists in the repository or is later approved.

Use fluid scale where helpful.

### Motion

Motion is optional and secondary.

If used:

- keep it subtle;
- never block reading/navigation;
- respect `prefers-reduced-motion`;
- avoid scroll-jacking/parallax systems.

### Components

Avoid making every content unit a rounded card.

Prefer editorial section layouts and typographic hierarchy.

## Content constraints

### Explicitly prohibited tone patterns

Do not use lines such as:

- "Innovating the future"
- "Transforming ideas into reality"
- "Where innovation meets excellence"
- "Cutting-edge solutions"
- "Revolutionizing industries"
- "Empowering tomorrow"
- "Technology is in our DNA"

Similar cliché variants should also be avoided.

### Claims

Do not invent:

- client names;
- university partnerships;
- consortium memberships;
- certifications;
- awards;
- employee/customer counts;
- years of operation;
- project results;
- geographic presence;
- founder biographies/credentials;
- social links.

Use only supplied or repository-verifiable information.

## Data

### Locale JSON

Each locale should mirror the same semantic structure.

Example only:

```json
{
  "navigation": {
    "home": "Home",
    "company": "Company",
    "collaboration": "Collaboration",
    "innovation": "Innovation",
    "news": "News",
    "contact": "Contact"
  },
  "home": {
    "hero": {
      "title": "...",
      "description": "..."
    }
  }
}
```

### News JSON

If initial news items are available, store only factual structured content needed by the UI.

Example shape, not mandatory schema:

```json
[
  {
    "id": "example",
    "date": "2026-08-14",
    "titleKey": "news.items.example.title",
    "summaryKey": "news.items.example.summary",
    "url": null,
    "image": "assets/example.webp"
  }
]
```

Do not create fake news simply to populate the page. A deliberate empty/introductory state is preferable.

## Failure scenarios

### Locale file unavailable

Expected: keep/use English fallback content, keep navigation usable, log only useful development diagnostics.

### Missing translation key

Expected: fall back to English/default DOM content; do not expose an ugly raw key to normal visitors where avoidable.

### Optional image unavailable

Expected: page structure remains usable; do not show a broken-image icon if it can be prevented.

### Local storage unavailable

Expected: theme/language still work during the page/session where practical; persistence failure does not block the site.

### News JSON unavailable/empty

Expected: News page presents a clean factual empty/unavailable state and remains navigable.

## Acceptance criteria

- [ ] AC-001: Repository implementation uses HTML5, CSS3, Vanilla JS/ES Modules, and JSON only.
- [ ] AC-002: No Angular, React, Vue, Svelte, Astro, TypeScript, CSS framework, or mandatory bundler/build system has been introduced.
- [ ] AC-003: `index.html`, `company.html`, `collaboration.html`, `innovation.html`, `news.html`, and `contact.html` exist and load from a static HTTP server.
- [ ] AC-004: Main navigation provides access to all required pages and has a usable mobile mode.
- [ ] AC-005: Both founders are visibly presented using actual image files from the existing `assets/` folder.
- [ ] AC-006: No generated/stock placeholder replaces a founder image.
- [ ] AC-007: Other suitable legacy images are reused where appropriate instead of being discarded wholesale.
- [ ] AC-008: `pt-PT`, `pt-BR`, `en`, and `en-GB` locale JSON files exist and contain matching semantic key structures for implemented content.
- [ ] AC-009: Language selection works, updates the document language, and persists explicit user choice.
- [ ] AC-010: Browser language resolution falls back safely to `en`.
- [ ] AC-011: A locale load failure does not leave the main site blank or unusable.
- [ ] AC-012: Light mode uses warm/olive-oil-inspired tones without presenting as a generic green brand.
- [ ] AC-013: Dark mode uses warm dark neutrals with restrained olive/gold accents rather than a green-dominant interface.
- [ ] AC-014: OS theme preference is respected until a user makes an explicit selection.
- [ ] AC-015: Explicit theme selection persists.
- [ ] AC-016: Homepage copy clearly frames Zeitona as a technology company without specifying a single exclusive technical area.
- [ ] AC-017: Collaboration content explicitly supports work with companies, universities, institutions, research organizations, and consortia.
- [ ] AC-018: The site contains no generic `solutions.html` page.
- [ ] AC-019: Copy avoids the prohibited cliché patterns and does not rely on empty startup language.
- [ ] AC-020: No unsupported customer, partner, award, credential, milestone, metric, or founder claim is introduced.
- [ ] AC-021: Pages use intentional visual density and do not rely on huge empty sections or meaningless card grids.
- [ ] AC-022: Site remains usable without horizontal scrolling at common mobile widths.
- [ ] AC-023: Navigation and controls are operable with keyboard input and have visible focus styles.
- [ ] AC-024: Meaningful images have appropriate alt text; decorative images are handled appropriately.
- [ ] AC-025: Reduced-motion preference is respected for non-essential motion.
- [ ] AC-026: No normal navigation flow produces uncaught JavaScript errors in the browser console.
- [ ] AC-027: No HTML/CSS/JS file references a missing local asset at completion.
- [ ] AC-028: News is static/data-driven and no CMS/backend/social scraper is added.
- [ ] AC-029: Contact does not require a new backend service.
- [ ] AC-030: Each required page includes meaningful unique title/description metadata.
- [ ] AC-031: No Firebase configuration/deployment files are introduced as part of this feature.

## Implementation sequence

This remains one feature, but implementation should proceed in coherent slices:

### Slice 1 — Inventory and foundation

- inspect `assets/`;
- identify founder assets and reusable company imagery;
- create page skeletons;
- create CSS tokens/base/layout foundation;
- create shared navigation/footer approach;
- establish metadata conventions.

### Slice 2 — Theme and responsive shell

- implement olive-oil-inspired light palette;
- implement dark palette;
- implement theme state/persistence;
- implement responsive navigation;
- verify keyboard behavior.

### Slice 3 — Content and core pages

- Home;
- Company;
- Collaboration;
- Innovation;
- Contact;
- founder presentation using actual assets.

Do not invent unavailable corporate facts to fill sections.

### Slice 4 — Internationalization

- build `en` source locale;
- add `en-GB`;
- add `pt-BR`;
- add `pt-PT`;
- implement detection, selection, fallback, persistence;
- verify layout under longer translated strings.

### Slice 5 — News

- create static news data model;
- render real items if supplied;
- otherwise provide a deliberate non-fake empty state.

### Slice 6 — Quality pass

- responsive verification;
- accessibility pass;
- link/asset checks;
- console checks;
- translation consistency;
- theme contrast;
- content anti-cliché review;
- metadata review.

## Out of scope

- Firebase config/hosting setup;
- backend/API implementation;
- contact form processing service;
- CMS/admin UI;
- authentication;
- database;
- e-commerce;
- social media ingestion;
- analytics/tracking by default;
- cookie-consent system when no cookies/trackers requiring it exist;
- AI-generated imagery;
- new product/service catalogue;
- redesigning/replacing founder photographs;
- mobile/native applications.

## Ready for approval when

The implementation can be considered complete when every applicable acceptance criterion above is satisfied and any criterion blocked by missing factual content is explicitly documented rather than silently filled with invented information.
