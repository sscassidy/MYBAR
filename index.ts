import type { ReactNode } from "react";

/**
 * Shared, structural types for the app shell and content library.
 * Domain content itself (actual legislation/case text) is not modeled
 * here yet — this phase only defines the navigable structure.
 */

/** A single entry in the primary navigation. */
export interface NavItem {
  id: string;
  label: string;
  href: string;
  icon?: ReactNode;
}

/** Supported theme modes. "system" follows the OS preference. */
export type ThemeMode = "light" | "dark" | "system";

/** The resolved theme actually applied to the document. */
export type ResolvedTheme = "light" | "dark";

/**
 * Generic wrapper for representing the lifecycle of an async operation
 * (loading / error / empty / ready) without ad hoc booleans scattered
 * across components. Not wired to real data yet — ready for when content
 * is fetched from a backend in a later phase.
 */
export type AsyncState<T> =
  | { status: "loading" }
  | { status: "error"; error: string }
  | { status: "empty" }
  | { status: "ready"; data: T };

/** A minimal Result type used by the persistence layer to avoid throwing. */
export type Result<T, E = string> = { ok: true; value: T } | { ok: false; error: E };
