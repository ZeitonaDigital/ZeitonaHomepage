# ADR 0001 — Static Framework-Free Website

## Status

Accepted.

## Context

Zeitona needs a corporate website whose primary responsibilities are presenting company information, collaboration possibilities, innovation/research activity, news, founders, and contact information in four language variants.

The repository is being rebuilt from scratch and initially contains the image assets from the previous website.

The site is intended for static hosting. At this stage, the product does not require authenticated application behavior, a server-side application, a database, or a CMS.

## Decision

Implement the website using only:

- HTML5;
- CSS3;
- Vanilla JavaScript;
- ES Modules;
- JSON.

Use a static multi-page architecture.

Do not use Angular, React, Vue, Svelte, Astro, or comparable frameworks. Do not require a bundler/transpiler/build pipeline.

Keep deployment-provider configuration outside the current scope.

## Consequences

### Positive

- minimal runtime complexity;
- very small attack surface;
- low dependency risk;
- easy static hosting;
- strong performance potential;
- straightforward source inspection;
- long-lived standards-based implementation;
- no framework migration burden.

### Trade-offs

- shared HTML may involve small amounts of duplication or carefully designed progressive enhancement;
- internationalization is implemented directly rather than through a framework library;
- content editing has no CMS interface;
- future application-like requirements may require a new architecture decision rather than being silently bolted onto this site.

## Revisit when

Reconsider this decision only if a concrete product requirement cannot reasonably be served by the static architecture, such as authenticated personalized areas, substantial server-owned workflows, or editorial requirements that justify a CMS.

Convenience alone is not sufficient reason to introduce a framework.
