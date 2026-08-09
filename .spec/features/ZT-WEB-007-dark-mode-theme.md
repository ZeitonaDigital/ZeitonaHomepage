# ZT-WEB-007 — Dark mode theme

**Status:** Completed
**Priority:** Medium
**Depends on:** ZT-WEB-001, ZT-WEB-002, ZT-WEB-003, ZT-WEB-004, ZT-WEB-005, ZT-WEB-006

## Goal

Add a complete dark mode to the Zeitona website while preserving the existing light theme as the default experience.

The current light theme and existing Zeitona visual identity must remain intact.

Dark mode should feel like a deliberate dark interpretation of the existing Zeitona design rather than a separate visual identity.

---

## Core behavior

The website must support two appearance modes:

* Light
* Dark

**Light mode is always the default for users who have never explicitly selected a theme.**

Do not automatically switch first-time visitors to dark mode based on operating-system or browser `prefers-color-scheme`.

The expected behavior is:

1. New visitor → Light mode.
2. User selects Dark → Dark mode activates.
3. User revisits the site → Previously selected Dark preference is restored.
4. User switches back to Light → Light mode activates and the preference is persisted.
5. User clears site storage/preferences → Light becomes the default again.

---

## Critical existing-brand rule

The current Zeitona light-mode color palette must NOT be modified.

Do not alter existing light-theme values merely to make dark mode implementation easier.

The dark theme should be built as an additional theme layer.

Preserve:

* existing Zeitona brand colors;
* existing light backgrounds;
* existing light text colors;
* logo colors;
* existing design tokens used by the light theme.

If the project already uses CSS variables/design tokens, extend that system instead of replacing it.

---

## Dark theme direction

Dark mode should reuse the visual character of the existing Zeitona palette.

Do not create an unrelated neon/cyberpunk theme.

The dark theme should feel:

* clean;
* modern;
* professional;
* technology-focused;
* comfortable to read;
* recognizably Zeitona.

Dark surfaces should use appropriately dark neutral/background values while keeping existing Zeitona accent/brand colors where contrast permits.

You may create dark-theme-specific values for:

* page background;
* surface/card background;
* elevated surface background;
* primary text;
* secondary/muted text;
* borders;
* dividers;
* input backgrounds;
* navigation surfaces;
* modal/dialog backgrounds;
* hover states;
* active states.

Do not reinterpret the company's entire palette.

---

## Theme architecture

Before implementing anything, inspect the existing styling architecture.

Determine whether the project currently uses:

* CSS variables;
* SCSS variables;
* Tailwind;
* CSS modules;
* styled components;
* framework theme providers;
* component-library theming;
* another existing token/theme architecture.

Use the existing architecture.

Prefer a semantic theme/token approach.

For example, if appropriate to the current project:

```css
:root {
  --background: ...;
  --surface: ...;
  --text-primary: ...;
}

[data-theme="dark"] {
  --background: ...;
  --surface: ...;
  --text-primary: ...;
}
```

This is illustrative only.

Do not force this implementation if the project already has a better theming mechanism.

Avoid scattering dark-mode conditionals throughout individual components where semantic design tokens can solve the same problem.

---

## Theme selector

Add a visible theme control to the global site interface.

Prefer placement in the main header/navigation near other global controls such as the language selector.

The control may use:

* sun/moon icons;
* a two-state toggle;
* another compact pattern consistent with the existing design.

Recommended conceptual behavior:

☀️ Light
🌙 Dark

Do not use textual labels permanently if they make the navigation unnecessarily crowded, provided accessible labels are still available.

The control must work in:

* desktop navigation;
* mobile navigation.

Avoid duplicating independent theme state between desktop and mobile controls.

Both must manipulate the same global theme preference.

---

## Accessibility

The theme control must be keyboard accessible.

It must expose an accessible name describing the action or state.

Examples:

* `Switch to dark mode`
* `Switch to light mode`

or an equivalent localized label.

The control must:

* use appropriate button semantics;
* have visible keyboard focus;
* not rely exclusively on icon shape without an accessible label;
* expose its current state where appropriate.

