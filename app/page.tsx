import { HeroSlide } from "@/components/slides/hero-slide"
import { OverviewSlide } from "@/components/slides/overview-slide"
import { OutreachSlide } from "@/components/slides/outreach-slide"
import { FunnelSlide } from "@/components/slides/funnel-slide"
import { SalesSlide } from "@/components/slides/sales-slide"
import { DeliverySlide } from "@/components/slides/delivery-slide"
import { ClosingSlide } from "@/components/slides/closing-slide"
import { SlideNav } from "@/components/slide-nav"

export default function Page() {
  return (
    <main className="relative">
      <SlideNav />

      <div id="hero">
        <HeroSlide />
      </div>

      <div className="mx-auto h-px max-w-md bg-border" />

      <div id="overview">
        <OverviewSlide />
      </div>

      <div className="mx-auto h-px max-w-md bg-border" />

      <div id="outreach">
        <OutreachSlide />
      </div>

      <div className="mx-auto h-px max-w-md bg-border" />

      <div id="funnel">
        <FunnelSlide />
      </div>

      <div className="mx-auto h-px max-w-md bg-border" />

      <div id="sales">
        <SalesSlide />
      </div>

      <div className="mx-auto h-px max-w-md bg-border" />

      <div id="delivery">
        <DeliverySlide />
      </div>

      <div className="mx-auto h-px max-w-md bg-border" />

      <div id="closing">
        <ClosingSlide />
      </div>
    </main>
  )
}
