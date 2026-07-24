"use client";

import type { ReactNode } from "react";
import { ThemeProvider } from "@/components/theme/ThemeProvider";

/** Client-side providers wrapper. Kept separate from layout.tsx so the
 * root layout itself can stay a Server Component. */
export function Providers({ children }: { children: ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
