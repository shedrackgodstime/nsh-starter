use nsh_core::prelude::*;

/// A counter whose state is held in Rust.
#[class]
pub struct Counter {
    count: u32,
}

impl Default for Counter {
    fn default() -> Self {
        Self::new()
    }
}

#[class]
impl Counter {
    /// Creates a counter starting at zero.
    pub fn new() -> Self {
        Self { count: 0 }
    }

    /// Increments the counter and returns its new value.
    pub fn increment(&mut self) -> u32 {
        self.count += 1;
        self.count
    }

    /// Returns the current count.
    #[getter]
    pub fn count(&self) -> u32 {
        self.count
    }
}
