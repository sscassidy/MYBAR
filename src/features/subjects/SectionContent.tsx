import { EmptyState } from "@/components/ui/EmptyState";
import type { ContentSection, Subject } from "@/features/subjects/subjects.config";

interface SectionContentProps {
  subject: Subject;
  section: ContentSection;
}

/**
 * Placeholder content view for a single subject/section pair. No sample
 * content — replaced with real material once it's added.
 */
export function SectionContent({ subject, section }: SectionContentProps) {
  return (
    <EmptyState
      title={`No ${section.name.toLowerCase()} added yet`}
      description={`${section.name} for ${subject.name} will show up here once it's added.`}
    />
  );
}
