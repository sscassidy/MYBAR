import Link from "next/link";
import { cn } from "@/lib/utils";

interface CardProps {
  href: string;
  title: string;
  description?: string;
  className?: string;
}

/** A navigable card used for subject/section overview grids. */
export function Card({ href, title, description, className }: CardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "flex flex-col gap-1 rounded-lg border border-border bg-surface p-4 transition-colors hover:bg-surface-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
        className,
      )}
    >
      <span className="text-sm font-semibold text-foreground">{title}</span>
      {description && <span className="text-sm text-muted-foreground">{description}</span>}
    </Link>
  );
}
