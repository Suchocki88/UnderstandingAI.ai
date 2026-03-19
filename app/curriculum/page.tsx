"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";
export default function Page() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;
    const handleLoad = () => {
      window.scrollTo(0, 0);
    };
    iframe.addEventListener("load", handleLoad);
    return () => iframe.removeEventListener("load", handleLoad);
  }, []);
   return (
    <main style={{ fontFamily: "Arial, sans-serif", color: "#1f2937", lineHeight: 1.6 }}>

      {/* HERO */}
      <section
        style={{
          position: "relative",
          backgroundImage: "url('/images/hero-ai.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "80px 24px",
          color: "white",
          textAlign: "center",
        }}
      >
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.65)" }} />
        <div style={{ maxWidth: 860, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <p style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: "#f59e0b", marginBottom: 16 }}>
            The Core Curriculum
          </p>
          <h1 style={{ fontSize: 48, lineHeight: 1.1, margin: "0 0 24px" }}>
            Understanding and Working with AI
          </h1>
          <p style={{ fontSize: 20, color: "rgba(255,255,255,0.8)", maxWidth: 680, margin: "0 auto 32px" }}>
            One curriculum. Multiple formats. Available through print, online, and classroom platforms — each designed to fit a different learning context.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="/images/UAIFrontMatter.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "#f59e0b",
                color: "#0f172a",
                padding: "12px 24px",
                borderRadius: 8,
                textDecoration: "none",
                fontWeight: 700,
                fontSize: 15,
              }}
            >
              Download the Front Matter →
            </a>
            <Link
              href="#pathways"
              style={{
                border: "2px solid rgba(255,255,255,0.4)",
                color: "white",
                padding: "12px 24px",
                borderRadius: 8,
                textDecoration: "none",
                fontWeight: 600,
                fontSize: 15,
              }}
            >
              See How to Access It
            </Link>
          </div>
        </div>
      </section>

      {/* EIGHT HABITS OF MIND */}
      <section style={{ background: "#0f172a", color: "white", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: 760, margin: "0 auto 56px" }}>
            <p style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: "#f59e0b", marginBottom: 16 }}>
              The Program&apos;s Guiding Principles
            </p>
            <h2 style={{ fontSize: 40, margin: 0 }}>Eight Habits of Mind for Working with AI</h2>
            <p style={{ marginTop: 16, fontSize: 18, color: "rgba(255,255,255,0.7)" }}>
              Each chapter of the program opens with one of these habits. Together they form a practical philosophy for anyone who works with AI.
            </p>
          </div>

          <style>{`
            .habit-item { border-bottom: 1px solid rgba(255,255,255,0.1); }
            .habit-item:first-of-type { border-top: 1px solid rgba(255,255,255,0.1); }
            .habit-item summary {
              list-style: none;
              cursor: pointer;
              padding: 20px 0;
              display: flex;
              align-items: center;
              gap: 20px;
              user-select: none;
            }
            .habit-item summary::-webkit-details-marker { display: none; }
            .habit-item summary:hover .habit-title { color: #f59e0b; }
            .habit-item[open] summary .habit-title { color: #f59e0b; }
            .habit-item summary::after { content: '+'; font-size: 22px; color: rgba(255,255,255,0.4); margin-left: auto; }
            .habit-item[open] summary::after { content: '−'; color: #f59e0b; }
            .habit-body { padding: 0 0 24px 60px; color: rgba(255,255,255,0.75); font-size: 16px; line-height: 1.8; }
          `}</style>

          <div style={{ maxWidth: 860, margin: "0 auto" }}>

            <details className="habit-item">
              <summary>
                <span style={{ fontSize: 28, fontWeight: 900, color: "#f59e0b", flexShrink: 0, width: 40 }}>1</span>
                <span className="habit-title" style={{ fontSize: 18, fontWeight: 700, color: "white" }}>Seek the Opposing View <span style={{ fontSize: 13, fontWeight: 400, color: "rgba(255,255,255,0.4)", marginLeft: 8 }}>click to read</span></span>
              </summary>
              <p className="habit-body">AI is designed to agree with you. That&apos;s a problem. If you don&apos;t actively ask for the opposing view, you won&apos;t get it. AI defaults to reinforcing what you already believe. For anything with real stakes — a decision, a negotiation, an argument — it&apos;s your responsibility to ask for the downsides, the counterarguments, and the perspectives you&apos;d rather not hear. Otherwise, you&apos;re sitting in an echo chamber with a very articulate mirror.</p>
            </details>

            <details className="habit-item">
              <summary>
                <span style={{ fontSize: 28, fontWeight: 900, color: "#f59e0b", flexShrink: 0, width: 40 }}>2</span>
                <span className="habit-title" style={{ fontSize: 18, fontWeight: 700, color: "white" }}>Prompt with Purpose <span style={{ fontSize: 13, fontWeight: 400, color: "rgba(255,255,255,0.4)", marginLeft: 8 }}>click to read</span></span>
              </summary>
              <p className="habit-body">Prompting is a conversation with purpose. At first, working with AI feels technical — structures, strategies, careful wording. Over time you discover something simpler: it&apos;s a conversation where the subject never grows stale because you own it. The real skill is listening to what the AI gives you and knowing where to steer next. Each response is not an endpoint but a signal. You know fluency is developing when conversations become efficient and meaningful. That shift isn&apos;t a technique. It&apos;s a habit.</p>
            </details>

            <details className="habit-item">
              <summary>
                <span style={{ fontSize: 28, fontWeight: 900, color: "#f59e0b", flexShrink: 0, width: 40 }}>3</span>
                <span className="habit-title" style={{ fontSize: 18, fontWeight: 700, color: "white" }}>You Are the Author <span style={{ fontSize: 13, fontWeight: 400, color: "rgba(255,255,255,0.4)", marginLeft: 8 }}>click to read</span></span>
              </summary>
              <p className="habit-body">You are the author. AI is the instrument. AI generates. You select, shape, and direct. The quality of any AI collaboration depends not on the tool but on the taste, vision, and judgment of the person using it. AI brings speed, variation, and tireless iteration. You bring lived experience, editorial instinct, and the ability to know when something rings true. Authorship isn&apos;t who types the words — it&apos;s who decides what stays.</p>
            </details>

            <details className="habit-item">
              <summary>
                <span style={{ fontSize: 28, fontWeight: 900, color: "#f59e0b", flexShrink: 0, width: 40 }}>4</span>
                <span className="habit-title" style={{ fontSize: 18, fontWeight: 700, color: "white" }}>Iterate <span style={{ fontSize: 13, fontWeight: 400, color: "rgba(255,255,255,0.4)", marginLeft: 8 }}>click to read</span></span>
              </summary>
              <p className="habit-body">The best prompt is the second one. Your first prompt is a rough draft of your thinking. The real work begins when you see the output, diagnose what&apos;s missing, and refine. Each iteration teaches you something the previous prompt couldn&apos;t — because you hadn&apos;t yet seen what happened without it. Iteration isn&apos;t a workaround for imperfect AI. It&apos;s how the process is designed to work.</p>
            </details>

            <details className="habit-item">
              <summary>
                <span style={{ fontSize: 28, fontWeight: 900, color: "#f59e0b", flexShrink: 0, width: 40 }}>5</span>
                <span className="habit-title" style={{ fontSize: 18, fontWeight: 700, color: "white" }}>Match the Tool to the Stakes <span style={{ fontSize: 13, fontWeight: 400, color: "rgba(255,255,255,0.4)", marginLeft: 8 }}>click to read</span></span>
              </summary>
              <p className="habit-body">AI is equally willing to help you name a pet or draft a legal contract. It brings the same cheerful confidence to both. But you shouldn&apos;t bring the same level of trust to both. What are the consequences if this output is wrong? The answer should determine how much verification, how many models, and how much of your own judgment you bring to the table.</p>
            </details>

            <details className="habit-item">
              <summary>
                <span style={{ fontSize: 28, fontWeight: 900, color: "#f59e0b", flexShrink: 0, width: 40 }}>6</span>
                <span className="habit-title" style={{ fontSize: 18, fontWeight: 700, color: "white" }}>Know When to Stop <span style={{ fontSize: 13, fontWeight: 400, color: "rgba(255,255,255,0.4)", marginLeft: 8 }}>click to read</span></span>
              </summary>
              <p className="habit-body">Know when to stop asking AI. There&apos;s a point in any AI session where you&apos;ve gotten what you need but you keep going — refining, asking for one more variation, tweaking something that was already good enough. The returns diminish fast, but the conversation is frictionless so you don&apos;t notice. This isn&apos;t about protecting your creativity. It&apos;s about respecting your time. Learn to recognize the moment when the next prompt is more a sign of addiction than a sign of improvement.</p>
            </details>

            <details className="habit-item">
              <summary>
                <span style={{ fontSize: 28, fontWeight: 900, color: "#f59e0b", flexShrink: 0, width: 40 }}>7</span>
                <span className="habit-title" style={{ fontSize: 18, fontWeight: 700, color: "white" }}>Don&apos;t Outsource Your Discomfort <span style={{ fontSize: 13, fontWeight: 400, color: "rgba(255,255,255,0.4)", marginLeft: 8 }}>click to read</span></span>
              </summary>
              <p className="habit-body">Notice when you&apos;re outsourcing your discomfort. Some of the most important thinking is uncomfortable — sitting with ambiguity, making a decision without full information, facing a blank page. AI removes that discomfort instantly, and that feels like progress. But discomfort is often where judgment forms. If you find yourself reaching for AI every time something feels hard or uncertain, ask whether you&apos;re solving a problem or avoiding one.</p>
            </details>

            <details className="habit-item">
              <summary>
                <span style={{ fontSize: 28, fontWeight: 900, color: "#f59e0b", flexShrink: 0, width: 40 }}>8</span>
                <span className="habit-title" style={{ fontSize: 18, fontWeight: 700, color: "white" }}>Protect Your Attention <span style={{ fontSize: 13, fontWeight: 400, color: "rgba(255,255,255,0.4)", marginLeft: 8 }}>click to read</span></span>
              </summary>
              <p className="habit-body">Your most original thinking rarely happens inside an AI session. It happens while walking, driving, cooking, staring out a window — when your mind is free to wander without a prompt and response cycle shaping its direction. Treat AI as a place you visit, not a place you live. The best collaborations with AI include time spent thinking without it. Take a break. Go outside.</p>
            </details>

          </div>
        </div>
      </section>

      {/* VIDEO */}
      <section style={{ background: "#ffffff", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 48, alignItems: "center" }}>
          <div>
            <p style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: "#f59e0b" }}>
              Sample Lesson
            </p>
            <h2 style={{ fontSize: 36, margin: "12px 0 16px" }}>Lesson 1.1 — Three Kinds of Intelligence</h2>
            <p style={{ fontSize: 18, color: "#4b5563" }}>
              Every core lesson is accompanied by a video from the author. This is the opening lesson of the program, a great place to get a feel for the approach, the pacing, and the voice of the curriculum.
            </p>
            <p style={{ marginTop: 16, fontSize: 16, color: "#6b7280" }}>
              The curriculum spans eight chapters across two volumes, moving from the foundations of how AI works to its societal, ethical, and creative implications.
            </p>
          </div>
          <div style={{ position: "relative", display: "block", maxWidth: "100%" }}>
            <div style={{ paddingTop: "56.25%", position: "relative" }}>
              <iframe
                src="https://players.brightcove.net/2505476419001/ocOFOM0IrR_default/index.html?videoId=6385750388112"
                allowFullScreen
                allow="encrypted-media"
                style={{ position: "absolute", top: 0, right: 0, bottom: 0, left: 0, width: "100%", height: "100%", borderRadius: 12 }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* FIVE LESSON TYPES */}
      <section style={{ background: "#f8fafc", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: 760, margin: "0 auto 48px" }}>
            <p style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: "#f59e0b" }}>
              How It&apos;s Structured
            </p>
            <h2 style={{ fontSize: 40, marginTop: 12 }}>Five Types of Lessons</h2>
            <p style={{ marginTop: 16, fontSize: 20, color: "#6b7280" }}>
              This isn&apos;t a program you read and nod at. Every chapter is built around five lesson types that take you from concept to application to reflection.
            </p>
          </div>

          {/* Row 1 - three cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, marginBottom: 24 }}>
            <div style={{ background: "#ffffff", border: "1px solid #e5e7eb", borderRadius: 16, padding: 28, borderTop: "4px solid #f59e0b" }}>
              <h3 style={{ margin: "0 0 12px", fontSize: 20 }}>📖 Core Lesson</h3>
              <p style={{ color: "#4b5563", margin: 0 }}>
                The conceptual foundation of each topic. Clear, accessible writing paired with a video lesson from the author. This is where the big ideas land — what AI is, how it works, and what it means.
              </p>
            </div>
            <div style={{ background: "#ffffff", border: "1px solid #e5e7eb", borderRadius: 16, padding: 28, borderTop: "4px solid #8b5cf6" }}>
              <h3 style={{ margin: "0 0 12px", fontSize: 20 }}>🔦 Spotlight</h3>
              <p style={{ color: "#4b5563", margin: 0 }}>
                Essays and case studies that extend core ideas into the real world. AI in warfare, AI and Bitcoin, algorithmic justice, deepfakes. These are the lessons that make people stop and think.
              </p>
            </div>
            <div style={{ background: "#ffffff", border: "1px solid #e5e7eb", borderRadius: 16, padding: 28, borderTop: "4px solid #06b6d4" }}>
              <h3 style={{ margin: "0 0 12px", fontSize: 20 }}>🔬 Lab</h3>
              <p style={{ color: "#4b5563", margin: 0 }}>
                Guided experiments with AI conducted in a methodical, scientific manner. It&apos;s one thing to be told how AI behaves. It&apos;s another to discover it yourself, including its biases, its limits, and its surprises.
              </p>
            </div>
          </div>

          {/* Row 2 - two cards centered */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24, maxWidth: "66%", margin: "0 auto" }}>
            <div style={{ background: "#ffffff", border: "1px solid #e5e7eb", borderRadius: 16, padding: 28, borderTop: "4px solid #ec4899" }}>
              <h3 style={{ margin: "0 0 12px", fontSize: 20 }}>✍️ Creative Project</h3>
              <p style={{ color: "#4b5563", margin: 0 }}>
                A sustained creative writing project such as a novel, short story collection, poetry, memoir, or screenplay, developed in collaboration with AI. These lessons replace writer&apos;s block with writer&apos;s joy, guiding you toward what we call the immersive experience.
              </p>
            </div>
            <div style={{ background: "#ffffff", border: "1px solid #e5e7eb", borderRadius: 16, padding: 28, borderTop: "4px solid #10b981" }}>
              <h3 style={{ margin: "0 0 12px", fontSize: 20 }}>💭 Reflection</h3>
              <p style={{ color: "#4b5563", margin: 0 }}>
                The joy of any journey is reflecting on where you&apos;re going and where you&apos;ve been. Reflection lessons help you internalize what you&apos;ve experienced, moving this beyond information and into genuine understanding. In the high school program, these become Discussion Days.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FIELD JOURNAL */}
      <section style={{ background: "#111827", color: "white", padding: "80px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: "#f59e0b" }}>
            The Learning Philosophy
          </p>
          <h2 style={{ fontSize: 40, marginTop: 12 }}>The Field Journal Approach</h2>
          <p style={{ marginTop: 24, fontSize: 20, color: "rgba(255,255,255,0.8)", maxWidth: 720, margin: "24px auto 0" }}>
            This program treats AI literacy as an expedition, not a lecture. As with any expedition, the most valuable asset becomes the notes you take along the journey.
          </p>
          <p style={{ marginTop: 24, fontSize: 20, color: "rgba(255,255,255,0.8)", maxWidth: 720, margin: "24px auto 0" }}>
            Throughout the program, learners maintain a field journal where they record observations from labs, insights from spotlights, and reflections on their creative work. It&apos;s through this active engagement that the concepts stop being abstract and start being real.
          </p>
          <blockquote style={{
            marginTop: 40,
            borderLeft: "4px solid #f59e0b",
            paddingLeft: 24,
            textAlign: "left",
            fontStyle: "italic",
            fontSize: 22,
            color: "rgba(255,255,255,0.9)",
            maxWidth: 720,
            margin: "40px auto 0",
          }}>
            "You&apos;ve been trying to explore all these years only by walking. This program gives you an electric bicycle."
          </blockquote>
        </div>
      </section>

      {/* HOW YOU ACCESS IT */}
      <section id="pathways" style={{ background: "#ffffff", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: 760, margin: "0 auto 48px" }}>
            <p style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: "#f59e0b" }}>
              Access Options
            </p>
            <h2 style={{ fontSize: 40, marginTop: 12 }}>The Same Curriculum, Multiple Formats</h2>
            <p style={{ marginTop: 16, fontSize: 20, color: "#6b7280" }}>
              Whether you prefer print, a structured online program, or a full classroom platform, the core curriculum is the same. What differs is the delivery and the tools around it.
            </p>
          </div>
          <div style={{ display: "grid", gap: 32 }}>

            {/* Books */}
            <div style={{ border: "1px solid #e5e7eb", borderRadius: 16, padding: 32, background: "#f8fafc", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24, alignItems: "center" }}>
              <div>
                <h3 style={{ fontSize: 24, margin: "0 0 12px", color: "#1f2937" }}>📚 The Books</h3>
                <p style={{ color: "#4b5563", marginTop: 0 }}>
                  The most direct path. Order Volume 1 and Volume 2 as print-on-demand books, which are beautifully human designed and always up-to-date via IngramSpark. QR codes throughout connect you to the video lessons, so your smartphone becomes part of the experience. Simple, affordable, and complete.
                </p>
                <div style={{ marginTop: 16, display: "flex", gap: 16, flexWrap: "wrap" }}>
                  <a href="https://shop.ingramspark.com/b/084?params=4Ubgowqn33dPkRQlH6Lc3HmeHl43roEnJHw4n0t9uEd" target="_blank" rel="noopener noreferrer" style={{ color: "#2563eb", fontWeight: 700, textDecoration: "none" }}>Order Volume 1 — $19.99 →</a>
                  <a href="https://shop.ingramspark.com/b/084?params=2SR8fnMJdGddfDPH5kQLrD6P0VrPHPof8SrYclByl9q" target="_blank" rel="noopener noreferrer" style={{ color: "#2563eb", fontWeight: 700, textDecoration: "none" }}>Order Volume 2 — $19.99 →</a>
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "center", gap: 20 }}>
                <img src="/images/volume1.jpg" alt="Volume 1" style={{ width: 160, borderRadius: 8, boxShadow: "0 8px 20px rgba(0,0,0,0.2)" }} />
                <img src="/images/volume2.jpg" alt="Volume 2" style={{ width: 160, borderRadius: 8, boxShadow: "0 8px 20px rgba(0,0,0,0.2)" }} />
              </div>
            </div>

            {/* Conceptual Academy */}
            <div style={{ border: "2px solid #ec4899", borderRadius: 16, padding: 32, background: "#fdf2f8", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24, alignItems: "center" }}>
              <div>
                <h3 style={{ fontSize: 24, margin: "0 0 12px", color: "#1f2937" }}>🎓 Conceptual Academy</h3>
                <p style={{ color: "#4b5563", marginTop: 0 }}>
                  The full online experience. The same curriculum pages, in color, are embedded directly into the platform alongside three AI instances: Alia-Tutor, Alia-Creative, and Alia-Lab. Learners earn points through video quizzes (5 pts), reading checks (5 pts), and homework questions (10 pts). Reach the threshold for each chapter and download a 5-hour continuing education certificate with your name and date. Available in 5-hour increments — perfect for professionals seeking CEUs, PD hours, or simply a structured path through the material.
                </p>
                <Link href="/academy" style={{ color: "#be185d", fontWeight: 700, textDecoration: "none" }}>
                  Learn more about Conceptual Academy →
                </Link>
              </div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <img src="/images/CALogo590.png" alt="Conceptual Academy" style={{ width: 220 }} />
              </div>
            </div>

            {/* PocketLab */}
            <div style={{ border: "2px solid #f59e0b", borderRadius: 16, padding: 32, background: "#fff7ed", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24, alignItems: "center" }}>
              <div>
                <h3 style={{ fontSize: 24, margin: "0 0 12px", color: "#1f2937" }}>🏫 PocketLab — K–12 Classroom</h3>
                <p style={{ color: "#4b5563", marginTop: 0 }}>
                  The complete high school classroom program, delivered through the PocketLab Notebook platform. Teachers get a full semester of structured lessons — Core, Spotlight, Lab, Project, and Discussion Days — with teacher guides, assessment tools, and Alia AI built in. The Conceptual Academy program is the ideal preparation for teachers who want to experience the curriculum themselves before bringing it to students on the PocketLab Notebook platform designed specifically for high schools.
                </p>
                <Link href="/pocketlab" style={{ color: "#c2410c", fontWeight: 700, textDecoration: "none" }}>
                  Learn more about the PocketLab pathway →
                </Link>
              </div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <img src="/images/pocketlab-logo.png" alt="PocketLab" style={{ width: 220 }} />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ALIA EMBED */}
      <section style={{ background: "#f8fafc", padding: "80px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <p style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: "#f59e0b" }}>
              Ask Alia
            </p>
            <h2 style={{ fontSize: 40, marginTop: 12 }}>Questions About the Curriculum?</h2>
            <p style={{ marginTop: 16, fontSize: 20, color: "#6b7280", maxWidth: 640, margin: "16px auto 0" }}>
              Alia is the AI learning assistant built specifically for this program. Ask her anything about the curriculum, the lesson types, or what to expect.
            </p>
          </div>
          <iframe
            ref={iframeRef}
            src="https://ai-pathways-hub.vercel.app"
            width="100%"
            height="700px"
            style={{ border: "none", borderRadius: 12, boxShadow: "0 4px 20px rgba(0,0,0,0.1)" }}
            allow="clipboard-write"
            tabIndex={-1}
            scrolling="no"
          />
        </div>
      </section>

    </main>
  );
}
