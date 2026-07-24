import { EmptyState } from "@/components/ui/EmptyState";
import { getSubjectLegislation } from "@/features/subjects/legislation.config";
import type { Subject } from "@/features/subjects/subjects.config";

interface LegislationViewProps {
  subject: Subject;
}

export function LegislationView({ subject }: LegislationViewProps) {
  const legislation = getSubjectLegislation(subject.slug);

  if (!legislation) {
    return (
      <EmptyState
        title="No legislation added yet"
        description={`The full Act for ${subject.name} will show up here once it's added.`}
      />
    );
  }

  return (
    <div className="flex max-w-xl flex-col gap-3 rounded-lg border border-border bg-surface p-5">
      <h2 className="text-sm font-semibold text-foreground">{legislation.title}</h2>
      {legislation.asAt && (
        <p className="text-sm text-muted-foreground">As at {legislation.asAt}.</p>
      )}
      <p className="text-sm text-muted-foreground">
        The full Act, for reference. For {subject.name}&rsquo;s curated topics — with the
        specific provisions, cases, notes, and templates for each — see the Topics section.
      </p>
      <div>
        <a
          href={legislation.file}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-surface px-3.5 py-2 text-sm font-medium text-foreground transition-colors hover:bg-surface-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          Open full Act (PDF)
        </a>
      </div>
    </div>
  );
}
