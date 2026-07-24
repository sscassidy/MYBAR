import { Card } from "@/components/ui/Card";
import { SECTIONS, type Subject, type Topic } from "@/features/subjects/subjects.config";
import { getTopicSectionContent } from "@/content";

interface TopicOverviewProps {
  subject: Subject;
  topic: Topic;
}

/** Shows the four content sections for a topic, marking which have content. */
export function TopicOverview({ subject, topic }: TopicOverviewProps) {
  return (
    <div className="flex flex-col gap-6">
      <p className="max-w-2xl text-sm text-muted-foreground">{topic.description}</p>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {SECTIONS.map((section) => {
          const docs = getTopicSectionContent(subject.slug, topic.slug, section.slug);
          const count = docs?.length ?? 0;
          return (
            <Card
              key={section.slug}
              href={`/subjects/${subject.slug}/topics/${topic.slug}/${section.slug}`}
              title={section.name}
              description={
                count > 0
                  ? `${count} ${count === 1 ? "entry" : "entries"} available`
                  : section.description
              }
            />
          );
        })}
      </div>
    </div>
  );
}
