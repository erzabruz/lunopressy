import { ArrowRight } from "lucide-react"

const highlights = [
  "You pay nothing for ads or traffic",
  "Dedicated sales rep works leads on your behalf",
  "Only qualified, ready-to-book leads are delivered",
  "Structured follow-up so no opportunity slips through",
]

export function ClosingSlide() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-6 py-24">
      <div className="max-w-3xl text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
          Ready to grow?
        </p>
        <h2 className="font-display text-4xl font-bold text-foreground md:text-6xl">
          Stop chasing leads.{" "}
          <span className="text-primary">Start closing jobs.</span>
        </h2>

        <div className="mx-auto mt-12 max-w-md text-left">
          {highlights.map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 border-b border-border py-4 last:border-0"
            >
              <ArrowRight className="h-4 w-4 shrink-0 text-primary" />
              <span className="text-foreground">{item}</span>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <p className="text-muted-foreground">
            {"Let's"} talk about your service area and see if we{"'"}re a good fit.
          </p>
        </div>
      </div>
    </section>
  )
}
