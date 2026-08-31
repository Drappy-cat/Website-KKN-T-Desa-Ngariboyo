export default function PageLoader() {
  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Banner skeleton */}
      <div className="bg-primary h-64 animate-pulse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 space-y-10">
        {/* Title skeleton */}
        <div className="space-y-3 max-w-lg">
          <div className="h-4 w-24 bg-muted rounded-full animate-pulse" />
          <div className="h-9 w-64 bg-muted rounded-xl animate-pulse" />
          <div className="h-4 w-full bg-muted rounded-full animate-pulse" />
          <div className="h-4 w-5/6 bg-muted rounded-full animate-pulse" />
        </div>

        {/* Card skeletons */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="bg-card rounded-[20px] overflow-hidden border border-border shadow-sm"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="h-44 bg-muted animate-pulse" />
              <div className="p-5 space-y-3">
                <div className="h-3 w-16 bg-muted rounded-full animate-pulse" />
                <div className="h-5 w-4/5 bg-muted rounded-xl animate-pulse" />
                <div className="h-3 w-full bg-muted rounded-full animate-pulse" />
                <div className="h-3 w-3/4 bg-muted rounded-full animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
