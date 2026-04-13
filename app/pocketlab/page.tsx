import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Literacy Teacher PD | PocketLab × Conceptual Academy",
  description:
    "A full semester AI literacy program for high school classrooms — delivered through PocketLab Notebook, with summer PD for teachers on Conceptual Academy.",
};

export default function Page() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif", color: "#1f2937", lineHeight: 1.6 }}>

      {/* ── STYLES ── */}
      <style>{`
        .hero {
          position: relative;
          background-image: url('/images/hero-ai.jpg');
          background-size: cover;
          background-position: center;
          padding: 64px 24px 72px;
          color: white;
          text-align: center;
        }
        .hero-overlay { position: absolute; inset: 0; background: rgba(0,0,0,0.68); }
        .hero-inner { max-width: 860px; margin: 0 auto; position: relative; z-index: 1; }
        .logo-badge {
          display: inline-flex;
          align-items: center;
          background: rgba(255,255,255,0.10);
          border: 1px solid rgba(255,255,255,0.22);
          border-radius: 12px;
          padding: 14px 28px;
          margin-bottom: 32px;
        }
        .logo-badge img { height: 58px; width: auto; }
        .eyebrow {
          font-size: 13px; font-weight: 700; text-transform: uppercase;
          letter-spacing: 2px; color: #f59e0b; margin-bottom: 16px;
        }
        .hero h1 { font-size: clamp(32px, 5vw, 48px); line-height: 1.15; margin: 0 0 20px; }
        .hero h1 span { color: #f59e0b; }
        .hero-sub {
          font-size: 19px; color: rgba(255,255,255,0.85);
          max-width: 660px; margin: 0 auto 20px; line-height: 1.65;
        }
        .hero-sub strong { color: white; }
        .stats-row {
          display: flex; justify-content: center;
          flex-wrap: wrap; gap: 8px 32px; margin-bottom: 36px;
        }
        .stat { text-align: center; }
        .stat-num { font-size: 22px; font-weight: 800; color: #f59e0b; line-height: 1; }
        .stat-label {
          font-size: 11px; text-transform: uppercase;
          letter-spacing: 1px; color: rgba(255,255,255,0.6); margin-top: 3px;
        }
        .btn-row { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; }
        .btn-primary {
          background: #f59e0b; color: #0f172a; padding: 14px 28px;
          border-radius: 8px; text-decoration: none; font-weight: 700;
          font-size: 16px; display: inline-block; transition: background 0.2s;
        }
        .btn-primary:hover { background: #d97706; }
        .btn-outline {
          border: 2px solid rgba(255,255,255,0.4); color: white;
          padding: 14px 28px; border-radius: 8px; text-decoration: none;
          font-weight: 600; font-size: 16px; display: inline-block;
        }
        .btn-outline-amber {
          border: 2px solid rgba(245,158,11,0.55); color: #f59e0b;
          padding: 14px 28px; border-radius: 10px; text-decoration: none;
          font-weight: 600; font-size: 16px; display: inline-block;
        }
        .btn-dark {
          background: rgba(255,255,255,0.08); border: 2px solid rgba(255,255,255,0.25);
          color: white; padding: 14px 28px; border-radius: 10px;
          text-decoration: none; font-weight: 600; font-size: 16px; display: inline-block;
        }
        .video-section { background: #0f172a; padding: 64px 24px; text-align: center; }
        .video-section .eyebrow { margin-bottom: 12px; }
        .video-section h2 { font-size: 34px; color: white; margin: 0 0 8px; }
        .video-section p {
          font-size: 17px; color: rgba(255,255,255,0.65);
          max-width: 560px; margin: 0 auto 32px;
        }
        .pd-section { background: #fff7ed; padding: 80px 24px; }
        .cred-section { background: #f8fafc; padding: 80px 24px; }
        .platform-section { background: white; padding: 80px 24px; }
        .resources-section { background: #f8fafc; padding: 80px 24px; }
        .cta-section { background: #0f172a; color: white; padding: 80px 24px; text-align: center; }
        .section-inner { max-width: 1100px; margin: 0 auto; }
        .section-header { text-align: center; max-width: 720px; margin: 0 auto 48px; }
        .section-header h2 { font-size: clamp(28px, 4vw, 38px); margin-top: 12px; }
        .section-header p { margin-top: 16px; font-size: 19px; color: #6b7280; }
        .volumes-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 24px; margin-bottom: 20px;
        }
        .volume-card { background: white; border-radius: 16px; padding: 32px; border: 1px solid #e5e7eb; }
        .volume-card.featured { border: 2px solid #f59e0b; }
        .vol-tag {
          display: inline-block; background: #fef3c7; color: #92400e;
          font-size: 11px; font-weight: 700; letter-spacing: 1px;
          text-transform: uppercase; padding: 4px 10px;
          border-radius: 100px; margin-bottom: 14px;
        }
        .volume-card h3 { font-size: 22px; margin: 0 0 6px; }
        .vol-subtitle { font-size: 15px; font-weight: 700; color: #374151; margin-bottom: 4px; }
        .vol-chapters { font-size: 13px; color: #6b7280; margin-bottom: 20px; line-height: 1.55; list-style: none; }
        .vol-chapters li { margin-bottom: 3px; padding-left: 14px; position: relative; }
        .vol-chapters li::before { content: "·"; position: absolute; left: 0; color: #f59e0b; font-weight: 700; }
        .ceu-row {
          background: #f8fafc; border-radius: 10px; padding: 14px 16px;
          margin-bottom: 20px; display: flex; align-items: center; gap: 12px;
        }
        .ceu-num { font-size: 32px; font-weight: 800; color: #f59e0b; line-height: 1; }
        .ceu-label { font-size: 13px; color: #4b5563; line-height: 1.4; }
        .price { font-size: 26px; font-weight: 800; margin-bottom: 6px; }
        .course-id { font-size: 13px; color: #6b7280; margin-bottom: 20px; }
        .course-id code {
          background: #f1f5f9; padding: 2px 7px; border-radius: 4px;
          color: #c2410c; letter-spacing: 0.05em; font-family: monospace;
        }
        .vol-enroll {
          display: block; text-align: center; padding: 13px 20px;
          border-radius: 8px; text-decoration: none; font-weight: 700; font-size: 15px;
        }
        .vol-enroll.primary { background: #f59e0b; color: #0f172a; }
        .vol-enroll.secondary { background: #0f172a; color: white; }
        .pd-footnote { text-align: center; font-size: 14px; color: #9ca3af; margin-top: 8px; }
        .cards-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 24px; }
        .cred-card {
          background: white; border-radius: 16px; padding: 28px;
          border: 1px solid #e5e7eb; border-top: 4px solid #f59e0b;
        }
        .cred-card h3 { font-size: 20px; margin: 0 0 12px; }
        .cred-card p { color: #4b5563; margin: 0; }
        .platform-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 56px; align-items: center;
        }
        .platform-grid h2 { font-size: clamp(24px, 3vw, 34px); margin: 12px 0 20px; }
        .platform-grid p { font-size: 17px; color: #4b5563; margin-bottom: 16px; }
        .platform-grid img { width: 100%; border-radius: 12px; box-shadow: 0 8px 24px rgba(0,0,0,0.15); }
        .img-caption { font-size: 14px; color: #6b7280; font-style: italic; margin-top: 12px; text-align: center; }
        .link-arrow { color: #c2410c; font-weight: 700; text-decoration: none; font-size: 16px; }
        .resources-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px; }
        .resource-card { background: white; border-radius: 16px; padding: 28px; border: 2px solid #f59e0b; }
        .resource-card h3 { font-size: 20px; margin: 0 0 12px; }
        .resource-card p { color: #4b5563; margin: 0 0 16px; }
        .cta-section h2 { font-size: clamp(28px, 4vw, 38px); margin: 0 0 20px; }
        .cta-section p { font-size: 19px; color: rgba(255,255,255,0.75); margin-bottom: 40px; line-height: 1.7; }
        .cta-btn-row { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; }
        @media (max-width: 600px) {
          .hero h1 { font-size: 28px; }
          .stats-row { gap: 12px 20px; }
          .pd-section, .cred-section, .platform-section, .resources-section, .cta-section { padding: 56px 20px; }
        }
      `}</style>

      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-overlay" />
        <div className="hero-inner">

          <div className="logo-badge">
            <img src="/images/PLCALogo.jpg" alt="PocketLab and Conceptual Academy" />
          </div>

          <p className="eyebrow">Summer PD · AI Literacy · High School</p>

          <h1>
            Teach AI Literacy This Fall.<br />
            <span>Take the Course Yourself This Summer.</span>
          </h1>

          <p className="hero-sub">
            A complete semester-long AI literacy program for high school classrooms —
            delivered through <strong>PocketLab Notebook</strong>.
            Teachers take the same program this summer on Conceptual Academy,
            earning up to <strong>40 CEU hours</strong>, then teach it to students in the fall.
          </p>

          <div className="stats-row">
            {[
              ["40", "Max CEU Hours"],
              ["8", "Chapters"],
              ["$195", "Per Volume"],
              ["Self-Paced", "Start Anytime"],
            ].map(([num, label]) => (
              <div className="stat" key={label}>
                <div className="stat-num">{num}</div>
                <div className="stat-label">{label}</div>
              </div>
            ))}
          </div>

          <div className="btn-row">
            <a
              href="https://conceptualacademy.com/user/register"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Enroll Now — Volume 1 →
            </a>
            <a
              href="https://app.thepocketlab.com/lab-report/yyAw0siq0001yyAw?ro=1"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Explore a Sample Lesson
            </a>
          </div>

        </div>
      </section>

      {/* ── VIDEO ── */}
      <section className="video-section">
        <p className="eyebrow">Program Overview</p>
        <h2>See the Program in Action</h2>
        <p>A quick look at what teachers experience and what students gain from this curriculum.</p>
        <div style={{ maxWidth: 960, margin: "0 auto", borderRadius: 12, overflow: "hidden" }}>
          <iframe
            src="https://players.brightcove.net/2505476419001/default_default/index.html?videoId=6385988897112"
            allowFullScreen
            allow="encrypted-media"
            style={{ width: "100%", aspectRatio: "16/9", border: "none", display: "block" }}
          />
        </div>
      </section>

      {/* ── SUMMER PD / VOLUMES ── */}
      <section className="pd-section">
        <div className="section-inner">
          <div className="section-header">
            <p className="eyebrow">Summer Professional Development</p>
            <h2>Learn It Before You Teach It</h2>
            <p>
              Teachers take the course on <strong style={{ color: "#1f2937" }}>Conceptual Academy</strong> —
              the same eight chapters, same labs, same AI experiments your students will experience.
              Earn a 5-CEU certificate per chapter. No cohort, no schedule. Start whenever your summer opens up.
            </p>
          </div>

          <div className="volumes-grid">

            {/* Volume 1 */}
            <div className="volume-card featured">
              <span className="vol-tag">Volume 1</span>
              <h3>Foundations &amp; Practice</h3>
              <p className="vol-subtitle">Chapters 1–4 · 20 CEU Hours</p>
              <ul className="vol-chapters">
                <li><strong>Ch. 1 — Intelligence:</strong> Three kinds of intelligence, types of AI, first lab experiments with Alia</li>
                <li><strong>Ch. 2 — Teaching Machines:</strong> How AI learns by example, the knock-knock joke journey, creativity</li>
                <li><strong>Ch. 3 — Prompt Engineering:</strong> Basic prompt structures, context &amp; clarity, building simulations</li>
                <li><strong>Ch. 4 — AI Bias:</strong> What bias is, hidden patterns, cultural assumptions, the flattery problem</li>
              </ul>
              <div className="ceu-row">
                <span className="ceu-num">20</span>
                <span className="ceu-label">CEU hours<br />upon completion</span>
              </div>
              <div className="price">$195</div>
              <p className="course-id">Course ID: <code>UAIVolume1</code></p>
              <a
                href="https://conceptualacademy.com/user/register"
                target="_blank"
                rel="noopener noreferrer"
                className="vol-enroll primary"
              >
                Enroll in Volume 1 →
              </a>
            </div>

            {/* Volume 2 */}
            <div className="volume-card">
              <span className="vol-tag">Volume 2</span>
              <h3>Society &amp; the Future</h3>
              <p className="vol-subtitle">Chapters 5–8 · 20 CEU Hours</p>
              <ul className="vol-chapters">
                <li><strong>Ch. 5 — Magic from Math:</strong> Probability, AI&apos;s crystal ball, predictions, and sentience</li>
                <li><strong>Ch. 6 — AI Algorithms &amp; People:</strong> High-stakes decisions, hiring algorithms, criminal justice, fairness</li>
                <li><strong>Ch. 7 — AI in Media:</strong> Real or fake, deepfakes, misinformation, democracy &amp; information quality</li>
                <li><strong>Ch. 8 — An AI-Powered Future:</strong> The next 10 and 50 years, power, wealth, and control</li>
              </ul>
              <div className="ceu-row">
                <span className="ceu-num">20</span>
                <span className="ceu-label">CEU hours<br />upon completion</span>
              </div>
              <div className="price">$195</div>
              <p className="course-id">Course ID: <code>UAIVolume2</code></p>
              <a
                href="https://conceptualacademy.com/user/register"
                target="_blank"
                rel="noopener noreferrer"
                className="vol-enroll secondary"
              >
                Enroll in Volume 2 →
              </a>
            </div>

          </div>
          <p className="pd-footnote">No expiration date — work at your own pace. Each chapter earns a 5-CEU certificate upon reaching the mastery threshold.</p>
        </div>
      </section>

      {/* ── CREDIBILITY ── */}
      <section className="cred-section">
        <div className="section-inner">
          <div className="section-header">
            <p className="eyebrow">Proven Track Record</p>
            <h2>Conceptual Academy Powered by PocketLab</h2>
            <p>
              Best known for award-winning high school science programs in physics, chemistry,
              biology, and Earth science — now bringing that same rigorous, accessible approach to AI literacy.
            </p>
          </div>
          <div className="cards-grid">
            {[
              {
                title: "Texas SBOE Approved",
                body: "Our programs are among a select few approved by the Texas State Board of Education.",
              },
              {
                title: "Fully Standards Aligned",
                body: "Complete alignment documentation for C3, NGSS, and state-specific CTE pathways — ready for curriculum coordinators and administrators.",
              },
              {
                title: "Used Across the Country",
                body: "A clear, accessible, and experiential approach that works for teachers without any prior AI background.",
              },
            ].map((c) => (
              <div className="cred-card" key={c.title}>
                <h3>{c.title}</h3>
                <p>{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PLATFORM ── */}
      <section className="platform-section">
        <div className="section-inner">
          <div className="platform-grid">
            <div>
              <p className="eyebrow">The Student Platform</p>
              <h2>Built for the High School Classroom</h2>
              <p>
                PocketLab Notebook is designed specifically for the high school environment.
                Eight chapters delivered as structured lesson collections — Core, Lab, Discussion,
                and Project Days — ready to use from day one.
              </p>
              <p>
                Teachers can customize lessons, adjust reading levels with a single click,
                and deliver content in any language. AI integration means auto-grading is built in.
              </p>
              <p>
                Alia, the embedded AI learning assistant, operates with curriculum-specific guardrails —
                staying within course content and guiding students Socratically rather than giving direct answers.
              </p>
              <a
                href="https://app.thepocketlab.com/lab-report/yyAw0siq0001yyAw?ro=1"
                target="_blank"
                rel="noopener noreferrer"
                className="link-arrow"
              >
                View a Sample Lesson →
              </a>
            </div>
            <div>
              <img src="/images/UAIPocketLab.jpg" alt="The AI program on PocketLab Notebook" />
              <p className="img-caption">Understanding and Working with AI on PocketLab Notebook</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── TEACHER RESOURCES ── */}
      <section className="resources-section">
        <div className="section-inner">
          <div className="section-header">
            <p className="eyebrow">Teacher Support</p>
            <h2>Everything a Teacher Needs</h2>
            <p>No prior AI background required. The program includes a full suite of instructor tools grounded in cognitive science.</p>
          </div>
          <div className="resources-grid">
            <div className="resource-card">
              <h3>Teacher Guides</h3>
              <p>
                Lesson-by-lesson guides with suggested scripts, facilitation tips, discussion prompts,
                and assessment rubrics. Built on cognitive science best practices for both new and experienced teachers.
              </p>
              <a
                href="https://suchocki88.github.io/UAI0405TG/"
                target="_blank"
                rel="noopener noreferrer"
                className="link-arrow"
              >
                View a Sample Teacher Guide →
              </a>
            </div>
            <div className="resource-card">
              <h3>Standards Alignment</h3>
              <p>
                Complete documentation for C3, NGSS, and state CTE standards —
                ready for administrators and curriculum coordinators to place this program within existing frameworks.
              </p>
              <a
                href="https://suchocki88.github.io/UAI0405Standards/"
                target="_blank"
                rel="noopener noreferrer"
                className="link-arrow"
              >
                View Standards Alignment →
              </a>
            </div>
            <div className="resource-card">
              <h3>Alia AI Built In</h3>
              <p>
                Alia operates with curriculum-specific guardrails — she stays within course content,
                guides students Socratically, and never completes assignments for them.
                A safe, focused, and effective AI experience for every classroom.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="cta-section">
        <div className="section-inner" style={{ maxWidth: 700 }}>
          <p className="eyebrow">Get Started</p>
          <h2>Ready to Bring AI Literacy to Your School?</h2>
          <p>
            Enroll directly — no waitlist, start anytime — or reach out if you&apos;d like
            to talk through how this fits your school&apos;s needs.
            Student program pricing is handled through PocketLab.
          </p>
          <div className="cta-btn-row">
            <a
              href="https://conceptualacademy.com/user/register"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Enroll in Teacher PD →
            </a>
            <a
              href="https://www.thepocketlab.com/conceptual-academy"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-dark"
            >
              Student Program Info →
            </a>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfmC3t1awl9T0Ed1JZhtW24XEvp0znPoIITpbwcY7WvqYm12Q/viewform?usp=header"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-amber"
            >
              Contact Us →
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
