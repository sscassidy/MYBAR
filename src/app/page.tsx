import { AppShell } from "@/components/layout/AppShell";
import { SubjectsHome } from "@/features/subjects/SubjectsHome";
import { NAV_ITEMS } from "@/lib/nav";

export default function HomePage() {
  return (
    <AppShell navItems={NAV_ITEMS} title="Home">
      <SubjectsHome />
    </AppShell>
  );
}