Ensure dark mode itself preserves sufficient contrast for:

* normal text;
* headings;
* links;
* buttons;
* navigation;
* form controls;
* selected states;
* focus indicators.

Do not remove visible focus indicators in dark mode.

---

## Persistence

Persist the user's explicit theme preference using the project's existing client-preference strategy.

If no preference system exists, use a lightweight appropriate mechanism such as `localStorage`.

Example conceptual values:

* `light`
* `dark`

Do not store unnecessary user information.

Do not introduce a backend/database requirement for theme preference.

---

## Default behavior — mandatory

A missing preference must resolve to:

`light`

NOT:

`system`

and NOT:

`dark`

Do not use `prefers-color-scheme` to override the initial default.

If operating-system theme detection already exists in the project, adjust behavior so it does not override Zeitona's required light default unless there is an explicitly stored user preference.

---

## Initial render / flash prevention

Avoid an obvious flash from Light → Dark when a returning dark-mode user loads the website.

Inspect the framework and choose the smallest appropriate implementation to apply the saved theme early enough in the render lifecycle.

Possible solutions depend on architecture and may include:

* an early theme initialization script;
* root HTML attribute initialization;
* framework-supported theme initialization;
* hydration-safe state initialization.

Do not introduce excessive complexity solely to eliminate an imperceptible transition.

Avoid hydration errors.

---

## Global coverage

Dark mode must work consistently across the entire currently public website.

At minimum validate:

* homepage;
* About page;
* header/navigation;
* mobile menu;
* language flag selector;
* contact CTA;
* contact form/dialog/modal;
* founder sections;
* cards;
* buttons;
* links;
* form controls;
* footer.

Do not implement dark mode only for the page background.

All major surfaces must remain visually coherent.

---

## Homepage

Verify dark mode styling for:

* hero section;
* headings;
* body copy;
* CTAs;
* section backgrounds;
* cards/features;
* decorative elements;
* navigation;
* footer.

Preserve the technology-first copy introduced in previous features.

Do not change homepage content as part of this feature.

---

## About page

Verify the redesigned About page carefully.

Dark mode must work with:

* larger founder images;
* founder profile sections;
* text blocks;
* cards/surfaces;
* section transitions;
* headings;
* links.

Do not modify founder biographies.

Do not modify Vanessa visibility.

Vanessa must remain hidden but preserved in code.

---

## Founder images

Do not recolor, invert, filter, or otherwise modify founder photographs for dark mode.

Fabrício and Diógenes must continue using the local/site-hosted assets introduced previously.

Dark mode may alter only the surrounding presentation such as:

* border;
* card/surface;
* shadow;
* spacing.

Do not reintroduce LinkedIn runtime image URLs.

---

## Logo

Inspect the current Zeitona logo before changing anything.

Prefer using the existing logo unchanged if it remains legible in dark mode.

If the repository already contains an official alternative logo specifically intended for dark backgrounds, it may be used.

Do NOT:

* invent a new logo;
* recolor the logo arbitrarily;
* generate a new logo;
* invert the logo through CSS unless clearly appropriate and consistent with the existing brand assets.

If the existing logo is unreadable on dark surfaces and no official alternative exists, adapt the surrounding header/surface treatment instead of changing the logo itself.

---

## Language selector

The flag language selector introduced in ZT-WEB-005 must continue working in both themes.

Verify:

* flag visibility;
* active-state visibility;
* focus state;
* dropdown/popover surfaces if present;
* accessibility labels.

Do not alter locale behavior.

Do not reintroduce German.

---

## Contact form

Verify the existing contact form in dark mode.

Check:

* input backgrounds;
* input text;
* placeholders;
* labels;
* borders;
* validation messages;
* buttons;
* modal/dialog surfaces;
* close button;
* focus states.

Do not change form submission behavior or backend integration.

---

## Theme transitions

A subtle theme transition may be used if consistent with the existing site.

If used, keep it short and restrained.

Do not create long animated transitions across the entire page.

Respect `prefers-reduced-motion` if meaningful animations are introduced.

Theme switching should feel immediate.

---

## Localization

