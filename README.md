# Starter
Template project including:
- Next
- Docker
- Zod
- Localization
  - Next Intl (Default Setup: `en` & `de`)
- UI
  - Next Themes
  - Framer Motion
  - React Icons
  - QR Code React
  - Hero UI
- DB
  - Convex
- Auth
  - Clerk
- CI & Test
  - GitHub
  - Cypress

## Setup
- [ ] install dependencies
  - run `bun install`
- [ ] replace `ghcr.io/seprog/starter:latest` with according GitHub Container Registry image
  - [Compose File](/docker-compose.yaml)
- [ ] (optional / recommended) replace `starter` and `Starter` occurrences with according Project / Repository name
  - [Compose File](/docker-compose.yaml)
  - [Locale File (en)](/locales/en.json)
  - [Locale File (de)](/locales/de.json)
  - [Root Layout](/src/app/[locale]/layout.tsx)
  - [Readme File](/README.md)
- [ ] (optional / recommended) customize [Favicon](/src/app/icon.svg)
- [ ] set environment variables (e.g. [.env file](/.env))
  - Convex ([Dashboard](https://dashboard.convex.dev))
    - `CONVEX_DEPLOYMENT`
    - `NEXT_PUBLIC_CONVEX_URL`
  - Clerk ([Dashboard](https://dashboard.clerk.com))
    - `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
    - `CLERK_SECRET_KEY`
    - `NEXT_PUBLIC_CLERK_FRONTEND_API_URL`
      - also needs to be set in Convex Dashboard / Project / Settings / Environment Variables

### Done
Everything is set. Happy developing.
- Sync Convex Functions
  - `bunx convex dev`
- Development
  - (Sync Convex Functions)
  - `bun run dev`
- Build Container
  - `bun run docker:build`
- Run Container
  - Build Container (ensure latest build)
  - `bun run docker:up`
  - `bun run docker:down`
    - (or `docker compose down -v` for also deleting volumes)

## TODO
ToDo's regarding this template:
- Clerk localization
- Clerk UI customization (e.g. dark theme)
- Cypress
- CI
