# Starter

## TODO
 - [ ] install dependencies
   - run `bun install`
 - [ ] replace `ghcr.io/seprog/starter:latest` with according GitHub Container Registry image
   - [Compose File](/docker-compose.yaml)
 - [ ] replace `starter` and `Starter` occurrences with according Project / Repository name
   - [Compose File](/docker-compose.yaml)
   - [Locale File (en)](/locales/en.json)
   - [Locale File (de)](/locales/de.json)
   - [Environment File](/.env)
   - [Root Layout](/src/app/[locale]/layout.tsx)
   - [Readme File](/README.md)
 - [ ] generate new auth secret
   - [Environment File](/.env)
 - [ ] add / remove auth provider
   - [Environment File](/.env)
   - [Auth File](/src/app/lib/auth.ts)
 - [ ] update db
   - run `bun run db:push`

### Done
Everything is set, happy developing.
 - Development
   - `bun run db:up` (ensure db is running)
   - `bun run dev`
   - `bun run docker:down` (or `docker compose down -v`)
 - Build
   - `bun run docker:build` (ensure latest build)
   - `bun run docker:up`
   - `bun run docker:down` (or `docker compose down -v`)
 - Update DB structure
   - `bun run docker:build` (ensure latest build)
   - `bun run db:push`
