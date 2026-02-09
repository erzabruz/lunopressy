import { ShieldCheck, UserCheck, ClipboardList, XCircle } from "lucide-react"
import Image from "next/image"

export function FunnelSlide() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-6 py-24">
      <div className="max-w-6xl w-full">
        <div className="flex items-center gap-3 mb-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-sm font-bold text-primary-foreground">
            02
          </span>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Authority Funnel
          </p>
        </div>
        <h2 className="font-display text-4xl font-bold text-foreground md:text-5xl">
          Filters out the noise. Keeps the real ones.
        </h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          After a homeowner responds, they{"'"}re sent through a short form — not for lead
          capture, but to filter commitment and set expectations.
        </p>

        {/* Main content: Info + Form screenshot */}
        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          {/* Left: The info columns */}
          <div className="grid gap-8 sm:grid-cols-2">
            <div className="flex flex-col gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <UserCheck className="h-6 w-6" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground">
                Who gets the form
              </h3>
              <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  Responded to our outreach
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  Shown interest in the service
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  Spoken with our team by text or phone
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <ClipboardList className="h-6 w-6" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground">
                What the form does
              </h3>
              <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  Confirms contact details & location
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  Sets expectations before a call
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  Prepares them for qualification
                </li>
              </ul>
            </div>

            <div className="sm:col-span-2 flex flex-col gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-destructive/10 text-destructive">
                <XCircle className="h-6 w-6" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground">
                If not completed
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                No lead is delivered. The system intentionally discards unserious
                homeowners so you never waste time on tire-kickers.
              </p>
            </div>
          </div>

          {/* Right: Form screenshot */}
          <div className="flex flex-col items-center justify-center">
            <div className="overflow-hidden rounded-2xl border border-border shadow-2xl shadow-primary/5">
              <Image
                src="/images/funnel-form.png"
                alt="Authority funnel form - Want a New Roof & $500? Lead qualification form"
                width={500}
                height={600}
                className="w-full max-w-md"
              />
            </div>
            <p className="mt-4 text-center text-sm text-muted-foreground">
              Example authority funnel form
            </p>
          </div>
        </div>

        {/* Bottom callout */}
        <div className="mt-14 rounded-2xl border border-border bg-card p-8">
          <div className="flex items-start gap-4">
            <ShieldCheck className="h-8 w-8 shrink-0 text-primary" />
            <div>
              <h4 className="font-display font-bold text-foreground">
                Why this matters
              </h4>
              <p className="mt-1 leading-relaxed text-muted-foreground">
                Most contractors pour money into ads but lose leads to slow response
                and no follow-up. The funnel plugs those holes — only real,
                committed homeowners make it through.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
