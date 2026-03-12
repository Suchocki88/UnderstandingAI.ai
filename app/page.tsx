import Link from "next/link";

export default function Page() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif", color: "#1f2937", lineHeight: 1.5 }}>
      <section
        style={{
          background: "linear-gradient(135deg, #0f172a, #1e3a8a)",
          color: "white",
          padding: "80px 24px",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p style={{ letterSpacing: 2, textTransform: "uppercase", opacity: 0.8, fontSize: 14 }}>
            Understanding AI Learning Pathways
          </p>
          <h1 style={{ fontSize: 56, margin: "12px 0 16px", lineHeight: 1.05 }}>
            Understanding and Working with AI
          </h1>
          <p style={{ fontSize: 22, maxWidth: 760, opacity: 0.9 }}>
            A cross-disciplinary approach to learning how artificial intelligence works and how to work thoughtfully with AI.
          </p>

          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginTop: 32 }}>
            <a
              href="#curriculum"
              style={{
                background: "#f59e0b",
                color: "#111827",
                padding: "14px 22px",
                borderRadius: 10,
                textDecoration: "none",
                fontWeight: 700,
              }}
            >
              Explore the Curriculum
            </a>
            <a
              href="#pathways"
              style={{
                border: "2px solid rgba(255,255,255,0.4)",
                color: "white",
                padding: "12px 22px",
                borderRadius: 10,
                textDecoration: "none",
                fontWeight: 700,
              }}
            >
              Choose Your Pathway
            </a>
          </div>
        </div>
      </section>

      <section id="curriculum" style={{ padding: "72px 24px", background: "#f8fafc" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ fontSize: 38, marginBottom: 16 }}>The Core Curriculum</h2>
          <p style={{ fontSize: 20, maxWidth: 820, color: "#4b5563" }}>
            At the heart of this ecosystem are two books and two novels that together form a broad, human-centered approach to AI literacy.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20, marginTop: 32 }}>
            <div style={{ background: "white", border: "1px solid #e5e7eb", borderRadius: 14, padding: 24 }}>
              <h3 style={{ marginTop: 0 }}>Volume 1</h3>
              <p>Foundations &amp; Practice — core concepts of AI, how it works, and how to use it responsibly.</p>
            </div>
            <div style={{ background: "white", border: "1px solid #e5e7eb", borderRadius: 14, padding: 24 }}>
              <h3 style={{ marginTop: 0 }}>Volume 2</h3>
              <p>Society &amp; the Future — the social, ethical, and creative implications of living with AI.</p>
            </div>
            <div style={{ background: "white", border: "1px solid #e5e7eb", borderRadius: 14, padding: 24 }}>
              <h3 style={{ marginTop: 0 }}>The Neolithic</h3>
              <p>A novel connecting the origins of human creativity to the emergence of AI.</p>
            </div>
            <div style={{ background: "white", border: "1px solid #e5e7eb", borderRadius: 14, padding: 24 }}>
              <h3 style={{ marginTop: 0 }}>Threshold</h3>
              <p>A novel exploring what it means to stand at the frontier of human and machine intelligence.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="pathways" style={{ padding: "72px 24px", background: "white" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ fontSize: 38, marginBottom: 12 }}>Three Learning Pathways</h2>
          <p style={{ fontSize: 20, maxWidth: 820, color: "#4b5563" }}>
            The same core curriculum branches into three pathways, each designed for a different audience and level of involvement.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24, marginTop: 36 }}>
            <div style={{ border: "2px solid #f59e0b", background: "#fff7ed", borderRadius: 16, padding: 24 }}>
              <h3>PocketLab</h3>
              <p>K–12 AI literacy for STEM, CTE, and social studies classrooms.</p>
              <p><strong>Best for:</strong> teachers and students in semester-based classroom use.</p>
            </div>

            <div style={{ border: "2px solid #8b5cf6", background: "#f5f3ff", borderRadius: 16, padding: 24 }}>
              <h3>Humanities Pathway</h3>
              <p>AI explored through writing, ethics, creativity, and interdisciplinary humanities.</p>
              <p><strong>Best for:</strong> English faculty, writing courses, and interdisciplinary learning.</p>
            </div>

            <div style={{ border: "2px solid #ec4899", background: "#fdf2f8", borderRadius: 16, padding: 24 }}>
              <h3>Conceptual Academy</h3>
              <p>Deeper online AI learning for teachers, professionals, and independent learners.</p>
              <p><strong>Best for:</strong> professional development, CEUs, and self-directed study.</p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "72px 24px", background: "#111827", color: "white" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: 38, marginBottom: 16 }}>Why AI Literacy Matters</h2>
          <p style={{ fontSize: 21, opacity: 0.9 }}>
            AI is reshaping work, education, creativity, and society. People from every field — not just technologists — need to understand how it works and what it means.
          </p>
        </div>
      </section>

      <section style={{ padding: "72px 24px", background: "#f8fafc" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: 38, marginBottom: 16 }}>About the Program</h2>
          <p style={{ fontSize: 20, color: "#4b5563" }}>
            Understanding AI Learning Pathways helps educators, students, professionals, and independent learners explore AI across disciplines through books, projects, novels, and online learning.
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
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
