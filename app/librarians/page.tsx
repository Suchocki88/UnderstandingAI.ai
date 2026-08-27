import Link from "next/link";

export const metadata = {
  title: "For Librarians | Understanding and Working with AI",
  description:
    "A print-first AI-Ed program built for the library — teaching students to use AI with judgment. Display it, share it with a teacher, or run it yourself; the authors teach every lesson on video.",
};

const FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfmC3t1awl9T0Ed1JZhtW24XEvp0znPoIITpbwcY7WvqYm12Q/viewform?usp=header";

export default function Page() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif", color: "#1f2937", lineHeight: 1.6 }}>
      {/* HERO */}
      <section style={{ background: "#ffffff", color: "#111827", padding: "clamp(52px, 8vw, 76px) 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: "#0f766e", marginBottom: 16 }}>
            For School Librarians
          </p>
          <h1 style={{ fontSize: "clamp(32px, 5.5vw, 50px)", lineHeight: 1.08, margin: "0 0 18px", color: "#111827" }}>
            Students already use AI. The question is whether they learn to use it with judgment.
          </h1>
          <p style={{ fontSize: 19, color: "#4b5563", maxWidth: 700, margin: "0 auto 32px" }}>
            <em>Understanding and Working with AI</em> is a print-first AI-Ed program that helps students understand what
            AI is, where it fails, when to lean on it, when not to, and how to stay responsible for their own thinking.
          </p>
          <div style={{ maxWidth: 820, margin: "0 auto", borderRadius: 14, overflow: "hidden", boxShadow: "0 18px 44px rgba(15,23,42,0.18)", border: "1px solid #e5e7eb" }}>
            <iframe
              src="https://players.brightcove.net/2505476419001/ocOFOM0IrR_default/index.html?videoId=6403227803112"
              allowFullScreen
              allow="encrypted-media"
              title="AI-Ed Finds a Home"
              style={{ width: "100%", aspectRatio: "16 / 9", border: "none", display: "block" }}
            />
          </div>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center", marginTop: 32 }}>
            <a href={FORM_URL} target="_blank" rel="noopener noreferrer" style={{ background: "#0f766e", color: "white", padding: "15px 28px", borderRadius: 10, textDecoration: "none", fontWeight: 700, fontSize: 16, display: "inline-block" }}>
              Request Your Copies
            </a>
            <Link href="/curriculum" style={{ border: "2px solid #0f766e", color: "#0f766e", background: "white", padding: "13px 26px", borderRadius: 10, textDecoration: "none", fontWeight: 700, fontSize: 16, display: "inline-block" }}>
              See How It Works
            </Link>
          </div>
        </div>
      </section>

      {/* PROOF — A-G (understated band) */}
      <section style={{ background: "#f0fdfa", borderTop: "1px solid #ccfbf1", borderBottom: "1px solid #ccfbf1", padding: "16px 24px" }}>
        <p style={{ maxWidth: 900, margin: "0 auto", textAlign: "center", fontSize: 15, lineHeight: 1.6, color: "#0f766e", fontWeight: 600 }}>
          An A-G approved course — the University of California and Cal State college-preparatory standard — now being
          taught at a high school in the San Diego area.
        </p>
      </section>

      {/* THE CASE FOR AI-ED */}
      <section style={{ background: "#f0fdfa", padding: "clamp(56px, 9vw, 80px) 24px", borderBottom: "1px solid #ccfbf1" }}>
        <div style={{ maxWidth: 820, margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: "#0f766e", margin: 0 }}>
            The case for AI-Ed
          </p>
          <h2 style={{ fontSize: "clamp(28px, 4.5vw, 42px)", margin: "16px 0 22px", color: "#111827", lineHeight: 1.15 }}>
            Most every student takes Driver&apos;s Ed. It&apos;s time for <span style={{ color: "#0f766e" }}>AI-Ed</span>.
          </h2>
          <p style={{ fontSize: 19, color: "#374151", lineHeight: 1.7, maxWidth: 700, margin: "0 auto 16px" }}>
            We don&apos;t hand a teenager the keys and hope they figure it out. We teach the rules, the risks, and the
            responsibility first — then we let them drive. AI is a far more powerful machine, and we&apos;ve handed it to
            students with no instruction at all.
          </p>
          <p style={{ fontSize: 19, color: "#374151", lineHeight: 1.7, maxWidth: 700, margin: "0 auto" }}>
            AI-Ed is the course that&apos;s missing — it teaches students to drive the AI safely, effectively, and
            creatively, and to know which roads to travel on their own and which to travel with help, before the AI
            starts driving them. And the library, the one room that belongs to every department, is where that course can
            begin.
          </p>
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
            No one is quite sure which department should teach AI-Ed — but the library works to support all departments.
            School librarians are certified teachers who lead information literacy every day, which makes AI literacy a
            natural fit. And libraries are one of the few places in a school devoted not just to information, but to
            judgment: what to trust, what to question, what to use, and what to reject. In the most print-centered place
            in the building, a print-first AI-Ed program is a homecoming.
          </p>
        </div>
        <div style={{ maxWidth: 980, margin: "44px auto 0", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 240px), 1fr))", gap: 20 }}>
          {[
            ["Belongs to every department", "No turf issues over who teaches AI-Ed — the school library serves the whole school."],
            ["Low-friction to pilot", "Because it's print-first and vendor-neutral, many libraries can introduce it as enrichment — often a librarian's initiative and a principal's approval — without a full edtech adoption process."],
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
            <h2 style={{ fontSize: "clamp(28px, 5vw, 40px)", margin: "12px 0 20px" }}>From information literacy to AI literacy.</h2>
            <p style={{ fontSize: 18, color: "#4b5563", marginBottom: 16 }}>
              The program is self-contained: the two volumes, a pen, a field journal, the student&apos;s designated AI, and
              22 short videos where the author teaches every core lesson. A facilitator guide provides the support you
              need. Teach the program as a short course or full-semester experience.
            </p>
            <p style={{ fontSize: 18, color: "#4b5563" }}>
              At the end, you hand out certificates. Students also leave with an original creative work of their own —
              and taught alongside a creative-writing course, those finished pieces can be added to your library&apos;s
              catalogue. Students view the library differently when they see themselves within it.
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
            supervision — using whatever base model you find available and appropriate. It also solves equity, since not
            every student has a device and an account at home, and it keeps the program vendor-neutral.
          </p>
        </div>
      </section>

      {/* THE GUIDING PRINCIPLE */}
      <section style={{ background: "#ffffff", padding: "80px 24px" }}>
        <div style={{ maxWidth: 820, margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: "#0f766e" }}>
            The guiding principle
          </p>
          <blockquote style={{ fontSize: "clamp(24px, 3.8vw, 34px)", fontStyle: "italic", color: "#111827", lineHeight: 1.3, margin: "20px auto 24px", maxWidth: 760 }}>
            &ldquo;Don&apos;t use AI to avoid the road that builds you. Use it to reach roads you couldn&apos;t travel
            before.&rdquo;
          </blockquote>
          <p style={{ fontSize: 19, color: "#4b5563", lineHeight: 1.7, maxWidth: 700, margin: "0 auto 14px" }}>
            AI-Ed does not teach students to hand their thinking to a machine. It teaches them to recognize what thinking
            they need to do themselves, what AI can appropriately assist with, and how to make that choice deliberately.
          </p>
          <p style={{ fontSize: 18, fontWeight: 700, color: "#0f766e", margin: 0 }}>Make it an informed choice.</p>
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
              Every chapter interleaves five recurring lesson forms, anchored by a running field journal — the spine that
              turns reading into practice, and practice into judgment.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 200px), 1fr))", gap: 18 }}>
            {[
              ["Core Lessons", "Understand what AI is, how it works, and where it fails — in plain language, no math, minimal jargon."],
              ["AI Labs", "Test the technology directly: find its limits, catch its confabulations, and compare what it says with what you already know."],
              ["Projects", "A sustained creative work, paired with a field journal: what the student did, what AI did, and whether the collaboration built their capabilities or bypassed them."],
              ["Reflections", "The harder questions: What thinking did I hand over? What did I keep? Did AI make me more capable — or merely faster?"],
              ["Spotlights", "Real-world cases — from Clever Hans to deep-fakes that failed — connecting AI to school, work, creativity, bias, and society. Kept current each revision."],
            ].map(([t, b], i) => (
              <div key={i} style={{ background: "#ffffff", border: "1px solid #e5e7eb", borderRadius: 14, padding: 22 }}>
                <h3 style={{ margin: "0 0 8px", fontSize: 17, color: "#0f766e" }}>{t}</h3>
                <p style={{ margin: 0, color: "#4b5563", fontSize: 15 }}>{b}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 36 }}>
            <Link href="/curriculum" style={{ color: "#0f766e", fontWeight: 700, textDecoration: "none", fontSize: 17 }}>
              See the full curriculum
            </Link>
          </div>
        </div>
      </section>

      {/* CROSS-LINK TO PUBLIC LIBRARIES */}
      <section style={{ background: "#0f766e", color: "white", padding: "clamp(48px, 7vw, 64px) 24px" }}>
        <div style={{ maxWidth: 820, margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: "#99f6e4", margin: "0 0 12px" }}>
            Serving a public library?
          </p>
          <h2 style={{ fontSize: "clamp(24px, 4vw, 34px)", margin: "0 0 16px", color: "white" }}>
            The same model works beyond the school day.
          </h2>
          <p style={{ fontSize: 18, color: "rgba(255,255,255,0.9)", lineHeight: 1.7, maxWidth: 640, margin: "0 auto 26px" }}>
            Independent reading plus a weekly gathering fits a public library just as naturally — for teens, adults, and
            community learners. We&apos;ve told that story on its own page.
          </p>
          <Link href="/public-libraries" style={{ display: "inline-block", background: "white", color: "#0f766e", padding: "13px 28px", borderRadius: 10, textDecoration: "none", fontWeight: 700, fontSize: 16 }}>
            See the Public Library Page
          </Link>
        </div>
      </section>

      {/* HOW TO GET IT */}
      <section style={{ background: "#ffffff", padding: "80px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: 720, margin: "0 auto 40px" }}>
            <p style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: "#0f766e" }}>
              How to get it
            </p>
            <h2 style={{ fontSize: "clamp(28px, 5vw, 40px)", marginTop: 12 }}>A purchase you can usually make yourself.</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 240px), 1fr))", gap: 20 }}>
            {[
              ["Fits normal acquisition channels", "Because it's print-first and vendor-neutral, schools can often purchase the books through existing library or instructional-material budgets — without a new software platform, data-privacy agreement, or IT review."],
              ["Order a class set", "When you're ready to run it, order a lending set through your usual channels — Follett or Mackin for schools, Ingram Library Services or Brodart for public libraries. The field journal is a composition notebook."],
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
            Request your copies and the facilitator guide, ask about a pilot for a teacher in your building or a program
            in your own library, or just tell us you&apos;d like to run it. We&apos;ll take it from there.
          </p>
          <div style={{ marginTop: 30, display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a href={FORM_URL} target="_blank" rel="noopener noreferrer" style={{ background: "#0f766e", color: "white", padding: "16px 32px", borderRadius: 10, textDecoration: "none", fontWeight: 700, fontSize: 18, display: "inline-block" }}>
              Request Your Copies
            </a>
            <Link href="/curriculum" style={{ background: "white", border: "2px solid #0f766e", color: "#0f766e", padding: "16px 32px", borderRadius: 10, textDecoration: "none", fontWeight: 700, fontSize: 18, display: "inline-block" }}>
              See the Full Curriculum
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
