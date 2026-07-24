import { notFound } from "next/navigation";
import { AppShell } from "@/components/layout/AppShell";
import { SubjectOverview } from "@/features/subjects/SubjectOverview";
import { getSubject, SUBJECTS } from "@/features/subjects/subjects.config";
import { NAV_ITEMS } from "@/lib/nav";

export function generateStaticParams() {
  return SUBJECTS.map((subject) => ({ subject: subject.slug }));
}

export default function SubjectPage({ params }: { params: { subject: string } }) {
  const subject = getSubject(params.subject);
  if (!subject) notFound();

  return (
    <AppShell navItems={NAV_ITEMS} title={subject.name}>
      <SubjectOverview subject={subject} />
    </AppShell>
  );
}
