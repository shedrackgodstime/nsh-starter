import { createNavStack } from "nsh/base";

export type AppPage = "home" | "components" | "native";

export const nav = createNavStack([{ name: "home" }]);
