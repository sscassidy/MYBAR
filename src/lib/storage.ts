import type { Result } from "@/types";

/**
 * Local persistence foundation.
 *
 * Backed by `window.localStorage`. Every read/write is validated so
 * malformed or tampered data can never silently corrupt app state.
 *
 * This is device-local only (theme preference, UI state, etc). Study
 * content, progress, and account data will live server-side once
 * accounts/subscriptions are built — this module is not the place for
 * that data.
 */

const NAMESPACE = "mybar";

export type Validator<T> = (value: unknown) => value is T;

interface StorageDriver {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
  removeItem(key: string): void;
  keys(): string[];
}

function createLocalStorageDriver(): StorageDriver {
  const isAvailable = (() => {
    if (typeof window === "undefined") return false;
    try {
      const probeKey = `${NAMESPACE}:__probe__`;
      window.localStorage.setItem(probeKey, "1");
      window.localStorage.removeItem(probeKey);
      return true;
    } catch {
      return false;
    }
  })();

  if (!isAvailable) {
    const memory = new Map<string, string>();
    return {
      getItem: (key) => memory.get(key) ?? null,
      setItem: (key, value) => {
        memory.set(key, value);
      },
      removeItem: (key) => {
        memory.delete(key);
      },
      keys: () => Array.from(memory.keys()),
    };
  }

  return {
    getItem: (key) => window.localStorage.getItem(key),
    setItem: (key, value) => window.localStorage.setItem(key, value),
    removeItem: (key) => window.localStorage.removeItem(key),
    keys: () => Object.keys(window.localStorage),
  };
}

const driver = createLocalStorageDriver();

function namespacedKey(key: string): string {
  return `${NAMESPACE}:${key}`;
}

export function readStorage<T>(key: string, isValid: Validator<T>, fallback: T): T {
  const raw = driver.getItem(namespacedKey(key));
  if (raw === null) return fallback;

  try {
    const parsed: unknown = JSON.parse(raw);
    return isValid(parsed) ? parsed : fallback;
  } catch {
    return fallback;
  }
}

export function writeStorage<T>(key: string, value: T): Result<void> {
  try {
    driver.setItem(namespacedKey(key), JSON.stringify(value));
    return { ok: true, value: undefined };
  } catch (error) {
    return { ok: false, error: error instanceof Error ? error.message : "Unknown storage error" };
  }
}

export function removeStorage(key: string): void {
  driver.removeItem(namespacedKey(key));
}

export function clearStorage(): void {
  const prefix = `${NAMESPACE}:`;
  for (const key of driver.keys()) {
    if (key.startsWith(prefix)) {
      driver.removeItem(key);
    }
  }
}

export const isString: Validator<string> = (value): value is string => typeof value === "string";

export function isOneOf<T extends string>(options: readonly T[]): Validator<T> {
  return (value): value is T =>
    typeof value === "string" && (options as readonly string[]).includes(value);
}