If the theme selector exposes visible or accessible text, add translation keys using the existing localization system.

Examples conceptually:

* Light mode
* Dark mode
* Switch to light mode
* Switch to dark mode

Provide these strings for every active supported locale.

Do not add German translations.

Do not introduce a new language.

---

## Responsive behavior

Verify the selector and theme across:

* narrow mobile;
* normal mobile;
* tablet;
* desktop.

The theme selector must not cause:

* navigation overflow;
* collisions with the flag selector;
* header wrapping regressions;
* inaccessible mobile menu controls.

---

## Out of scope

Do NOT:

* redesign the light theme;
* change the Zeitona color palette;
* change company copy;
* modify founder biographies;
* modify contact behavior;
* add new languages;
* restore German;
* re-enable Vanessa;
* change founder images;
* create automatic time-based themes;
* add multiple custom themes;
* add a user-account preference backend;
* add a `system` theme option.

Only Light and Dark are required.

---

## Validation

After implementation:

1. Run the repository's formatter/check.
2. Run lint.
3. Run type-checking.
4. Run relevant tests.
5. Run the production build.

Then manually or automatically verify:

### Default behavior

* [ ] Clear stored theme preference.
* [ ] Reload website.
* [ ] Site starts in Light mode.

### Dark preference

* [ ] Switch to Dark.
* [ ] Reload website.
* [ ] Dark mode remains active.

### Light preference

* [ ] Switch back to Light.
* [ ] Reload website.
* [ ] Light mode remains active.

### OS preference

If possible:

* [ ] Set OS/browser to prefer dark.
* [ ] Clear Zeitona's stored theme preference.
* [ ] Reload.
* [ ] Zeitona still defaults to Light.

### Pages

Check both Light and Dark on:

* [ ] Homepage.
* [ ] About page.
* [ ] Header/navigation.
* [ ] Mobile navigation.
* [ ] Flag selector.
* [ ] Contact form.
* [ ] Footer.

### Accessibility

* [ ] Theme control works by keyboard.
* [ ] Theme control has an accessible name.
* [ ] Focus states remain visible.
* [ ] Text remains readable in Dark mode.
* [ ] Buttons remain readable.
* [ ] Form controls remain readable.

### Regression

* [ ] Existing light-theme colors remain unchanged.
* [ ] German remains removed.
* [ ] Flag language selector still works.
* [ ] Contact CTA still works.
* [ ] Fabrício and Diógenes still use local images.
* [ ] Vanessa remains hidden but preserved.
* [ ] No unrelated public copy changed.
* [ ] No obvious horizontal overflow exists.

---

## Acceptance criteria

* [ ] Dark mode is implemented across the public site.
* [ ] Light mode remains the default.
* [ ] OS dark-mode preference does not override Zeitona's Light default.
* [ ] Explicit user selection persists between visits.
* [ ] Returning Dark users do not experience an obvious Light → Dark flash.
* [ ] Existing Light palette remains unchanged.
* [ ] Dark mode is derived coherently from Zeitona's existing visual identity.
* [ ] Theme toggle works on desktop.
* [ ] Theme toggle works on mobile.
* [ ] Theme toggle is accessible.
* [ ] Homepage works in both themes.
* [ ] About page works in both themes.
* [ ] Contact form works in both themes.
* [ ] Flag selector works in both themes.
* [ ] Founder images remain local/site-hosted.
* [ ] Vanessa remains hidden.
* [ ] Active locales contain necessary theme-control translations.
* [ ] German is not reintroduced.
* [ ] Production build succeeds.

---

## Final report

When implementation is finished, report:

1. theme architecture used;
2. files modified;
3. where dark-theme tokens/styles were added;
4. where user preference is stored;
5. how Light-default behavior is enforced;
6. how initial Dark restoration avoids theme flashing;
7. where the theme selector was added;
8. translations added;
9. pages/components validated;
10. formatter/lint/type-check/test/build results;
11. any unresolved issue.

If every acceptance criterion is satisfied, update:

`Status: Pending`

to:

`Status: Completed`

Do not create or begin another feature without explicit user instruction.
