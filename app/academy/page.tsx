export const metadata = {
  title: "AI Literacy to Fluency for Independent Learners | Conceptual Academy",
  description:
    "A self-paced program that takes independent and adult learners from AI literacy to fluency. Start with the two books, go deeper online with Alia, or do both. Chapter 1 is free.",
};

const REGISTER_URL = "https://conceptualacademy.com/user/register";
const SUPPORT_EMAIL = "mailto:Support@ConceptualAcademy.com";
const MANUAL = "https://conceptualacademy.com/sites/default/files/2026-03/UAI_Users_Manual.pdf";
const VOL1_BUY = "https://shop.ingramspark.com/b/084?params=HYIdgSCn0BEBG6sdzaDavNmzKwzbKq2iEm0iVf7Bvzc";
const VOL2_BUY = "https://shop.ingramspark.com/b/084?params=KvE5ozT0IsH3MPDfWbMyP3M9EvvOKU5PVrFySqsSJT7";

const eyebrow: React.CSSProperties = {
  fontSize: 13,
  fontWeight: 700,
  textTransform: "uppercase",
  letterSpacing: 2,
  color: "#ec4899",
  margin: 0,
};

export default function Page() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif", color: "#1f2937", lineHeight: 1.6 }}>

      {/* HERO */}
      <section style={{ background: "#0f172a", color: "white", padding: "clamp(60px, 9vw, 84px) 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 400px), 1fr))", gap: 48, alignItems: "center" }}>
          <div>
            <p style={{ ...eyebrow, color: "#f9a8d4", marginBottom: 16 }}>For Independent &amp; Adult Learners · A Public Benefit Company</p>
            <h1 style={{ fontSize: "clamp(32px, 5.5vw, 50px)", lineHeight: 1.1, margin: "0 0 22px" }}>
              Learn AI properly — at your own pace.
            </h1>
            <p style={{ fontSize: 19, color: "rgba(255,255,255,0.85)", marginBottom: 26 }}>
              <em>Understanding and Working with AI</em> takes you from AI literacy to fluency — not just using the
              tools, but understanding how they work and how to work with them well. Start with the two books, go
              deeper online with Alia, your personal AI learning assistant, or do both. No deadlines, no expiration.
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <a href="#books" style={btnAmber}>Get the Books →</a>
              <a href="#online" style={btnGhost}>Try Chapter 1 Free →</a>
            </div>
          </div>
          <div style={{ textAlign: "center" }}>
            <img src="/images/Volumes12.png" alt="The two volumes of Understanding and Working with AI" style={{ width: "100%", maxWidth: 440 }} />
          </div>
        </div>
      </section>

      {/* WHAT YOU'LL LEARN */}
      <section style={{ background: "#ffffff", padding: "clamp(56px, 9vw, 80px) 24px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: 760, margin: "0 auto 40px" }}>
            <p style={eyebrow}>What You&apos;ll Learn</p>
            <h2 style={{ fontSize: "clamp(28px, 5vw, 40px)", marginTop: 12 }}>Eight chapters, from first principles to the future.</h2>
            <p style={{ marginTop: 16, fontSize: 19, color: "#6b7280" }}>
              No technical or programming background required — just clear, conceptual, hands-on learning. You&apos;ll
              come to understand what AI is and how it learns, how bias enters and why it matters, how algorithms
              decide real-world outcomes, how to tell real from fake, and what an AI-powered future holds.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 240px), 1fr))", gap: 16 }}>
            {[
              ["1 · Intelligence", "What intelligence is, the kinds of AI, first experiments."],
              ["2 · Teaching Machines", "How AI learns by example — and where creativity comes from."],
              ["3 · Prompt Engineering", "Structure, context, and clarity: getting AI to do good work."],
              ["4 · AI Bias", "Hidden patterns, cultural assumptions, and the flattery problem."],
              ["5 · Magic from Math", "Probability, prediction, and the sentience question."],
              ["6 · Algorithms & People", "High-stakes decisions — hiring, justice, fairness."],
              ["7 · AI in Media", "Real or fake, deepfakes, misinformation, democracy."],
              ["8 · An AI-Powered Future", "The next 10 and 50 years — power, wealth, and control."],
            ].map(([t, b], i) => (
              <div key={i} style={{ background: "#f8fafc", border: "1px solid #e5e7eb", borderRadius: 12, padding: 20 }}>
                <h3 style={{ margin: "0 0 6px", fontSize: 16, color: "#111827" }}>{t}</h3>
                <p style={{ margin: 0, color: "#4b5563", fontSize: 14 }}>{b}</p>
              </div>
            ))}
          </div>

          <p style={{ textAlign: "center", marginTop: 32, fontSize: "clamp(20px, 3vw, 26px)", fontWeight: 800, color: "#111827" }}>
            From AI Literacy to <span style={{ color: "#ec4899" }}>Fluency</span>.
          </p>
          <p style={{ textAlign: "center", fontSize: 16, color: "#9ca3af", fontStyle: "italic", marginTop: 6 }}>
            Getting it is the start. Working with it is the goal.
          </p>
        </div>
      </section>

      {/* THE BOOKS */}
      <section id="books" style={{ background: "#f8fafc", padding: "clamp(56px, 9vw, 80px) 24px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: 760, margin: "0 auto 44px" }}>
            <p style={{ ...eyebrow, color: "#c2410c" }}>The Books · The Easiest Way In</p>
            <h2 style={{ fontSize: "clamp(28px, 5vw, 40px)", marginTop: 12 }}>The whole program, in two volumes.</h2>
            <p style={{ marginTop: 16, fontSize: 19, color: "#6b7280" }}>
              The books aren&apos;t a sample — they <em>are</em> the program: every core lesson, case study,
              reflection, AI lab, and a sustained literary project of your own. And they&apos;re a fine choice if you
              prefer less screen time — QR codes throughout open the full author video library, so your phone joins in
              only when you want it to.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))", gap: 24 }}>
            {[
              ["Volume 1 — Foundations & Practice", "Paperback · 258 pages · Chapters 1–4", VOL1_BUY, "Buy Volume 1 →"],
              ["Volume 2 — Society & the Future", "Paperback · 290 pages · Chapters 5–8", VOL2_BUY, "Buy Volume 2 →"],
            ].map(([title, sub, url, cta], i) => (
              <div key={i} style={{ background: "white", border: "1px solid #e5e7eb", borderTop: "4px solid #f59e0b", borderRadius: 16, padding: 28, display: "flex", flexDirection: "column" }}>
                <span style={{ display: "inline-block", background: "#fef3c7", color: "#92400e", fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", padding: "4px 10px", borderRadius: 100, alignSelf: "flex-start", marginBottom: 12 }}>Now in its 2nd printing</span>
                <h3 style={{ margin: "0 0 4px", fontSize: 20 }}>{title}</h3>
                <p style={{ margin: "0 0 16px", fontSize: 14, color: "#6b7280" }}>{sub}</p>
                <div style={{ marginTop: "auto" }}>
                  <p style={{ margin: "0 0 12px", fontSize: 22, fontWeight: 800, color: "#111827" }}>
                    <s style={{ color: "#9ca3af", fontWeight: 600, fontSize: 15, marginRight: 8 }}>$29.95</s>$24.95
                  </p>
                  <a href={url as string} target="_blank" rel="noopener noreferrer" style={{ ...btnAmber, padding: "11px 22px", fontSize: 14 }}>{cta}</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE ONLINE PROGRAM */}
      <section id="online" style={{ background: "#ffffff", padding: "clamp(56px, 9vw, 80px) 24px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: 760, margin: "0 auto 44px" }}>
            <p style={eyebrow}>The Online Program · A $195 Value</p>
            <h2 style={{ fontSize: "clamp(28px, 5vw, 40px)", marginTop: 12 }}>The richer way to study on your own.</h2>
            <p style={{ marginTop: 16, fontSize: 19, color: "#6b7280" }}>
              For a self-directed learner, the online program is the fuller experience — it has everything the books
              have, plus a guide who works with you and a system that tracks how you&apos;re doing. Books, online, or
              both — the full package is the best of all worlds.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))", gap: 24, marginBottom: 44 }}>
            <div style={{ background: "#f8fafc", border: "1px solid #e5e7eb", borderRadius: 16, padding: 28 }}>
              <h3 style={{ margin: "0 0 14px", fontSize: 19 }}>In the books</h3>
              {["Core lessons", "Case studies", "Reflections", "AI labs", "Your own literary project", "QR codes to the lesson videos"].map((x) => (
                <p key={x} style={{ margin: "0 0 8px", fontSize: 15, color: "#4b5563" }}>✓ {x}</p>
              ))}
            </div>
            <div style={{ background: "#fdf2f8", border: "1px solid #fbcfe8", borderTop: "4px solid #ec4899", borderRadius: 16, padding: 28 }}>
              <h3 style={{ margin: "0 0 14px", fontSize: 19 }}>The online program adds</h3>
              {[
                "Alia — your personal AI tutor, lab partner, and creative collaborator",
                "Video lessons embedded right in each reading",
                "Automated self-checks with progress tracking",
                "Chapter podcasts",
                "Unit exams and study guides, with author commentary",
                "Real human tech support",
              ].map((x) => (
                <p key={x} style={{ margin: "0 0 8px", fontSize: 15, color: "#111827", fontWeight: 600 }}>
                  <span style={{ color: "#ec4899" }}>+</span> {x}
                </p>
              ))}
            </div>
          </div>

          {/* two doors */}
          <div style={{ textAlign: "center", maxWidth: 720, margin: "0 auto 28px" }}>
            <h3 style={{ fontSize: "clamp(22px, 3.5vw, 28px)", margin: 0 }}>Two ways in — both free during our launch.</h3>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))", gap: 24 }}>
            <div style={{ background: "#fff", border: "2px dashed #ec4899", borderRadius: 16, padding: 28 }}>
              <span style={{ display: "inline-block", background: "#fce7f3", color: "#be185d", fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", padding: "4px 12px", borderRadius: 100, marginBottom: 12 }}>Try it yourself · No email needed</span>
              <h3 style={{ margin: "0 0 8px", fontSize: 20 }}>Chapter 1, free</h3>
              <p style={{ margin: "0 0 14px", color: "#4b5563", fontSize: 15 }}>
                Create a free account, enter Course ID <code style={{ background: "#fce7f3", color: "#be185d", padding: "2px 8px", borderRadius: 6, fontWeight: 700 }}>UAI01Free</code>, and Chapter 1 is
                yours — meet Alia and the platform, no credit card.
              </p>
              <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer" style={{ ...btnDarkSolid, padding: "12px 24px", fontSize: 15 }}>Start Chapter 1 Free →</a>
            </div>
            <div style={{ background: "#0f172a", color: "white", borderRadius: 16, padding: 28 }}>
              <span style={{ display: "inline-block", background: "rgba(236,72,153,0.18)", border: "1px solid rgba(236,72,153,0.45)", color: "#f9a8d4", fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", padding: "4px 12px", borderRadius: 100, marginBottom: 12 }}>Complimentary launch access</span>
              <h3 style={{ margin: "0 0 8px", fontSize: 20, color: "white" }}>The full program, free — just reach out</h3>
              <p style={{ margin: "0 0 14px", color: "rgba(255,255,255,0.82)", fontSize: 15 }}>
                Want all eight chapters on the platform, with full Alia access? During our launch it&apos;s
                complimentary. Write to us and we&apos;ll set you up.
              </p>
              <a href={SUPPORT_EMAIL} style={{ ...btnPink, padding: "12px 24px", fontSize: 15 }}>Email Support@ConceptualAcademy.com →</a>
            </div>
          </div>

          {/* sign-up screenshot */}
          <div style={{ maxWidth: 620, margin: "44px auto 0", textAlign: "center" }}>
            <p style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1.5, color: "#be185d", margin: "0 0 14px" }}>What the sign-up looks like</p>
            <div style={{ borderRadius: 12, overflow: "hidden", boxShadow: "0 12px 36px rgba(0,0,0,0.16)", border: "1px solid #e5e7eb", background: "white" }}>
              <div style={{ background: "#e5e7eb", padding: "10px 14px", display: "flex", gap: 7 }}>
                <span style={{ width: 11, height: 11, borderRadius: 100, background: "#f87171" }} />
                <span style={{ width: 11, height: 11, borderRadius: 100, background: "#fbbf24" }} />
                <span style={{ width: 11, height: 11, borderRadius: 100, background: "#34d399" }} />
              </div>
              <img src="/images/UAI01Free.jpg" alt="Conceptual Academy sign-up page with the Course ID field" style={{ display: "block", width: "100%" }} />
            </div>
            <p style={{ marginTop: 14, fontSize: 14, color: "#6b7280" }}>
              Enter <strong style={{ color: "#be185d" }}>UAI01Free</strong> in the Course ID field, then Sign Up. You
              can leave the &ldquo;vendor code&rdquo; box unchecked. New here?{" "}
              <a href={MANUAL} target="_blank" rel="noopener noreferrer" style={{ color: "#be185d", fontWeight: 700, textDecoration: "none" }}>Read the User Manual →</a>
            </p>
          </div>
        </div>
      </section>

      {/* MEET ALIA */}
      <section style={{ background: "#fdf2f8", padding: "clamp(56px, 9vw, 80px) 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))", gap: 56, alignItems: "center" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img src="/images/AliaHiRezSmile.png" alt="Alia, the AI learning assistant" style={{ width: "100%", maxWidth: 320 }} />
          </div>
          <div>
            <img src="/images/AliaCircle.jpg" alt="ALIA — AI Learning Assistant" style={{ width: 92, marginBottom: 16, borderRadius: 8 }} />
            <p style={eyebrow}>Your AI Learning Assistant</p>
            <h2 style={{ fontSize: "clamp(28px, 5vw, 40px)", margin: "12px 0 20px" }}>Meet Alia</h2>
            <p style={{ fontSize: 18, color: "#4b5563", marginBottom: 16 }}>
              Studying on your own doesn&apos;t mean studying alone. Alia is built right into the online program —
              and she&apos;s no generic chatbot. She&apos;s trained specifically on this curriculum, so she guides you
              Socratically through the very material you&apos;re studying, meeting you wherever you are.
            </p>
            <p style={{ fontSize: 18, color: "#4b5563" }}>
              She takes three specialized forms — a tutor, a lab partner, and a creative collaborator — so the right
              kind of help is always within reach.
            </p>
          </div>
        </div>
      </section>

      {/* MISSION / PBC */}
      <section style={{ background: "#111827", color: "white", padding: "clamp(56px, 9vw, 80px) 24px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto", textAlign: "center" }}>
          <p style={eyebrow}>Why we&apos;re doing this</p>
          <h2 style={{ fontSize: "clamp(28px, 5vw, 40px)", marginTop: 12, color: "white" }}>A public benefit company — and we mean it.</h2>
          <p style={{ marginTop: 20, fontSize: 19, color: "rgba(255,255,255,0.82)" }}>
            Conceptual Academy is a public benefit company, and access shouldn&apos;t be the barrier to understanding
            AI. That&apos;s not a slogan — it&apos;s how we operate:
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))", gap: 16, marginTop: 32, textAlign: "left" }}>
            {[
              ["Chapter 1 is free to anyone", "No email, no card — sign up and start."],
              ["Homeschooling families learn free", "Complimentary online-program access — the PDF pages, podcasts, assessments, and guides."],
              ["Librarians get free teaching access", "A free online account with the teaching resources, so a library can run the program."],
              ["Launch access is complimentary", "The full online program, free right now to anyone who reaches out."],
            ].map(([t, b], i) => (
              <div key={i} style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.14)", borderRadius: 12, padding: 22 }}>
                <h3 style={{ margin: "0 0 8px", fontSize: 16, color: "#f9a8d4" }}>{t}</h3>
                <p style={{ margin: 0, fontSize: 14, color: "rgba(255,255,255,0.75)" }}>{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ background: "#fdf2f8", padding: "clamp(56px, 9vw, 80px) 24px", textAlign: "center" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <p style={eyebrow}>Start Anytime</p>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 38px)", margin: "12px 0 20px", color: "#111827" }}>Go at your own pace.</h2>
          <p style={{ fontSize: 19, color: "#4b5563", marginBottom: 36 }}>
            Buy the books and start today, try Chapter 1 free on the platform, or write to us for complimentary access
            to the whole online program with Alia. No deadlines, no expiration — learn the way that suits you.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="#books" style={btnAmber}>Get the Books →</a>
            <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer" style={btnPink}>Try Chapter 1 Free →</a>
            <a href={SUPPORT_EMAIL} style={btnPinkOutline}>Email for Full Access →</a>
          </div>
        </div>
      </section>

    </main>
  );
}

const btnAmber: React.CSSProperties = {
  background: "#f59e0b",
  color: "#0f172a",
  padding: "14px 28px",
  borderRadius: 8,
  textDecoration: "none",
  fontWeight: 700,
  fontSize: 16,
  display: "inline-block",
};

const btnPink: React.CSSProperties = {
  background: "#ec4899",
  color: "white",
  padding: "14px 28px",
  borderRadius: 8,
  textDecoration: "none",
  fontWeight: 700,
  fontSize: 16,
  display: "inline-block",
};

const btnPinkOutline: React.CSSProperties = {
  background: "white",
  border: "2px solid #ec4899",
  color: "#be185d",
  padding: "13px 26px",
  borderRadius: 8,
  textDecoration: "none",
  fontWeight: 700,
  fontSize: 16,
  display: "inline-block",
};

const btnGhost: React.CSSProperties = {
  border: "1px solid rgba(255,255,255,0.4)",
  color: "white",
  padding: "13px 26px",
  borderRadius: 8,
  textDecoration: "none",
  fontWeight: 600,
  fontSize: 16,
  display: "inline-block",
};

const btnDarkSolid: React.CSSProperties = {
  background: "#0f172a",
  color: "white",
  padding: "14px 28px",
  borderRadius: 8,
  textDecoration: "none",
  fontWeight: 700,
  fontSize: 16,
  display: "inline-block",
};
