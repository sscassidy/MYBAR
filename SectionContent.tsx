import ReactMarkdown from "react-markdown";
import { EmptyState } from "@/components/ui/EmptyState";
import { getTopicSectionContent } from "@/content";
import type { ContentSection, Subject, Topic } from "@/features/subjects/subjects.config";

interface SectionContentProps {
  subject: Subject;
  topic: Topic;
  section: ContentSection;
}

/** Renders a topic/section's real content when available, otherwise an
 * empty-state placeholder. No sample/fake content is ever shown. */
export function SectionContent({ subject, topic, section }: SectionContentProps) {
  const docs = getTopicSectionContent(subject.slug, topic.slug, section.slug);

  if (!docs || docs.length === 0) {
    return (
      <EmptyState
        title={`No ${section.name.toLowerCase()} added yet`}
        description={`${section.name} for ${topic.name} will show up here once it's added.`}
      />
    );
  }

  return (
    <div className="flex flex-col gap-8">
      {docs.map((doc, i) => (
        <article
          key={`${doc.title}-${i}`}
          className="rounded-lg border border-border bg-surface p-5"
        >
          <header className="mb-3 flex items-center gap-2">
            {doc.meta && (
              <span className="rounded bg-primary px-2 py-0.5 text-xs font-semibold text-primary-foreground">
                {doc.meta}
              </span>
            )}
            <h3 className="text-sm font-semibold text-foreground">{doc.title}</h3>
          </header>
          <div className="prose prose-sm max-w-none prose-headings:text-foreground prose-p:text-foreground prose-li:text-foreground prose-strong:text-foreground dark:prose-invert">
            <ReactMarkdown>{doc.body}</ReactMarkdown>
          </div>
        </article>
      ))}
    </div>
  );
}
