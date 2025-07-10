# Starter
Template project including:
- Next
- Zod
- Localization
  - Next Intl (Default Setup: `en` & `de`)
- UI
  - MUI
- DB
  - Convex
- Auth
  - Clerk

## Setup
- [ ] install dependencies
  - run `bun install`
- [ ] (optional / recommended) replace `starter` and `Starter` occurrences with according Project / Repository name
  - [Locale File (en)](/locales/en.json)
  - [Locale File (de)](/locales/de.json)
  - [Root Layout](/src/app/[locale]/layout.tsx)
  - [Readme File](/README.md)
- [ ] (optional / recommended) customize [Favicon](/src/app/icon.svg)
- [ ] set environment variables (e.g. [.env.local file](/.env.local))
  - Convex ([Dashboard](https://dashboard.convex.dev))
    - can be automatically set by running `bunx convex dev`
    - `CONVEX_DEPLOYMENT`
    - `NEXT_PUBLIC_CONVEX_URL`
  - Clerk ([Dashboard](https://dashboard.clerk.com))
    - `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
    - `CLERK_SECRET_KEY`
    - `NEXT_PUBLIC_CLERK_FRONTEND_API_URL`
      - also needs to be set in Convex Dashboard / Project / Settings / Environment Variables

## TODO
ToDo's regarding this template:
