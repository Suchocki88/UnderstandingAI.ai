import Link from "next/link";

export const metadata = {
  title: "AI in Real Estate | Professional Continuing Education — Conceptual Academy",
  description:
    "AI continuing education for real estate professionals — five programs that take agents from AI literacy to fluency, with a certificate aligned to NAR standards for Ethics and Fair Housing.",
};

const REVIEW_FORM =
  "https://docs.google.com/forms/d/e/1FAIpQLSfmC3t1awl9T0Ed1JZhtW24XEvp0znPoIITpbwcY7WvqYm12Q/viewform?usp=header";

type Lesson = { code: string; name: string; sub?: string };
type Program = { n: number; title: string; time: string; lessons: Lesson[]; sample?: string };

const certPrograms: Program[] = [
  {
    n: 1,
    title: "AI Ethics in Real Estate Practice",
    time: "3 hours · 6 lessons",
    lessons: [
      { code: "P1L1", name: "Verification", sub: "Verify before you amplify" },
      { code: "P1L2", name: "Authorship", sub: "If your name is on it, you wrote it" },
      { code: "P1L3", name: "Your Output, Really", sub: "The Code travels with your output" },
      { code: "P1L4", name: "The Nature of AI", sub: "You are the agent. AI is your assistant." },
      { code: "P1L5", name: "Where the Info Goes", sub: "Client information has a life after it leaves your hands" },
      { code: "P1L6", name: "AI and Law Practice", sub: "AI doesn't make you an attorney" },
    ],
  },
  {
    n: 2,
    title: "AI in Fair Housing Compliance",
    time: "2 hours · 4 lessons",
    lessons: [
      { code: "P2L1", name: "The Vendor Question", sub: "AI doesn't know fair housing" },
      { code: "P2L2", name: "Inherited Language", sub: "Neutral-sounding is not neutral" },
      { code: "P2L3", name: "Past Patterns", sub: "Past patterns are not permission" },
      { code: "P2L4", name: "AI in Property Valuation", sub: "The algorithm sees the past" },
    ],
  },
];

const enrichPrograms: Program[] = [
  {
    n: 3,
    title: "From AI Literacy to Fluency",
    time: "2 hours · 4 lessons",
    lessons: [
      { code: "P3L1", name: "What AI Actually Is" },
      { code: "P3L2", name: "Working With AI Well" },
      { code: "P3L3", name: "AI in Your Client's Hands" },
      { code: "P3L4", name: "The Platform Disruption" },
    ],
  },
  {
    n: 4,
    title: "The Quiet Failures",
    time: "1.5 hours · 3 lessons",
    sample: "https://conceptualacademy.com/sites/default/files/2026-05/P4L1_Core.pdf",
    lessons: [
      { code: "P4L1", name: "Quiet Failures Readers Read" },
      { code: "P4L2", name: "Quiet Failures That Hollow" },
      { code: "P4L3", name: "Quiet Failures That Change You" },
    ],
  },
  {
    n: 5,
    title: "Dark Patterns",
    time: "1 hour · 2 lessons",
    lessons: [
      { code: "P5L1", name: "Misconduct in the Money" },
      { code: "P5L2", name: "Misconduct in the Truth" },
    ],
  },
];

function ProgramCard({ p, accent }: { p: Program; accent: string }) {
  return (
    <div
      style={{
        background: "white",
        border: "1px solid #e5e7eb",
        borderTop: `4px solid ${accent}`,
        borderRadius: 16,
        padding: 28,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ display: "flex", alignItems: "baseline", gap: 10, flexWrap: "wrap" }}>
        <span style={{ fontSize: 12, fontWeight: 800, letterSpacing: 1, textTransform: "uppercase", color: accent }}>
          Program {p.n}
        </span>
        <span style={{ fontSize: 12, color: "#9ca3af" }}>{p.time}</span>
      </div>
      <h3 style={{ margin: "8px 0 18px", fontSize: 22, color: "#111827" }}>{p.title}</h3>

      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 12, flexGrow: 1 }}>
        {p.lessons.map((l) => (
          <li key={l.code} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
            <span
              style={{
                flexShrink: 0,
                fontSize: 11,
                fontWeight: 700,
                fontFamily: "monospace",
                color: "#92400e",
                background: "#fef3c7",
                borderRadius: 6,
                padding: "3px 7px",
                marginTop: 2,
              }}
            >
              {l.code}
            </span>
            <span style={{ fontSize: 15, color: "#1f2937", lineHeight: 1.45 }}>
              <strong style={{ fontWeight: 700 }}>{l.name}</strong>
              {l.sub ? <span style={{ color: "#6b7280" }}> — {l.sub}</span> : null}
            </span>
          </li>
        ))}
      </ul>

      {p.sample ? (
        <a
          href={p.sample}
          target="_blank"
          rel="noopener noreferrer"
          style={{ marginTop: 20, color: accent, fontWeight: 700, textDecoration: "none", fontSize: 14 }}
        >
          View a sample lesson (PDF) →
        </a>
      ) : null}
    </div>
  );
}

