"use client";

import { formatColor, useThemeEngine } from "@fakhrirafiki/theme-engine";
import { useCallback, useMemo } from "react";

type ThemePresetSelectProps = {
  allowedPresetIds?: readonly string[];
  emptyStateText?: string;
};

export function ThemePresetSelect({
  allowedPresetIds = ["modern-minimal", "violet-bloom", "supabase", "claude"],
  emptyStateText = "No themes available.",
}: ThemePresetSelectProps) {
  const { currentTheme, applyThemeById, availablePresets, resolvedMode } = useThemeEngine();

  const getPreviewColors = useCallback(
    (presetId: string): string[] => {
      const preset = availablePresets[presetId];
      if (!preset) return [];

      const scheme = resolvedMode === "dark" ? preset.styles.dark : preset.styles.light;
      const primary = scheme["primary"];
      const secondary = scheme["secondary"];
      const accent = scheme["accent"];

      return [primary, secondary, accent].filter(Boolean) as string[];
    },
    [availablePresets, resolvedMode]
  );

  const presets = useMemo(() => {
    const ids =
      allowedPresetIds && allowedPresetIds.length > 0 ? Array.from(allowedPresetIds) : Object.keys(availablePresets);

    return ids
      .map((id) => {
        const preset = availablePresets[id];
        if (!preset) return null;

        return {
          id,
          label: preset.label,
          previewColors: getPreviewColors(id).slice(0, 3),
        };
      })
      .filter((preset): preset is { id: string; label: string; previewColors: string[] } => preset !== null);
  }, [allowedPresetIds, availablePresets, getPreviewColors]);

  return (
    <div className="mt-4 max-h-[70vh] space-y-2 overflow-y-auto pr-1">
      {presets.map((preset) => {
        const isActive = currentTheme?.presetId === preset.id;

        return (
          <button
            key={preset.id}
            type="button"
            aria-pressed={isActive}
            title={preset.id}
            className={`w-full rounded-full border px-3 py-2 text-left text-xs transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
              isActive
                ? "border-primary/70 bg-primary/10 text-foreground"
                : "border-border bg-muted/40 text-muted-foreground hover:border-muted-foreground/40 hover:bg-muted/60"
            }`}
            onClick={() => applyThemeById(preset.id)}
          >
            <span className="flex items-center justify-between gap-3">
              <span className="flex items-center gap-2">
                {preset.previewColors.length > 0 && (
                  <span className="flex gap-1">
                    {preset.previewColors.map((color, index) => (
                      <span
                        key={index}
                        className="inline-block h-2.5 w-2.5 rounded-full border border-foreground/10 shadow-sm"
                        style={{ backgroundColor: formatColor(color, "hex") }}
                      />
                    ))}
                  </span>
                )}

                <span className="text-xs font-medium text-foreground">{preset.label}</span>
              </span>

              {isActive && (
                <span className="inline-flex items-center rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-medium text-foreground">
                  Active
                </span>
              )}
            </span>
          </button>
        );
      })}

      {presets.length === 0 && <p className="text-xs text-muted-foreground">{emptyStateText}</p>}
    </div>
  );
}
