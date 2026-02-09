"use client"

import { Phone, MessageSquare, FileText } from "lucide-react"
import Image from "next/image"

const chatMessages = [
  {
    from: "rep",
    text: "Hey Jarrod, thanks for requesting a roofing quote. Just to confirm you\u2019re looking at a full replacement for your home, correct?",
  },
  { from: "homeowner", text: "Yes" },
  {
    from: "rep",
    text: "Got it. Is this for a single-family home you live in, or a rental / commercial property?",
  },
  { from: "homeowner", text: "Single Family home" },
  {
    from: "rep",
    text: "Do you know roughly how old the current roof is, or when it was last replaced?",
  },
  { from: "homeowner", text: "It is 27 years old" },
  {
    from: "rep",
    text: "What\u2019s driving the replacement right now \u2014 storm damage, leaks, insurance, or just age of the roof?",
  },
  { from: "homeowner", text: "It\u2019s leaking quite bad" },
]

const followUpDays = [
  { day: "Day 1", actions: ["Call (Double Dial)", "Voicemail", "Text & Email"] },
  { day: "Day 1 (Again)", actions: ["Call (Double Dial)", "Text"] },
  { day: "Day 2", actions: ["Call (Double Dial)", "Voicemail", "Text & Email"] },
  { day: "Day 3", actions: ["Call (Double Dial)", "Voicemail", "Text & Email"] },
  { day: "Day 4", actions: ["Call (Double Dial)", "Voicemail", "Text & Email"] },
  { day: "Day 5+", actions: ["Continued multi-channel follow-up"] },
  { day: "Day 14", actions: ["Call (Double Dial)", "Voicemail"] },
  { day: "Day 30", actions: ["Call (Double Dial)", "Voicemail", "Text & Email"] },
]

export function SalesSlide() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-6 py-24">
      <div className="max-w-6xl w-full">
        <div className="flex items-center gap-3 mb-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-sm font-bold text-primary-foreground">
            03
          </span>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Sales Team
          </p>
        </div>
        <h2 className="font-display text-4xl font-bold text-foreground md:text-5xl">
          We call. We text. We qualify.
        </h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          A dedicated rep works every lead on your behalf — calling and texting
          until there{"'"}s a clear outcome. You never touch an unqualified lead.
        </p>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {/* Chat mockup */}
          <div className="overflow-hidden rounded-2xl border border-border bg-card">
            <div className="flex items-center gap-3 border-b border-border bg-secondary px-5 py-3">
              <MessageSquare className="h-4 w-4 text-primary" />
              <span className="text-sm font-semibold text-foreground">
                Live Qualification — Text
              </span>
            </div>
            <div className="flex flex-col gap-3 p-5 max-h-[500px] overflow-y-auto">
              {chatMessages.map((msg, i) => (
                <div
                  key={i}
                  className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                    msg.from === "rep"
                      ? "self-end rounded-br-md bg-primary text-primary-foreground"
                      : "self-start rounded-bl-md bg-secondary text-foreground"
                  }`}
                >
                  {msg.text}
                </div>
              ))}
            </div>
          </div>

          {/* Call Script */}
          <div className="overflow-hidden rounded-2xl border border-border bg-card">
            <div className="flex items-center gap-3 border-b border-border bg-secondary px-5 py-3">
              <FileText className="h-4 w-4 text-primary" />
              <span className="text-sm font-semibold text-foreground">
                Live Qualification — Call Script
              </span>
            </div>
            <div className="p-4">
              <Image
                src="/images/call-script.png"
                alt="Sales call qualification script showing intro, qualification questions, booking, and confirmation steps"
                width={500}
                height={600}
                className="w-full rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Follow-up schedule */}
        <div className="mt-12 overflow-hidden rounded-2xl border border-border bg-card">
          <div className="flex items-center gap-3 border-b border-border bg-secondary px-5 py-3">
            <Phone className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold text-foreground">
              Golden Follow-Up Schedule
            </span>
          </div>
          <div className="p-6">
            <p className="mb-6 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Persistence is the system. Most homeowners don{"'"}t answer on the
              first try — our reps follow a structured cadence that runs for 30+ days.
            </p>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {followUpDays.map((item) => (
                <div
                  key={item.day}
                  className="rounded-xl border border-border bg-secondary/50 p-4"
                >
                  <span className="mb-2 inline-block rounded-md bg-primary/10 px-2.5 py-1 text-xs font-bold text-primary">
                    {item.day}
                  </span>
                  <div className="flex flex-col gap-1.5">
                    {item.actions.map((action) => (
                      <span
                        key={action}
                        className="text-xs text-muted-foreground"
                      >
                        {action}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
