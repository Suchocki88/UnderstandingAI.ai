// AI Driver's Ed landing page
// Warm-traffic campaign page for viewers coming from "Time of the Weird".
// Route: app/ai-driver-ed/page.tsx

import Link from "next/link";

export const metadata = {
  title: "AI Driver's Ed | Understanding and Working with AI",
  description:
    "A focused AI literacy landing page for educators discovering AI Driver's Ed through Time of the Weird.",
};

const FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfmC3t1awl9T0Ed1JZhtW24XEvp0znPoIITpbwcY7WvqYm12Q/viewform";

export default function Page() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif", color: "#1f2937", lineHeight: 1.6 }}>
      {/* HERO */}
      <section style={{ padding: "clamp(44px, 8vw, 78px) 24px", background: "#0f172a", color: "white" }}>
        <div style={heroGrid}>
          <div>
            <p style={eyebrowYellow}>If you're here, you probably just watched Time of the Weird.</p>

            <h1 style={h1}>
              Now let's help your students navigate AI.
            </h1>

            <p style={heroLead}>
              Students are already using AI every day. The question isn't whether they'll use it.
              It's whether they'll understand it.
            </p>

            <p style={heroText}>
              <strong>AI Driver's Ed</strong> — or simply <strong>AI-Ed</strong> — is a semester-ready pathway
              that helps students understand how AI works, when to trust it, and how to use it
              responsibly and creatively.
            </p>

            <div style={buttonRow}>
              <a href={FORM_URL} target="_blank" rel="noreferrer" style={primaryButton}>
                Request Curriculum Information →
              </a>
              <Link href="/pocketlab" style={secondaryButton}>
                Explore the Teacher Pathway
              </Link>
            </div>
          </div>

          <div style={{ textAlign: "center" }}>
            <img
              src="/images/TimeWeirdThumb.jpg"
              alt="Time of the Weird video thumbnail"
              style={thumbImage}
            />
          </div>
        </div>
      </section>

      {/* TEACHER IDENTIFICATION + REALITY */}
      <section style={sectionWhite}>
        <div style={split}>
          <div>
            <p style={eyebrow}>Teachers tell us</p>
            <h2 style={h2}>“My students are already using ChatGPT. What am I supposed to teach?”</h2>
            <p style={lead}>
              Many teachers are trying to catch up while their students are already experimenting every day.
              They don't need another round of AI hype. They need something practical, coherent, and classroom-ready.
            </p>
            <p style={lead}>
              That's exactly why we created AI Driver's Ed: a way to help students think clearly about AI,
              use it responsibly, and remain deeply human while working with increasingly powerful tools.
            </p>
          </div>

          <div style={card}>
            <h3 style={cardTitle}>Students need more than access.</h3>
            <div style={checkList}>
              <Check text="A clear mental model of what AI is and what it is not" />
              <Check text="Practice asking better questions and evaluating better answers" />
              <Check text="Tools for spotting weak reasoning, hallucinations, and bias" />
              <Check text="Guidance on authorship, voice, originality, and responsible use" />
              <Check text="The confidence to use AI without becoming dependent on it" />
            </div>
          </div>
        </div>
      </section>

      {/* WHY DRIVER'S ED */}
      <section style={{ background: "#fff7ed", padding: "clamp(56px, 9vw, 78px) 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <p style={eyebrow}>Why Driver's Ed?</p>
          <h2 style={h2}>We don't hand teenagers car keys without instruction.</h2>
          <p style={{ ...lead, marginLeft: "auto", marginRight: "auto" }}>
            Cars aren't dangerous because they exist. They become dangerous when people don't understand
            how to use them.
          </p>
          <p style={{ ...lead, marginLeft: "auto", marginRight: "auto" }}>
            AI deserves the same respect. Students don't need fear. They don't need hype.
            They need fluency, judgment, practice, and guidance.
          </p>
        </div>
      </section>

      {/* CREDIBILITY */}
      <section style={sectionWhite}>
        <div style={split}>
          <div>
            <p style={eyebrow}>Built by educators</p>
            <h2 style={h2}>Not another AI workshop. A real curriculum.</h2>
            <p style={lead}>
              This pathway was developed by experienced science educators who specialize in conceptual learning:
              helping students understand big ideas clearly before asking them to apply those ideas.
            </p>
            <p style={lead}>
              The goal is not simply to teach students how to prompt. The goal is to help them understand
              AI well enough to use it wisely.
            </p>
          </div>

          <div style={card}>
            <h3 style={cardTitle}>What makes it classroom-ready</h3>
            <div style={checkList}>
              <Check text="Two published textbook volumes" />
              <Check text="Eight-chapter conceptual framework" />
              <Check text="Video lessons and podcast companions" />
              <Check text="Classroom activities and AI experiments" />
              <Check text="Flexible implementation for teachers, departments, or districts" />
            </div>
          </div>
        </div>
      </section>

      {/* CURRICULUM */}
      <section style={sectionSoft}>
        <div style={split}>
          <div>
            <p style={eyebrow}>The curriculum</p>
            <h2 style={h2}>Two volumes. Eight chapters. One coherent framework.</h2>
            <p style={lead}>
              <em>Understanding and Working with AI</em> moves students from casual AI use toward genuine
              AI fluency: conceptual understanding, practical skill, ethical awareness, and human judgment.
            </p>
            <p style={lead}>
              The course combines conceptual explanations, classroom-ready activities, video lessons,
              podcast companions, and AI experiments.
            </p>

            <div style={{ marginTop: 26 }}>
              <Link href="/curriculum" style={textLink}>
                Learn more about the core curriculum →
              </Link>
            </div>
          </div>

          <div style={{ textAlign: "center" }}>
            <img
              src="/images/Volumes12.png"
              alt="Understanding and Working with AI textbook volumes"
              style={{ maxWidth: "100%", borderRadius: 18 }}
            />
          </div>
        </div>
      </section>

      {/* IMPLEMENTATION */}
      <section style={sectionWhite}>
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          <p style={eyebrow}>How teachers can use it</p>
          <h2 style={h2}>Flexible enough for a unit. Strong enough for a course.</h2>

          <div style={grid3}>
            <Feature
              title="Pilot a unit"
              text="Use the materials to introduce AI literacy in an existing class."
            />
            <Feature
              title="Teach a semester"
              text="Build a full AI literacy course around the two-volume curriculum."
            />
            <Feature
              title="Support a district"
              text="Use the framework for professional development and cross-department alignment."
            />
          </div>
        </div>
      </section>

      {/* PULL QUOTE */}
      <section style={{ background: "#451a03", color: "white", padding: "clamp(42px, 7vw, 56px) 24px" }}>
        <div style={{ maxWidth: 980, margin: "0 auto" }}>
          <p style={{ margin: 0, fontSize: "clamp(22px, 4vw, 34px)", lineHeight: 1.25, fontStyle: "italic" }}>
            “AI is designed to agree with you. That's a problem. If you don't actively ask for the opposing view,
            you won't get it.”
          </p>
        </div>
      </section>

      {/* WHAT HAPPENS NEXT */}
      <section style={sectionSoft}>
        <div style={{ maxWidth: 960, margin: "0 auto", textAlign: "center" }}>
          <p style={eyebrow}>What happens next?</p>
          <h2 style={h2}>Requesting information does not commit you to anything.</h2>
          <p style={{ ...lead, marginLeft: "auto", marginRight: "auto" }}>
            Tell us a little about your teaching context, and we'll point you toward the most useful
            next step for your classroom, department, or school.
          </p>

          <div style={grid3}>
            <Feature title="Preview materials" text="See sample lessons, structure, and curriculum options." />
            <Feature title="Explore pathways" text="Find the right fit for a unit, course, or school initiative." />
            <Feature title="Ask questions" text="Get information without pressure or obligation." />
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={sectionWhite}>
        <div style={{ maxWidth: 920, margin: "0 auto", textAlign: "center" }}>
          <p style={eyebrow}>Next step</p>
          <h2 style={h2}>Ready to start the conversation?</h2>
          <p style={{ ...lead, marginLeft: "auto", marginRight: "auto" }}>
            Whether you're exploring a single classroom, a department, or a district-wide initiative,
            we'd love to help.
          </p>

          <div style={{ display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap", marginTop: 30 }}>
            <a href={FORM_URL} target="_blank" rel="noreferrer" style={primaryButton}>
              Request Curriculum Information →
            </a>
            <Link href="/pocketlab" style={outlineButton}>
              Visit the Teacher Pathway
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function Check({ text }: { text: string }) {
  return (
    <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
      <span style={{ color: "#16a34a", fontWeight: 900 }}>✓</span>
      <span>{text}</span>
    </div>
  );
}

function Feature({ title, text }: { title: string; text: string }) {
  return (
    <div style={featureCard}>
      <h3 style={{ marginTop: 0, fontSize: "clamp(20px, 5vw, 22px)" }}>{title}</h3>
      <p style={{ color: "#64748b", marginBottom: 0 }}>{text}</p>
    </div>
  );
}

const heroGrid: React.CSSProperties = {
  maxWidth: 1100,
  margin: "0 auto",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
  gap: 40,
  alignItems: "center",
};

const h1: React.CSSProperties = {
  fontSize: "clamp(38px, 9vw, 68px)",
  lineHeight: 1.05,
  margin: "14px 0 0",
  maxWidth: 880,
};

const h2: React.CSSProperties = {
  fontSize: "clamp(30px, 8vw, 44px)",
  lineHeight: 1.12,
  margin: 0,
  color: "#1f2937",
};

const lead: React.CSSProperties = {
  fontSize: "clamp(18px, 4.5vw, 20px)",
  color: "#64748b",
  marginTop: 20,
};

const heroLead: React.CSSProperties = {
  maxWidth: 740,
  fontSize: "clamp(20px, 5vw, 26px)",
  marginTop: 24,
  color: "rgba(255,255,255,.92)",
};

const heroText: React.CSSProperties = {
  maxWidth: 760,
  fontSize: "clamp(17px, 4.5vw, 20px)",
  marginTop: 18,
  color: "rgba(255,255,255,.84)",
};

const thumbImage: React.CSSProperties = {
  width: "100%",
  maxWidth: 560,
  borderRadius: 18,
  boxShadow: "0 20px 60px rgba(0,0,0,.45)",
};

const eyebrow: React.CSSProperties = {
  color: "#f59e0b",
  fontWeight: 800,
  letterSpacing: 2,
  textTransform: "uppercase",
  fontSize: 13,
  margin: "0 0 12px",
};

const eyebrowYellow: React.CSSProperties = {
  color: "#facc15",
  fontWeight: 800,
  letterSpacing: 2,
  textTransform: "uppercase",
  fontSize: 13,
  margin: "0 0 12px",
};

const sectionWhite: React.CSSProperties = {
  padding: "clamp(58px, 9vw, 78px) 24px",
  background: "#ffffff",
};

const sectionSoft: React.CSSProperties = {
  padding: "clamp(58px, 9vw, 78px) 24px",
  background: "#f8fafc",
};

const split: React.CSSProperties = {
  maxWidth: 1080,
  margin: "0 auto",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
  gap: 42,
  alignItems: "center",
};

const card: React.CSSProperties = {
  background: "#ffffff",
  border: "1px solid #e5e7eb",
  borderRadius: 20,
  padding: "clamp(22px, 5vw, 30px)",
  boxShadow: "0 18px 45px rgba(15,23,42,.10)",
};

const cardTitle: React.CSSProperties = {
  marginTop: 0,
  fontSize: "clamp(22px, 6vw, 26px)",
};

const checkList: React.CSSProperties = {
  display: "grid",
  gap: 14,
  fontSize: "clamp(16px, 4vw, 18px)",
  color: "#475569",
};

const grid3: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 250px), 1fr))",
  gap: 22,
  marginTop: 36,
};

const featureCard: React.CSSProperties = {
  background: "#ffffff",
  border: "1px solid #e5e7eb",
  borderRadius: 18,
  padding: 24,
  boxShadow: "0 10px 28px rgba(15,23,42,.06)",
};

const buttonRow: React.CSSProperties = {
  display: "flex",
  gap: 16,
  flexWrap: "wrap",
  marginTop: 30,
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

const outlineButton: React.CSSProperties = {
  border: "2px solid #f59e0b",
  color: "#92400e",
  padding: "13px 22px",
  borderRadius: 12,
  fontWeight: 800,
  textDecoration: "none",
  display: "inline-block",
};

const textLink: React.CSSProperties = {
  color: "#2563eb",
  fontWeight: 800,
  textDecoration: "none",
};
