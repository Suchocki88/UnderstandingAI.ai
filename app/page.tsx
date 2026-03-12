import { Link } from "react-router-dom";
import {
  BookOpen,
  GraduationCap,
  Users,
  Lightbulb,
  ArrowRight,
  PlayCircle,
  School,
  Briefcase,
  CheckCircle2,
} from "lucide-react";
import SiteLayout from "@/components/SiteLayout";
import heroBg from "@/assets/hero-bg.jpg";

// Replace these with your actual book cover files when ready.
// Example:
// import volume1Cover from "@/assets/volume-1-cover.jpg";
// import volume2Cover from "@/assets/volume-2-cover.jpg";
// import neolithicCover from "@/assets/the-neolithic-cover.jpg";
// import thresholdCover from "@/assets/threshold-cover.jpg";

const audienceCards = [
  {
    title: "I came from YouTube",
    description:
      "Start with the big picture. See how the books, programs, and platforms fit together.",
    to: "#ecosystem",
    icon: PlayCircle,
  },
  {
    title: "I'm an educator",
    description:
      "Find the pathway that fits your classroom, department, or school community.",
    to: "#pathways",
    icon: School,
  },
  {
    title: "I'm a professional or independent learner",
    description:
      "Explore deeper study, professional development, and Conceptual Academy.",
    to: "#pathways",
    icon: Briefcase,
  },
];



