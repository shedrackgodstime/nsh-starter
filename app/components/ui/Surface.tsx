import { type JSX, View } from "nsh";

type SurfaceProps = {
  children: JSX.Element;
  class?: string;
};

export function Surface(props: SurfaceProps) {
  return (
    <View class={`rounded-xl border border-border bg-card ${props.class ?? ""}`}>
      {props.children}
    </View>
  );
}
