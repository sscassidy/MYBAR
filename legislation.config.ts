export interface LegislationReference {
  title: string;
  file: string;
  asAt?: string;
}

/** Full-Act reference documents available per subject, for download/browsing
 * alongside the curated topic-by-topic law extracts. */
export const SUBJECT_LEGISLATION: Record<string, LegislationReference | undefined> = {
  evidence: {
    title: "Evidence Act 2008 (Vic)",
    file: "/legislation/evidence-act-2008-vic.pdf",
    asAt: "25 March 2024",
  },
};

export function getSubjectLegislation(subjectSlug: string): LegislationReference | undefined {
  return SUBJECT_LEGISLATION[subjectSlug];
}
