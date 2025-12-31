import { ThemePresetButtons } from "@fakhrirafiki/theme-engine";
import { ThemeDemo } from "./theme-demo";

export default function Home() {
  return (
    <div className="relative min-h-dvh bg-background text-foreground">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(1000px circle at 50% -200px, hsl(var(--primary) / 0.18), transparent 60%)",
        }}
      />

      <main className="mx-auto w-full max-w-4xl px-4 py-14 sm:px-8">
        <ThemeDemo />

        <section className="mt-12 space-y-3">
          <div className="text-center">
            <h2 className="text-base font-semibold tracking-tight">Try Presets</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Click any preset below to apply. Custom presets show up first.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card px-3 py-4 shadow-sm">
            <ThemePresetButtons
              maxPresets={30}
              animation={{ enabled: true, rowCount: 3, scrollSpeed: 0.6, hoverPause: true }}
              layout={{ buttonWidth: 148, buttonGap: 14, rowGap: 14, enableMask: true }}
            />
          </div>

          <p className="text-center text-xs text-muted-foreground">
            Edit <span className="font-mono">src/app/custom-presets.ts</span> to add your own preset IDs.
          </p>
        </section>
      </main>
    </div>
  );
}
