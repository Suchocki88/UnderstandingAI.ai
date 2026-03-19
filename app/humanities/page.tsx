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
            Humanities and English Pathway
          </p>
          <h1 style={{ fontSize: 48, lineHeight: 1.1, margin: "0 0 24px" }}>
            Two Novels Written with AI
          </h1>
          <p style={{ fontSize: 20, color: "rgba(255,255,255,0.85)", maxWidth: 700, margin: "0 auto 32px" }}>
            Not just stories about AI. Stories co-created with AI — and that changes everything about how they can be taught.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="https://shop.ingramspark.com/b/084?params=OZfSKWXKME8ZxFjUVQ71XGexxnbrStxDVD23KJKbFdQ"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "#f59e0b",
                color: "#0f172a",
                padding: "14px 28px",
                borderRadius: 8,
                textDecoration: "none",
                fontWeight: 700,
                fontSize: 16,
                display: "inline-block",
              }}
            >
              Order The Neolithic — $17.95 →
            </a>
            <a
              href="https://shop.ingramspark.com/b/084?params=Va0WiVxgr0pbIejltajiU2dWCVLTTUMKzfs6H3Bn8DR"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                border: "2px solid rgba(255,255,255,0.4)",
                color: "white",
                padding: "14px 28px",
                borderRadius: 8,
                textDecoration: "none",
                fontWeight: 600,
                fontSize: 16,
                display: "inline-block",
              }}
            >
              Order The Threshold — $14.95
            </a>
          </div>
        </div>
      </section>

      {/* THE REAL HOOK */}
      <section style={{ background: "#ffffff", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 56, alignItems: "center" }}>
          <div style={{ display: "flex", justifyContent: "center", gap: 32, flexWrap: "wrap" }}>
            <img src="/images/neolithic.jpg" alt="The Neolithic" style={{ width: 200, borderRadius: 12, boxShadow: "0 12px 30px rgba(0,0,0,0.2)" }} />
            <img src="/images/threshold.jpg" alt="The Threshold" style={{ width: 200, borderRadius: 12, boxShadow: "0 12px 30px rgba(0,0,0,0.2)" }} />
          </div>
          <div>
            <p style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: "#8b5cf6", marginBottom: 12 }}>
              The Hook
            </p>
            <h2 style={{ fontSize: 40, margin: "0 0 20px" }}>These Aren't Just New Novels</h2>
            <p style={{ fontSize: 20, color: "#4b5563", marginBottom: 20 }}>
              They were co-written with AI. And that is the whole point.
            </p>
            <p style={{ fontSize: 18, color: "#4b5563", marginBottom: 16 }}>
              Imagine a class discussion where students read not just for plot and character, but to hunt for AI signatures. Where does the human voice come through? Where does the AI? What makes a passage feel flat — and why? What makes it sing?
            </p>
            <p style={{ fontSize: 18, color: "#4b5563", marginBottom: 16 }}>
              The Neolithic, for instance, returns to the image of "water flowing over stones" more than any human author would. Students can find it. They can debate whether it weakens the book or gives it a kind of ritual rhythm. That conversation is about AI, craft, voice, and what it means to write — all at once.
            </p>
            <p style={{ fontSize: 18, color: "#4b5563" }}>
              In short, these novels function as living case studies. Love them or critique them, they raise questions no other texts do.
            </p>
          </div>
        </div>
      </section>

      {/* FOR TEACHERS */}
      <section style={{ background: "#f5f3ff", padding: "80px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: "#8b5cf6" }}>
              For the Classroom
            </p>
            <h2 style={{ fontSize: 40, marginTop: 12 }}>Questions Worth a Semester</h2>
            <p style={{ marginTop: 16, fontSize: 20, color: "#6b7280" }}>
              These novels open up discussions that no other course materials can — because they exist at the exact intersection of human creativity and machine intelligence.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24 }}>

            <div style={{ background: "#ffffff", borderRadius: 16, padding: 28, border: "1px solid #e5e7eb", borderTop: "4px solid #8b5cf6" }}>
              <h3 style={{ fontSize: 18, margin: "0 0 12px" }}>Authorship and Voice</h3>
              <p style={{ color: "#4b5563", margin: 0 }}>
                Who wrote this? Where does the author end and the AI begin? What does it mean to claim authorship of a work that AI helped produce? These are not abstract questions — they are on every page.
              </p>
            </div>

            <div style={{ background: "#ffffff", borderRadius: 16, padding: 28, border: "1px solid #e5e7eb", borderTop: "4px solid #8b5cf6" }}>
              <h3 style={{ fontSize: 18, margin: "0 0 12px" }}>Spotting AI Signatures</h3>
              <p style={{ color: "#4b5563", margin: 0 }}>
                AI has tells — repetitive imagery, over-explained emotion, hedged language. Students who learn to spot them in these novels become far more critical readers of everything AI produces.
              </p>
            </div>

            <div style={{ background: "#ffffff", borderRadius: 16, padding: 28, border: "1px solid #e5e7eb", borderTop: "4px solid #8b5cf6" }}>
              <h3 style={{ fontSize: 18, margin: "0 0 12px" }}>Why Writing Still Matters</h3>
              <p style={{ color: "#4b5563", margin: 0 }}>
                When students ask "why should I learn to write when AI can do it?" — these books are the answer. AI cannot write for anyone. But it can write with you, provided you have a story to tell and the skills to tell it.
              </p>
            </div>

            <div style={{ background: "#ffffff", borderRadius: 16, padding: 28, border: "1px solid #e5e7eb", borderTop: "4px solid #8b5cf6" }}>
              <h3 style={{ fontSize: 18, margin: "0 0 12px" }}>The Process Behind the Product</h3>
              <p style={{ color: "#4b5563", margin: 0 }}>
                How long did it take? Was the first draft any good? What did the human author actually do? The backstory of these novels is itself a rich classroom text — a case study in what genuine AI collaboration looks like.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* FOR ADMINS */}
      <section style={{ background: "#111827", color: "white", padding: "80px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: "#f59e0b", marginBottom: 16 }}>
            A Note for Administrators
          </p>
          <h2 style={{ fontSize: 40, margin: "0 0 24px" }}>The Program That Connects Departments</h2>
          <p style={{ fontSize: 20, color: "rgba(255,255,255,0.85)", maxWidth: 720, margin: "0 auto 24px" }}>
            A program on AI literacy in the Social Studies or CTE department is genuinely exciting. But imagine what happens when the Language Arts department is reading the same novels in parallel.
          </p>
          <p style={{ fontSize: 20, color: "rgba(255,255,255,0.85)", maxWidth: 720, margin: "0 auto 24px" }}>
            Students discussing AI ethics in one classroom. Students analyzing AI's voice and limitations in another. Two teachers, two disciplines, one conversation — weaving departments together in a way that rarely happens.
          </p>
          <p style={{ fontSize: 20, color: "rgba(255,255,255,0.85)", maxWidth: 720, margin: "0 auto 48px" }}>
            For administrators looking for programs that create genuine interdisciplinary coherence, this is a rare opportunity. We believe the strongest advocates for this program will be the administrators who see the big picture.
          </p>
          <Link
            href="/pocketlab"
            style={{
              background: "#f59e0b",
              color: "#0f172a",
              padding: "14px 28px",
              borderRadius: 10,
              textDecoration: "none",
              fontWeight: 700,
              fontSize: 16,
              display: "inline-block",
            }}
          >
            Learn About the K–12 Program →
          </Link>
        </div>
      </section>

      {/* FOR ENGLISH TEACHERS */}
      <section style={{ background: "#ffffff", padding: "80px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: "#8b5cf6" }}>
              For English Teachers
            </p>
            <h2 style={{ fontSize: 40, marginTop: 12 }}>Start with the Novels. Then Go Deeper.</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 40, alignItems: "center" }}>
            <div>
              <p style={{ fontSize: 18, color: "#4b5563", marginBottom: 16 }}>
                The first step is simple: order the novels, read them, and see what you think. They are good reads on their own terms. But once you know how they were made, they become something else entirely.
              </p>
              <p style={{ fontSize: 18, color: "#4b5563", marginBottom: 16 }}>
                The best practices behind these novels — how the human author directed the AI, set the voice, built the world, and made the key editorial decisions — are taught in depth within the Understanding and Working with AI program.
              </p>
              <p style={{ fontSize: 18, color: "#4b5563", marginBottom: 32 }}>
                For English teachers, we recommend taking the Conceptual Academy program as summer professional development. Not to teach the AI program yourself, but to understand what your students in the Social Studies department are experiencing — and to arrive ready for the conversations these novels will spark in your classroom.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <a
                  href="https://shop.ingramspark.com/b/084?params=OZfSKWXKME8ZxFjUVQ71XGexxnbrStxDVD23KJKbFdQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#6d28d9", fontWeight: 700, textDecoration: "none", fontSize: 16 }}
                >
                  Order The Neolithic — $17.95 →
                </a>
                <a
                  href="https://shop.ingramspark.com/b/084?params=Va0WiVxgr0pbIejltajiU2dWCVLTTUMKzfs6H3Bn8DR"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#6d28d9", fontWeight: 700, textDecoration: "none", fontSize: 16 }}
                >
                  Order The Threshold — $14.95 →
                </a>
                <Link
                  href="/academy"
                  style={{ color: "#6d28d9", fontWeight: 700, textDecoration: "none", fontSize: 16 }}
                >
                  Explore the Conceptual Academy Program →
                </Link>
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                src="/images/TwoNovels.png"
                alt="The Neolithic and The Threshold"
                style={{ width: "100%", maxWidth: 360, borderRadius: 8 }}
              />
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
