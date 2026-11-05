use nsh_core::prelude::*;

/// Small text helpers exposed to TSX.
#[module]
pub struct Format;

#[module]
impl Format {
    /// Formats a count as "once", "twice", or "<n> times".
    pub fn times(count: u32) -> String {
        match count {
            1 => "once".to_owned(),
            2 => "twice".to_owned(),
            n => format!("{n} times"),
        }
    }
}
