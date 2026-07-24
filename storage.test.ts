import { beforeEach, describe, expect, it } from "vitest";
import { clearStorage, isOneOf, isString, readStorage, removeStorage, writeStorage } from "@/lib/storage";

describe("storage", () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it("returns the fallback when a key is missing", () => {
    expect(readStorage("missing", isString, "fallback")).toBe("fallback");
  });

  it("round-trips a valid value", () => {
    writeStorage("greeting", "hello");
    expect(readStorage("greeting", isString, "")).toBe("hello");
  });

  it("falls back when stored data fails validation", () => {
    window.localStorage.setItem("mybar:mode", JSON.stringify("not-a-mode"));
    const isMode = isOneOf(["light", "dark", "system"] as const);
    expect(readStorage("mode", isMode, "system")).toBe("system");
  });

  it("falls back when stored data is corrupt JSON", () => {
    window.localStorage.setItem("mybar:broken", "{not json");
    expect(readStorage("broken", isString, "default")).toBe("default");
  });

  it("removes a single key without touching others", () => {
    writeStorage("a", "1");
    writeStorage("b", "2");
    removeStorage("a");
    expect(readStorage("a", isString, "gone")).toBe("gone");
    expect(readStorage("b", isString, "gone")).toBe("2");
  });

  it("clears only namespaced keys", () => {
    writeStorage("a", "1");
    window.localStorage.setItem("unrelated-app:key", "keep-me");
    clearStorage();
    expect(readStorage("a", isString, "gone")).toBe("gone");
    expect(window.localStorage.getItem("unrelated-app:key")).toBe("keep-me");
  });

  it("reports write failures instead of throwing", () => {
    const circular: Record<string, unknown> = {};
    circular.self = circular;
    const result = writeStorage("circular", circular);
    expect(result.ok).toBe(false);
  });
});
