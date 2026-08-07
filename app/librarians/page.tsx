import Link from "next/link";

export const metadata = {
  title: "For Librarians | Understanding and Working with AI",
  description:
    "A print-first AI literacy program built for the library. Display it, share it with a teacher, or run it yourself as an enrichment program — no AI expertise required.",
};

const FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfmC3t1awl9T0Ed1JZhtW24XEvp0znPoIITpbwcY7WvqYm12Q/viewform?usp=header";

export default function Page() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif", color: "#1f2937", lineHeight: 1.6 }}>

      {/* HERO */}
      <section style={{ background: "#0f172a", color: "white", padding: "76px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 400px), 1fr))", gap: 48, alignItems: "center" }}>
          <div>
            <p style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: "#5eead4", marginBottom: 16 }}>
              For School &amp; Public Librarians
            </p>
            <h1 style={{ fontSize: "clamp(34px, 6vw, 52px)", lineHeight: 1.08, margin: "0 0 22px" }}>
              The AI question surrounds us. The answer is AI-Ed.
            </h1>
            <p style={{ fontSize: 20, color: "rgba(255,255,255,0.85)", marginBottom: 30 }}>
              <em>Understanding and Working with AI</em> is a print-first AI-Ed program — two
              volumes, a pen, a field journal, and the student&apos;s own AI in small, deliberate doses. Put it on display, share it with a teacher, or run it yourself as an enrichment program.
            </p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <a href={FORM_URL} target="_blank" rel="noopener noreferrer" style={{ background: "#f59e0b", color: "#111827", padding: "15px 28px", borderRadius: 10, textDecoration: "none", fontWeight: 700, fontSize: 16, display: "inline-block" }}>
                Request Your Copies →
              </a>
              <Link href="/curriculum" style={{ border: "2px solid rgba(255,255,255,0.45)", color: "white", padding: "13px 26px", borderRadius: 10, textDecoration: "none", fontWeight: 700, fontSize: 16, display: "inline-block" }}>
                See How It Works
              </Link>
            </div>
          </div>
          <div style={{ textAlign: "center" }}>
            <img src="/images/Volumes12.png" alt="The two volumes of Understanding and Working with AI" style={{ width: "100%", maxWidth: 460 }} />
          </div>
        </div>
      </section>

      {/* WHY THE LIBRARY */}
      <section style={{ background: "#ffffff", padding: "80px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: "#0f766e" }}>
            Why the library
          </p>
          <h2 style={{ fontSize: "clamp(28px, 5vw, 40px)", marginTop: 12 }}>The library reaches all departments.</h2>
          <p style={{ marginTop: 20, fontSize: 20, color: "#4b5563" }}>
            No one is quite sure which department should teach AI-Ed — but the library works to support to all departments. School librarians are certified teachers. They lead information literacy
            every day, which makes AI literacy to fluency a natural fit. In the most print-centered place in the
            building, a print-first AI-Ed program is a homecoming.
          </p>
        </div>

        <div style={{ maxWidth: 980, margin: "44px auto 0", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 240px), 1fr))", gap: 20 }}>
          {[
            ["Belongs to every department", "No turf issues over who teaches AI-Ed — the school library serves the whole school."],
            ["No curriculum commmittee", "It runs as enrichment: a librarian's initiative and a principal's approval with everyone wanting to know how it goes."],
            ["Print-first, screens as needed", "Pen, field journal, and the student uses AI only as directed. Everyone is working with a book, not an app."],
          ].map(([t, b], i) => (
            <div key={i} style={{ background: "#f8fafc", border: "1px solid #e5e7eb", borderRadius: 14, borderTop: "4px solid #0f766e", padding: 24 }}>
              <h3 style={{ margin: "0 0 8px", fontSize: 18 }}>{t}</h3>
              <p style={{ margin: 0, color: "#4b5563", fontSize: 15 }}>{b}</p>
            </div>
          ))}
        </div>
      </section>

      {/* THREE INVITATIONS */}
      <section style={{ background: "#f0fdfa", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: 720, margin: "0 auto 48px" }}>
            <p style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: "#0f766e" }}>
              Three ways to say yes
            </p>
            <h2 style={{ fontSize: "clamp(28px, 5vw, 40px)", marginTop: 12 }}>Display it. Share it. Run it.</h2>
            <p style={{ marginTop: 16, fontSize: 19, color: "#4b5563" }}>
              Take it as far as you like — from a book on the shelf to a program you teach.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))", gap: 24 }}>
            {[
              ["1", "Display it", "You're being asked about AI literacy — here's the print-first answer for your shelf. Handsome, timely, and built for students to pick up on their own.", false],
              ["2", "Share it", "Any teacher in your building can request a free classroom pilot. The copy in your library becomes the whole school's on-ramp.", false],
              ["3", "Run it", "Host it yourself as a study-hall or after-school enrichment program — facilitator guide included.", true],
            ].map(([n, t, b, feature], i) => (
              <div key={i} style={{ background: feature ? "#0f766e" : "#ffffff", color: feature ? "white" : "#1f2937", borderRadius: 16, padding: 30, border: feature ? "none" : "1px solid #d1d5db", boxShadow: feature ? "0 16px 40px rgba(15,118,110,0.28)" : "none", display: "flex", flexDirection: "column" }}>
                <span style={{ width: 34, height: 34, borderRadius: 100, background: feature ? "#f59e0b" : "#0f766e", color: feature ? "#111827" : "white", fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center" }}>{n}</span>
                <h3 style={{ fontSize: 22, margin: "16px 0 10px" }}>{t}</h3>
                <p style={{ margin: 0, fontSize: 16, color: feature ? "rgba(255,255,255,0.9)" : "#4b5563" }}>{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW RUN IT WORKS */}
      <section style={{ background: "#ffffff", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 360px), 1fr))", gap: 48, alignItems: "center" }}>
          <div>
            <p style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: "#0f766e" }}>
              The enrichment model
            </p>
            <h2 style={{ fontSize: "clamp(28px, 5vw, 40px)", margin: "12px 0 20px" }}>Your expertise in linguistics</h2>
            <p style={{ fontSize: 18, color: "#4b5563", marginBottom: 16 }}>
              The program is self-contained: the two volumes, a pen, a field journal, the student&apos;s own AI, and 22
              short videos where the author teaches every core lesson. A facilitator guide provides the support you need. Teach the program as a short course or full semester experience.
            </p>
            <p style={{ fontSize: 18, color: "#4b5563" }}>
              At the end, you hand out certificates. Students also leave with an original literary work of their own —
              and taught alongside a creative-writing course, those finished pieces can even be added to your
              library&apos;s catalogue.
            </p>
          </div>
          <div style={{ textAlign: "center" }}>
            <img src="/images/AICertificateBlank_2.jpg" alt="Certificate of completion" style={{ width: "100%", maxWidth: 460, borderRadius: 12, boxShadow: "0 12px 32px rgba(0,0,0,0.14)" }} />
          </div>
        </div>
      </section>

      {/* SAFETY STORY */}
      <section style={{ background: "#0f172a", color: "white", padding: "80px 24px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: "#5eead4" }}>
            The safety story
          </p>
          <h2 style={{ fontSize: "clamp(26px, 5vw, 38px)", marginTop: 12 }}>On school computers. Under your supervision. In structured labs.</h2>
          <p style={{ marginTop: 22, fontSize: 20, color: "rgba(255,255,255,0.85)" }}>
            When it&apos;s time to work with AI, students do it in the library, on library computers, under your
            supervision — using whatever base model you find available and appropriate. It also solves equity, since not every student has a device and an account at home, and it keeps
            the program vendor-neutral.
          </p>
        </div>
      </section>

      {/* WHAT STUDENTS DO */}
      <section style={{ background: "#f8fafc", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: 720, margin: "0 auto 44px" }}>
            <p style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: "#0f766e" }}>
              What students actually do
            </p>
            <h2 style={{ fontSize: "clamp(28px, 5vw, 40px)", marginTop: 12 }}>From AI literacy to fluency.</h2>
            <p style={{ marginTop: 16, fontSize: 19, color: "#4b5563" }}>
              Every chapter interleaves five recurring lesson forms, anchored by a running field journal — the spine
              that turns reading into practice and practice into fluency.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 200px), 1fr))", gap: 18 }}>
            {[
              ["Core Lessons", "The conceptual backbone, in plain language — no math, minimal jargon."],
              ["AI Labs", "Structured experiments students run on their own AI — finding its boundaries, catching its confabulations."],
              ["Projects", "A sustained creative work — an original novella or screenplay — with the student directing the AI."],
              ["Reflections", "Guided sessions connecting the material to the student's own life and judgment."],
              ["Spotlights", "Case studies and essays, from Clever Hans to deep-fakes that failed — kept current each revision."],
            ].map(([t, b], i) => (
              <div key={i} style={{ background: "#ffffff", border: "1px solid #e5e7eb", borderRadius: 14, padding: 22 }}>
                <h3 style={{ margin: "0 0 8px", fontSize: 17, color: "#0f766e" }}>{t}</h3>
                <p style={{ margin: 0, color: "#4b5563", fontSize: 15 }}>{b}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: 36 }}>
            <Link href="/curriculum" style={{ color: "#0f766e", fontWeight: 700, textDecoration: "none", fontSize: 17 }}>
              See the full curriculum →
            </Link>
          </div>
        </div>
      </section>

      {/* FOR PUBLIC LIBRARIES */}
      <section style={{ background: "#0f766e", color: "white", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: 760, margin: "0 auto 44px" }}>
            <p style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: "#99f6e4" }}>
              For public libraries
            </p>
            <h2 style={{ fontSize: "clamp(28px, 5vw, 40px)", marginTop: 12, color: "white" }}>Not just the school day — the whole community.</h2>
            <p style={{ marginTop: 16, fontSize: 19, color: "rgba(255,255,255,0.88)" }}>
              Everything here works just as well outside a school. In a public library you already convene the
              community — and the same run-it model turns the program into something your patrons come back for,
              week after week.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))", gap: 20 }}>
            {[
              ["Teen programming", "Run it after school or over the summer. The field journal and the creative project make it a series teens return to — not a one-off event."],
              ["Adult & lifelong learning", "Adults are navigating AI at work and at home with nowhere to start. The same program makes a natural community workshop or lifelong-learning series."],
              ["A home for writers", "The creative project — an original novella or screenplay — pairs naturally with the writing groups and book clubs your library already hosts."],
            ].map(([t, b], i) => (
              <div key={i} style={{ background: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.18)", borderRadius: 14, padding: 24 }}>
                <h3 style={{ margin: "0 0 8px", fontSize: 18, color: "white" }}>{t}</h3>
                <p style={{ margin: 0, color: "rgba(255,255,255,0.82)", fontSize: 15 }}>{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW TO GET IT */}
      <section style={{ background: "#ffffff", padding: "80px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: 720, margin: "0 auto 40px" }}>
            <p style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: "#0f766e" }}>
              How to get it
            </p>
            <h2 style={{ fontSize: "clamp(28px, 5vw, 40px)", marginTop: 12 }}>A purchase you can make yourself.</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 240px), 1fr))", gap: 20 }}>
            {[
              ["No sign-off required", "Books are the one thing a librarian can buy unilaterally — no edtech review, no data-privacy agreement, no IT approval. They flow through your usual acquisition budget."],
              ["Order a class set", "When you're ready to run it, order a lending set through your usual channels — Follett for schools, or Ingram and Baker & Taylor for public libraries. The field journal is a composiiton notebook."],
              ["Fund it with a cohort", "If the budget is tight, a DonorsChoose project can fund a class set — and rallies parents behind the program before it even begins."],
            ].map(([t, b], i) => (
              <div key={i} style={{ background: "#f0fdfa", border: "1px solid #99f6e4", borderRadius: 14, padding: 24 }}>
                <h3 style={{ margin: "0 0 8px", fontSize: 18 }}>{t}</h3>
                <p style={{ margin: 0, color: "#4b5563", fontSize: 15 }}>{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ background: "#f0fdfa", padding: "80px 24px" }}>
        <div style={{ maxWidth: 820, margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: "#0f766e" }}>
            Bring it to your library
          </p>
          <h2 style={{ fontSize: "clamp(28px, 5vw, 40px)", marginTop: 12 }}>Start with a copy in your hands.</h2>
          <p style={{ marginTop: 20, fontSize: 20, color: "#4b5563" }}>
            Request your copies and the facilitator guide, ask about a pilot for a teacher in your building or a
            program in your own library, or just tell us you&apos;d like to run it. We&apos;ll take it from there.
          </p>
          <div style={{ marginTop: 30, display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a href={FORM_URL} target="_blank" rel="noopener noreferrer" style={{ background: "#0f766e", color: "white", padding: "16px 32px", borderRadius: 10, textDecoration: "none", fontWeight: 700, fontSize: 18, display: "inline-block" }}>
              Request Your Copies →
            </a>
            <Link href="/curriculum" style={{ background: "white", border: "2px solid #0f766e", color: "#0f766e", padding: "16px 32px", borderRadius: 10, textDecoration: "none", fontWeight: 700, fontSize: 18, display: "inline-block" }}>
              See the Full Curriculum →
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
