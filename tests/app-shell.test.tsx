import { expect, open, test } from "nsh/test";

test("mounts the compact shell and navigates to components", async () => {
  const app = await open("../App.tsx", { width: 390, height: 844 });
  expect(app.texts()).toContain("Your app starts here.");
  expect(app.texts()).toContain("Explore components");
  expect(app.texts()).toContain("Components");

  await app.press("Explore components");
  expect(app.texts()).toContain("STARTER EXAMPLES");
  expect(app.texts()).toContain("Pressed 0 times");
  await app.press("role:tab[Home]");
  expect(app.texts()).toContain("Your app starts here.");
});

test("mounts the wide shell with desktop navigation", async () => {
  const app = await open("../App.tsx", { width: 1280, height: 800 });
  expect(app.texts()).toContain("WORKSPACE");
  expect(app.texts()).toContain("NSH 0.4.0");
  expect(app.texts()).toContain("Your app starts here.");

  await app.press("role:button[Components]");
  expect(app.texts()).toContain("STARTER EXAMPLES");
  await app.press("role:button[Home]");
  expect(app.texts()).toContain("Your app starts here.");
});
