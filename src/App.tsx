import {motion} from 'framer-motion'
import {ArrowRight, Instagram, MapPin, MessageCircle} from 'lucide-react'

import {Button} from './components/ui/button'
import {contact, designer, projects} from './data'
import {useEffect} from "react";
import {captureMessage} from "./telemetry";

const easing = [0.22, 1, 0.36, 1] as const

const fadeUp = {
  initial: {opacity: 0, y: 24},
  whileInView: {opacity: 1, y: 0},
  transition: {duration: 0.9, ease: easing},
  viewport: {once: true, amount: 0.4},
}

const stagger = {
  initial: {opacity: 1},
  whileInView: {
    opacity: 1,
    transition: {staggerChildren: 0.12},
  },
  viewport: {once: true, amount: 0.2},
}

type Project = (typeof projects)[number]
type ResponsiveImage = typeof designer.portrait

type ResponsiveImageProps = {
  image: ResponsiveImage
  alt: string
  className?: string
  sizes: string
  loading?: 'lazy' | 'eager'
  fetchPriority?: 'high' | 'low' | 'auto'
}

const projectCardSizes = '(min-width: 1280px) 360px, (min-width: 768px) 45vw, 90vw'
const heroSizes = '(min-width: 1024px) 40vw, 90vw'
const approachSizes = '(min-width: 1024px) 32vw, 85vw'

function ResponsiveImage({
  image,
  alt,
  className,
  sizes,
  loading = 'lazy',
  fetchPriority,
}: ResponsiveImageProps) {
  return (
    <picture className="block h-full w-full">
      <source srcSet={image.srcSetAvif} type="image/avif" sizes={sizes} />
      <source srcSet={image.srcSetWebp} type="image/webp" sizes={sizes} />
      <img
        src={image.src}
        srcSet={image.srcSet}
        sizes={sizes}
        alt={alt}
        loading={loading}
        decoding="async"
        className={className}
        fetchPriority={fetchPriority}
      />
    </picture>
  )
}

function ProjectCard({project}: { project: Project }) {
  return (
    <motion.article
      className="project-card relative overflow-hidden rounded-[32px] border border-[var(--stroke)] bg-white/70 shadow-soft"
      initial={{opacity: 0, y: 24}}
      whileInView={{opacity: 1, y: 0}}
      transition={{duration: 0.8, ease: easing}}
      viewport={{once: true, amount: 0.3}}
    >
      <div className="aspect-[4/5] overflow-hidden">
        <ResponsiveImage
          image={project.image}
          alt={`${project.title} interior project`}
          sizes={projectCardSizes}
          className="project-card__image h-full w-full object-cover transition duration-700"
        />
      </div>
      <div className="space-y-2 px-6 pb-7 pt-6">
        <p className="text-xs uppercase tracking-[0.28em] text-[var(--muted)]">{project.descriptor}</p>
        <h3 className="font-serif text-2xl text-[var(--ink)]">{project.title}</h3>
        <p className="text-sm text-[var(--muted)]">{project.summary}</p>
      </div>
      <div
        className="project-card__overlay pointer-events-none absolute inset-0 flex items-end bg-[var(--overlay)] opacity-0 transition duration-500">
        <p className="px-6 pb-8 text-sm text-white/90">{project.summary}</p>
      </div>
    </motion.article>
  )
}

