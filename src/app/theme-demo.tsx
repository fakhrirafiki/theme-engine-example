"use client";

import { ThemePresets, useThemeEngine } from "@fakhrirafiki/theme-engine";
import type { ReactNode } from "react";
import { customPresets } from "./custom-presets";

type PresetRegistry = ThemePresets<typeof customPresets>;

function Button({
  children,
  onClick,
  pressed = false,
  variant = "outline",
}: {
  children: ReactNode;
  onClick: () => void;
  pressed?: boolean;
  variant?: "solid" | "outline";
}) {
  const base =
    "inline-flex h-9 items-center justify-center rounded-md px-3 text-sm font-medium transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

  const className =
    variant === "solid"
      ? `${base} bg-primary text-primary-foreground hover:opacity-90`
      : `${base} border border-border bg-background text-foreground hover:bg-accent ${pressed ? "bg-accent" : ""}`;

  return (
    <button type="button" className={className} onClick={onClick}>
      {children}
    </button>
  );
}

export function ThemeDemo() {
  const {
    mode,
    resolvedMode,
    setDarkMode,
    toggleDarkMode,
    currentPreset,
    clearTheme,
  } = useThemeEngine<PresetRegistry>();

  const presetId = currentPreset?.presetName ?? "";

  return (
    <div className="space-y-8">
      <header className="space-y-3 text-center">
        <h1 className="text-balance text-3xl font-semibold tracking-tight text-foreground">Theme Engine</h1>
        <p className="mx-auto max-w-md text-pretty text-sm text-muted-foreground">
          Minimal example app for{" "}
          <a
            className="underline underline-offset-4 hover:opacity-80"
            href="https://www.npmjs.com/package/@fakhrirafiki/theme-engine"
            target="_blank"
            rel="noreferrer"
          >
            @fakhrirafiki/theme-engine
          </a>
        </p>
      </header>

      <section className="rounded-2xl border border-border bg-card p-6 text-card-foreground shadow-sm">
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="space-y-3">
            <div className="text-sm font-medium">Mode</div>
            <div className="flex flex-wrap gap-2">
              <Button pressed={mode === "system"} onClick={() => setDarkMode("system")}>
                System
              </Button>
              <Button pressed={mode === "light"} onClick={() => setDarkMode("light")}>
                Light
              </Button>
              <Button pressed={mode === "dark"} onClick={() => setDarkMode("dark")}>
                Dark
              </Button>
              <Button
                variant="solid"
                onClick={() => {
                  toggleDarkMode();
                }}
              >
                Toggle
              </Button>
            </div>
            <div className="text-xs text-muted-foreground">
              mode: <span className="font-mono">{mode}</span> · resolved: <span className="font-mono">{resolvedMode}</span>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-lg border border-border bg-background p-4">
              <div className="text-sm font-medium">Surface</div>
              <div className="mt-2 text-sm text-muted-foreground">
                Uses semantic tokens: <span className="font-mono">bg-background</span>, <span className="font-mono">text-foreground</span>
              </div>
            </div>
            <div className="rounded-lg border border-border bg-primary p-4 text-primary-foreground">
              <div className="text-sm font-medium">Primary</div>
              <div className="mt-2 text-sm opacity-90">
                Uses semantic tokens: <span className="font-mono">bg-primary</span>, <span className="font-mono">text-primary-foreground</span>
              </div>
            </div>
          </div>

          <div className="sm:col-span-2">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div className="text-xs text-muted-foreground">
                active preset: <span className="font-mono">{presetId || "default"}</span>
              </div>
              <div className="flex gap-2">
                <Button onClick={() => clearTheme()}>Reset preset</Button>
                <a
                  className="inline-flex h-9 items-center justify-center rounded-md border border-border bg-background px-3 text-sm font-medium text-foreground transition-colors hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  href="https://github.com/fakhrirafiki/theme-engine"
                  target="_blank"
                  rel="noreferrer"
                >
                  Docs
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
