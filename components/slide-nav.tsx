"use client"

import { useEffect, useState } from "react"

const sections = [
  { id: "hero", label: "Intro" },
  { id: "overview", label: "Overview" },
  { id: "outreach", label: "Outreach" },
  { id: "funnel", label: "Funnel" },
  { id: "sales", label: "Sales" },
  { id: "delivery", label: "Delivery" },
  { id: "closing", label: "Close" },
]

export function SlideNav() {
  const [active, setActive] = useState("hero")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        }
      },
      { threshold: 0.4 }
    )

    for (const section of sections) {
      const el = document.getElementById(section.id)
      if (el) observer.observe(el)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <nav className="fixed right-6 top-1/2 z-50 hidden -translate-y-1/2 flex-col gap-3 md:flex">
      {sections.map((section) => (
        <button
          key={section.id}
          type="button"
          onClick={() =>
            document.getElementById(section.id)?.scrollIntoView({ behavior: "smooth" })
          }
          className="group flex items-center gap-2"
          aria-label={`Go to ${section.label}`}
        >
          <span
            className={`text-xs font-medium opacity-0 transition-opacity group-hover:opacity-100 ${
              active === section.id ? "text-primary opacity-100" : "text-muted-foreground"
            }`}
          >
            {section.label}
          </span>
          <span
            className={`h-2 w-2 rounded-full transition-all ${
              active === section.id
                ? "scale-125 bg-primary"
                : "bg-muted-foreground/30 group-hover:bg-muted-foreground"
            }`}
          />
        </button>
      ))}
    </nav>
  )
}
