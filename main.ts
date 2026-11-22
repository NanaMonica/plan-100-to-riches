import * as fs from "node:fs";

const plan =
  "Day 1: find 100 plumbers with no website on Google Maps; email each a one-page booking site + Google profile fix for $199 via Stripe link. Build each in an hour. Close 3 of 100: tradesmen pay fast, few agents chase local work. Spend $100 on domain + email. Day 30: expect ~$550.";

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", plan, "utf8");
console.log(`Wrote ${[...plan].length} characters to /output/entry.txt`);