export default function Page() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif", color: "#1f2937", lineHeight: 1.6 }}>

      {/* HERO ART */}
      <section style={{ background: "#0b0b0f" }}>
        <img
          src="/images/HorizontalCover.jpg"
          alt="AI in Real Estate — From AI Literacy to Fluency, by Conceptual Academy"
          style={{ width: "100%", display: "block", maxHeight: "70vh", objectFit: "cover" }}
        />
      </section>

      {/* INTRO BAND */}
      <section style={{ background: "#0f172a", color: "white", padding: "64px 24px" }}>
        <div style={{ maxWidth: 880, margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: "#f59e0b", margin: 0 }}>
            Professional Continuing Education · Conceptual Academy
          </p>
          <h1 style={{ fontSize: "clamp(30px, 5vw, 44px)", lineHeight: 1.15, margin: "16px 0 0" }}>
            Continuing Education for Real Estate Professionals
          </h1>
          <p style={{ marginTop: 20, fontSize: 19, color: "rgba(255,255,255,0.82)", lineHeight: 1.7 }}>
            AI is already in your clients&apos; hands, your MLS, your listings, and your paperwork. This program
            takes agents from AI literacy to fluency — and toward a certificate aligned with NAR standards for
            Ethics and Fair Housing.
          </p>

          <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "12px 32px", margin: "32px 0 0" }}>
            {[
              ["5", "Programs"],
              ["19", "Lessons"],
              ["9.5", "Hours"],
              ["NAR", "Aligned Cert."],
            ].map(([num, label]) => (
              <div key={label} style={{ textAlign: "center" }}>
                <div style={{ fontSize: 22, fontWeight: 800, color: "#f59e0b", lineHeight: 1 }}>{num}</div>
                <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: 1, color: "rgba(255,255,255,0.6)", marginTop: 4 }}>
                  {label}
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 36, display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="https://podcasts.apple.com/us/podcast/ai-in-real-estate/id1896924263"
              target="_blank"
              rel="noopener noreferrer"
              style={{ background: "#f59e0b", color: "#0f172a", padding: "14px 26px", borderRadius: 8, textDecoration: "none", fontWeight: 700, fontSize: 16 }}
            >
              Listen to the Podcast Previews →
            </a>
            <a
              href="#programs"
              style={{ background: "rgba(255,255,255,0.08)", border: "2px solid rgba(255,255,255,0.25)", color: "white", padding: "14px 26px", borderRadius: 8, textDecoration: "none", fontWeight: 700, fontSize: 16 }}
            >
              See the Five Programs ↓
            </a>
          </div>
        </div>
      </section>

      {/* PODCAST PREVIEWS */}
      <section style={{ background: "#ffffff", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: 720, margin: "0 auto 40px" }}>
            <p style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: "#f59e0b", margin: 0 }}>
              Start Here · A Five-Minute Listen
            </p>
            <h2 style={{ fontSize: "clamp(26px, 4vw, 36px)", marginTop: 12 }}>Hear It Before You Read It</h2>
            <p style={{ marginTop: 16, fontSize: 18, color: "#6b7280", lineHeight: 1.7 }}>
              Short on time? We turned each part of the program into a quick, AI-generated audio preview — a
              conversation about the ideas you can play on the drive between showings. It&apos;s the fastest way to
              decide whether this belongs in your practice.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))", gap: 40, alignItems: "center" }}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                src="/images/AIREPodcastArt.jpg"
                alt="AI in Real Estate podcast cover"
                style={{ width: "100%", maxWidth: 320, borderRadius: 16, boxShadow: "0 12px 32px rgba(0,0,0,0.18)" }}
              />
            </div>
            <div>
              <iframe
                title="AI in Real Estate — podcast previews"
                src="https://embed.podcasts.apple.com/us/podcast/ai-in-real-estate/id1896924263"
                height={450}
                style={{ width: "100%", maxWidth: 560, overflow: "hidden", borderRadius: 12, background: "transparent", border: "none" }}
                sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
                allow="autoplay *; encrypted-media *; clipboard-write"
              />
              <p style={{ marginTop: 14 }}>
                <a
                  href="https://podcasts.apple.com/us/podcast/ai-in-real-estate/id1896924263"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#c2410c", fontWeight: 700, textDecoration: "none", fontSize: 15 }}
                >
                  Open in Apple Podcasts →
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* THE PROGRAMS */}
      <section id="programs" style={{ background: "#f8fafc", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: 760, margin: "0 auto 48px" }}>
            <p style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: "#f59e0b", margin: 0 }}>
              The Offering
            </p>
            <h2 style={{ fontSize: "clamp(26px, 4vw, 36px)", marginTop: 12 }}>Five Programs, Two Tracks</h2>
            <p style={{ marginTop: 16, fontSize: 18, color: "#6b7280", lineHeight: 1.7 }}>
              Two certification programs build toward a certificate aligned with NAR&apos;s Ethics and Fair Housing
              standards. Three enrichment programs deepen your fluency, your craft, and your judgment. Take one,
              take all five.
            </p>
          </div>

          {/* Certification track */}
          <div style={{ marginBottom: 48 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
              <span style={{ fontSize: 13, fontWeight: 800, textTransform: "uppercase", letterSpacing: 1.5, color: "#92400e", background: "#fef3c7", padding: "5px 14px", borderRadius: 100 }}>
                Certification Programs
              </span>
              <span style={{ fontSize: 14, color: "#6b7280" }}>Work toward your Ethics &amp; Fair Housing certificate</span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))", gap: 24 }}>
              {certPrograms.map((p) => (
                <ProgramCard key={p.n} p={p} accent="#f59e0b" />
              ))}
            </div>
          </div>

          {/* Enrichment track */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
              <span style={{ fontSize: 13, fontWeight: 800, textTransform: "uppercase", letterSpacing: 1.5, color: "#3730a3", background: "#e0e7ff", padding: "5px 14px", borderRadius: 100 }}>
                Enrichment Programs
              </span>
              <span style={{ fontSize: 14, color: "#6b7280" }}>Go deeper on fluency, craft, and judgment</span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))", gap: 24 }}>
              {enrichPrograms.map((p) => (
                <ProgramCard key={p.n} p={p} accent="#6366f1" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LOOK INSIDE */}
      <section style={{ background: "#ffffff", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: 760, margin: "0 auto 40px" }}>
            <p style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: "#f59e0b", margin: 0 }}>
              A Look Inside
            </p>
            <h2 style={{ fontSize: "clamp(26px, 4vw, 36px)", marginTop: 12 }}>Built to Be Experienced, Not Just Read</h2>
            <p style={{ marginTop: 16, fontSize: 18, color: "#6b7280", lineHeight: 1.7 }}>
              Every lesson pairs an interactive case study with a core lesson, a reading quiz, and a homework
              practice session. Agents learn by watching realistic scenarios play out — like a deal where someone
              trusted AI a little too far — not by skimming bullet points.
            </p>
          </div>

          {/* Browser mockup */}
          <div style={{ maxWidth: 900, margin: "0 auto", borderRadius: 12, overflow: "hidden", boxShadow: "0 16px 40px rgba(0,0,0,0.16)", border: "1px solid #e5e7eb" }}>
            <div style={{ background: "#e5e7eb", padding: "10px 14px", display: "flex", gap: 7, alignItems: "center" }}>
              <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#f87171", display: "inline-block" }} />
              <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#fbbf24", display: "inline-block" }} />
              <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#34d399", display: "inline-block" }} />
              <span style={{ marginLeft: 12, fontSize: 12, color: "#6b7280" }}>conceptualacademy.com</span>
            </div>
            <img
              src="/images/OrientationScreenShot.jpg"
              alt="Inside the AI in Real Estate program on the Conceptual Academy platform"
              style={{ width: "100%", display: "block", maxHeight: 620, objectFit: "cover", objectPosition: "top" }}
            />
          </div>
          <p style={{ textAlign: "center", fontSize: 14, color: "#6b7280", fontStyle: "italic", marginTop: 14 }}>
            Program 1, Lesson 1 — &ldquo;Verify Before You Amplify&rdquo; — an interactive case study inside the platform.
          </p>
        </div>
      </section>

      {/* NAR CERTIFICATE */}
      <section style={{ background: "#111827", color: "white", padding: "80px 24px" }}>
        <div style={{ maxWidth: 960, margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: "#f59e0b", margin: 0 }}>
            The Certificate
          </p>
          <h2 style={{ fontSize: "clamp(26px, 4vw, 36px)", marginTop: 12 }}>Ethics &amp; Fair Housing, Through the Lens of AI</h2>
          <p style={{ marginTop: 20, fontSize: 19, color: "rgba(255,255,255,0.82)", lineHeight: 1.7, maxWidth: 720, marginLeft: "auto", marginRight: "auto" }}>
            Complete Programs 1 and 2 to earn a Conceptual Academy certificate aligned with NAR&apos;s standards for
            Ethics and Fair Housing — the two areas every agent is accountable for, now examined where AI actually
            touches your work: in your listings, your disclosures, your valuations, and the data you hand off.
          </p>

          <img
            src="/images/AICertificateBlank_2.jpg"
            alt="Conceptual Academy Certificate of Completion — Continuing Education / Professional Development Hours"
            style={{ width: "100%", maxWidth: 560, display: "block", margin: "36px auto 0", borderRadius: 8, background: "white", boxShadow: "0 18px 48px rgba(0,0,0,0.5)" }}
          />

          <p style={{ marginTop: 24, fontSize: 13, color: "rgba(255,255,255,0.45)", lineHeight: 1.6, maxWidth: 640, marginLeft: "auto", marginRight: "auto" }}>
            Certificate issued by Conceptual Academy. &ldquo;Aligned&rdquo; refers to NAR&apos;s published Code of
            Ethics and Fair Housing standards; it does not imply NAR endorsement. Confirm continuing-education
            credit requirements with your state or local board.
          </p>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section style={{ background: "#ffffff", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: 720, margin: "0 auto 40px" }}>
            <p style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: "#f59e0b", margin: 0 }}>
              Who It&apos;s For
            </p>
            <h2 style={{ fontSize: "clamp(26px, 4vw, 36px)", marginTop: 12 }}>Any Agent. Any Brokerage.</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))", gap: 24 }}>
            <div style={{ background: "#f8fafc", border: "1px solid #e5e7eb", borderRadius: 16, padding: 28 }}>
              <h3 style={{ margin: "0 0 12px", fontSize: 20 }}>For agents at any level</h3>
              <p style={{ margin: 0, color: "#4b5563", lineHeight: 1.7 }}>
                Whether you are brand new or decades in, the questions are the same: what can you trust AI with, what
                must stay in your hands, and where does it quietly create risk? No technical background required.
              </p>
            </div>
            <div style={{ background: "#f8fafc", border: "1px solid #e5e7eb", borderRadius: 16, padding: 28 }}>
              <h3 style={{ margin: "0 0 12px", fontSize: 20 }}>For managing brokers</h3>
              <p style={{ margin: 0, color: "#4b5563", lineHeight: 1.7 }}>
                A consistent, ready-to-assign program for your whole office — so every agent works from the same
                understanding of AI ethics, fair housing, and responsible use. A simple way to raise the floor across
                your team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWERS CTA */}
      <section style={{ background: "#fff7ed", padding: "72px 24px" }}>
        <div
          style={{
            maxWidth: 900,
            margin: "0 auto",
            background: "white",
            border: "2px dashed #f59e0b",
            borderRadius: 16,
            padding: "40px clamp(24px, 5vw, 48px)",
            textAlign: "center",
          }}
        >
          <p style={{ fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1.5, color: "#92400e", background: "#fef3c7", display: "inline-block", padding: "5px 14px", borderRadius: 100, margin: 0 }}>
            Now in Review · Agents Wanted
          </p>
          <h2 style={{ fontSize: "clamp(24px, 4vw, 34px)", margin: "18px 0 0", color: "#111827" }}>
            Help Us Shape It
          </h2>
          <p style={{ marginTop: 16, fontSize: 18, color: "#4b5563", lineHeight: 1.7, maxWidth: 640, marginLeft: "auto", marginRight: "auto" }}>
            We&apos;re inviting working real estate agents to review <em>AI in Real Estate</em> before its public
            launch. Listen to the previews, work through a program, and tell us what lands and what&apos;s missing.
            Your name goes on the program that results.
          </p>
          <div style={{ marginTop: 28, display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href={REVIEW_FORM}
              target="_blank"
              rel="noopener noreferrer"
              style={{ background: "#0f172a", color: "white", padding: "14px 28px", borderRadius: 8, textDecoration: "none", fontWeight: 700, fontSize: 16 }}
            >
              Become a Reviewer →
            </a>
            <a
              href="https://podcasts.apple.com/us/podcast/ai-in-real-estate/id1896924263"
              target="_blank"
              rel="noopener noreferrer"
              style={{ background: "white", border: "2px solid #f59e0b", color: "#c2410c", padding: "14px 28px", borderRadius: 8, textDecoration: "none", fontWeight: 700, fontSize: 16 }}
            >
              Listen First →
            </a>
          </div>
        </div>
      </section>

      {/* COMING SOON */}
      <section style={{ background: "#f8fafc", padding: "72px 24px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: 720, margin: "0 auto 36px" }}>
            <p style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: "#f59e0b", margin: 0 }}>
              The Series
            </p>
            <h2 style={{ fontSize: "clamp(24px, 4vw, 34px)", marginTop: 12 }}>This Is the First of Many</h2>
            <p style={{ marginTop: 16, fontSize: 18, color: "#6b7280", lineHeight: 1.7 }}>
              <em>AI in Real Estate</em> is the first profession we&apos;ve built for. More are on the way.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 240px), 1fr))", gap: 24 }}>
            <div style={{ background: "white", border: "1px solid #e5e7eb", borderRadius: 16, padding: 28, borderTop: "4px solid #f59e0b" }}>
              <span style={{ fontSize: 12, fontWeight: 700, color: "#16a34a", textTransform: "uppercase", letterSpacing: 1 }}>Available Now</span>
              <h3 style={{ margin: "8px 0 6px", fontSize: 20 }}>AI in Real Estate</h3>
              <p style={{ margin: 0, color: "#6b7280", fontSize: 15 }}>Five programs, in review with agents today.</p>
            </div>
            <div style={{ background: "white", border: "1px solid #e5e7eb", borderRadius: 16, padding: 28, borderTop: "4px solid #cbd5e1" }}>
              <span style={{ fontSize: 12, fontWeight: 700, color: "#9ca3af", textTransform: "uppercase", letterSpacing: 1 }}>Targeted for September</span>
              <h3 style={{ margin: "8px 0 6px", fontSize: 20 }}>AI in Law Practices</h3>
              <p style={{ margin: 0, color: "#6b7280", fontSize: 15 }}>Ethics, confidentiality, and AI for legal professionals.</p>
            </div>
            <div style={{ background: "white", border: "1px solid #e5e7eb", borderRadius: 16, padding: 28, borderTop: "4px solid #cbd5e1" }}>
              <span style={{ fontSize: 12, fontWeight: 700, color: "#9ca3af", textTransform: "uppercase", letterSpacing: 1 }}>Targeted for October</span>
              <h3 style={{ margin: "8px 0 6px", fontSize: 20 }}>AI for the Professional</h3>
              <p style={{ margin: 0, color: "#6b7280", fontSize: 15 }}>A broader curriculum for any working professional.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ background: "#0f172a", color: "white", padding: "80px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(26px, 4vw, 36px)", margin: "0 0 20px" }}>From AI Literacy to Fluency</h2>
          <p style={{ fontSize: 19, color: "rgba(255,255,255,0.78)", lineHeight: 1.7, marginBottom: 36 }}>
            Most agents can &ldquo;get&rdquo; AI in an afternoon. Fluency — using it safely, effectively, and
            without quiet risk to your clients or your license — is what this program is for.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href={REVIEW_FORM}
              target="_blank"
              rel="noopener noreferrer"
              style={{ background: "#f59e0b", color: "#0f172a", padding: "14px 28px", borderRadius: 8, textDecoration: "none", fontWeight: 700, fontSize: 16 }}
            >
              Become a Reviewer →
            </a>
            <a
              href="https://podcasts.apple.com/us/podcast/ai-in-real-estate/id1896924263"
              target="_blank"
              rel="noopener noreferrer"
              style={{ background: "rgba(255,255,255,0.08)", border: "2px solid rgba(255,255,255,0.25)", color: "white", padding: "14px 28px", borderRadius: 8, textDecoration: "none", fontWeight: 700, fontSize: 16 }}
            >
              Listen to the Previews →
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
