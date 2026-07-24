import { Card } from "@/components/ui/Card";
import { EmptyState } from "@/components/ui/EmptyState";
import { getTopics, type Subject } from "@/features/subjects/subjects.config";

interface SubjectOverviewProps {
  subject: Subject;
}

/** Shows a subject's legislation reference plus its topics as navigable cards. */
export function SubjectOverview({ subject }: SubjectOverviewProps) {
  const topics = getTopics(subject.slug);

  return (
    <div className="flex flex-col gap-8">
      <p className="max-w-2xl text-sm text-muted-foreground">{subject.description}</p>

      <section aria-labelledby="legislation-heading" className="flex flex-col gap-3">
        <h2 id="legislation-heading" className="text-sm font-semibold text-foreground">
          Legislation
        </h2>
        <Card
          href={`/subjects/${subject.slug}/legislation`}
          title="Full Act reference"
          description="The complete Act, for reference alongside the topic-by-topic law extracts below."
        />
      </section>

      <section aria-labelledby="topics-heading" className="flex flex-col gap-3">
        <h2 id="topics-heading" className="text-sm font-semibold text-foreground">
          Topics
        </h2>
        {topics.length === 0 ? (
          <EmptyState
            title="No topics added yet"
            description={`Topics for ${subject.name} (with their law, cases, notes, and templates) will show up here once added.`}
          />
        ) : (
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {topics.map((topic) => (
              <Card
                key={topic.slug}
                href={`/subjects/${subject.slug}/topics/${topic.slug}`}
                title={topic.name}
                description={topic.description}
              />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
