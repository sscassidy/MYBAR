import { Card } from "@/components/ui/Card";
import { SECTIONS, type Subject } from "@/features/subjects/subjects.config";

interface SubjectOverviewProps {
  subject: Subject;
}

/** Shows the four content sections for a subject as navigable cards. */
export function SubjectOverview({ subject }: SubjectOverviewProps) {
  return (
    <div className="flex flex-col gap-6">
      <p className="max-w-2xl text-sm text-muted-foreground">{subject.description}</p>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {SECTIONS.map((section) => (
          <Card
            key={section.slug}
            href={`/subjects/${subject.slug}/${section.slug}`}
            title={section.name}
            description={section.description}
          />
        ))}
      </div>
    </div>
  );
}
