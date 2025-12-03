export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">About Me</h2>
            <div className="space-y-4 text-foreground/70 leading-relaxed">
              <p>
                I'm a UX/UI designer with 6+ years of experience creating digital experiences that users love. My
                journey began with a passion for solving complex problems through intuitive design.
              </p>
              <p>
                I specialize in user research, interaction design, and creating comprehensive design systems. I believe
                that great design is invisible—it feels natural and effortless.
              </p>
              <p>
                When I'm not designing, I'm exploring new design trends, writing about design thinking, or mentoring
                junior designers in the community.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="p-6 rounded-lg bg-background border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-2">Research-Driven</h3>
              <p className="text-foreground/60">Every design decision is backed by user research and data analysis.</p>
            </div>
            <div className="p-6 rounded-lg bg-background border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-2">Accessibility First</h3>
              <p className="text-foreground/60">Designing inclusive experiences that work for everyone.</p>
            </div>
            <div className="p-6 rounded-lg bg-background border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-2">System Thinker</h3>
              <p className="text-foreground/60">Creating scalable design systems for consistency at scale.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
