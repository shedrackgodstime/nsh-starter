import { signal, Text, View } from "nsh";
import { NavPage, NavStack } from "nsh/base";
import { AppSidebar } from "@/components/AppSidebar";
import { MobileNavigation } from "@/components/MobileNavigation";
import { wideLayout } from "@/layout";
import { nav, type AppPage } from "@/navigation";
import { ComponentsPage } from "@/pages/Components";
import { HomePage } from "@/pages/Home";
import { NativeBridgePage } from "@/pages/NativeBridge";

export function AppShell() {
  const activePage = signal<AppPage>("home");
  const pageTitle = () =>
    activePage() === "home"
      ? "Home"
      : activePage() === "components"
        ? "Components"
        : "Rust bridge";

  const navigate = (page: AppPage) => activePage.set(page);

  return (
    <View
      class={`flex-1 bg-background ${wideLayout() ? "flex-row" : "flex-col"}`}
    >
      <If when={wideLayout()}>
        <AppSidebar activePage={activePage()} onNavigate={navigate} />
      </If>
      <NavStack state={nav} style={{ flex: 1 }}>
        {() => (
          <NavPage
            title={pageTitle()}
            header={
              <View class="h-14 flex-row items-center border-b border-border bg-background px-5">
                <Text class="text-sm font-semibold text-foreground">
                  {pageTitle()}
                </Text>
              </View>
            }
          >
            <View
              style={{
                flex: 1,
                display: activePage() === "home" ? "flex" : "none",
              }}
            >
              <HomePage onNavigate={navigate} />
            </View>
            <View
              style={{
                flex: 1,
                display: activePage() === "components" ? "flex" : "none",
              }}
            >
              <ComponentsPage />
            </View>
            <View
              style={{
                flex: 1,
                display: activePage() === "native" ? "flex" : "none",
              }}
            >
              <NativeBridgePage />
            </View>
          </NavPage>
        )}
      </NavStack>
      <If when={!wideLayout()}>
        <MobileNavigation activePage={activePage()} onNavigate={navigate} />
      </If>
    </View>
  );
}
