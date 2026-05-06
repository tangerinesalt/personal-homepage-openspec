## Context

The repository is a new Vite TypeScript project. The page should work as a static site and be suitable for GitHub source hosting plus Vercel deployment. Because the user has not provided detailed biography content, the implementation will use "Tangerine" as the editable public identity inferred from the local account name.

## Goals / Non-Goals

**Goals:**

- Ship a complete one-page personal homepage with clear sections and responsive behavior.
- Keep the implementation lightweight and easy to edit in plain TypeScript and CSS.
- Make the project deployable through Vercel using standard Vite defaults.
- Preserve OpenSpec artifacts in the repository so future changes can follow the same workflow.

**Non-Goals:**

- Do not add a backend, CMS, analytics, authentication, or database.
- Do not configure a custom domain.
- Do not collect real contact form submissions.

## Decisions

- Use Vite with vanilla TypeScript rather than a larger framework. This keeps the build fast and avoids unnecessary abstractions for a single static page.
- Render the page from `src/main.ts` using structured data arrays for projects and focus areas. This keeps repeated content easy to edit without introducing a component framework.
- Use CSS Grid and Flexbox with explicit responsive breakpoints. This avoids layout shifts and keeps the page readable on mobile and desktop.
- Use a local raster hero image asset plus small SVG icons already suitable for static delivery. This keeps the page visual without external image dependencies.

## Risks / Trade-offs

- Placeholder identity details may need later personalization -> keep content centralized in `src/main.ts` so the owner can edit quickly.
- A static contact link cannot process messages -> use direct mail/GitHub links instead of a form.
- Vercel deployment may require account authorization -> prepare the project locally and use available connected tooling where possible.
