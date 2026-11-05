PROJECT_DIR := $(abspath $(dir $(lastword $(MAKEFILE_LIST))))
NSH ?= nsh
ADB ?= adb

ANDROID_HOME ?= $(HOME)/Android/Sdk
ANDROID_NDK_VERSION ?= 30.0.16248370
ANDROID_NDK_HOME ?= $(ANDROID_HOME)/ndk/$(ANDROID_NDK_VERSION)
ANDROID_API_LEVEL ?= 28
ANDROID_NDK_BIN := $(ANDROID_NDK_HOME)/toolchains/llvm/prebuilt/linux-x86_64/bin
ANDROID_CARGO_WRAPPER := $(PROJECT_DIR)/scripts/cargo-android-bindgen

export ANDROID_HOME ANDROID_NDK_HOME ANDROID_API_LEVEL
export PATH := $(ANDROID_NDK_BIN):$(PATH)

OUT_DIR := $(PROJECT_DIR)/.nsh/out
ANDROID_OUT := $(OUT_DIR)/android
ANDROID_APK := $(ANDROID_OUT)/NSH Starter.apk
LINUX_OUT := $(OUT_DIR)/linux
WINDOWS_OUT := $(OUT_DIR)/windows
WEB_OUT := $(OUT_DIR)/web

.PHONY: all help version run run-desktop run-desktop-release run-web \
	run-web-release run-android build-android build-android-universal \
	install-android build-desktop build-linux build-windows build-web \
	check lint test verify clean

all: help

run: run-desktop

run-desktop:
	@cd "$(PROJECT_DIR)" && "$(NSH)" run App.tsx --target linux

run-desktop-release:
	@cd "$(PROJECT_DIR)" && "$(NSH)" run App.tsx --target linux --release

run-web:
	@cd "$(PROJECT_DIR)" && "$(NSH)" run App.tsx --target web

run-web-release:
	@cd "$(PROJECT_DIR)" && "$(NSH)" run App.tsx --target web --release

run-android:
	@cd "$(PROJECT_DIR)" && CARGO="$(ANDROID_CARGO_WRAPPER)" \
		"$(NSH)" run App.tsx --target android

build-android:
	@cd "$(PROJECT_DIR)" && CARGO="$(ANDROID_CARGO_WRAPPER)" \
		"$(NSH)" package App.tsx --target android --abi arm64-v8a \
		--out "$(ANDROID_OUT)"
	@echo "Android APK: $(ANDROID_APK)"

build-android-universal:
	@cd "$(PROJECT_DIR)" && CARGO="$(ANDROID_CARGO_WRAPPER)" \
		"$(NSH)" package App.tsx --target android --out "$(ANDROID_OUT)"
	@echo "Android APK: $(ANDROID_APK)"

install-android: build-android
	@"$(ADB)" install -r "$(ANDROID_APK)"

build-desktop: build-linux

build-linux:
	@cd "$(PROJECT_DIR)" && "$(NSH)" package App.tsx --target linux \
		--out "$(LINUX_OUT)"

build-windows:
	@cd "$(PROJECT_DIR)" && "$(NSH)" package App.tsx --target windows \
		--out "$(WINDOWS_OUT)"

build-web:
	@cd "$(PROJECT_DIR)" && "$(NSH)" package App.tsx --target web \
		--out "$(WEB_OUT)"

version:
	@"$(NSH)" -V

check:
	@cd "$(PROJECT_DIR)" && "$(NSH)" check

lint:
	@cargo fmt --manifest-path "$(PROJECT_DIR)/Cargo.toml" -- --check
	@cargo clippy --manifest-path "$(PROJECT_DIR)/Cargo.toml" --all-targets -- -D warnings

test:
	@cd "$(PROJECT_DIR)" && "$(NSH)" test

verify: lint check test

clean:
	@echo "Removing generated starter build outputs..."
	@rm -rf "$(OUT_DIR)" "$(PROJECT_DIR)/.nsh/rust"
	@cargo clean --manifest-path "$(PROJECT_DIR)/Cargo.toml"
	@echo "Done."

help:
	@echo "NSH Starter (NSH 0.4.0)"
	@echo ""
	@echo "Development:"
	@echo "  run-desktop              Run the Linux desktop development host"
	@echo "  run-desktop-release      Preview the desktop release build"
	@echo "  run-web                  Run the web development host"
	@echo "  run-web-release          Preview the web release build"
	@echo "  run-android              Run on a connected Android device"
	@echo ""
	@echo "Packages:"
	@echo "  build-android            Build an arm64 Android APK"
	@echo "  build-android-universal  Build an APK for default Android ABIs"
	@echo "  install-android          Build and install the arm64 APK"
	@echo "  build-desktop            Alias for build-linux"
	@echo "  build-linux              Build a native Linux package"
	@echo "  build-windows            Build a Windows package"
	@echo "  build-web                Build a production static web site"
	@echo ""
	@echo "Quality:"
	@echo "  version                  Show the installed NSH CLI version"
	@echo "  check                    Run nsh check"
	@echo "  lint                     Run cargo fmt and Clippy"
	@echo "  test                     Run nsh test"
	@echo "  verify                   Run lint, check, and test"
	@echo "  clean                    Remove generated outputs and build caches"
	@echo ""
	@echo "Override NSH, ADB, ANDROID_HOME, ANDROID_NDK_VERSION, ANDROID_NDK_HOME,"
	@echo "or ANDROID_API_LEVEL."
