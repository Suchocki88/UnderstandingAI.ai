import Link from "next/link";
export const metadata = {
  title: "Understanding and Working with AI | Conceptual Academy",
  description: "A comprehensive AI literacy curriculum for teachers, professionals, and independent learners. Eight chapters across two volumes.",
}
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
          padding: "clamp(60px, 12vw, 160px) 24px",
          color: "white",
        }}
      >
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.50)" }} />
        <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <h1 style={{
            fontSize: "clamp(32px, 6vw, 56px)",
            lineHeight: 1.1,
            margin: 0,
            wordBreak: "break-word",
          }}>
            Understanding and Working with AI
          </h1>
          <p style={{ marginTop: 16, fontSize: "clamp(16px, 3vw, 22px)", maxWidth: 760, opacity: 0.9 }}>
            Engaging, Cross-Disciplinary, Comprehensive, and Meaningful
          </p>
          <div style={{ marginTop: 28, display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link href="/pocketlab" style={{
              background: "#f59e0b",
              color: "#000",
              padding: "14px 24px",
              borderRadius: 10,
              textDecoration: "none",
              fontWeight: 700,
              fontSize: 16,
              display: "inline-block",
            }}>
              For K–12 Classrooms →
            </Link>
            <Link href="/academy" style={{
              background: "rgba(255,255,255,0.15)",
              color: "white",
              border: "2px solid rgba(255,255,255,0.6)",
              padding: "14px 24px",
              borderRadius: 10,
              textDecoration: "none",
              fontWeight: 700,
              fontSize: 16,
              display: "inline-block",
            }}>
              For Professionals →
            </Link>
          </div>
        </div>
      </section>

      {/* HABIT OF MIND TEASER */}
      <section style={{ background: "#451a03", padding: "24px 32px", borderLeft: "4px solid #f59e0b" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", gap: 20, alignItems: "baseline", flexWrap: "wrap" }}>
          <span style={{ fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: "#f59e0b", flexShrink: 0 }}>
            Habit of Mind 1
          </span>
          <p style={{ margin: 0, fontSize: 16, color: "rgba(255,255,255,0.85)", fontStyle: "italic", lineHeight: 1.6 }}>
            &ldquo;AI is designed to agree with you. That&apos;s a problem. If you don&apos;t actively ask for the opposing view, you won&apos;t get it — otherwise you&apos;re sitting in an echo chamber with a very articulate mirror.&rdquo;
          </p>
        </div>
      </section>

      {/* WHO ARE YOU */}
      <section style={{ background: "#0f172a", padding: "0 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))" }}>

          <Link href="/pocketlab" style={{ textDecoration: "none", borderRight: "1px solid rgba(255,255,255,0.1)", padding: "28px 24px", display: "flex", flexDirection: "column", gap: 6 }}>
            <span style={{ fontSize: 17, fontWeight: 700, color: "white" }}>Teachers / Admin</span>
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
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 480px), 1fr))",
            gap: 40,
            alignItems: "center",
          }}
        >
          <div>
            <p style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: "#f59e0b" }}>
              The Foundation
            </p>
            <h2 style={{ fontSize: "clamp(28px, 5vw, 40px)", margin: "12px 0 0" }}>The Core Curriculum</h2>
            <p style={{ marginTop: 20, fontSize: 20, color: "#4b5563" }}>
              An accessible and inviting program for AI literacy. At its core are two textbook volumes that provide a conceptual and experiential approach from which anyone can learn.
            </p>
            <div style={{ marginTop: 24, display: "grid", gap: 16 }}>
              <div style={{ border: "1px solid #e5e7eb", borderRadius: 12, padding: 18, background: "#f8fafc" }}>
                <h3 style={{ margin: 0 }}>Volume 1: Foundations &amp; Practice</h3>
                <p style={{ marginTop: 8, color: "#6b7280" }}>
                  Core concepts of AI including what it is, how it works, and how to use it responsibly. <em>260 pages (Now available in paperback)</em>
                </p>
              </div>
              <div style={{ border: "1px solid #e5e7eb", borderRadius: 12, padding: 18, background: "#f8fafc" }}>
                <h3 style={{ margin: 0 }}>Volume 2: Society &amp; the Future</h3>
                <p style={{ marginTop: 8, color: "#6b7280" }}>
                  The societal, ethical, and creative implications of living and working alongside AI. <em>284 pages (Now available in paperback)</em>
                </p>
              </div>
            </div>
            <div style={{ marginTop: 28 }}>
              <Link href="/curriculum" style={{ color: "#2563eb", fontWeight: 700, textDecoration: "none" }}>
                Learn more about the curriculum →
              </Link>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 24 }}>
            <div style={{ display: "flex", justifyContent: "center", gap: 24, flexWrap: "wrap" }}>
              <img src="/images/volume1.jpg" alt="Volume 1" style={{ width: "clamp(140px, 40%, 220px)", borderRadius: 12, boxShadow: "0 10px 25px rgba(0,0,0,0.25)" }} />
              <img src="/images/volume2.jpg" alt="Volume 2" style={{ width: "clamp(140px, 40%, 220px)", borderRadius: 12, boxShadow: "0 10px 25px rgba(0,0,0,0.25)" }} />
            </div>
            <img src="/images/FrankCoffee.png" alt="Frank our mascot" style={{ width: "clamp(200px, 80%, 390px)" }} />
          </div>
        </div>
      </section>

      {/* WHY IT MATTERS */}
      <section style={{ background: "#111827", color: "white", padding: "80px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: "#f59e0b" }}>
            The Stakes
          </p>
          <h2 style={{ fontSize: "clamp(28px, 5vw, 40px)", marginTop: 12 }}>Why AI Literacy Matters</h2>
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
              fontSize: "clamp(18px, 3vw, 24px)",
              color: "rgba(255,255,255,0.92)",
            }}
          >
            &ldquo;We are the first generation of people creating with AI. The standards we set now — for originality, for voice, for the expectation that human authorship means something — will shape what fills our bookstores, our libraries, our classrooms, our screens, and our professions for decades to come.&rdquo;
          </blockquote>
        </div>
      </section>

      {/* HOW TO ACCESS */}
      <section style={{ background: "#f8fafc", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: 760, margin: "0 auto 48px" }}>
            <p style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: "#f59e0b" }}>
              Get Started
            </p>
            <h2 style={{ fontSize: "clamp(28px, 5vw, 40px)", marginTop: 12 }}>How to Access the Program</h2>
            <p style={{ marginTop: 16, fontSize: 20, color: "#6b7280" }}>
              Whether you&apos;re a teacher, a professional, or an independent learner, there&apos;s a path designed for you.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 240px), 1fr))", gap: 24 }}>

            {/* Conceptual Academy */}
            <div style={{ border: "2px solid #ec4899", borderRadius: 16, padding: 28, background: "#fdf2f8", display: "flex", flexDirection: "column", gap: 12 }}>
              <img src="/images/CALogo590.png" alt="Conceptual Academy" style={{ width: "100%", borderRadius: 8, marginBottom: 4 }} />
              <h3 style={{ margin: 0, fontSize: 20 }}>Professional Development</h3>
              <p style={{ color: "#4b5563", margin: 0, flexGrow: 1 }}>
                A teacher, professional, or independent learner? Conceptual Academy offers a structured online program with CEUs, PD hours — available in 5-hour increments. Access to automated assessment, customized AI tools, and more. Start anytime. Follow your own pace.
              </p>
              <Link href="/academy" style={{ color: "#be185d", fontWeight: 700, textDecoration: "none", marginTop: 8 }}>
                Learn more about Conceptual Academy →
              </Link>
            </div>

            {/* PocketLab */}
            <div style={{ border: "2px solid #f59e0b", borderRadius: 16, padding: 28, background: "#fff7ed", display: "flex", flexDirection: "column", gap: 12 }}>
              <img src="/images/pocketlab-logo.png" alt="PocketLab" style={{ width: "100%", borderRadius: 8, marginBottom: 4 }} />
              <h3 style={{ margin: 0, fontSize: 20 }}>K–12 Classroom</h3>
              <p style={{ color: "#4b5563", margin: 0, flexGrow: 1 }}>
                Teaching high school students? The PocketLab pathway delivers a full semester program for STEM, CTE, and Social Studies classrooms — with teacher tools, labs, and our Alia AI safeguards built in. AI is reshaping most every field, yet most students have no idea how it actually works. This program changes that.
              </p>
              <Link href="/pocketlab" style={{ color: "#c2410c", fontWeight: 700, textDecoration: "none", marginTop: 8 }}>
                Learn more about PocketLab →
              </Link>
            </div>

            {/* Print */}
            <div style={{ border: "2px solid #6b7280", borderRadius: 16, padding: 28, background: "#ffffff", display: "flex", flexDirection: "column", gap: 12 }}>
              <img src="/images/Volumes12.png" alt="Volumes 1 and 2" style={{ width: "100%", marginBottom: 4 }} />
              <h3 style={{ margin: 0, fontSize: 20 }}>AI Textbooks</h3>
              <p style={{ color: "#4b5563", margin: 0, flexGrow: 1 }}>
                These two volumes are for anyone who wants to understand the technology reshaping our world. Always up-to-date via print on demand. QR codes to videos are included. <em>Now available in paperback.</em>
              </p>
              <div style={{ fontSize: 14, color: "#6b7280", lineHeight: 2 }}>
                <a href="https://shop.ingramspark.com/b/084?params=4Ubgowqn33dPkRQlH6Lc3HmeHl43roEnJHw4n0t9uEd" target="_blank" rel="noopener noreferrer" style={buyButton}>Purchase Volume 1, <em>260 pp</em></a><br />
                <a href="https://shop.ingramspark.com/b/084?params=2SR8fnMJdGddfDPH5kQLrD6P0VrPHPof8SrYclByl9q" target="_blank" rel="noopener noreferrer" style={buyButton}>Purchase Volume 2, <em>284 pp</em></a>
              </div>
            </div>

            {/* Humanities */}
            <div style={{ border: "2px solid #8b5cf6", borderRadius: 16, padding: 28, background: "#f5f3ff", display: "flex", flexDirection: "column", gap: 12 }}>
              <img src="/images/TwoNovels.png" alt="The Neolithic and The Threshold" style={{ width: "100%", marginBottom: 4 }} />
              <h3 style={{ margin: 0, fontSize: 20 }}>Language Arts</h3>
              <p style={{ color: "#4b5563", margin: 0, flexGrow: 1 }}>
                Teaching literature or creative writing? Our two young-adult novels model what thoughtful human-AI collaboration looks like. Perfect for sparking discussions about authorship, creativity, and voice in the age of AI.
              </p>
              <Link href="/humanities" style={{ color: "#6d28d9", fontWeight: 700, textDecoration: "none", marginTop: 8 }}>
                Learn more about this literary pathway →
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section style={{ background: "#ffffff", padding: "80px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(28px, 5vw, 40px)" }}>About the Program</h2>
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
