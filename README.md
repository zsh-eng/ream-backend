```txt
npm install
npm run dev
```

```txt
npm run deploy
```

[For generating/synchronizing types based on your Worker configuration run](https://developers.cloudflare.com/workers/wrangler/commands/#types):

```txt
npm run cf-typegen
```

Pass the `CloudflareBindings` as generics when instantiation `Hono`:

```ts
// src/index.ts
const app = new Hono<{ Bindings: CloudflareBindings }>()
```

## Notes

- Follow the Drizzle guide for getting the Cloudflare env variables (this is just for database migrations and interacting with the D1 database).
- See [this link](https://orm.drizzle.team/docs/get-started/d1-new) for info.

- Follow this guide for setting up Cloudflare Workers with Better Auth [better-auth-cloudflare](https://github.com/zpg6/better-auth-cloudflare?tab=readme-ov-file#quick-start-with-cli)

Applying migrations locally

```shell
bunx wrangler d1 migrations apply REAM_BACKEND_DB --local
```

Checking that the tables exist:

```shell
bunx wrangler d1 execute REAM_BACKEND_DB --local --command "SELECT name FROM sqlite_master WHERE type='table';"
```
