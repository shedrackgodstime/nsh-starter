import { Text, View } from "nsh";
import { Button } from "nsh/base";
import type { AppPage } from "@/navigation";

function NavigationButton(props: {
  label: string;
  selected: boolean;
  onPress: () => void;
}) {
  return (
    <Button
      selected={props.selected}
      onPress={props.onPress}
      class={`h-10 flex-row items-center gap-3 rounded-md px-3 text-left hover:bg-sidebar-accent ${props.selected ? "bg-sidebar-accent" : ""}`}
      style={{ justifyContent: "flex-start" }}
    >
      <View
        class={`h-2 w-2 rounded-full ${props.selected ? "bg-primary" : "bg-muted-foreground"}`}
      />
      <Text
        class={`text-sm ${props.selected ? "font-medium text-sidebar-accent-foreground" : "text-muted-foreground"}`}
      >
        {props.label}
      </Text>
    </Button>
  );
}

export function AppSidebar(props: {
  activePage: AppPage;
  onNavigate: (page: AppPage) => void;
}) {
  return (
    <View class="w-60 flex-col border-r border-sidebar-border bg-sidebar">
      <View class="h-20 flex-row items-center gap-3 px-5">
        <View class="h-9 w-9 items-center justify-center rounded-lg bg-primary">
          <Text class="text-sm font-bold text-primary-foreground">N</Text>
        </View>
        <View class="gap-0.5">
          <Text class="text-sm font-semibold text-sidebar-foreground">
            NSH Starter
          </Text>
          <Text class="text-xs text-muted-foreground">Your app foundation</Text>
        </View>
      </View>
      <View class="gap-2 px-3 pt-5">
        <Text class="px-3 text-xs font-semibold tracking-wide text-muted-foreground">
          WORKSPACE
        </Text>
        <NavigationButton
          label="Home"
          selected={props.activePage === "home"}
          onPress={() => props.onNavigate("home")}
        />
        <NavigationButton
          label="Components"
          selected={props.activePage === "components"}
          onPress={() => props.onNavigate("components")}
        />
        <NavigationButton
          label="Rust bridge"
          selected={props.activePage === "native"}
          onPress={() => props.onNavigate("native")}
        />
      </View>
      <View style={{ flex: 1 }} />
      <View class="border-t border-sidebar-border px-5 py-4">
        <Text class="text-xs text-muted-foreground">NSH 0.4.0</Text>
      </View>
    </View>
  );
}
