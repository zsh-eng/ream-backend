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
