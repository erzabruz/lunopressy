"use client"

import { Megaphone, Filter, Phone, CheckCircle } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Targeted Outreach",
    description: "We run ads and outreach to homeowners in your area who need your service. You pay nothing for traffic.",
    icon: Megaphone,
  },
  {
    number: "02",
    title: "Authority Funnel",
    description: "Interested homeowners fill out a form that filters out time-wasters and confirms real intent.",
    icon: Filter,
  },
  {
    number: "03",
    title: "Sales Team",
    description: "Our dedicated reps call, text, and qualify every lead before it ever reaches you.",
    icon: Phone,
  },
  {
    number: "04",
    title: "Lead Delivery",
    description: "You receive fully qualified opportunities — homeowner confirmed, scope defined, ready to book.",
    icon: CheckCircle,
  },
]

export function OverviewSlide() {
  return (
    <section id="overview" className="flex min-h-screen flex-col items-center justify-center px-6 py-24">
      <div className="max-w-5xl">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
          The System
        </p>
        <h2 className="font-display text-4xl font-bold text-foreground md:text-5xl">
          Four steps. Zero guesswork.
        </h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Every piece works together so you can focus on closing jobs — not chasing leads.
        </p>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {steps.map((step) => (
            <div
              key={step.number}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-colors hover:border-primary/40"
            >
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <step.icon className="h-6 w-6" />
                </div>
                <span className="font-display text-sm font-bold tracking-wider text-muted-foreground">
                  STEP {step.number}
                </span>
              </div>
              <h3 className="font-display text-xl font-bold text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
