# ZT-WEB-001 — Technology-first homepage rebrand

**Status:** Completed  
**Priority:** Critical  
**Depends on:** None

## Goal

Rewrite the homepage so Zeitona is presented as a **general technology company** rather than being tied to construction, BIM, engineering, or any other specific business vertical.

The visual identity must remain recognizably Zeitona.

## Hard constraint

**Do not change the existing color palette.**

No rebranding task in this feature authorizes changing brand colors, theme tokens, logo colors, or global palette values.

## Scope

Inspect the entire homepage and identify public-facing copy that:
- calls Zeitona a construction/BIM company;
- makes construction/BIM the primary identity of the company;
- frames technology only through a construction context;
- uses sector-specific slogans that make Zeitona appear limited to one vertical.

Rewrite that content using a technology-first positioning.

This includes, where present:
- hero title;
- hero subtitle;
- introductory copy;
- section headings;
- service/capability summaries;
- CTA copy;
- value proposition copy;
- metadata/SEO description specific to the homepage;
- translation resources associated with the homepage.

## Copy direction

The result should feel broad enough for Zeitona to work across multiple industries.

Good conceptual direction:
- technology that solves real problems;
- digital products and solutions;
- software;
- automation;
- modernization;
- systems and integrations;
- practical innovation;
- turning ideas and complex needs into technology.

Do not convert the page into generic buzzword soup.

Do not invent:
- customer counts;
- years of experience;
- offices;
- certifications;
- named products;
- industries served;
- revenue;
- partnerships;
- case studies;
- capabilities not supported by the repository or founder-provided information.

## Existing sections

Preserve the useful homepage structure unless a small layout/content adjustment is required by the new copy.

This feature is primarily a **positioning and content refactor**, not permission for a full visual redesign.

If an existing section is entirely construction/BIM-specific and cannot reasonably be generalized, refactor its content into a technology-oriented equivalent using the existing visual language.

## Localization

Update the rewritten homepage copy in every active supported locale.

Do not leave legacy construction/BIM positioning in another locale.

German cleanup itself belongs to `ZT-WEB-005`.

## Acceptance criteria

- [ ] Homepage no longer identifies Zeitona primarily as a construction or BIM company.
- [ ] The main identity is clearly technology-focused.
- [ ] Copy remains credible and does not invent unsupported claims.
- [ ] Existing brand color values remain unchanged.
- [ ] Existing logo treatment remains unchanged.
- [ ] All active locale variants of changed homepage copy are updated.
- [ ] Homepage remains responsive.
- [ ] Existing working homepage interactions remain working.
- [ ] Homepage metadata/SEO copy, if present, matches the technology-first positioning.
- [ ] Project lint/type-check/build passes using the repository's existing commands.

## Out of scope

- Changing the brand color palette.
- Replacing the logo.
- Creating a new company name.
- Creating new products or case studies.
- Redesigning the About page.
- Changing the language selector.
