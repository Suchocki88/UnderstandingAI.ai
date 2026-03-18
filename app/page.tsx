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

      {/* NOVELS */}
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
          <div style={{ display: "flex", justifyContent: "center", gap: 35, flexWrap: "wrap" }}>
            <img src="/images/neolithic.jpg" alt="The Neolithic" style={{ width: 185, borderRadius: 12, boxShadow: "0 10px 25px rgba(0,0,0,0.25)" }} />
            <img src="/images/threshold.jpg" alt="The Threshold" style={{ width: 185, borderRadius: 12, boxShadow: "0 10px 25px rgba(0,0,0,0.25)" }} />
          </div>
          <div>
            <p style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: "#7c3aed" }}>
              Fiction as a Lens
            </p>
            <h2 style={{ fontSize: 40, margin: "12px 0 0" }}>Born from Fiction</h2>
            <p style={{ marginTop: 20, fontSize: 20, color: "#4b5563" }}>
              These two novels, one prehistoric and one near-future, were written in deep collaboration with AI. The best practices learned became the seeds of this entire program.
            </p>
            <div style={{ marginTop: 24, display: "grid", gap: 16 }}>
              <div style={{ border: "1px solid #e5e7eb", borderRadius: 12, padding: 18, background: "#ffffff" }}>
                <h3 style={{ margin: 0 }}>The Neolithic</h3>
                <p style={{ marginTop: 8, color: "#6b7280" }}>
                  Set 7,000 years ago, this epic saga asks what it means to be human, a question as urgent now as it was at the dawn of civilization.
                </p>
              </div>
              <div style={{ border: "1px solid #e5e7eb", borderRadius: 12, padding: 18, background: "#ffffff" }}>
                <h3 style={{ margin: 0 }}>The Threshold</h3>
                <p style={{ marginTop: 8, color: "#6b7280" }}>
                  A near-future sci-fi thriller about what happens when AI crosses a line no one saw coming . . . and the humans who must decide what comes next.
                </p>
              </div>
            </div>
            <div style={{ marginTop: 28 }}>
              <Link href="/novels" style={{ color: "#6d28d9", fontWeight: 700, textDecoration: "none" }}>
                Learn more about the novels →
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* HOW TO ACCESS */}
      <section style={{ background: "#f8fafc", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: 760, margin: "0 auto 48px" }}>
            <p style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: "#f59e0b" }}>
              Get Started
            </p>
            <h2 style={{ fontSize: 40, marginTop: 12 }}>How to Access the Program</h2>
            <p style={{ marginTop: 16, fontSize: 20, color: "#6b7280" }}>
              Whether you&apos;re an independent learner, a teacher, or a professional — there&apos;s a path designed for you.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 24 }}>

            {/* Print */}
            <div style={{ border: "2px solid #6b7280", borderRadius: 16, padding: 28, background: "#ffffff", display: "flex", flexDirection: "column", gap: 12 }}>
              <img src="/images/Volumes12.png" alt="Volumes 1 and 2" style={{ width: "100%", marginBottom: 4 }} />
              <h3 style={{ margin: 0, fontSize: 20 }}>Expore the Books</h3>
              <p style={{ color: "#4b5563", margin: 0, flexGrow: 1 }}>
                AI literacy shouldn't be limited to the classroom. These two volumes are for anyone who wants to understand the technology reshaping the world. This includes friends, colleagues, and yourself. Always up-to-date via print on demand. QR codes to vidoes are included.
              </p>
              <div style={{ fontSize: 14, color: "#6b7280", lineHeight: 2 }}>
                <a href="https://shop.ingramspark.com/b/084?params=4Ubgowqn33dPkRQlH6Lc3HmeHl43roEnJHw4n0t9uEd" target="_blank" rel="noopener noreferrer" style={buyButton}>Volume 1 — $19.99</a><br />
                <a href="https://shop.ingramspark.com/b/084?params=2SR8fnMJdGddfDPH5kQLrD6P0VrPHPof8SrYclByl9q" target="_blank" rel="noopener noreferrer" style={buyButton}>Volume 2 — $19.99</a><br />
              </div>
            </div>

            {/* PocketLab */}
            <div style={{ border: "2px solid #f59e0b", borderRadius: 16, padding: 28, background: "#fff7ed", display: "flex", flexDirection: "column", gap: 12 }}>
              <img src="/images/pocketlab-logo.png" alt="PocketLab" style={{ width: "100%", borderRadius: 8, marginBottom: 4 }} />
              <h3 style={{ margin: 0, fontSize: 20 }}>K–12 Classroom</h3>
              <p style={{ color: "#4b5563", margin: 0, flexGrow: 1 }}>
                Teaching high school students? The PocketLab pathway delivers a full semester program for STEM, CTE, and Social Studies classrooms — with teacher tools, labs, and Alia AI built in. AI is reshaping most every field, yet most students have no idea how it actually works. This program changes that.
              </p>
              <Link href="/pocketlab" style={{ color: "#c2410c", fontWeight: 700, textDecoration: "none", marginTop: 8 }}>
                Learn more about PocketLab →
              </Link>
            </div>

            {/* Humanities */}
            <div style={{ border: "2px solid #8b5cf6", borderRadius: 16, padding: 28, background: "#f5f3ff", display: "flex", flexDirection: "column", gap: 12 }}>
              <img src="/images/TwoNovels.png" alt="The Neolithic and The Threshold" style={{ width: "100%", marginBottom: 4 }} />
              <h3 style={{ margin: 0, fontSize: 20 }}>Humanities &amp; English</h3>
              <p style={{ color: "#4b5563", margin: 0, flexGrow: 1 }}>
                Teaching literature or creative writing? Our two young-adult novels model what thoughtful human-AI collaboration looks like. Perfect for sparking discussions about authorship, creativity, and voice in the age of AI.
              </p>
              <Link href="/humanities" style={{ color: "#6d28d9", fontWeight: 700, textDecoration: "none", marginTop: 8 }}>
                Learn more about the Humanities pathway →
              </Link>
            </div>

            {/* Conceptual Academy */}
            <div style={{ border: "2px solid #ec4899", borderRadius: 16, padding: 28, background: "#fdf2f8", display: "flex", flexDirection: "column", gap: 12 }}>
              <img src="/images/CALogo590.png" alt="Conceptual Academy" style={{ width: "100%", borderRadius: 8, marginBottom: 4 }} />
              <h3 style={{ margin: 0, fontSize: 20 }}>Professional Development</h3>
              <p style={{ color: "#4b5563", margin: 0, flexGrow: 1 }}>
                A professional, independent learner, or teacher seeking credentials? Conceptual Academy offers a structured online program with CEUs, PD hours, and full AI tools — available in 5-hour increments.
              </p>
              <Link href="/academy" style={{ color: "#be185d", fontWeight: 700, textDecoration: "none", marginTop: 8 }}>
                Learn more about Conceptual Academy →
              </Link>
            </div>

          </div>
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
