import { expect, open, test } from "nsh/test";

test("starter controls are interactive", async () => {
  const app = await open("../App.tsx", { width: 390, height: 844 });
  await app.press("role:tab[Components]");
  await app.press("Pressed 0 times");
  expect(app.texts()).toContain("Pressed 1 times");
  await app.press("Reset");
  expect(app.texts()).toContain("Pressed 0 times");

  await app.press("Switch");
  expect(app.texts()).toContain("Disabled");
  await app.type("text:Type something", "Ada");
  expect(app.texts()).toContain("Hello, Ada");
});
