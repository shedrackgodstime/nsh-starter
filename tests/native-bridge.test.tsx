import { expect, open, test } from "nsh/test";

test("uses a Rust component, class, and module", async () => {
  const app = await open("../App.tsx", { width: 390, height: 844 });
  await app.press("role:tab[Rust]");
  expect(app.texts()).toContain("Not pressed yet");
  await app.press("Increment in Rust");
  await app.press("Increment in Rust");
  expect(app.texts()).toContain("Pressed twice");
});
