# ZT-WEB-005 — Localization cleanup and flag language selector

**Status:** Completed  
**Priority:** High  
**Depends on:** ZT-WEB-001, ZT-WEB-003

## Goal

Simplify language selection and remove German support from the public site.

Replace the current text-based language selector with a country-flag selector.

## German removal

Remove German (`de`, `de-DE`, or the equivalent locale used by the project) from:
- the visible language selector;
- active locale configuration;
- locale routing/configuration where applicable;
- language menus;
- language-switching state;
- German-only public translation resources if they are no longer used.

Do not leave German selectable through a hidden or stale UI path.

Clean up German translation files only after verifying they are not required by tooling/build logic.

**Do not remove English.**

The user's desired English selector is the **United States flag**.

## Flag mapping

Required mapping:

- English → 🇺🇸 United States flag
- Portuguese (Portugal) → 🇵🇹 Portugal flag

If Portuguese (Brazil) is already an active supported locale:
- Portuguese (Brazil) → 🇧🇷 Brazil flag

For any other existing non-German locale:
- preserve the locale unless explicitly deprecated elsewhere;
- map it to an appropriate flag in the same selector pattern.

Do not introduce new languages merely to add flags.

## Interaction

The selector may be:
- a compact row of flags;
- a dropdown/popover whose options are flags;
- another compact accessible control consistent with the current site.

Choose the least disruptive option based on the existing UI.

The active language must be visually identifiable without changing the brand palette.

Do not rely solely on color to indicate selection.

## Accessibility

Flag-only controls must remain understandable to screen-reader and keyboard users.

Each language option must have an accessible label such as:
- `English`
- `Português (Portugal)`
- `Português (Brasil)`

Use the project's current language for tooltips/labels where appropriate.

Do not use a flag with no accessible name.

## Flag assets

Use a stable implementation appropriate to the project:
- existing icon library if it already contains suitable flags;
- a small maintained flag package only if adding a dependency is justified;
- local SVG/assets;
- emoji only if it fits the current product quality and renders consistently enough for this project.

Prefer not to add a large dependency solely for a few flags.

Country flag colors do not count as changing the Zeitona brand palette; however, the selector's surrounding UI must still use the existing palette.

## Locale behavior

Selecting a flag must:
- switch the same locale state/router behavior the existing language selector already uses;
- preserve current page/route when feasible;
- avoid a full broken-navigation reset;
- keep persistence behavior if the current selector already persists user choice.

Do not redesign the entire localization architecture unless necessary.

## Translation consistency

After homepage/About changes:
- verify the technology-first copy exists across all active remaining locales;
- ensure removed Contact labels are not left visible;
- ensure no German item remains selectable.

## Acceptance criteria

- [ ] German is no longer available in the public language selector.
- [ ] German is removed from active locale configuration where applicable.
- [ ] English remains supported.
- [ ] US flag selects English.
- [ ] Portugal flag selects Portuguese from Portugal.
- [ ] Brazil flag selects Portuguese from Brazil if that locale already exists.
- [ ] Existing other non-German locales are preserved unless repository requirements show they are obsolete.
- [ ] Flag controls are keyboard accessible.
- [ ] Flag controls have accessible language labels.
- [ ] Current locale is visibly identifiable.
- [ ] Language switching still works on homepage and About page.
- [ ] Existing brand palette values are unchanged.
- [ ] Project lint/type-check/build passes.

## Out of scope

- Adding new translations.
- Replacing the i18n framework.
- Geo-IP-based automatic language selection.
- Changing Zeitona's brand colors.
