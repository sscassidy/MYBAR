"use client";

import { createContext } from "react";
import type { ResolvedTheme, ThemeMode } from "@/types";

export interface ThemeContextValue {
  mode: ThemeMode;
  resolvedTheme: ResolvedTheme;
  setMode: (mode: ThemeMode) => void;
  cycleMode: () => void;
}

export const ThemeContext = createContext<ThemeContextValue | null>(null);
