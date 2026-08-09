# ZT-WEB-004 — Founder profile images as local site assets

**Status:** Completed  
**Priority:** High  
**Depends on:** ZT-WEB-003

## Goal

Replace/fix the founder photos for Fabrício and Diógenes and ensure the final website serves those images from the Zeitona project/site itself.

## Source references

Preferred public profile references:

- Diógenes: https://www.linkedin.com/in/diogenesvazmelo/
- Fabrício: https://www.linkedin.com/in/fabriciohgalvaoliveira/

These URLs are reference sources only.

**Do not use a LinkedIn CDN image URL as the site's runtime image source.**

LinkedIn may rotate or expire asset URLs.

## Required workflow

### Step 1 — inspect project asset conventions

Determine how this project stores static/local images.

Examples might include:
- `public/...`
- `src/assets/...`
- framework-specific static asset directories.

Use the project's existing convention.

Create a clear team/founder subdirectory only if needed.

### Step 2 — attempt safe acquisition

If the public profile image can be accessed legitimately and saved locally:
- obtain an appropriate public profile photo;
- save a local copy inside the project;
- use a stable, descriptive filename;
- optimize it reasonably for the web without visibly degrading it;
- commit/reference only the local asset.

Recommended conceptual names:
- `diogenes-vaz-melo.<ext>`
- `fabricio-oliveira.<ext>`

Match actual filenames/extensions to the acquired files and project conventions.

### Step 3 — mandatory fallback if acquisition fails

If LinkedIn blocks automated access, requires authentication, returns unstable URLs, or otherwise prevents reliable acquisition:

**Do not substitute a remote URL and do not scrape around the restriction.**

Stop only the image-acquisition subtask and tell the user:

1. the exact local directory into which the images should be placed;
2. the exact requested filename for Diógenes;
3. the exact requested filename for Fabrício;
4. any preferred dimensions/aspect ratio;
5. that implementation is prepared to use those files once present.

If useful, create the target directory and code references expecting those filenames, but do not leave broken production UI without an existing fallback image.

If the project already has usable existing founder photos, keep them as temporary fallback until the new files are supplied.

## Display requirements

- Use the local assets in the redesigned About page.
- Prefer a crop/layout that works with larger profile presentation.
- Avoid stretching.
- Keep faces reasonably centered if using cover cropping.
- Provide meaningful alt text using the founder's name.
- Ensure mobile presentation remains usable.

## Image treatment

You may adjust:
- size;
- crop;
- `object-fit`;
- border radius;
- surrounding spacing;
- existing-palette border/background treatment.

Do not apply visual effects that materially distort the person's appearance.

Do not recolor the brand palette.

## Optional LinkedIn content use

If the public LinkedIn profile is readable, use it only as a source of verifiable professional facts needed by `ZT-WEB-003`.

Do not copy large passages verbatim.

Do not make LinkedIn a runtime dependency.

## Acceptance criteria

- [ ] Fabrício's rendered profile photo is a local/site-hosted asset.
- [ ] Diógenes's rendered profile photo is a local/site-hosted asset.
- [ ] No founder image `src` points to LinkedIn at runtime.
- [ ] Images render cleanly at desktop and mobile sizes.
- [ ] Images are not visibly stretched.
- [ ] Alt text is present.
- [ ] If automatic acquisition failed, the user receives exact asset paths and filenames to provide.
- [ ] Existing palette remains unchanged.
- [ ] Project lint/type-check/build passes.

## Out of scope

- Editing founder appearance.
- AI-generating replacement headshots.
- Hotlinking LinkedIn images.
- Creating an external media CDN.