function App() {
  useEffect(() => {
    captureMessage('page-visit');
  }, [])

  return (
    <div className="min-h-screen text-[var(--ink)]">
      <header className="px-6 pt-8">
        <div
          className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-[var(--stroke)] bg-white/70 px-6 py-3 shadow-soft">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-[var(--olive)]" aria-hidden="true"/>
            <span className="text-sm font-semibold uppercase tracking-[0.32em]">{designer.name}</span>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-[var(--muted)] md:flex">
            <a href="#about" className="transition hover:text-[var(--ink)]">
              About
            </a>
            <a href="#projects" className="transition hover:text-[var(--ink)]">
              Projects
            </a>
            <a href="#contact" className="transition hover:text-[var(--ink)]">
              Contact
            </a>
          </nav>
          <Button asChild variant="outline" size="sm" onClick={() => captureMessage('book-a-consult-click')}>
            <a href={contact.whatsappLink} target="_blank" rel="noreferrer">
              Book a consult
            </a>
          </Button>
        </div>
      </header>

      <main className="space-y-24 pb-24">
        <section className="px-6 pt-20">
          <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div
              className="space-y-8"
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.9, ease: easing}}
            >
              <div className="space-y-4">
                <p className="text-sm uppercase tracking-[0.3em] text-[var(--muted)]">{designer.title}</p>
                <h1 className="text-4xl font-semibold leading-tight text-[var(--ink)] sm:text-5xl lg:text-6xl">
                  <span className="font-serif">{designer.tagline}</span>
                </h1>
              </div>
              <p className="max-w-xl text-base text-[var(--muted)] sm:text-lg">{designer.intro}</p>
              <div className="flex flex-wrap items-center gap-4">
                <Button asChild size="lg">
                  <a href="#projects">
                    View Projects
                    <ArrowRight size={18}/>
                  </a>
                </Button>
                <Button asChild variant="secondary" size="lg"
                        onClick={() => captureMessage('contact-whatsapp-click')}>
                  <a href={contact.whatsappLink} target="_blank" rel="noreferrer">
                    <MessageCircle size={18}/> Contact on WhatsApp
                  </a>
                </Button>
              </div>
              <div className="flex items-center gap-3 text-sm text-[var(--muted)]">
                <MapPin size={16}/>
                <span>{designer.location}</span>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{opacity: 0, scale: 0.96}}
              animate={{opacity: 1, scale: 1}}
              transition={{duration: 0.9, ease: easing}}
            >
              <div className="absolute -inset-6 -z-10 rounded-[48px] bg-[var(--glow)] blur-3xl"/>
              <ResponsiveImage
                image={designer.portrait}
                alt={`${designer.name} portrait`}
                sizes={heroSizes}
                loading="eager"
                fetchPriority="high"
                className="w-full rounded-[48px] border border-[var(--stroke)] object-cover shadow-soft"
              />
            </motion.div>
          </div>
        </section>

        <section id="about" className="px-6">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <motion.div {...fadeUp} className="space-y-6">
              <div
                className="inline-flex items-center gap-3 rounded-full border border-[var(--stroke)] bg-white/70 px-4 py-2 text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
                About the designer
              </div>
              <h2 className="text-3xl font-semibold text-[var(--ink)] sm:text-4xl">
                <span className="font-serif">Designing interiors that capture mood, light, and life.</span>
              </h2>
              <p className="text-base text-[var(--muted)] sm:text-lg">{designer.bio}</p>
              <div className="space-y-3">
                {designer.values.map((value) => (
                  <div key={value} className="flex items-center gap-3 text-sm text-[var(--muted)]">
                    <span className="h-2 w-2 rounded-full bg-[var(--olive)]" aria-hidden="true"/>
                    <span>{value}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              {...fadeUp}
              className="relative w-full overflow-hidden rounded-[36px] border border-[var(--stroke)] bg-white/70 shadow-soft lg:mx-auto lg:w-[60%] lg:justify-self-center"
            >
              <ResponsiveImage
                image={designer.approachPortrait}
                alt={`${designer.name} portrait`}
                sizes={approachSizes}
                className="h-full w-full object-cover"
              />
            </motion.div>
          </div>
        </section>

        <section id="projects" className="px-6">
          <div className="mx-auto max-w-6xl space-y-10">
            <motion.div {...fadeUp} className="flex flex-wrap items-end justify-between gap-6">
              <div className="space-y-4">
                <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">Featured
                  projects</p>
                <h2 className="text-3xl font-semibold text-[var(--ink)] sm:text-4xl">
                  <span className="font-serif">Past work with character and warmth.</span>
                </h2>
              </div>
              <p className="max-w-md text-sm text-[var(--muted)]">
                A curated selection of recent interiors that highlight Veronika&apos;s approach to
                layered materials,
                subtle contrast, and personal storytelling.
              </p>
            </motion.div>
            <motion.div
              {...stagger}
              className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
            >
              {projects.map((project) => (
                <ProjectCard key={project.title} project={project}/>
              ))}
            </motion.div>
          </div>
        </section>

        <section id="contact" className="px-6">
          <div className="mx-auto max-w-6xl">
            <motion.div
              {...fadeUp}
              className="relative overflow-hidden rounded-[40px] border border-[var(--stroke)] bg-[var(--ink)] px-8 py-12 text-white shadow-soft sm:px-12"
            >
              <div
                className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[var(--olive)]/40 blur-3xl"/>
              <div className="relative grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
                <div className="space-y-6">
                  <p className="text-xs uppercase tracking-[0.3em] text-white/70">Let&apos;s
                    connect</p>
                  <h2 className="text-3xl font-semibold sm:text-4xl">
                    <span className="font-serif">Ready to shape your next interior?</span>
                  </h2>
                  <p className="text-sm text-white/80">
                    Reach out for a consultation, project inquiry, or to schedule a walkthrough.
                    Veronika responds
                    within 24 hours.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button
                      asChild
                      size="lg"
                      variant="outline"
                      className="border-white/30 bg-white text-[var(--ink)] hover:bg-white/90"
                      onClick={() => captureMessage('phone-number-click')}
                    >
                      <a href={contact.whatsappLink} target="_blank" rel="noreferrer">
                        <MessageCircle size={18}/> {contact.whatsappDisplay}
                      </a>
                    </Button>
                  </div>
                </div>
                <div
                  className="flex flex-col justify-center gap-6 rounded-[28px] border border-white/20 bg-white/10 p-6">
                  <div className="space-y-2">
                    <p className="text-xs uppercase tracking-[0.3em] text-white/60">Email</p>
                    <a className="text-sm text-white/90"
                       href={`mailto:${contact.email}`}
                       onClick={() => captureMessage('contact-email-click')}
                    >
                      {contact.email}
                    </a>
                  </div>
                  <div className="space-y-2">
                    <p className="text-xs uppercase tracking-[0.3em] text-white/60">Location</p>
                    <p className="text-sm text-white/90">{designer.location}</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-xs uppercase tracking-[0.3em] text-white/60">Instagram</p>
                    <a
                      className="inline-flex items-center gap-2 text-sm text-white/90"
                      href={contact.instagram}
                      target="_blank"
                      rel="noreferrer"
                      onClick={() => captureMessage('instagram-click')}
                    >
                      <Instagram size={16}/> {contact.instagramHandle}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[var(--stroke)] px-6 py-10">
        <div
          className="mx-auto flex max-w-6xl flex-col gap-4 text-sm text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between">
          <span className="font-semibold text-[var(--ink)]">{designer.name}</span>
          <span>© {new Date().getFullYear()} {designer.name}. All rights reserved.</span>
        </div>
      </footer>
    </div>
  )
}

export default App
