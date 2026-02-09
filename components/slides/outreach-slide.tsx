import { MapPin, DollarSign, Search, MessageSquare } from "lucide-react"
import Image from "next/image"

const sources = [
  {
    icon: MessageSquare,
    label: "Meta Ads",
    detail: "Facebook & Instagram ads targeting homeowners in your zip codes",
  },
  {
    icon: Search,
    label: "Google Search",
    detail: "Capturing people actively searching for your service right now",
  },
  {
    icon: MapPin,
    label: "Geo-Targeting",
    detail: "Affluent neighborhoods and proven high-conversion areas only",
  },
  {
    icon: DollarSign,
    label: "Income Filtering",
    detail: "Targeting homeowners with the budget to hire a professional",
  },
]

export function OutreachSlide() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-6 py-24">
      <div className="max-w-6xl w-full">
        <div className="flex items-center gap-3 mb-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-sm font-bold text-primary-foreground">
            01
          </span>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Targeted Homeowner Outreach
          </p>
        </div>
        <h2 className="font-display text-4xl font-bold text-foreground md:text-5xl">
          We bring the demand to you.
        </h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          You don{"'"}t pay for ads. You don{"'"}t pay for traffic. We handle all
          of that. Leads enter our system from multiple sources — all targeted
          to your service area.
        </p>

        {/* Source cards */}
        <div className="mt-14 grid gap-4 sm:grid-cols-2">
          {sources.map((source) => (
            <div
              key={source.label}
              className="flex items-start gap-4 rounded-xl border border-border bg-card p-6"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <source.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-display font-bold text-foreground">
                  {source.label}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {source.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Our Ads vs Competitor Ads */}
        <div className="mt-20">
          <h3 className="font-display text-2xl font-bold text-foreground md:text-3xl">
            Our approach vs. the competition
          </h3>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            We build trust through authentic content — not spammy discount ads with low engagement.
          </p>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            {/* Our approach */}
            <div className="rounded-2xl border border-primary/30 bg-card p-6">
              <div className="mb-4 flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-primary" />
                <span className="text-sm font-bold uppercase tracking-wider text-primary">
                  Our Ads
                </span>
              </div>
              <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
                Authentic social content that builds connection and trust with homeowners.
              </p>
              <div className="overflow-hidden rounded-xl border border-border">
                <Image
                  src="/images/ad-library.png"
                  alt="Facebook Ad Library showing authentic video testimonial ads"
                  width={600}
                  height={400}
                  className="w-full object-cover"
                />
              </div>
            </div>

            {/* Competitor approach */}
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="mb-4 flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground" />
                <span className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
                  Competitor Ads
                </span>
              </div>
              <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
                Generic discount ads that attract bargain hunters — low impression, low trust.
              </p>
              <div className="grid grid-cols-2 gap-3">
                <div className="overflow-hidden rounded-xl border border-border">
                  <Image
                  src="/images/competitor-ad-1.png"
                  alt="Competitor roofing ad offering 50% off install"
                    width={300}
                    height={400}
                    className="w-full object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-xl border border-border">
                  <Image
                  src="/images/competitor-ad-2.png"
                  alt="1-800-Hansons Facebook ad with holiday sale and low impressions"
                    width={300}
                    height={400}
                    className="w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Targeting pillars */}
        <div className="mt-20">
          <h3 className="font-display text-2xl font-bold text-foreground md:text-3xl">
            Precision targeting, not spray and pray
          </h3>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            Every lead is filtered by location, income, and real search intent before it ever enters the system.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {/* Affluent Zip Codes */}
            <div className="overflow-hidden rounded-2xl border border-border bg-card">
              <div className="border-b border-border bg-secondary px-5 py-3">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="text-sm font-bold text-foreground">Affluent Zip Codes</span>
                </div>
              </div>
              <div className="p-4">
                <Image
                  src="/images/geo-targeting.png"
                  alt="Facebook Ads geo-targeting map showing affluent zip codes in Fort Lauderdale area"
                  width={500}
                  height={400}
                  className="w-full rounded-lg"
                />
              </div>
            </div>

            {/* Income Targeting */}
            <div className="overflow-hidden rounded-2xl border border-border bg-card">
              <div className="border-b border-border bg-secondary px-5 py-3">
                <div className="flex items-center gap-2">
                  <DollarSign className="h-4 w-4 text-primary" />
                  <span className="text-sm font-bold text-foreground">Income Targeting</span>
                </div>
              </div>
              <div className="p-4">
                <Image
                  src="/images/income-targeting.png"
                  alt="Income targeting data showing estimated yearly income brackets from $100k to $250k"
                  width={500}
                  height={250}
                  className="w-full rounded-lg"
                />
              </div>
            </div>

            {/* Intent-Based Filtering */}
            <div className="overflow-hidden rounded-2xl border border-border bg-card">
              <div className="border-b border-border bg-secondary px-5 py-3">
                <div className="flex items-center gap-2">
                  <Search className="h-4 w-4 text-primary" />
                  <span className="text-sm font-bold text-foreground">Intent-Based Filtering</span>
                </div>
              </div>
              <div className="p-4">
                <Image
                  src="/images/intent-keywords.png"
                  alt="Search intent keywords: Roof Repair, Roof Installation, Storm Damage, Best Contractor in Atlanta"
                  width={500}
                  height={250}
                  className="w-full rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom callout */}
        <div className="mt-14 rounded-2xl border border-primary/20 bg-primary/5 p-8">
          <p className="text-center text-lg font-semibold text-foreground">
            {"\""}By the time a lead enters the system, the homeowner has already
            invested effort. These are not cold leads.{"\""}
          </p>
        </div>
      </div>
    </section>
  )
}
