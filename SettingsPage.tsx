"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { useThemeContext } from "@/hooks/useThemeContext";
import { clearStorage } from "@/lib/storage";
import type { ThemeMode } from "@/types";

const THEME_OPTIONS: { value: ThemeMode; label: string }[] = [
  { value: "light", label: "Light" },
  { value: "dark", label: "Dark" },
  { value: "system", label: "System" },
];

export function SettingsPage() {
  const { mode, setMode } = useThemeContext();
  const [cleared, setCleared] = useState(false);

  return (
    <div className="mx-auto flex max-w-xl flex-col gap-8">
      <section aria-labelledby="appearance-heading" className="flex flex-col gap-3">
        <h2 id="appearance-heading" className="text-sm font-semibold text-foreground">
          Appearance
        </h2>
        <div className="flex gap-2">
          {THEME_OPTIONS.map((option) => (
            <Button
              key={option.value}
              variant={mode === option.value ? "primary" : "secondary"}
              onClick={() => setMode(option.value)}
              aria-pressed={mode === option.value}
            >
              {option.label}
            </Button>
          ))}
        </div>
        <p className="text-sm text-muted-foreground">
          Controls MYBAR&rsquo;s color theme. &ldquo;System&rdquo; follows your OS setting.
        </p>
      </section>

      <section aria-labelledby="account-heading" className="flex flex-col gap-3">
        <h2 id="account-heading" className="text-sm font-semibold text-foreground">
          Account &amp; subscription
        </h2>
        <p className="text-sm text-muted-foreground">
          Coming soon — sign-in and subscription management will appear here.
        </p>
      </section>

      <section aria-labelledby="data-heading" className="flex flex-col gap-3">
        <h2 id="data-heading" className="text-sm font-semibold text-foreground">
          Local data
        </h2>
        <p className="text-sm text-muted-foreground">
          Preferences stored on this device only (like theme). Reset them below.
        </p>
        <div>
          <Button
            variant="danger"
            onClick={() => {
              clearStorage();
              setCleared(true);
            }}
          >
            Reset local preferences
          </Button>
          {cleared && (
            <p role="status" className="mt-2 text-sm text-muted-foreground">
              Cleared. Reload the app to see defaults restored.
            </p>
          )}
        </div>
      </section>

      <section aria-labelledby="about-heading" className="flex flex-col gap-3">
        <h2 id="about-heading" className="text-sm font-semibold text-foreground">
          About
        </h2>
        <p className="text-sm text-muted-foreground">MYBAR — version 0.1.0</p>
      </section>
    </div>
  );
}
