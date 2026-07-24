import type { ReactNode } from "react";
import { Sidebar } from "@/components/layout/Sidebar";
import { TopBar } from "@/components/layout/TopBar";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import type { NavItem } from "@/types";

interface AppShellProps {
  navItems: NavItem[];
  title: string;
  children: ReactNode;
}

/**
 * Overall window layout: navigation rail on the left, a top bar with the
 * current section title, and a scrollable main content area. Every route
 * renders inside this shell.
 */
export function AppShell({ navItems, title, children }: AppShellProps) {
  return (
    <div className="flex h-screen w-screen overflow-hidden bg-background text-foreground">
      <Sidebar items={navItems} />
      <div className="flex min-w-0 flex-1 flex-col">
        <TopBar title={title} actions={<ThemeToggle />} />
        <main className="min-w-0 flex-1 overflow-auto p-6">{children}</main>
      </div>
    </div>
  );
}
