interface LoadingStateProps {
  label?: string;
}

export function LoadingState({ label = "Loading…" }: LoadingStateProps) {
  return (
    <div
      role="status"
      aria-live="polite"
      className="flex h-full min-h-[240px] flex-col items-center justify-center gap-3 text-muted-foreground"
    >
      <span
        aria-hidden
        className="h-6 w-6 animate-spin rounded-full border-2 border-border border-t-primary"
      />
      <p className="text-sm">{label}</p>
    </div>
  );
}
