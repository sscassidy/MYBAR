import { notFound } from "next/navigation";
import { AppShell } from "@/components/layout/AppShell";
import { TopicOverview } from "@/features/subjects/TopicOverview";
import { getSubject, getTopic, getTopics, SUBJECTS } from "@/features/subjects/subjects.config";
import { NAV_ITEMS } from "@/lib/nav";

export function generateStaticParams() {
  return SUBJECTS.flatMap((subject) =>
    getTopics(subject.slug).map((topic) => ({ subject: subject.slug, topic: topic.slug })),
  );
}

export default function TopicPage({ params }: { params: { subject: string; topic: string } }) {
  const subject = getSubject(params.subject);
  const topic = subject && getTopic(subject.slug, params.topic);
  if (!subject || !topic) notFound();

  return (
    <AppShell navItems={NAV_ITEMS} title={`${subject.name} · ${topic.name}`}>
      <TopicOverview subject={subject} topic={topic} />
    </AppShell>
  );
}
