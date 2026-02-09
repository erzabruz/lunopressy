"use client"

import { ChevronDown } from "lucide-react"

export function HeroSlide() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/4 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-3xl">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 text-sm text-muted-foreground">
          <span className="h-2 w-2 rounded-full bg-primary" />
          Contractor Partner Presentation
        </div>

        <h1 className="font-display text-5xl font-bold leading-tight tracking-tight text-foreground md:text-7xl">
          <span className="text-balance">How We Fill Your Calendar With</span>{" "}
          <span className="text-primary">Qualified Jobs</span>
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
          A done-for-you lead system that generates demand, qualifies homeowners,
          and delivers ready-to-close opportunities to your door.
        </p>
      </div>

      <button
        type="button"
        onClick={() => {
          document.getElementById("overview")?.scrollIntoView({ behavior: "smooth" })
        }}
        className="absolute bottom-12 animate-bounce text-muted-foreground transition-colors hover:text-primary"
        aria-label="Scroll down"
      >
        <ChevronDown className="h-8 w-8" />
      </button>
    </section>
  )
}
