import Link from "next/link";
export const metadata = {
  title: "K–12 AI Literacy Program | PocketLab Pathway",
  description: "A full semester AI literacy program for high school Social Studies, CTE, and STEM classrooms delivered through PocketLab Notebook.",
}
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
            K–12 Classroom Pathway
          </p>
          <h1 style={{ fontSize: 48, lineHeight: 1.1, margin: "0 0 24px" }}>
            AI Literacy for the High School Classroom
          </h1>
          <p style={{ fontSize: 20, color: "rgba(255,255,255,0.85)", maxWidth: 700, margin: "0 auto 32px" }}>
            A full semester program for STEM, CTE, and Social Studies teachers, delivered through the PocketLab Notebook platform. Built by the team behind award-winning high school science programs used across the country.
          </p>
          <a
            href="https://app.thepocketlab.com/lab-report/yyAw0siq0001yyAw?ro=1"
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
            Explore Sample Lesson →
          </a>
        </div>
      </section>

      {/* PARTNER LOGOS */}
      <section style={{ background: "#ffffff", padding: "48px 24px" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          <img
            src="/images/PLCALogo.jpg"
            alt="PocketLab and Conceptual Academy"
            style={{ width: "100%", maxWidth: 500, display: "block", margin: "0 auto" }}
          />
        </div>
      </section>

      {/* CREDIBILITY */}
      <section style={{ background: "#f8fafc", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: 760, margin: "0 auto 48px" }}>
            <p style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: "#f59e0b" }}>
              Proven Track Record
            </p>
            <h2 style={{ fontSize: 40, marginTop: 12 }}>Conceptual Academy</h2>
            <p style={{ marginTop: 16, fontSize: 20, color: "#6b7280" }}>
              We are best known for our high school science programs in physics, chemistry, physical science, biology, and Earth and Space Science. Our approach is now applied to AI literacy.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24 }}>

            <div style={{ background: "#ffffff", borderRadius: 16, padding: 28, border: "1px solid #e5e7eb", borderTop: "4px solid #f59e0b" }}>
              <h3 style={{ fontSize: 20, margin: "0 0 12px" }}>Texas SBOE Approved</h3>
              <p style={{ color: "#4b5563", margin: 0 }}>
                Our programs are among a select few approved by the Texas State Board of Education.
              </p>
            </div>

            <div style={{ background: "#ffffff", borderRadius: 16, padding: 28, border: "1px solid #e5e7eb", borderTop: "4px solid #f59e0b" }}>
              <h3 style={{ fontSize: 20, margin: "0 0 12px" }}>Fully NGSS Aligned</h3>
              <p style={{ color: "#4b5563", margin: 0 }}>
                Our science programs are fully aligned with multiple state standards. The same rigorous approach guides our AI curriculum.
              </p>
            </div>

            <div style={{ background: "#ffffff", borderRadius: 16, padding: 28, border: "1px solid #e5e7eb", borderTop: "4px solid #f59e0b" }}>
              <h3 style={{ fontSize: 20, margin: "0 0 12px" }}>Used Across the Country</h3>
              <p style={{ color: "#4b5563", margin: 0 }}>
                Our conceptual approach — clear, accessible, and experiential — is what we bring to AI literacy.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* PLATFORM SCREENSHOT */}
      <section style={{ background: "#ffffff", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 56, alignItems: "center" }}>
          <div>
            <p style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: "#f59e0b" }}>
              The Platform
            </p>
            <h2 style={{ fontSize: 36, margin: "12px 0 20px" }}>Built for the High School Classroom</h2>
            <p style={{ fontSize: 18, color: "#4b5563", marginBottom: 16 }}>
              PocketLab Notebook is designed specifically for the high school environment. The program's eight chapters are delivered as a structured collection of lessons — Core, Spotlight, Lab, Project, and Discussion Days — ready to use from day one.
            </p>
            <p style={{ fontSize: 18, color: "#4b5563", marginBottom: 16 }}>
              The platform is also an authoring tool. Teachers can customize individual lessons for differentiated learning, adjust reading levels with a single click, and deliver content in any language. Our program is the robust template from which they start.
            </p>
            <p style={{ fontSize: 18, color: "#4b5563", marginBottom: 32 }}>
              AI integration means auto-grading is built in. Alia, the AI learning assistant, is embedded directly into the program alongside teacher guides and cognitive science-based professional development resources.
            </p>
            <a
              href="https://app.thepocketlab.com/lab-report/yyAw0siq0001yyAw?ro=1"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#c2410c", fontWeight: 700, textDecoration: "none", fontSize: 16 }}
            >
              View a Sample Lesson →
            </a>
          </div>
          <div>
            <img
              src="/images/UAIPocketLab.jpg"
              alt="The AI program on PocketLab Notebook"
              style={{ width: "100%", borderRadius: 12, boxShadow: "0 8px 24px rgba(0,0,0,0.15)" }}
            />
            <p style={{ fontSize: 14, color: "#6b7280", fontStyle: "italic", marginTop: 12, textAlign: "center" }}>
              The Understanding and Working with AI program on PocketLab Notebook
            </p>
          </div>
        </div>
      </section>

      {/* TEACHER RESOURCES */}
      <section style={{ background: "#fff7ed", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: 760, margin: "0 auto 48px" }}>
            <p style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: "#f59e0b" }}>
              Teacher Support
            </p>
            <h2 style={{ fontSize: 40, marginTop: 12 }}>Everything a Teacher Needs</h2>
            <p style={{ marginTop: 16, fontSize: 20, color: "#6b7280" }}>
              The program includes a full suite of instructor tools and professional development resources grounded in cognitive science.
            </p>
          </div>

          {/* Three boxes */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, marginBottom: 32 }}>

            <div style={{ background: "#ffffff", borderRadius: 16, padding: 28, border: "2px solid #f59e0b" }}>
              <h3 style={{ fontSize: 20, margin: "0 0 12px" }}>Teacher Guides</h3>
              <p style={{ color: "#4b5563", margin: "0 0 16px" }}>
                Detailed lesson-by-lesson guides with suggested scripts, facilitation tips, discussion prompts, and assessment rubrics. Built on cognitive science best practices, these guides give both new and experienced teachers the confidence to lead every lesson — even with no prior AI background required. Includes assessment strategies.
              </p>
              <a
                href="https://suchocki88.github.io/UAI0405TG/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#c2410c", fontWeight: 700, textDecoration: "none" }}
              >
                View a Sample Teacher Guide →
              </a>
            </div>

            <div style={{ background: "#ffffff", borderRadius: 16, padding: 28, border: "2px solid #f59e0b" }}>
              <h3 style={{ fontSize: 20, margin: "0 0 12px" }}>Standards Alignment</h3>
              <p style={{ color: "#4b5563", margin: "0 0 16px" }}>
                Complete standards alignment documentation to help administrators and curriculum coordinators place this program within existing graduation requirements and course frameworks. Whether your district follows NGSS, state-specific standards, or CTE pathways, we have done the alignment work so you don't have to.
              </p>
              <a
                href="https://suchocki88.github.io/UAI0405Standards/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#c2410c", fontWeight: 700, textDecoration: "none" }}
              >
                View Standards Alignment →
              </a>
            </div>

            <div style={{ background: "#ffffff", borderRadius: 16, padding: 28, border: "2px solid #f59e0b" }}>
              <h3 style={{ fontSize: 20, margin: "0 0 12px" }}>Alia AI Built In</h3>
              <p style={{ color: "#4b5563", margin: 0 }}>
                Students have access to Alia, the AI learning assistant trained specifically on this curriculum. Unlike general-purpose AI, Alia operates with guardrails — she stays within the course content, never completes assignments for students, and guides them Socratically toward understanding rather than just giving answers. Teachers and administrators can feel confident this is a safe, focused AI experience.
              </p>
            </div>

          </div>

