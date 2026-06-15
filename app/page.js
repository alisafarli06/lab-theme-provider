import ThemeToggle from "./components/ThemeToggle";

// Server Component — no hooks needed here, ThemeToggle is the Client Component
export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-6 text-foreground">
      <main className="flex w-full max-w-md flex-col items-center gap-8 text-center">
        <div className="flex flex-col items-center gap-3">
          <h1 className="text-3xl font-semibold tracking-tight">
            Aurora Notes
          </h1>
          <p className="text-base text-muted">
            A tiny app that works great in daylight. Now it has a night side.
          </p>
        </div>

        <div className="w-full rounded-2xl border border-border bg-surface p-6 text-left">
          <h2 className="text-lg font-medium">Today</h2>
          <p className="mt-2 text-sm text-muted">
            Pick up where you left off. Your notes, your timeline, your calm.
          </p>
        </div>

        <ThemeToggle />
      </main>
    </div>
  );
}
