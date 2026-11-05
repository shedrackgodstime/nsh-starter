use nsh_base::theme;
use nsh_core::prelude::*;

/// The props of [`Badge`].
#[derive(Debug, Clone, PartialEq, Props)]
pub struct BadgeProps {
    /// The text shown inside the badge.
    pub label: Prop<SharedString>,
}

/// The events emitted by [`Badge`].
#[derive(Debug, Clone, PartialEq, Event)]
pub enum BadgeEvent {
    /// The badge was pressed.
    Press,
}

/// A small themed pressable label for demonstrating an app-owned component.
#[component]
pub fn Badge(props: BadgeProps, cx: Scope<BadgeEvent>) -> impl IntoElement {
    view()
        .px_4()
        .py_2()
        .rounded_full()
        .bg(move || theme().primary)
        .active(|style| style.bg(move || theme().primary.opacity(0.9)))
        .on_press(move || cx.emit(BadgeEvent::Press))
        .child(text(props.label).text_color(move || theme().primary_foreground))
}
