import Link from "next/link";

export const metadata = {
  title: "AI Driver’s Ed for High Schools | Understanding and Working with AI",
  description:
    "A focused AI literacy landing page for high school teachers, administrators, and curriculum leaders.",
};

const FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfmC3t1awl9T0Ed1JZhtW24XEvp0znPoIITpbwcY7WvqYm12Q/viewform";

export default function Page() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif", color: "#1f2937", lineHeight: 1.5 }}>
      {/* HERO */}
      <section
        style={{
          backgroundImage:
            "linear-gradient(rgba(15,23,42,.72), rgba(15,23,42,.82)), url('/images/TimeWeirdThumb.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
          padding: "clamp(76px, 12vw, 160px) 24px",
        }}
      >
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          <p style={eyebrowYellow}>For high school teachers and curriculum leaders</p>

          <h1 style={h1}>
            You’ve seen the weird.
            <br />
            Now help students navigate it.
          </h1>

          <p style={heroLead}>
            Students are already using AI. Most have never been taught how.
          </p>

          <p style={heroText}>
            <strong>AI Driver’s Ed</strong> is a classroom-ready pathway that helps students
            understand what AI is, how it works, when to trust it, and when to put it down.
          </p>

          <div style={buttonRow}>
            <a href={FORM_URL} target="_blank" rel="noopener noreferrer" style={primaryButton}>
              Request Curriculum Information →
            </a>
            <Link href="/pocketlab" style={secondaryButton}>
              Preview the High School Pathway
            </Link>
          </div>
        </div>
      </section>

      {/* CONTINUITY STRIP */}
      <section style={{ background: "#451a03", padding: "26px 24px", borderLeft: "5px solid #f59e0b" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          <p style={{ margin: 0, color: "rgba(255,255,255,.88)", fontSize: 19, fontStyle: "italic" }}>
            “AI is designed to agree with you. That’s a problem. If you don’t actively ask for the opposing view,
            you won’t get it — otherwise you’re sitting in an echo chamber with a very articulate mirror.”
          </p>
        </div>
      </section>

      {/* PROBLEM */}
      <section style={sectionWhite}>
        <div style={split}>
          <div>
            <p style={eyebrow}>The classroom reality</p>
            <h2 style={h2}>AI is already shaping how students learn, write, and think.</h2>
            <p style={lead}>
              Students are using AI for homework, essays, coding, research, brainstorming, studying,
              and even personal advice. The question is no longer whether students will use AI.
            </p>
            <p style={lead}>
              The question is whether they will learn to use it with judgment, creativity, and care.
            </p>
          </div>

          <div style={card}>
            <h3 style={cardTitle}>What students need now</h3>
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

      {/* DRIVER'S ED ANALOGY */}
      <section style={{ background: "#0f172a", color: "white", padding: "78px 24px" }}>
        <div style={{ maxWidth: 940, margin: "0 auto", textAlign: "center" }}>
          <p style={eyebrowYellow}>The analogy</p>
          <h2 style={{ ...h2, color: "white" }}>We don’t hand teenagers car keys without instruction.</h2>
          <p style={{ ...lead, color: "rgba(255,255,255,.78)", marginLeft: "auto", marginRight: "auto" }}>
            AI is a powerful tool. It can amplify learning, creativity, and productivity. It can also amplify
            confusion, shortcut thinking, and misplaced confidence. That is why students need something more
            than access. They need AI literacy.
          </p>
          <div style={{ marginTop: 30 }}>
            <a href={FORM_URL} target="_blank" rel="noopener noreferrer" style={primaryButton}>
              I’m Interested in AI Driver’s Ed →
            </a>
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section style={sectionSoft}>
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          <p style={eyebrow}>The program</p>
          <h2 style={h2}>A complete AI literacy pathway for high schools.</h2>
          <p style={{ ...lead, maxWidth: 820 }}>
            <em>Understanding and Working with AI</em> moves students from casual AI use toward genuine
            AI fluency: conceptual understanding, practical skill, ethical awareness, and human judgment.
          </p>

          <div style={grid3}>
            <Feature
              title="Semester-ready"
              text="Designed for meaningful classroom use, not a one-day AI activity."
            />
            <Feature
              title="Cross-disciplinary"
              text="Useful across STEM, CTE, social studies, English, and general studies."
            />
            <Feature
              title="Teacher-friendly"
              text="Built with lessons, videos, activities, discussion prompts, and assessment support."
            />
          </div>
        </div>
      </section>

      {/* CURRICULUM */}
      <section style={sectionWhite}>
        <div style={split}>
          <div>
            <p style={eyebrow}>The curriculum</p>
            <h2 style={h2}>Two volumes. Eight chapters. One coherent framework.</h2>
            <p style={lead}>
              The course combines conceptual explanations, classroom-ready activities, video lessons,
              podcast companions, and AI experiments.
            </p>

            <div style={{ display: "grid", gap: 16, marginTop: 24 }}>
              <div style={miniCard}>
                <strong>Volume 1: Foundations & Practice</strong>
                <p style={miniText}>
                  What AI is, how it works, and how to use it responsibly.
                </p>
              </div>
              <div style={miniCard}>
                <strong>Volume 2: Society & the Future</strong>
                <p style={miniText}>
                  The societal, ethical, and creative implications of living and working alongside AI.
                </p>
              </div>
            </div>

            <div style={{ marginTop: 28 }}>
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
      <section style={{ background: "#fff7ed", padding: "78px 24px" }}>
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

      {/* FUNNEL CTA */}
      <section style={sectionWhite}>
        <div style={{ maxWidth: 920, margin: "0 auto", textAlign: "center" }}>
          <p style={eyebrow}>Next step</p>
          <h2 style={h2}>Want to explore this for your school?</h2>
          <p style={{ ...lead, marginLeft: "auto", marginRight: "auto" }}>
            Tell us a little about your teaching context, and we’ll point you toward the best next step:
            preview materials, teacher resources, PocketLab pathway, or curriculum information.
          </p>

          <div style={{ display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap", marginTop: 30 }}>
            <a href={FORM_URL} target="_blank" rel="noopener noreferrer" style={primaryButton}>
              Request Curriculum Information →
            </a>
            <Link href="/pocketlab" style={outlineButton}>
              Go to the Teacher Page
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
      <h3 style={{ marginTop: 0, fontSize: 22 }}>{title}</h3>
      <p style={{ color: "#64748b", marginBottom: 0 }}>{text}</p>
    </div>
  );
}

const h1: React.CSSProperties = {
  fontSize: "clamp(40px, 7vw, 72px)",
  lineHeight: 1.02,
  margin: "12px 0 0",
  maxWidth: 940,
};

const h2: React.CSSProperties = {
  fontSize: "clamp(30px, 5vw, 44px)",
  lineHeight: 1.12,
  margin: 0,
  color: "#1f2937",
};

const lead: React.CSSProperties = {
  fontSize: 20,
  color: "#64748b",
  marginTop: 20,
};

const heroLead: React.CSSProperties = {
  maxWidth: 760,
  fontSize: "clamp(20px, 3vw, 29px)",
  marginTop: 24,
  color: "rgba(255,255,255,.92)",
};

const heroText: React.CSSProperties = {
  maxWidth: 780,
  fontSize: 20,
  marginTop: 18,
  color: "rgba(255,255,255,.82)",
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
  padding: "78px 24px",
  background: "#ffffff",
};

const sectionSoft: React.CSSProperties = {
  padding: "78px 24px",
  background: "#f8fafc",
};

const split: React.CSSProperties = {
  maxWidth: 1080,
  margin: "0 auto",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))",
  gap: 42,
  alignItems: "center",
};

const card: React.CSSProperties = {
  background: "#ffffff",
  border: "1px solid #e5e7eb",
  borderRadius: 20,
  padding: 30,
  boxShadow: "0 18px 45px rgba(15,23,42,.10)",
};

const cardTitle: React.CSSProperties = {
  marginTop: 0,
  fontSize: 26,
};

const checkList: React.CSSProperties = {
  display: "grid",
  gap: 14,
  fontSize: 18,
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

const miniCard: React.CSSProperties = {
  border: "1px solid #e5e7eb",
  borderRadius: 14,
  padding: 18,
  background: "#ffffff",
};

const miniText: React.CSSProperties = {
  margin: "8px 0 0",
  color: "#64748b",
};

const buttonRow: React.CSSProperties = {
  display: "flex",
  gap: 16,
  flexWrap: "wrap",
  marginTop: 34,
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
