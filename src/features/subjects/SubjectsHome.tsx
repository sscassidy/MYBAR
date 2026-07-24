import { Card } from "@/components/ui/Card";
import { SUBJECTS } from "@/features/subjects/subjects.config";

/** Dashboard-style entry point: quick links into each subject. */
export function SubjectsHome() {
  return (
    <div className="flex flex-col gap-6">
      <p className="max-w-2xl text-sm text-muted-foreground">
        Welcome to MYBAR. Pick a subject to get started.
      </p>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {SUBJECTS.map((subject) => (
          <Card
            key={subject.slug}
            href={`/subjects/${subject.slug}`}
            title={subject.name}
            description={subject.description}
          />
        ))}
      </div>
    </div>
  );
}
