import { computed, platform, windowSize } from "nsh";

export const wideLayout = computed(
  () => windowSize().width >= (platform.desktop ? 760 : 900),
);
