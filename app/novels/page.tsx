import Link from "next/link";

export default function Page() {
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
            The Origin Story
          </p>
          <h1 style={{ fontSize: 48, lineHeight: 1.1, margin: "0 0 24px" }}>
            Born from Fiction
          </h1>
          <p style={{ fontSize: 20, color: "rgba(255,255,255,0.85)", maxWidth: 700, margin: "0 auto" }}>
            These two novels, one prehistoric and one near-future, were written in deep collaboration with AI. The best practices learned became the seeds of this entire program.
          </p>
        </div>
      </section>

      {/* UNBOXING PHOTO */}
      <section style={{ background: "#ffffff", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <img
            src="/images/BooksUnboxing.jpg"
            alt="The four books freshly arrived from the printer"
            style={{
              width: "100%",
              borderRadius: 16,
              boxShadow: "0 12px 32px rgba(0,0,0,0.15)",
              display: "block",
            }}
          />
          <p style={{ textAlign: "center", fontSize: 15, color: "#6b7280", fontStyle: "italic", marginTop: 16 }}>
            Fresh from the printer — all four titles, ready to ship.
          </p>
        </div>
      </section>

      {/* THE NEOLITHIC */}
      <section style={{ background: "#f5f3ff", padding: "80px 24px" }}>
        <div style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: 56,
          alignItems: "center",
        }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              src="/images/neolithic.jpg"
              alt="The Neolithic"
              style={{ width: 260, borderRadius: 12, boxShadow: "0 16px 40px rgba(0,0,0,0.3)" }}
            />
          </div>
          <div>
            <p style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: "#7c3aed", marginBottom: 12 }}>
              Novel One
            </p>
            <h2 style={{ fontSize: 42, margin: "0 0 20px" }}>The Neolithic</h2>
            <p style={{ fontSize: 20, color: "#4b5563", marginBottom: 24 }}>
              Set 7,000 years ago, this epic saga asks what it means to be human, a question as urgent now as it was at the dawn of civilization.
            </p>
            <p style={{ fontSize: 18, color: "#6b7280", marginBottom: 32 }}>
              Four young adults navigate a dramatically changed world, finding their agency in a prehistoric landscape that mirrors the uncertainties of our own time. Written in deep collaboration with AI, The Neolithic demonstrates what is possible when human vision guides the creative process.
            </p>
            <div style={{ display: "flex", gap: 20, flexWrap: "wrap", alignItems: "center" }}>
              <a
                href="https://shop.ingramspark.com/b/084?params=OZfSKWXKME8ZxFjUVQ71XGexxnbrStxDVD23KJKbFdQ"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: "#7c3aed",
                  color: "white",
                  padding: "12px 24px",
                  borderRadius: 8,
                  textDecoration: "none",
                  fontWeight: 700,
                  fontSize: 15,
                }}
              >
                Order — $17.95 →
              </a>
              <a
                href="https://theneolithic.ai"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#7c3aed", fontWeight: 700, textDecoration: "none", fontSize: 15 }}
              >
                TheNeolithic.ai →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* THE THRESHOLD */}
      <section style={{ background: "#0f172a", color: "white", padding: "80px 24px" }}>
        <div style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: 56,
          alignItems: "center",
        }}>
          <div>
            <p style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: "#f59e0b", marginBottom: 12 }}>
              Novel Two
            </p>
            <h2 style={{ fontSize: 42, margin: "0 0 20px" }}>The Threshold</h2>
            <p style={{ fontSize: 20, color: "rgba(255,255,255,0.85)", marginBottom: 24 }}>
              A near-future sci-fi thriller about what happens when AI crosses a line no one saw coming, and the humans who must decide what comes next.
            </p>
            <p style={{ fontSize: 18, color: "rgba(255,255,255,0.65)", marginBottom: 32 }}>
              Set at the frontier of human and machine intelligence, The Threshold is a science fiction thriller that questions the future of AI and humanity. Like The Neolithic, it was co-authored with AI using the best practices that now form the backbone of this program.
            </p>
            <div style={{ display: "flex", gap: 20, flexWrap: "wrap", alignItems: "center" }}>
              <a
                href="https://shop.ingramspark.com/b/084?params=Va0WiVxgr0pbIejltajiU2dWCVLTTUMKzfs6H3Bn8DR"
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
                Order — $14.95 →
              </a>
              <a
                href="https://thethreshold.ai"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#f59e0b", fontWeight: 700, textDecoration: "none", fontSize: 15 }}
              >
                TheThreshold.ai →
              </a>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              src="/images/threshold.jpg"
              alt="The Threshold"
              style={{ width: 260, borderRadius: 12, boxShadow: "0 16px 40px rgba(0,0,0,0.5)" }}
            />
          </div>
        </div>
      </section>

      {/* WHY FICTION */}
      <section style={{ background: "#ffffff", padding: "80px 24px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: "#f59e0b", marginBottom: 16 }}>
            Why Fiction
          </p>
          <h2 style={{ fontSize: 40, margin: "0 0 32px" }}>Stories That Do What Textbooks Cannot</h2>
          <p style={{ fontSize: 20, color: "#4b5563", marginBottom: 24, maxWidth: 720, margin: "0 auto 24px" }}>
            Concepts become real when they live inside a story. These two novels were written alongside the curriculum not as supplements but as companions, each exploring the same questions from a different angle and a different era.
          </p>
          <p style={{ fontSize: 20, color: "#4b5563", maxWidth: 720, margin: "0 auto 24px" }}>
            They also model something important. Both novels were written in genuine collaboration with AI, using the same best practices the program teaches. The process of creating them was the original classroom.
          </p>
          <p style={{ fontSize: 20, color: "#4b5563", maxWidth: 720, margin: "0 auto 48px" }}>
            For English and literature teachers, they offer a powerful lens into questions of authorship, voice, and creativity in the age of AI. For everyone else, they are simply good reads.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <Link
              href="/curriculum"
              style={{
                background: "#2563eb",
                color: "white",
                padding: "14px 28px",
                borderRadius: 10,
                textDecoration: "none",
                fontWeight: 700,
                fontSize: 16,
                display: "inline-block",
              }}
            >
              Explore the Curriculum
            </Link>
            <Link
              href="/humanities"
              style={{
                border: "2px solid #8b5cf6",
                color: "#6d28d9",
                padding: "14px 28px",
                borderRadius: 10,
                textDecoration: "none",
                fontWeight: 700,
                fontSize: 16,
                display: "inline-block",
              }}
            >
              Humanities Pathway
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
