# ZT-WEB-002 — Consolidate Contact navigation and CTA

**Status:** Completed  
**Priority:** High  
**Depends on:** ZT-WEB-001

## Goal

Remove the duplicated contact experience.

The current site has both:
- a `Contato` / Contact menu or navigation destination; and
- an `Entrar em contacto` / Get in touch action that opens a form.

The desired experience is to keep the form-opening contact action and remove the redundant Contact menu/section.

## Desired behavior

The `Entrar em contacto` / `Get in touch` action remains the canonical contact entry point.

When activated, it should continue to open the existing contact form using the project's existing interaction pattern (modal, drawer, dialog, or equivalent).

Remove the redundant Contact navigation item and the redundant Contact page/section from the user-facing navigation flow.

## Implementation notes

Before deleting anything, inspect:
- navbar/menu definitions;
- routes;
- homepage/landing-page anchors;
- footer links;
- mobile menu;
- localization keys;
- contact section component;
- contact form component;
- external/internal links that target the old Contact section/route.

Prefer removing only the obsolete navigation/render path.

Do **not** remove the working form merely because its component lives inside a currently named Contact section.

If the form is coupled to the removed section, extract/reuse it cleanly so the CTA continues to work.

If a dedicated contact route exists and is referenced externally, avoid creating an unnecessary broken URL:
- either preserve a safe redirect to the homepage/contact form behavior if the framework makes this straightforward; or
- preserve the route in a lightweight compatibility state if removing it would obviously break existing navigation.

Do not invent a new contact workflow.

## Color constraint

The contact trigger and form must continue to use the existing palette and design system.

## Localization

Update or remove obsolete navigation translation keys where appropriate.

Do not leave dead visible labels in any active locale.

## Acceptance criteria

- [ ] Only one clear primary contact action remains in normal navigation.
- [ ] The redundant `Contato` / Contact menu item is no longer displayed.
- [ ] The redundant Contact section/page is no longer part of the normal user-facing flow.
- [ ] `Entrar em contacto` / `Get in touch` still opens the existing form.
- [ ] Contact form submission behavior is unchanged unless required to fix a regression.
- [ ] Desktop navigation works.
- [ ] Mobile navigation works.
- [ ] Footer contains no broken Contact link.
- [ ] No obvious dead anchor/route is left behind.
- [ ] Existing palette is unchanged.
- [ ] Project lint/type-check/build passes.

## Out of scope

- Redesigning the contact form.
- Changing backend/contact submission integrations.
- Adding CRM integrations.
- Changing brand colors.
