"use client";

import { useCallback, useState } from "react";
import { readStorage, writeStorage, type Validator } from "@/lib/storage";

export function useLocalStorage<T>(
  key: string,
  isValid: Validator<T>,
  fallback: T,
): [T, (next: T | ((prev: T) => T)) => void] {
  const [value, setValue] = useState<T>(() => readStorage(key, isValid, fallback));

  const setPersisted = useCallback(
    (next: T | ((prev: T) => T)) => {
      setValue((prev) => {
        const resolved = typeof next === "function" ? (next as (prev: T) => T)(prev) : next;
        writeStorage(key, resolved);
        return resolved;
      });
    },
    [key],
  );

  return [value, setPersisted];
}