const Index = () => {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-navy/85" />
        </div>

        <div className="container relative z-10 py-20 md:py-32">
          <div className="max-w-4xl">
            <p className="font-body text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              UnderstandingAI.ai
            </p>
            <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-primary-foreground md:text-6xl text-balance">
              Understanding AI Learning Pathways
            </h1>
            <p className="mt-6 max-w-3xl font-body text-lg leading-relaxed text-primary-foreground/85 md:text-xl">
              A cross-disciplinary ecosystem for learning how artificial intelligence works — and how to work thoughtfully, creatively, and responsibly with AI.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#pathways"
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 font-body font-semibold text-accent-foreground transition-transform hover:scale-105"
              >
                Choose Your Pathway <ArrowRight size={18} />
              </a>
              <Link
                to="/curriculum"
                className="inline-flex items-center gap-2 rounded-lg border-2 border-primary-foreground/40 px-6 py-3 font-body font-semibold text-primary-foreground transition-colors hover:border-primary-foreground/80"
              >
                Explore the Curriculum
              </Link>
            </div>
          </div>

          <div className="mt-12 grid gap-4 md:mt-16 md:grid-cols-3">
            {audienceCards.map(({ title, description, to, icon: Icon }) => (
              <a
                key={title}
                href={to}
                className="rounded-xl border border-white/15 bg-white/10 p-5 backdrop-blur-sm transition hover:bg-white/15"
              >
                <Icon className="text-accent" size={22} />
                <h3 className="mt-4 font-display text-lg font-semibold text-primary-foreground">
                  {title}
                </h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-primary-foreground/80">
                  {description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem summary */}
      <section id="ecosystem" className="bg-card py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-body text-sm font-semibold uppercase tracking-widest text-accent">
              The Ecosystem
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-foreground md:text-4xl">
              One Core Curriculum. Three Ways In.
            </h2>
            <p className="mt-5 font-body text-lg leading-relaxed text-muted-foreground">
              The books and stories form the intellectual center of the project. From there, learners, teachers, and institutions can move into the pathway that best fits their goals.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-[1.15fr_1fr]">
            <div className="rounded-2xl border border-border bg-secondary p-8">
              <p className="font-body text-sm font-semibold uppercase tracking-widest text-violet">
                Core Curriculum
              </p>
              <h3 className="mt-3 font-display text-2xl font-bold text-foreground">
                Understanding and Working with AI
              </h3>
              <p className="mt-4 font-body text-base leading-relaxed text-muted-foreground">
                A two-volume curriculum supported by fiction, classroom experiences, and applied pathways for different audiences.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-lg border border-border bg-card p-4">
                  <p className="font-display text-lg font-semibold text-foreground">Volume 1</p>
                  <p className="mt-1 font-body text-sm text-muted-foreground">
                    Foundations, practice, and working with AI.
                  </p>
                </div>
                <div className="rounded-lg border border-border bg-card p-4">
                  <p className="font-display text-lg font-semibold text-foreground">Volume 2</p>
                  <p className="mt-1 font-body text-sm text-muted-foreground">
                    Society, power, creativity, and the future.
                  </p>
                </div>
                <div className="rounded-lg border border-border bg-card p-4">
                  <p className="font-display text-lg font-semibold text-foreground">The Neolithic</p>
                  <p className="mt-1 font-body text-sm text-muted-foreground">
                    Fiction as a lens on the origins of intelligence and creativity.
                  </p>
                </div>
                <div className="rounded-lg border border-border bg-card p-4">
                  <p className="font-display text-lg font-semibold text-foreground">Threshold</p>
                  <p className="mt-1 font-body text-sm text-muted-foreground">
                    Fiction at the frontier of human and machine intelligence.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-warm-gray p-8">
              <p className="font-body text-sm font-semibold uppercase tracking-widest text-accent">
                What this site does
              </p>
              <ul className="mt-5 space-y-4">
                {[
                  "Explains the curriculum and its big ideas.",
                  "Helps visitors choose the right level of involvement.",
                  "Connects YouTube viewers, educators, and independent learners to the right pathway.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 text-accent" size={18} />
                    <span className="font-body text-sm leading-relaxed text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 rounded-xl bg-card p-5">
                <p className="font-display text-lg font-semibold text-foreground">Built to function as a funnel</p>
                <p className="mt-2 font-body text-sm leading-relaxed text-muted-foreground">
                  Someone arriving from YouTube, Google Ads, or a teacher referral should quickly understand the ecosystem and know where to go next.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Curriculum + Book covers */}
      <section className="bg-card py-20 md:py-28">
        <div className="container">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <p className="font-body text-sm font-semibold uppercase tracking-widest text-accent">The Foundation</p>
              <h2 className="mt-3 font-display text-3xl font-bold text-foreground md:text-4xl">
                The Core Curriculum
              </h2>
              <p className="mt-5 font-body text-lg leading-relaxed text-muted-foreground">
                At the heart of the ecosystem are two books that introduce AI literacy conceptually, practically, and humanistically.
              </p>
              <div className="mt-6 space-y-4">
                <div className="rounded-lg border border-border bg-secondary p-4">
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    Understanding and Working with AI — Volume 1
                  </h3>
                  <p className="mt-1 font-body text-sm text-muted-foreground">
                    Foundations, experiments, and working responsibly with AI.
                  </p>
                </div>
                <div className="rounded-lg border border-border bg-secondary p-4">
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    Understanding and Working with AI — Volume 2
                  </h3>
                  <p className="mt-1 font-body text-sm text-muted-foreground">
                    Society, power, bias, creativity, and the future of AI.
                  </p>
                </div>
              </div>
              <Link
                to="/curriculum"
                className="mt-8 inline-flex items-center gap-2 font-body font-semibold text-accent hover:underline"
              >
                Learn more about the curriculum <ArrowRight size={16} />
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex aspect-[3/4] items-center justify-center rounded-2xl border border-dashed border-border bg-secondary p-4 text-center">
                <div>
                  <p className="font-display text-lg font-semibold text-foreground">Volume 1 Cover</p>
                  <p className="mt-2 font-body text-sm text-muted-foreground">
                    Replace this panel with the Volume 1 JPEG.
                  </p>
                </div>
              </div>
              <div className="flex aspect-[3/4] items-center justify-center rounded-2xl border border-dashed border-border bg-secondary p-4 text-center">
                <div>
                  <p className="font-display text-lg font-semibold text-foreground">Volume 2 Cover</p>
                  <p className="mt-2 font-body text-sm text-muted-foreground">
                    Replace this panel with the Volume 2 JPEG.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Novels */}
      <section className="bg-warm-gray py-20 md:py-28">
        <div className="container">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="order-2 grid gap-4 sm:grid-cols-2 md:order-1">
              <div className="flex aspect-[3/4] items-center justify-center rounded-2xl border border-dashed border-border bg-card p-4 text-center">
                <div>
                  <p className="font-display text-lg font-semibold text-foreground">The Neolithic</p>
                  <p className="mt-2 font-body text-sm text-muted-foreground">
                    Replace this panel with the novel cover JPEG.
                  </p>
                </div>
              </div>
              <div className="flex aspect-[3/4] items-center justify-center rounded-2xl border border-dashed border-border bg-card p-4 text-center">
                <div>
                  <p className="font-display text-lg font-semibold text-foreground">Threshold</p>
                  <p className="mt-2 font-body text-sm text-muted-foreground">
                    Replace this panel with the novel cover JPEG.
                  </p>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <p className="font-body text-sm font-semibold uppercase tracking-widest text-violet">
                Fiction as a Lens
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold text-foreground md:text-4xl">
                Stories That Bring AI to Life
              </h2>
              <p className="mt-5 font-body text-lg leading-relaxed text-muted-foreground">
                The fiction titles extend the ecosystem by exploring the human meaning of intelligence, creativity, and technological change.
              </p>
              <div className="mt-6 space-y-4">
                <div className="rounded-lg border border-border bg-card p-4">
                  <h3 className="font-display text-lg font-semibold text-foreground">The Neolithic</h3>
                  <p className="mt-1 font-body text-sm text-muted-foreground">
                    A story connecting early human creativity to the deepest questions AI raises today.
                  </p>
                </div>
                <div className="rounded-lg border border-border bg-card p-4">
                  <h3 className="font-display text-lg font-semibold text-foreground">Threshold</h3>
                  <p className="mt-1 font-body text-sm text-muted-foreground">
                    A novel about standing at the edge of a new era of human and machine intelligence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Pathways */}
      <section id="pathways" className="bg-card py-20 md:py-28">
        <div className="container">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="font-body text-sm font-semibold uppercase tracking-widest text-accent">Choose Your Path</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-foreground md:text-4xl">
              Three Learning Pathways
            </h2>
            <p className="mt-4 font-body text-lg text-muted-foreground">
              Each pathway is built from the same intellectual core, but adapted to a different audience and context.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="group rounded-xl border-2 border-pathway-pocketlab/30 bg-pathway-pocketlab-bg p-8 transition-shadow hover:shadow-xl">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-pathway-pocketlab/15">
                <Lightbulb className="text-pathway-pocketlab" size={24} />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground">PocketLab</h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-muted-foreground">
                A structured program for K–12 classrooms — especially STEM, CTE, and social studies teachers bringing AI literacy to students.
              </p>
              <Link
                to="/pocketlab"
                className="mt-6 inline-flex items-center gap-2 font-body text-sm font-semibold text-pathway-pocketlab hover:underline"
              >
                Learn more <ArrowRight size={14} />
              </Link>
            </div>

            <div className="group rounded-xl border-2 border-pathway-humanities/30 bg-pathway-humanities-bg p-8 transition-shadow hover:shadow-xl">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-pathway-humanities/15">
                <BookOpen className="text-pathway-humanities" size={24} />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground">Humanities Pathway</h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-muted-foreground">
                Designed for English, writing, and interdisciplinary courses — exploring AI through creativity, ethics, and cultural analysis.
              </p>
              <Link
                to="/humanities"
                className="mt-6 inline-flex items-center gap-2 font-body text-sm font-semibold text-pathway-humanities hover:underline"
              >
                Learn more <ArrowRight size={14} />
              </Link>
            </div>

            <div className="group rounded-xl border-2 border-pathway-academy/30 bg-pathway-academy-bg p-8 transition-shadow hover:shadow-xl">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-pathway-academy/15">
                <GraduationCap className="text-pathway-academy" size={24} />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground">Conceptual Academy</h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-muted-foreground">
                An online learning platform for teachers, professionals, and independent learners who want to explore AI literacy more deeply.
              </p>
              <Link
                to="/academy"
                className="mt-6 inline-flex items-center gap-2 font-body text-sm font-semibold text-pathway-academy hover:underline"
              >
                Learn more <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why AI Literacy Matters */}
      <section className="bg-navy py-20 md:py-28">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-body text-sm font-semibold uppercase tracking-widest text-accent">Why This Matters</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy-foreground md:text-4xl">
              AI Literacy Is No Longer Optional
            </h2>
            <p className="mt-6 font-body text-lg leading-relaxed text-navy-foreground/80">
              AI is reshaping education, work, creativity, and public life. This ecosystem helps people understand not just what AI can do, but how to think, write, create, and act responsibly in an AI-shaped world.
            </p>
            <blockquote className="mt-10 border-l-4 border-accent pl-6 text-left">
              <p className="font-display text-xl italic leading-relaxed text-navy-foreground/90 md:text-2xl">
                “AI is not just a technology to learn. It is a technology that reshapes how we think, create, and work.”
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      {/* About the Program */}
      <section className="bg-card py-20 md:py-28">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <Users className="mx-auto text-violet" size={40} />
            <h2 className="mt-4 font-display text-3xl font-bold text-foreground md:text-4xl">
              About the Program
            </h2>
            <p className="mt-6 font-body text-lg leading-relaxed text-muted-foreground">
              Understanding AI Learning Pathways is designed to help students, educators, professionals, and independent learners find a thoughtful entry point into AI literacy. It connects curriculum, stories, classroom tools, and professional learning into one coherent ecosystem.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-body font-semibold text-primary-foreground transition-transform hover:scale-105"
              >
                Learn More About Us <ArrowRight size={18} />
              </Link>
              <a
                href="#pathways"
                className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 font-body font-semibold text-foreground transition-colors hover:bg-secondary"
              >
                Compare the Pathways
              </a>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
};

export default Index;
