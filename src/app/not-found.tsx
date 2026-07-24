import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-3 bg-background text-foreground">
      <p className="text-sm font-medium">Page not found</p>
      <Link href="/" className="text-sm text-primary underline">
        Back to Home
      </Link>
    </div>
  );
}
