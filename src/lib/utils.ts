/**
 * Joins class names, filtering out falsy values. A tiny dependency-free
 * stand-in for `clsx` so we don't pull in an extra package for something
 * this small.
 */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}
