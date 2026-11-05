import { Scroll, signal, Text, View } from "nsh";
import { Button, Input, Switch } from "nsh/base";
import { Surface } from "@/components/ui/Surface";
import { wideLayout } from "@/layout";

export function ComponentsPage() {
  const presses = signal(0);
  const enabled = signal(true);
  const name = signal("");

  return (
    <Scroll style={{ flex: 1 }} class="bg-background">
      <View
        class="w-full gap-6"
        style={{
          maxWidth: 880,
          alignSelf: "center",
          padding: wideLayout() ? 32 : 20,
        }}
      >
        <View class="gap-2">
          <Text class="text-xs font-semibold uppercase tracking-widest text-primary">
            STARTER EXAMPLES
          </Text>
          <Text class="text-3xl font-bold tracking-tight text-foreground">
            Components
          </Text>
          <Text class="text-sm leading-6 text-muted-foreground">
            NSH base controls provide behavior; this app supplies the visual
            styling.
          </Text>
        </View>

        <Surface class="gap-4 p-5">
          <View class="gap-1">
            <Text class="text-base font-semibold text-card-foreground">
              Button
            </Text>
            <Text class="text-sm text-muted-foreground">
              A controlled action with app-defined styles.
            </Text>
          </View>
          <View class="flex-row flex-wrap items-center gap-3">
            <Button
              onPress={() => presses.update((count) => count + 1)}
              class="h-10 items-center justify-center rounded-lg bg-primary px-4"
            >
              <Text class="text-sm font-medium text-primary-foreground">
                Pressed {presses()} times
              </Text>
            </Button>
            <Button
              onPress={() => presses.set(0)}
              class="h-10 items-center justify-center rounded-lg border border-border px-4"
            >
              <Text class="text-sm font-medium text-foreground">Reset</Text>
            </Button>
          </View>
        </Surface>

        <Surface class="gap-4 p-5">
          <Switch
            checked={enabled()}
            onChange={({ checked }) => enabled.set(checked)}
            trackClass="h-6 w-11 shrink-0 rounded-full bg-muted p-0.5 transition-colors checked:bg-primary"
            thumbClass="h-5 w-5 rounded-full bg-background shadow-sm transition-transform checked:translate-x-5"
            class="flex-row-reverse items-center justify-between gap-4"
          >
            <View class="flex-1 gap-1">
              <Text class="text-sm font-medium text-card-foreground">
                Switch
              </Text>
              <Text class="text-xs text-muted-foreground">
                {enabled() ? "Enabled" : "Disabled"}
              </Text>
            </View>
          </Switch>
        </Surface>

        <Surface class="gap-3 p-5">
          <Text class="text-base font-semibold text-card-foreground">
            Text input
          </Text>
          <Input
            value={name()}
            onChange={({ value }) => name.set(value)}
            placeholder="Type something"
            class="h-11 rounded-lg border border-input bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground"
          />
          <Text class="text-sm text-muted-foreground">
            {name() ? `Hello, ${name()}` : "Input state is controlled in TSX."}
          </Text>
        </Surface>
      </View>
    </Scroll>
  );
}
