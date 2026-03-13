import Link from "next/link";

export default function Page() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif", color: "#1f2937", lineHeight: 1.5 }}>
      <section
  style={{
    position: "relative",
    backgroundImage: "url('/images/hero-ai.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: "160px 24px",
    color: "white"
  }}
>

<div
  style={{
    position: "absolute",
    inset: 0,
    background: "rgba(0,0,0,0.45)"
  }}
/>

<div
  style={{
    maxWidth: 1100,
    margin: "0 auto",
    position: "relative",
    zIndex: 1
  }}
>

<h1 style={{ fontSize: 56, lineHeight: 1.05, margin: 0 }}>
  Understanding and Working with AI
</h1>

<p style={{ marginTop: 24, fontSize: 22, maxWidth: 760, opacity: 0.9 }}>
  A cross-disciplinary approach to learning how artificial intelligence works
</p>

</div>
</section>

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
              At the heart of this ecosystem are two comprehensive volumes that provide a conceptual and experiential approach to AI literacy.
            </p>

            <div style={{ marginTop: 24, display: "grid", gap: 16 }}>
              <div style={{ border: "1px solid #e5e7eb", borderRadius: 12, padding: 18, background: "#f8fafc" }}>
                <h3 style={{ margin: 0 }}>Volume 1: Foundations &amp; Practice</h3>
                <p style={{ marginTop: 8, color: "#6b7280" }}>
                  Core concepts of AI — what it is, how it works, and how to use it responsibly.
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

          <div style={{ display: "flex", justifyContent: "center" }}>
            <div
              style={{
                width: "100%",
                maxWidth: 380,
                minHeight: 280,
                borderRadius: 16,
                border: "1px solid #d1d5db",
                background: "#f3f4f6",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#6b7280",
                textAlign: "center",
                padding: 20,
              }}
            >
              Book image placeholder
              <br />
              /public/images/books-illustration.png
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "#f5f3ff", padding: "80px 24px" }}>
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
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div
              style={{
                width: "100%",
                maxWidth: 380,
                minHeight: 280,
                borderRadius: 16,
                border: "1px solid #d1d5db",
                background: "#ffffff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#6b7280",
                textAlign: "center",
                padding: 20,
              }}
            >
              Novel image placeholder
              <br />
              /public/images/novels-illustration.png
            </div>
          </div>

          <div>
            <p style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: "#7c3aed" }}>
              Fiction as a Lens
            </p>
            <h2 style={{ fontSize: 40, margin: "12px 0 0" }}>Stories That Bring AI to Life</h2>
            <p style={{ marginTop: 20, fontSize: 20, color: "#4b5563" }}>
              Two novels explore the human meaning of artificial intelligence — one set at the dawn of civilization, one at the threshold of a new era.
            </p>

            <div style={{ marginTop: 24, display: "grid", gap: 16 }}>
              <div style={{ border: "1px solid #e5e7eb", borderRadius: 12, padding: 18, background: "#ffffff" }}>
                <h3 style={{ margin: 0 }}>The Neolithic</h3>
                <p style={{ marginTop: 8, color: "#6b7280" }}>
                  A story that connects the origins of human creativity to the emergence of AI.
                </p>
              </div>
              <div style={{ border: "1px solid #e5e7eb", borderRadius: 12, padding: 18, background: "#ffffff" }}>
                <h3 style={{ margin: 0 }}>Threshold</h3>
                <p style={{ marginTop: 8, color: "#6b7280" }}>
                  A novel exploring what it means to stand at the frontier of human and machine intelligence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pathways" style={{ background: "#ffffff", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: 760, margin: "0 auto 48px" }}>
            <p style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: "#f59e0b" }}>
              Choose Your Path
            </p>
            <h2 style={{ fontSize: 40, marginTop: 12 }}>Three Learning Pathways</h2>
            <p style={{ marginTop: 16, fontSize: 20, color: "#6b7280" }}>
              The core curriculum branches into three pathways, each designed for a different audience and context.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24 }}>
            <div style={{ border: "2px solid #f59e0b", background: "#fff7ed", borderRadius: 16, padding: 24 }}>
              <h3>PocketLab</h3>
              <p style={{ color: "#4b5563" }}>
                A structured program for K–12 classrooms — ideal for STEM, CTE, and social studies teachers bringing AI literacy to their students.
              </p>
              <Link href="/pocketlab" style={{ color: "#c2410c", fontWeight: 700, textDecoration: "none" }}>
                Learn more →
              </Link>
            </div>

            <div style={{ border: "2px solid #8b5cf6", background: "#f5f3ff", borderRadius: 16, padding: 24 }}>
              <h3>Humanities Pathway</h3>
              <p style={{ color: "#4b5563" }}>
                Designed for English, writing, and interdisciplinary courses — exploring AI through creativity, ethics, and cultural analysis.
              </p>
              <Link href="/humanities" style={{ color: "#6d28d9", fontWeight: 700, textDecoration: "none" }}>
                Learn more →
              </Link>
            </div>

            <div style={{ border: "2px solid #ec4899", background: "#fdf2f8", borderRadius: 16, padding: 24 }}>
              <h3>Conceptual Academy</h3>
              <p style={{ color: "#4b5563" }}>
                An online learning platform for teachers, professionals, and independent learners who want to explore AI literacy more deeply.
              </p>
              <Link href="/academy" style={{ color: "#be185d", fontWeight: 700, textDecoration: "none" }}>
                Learn more →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "#111827", color: "white", padding: "80px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: "#f59e0b" }}>
            The Stakes
          </p>
          <h2 style={{ fontSize: 40, marginTop: 12 }}>Why AI Literacy Matters</h2>
          <p style={{ marginTop: 24, fontSize: 21, color: "rgba(255,255,255,0.8)" }}>
            AI is reshaping work, education, creativity, and society. People from every field — not just technologists — need to understand how it works and what it means for their disciplines.
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
            “We are the first generation of people creating with AI. The standards we set now — for originality, for voice, for the expectation that human authorship means something — will shape what fills our bookstores, our libraries, our classrooms, and our screens for decades to come.”
          </blockquote>
        </div>
      </section>

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
