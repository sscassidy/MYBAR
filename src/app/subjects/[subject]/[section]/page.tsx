import { notFound } from "next/navigation";
import { AppShell } from "@/components/layout/AppShell";
import { SectionContent } from "@/features/subjects/SectionContent";
import { getSection, getSubject, SECTIONS, SUBJECTS } from "@/features/subjects/subjects.config";
import { NAV_ITEMS } from "@/lib/nav";

export function generateStaticParams() {
  return SUBJECTS.flatMap((subject) =>
    SECTIONS.map((section) => ({ subject: subject.slug, section: section.slug })),
  );
}

export default function SectionPage({
  params,
}: {
  params: { subject: string; section: string };
}) {
  const subject = getSubject(params.subject);
  const section = getSection(params.section);
  if (!subject || !section) notFound();

  return (
    <AppShell navItems={NAV_ITEMS} title={`${subject.name} · ${section.name}`}>
      <SectionContent subject={subject} section={section} />
    </AppShell>
  );
}
