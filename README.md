# bun-wrangler-test

A minimal reproduction repository to showcase an issue using `bun` and `wrangler` for running tests.

## Steps to reproduce

1. Install dependencies: `bun install`
2. Run tests: `bun test`
3. Attempt to change [`index.js` to `index.ts`](./index.test.ts#L7) and run tests again
