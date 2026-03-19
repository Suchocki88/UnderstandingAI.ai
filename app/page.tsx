import Link from "next/link";
export default function Page() {
  const buyButton: React.CSSProperties = {
    color: "#1d4ed8",
    fontWeight: 600,
    textDecoration: "none",
    fontSize: 14,
  };
  return (
    <main style={{ fontFamily: "Arial, sans-serif", color: "#1f2937", lineHeight: 1.5 }}>

      {/* HERO */}
      <section
        style={{
          position: "relative",
          backgroundImage: "url('/images/hero-ai.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "160px 24px",
          color: "white",
        }}
      >
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.45)" }} />
        <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <h1 style={{ fontSize: 56, lineHeight: 1.05, margin: 0 }}>
            Understanding and Working with AI
          </h1>
          <p style={{ marginTop: 24, fontSize: 22, maxWidth: 760, opacity: 0.9 }}>
            A cross-disciplinary approach to learning how artificial intelligence works
          </p>
        </div>
      </section>
{/* HABIT OF MIND TEASER */}
      <section style={{ background: "#451a03", padding: "24px 32px", borderLeft: "4px solid #f59e0b" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", gap: 20, alignItems: "baseline" }}>
          <span style={{ fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: "#f59e0b", flexShrink: 0 }}>
            Habit of Mind 1
          </span>
          <p style={{ margin: 0, fontSize: 16, color: "rgba(255,255,255,0.85)", fontStyle: "italic", lineHeight: 1.6 }}>
            "AI is designed to agree with you. That&apos;s a problem. If you don&apos;t actively ask for the opposing view, you won&apos;t get it — otherwise you&apos;re sitting in an echo chamber with a very articulate mirror."
          </p>
        </div>
      </section>
{/* WHO ARE YOU */}
      <section style={{ background: "#0f172a", padding: "0 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}>

          <Link href="/pocketlab" style={{ textDecoration: "none", borderRight: "1px solid rgba(255,255,255,0.1)", padding: "28px 24px", display: "flex", flexDirection: "column", gap: 6 }}>
            <span style={{ fontSize: 17, fontWeight: 700, color: "white" }}>Social Studies / CTE</span>
            <span style={{ fontSize: 14, color: "rgba(255,255,255,0.55)" }}>K–12 classroom programs →</span>
          </Link>

          <Link href="/academy" style={{ textDecoration: "none", borderRight: "1px solid rgba(255,255,255,0.1)", padding: "28px 24px", display: "flex", flexDirection: "column", gap: 6 }}>
            <span style={{ fontSize: 17, fontWeight: 700, color: "white" }}>Professional</span>
            <span style={{ fontSize: 14, color: "rgba(255,255,255,0.55)" }}>CEUs and PD credential →</span>
          </Link>

          <Link href="/academy" style={{ textDecoration: "none", borderRight: "1px solid rgba(255,255,255,0.1)", padding: "28px 24px", display: "flex", flexDirection: "column", gap: 6 }}>
            <span style={{ fontSize: 17, fontWeight: 700, color: "white" }}>Independent Learner</span>
            <span style={{ fontSize: 14, color: "rgba(255,255,255,0.55)" }}>Self-paced online program →</span>
          </Link>

          <Link href="/humanities" style={{ textDecoration: "none", padding: "28px 24px", display: "flex", flexDirection: "column", gap: 6 }}>
            <span style={{ fontSize: 17, fontWeight: 700, color: "white" }}>Language Arts</span>
            <span style={{ fontSize: 14, color: "rgba(255,255,255,0.55)" }}>AI-authored novels for class →</span>
          </Link>

        </div>
      </section>
      {/* CORE CURRICULUM */}
      <section style={{ background: "#ffffff", padding: "80px 24px" }}>
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 40,
            alignItems: "center",
          }}
        >
          <div>
            <p style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: "#f59e0b" }}>
              The Foundation
            </p>
            <h2 style={{ fontSize: 40, margin: "12px 0 0" }}>The Core Curriculum</h2>
            <p style={{ marginTop: 20, fontSize: 20, color: "#4b5563" }}>
              This is a comprehensive, integrated program for AI literacy. At its core are two volumes that provide a conceptual and experiential approach from which anyone can learn.
            </p>
            <div style={{ marginTop: 24, display: "grid", gap: 16 }}>
              <div style={{ border: "1px solid #e5e7eb", borderRadius: 12, padding: 18, background: "#f8fafc" }}>
                <h3 style={{ margin: 0 }}>Volume 1: Foundations &amp; Practice</h3>
                <p style={{ marginTop: 8, color: "#6b7280" }}>
                  Core concepts of AI including what it is, how it works, and how to use it responsibly.
                </p>
              </div>
              <div style={{ border: "1px solid #e5e7eb", borderRadius: 12, padding: 18, background: "#f8fafc" }}>
                <h3 style={{ margin: 0 }}>Volume 2: Society &amp; the Future</h3>
                <p style={{ marginTop: 8, color: "#6b7280" }}>
                  The societal, ethical, and creative implications of living and working alongside AI.
                </p>
              </div>
            </div>
            <div style={{ marginTop: 28 }}>
              <Link href="/curriculum" style={{ color: "#2563eb", fontWeight: 700, textDecoration: "none" }}>
                Learn more about the curriculum →
              </Link>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "center", gap: 24, flexWrap: "wrap" }}>
            <img src="/images/volume1.jpg" alt="Volume 1" style={{ width: 220, borderRadius: 12, boxShadow: "0 10px 25px rgba(0,0,0,0.25)" }} />
            <img src="/images/volume2.jpg" alt="Volume 2" style={{ width: 220, borderRadius: 12, boxShadow: "0 10px 25px rgba(0,0,0,0.25)" }} />
          </div>
        </div>
      </section>

      {/* WHY IT MATTERS */}
      <section style={{ background: "#111827", color: "white", padding: "80px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: "#f59e0b" }}>
            The Stakes
          </p>
          <h2 style={{ fontSize: 40, marginTop: 12 }}>Why AI Literacy Matters</h2>
          <p style={{ marginTop: 24, fontSize: 21, color: "rgba(255,255,255,0.8)" }}>
            AI is quickly reshaping work, education, creativity, and society. People from all walks of life need to understand how it works and what it means for the world of today and tomorrow.
          </p>
          <blockquote
            style={{
              marginTop: 36,
              borderLeft: "4px solid #f59e0b",
              paddingLeft: 20,
              textAlign: "left",
              fontStyle: "italic",
              fontSize: 24,
              color: "rgba(255,255,255,0.92)",
            }}
          >
            "We are the first generation of people creating with AI. The standards we set now — for originality, for voice, for the expectation that human authorship means something — will shape what fills our bookstores, our libraries, our classrooms, and our screens for decades to come."
          </blockquote>
        </div>
      </section>

    

      {/* ABOUT */}
      <section style={{ background: "#ffffff", padding: "80px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: 40 }}>About the Program</h2>
          <p style={{ marginTop: 24, fontSize: 20, color: "#6b7280" }}>
            Understanding AI Learning Pathways is designed to help people across disciplines explore artificial intelligence — its foundations, its implications, and its creative possibilities. Whether you&apos;re a teacher, student, or professional, there&apos;s a pathway designed for you.
          </p>
          <div style={{ marginTop: 28 }}>
            <Link
              href="/about"
              style={{
                background: "#2563eb",
                color: "white",
                padding: "14px 22px",
                borderRadius: 10,
                textDecoration: "none",
                fontWeight: 700,
                display: "inline-block",
              }}
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
