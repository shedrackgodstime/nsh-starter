//! The app's Rust exports, imported from `nsh-starter/native`.

mod badge;
mod counter;
mod format;

use nsh_core::prelude::*;

pub use crate::{
    badge::{Badge, BadgeEvent, BadgeProps, badge},
    counter::Counter,
    format::Format,
};

/// The UI set made available to the TSX application.
#[native_module("nsh-starter/native")]
fn native(registry: &mut Registry) {
    registry
        .register::<Badge>()
        .module::<Format>()
        .class::<Counter>();
}
