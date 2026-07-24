import { AppShell } from "@/components/layout/AppShell";
import { SettingsPage as SettingsView } from "@/features/settings/SettingsPage";
import { NAV_ITEMS } from "@/lib/nav";

export default function Settings() {
  return (
    <AppShell navItems={NAV_ITEMS} title="Settings">
      <SettingsView />
    </AppShell>
  );
}
