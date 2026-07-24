"use client";

import { useThemeContext } from "@/hooks/useThemeContext";

const LABEL: Record<string, string> = {
  light: "Light",
  dark: "Dark",
  system: "System",
};

export function ThemeToggle() {
  const { mode, cycleMode } = useThemeContext();

  return (
    <button
      type="button"
      onClick={cycleMode}
      className="inline-flex items-center gap-2 rounded-md border border-border bg-surface px-3 py-1.5 text-sm text-foreground transition-colors hover:bg-surface-muted"
      aria-label={`Theme: ${LABEL[mode]}. Click to change.`}
    >
      <span aria-hidden className="h-2 w-2 rounded-full bg-primary" />
      {LABEL[mode]}
    </button>
  );
}
