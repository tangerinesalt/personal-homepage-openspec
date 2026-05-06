# Personal Homepage OpenSpec

A small static personal homepage for Tangerine, built with Vite, TypeScript, and OpenSpec.

## Stack

- Vite static site
- TypeScript
- Plain CSS
- OpenSpec project planning in `openspec/`
- Vercel-ready production output in `dist/`

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
```

Vite writes the deployable static files to `dist/`.

## OpenSpec

The completed homepage spec lives under:

```text
openspec/specs/personal-homepage/spec.md
```

The implementation change is archived under:

```text
openspec/changes/archive/2026-05-06-build-personal-homepage/
```

Useful commands:

```bash
npx @fission-ai/openspec@latest list --specs
npx @fission-ai/openspec@latest validate --specs
```

## Deploy To Vercel

Production URL:

https://personal-homepage-openspec.vercel.app

When the repository is connected in Vercel, use the default Vite settings:

- Install Command: `npm install`
- Build Command: `npm run build`
- Output Directory: `dist`
