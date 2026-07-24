/**
 * The bar exam subjects this app covers, the topics within each subject,
 * and the content sections every topic is broken into. Actual content
 * (legislation text, cases, notes, templates) lives in `src/content` and
 * is looked up by these same slugs — this file only defines structure.
 */

export interface Subject {
  slug: string;
  name: string;
  description: string;
}

export interface Topic {
  slug: string;
  name: string;
  description: string;
}

export interface ContentSection {
  slug: string;
  name: string;
  description: string;
}

export const SUBJECTS: Subject[] = [
  {
    slug: "evidence",
    name: "Evidence",
    description: "The Evidence Act, key cases, and study material.",
  },
  {
    slug: "criminal-procedure",
    name: "Criminal Procedure",
    description: "The Criminal Procedure Act, key cases, and study material.",
  },
  {
    slug: "legal-ethics",
    name: "Legal Ethics",
    description: "Ethics rules, key cases, and study material.",
  },
];

/** Topics within each subject. Empty for subjects with no content yet. */
export const TOPICS: Record<string, Topic[]> = {
  evidence: [
    {
      slug: "hearsay",
      name: "Hearsay",
      description: "The hearsay rule and its exceptions (Evidence Act 2008 (Vic), Part 3.2).",
    },
  ],
  "criminal-procedure": [],
  "legal-ethics": [],
};

export const SECTIONS: ContentSection[] = [
  { slug: "law", name: "Law", description: "The relevant Act provisions for this topic." },
  { slug: "cases", name: "Cases", description: "Key cases and their holdings." },
  { slug: "study-notes", name: "Study Notes", description: "Notes and summaries." },
  { slug: "templates", name: "Templates", description: "Answer templates and structures." },
];

export function getSubject(slug: string): Subject | undefined {
  return SUBJECTS.find((s) => s.slug === slug);
}

export function getTopics(subjectSlug: string): Topic[] {
  return TOPICS[subjectSlug] ?? [];
}

export function getTopic(subjectSlug: string, topicSlug: string): Topic | undefined {
  return getTopics(subjectSlug).find((t) => t.slug === topicSlug);
}

export function getSection(slug: string): ContentSection | undefined {
  return SECTIONS.find((s) => s.slug === slug);
}
