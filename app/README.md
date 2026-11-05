# App structure

```text
App.tsx
  └── app/App.tsx                 App component and composition
       └── app/AppShell.tsx       Responsive shell and page switching
            ├── app/pages/        Screens and native bridge example
            ├── app/components/   App-specific shell components
            │    └── ui/          Reusable visual components
            ├── app/layout.ts     Responsive layout decisions
            └── app/navigation.ts Navigation state and page types
```

- Keep root `App.tsx` as the small NSH mount entrypoint.
- Put application composition in `app/App.tsx` and shell/navigation in
  `app/AppShell.tsx`.
- Keep screens in `pages/`, app-specific shell elements in `components/`, and
  shared visual patterns in `components/ui/`.
- Let `nsh/base` own control behavior, state semantics, and accessibility; style
  those controls in TSX.
- Add Rust under `crates/app` only for native components, modules, or
  platform integration that TSX cannot provide.

The `@/` alias resolves to `app/`. Keep its mapping in `nsh.json` and
`tsconfig.json` synchronized.
