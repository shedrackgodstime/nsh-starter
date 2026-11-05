import { signal, Text, View } from "nsh";
import { Badge, Counter, Format } from "nsh-starter/native";
import { Surface } from "@/components/ui/Surface";
import { wideLayout } from "@/layout";

export function NativeBridgePage() {
  const counter = new Counter();
  const count = signal(counter.count);

  return (
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
          OPTIONAL RUST INTEGRATION
        </Text>
        <Text class="text-3xl font-bold tracking-tight text-foreground">
          Native bridge
        </Text>
        <Text class="text-sm leading-6 text-muted-foreground">
          A Rust component, module, and class exported from the app crate.
        </Text>
      </View>

      <Surface class="items-start gap-4 p-5">
        <Text class="text-base font-semibold text-card-foreground">
          Counter state lives in Rust
        </Text>
        <Text class="text-sm text-muted-foreground">
          {count() ? `Pressed ${Format.times(count())}` : "Not pressed yet"}
        </Text>
        <Badge
          label="Increment in Rust"
          onPress={() => count.set(counter.increment())}
        />
      </Surface>
    </View>
  );
}
