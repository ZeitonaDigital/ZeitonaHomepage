# ZT-WEB-003 — Rebrand and expand the About page

**Status:** Completed  
**Priority:** High  
**Depends on:** ZT-WEB-001

## Goal

Turn the About page into a stronger, more human technology-company page.

The page must:
- follow the new technology-first positioning;
- stop framing Zeitona around construction/BIM;
- give Fabrício and Diógenes more visual and textual presence;
- use a more spacious layout with larger founder photography;
- hide Vanessa from the rendered page while retaining her implementation in code.

## Page direction

The current page may be restructured rather than merely having its text replaced.

Aim for a layout with:
- a stronger About introduction;
- a concise explanation of what Zeitona is trying to build/do as a technology company;
- a section about the company's way of thinking/working if existing factual content supports it;
- a founder/team section with larger photography;
- richer founder summaries for Fabrício and Diógenes.

Avoid turning the page into a giant CV dump.

The About page should communicate people, perspective, and technology—not a list of every past job.

## Visual direction

You may:
- increase founder image size;
- use larger founder cards or profile sections;
- alternate image/text blocks;
- introduce more breathing room;
- improve hierarchy;
- make the page feel less like a compact directory.

You may not:
- alter the brand palette;
- introduce a new visual identity;
- replace the global site styling architecture.

The design must remain responsive on narrow/mobile screens.

## Vanessa handling — mandatory

Vanessa must not appear in the rendered About/team page for this phase.

However:
- do not delete her component;
- do not delete her profile data;
- retain the relevant page render/reference as commented-out code, or use the closest safe equivalent supported by the framework;
- add a short comment indicating the profile is intentionally hidden for the current phase.

Example intent only:

`// Vanessa profile intentionally hidden for the current phase.`

Do not create a feature flag infrastructure solely for this unless the project already uses feature flags.

## Founder content

Fabrício and Diógenes should have expanded, concise bios.

Use only:
1. facts already present in the repository; and/or
2. verifiable public professional information from the supplied LinkedIn URLs; and/or
3. information explicitly supplied by the founders.

LinkedIn references:
- Diógenes: https://www.linkedin.com/in/diogenesvazmelo/
- Fabrício: https://www.linkedin.com/in/fabriciohgalvaoliveira/

If LinkedIn is inaccessible, do not guess.

Instead:
- build the layout with existing verified content;
- clearly report which founder details still need founder-supplied copy;
- use concise placeholders only if the project cannot be left buildable otherwise, and mark them visibly in code for replacement.

Do not expose fake placeholder biography text to production.

## Biography style

Prefer roughly 1–3 short paragraphs or equivalent concise structured text per founder.

Focus on:
- professional perspective;
- relevant technology/leadership background;
- what each person brings to Zeitona.

Avoid unnecessary personal details.

## Localization

All new About-page public text must be represented in every active supported locale following the project's existing i18n strategy.

German removal is handled by `ZT-WEB-005`.

## Acceptance criteria

- [ ] About copy reflects Zeitona as a technology company.
- [ ] Construction/BIM is not presented as Zeitona's defining identity.
- [ ] Founder presentation is visually larger/more substantial than before.
- [ ] Fabrício has an expanded profile area.
- [ ] Diógenes has an expanded profile area.
- [ ] Vanessa is not rendered.
- [ ] Vanessa's existing component/data remains in the codebase.
- [ ] The About-page Vanessa render/reference is retained as commented code or the closest safe framework equivalent.
- [ ] No founder biography contains invented facts.
- [ ] Page is responsive.
- [ ] Existing color palette is unchanged.
- [ ] Active translations are complete for new/changed public text.
- [ ] Project lint/type-check/build passes.

## Out of scope

- Deleting former-founder code.
- Adding an employee directory.
- Building a CMS.
- Changing the color palette.
