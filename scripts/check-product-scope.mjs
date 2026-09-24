import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const files = [
  "src/lib/navigation.ts",
  "src/components/layout/primary-navigation.tsx",
  "src/components/layout/site-footer.tsx",
  "src/components/homepage.tsx",
  "src/data/homepage.ts",
  "src/data/organization.ts",
];

const source = (await Promise.all(files.map((file) => readFile(file, "utf8")))).join("\n");

for (const label of ["About Us", "Our Program", "Event", "Articles", "Contact", "Donate"]) {
  assert.match(source, new RegExp(label.replaceAll(" ", "\\s+")), `missing active destination: ${label}`);
}

for (const removed of ["Get Help", "Our Research", "Research collaboration", "Partner/Sponsor", "/get-help/"]) {
  assert.doesNotMatch(source, new RegExp(removed.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")), `removed scope remains: ${removed}`);
}

for (const confirmedDonationValue of ["accountNumber", "Bank Mandiri", "1450010622971"]) {
  assert.match(source, new RegExp(confirmedDonationValue), `confirmed donation detail is missing: ${confirmedDonationValue}`);
}

for (const confirmedValue of [
  "Suryani Institute for Mental Health (SIMH)",
  "Jl. Gandapura No. 30",
  "Monday",
  "Sunday",
  "TBD",
]) {
  assert.match(source, new RegExp(confirmedValue.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")), `confirmed organization value is missing: ${confirmedValue}`);
}

console.log("Product scope check passed.");
