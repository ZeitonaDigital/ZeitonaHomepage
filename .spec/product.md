# Zeitona Corporate Website — Product Specification

## Status

Approved baseline for the greenfield website rebuild.

## Product goal

Create a modern multilingual corporate website that presents Zeitona as a technology company capable of building, researching, collaborating, and participating in ambitious projects without reducing the company's identity to a single industry, technical discipline, product, or service line.

The website should be credible for visitors from companies, universities, research organizations, public/private institutions, innovation programmes, and potential consortium partners.

## Product principles

### 1. Broad technological identity

Zeitona is a technology company. The website should demonstrate technological competence and curiosity without positioning the company as exclusively belonging to one technical field.

Current activities may evolve. The website must therefore communicate durable capabilities and ways of working rather than locking the company into today's catalogue.

### 2. Collaboration is first-class

The website should make multi-party work feel natural.

Zeitona may work independently or with:

- companies;
- universities;
- research institutions;
- public/private institutions;
- innovation programmes;
- consortia;
- technology and engineering partners.

The visitor should understand that Zeitona can participate in joint technological development, applied research, innovation initiatives, institutional programmes, and collaborative projects.

### 3. Substance over slogans

Copy should have enough length to explain why something matters. Concision is useful, but empty brevity is not a goal.

Avoid copy whose only purpose is to sound technological, visionary, innovative, premium, disruptive, or futuristic.

A paragraph is preferable to a slogan when the paragraph communicates real meaning.

### 4. Evidence over invented social proof

Use real assets, real people, real programmes, real collaborations, real publications, and real company milestones when they exist.

Never fabricate logos, client relationships, awards, numbers, credentials, partner status, testimonials, or impact metrics to make the site look more established.

### 5. Minimal but complete

The site should be clean and restrained, but not sparse to the point that pages feel unfinished.

Richness should come from typography, composition, imagery, hierarchy, meaningful copy, and subtle visual treatment rather than decorative UI components.

## Audiences

Primary audiences include:

1. Organizations evaluating Zeitona as a technology partner.
2. Universities and researchers exploring collaboration.
3. Institutions and programme operators assessing company fit.
4. Companies assembling consortia or multi-partner initiatives.
5. Potential clients seeking a capable technology company without requiring a pre-defined catalogue fit.
6. Potential collaborators, team members, and ecosystem partners learning what Zeitona is.

## Core messages

The site should communicate, without necessarily using these exact phrases:

- Zeitona develops and applies technology.
- Zeitona is comfortable with complex, open-ended problems.
- Zeitona can work across organizational boundaries.
- Research and innovation are legitimate parts of the company's operating model.
- Collaboration with universities, institutions, consortia, and other companies is welcome.
- The company is defined by its capacity to understand and build, not by a single market label.

## Internal messaging pillars

Use these as editorial principles, not mandatory slogans:

- Technology
- Innovation
- Collaboration
- Impact

## Information architecture

### Home

Purpose: answer what Zeitona is, what kind of work it wants to do, and why a visitor should continue exploring.

Expected content:

- strong but non-cliché hero;
- concise company positioning;
- selected capability/collaboration themes;
- a section showing how Zeitona approaches complex technological work;
- a collaboration/institutional section;
- selected innovation/news signals when content exists;
- restrained contact path.

### Company

Purpose: establish identity, people, principles, and credibility.

Expected content:

- company narrative;
- how Zeitona thinks about technology and collaboration;
- both founders with existing repository photographs;
- founder names, roles, and concise biographies when verified content is available;
- relevant company milestones or institutional participation when verified.

### Collaboration

Purpose: explain how external organizations can work with Zeitona without presenting a rigid service catalogue.

Expected collaboration contexts may include:

- direct company-to-company projects;
- university/company initiatives;
- applied research;
- institutional programmes;
- consortium formation/participation;
- multi-company technological projects;
- exploratory technical work that may become a broader programme.

The page should be concrete enough to invite contact while remaining broad enough for future company evolution.

### Innovation

Purpose: give research, experimentation, institutional innovation, programmes, and technical exploration a credible home.

Potential content:

- research initiatives;
- university relationships;
- innovation programmes;
- accelerators;
- publications;
- experimental projects;
- technical studies;
- relevant institutional participation.

Only present items supported by real company information.

### News

Purpose: show current activity and provide a place for factual company updates.

Initial implementation may use static JSON data. Do not build a CMS in the first feature.

News should prioritize meaningful company developments rather than a high publication frequency.

### Contact

Purpose: provide a simple route to start a relevant conversation.

The page should make it clear that Zeitona is open to conversations with companies, universities, institutions, researchers, and consortium partners.

Do not build a backend contact form in this scope unless explicitly requested later.

## Founders

Both founders must be visibly represented with their actual photographs from `assets/`.

The website must not substitute placeholder avatars, generated portraits, or unrelated stock photographs.

Founder sections should feel editorial and human rather than like small employee directory cards.

## Languages

Required locale variants:

| Requested variant | Canonical implementation | Meaning |
|---|---|---|
| pt-pt | `pt-PT` | Portuguese — Portugal |
| pt-br | `pt-BR` | Portuguese — Brazil |
| en-en | `en` | International/default English |
| en-uk | `en-GB` | British English |

International English (`en`) is the source/fallback locale.

Translations must respect regional vocabulary and spelling where differences are meaningful.

## Visual identity

### Direction

- clean;
- minimalist;
- corporate/editorial;
- contemporary;
- technologically credible;
- warm enough to avoid sterile enterprise design;
- visually complete without unnecessary decoration.

### Palette

The visual identity should reference olive oil more than generic green.

Light mode:

- warm off-white and stone bases;
- restrained olive/golden-olive hues;
- olive-oil-inspired gradients;
- dark warm typography.

Dark mode:

- charcoal and warm dark greys;
- deep olive accents;
- muted gold/olive gradient notes;
- soft off-white text.

Avoid visual dominance by green.

### Avoid

- neon green;
- cyberpunk styling;
- excessive glassmorphism;
- startup-template gradient blobs everywhere;
- endless feature-card grids;
- oversized empty heroes used only to fill the viewport;
- decorative stock photos with no relationship to Zeitona;
- generic handshake/business-team imagery.

## Tone of voice

Preferred qualities:

- intelligent;
- precise;
- calm;
- technically literate without jargon dumping;
- confident without arrogance;
- collaborative without sounding needy;
- substantive.

Avoid:

- clichés;
- unsupported superlatives;
- "disruption" language;
- exaggerated futurism;
- fake certainty;
- filler sentences;
- claims that could be pasted unchanged onto any technology company website.

## Calls to action

CTAs should be restrained.

Do not place a button after every section.

Use contact invitations where a visitor has received enough context for the action to make sense.

## Success criteria

The website succeeds when a first-time visitor can understand that:

1. Zeitona is a technology company.
2. Zeitona is not limited to a single technical area or market.
3. Zeitona can collaborate with companies, universities, institutions, and consortia.
4. The two founders are clearly identifiable as real people behind the company.
5. The company appears serious and credible without pretending to be larger or older than the evidence supports.
6. The site feels distinct rather than like a generic SaaS template.
7. Visitors can consume the content naturally in Portugal Portuguese, Brazil Portuguese, international English, or British English.

## Out of scope for this baseline

- Firebase deployment/configuration files;
- backend services;
- authenticated areas;
- customer portals;
- CMS;
- admin panel;
- database;
- e-commerce;
- automatic LinkedIn ingestion;
- AI chatbots;
- generated marketing photography;
- elaborate animation systems;
- a fixed product/service catalogue that narrows Zeitona to a specific field.
