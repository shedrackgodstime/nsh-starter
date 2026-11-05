import { Scroll, Text, View } from "nsh";
import { Button } from "nsh/base";
import { Surface } from "@/components/ui/Surface";
import { wideLayout } from "@/layout";
import type { AppPage } from "@/navigation";

export function HomePage(props: { onNavigate: (page: AppPage) => void }) {
  return (
    <Scroll style={{ flex: 1 }} class="bg-background">
      <View
        class="w-full gap-7"
        style={{
          maxWidth: 880,
          alignSelf: "center",
          padding: wideLayout() ? 32 : 20,
        }}
      >
        <View class="gap-2">
          <Text class="text-xs font-semibold uppercase tracking-widest text-primary">
            NSH · APP STARTER
          </Text>
          <Text class="text-3xl font-bold tracking-tight text-foreground">
            Your app starts here.
          </Text>
          <Text class="max-w-2xl text-sm leading-6 text-muted-foreground">
            A clean cross-platform foundation. Shape the screens, components,
            and visual language around your app.
          </Text>
        </View>

        <Surface class="gap-4 border-primary/20 bg-primary/5 p-5">
          <View class="gap-1">
            <Text class="text-lg font-semibold tracking-tight text-card-foreground">
              Start with the UI
            </Text>
            <Text class="text-sm leading-6 text-muted-foreground">
              Explore reusable controls and the Rust bridge example, then
              replace this starter content with your first screen.
            </Text>
          </View>
          <View class="flex-row flex-wrap gap-3">
            <Button
              onPress={() => props.onNavigate("components")}
              class="h-11 items-center justify-center rounded-lg bg-primary px-4"
            >
              <Text class="text-sm font-semibold text-primary-foreground">
                Explore components
              </Text>
            </Button>
            <Button
              onPress={() => props.onNavigate("native")}
              class="h-11 items-center justify-center rounded-lg border border-border px-4"
            >
              <Text class="text-sm font-medium text-foreground">
                See Rust example
              </Text>
            </Button>
          </View>
        </Surface>
      </View>
    </Scroll>
  );
}
