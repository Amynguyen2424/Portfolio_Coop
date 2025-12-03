import { Mail, Linkedin, Twitter, Github } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">Let's Connect</h2>
        <p className="text-lg text-foreground/60 mb-12 leading-relaxed">
          I'm always interested in hearing about new projects and opportunities. Feel free to reach out if you'd like to
          collaborate.
        </p>

        <a
          href="mailto:hello@example.com"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-accent text-accent-foreground hover:bg-accent/90 transition-colors font-medium mb-12"
        >
          <Mail size={20} />
          Send me an email
        </a>

        <div className="flex justify-center gap-6">
          <a
            href="#"
            className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-muted text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-muted text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
            aria-label="Twitter"
          >
            <Twitter size={20} />
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-muted text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
        </div>
      </div>
    </section>
  )
}
