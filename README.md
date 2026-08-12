# Habit tracker

A small Next.js habit tracker backed by a Hasura GraphQL API.

## Development

Use Node 24 and Yarn 1:

```bash
yarn install --frozen-lockfile
yarn dev
```

Copy `.env.example` to `.env.local` and provide the Hasura endpoint and admin secret before loading the home page:

```dotenv
HASURA_URI=https://example.hasura.app/v1/graphql
HASURA_KEY=replace-me
```
