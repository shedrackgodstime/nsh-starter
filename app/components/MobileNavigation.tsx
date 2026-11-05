import { safeArea, Text, View } from "nsh";
import { Tab, Tabs } from "nsh/base";
import type { AppPage } from "@/navigation";

const pages: { page: AppPage; label: string }[] = [
  { page: "home", label: "Home" },
  { page: "components", label: "Components" },
  { page: "native", label: "Rust" },
];

export function MobileNavigation(props: {
  activePage: AppPage;
  onNavigate: (page: AppPage) => void;
}) {
  return (
    <View
      class="border-t border-border bg-background px-2"
      style={{ paddingBottom: safeArea().bottom }}
    >
      <Tabs
        class="flex-row"
        indicatorClass="absolute top-0 h-0.5 bg-primary"
        style={{ height: 64 }}
      >
        {pages.map(({ page, label }) => {
          const selected = props.activePage === page;
          return (
            <Tab
              selected={selected}
              onPress={() => props.onNavigate(page)}
              class="min-h-11 flex-1 flex-col items-center justify-center gap-1"
              accessibilityLabel={label}
            >
              <View
                class={`h-1.5 w-1.5 rounded-full ${selected ? "bg-primary" : "bg-muted-foreground"}`}
              />
              <Text
                class={`text-xs ${selected ? "font-semibold text-foreground" : "text-muted-foreground"}`}
              >
                {label}
              </Text>
            </Tab>
          );
        })}
      </Tabs>
    </View>
  );
}
