"use client";

import { useContext } from "react";
import { ThemeContext, type ThemeContextValue } from "@/components/theme/theme-context";

export function useThemeContext(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useThemeContext must be used within a ThemeProvider");
  return ctx;
}
