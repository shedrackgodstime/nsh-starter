# NSH Starter

A reusable starting point for cross-platform apps built with **NSH 0.4.0**.
It includes a responsive application shell, a small component playground,
feature-organized headless tests, and an example Rust UI-set crate.

The starter is intentionally generic. Replace its sample screens and app
identity with your own; keep Rust focused on native components, modules, and
platform integration.

## Structure

```text
App.tsx                   Small NSH mount entrypoint
app/
  App.tsx                 App component and composition
  AppShell.tsx             Responsive shell and page navigation
  components/              Shell and shared UI components
  pages/                   Home, components, and Rust bridge examples
  layout.ts                Responsive layout decisions
  navigation.ts            Page types and NSH navigation state
  theme/                   Theme guidance
crates/app/                Rust UI-set exports, one file per native feature
scripts/                   Android Cargo/bindgen compatibility wrapper
tests/                     Feature-focused NSH headless tests
Makefile                   Run, build, install, and verification commands
```

## Start using it

1. Copy or clone this repository as a new project.
2. Update the app name and unique application ID in `nsh.json`.
3. Update the Cargo package name in `crates/app/Cargo.toml` and the Rust
   module specifier in `crates/app/src/lib.rs`. Keep that specifier aligned
   with the TSX imports in `app/pages/NativeBridge.tsx`.
4. Run `make verify`, then start a host:

```sh
make run-web
# or
make run-desktop
# or
make run-android
```

`dev.nsh.starter` is a placeholder ID. Set a unique ID before installing
alongside other apps.

## Commands

Run `make help` for all targets.

```sh
make run-web
make run-desktop
make run-android

make build-android
make install-android
make build-linux
make build-windows
make build-web

make verify
make clean
```

Android settings can be overridden with `ANDROID_HOME`,
`ANDROID_NDK_VERSION`, `ANDROID_NDK_HOME`, and `ANDROID_API_LEVEL`. The Makefile
defaults to NDK r30; change the version to one installed in your SDK. The
wrapper supplies the Android API define expected by bindgen.

## Conventions

- Keep root `App.tsx` as the small NSH mount entrypoint. Compose the app in
  `app/App.tsx`; keep shell/navigation in `app/AppShell.tsx`.
- Put screens in `app/pages/`, reusable visual patterns in
  `app/components/ui/`, and responsive decisions in `app/layout.ts`.
- NSH `nsh/base` controls own interaction and accessibility. Style them from
  TSX; see `app/pages/Components.tsx` for examples.
- Keep headless tests under `tests/`, grouped by feature. `nsh test` discovers
  `*.test.tsx` files recursively.
- TSX edits are handled by NSH's development reload. Rust code belongs in
  `crates/app` only when native behavior is needed; the Rust Bridge page is an
  example, not a requirement for every app.
- Use semantic theme tokens and add a custom palette only when the app has a
  deliberate visual direction.
