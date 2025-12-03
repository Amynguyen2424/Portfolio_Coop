import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background pt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-background pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-6">
          <div className="inline-block">
            <span className="text-sm font-medium text-accent px-3 py-1 rounded-full bg-accent/10 border border-accent/20">
              UX/UI Designer & Strategist
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground text-balance leading-tight">
            Crafting Digital Experiences
          </h1>

          <p className="text-lg sm:text-xl text-foreground/70 max-w-2xl mx-auto text-balance leading-relaxed">
            I design intuitive, user-centered digital products that solve real problems. With a focus on research-driven
            design and pixel-perfect execution.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Link
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium"
            >
              View My Work
              <ArrowRight size={18} />
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground hover:bg-muted transition-colors font-medium"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
