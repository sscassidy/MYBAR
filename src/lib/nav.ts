import { SUBJECTS } from "@/features/subjects/subjects.config";
import type { NavItem } from "@/types";

/** Primary navigation, shared by every route's AppShell. */
export const NAV_ITEMS: NavItem[] = [
  { id: "home", label: "Home", href: "/" },
  ...SUBJECTS.map((subject) => ({
    id: subject.slug,
    label: subject.name,
    href: `/subjects/${subject.slug}`,
  })),
  { id: "settings", label: "Settings", href: "/settings" },
];
