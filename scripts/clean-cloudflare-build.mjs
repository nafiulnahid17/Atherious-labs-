import { rm } from "node:fs/promises";
// Only disposable framework output is removed; source and dependencies remain intact.
for (const directory of [".next", ".open-next"]) {
  await rm(new URL(`../${directory}/`, import.meta.url), { recursive: true, force: true });
}