{/* Full-width Learn It Before You Teach It banner */}
          <div style={{
            background: "#0f172a",
            borderRadius: 16,
            padding: "40px 48px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 24,
          }}>
            <div style={{ maxWidth: 560 }}>
              <h3 style={{ fontSize: 24, margin: "0 0 12px", color: "white" }}>Learn It Before You Teach It</h3>
              <p style={{ color: "rgba(255,255,255,0.8)", margin: 0, fontSize: 18 }}>
                Looking for summer professional learning credits? The Conceptual Academy online program lets you experience this curriculum yourself before bringing it to students — earning CEUs or PD hours along the way. You will arrive in the fall primed to teach it, having lived the experience your students are about to have.
              </p>
            </div>
            <Link
              href="/academy"
              style={{
                background: "#f59e0b",
                color: "#0f172a",
                padding: "14px 28px",
                borderRadius: 10,
                textDecoration: "none",
                fontWeight: 700,
                fontSize: 16,
                whiteSpace: "nowrap",
                display: "inline-block",
              }}
            >
              Explore Conceptual Academy →
            </Link>
            <img
              src="/images/CAFlowerBright.png"
              alt="Conceptual Academy"
              style={{ width: 120, opacity: 0.9 }}
            />
          </div>

        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#0f172a", color: "white", padding: "80px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <p style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: "#f59e0b", marginBottom: 16 }}>
            Get Started
          </p>
          <h2 style={{ fontSize: 40, margin: "0 0 24px" }}>Ready to Bring AI Literacy to Your Classroom?</h2>
          <p style={{ fontSize: 20, color: "rgba(255,255,255,0.8)", marginBottom: 40 }}>
            Pricing is handled through PocketLab. Fill out the inquiry form and the team will be in touch with everything you need to get your school started.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="https://www.thepocketlab.com/conceptual-academy"
              target="_blank"
              rel="noopener noreferrer"
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
              Request Program Information →
            </a>
            <a
              href="https://app.thepocketlab.com/lab-report/yyAw0siq0001yyAw?ro=1"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                border: "2px solid rgba(255,255,255,0.4)",
                color: "white",
                padding: "14px 28px",
                borderRadius: 10,
                textDecoration: "none",
                fontWeight: 600,
                fontSize: 16,
                display: "inline-block",
              }}
            >
              View a Sample Lesson
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
