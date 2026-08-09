# AGENTS.md — Zeitona Website Refactor

## Mission

Refactor the existing Zeitona website without replacing the project architecture or visual identity.

The website must present **Zeitona as a technology company**, not as a company tied specifically to construction, BIM, engineering, or any other single vertical.

Work incrementally through the feature specifications in `.spec/features/`.

---

## Non-negotiable rule: preserve the color palette

**The existing Zeitona color palette is immutable for this refactor.**

Do not:
- replace the current brand colors;
- introduce a new brand palette;
- reinterpret the visual identity with different primary/secondary colors;
- change existing design tokens simply to make a new layout easier;
- perform a broad CSS/theme rewrite;
- alter the logo colors.

You may:
- reuse existing palette colors in different proportions;
- reuse existing background/text/border tokens;
- adjust spacing, typography scale, composition, sizing, responsive behavior, and layout;
- use normal native colors inside country flag artwork/icons.

If a requested layout seems to require a new brand color, solve the problem using the current palette instead.

Before changing UI styles, identify where the current palette is defined and preserve those values.

---

## General implementation rules

1. Inspect the existing repository before modifying it.
2. Preserve the existing framework, routing strategy, component model, styling approach, package manager, and build tooling unless a feature explicitly requires otherwise.
3. Prefer focused refactors over rewrites.
4. Do not replace working dependencies merely because another library is preferred.
5. Do not change unrelated pages or behavior.
6. Reuse existing shared components where appropriate.
7. Avoid duplicating layout or localization logic.
8. Keep the site responsive.
9. Preserve accessibility:
   - semantic HTML;
   - keyboard-operable navigation and controls;
   - meaningful alt text;
   - visible focus behavior;
   - accessible labels/tooltips for flag-only language controls.
10. Do not hardcode content in a component if the project already has a translation/content abstraction for it.
11. Do not fabricate facts about Zeitona, its founders, clients, products, partnerships, locations, or history.
12. Do not invent biographies from assumptions.
13. Keep claims about Zeitona intentionally broad unless supported by content already present in the repository or supplied by the founders.

---

## New brand direction

All changed copy must position Zeitona around **technology**.

The copy may communicate themes such as:
- software and digital solutions;
- technology consulting;
- systems integration;
- modernization;
- automation;
- digital products;
- solving complex problems with technology;
- experimentation and innovation;
- building technology around real business needs.

These are positioning directions, not permission to invent products or customer claims.

Avoid positioning Zeitona as:
- a construction company;
- a BIM company;
- an architecture company;
- an engineering-only company;
- a real-estate/construction specialist;
- a company belonging to any single industry vertical.

If old copy contains construction/BIM-specific messaging, rewrite it to a technology-first equivalent while retaining only factual information that is still relevant.

---

## Copy and localization

The rebrand must remain consistent in every supported active locale.

When changing a translated text:
1. identify all active locale versions;
2. update the corresponding translation keys;
3. do not leave the old construction/BIM positioning in another language;
4. preserve the project's existing translation conventions.

German is being removed by feature specification.

English remains supported and must be represented by the **United States flag** in the new language selector.

Portuguese from Portugal (`pt-PT`, or the project's equivalent locale key) remains supported and must be represented by the **Portugal flag**.

If Portuguese from Brazil is already supported, keep it and represent it with the **Brazil flag**.

Preserve other existing non-German locales unless a feature explicitly says otherwise.

---

## Team/profile assets

Founder profile photos used by the website must be **hosted by the Zeitona site/project**.

Do not use a LinkedIn CDN URL as the runtime `src` for founder images.

Public LinkedIn profiles supplied for source/reference:

- Diógenes: https://www.linkedin.com/in/diogenesvazmelo/
- Fabrício: https://www.linkedin.com/in/fabriciohgalvaoliveira/

If a stable, legitimate local copy of a suitable profile image cannot be obtained automatically:
1. determine the project's normal local/static asset directory;
2. create a clear team/founders subdirectory if needed;
3. tell the user which exact filenames and paths are required;
4. keep the UI implementation ready to consume those local files;
5. do not substitute a remote LinkedIn image URL.

Do not fabricate LinkedIn-derived biography content when LinkedIn cannot be read. Ask for the missing text or use only verifiable content already present in the repository.

---

## Vanessa

Vanessa is not part of the team presentation for this phase.

Her existing implementation must **not be deleted**.

Hide her from the rendered About/team page while leaving the relevant page-level code visibly retained and commented out (or the closest safe equivalent for the framework) so it can be restored later.

Do not remove her reusable component or profile data unless removal is required to make the project compile; if compilation requires adjustment, preserve the source/data and only disable the render path.

Add a short code comment explaining that the profile is intentionally hidden for the current phase.

---

## Feature execution

Feature files are stored in:

`.spec/features/`

Implement them in numeric order unless repository realities require a dependency to be handled first.

For each feature:
1. read the complete feature file;
2. inspect the relevant existing code;
3. make the smallest coherent implementation;
4. run the project's available lint/type-check/test/build commands;
5. verify responsive behavior where UI is affected;
6. verify all active locales where copy/navigation is affected;
7. do not mark the work as complete while acceptance criteria are knowingly failing.

If an automatic external fetch is blocked, do not silently substitute invented data. Follow the fallback written in the feature.

---

## Definition of done

The refactor is complete only when:

- the existing color palette is preserved;
- Zeitona is presented as a general technology company;
- construction/BIM-specific positioning is removed from the affected public-facing copy;
- Contact duplication is removed as specified;
- the About page is redesigned and expanded;
- Vanessa is hidden but retained in code;
- Fabrício and Diógenes use site-hosted profile images;
- German is removed;
- the language selector uses flags;
- active translations remain consistent;
- the project builds successfully;
- there are no obvious responsive regressions;
- no runtime founder image depends on a LinkedIn URL.
