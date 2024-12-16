import { expect, test } from "bun:test";
import { join } from "node:path";
import { unstable_dev } from "wrangler";

const root = join("./");
test("durable-objects", async () => {
	const handler = await unstable_dev("./index.js", {
		config: "./wrangler.toml",
		experimental: {
			disableExperimentalWarning: true,
			disableDevRegistry: true,
		},
		bundle: false,
		local: true,
		logLevel: "debug",
	});
	const res = await handler.fetch("http://worker.dev", {});
	const json = await res.json();
	expect(json).toEqual({ hello: "world" });
});
