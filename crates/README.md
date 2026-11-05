# Rust boundary

`crates/app` is the app's NSH UI-set registration crate. Most app composition
and visual work belongs in TSX so it can iterate through NSH's development
reload.

The `Rust bridge` page demonstrates an app-owned component, module, and class.
Keep each native behavior in a focused Rust module and export it through the
crate's `#[native_module]` registration. Add Rust only when the app needs
native behavior or an API TSX cannot provide.

The root `Cargo.toml` is the Cargo workspace; `nsh.json` lists the app crate.
