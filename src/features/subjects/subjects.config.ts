/**
 * The bar exam subjects this app covers, and the content sections each
 * subject is broken into. This is structural configuration only — no
 * actual legislation/case/notes content lives here yet. Adding real
 * content in a later phase means populating a content source keyed by
 * these same slugs, not changing this navigation structure.
 */

export interface Subject {
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

export const SECTIONS: ContentSection[] = [
  { slug: "legislation", name: "Legislation", description: "The relevant Act, provision by provision." },
  { slug: "cases", name: "Cases", description: "Key cases and their holdings." },
  { slug: "study-notes", name: "Study Notes", description: "Your notes and summaries." },
  { slug: "templates", name: "Templates", description: "Answer templates and structures." },
];

export function getSubject(slug: string): Subject | undefined {
  return SUBJECTS.find((s) => s.slug === slug);
}

export function getSection(slug: string): ContentSection | undefined {
  return SECTIONS.find((s) => s.slug === slug);
}
