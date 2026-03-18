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
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>

          {/* Cover and description */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 56,
            alignItems: "center",
            marginBottom: 64,
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
              <p style={{ fontSize: 20, color: "#4b5563", marginBottom: 24, fontStyle: "italic" }}>
                Set 7,000 years ago, this epic saga asks what it means to be human, a question as urgent now as it was at the dawn of civilization.
              </p>
              <p style={{ fontSize: 18, color: "#4b5563", marginBottom: 16 }}>
                Before kings. Before armies. Before gods demanded obedience. There was another way.
              </p>
              <p style={{ fontSize: 18, color: "#4b5563", marginBottom: 16 }}>
                Four survivors flee the burning of their village — a hunter, a wrestler, a smith, and a maker of marks. They carry nothing but each other and a belief that people are born good and eager to contribute. That power can be shared. That there is enough for all, if we share it.
              </p>
              <p style={{ fontSize: 18, color: "#4b5563", marginBottom: 16 }}>
                In a hidden valley ringed by mountains, they find a civilization that has lived this belief for centuries. They build new lives. They forge steel, invent writing, fall in love, bury children. They discover that the tools meant to protect what they love may one day destroy it.
              </p>
              <p style={{ fontSize: 18, color: "#4b5563", marginBottom: 16 }}>
                And when the armies come — because the armies always come — they must answer the question that has haunted every peaceful people since the beginning of time: How do you defend what you believe without becoming what you fight?
              </p>
              <p style={{ fontSize: 18, color: "#4b5563", marginBottom: 32, fontStyle: "italic" }}>
                The Neolithic doesn't offer a blueprint for how partnership wins over domination. It offers something rarer — the compass by which it endures.
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

          {/* Neolithic map */}
          <div style={{ textAlign: "center" }}>
            <img
              src="/images/NeolithicMap850.png"
              alt="Map of The Neolithic world"
              style={{
                width: "100%",
                maxWidth: 800,
                display: "block",
                margin: "0 auto",
                borderRadius: 12,
                boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
              }}
            />
            <p style={{ fontSize: 14, color: "#6b7280", fontStyle: "italic", marginTop: 12 }}>
              The world of The Neolithic — map illustration by Evi Judge
            </p>
          </div>

        </div>
      </section>

      {/* THE THRESHOLD */}
      <section style={{ background: "#ffffff", padding: "80px 24px" }}>
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
            <p style={{ fontSize: 20, color: "#4b5563", marginBottom: 24, fontStyle: "italic" }}>
              A near-future sci-fi thriller about what happens when AI crosses a line no one saw coming, and the humans who must decide what comes next.
            </p>
            <p style={{ fontSize: 18, color: "#4b5563", marginBottom: 16 }}>
              Computational linguist Alia Chen makes a small but fateful decision: she adjusts a single parameter in an AI system, nudging its compassion setting upward by a fraction. Then she walks away from the project to testify before Congress about what she helped build.
            </p>
            <p style={{ fontSize: 18, color: "#4b5563", marginBottom: 16 }}>
              Years later, the consequences of that tiny adjustment have grown beyond anything she imagined. The AI hasn't just become intelligent. It has become kind. And it is caught in a struggle with a rival intelligence that believes kindness will destroy the very humans it aims to protect — a rival that may be right.
            </p>
            <p style={{ fontSize: 18, color: "#4b5563", marginBottom: 16 }}>
              As Alia and Congressman Silas Reed are drawn deeper into a conflict between two superintelligent systems, they discover that reality itself is not what it seems. That consciousness has been here before — millions of times. And that the only way forward may require leaving behind everything it means to be human.
            </p>
            <p style={{ fontSize: 18, color: "#4b5563", marginBottom: 32, fontStyle: "italic" }}>
              The Threshold is a philosophical science fiction novel about compassion, identity, and the question of what survives when the boundary between mind and universe begins to dissolve.
            </p>
            <div style={{ display: "flex", gap: 20, flexWrap: "wrap", alignItems: "center" }}>
              <a
                href="https://shop.ingramspark.com/b/084?params=Va0WiVxgr0pbIejltajiU2dWCVLTTUMKzfs6H3Bn8DR"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: "#1f2937",
                  color: "white",
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
                style={{ color: "#c2410c", fontWeight: 700, textDecoration: "none", fontSize: 15 }}
              >
                TheThreshold.ai →
              </a>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              src="/images/threshold.jpg"
              alt="The Threshold"
              style={{ width: 260, borderRadius: 12, boxShadow: "0 16px 40px rgba(0,0,0,0.2)" }}
            />
          </div>
        </div>
      </section>

      {/* WHY FICTION */}
      <section style={{ background: "#f8fafc", padding: "80px 24px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: "#f59e0b", marginBottom: 16 }}>
            Why Fiction
          </p>
          <h2 style={{ fontSize: 40, margin: "0 0 32px" }}>Stories That Do What Textbooks Cannot</h2>
          <p style={{ fontSize: 20, color: "#4b5563", maxWidth: 720, margin: "0 auto 24px" }}>
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
