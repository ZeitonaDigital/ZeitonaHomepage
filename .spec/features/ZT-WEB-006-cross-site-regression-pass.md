# ZT-WEB-006 — Cross-site consistency and regression pass

**Status:** Completed  
**Priority:** High  
**Depends on:** ZT-WEB-001, ZT-WEB-002, ZT-WEB-003, ZT-WEB-004, ZT-WEB-005

## Goal

Perform the final integration pass after the focused refactor features are implemented.

This is not a new redesign feature. It exists to catch inconsistent copy, dead navigation, localization gaps, and accidental visual regressions introduced across the previous work.

## Audit areas

### 1. Brand positioning

Search public-facing site content for legacy wording that still makes Zeitona appear specifically tied to:
- construction;
- BIM;
- architecture;
- engineering-only services;
- any other single vertical.

Do not mechanically delete every historical/technical occurrence.

Only change occurrences that conflict with the new public-facing company positioning.

Do not rewrite source-code comments, dependency names, old filenames, or legitimate historical references merely because they contain these terms.

### 2. Navigation

Verify:
- no duplicate Contact navigation remains;
- Get in touch / Entrar em contacto still opens the form;
- desktop menu works;
- mobile menu works;
- footer has no stale Contact link;
- About route works;
- locale switching does not break routing.

### 3. Team

Verify:
- Fabrício is rendered correctly;
- Diógenes is rendered correctly;
- founder photos are local/site-hosted;
- Vanessa is not rendered;
- Vanessa code/data remains preserved as required.

### 4. Localization

Verify all active remaining locales for:
- homepage;
- About page;
- main navigation;
- contact CTA;
- language selector.

Ensure German is not selectable.

Ensure English is still reachable via the US flag and Portuguese (Portugal) via the Portugal flag.

### 5. Visual identity

Compare key pages before/after if possible.

Confirm that:
- existing brand color values were not changed;
- no new brand palette was introduced;
- logo treatment is unchanged;
- new About layout still feels part of the existing website.

### 6. Responsive checks

At minimum inspect:
- narrow mobile;
- larger mobile/small tablet;
- desktop.

Focus on:
- navbar;
- flag selector;
- hero;
- About founder layout;
- large images;
- contact form trigger/dialog.

### 7. Quality gates

Run the commands already defined by the repository for as many of these as exist:
- formatter/check;
- lint;
- type-check;
- unit tests;
- integration/UI tests;
- production build.

Do not add a new testing framework solely for this pass.

## Acceptance criteria

- [ ] Public positioning is consistently technology-first.
- [ ] No accidental construction/BIM-first marketing copy remains on the affected public pages.
- [ ] Contact duplication is gone.
- [ ] Contact form trigger works.
- [ ] About page presents Fabrício and Diógenes correctly.
- [ ] Vanessa remains hidden but retained in code.
- [ ] Founder images are not loaded from LinkedIn.
- [ ] German is not selectable.
- [ ] Flag language selector works and is accessible.
- [ ] Active translations are internally consistent.
- [ ] No brand palette values were changed.
- [ ] Mobile and desktop layouts have no obvious regression.
- [ ] Production build succeeds.

## Final report

When finished, report:
1. files changed;
2. features completed;
3. any content that could not be verified from LinkedIn;
4. any founder image files still required from the user, with exact target paths;
5. commands/tests executed and their results;
6. any known remaining issue.

Do not claim completion if founder assets or required copy are still unresolved.
