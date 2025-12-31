"use client";

import { ThemePresets, useThemeEngine } from "@fakhrirafiki/theme-engine";
import type { ReactNode } from "react";
import { customPresets } from "./custom-presets";

type PresetRegistry = ThemePresets<typeof customPresets>;

const LINKS = {
  github: "https://github.com/fakhrirafiki/theme-engine.git",
  npm: "https://www.npmjs.com/package/@fakhrirafiki/theme-engine",
} as const;

function LinkPill({ href, children, icon }: { href: string; children: ReactNode; icon: ReactNode }) {
  return (
    <a
      className="inline-flex h-9 items-center gap-2 rounded-full border border-border bg-background px-3 text-sm font-medium text-foreground transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      <span className="text-muted-foreground">{icon}</span>
      <span>{children}</span>
    </a>
  );
}

function GithubIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
      <path d="M12 .5C5.73.5.75 5.58.75 12c0 5.1 3.3 9.42 7.88 10.95.58.1.8-.26.8-.58v-2.1c-3.2.7-3.87-1.4-3.87-1.4-.53-1.38-1.28-1.75-1.28-1.75-1.05-.73.08-.72.08-.72 1.16.08 1.77 1.23 1.77 1.23 1.03 1.8 2.7 1.28 3.36.98.1-.77.4-1.28.72-1.57-2.55-.3-5.23-1.3-5.23-5.78 0-1.28.45-2.33 1.18-3.15-.12-.3-.52-1.52.1-3.17 0 0 .97-.32 3.18 1.2a10.7 10.7 0 0 1 2.9-.4c.99 0 2 .14 2.9.4 2.2-1.52 3.17-1.2 3.17-1.2.63 1.65.23 2.87.12 3.17.73.82 1.18 1.87 1.18 3.15 0 4.5-2.7 5.47-5.27 5.77.42.38.78 1.12.78 2.25v3.34c0 .32.21.69.8.58A11.3 11.3 0 0 0 23.25 12C23.25 5.58 18.27.5 12 .5Z" />
    </svg>
  );
}

function NpmIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 18 7" className="h-4 w-4 fill-current">
      <path d="M0 0v7h5.25V1.75h2.625V7H9.5V0H0Zm9.5 0v7h5.25V1.75h1.75V0H9.5Z" />
    </svg>
  );
}

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
  const { mode, resolvedMode, setDarkMode, toggleDarkMode, currentPreset, clearTheme } =
    useThemeEngine<PresetRegistry>();

  const presetId = currentPreset?.presetName ?? "";

  return (
    <div className="space-y-8">
      <header className="space-y-3 text-center">
        <h1 className="text-balance text-3xl font-semibold tracking-tight text-foreground">Theme Engine</h1>
        <p className="mx-auto max-w-md text-pretty text-sm text-muted-foreground">
          Minimal example app for <span className="font-mono">@fakhrirafiki/theme-engine</span>
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          <LinkPill href={LINKS.github} icon={<GithubIcon />}>
            GitHub
          </LinkPill>
          <LinkPill href={LINKS.npm} icon={<NpmIcon />}>
            npm
          </LinkPill>
        </div>
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
              mode: <span className="font-mono">{mode}</span> · resolved:{" "}
              <span className="font-mono">{resolvedMode}</span>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-lg border border-border bg-background p-4">
              <div className="text-sm font-medium">Surface</div>
              <div className="mt-2 text-sm text-muted-foreground">
                Uses semantic tokens: <span className="font-mono">bg-background</span>,{" "}
                <span className="font-mono">text-foreground</span>
              </div>
            </div>
            <div className="rounded-lg border border-border bg-primary p-4 text-primary-foreground">
              <div className="text-sm font-medium">Primary</div>
              <div className="mt-2 text-sm opacity-90">
                Uses semantic tokens: <span className="font-mono">bg-primary</span>,{" "}
                <span className="font-mono">text-primary-foreground</span>
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
                <LinkPill href={LINKS.github} icon={<GithubIcon />}>
                  GitHub
                </LinkPill>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
