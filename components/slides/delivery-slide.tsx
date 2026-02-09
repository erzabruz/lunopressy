import { CheckCircle2, User, MapPin, Wrench, CalendarCheck, ArrowRight } from "lucide-react"
import Image from "next/image"

const qualifiedChecks = [
  { icon: User, label: "Homeowner confirmed" },
  { icon: MapPin, label: "Service address verified" },
  { icon: Wrench, label: "Scope & service match" },
  { icon: CalendarCheck, label: "Timing & intent confirmed" },
]

export function DeliverySlide() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-6 py-24">
      <div className="max-w-5xl">
        <div className="flex items-center gap-3 mb-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-sm font-bold text-primary-foreground">
            04
          </span>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Lead Delivery
          </p>
        </div>
        <h2 className="font-display text-4xl font-bold text-foreground md:text-5xl">
          You only get leads that are ready to go.
        </h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          A lead isn{"'"}t fulfilled just because a form was submitted. You receive
          a qualified opportunity only after every checkpoint is passed.
        </p>

        <div className="mt-16 flex flex-col items-center gap-6 md:flex-row md:gap-4">
          {qualifiedChecks.map((check, i) => (
            <div key={check.label} className="flex items-center gap-4 md:flex-col md:gap-3">
              <div className="flex flex-col items-center gap-3">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-border bg-card text-primary">
                  <check.icon className="h-7 w-7" />
                </div>
                <span className="text-center text-sm font-medium text-foreground">
                  {check.label}
                </span>
              </div>
              {i < qualifiedChecks.length - 1 && (
                <ArrowRight className="h-5 w-5 shrink-0 text-muted-foreground hidden md:block" />
              )}
            </div>
          ))}
          <ArrowRight className="h-5 w-5 shrink-0 text-primary hidden md:block" />
          <div className="flex flex-col items-center gap-3">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
              <CheckCircle2 className="h-7 w-7" />
            </div>
            <span className="text-center text-sm font-bold text-primary">
              Delivered to You
            </span>
          </div>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-8">
            <h3 className="font-display text-lg font-bold text-foreground">
              What you receive
            </h3>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                Full homeowner contact info & notes
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                Verified service address
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                Job scope, timing, and decision-maker status
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                Homeowner is primed and expecting your call
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-primary/20 bg-primary/5 p-8">
            <h3 className="font-display text-lg font-bold text-foreground">
              Aligned incentives
            </h3>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              You only pay when a real, qualified opportunity is delivered.
              We front the ad spend and absorb the cost of leads that don{"'"}t
              qualify. If we don{"'"}t deliver value, we don{"'"}t get paid.
            </p>
          </div>
        </div>

        {/* Speed to lead */}
        <div className="mt-12 rounded-2xl border border-border bg-card p-8">
          <h3 className="font-display text-lg font-bold text-foreground mb-2">
            Why speed matters
          </h3>
          <p className="mb-6 text-sm leading-relaxed text-muted-foreground max-w-2xl">
            Contact rate drops 100x between 5 and 30 minutes. Our system ensures leads are contacted immediately — before they go cold.
          </p>
          <div className="overflow-hidden rounded-xl border border-border max-w-2xl mx-auto">
            <Image
              src="/images/contact-rate.png"
              alt="Chart showing contact rate drops 100x and qualification rate drops 21x from 5 to 30 minutes"
              width={800}
              height={400}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
