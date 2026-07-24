/**
 * A single piece of content within a topic section (a law provision, a
 * case digest, a study-notes doc, or a template). `meta` holds a short
 * label shown alongside the title — e.g. a section number like "s65" for
 * law provisions.
 */
export interface ContentDoc {
  title: string;
  body: string;
  meta?: string;
}
