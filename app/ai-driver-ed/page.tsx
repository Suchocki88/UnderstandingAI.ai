import Link from "next/link";

export const metadata = {
  title: "AI Driver’s Ed for High Schools | Understanding and Working with AI",
  description:
    "A semester-ready AI literacy curriculum for high schools. Students are already using AI. Most have never been taught how.",
};

export default function Page() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif", color: "#1f2937", lineHeight: 1.5 }}>
      <section
        style={{
          backgroundImage:
            "linear-gradient(rgba(15,23,42,.72), rgba(15,23,42,.78)), url('/images/TimeWeirdThumb.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
          padding: "clamp(80px, 13vw, 170px) 24px",
        }}
      >
        <div style={{ maxWidth: 1050, margin: "0 auto" }}>
          <p style={{ color: "#facc15", fontWeight: 800, letterSpacing: 2, textTransform: "uppercase", fontSize: 13 }}>
            AI literacy for secondary schools
          </p>

          <h1 style={{ fontSize: "clamp(40px, 7vw, 72px)", lineHeight: 1.02, margin: "12px 0 0" }}>
            AI Driver’s Ed for High Schools
          </h1>

          <p style={{ maxWidth: 760, fontSize: "clamp(19px, 3vw, 27px)", marginTop: 22, color: "rgba(255,255,255,.9)" }}>
            Students are already using AI. Most have never been taught how.
          </p>

          <p style={{ maxWidth: 760, fontSize: 20, marginTop: 18, color: "rgba(255,255,255,.82)" }}>
            A semester-ready curriculum that helps students understand what AI is, how it works, when to trust it, and when to put it down.
          </p>

          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginTop: 34 }}>
            <Link href="/pocketlab" style={primaryButton}>
              Preview the High School Program →
            </Link>
            <Link href="/curriculum" style={secondaryButton}>
              See the Curriculum
            </Link>
          </div>
        </div>
      </section>

      <section style={{ background: "#451a03", padding: "28px 24px", borderLeft: "5px solid #f59e0b" }}>
        <div style={{ maxWidth: 1050, margin: "0 auto" }}>
          <p style={{ margin: 0, color: "rgba(255,255,255,.88)", fontSize: 19, fontStyle: "italic" }}>
            “AI is designed to agree with you. That’s a problem. If you don’t actively ask for the opposing view, you won’t get it.”
          </p>
        </div>
      </section>

      <section style={{ padding: "80px 24px", background: "#ffffff" }}>
        <div style={{ maxWidth: 1050, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))", gap: 42, alignItems: "center" }}>
          <div>
            <p style={eyebrow}>The problem</p>
            <h2 style={h2}>AI is already in the classroom.</h2>
            <p style={lead}>
              Students are using AI for homework, essays, coding, research, and personal advice. But most schools still have no coherent way to teach AI literacy.
            </p>
            <p style={lead}>
              We don’t hand teenagers car keys without instruction. We shouldn’t hand them cognitive technology without guidance either.
            </p>
          </div>

          <div style={card}>
            <h3 style={{ marginTop: 0, fontSize: 26 }}>What students need</h3>
            <ul style={{ paddingLeft: 22, fontSize: 18, color: "#475569" }}>
              <li>How AI actually works</li>
              <li>How to prompt with clarity and purpose</li>
              <li>How to recognize hallucinations and weak reasoning</li>
              <li>How to protect their own voice and authorship</li>
              <li>How to use AI safely, creatively, and responsibly</li>
            </ul>
          </div>
        </div>
      </section>

      <section style={{ padding: "80px 24px", background: "#0f172a", color: "white" }}>
        <div style={{ maxWidth: 1050, margin: "0 auto" }}>
          <p style={eyebrow}>The solution</p>
          <h2 style={{ ...h2, color: "white" }}>A complete AI literacy pathway.</h2>
          <p style={{ ...lead, color: "rgba(255,255,255,.78)", maxWidth: 820 }}>
            Understanding and Working with AI moves students from casual AI use toward genuine AI fluency: conceptual understanding, practical skill, ethical awareness, and human judgment.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 250px), 1fr))", gap: 22, marginTop: 36 }}>
            {[
              ["Semester-ready", "Designed for meaningful classroom use, not one-off AI activities."],
              ["Cross-disciplinary", "Useful across STEM, CTE, social studies, English, and general studies."],
              ["Teacher-friendly", "Built with lessons, videos, activities, assessments, and discussion prompts."],
            ].map(([title, text]) => (
              <div key={title} style={{ background: "rgba(255,255,255,.08)", border: "1px solid rgba(255,255,255,.14)", borderRadius: 18, padding: 24 }}>
                <h3 style={{ marginTop: 0, fontSize: 22 }}>{title}</h3>
                <p style={{ color: "rgba(255,255,255,.74)", marginBottom: 0 }}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "80px 24px", background: "#f8fafc" }}>
        <div style={{ maxWidth: 1050, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))", gap: 42, alignItems: "center" }}>
          <div>
            <p style={eyebrow}>The curriculum</p>
            <h2 style={h2}>Two volumes. Eight chapters. One coherent framework.</h2>
            <p style={lead}>
              The program combines conceptual explanations, classroom-ready activities, video lessons, podcast companions, and AI experiments.
            </p>

            <div style={{ display: "grid", gap: 16, marginTop: 24 }}>
              <div style={miniCard}>
                <strong>Volume 1: Foundations & Practice</strong>
                <p style={{ margin: "8px 0 0", color: "#64748b" }}>What AI is, how it works, and how to use it responsibly.</p>
              </div>
              <div style={miniCard}>
                <strong>Volume 2: Society & the Future</strong>
                <p style={{ margin: "8px 0 0", color: "#64748b" }}>The societal, ethical, and creative implications of living with AI.</p>
              </div>
            </div>
          </div>

          <div style={{ textAlign: "center" }}>
            <img src="/images/Volumes12.png" alt="Understanding and Working with AI textbook volumes" style={{ maxWidth: "100%", borderRadius: 18 }} />
          </div>
        </div>
      </section>

      <section style={{ padding: "80px 24px", background: "#fff7ed" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <p style={eyebrow}>Start here</p>
          <h2 style={h2}>Bring AI Driver’s Ed to your school.</h2>
          <p style={{ ...lead, marginLeft: "auto", marginRight: "auto" }}>
            Explore the high school pathway and see how the program can support teachers and students in your classroom.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap", marginTop: 30 }}>
            <Link href="/pocketlab" style={primaryButton}>
              Preview the High School Program →
            </Link>
            <Link href="/curriculum" style={{ ...secondaryButton, color: "#92400e", borderColor: "#f59e0b" }}>
              View the Core Curriculum
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

const eyebrow: React.CSSProperties = {
  color: "#f59e0b",
  fontWeight: 800,
  letterSpacing: 2,
  textTransform: "uppercase",
  fontSize: 13,
  margin: "0 0 12px",
};

const h2: React.CSSProperties = {
  fontSize: "clamp(30px, 5vw, 44px)",
  lineHeight: 1.12,
  margin: 0,
  color: "#1f2937",
};

const lead: React.CSSProperties = {
  fontSize: 20,
  color: "#64748b",
  marginTop: 20,
};

const card: React.CSSProperties = {
  background: "#ffffff",
  border: "1px solid #e5e7eb",
  borderRadius: 20,
  padding: 30,
  boxShadow: "0 18px 45px rgba(15,23,42,.10)",
};

const miniCard: React.CSSProperties = {
  border: "1px solid #e5e7eb",
  borderRadius: 14,
  padding: 18,
  background: "#ffffff",
};

const primaryButton: React.CSSProperties = {
  background: "#f59e0b",
  color: "#111827",
  padding: "15px 24px",
  borderRadius: 12,
  fontWeight: 800,
  textDecoration: "none",
  display: "inline-block",
};

const secondaryButton: React.CSSProperties = {
  border: "2px solid rgba(255,255,255,.55)",
  color: "white",
  padding: "13px 22px",
  borderRadius: 12,
  fontWeight: 800,
  textDecoration: "none",
  display: "inline-block",
};
