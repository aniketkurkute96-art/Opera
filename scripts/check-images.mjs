import { readFileSync } from "node:fs";

const source = readFileSync(new URL("../src/lib/images.ts", import.meta.url), "utf8");
const urls = [...new Set(source.match(/https:[^"']+/g))];

const results = await Promise.all(
  urls.map(async (url) => {
    try {
      const res = await fetch(url.replace(/w=\d+/, "w=64"), { method: "HEAD" });
      return { url, status: res.status };
    } catch {
      return { url, status: "ERR" };
    }
  }),
);

for (const { url, status } of results) {
  console.log(status, url);
}
const broken = results.filter((r) => r.status !== 200);
console.log(`\n${results.length} checked, ${broken.length} broken`);
