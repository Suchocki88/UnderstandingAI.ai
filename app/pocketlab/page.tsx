import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Literacy for High School | PocketLab × Conceptual Academy",
  description:
    "A complete semester-long AI literacy program for high school students, delivered through PocketLab Notebook. Summer PD available for teachers.",
};

export default function Page() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif", color: "#1f2937", lineHeight: 1.6 }}>

      {/* ── STYLES ── */}
      <style>{`
        html { scroll-behavior: smooth; }
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

        /* ── EDITORIAL ── */
        .editorial-section { background: #ffffff; padding: 80px 24px; }
        .editorial-inner { max-width: 720px; margin: 0 auto; }
        .editorial-inner p {
          font-size: 19px; color: #374151; margin-bottom: 24px; line-height: 1.75;
        }
        .editorial-inner p.large {
          font-size: 22px; font-weight: 700; color: #111827; line-height: 1.5;
        }
        .editorial-inner p.exists {
          font-size: 24px; font-weight: 800; color: #111827;
          border-left: 4px solid #f59e0b;
          padding-left: 20px;
          margin: 36px 0;
        }

        /* ── WHO IT'S FOR ── */
        .who-section { background: #f8fafc; padding: 80px 24px; }
        .who-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 32px;
          max-width: 1000px;
          margin: 0 auto 40px;
        }
        .who-card {
          background: white;
          border-radius: 16px;
          padding: 36px;
          border: 1px solid #e5e7eb;
          border-top: 4px solid #f59e0b;
        }
        .who-card h3 {
          font-size: 22px; margin: 0 0 16px; color: #111827;
        }
        .who-card p {
          font-size: 16px; color: #4b5563; line-height: 1.7; margin-bottom: 16px;
        }
        .who-card .who-link {
          color: #c2410c; font-weight: 700; text-decoration: none; font-size: 15px;
        }
        .adoption-bridge {
          max-width: 1000px;
          margin: 0 auto;
          text-align: center;
          padding: 24px 32px;
          background: white;
          border-radius: 12px;
          border: 1px solid #e5e7eb;
          border-left: 4px solid #f59e0b;
        }
        .adoption-bridge p {
          font-size: 16px;
          color: #6b7280;
          line-height: 1.7;
          margin: 0;
          font-style: italic;
        }
        .adoption-bridge a {
          color: #c2410c;
          font-weight: 700;
          text-decoration: none;
        }

        /* ── VIDEO ── */
        .video-section { background: #0f172a; padding: 64px 24px; text-align: center; }
        .video-section .eyebrow { margin-bottom: 12px; }
        .video-section h2 { font-size: 34px; color: white; margin: 0 0 8px; }
        .video-section p {
          font-size: 17px; color: rgba(255,255,255,0.65);
          max-width: 560px; margin: 0 auto 32px;
        }

        /* ── PROGRAM ── */
        .program-section { background: #fff7ed; padding: 80px 24px; }
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
        .vol-chapters li { margin-bottom: 3px; padding-left: 14px; position: relative; border-bottom: none; }
        .vol-chapters li::before { content: "·"; position: absolute; left: 0; color: #f59e0b; font-weight: 700; }
        .pd-row {
          background: #f8fafc; border-radius: 10px; padding: 14px 16px;
          margin-bottom: 20px; display: flex; align-items: center; gap: 12px;
        }
        .pd-num { font-size: 32px; font-weight: 800; color: #f59e0b; line-height: 1; }
        .pd-label { font-size: 13px; color: #4b5563; line-height: 1.4; }
        .price { font-size: 20px; font-weight: 700; color: #6b7280; margin-bottom: 6px; }
        .course-id { font-size: 13px; color: #6b7280; margin-bottom: 20px; }
        .course-id code {
          background: #f1f5f9; padding: 2px 7px; border-radius: 4px;
          color: #c2410c; letter-spacing: 0.05em; font-family: monospace;
        }
        .vol-enroll {
          display: block; text-align: center; padding: 13px 20px;
          border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 14px;
          border: 1px solid #e5e7eb; color: #6b7280; background: white;
          transition: border-color 0.2s;
        }
        .vol-enroll:hover { border-color: #f59e0b; color: #111827; }
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
          .program-section, .cred-section, .platform-section, .resources-section, .cta-section { padding: 56px 20px; }
        }
      `}</style>

      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-overlay" />
        <div className="hero-inner">

          <div className="logo-badge">
            <img src="/images/PLCALogo.jpg" alt="PocketLab and Conceptual Academy" />
          </div>

          <p className="eyebrow">AI Literacy · High School · PocketLab Notebook</p>

          <h1>
            Teach AI Literacy This Fall.<br />
            <span>Take the Course Yourself This Summer.</span>
          </h1>

          <p className="hero-sub">
            A complete semester-long AI literacy program for high school classrooms —
            delivered through <strong>PocketLab Notebook</strong>.
            Teachers can take the same program this summer as professional development,
            then bring it to students in the fall.
          </p>

          <div className="stats-row">
            {[
              ["8", "Chapters"],
              ["2", "Volumes"],
              ["40", "PD Hours"],
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
              href="https://docs.google.com/forms/d/e/1FAIpQLSfmC3t1awl9T0Ed1JZhtW24XEvp0znPoIITpbwcY7WvqYm12Q/viewform?usp=header"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Let&apos;s Talk →
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

      {/* ── EDITORIAL ── */}
      <section className="editorial-section">
        <div className="editorial-inner">

          <p className="large">
            With every new technology, the pattern is the same: kids embrace it first, adults scramble to catch up. With artificial intelligence, that pattern must reverse.
          </p>

          <p>
            Effective AI use requires wisdom, judgment, and the kind of critical thinking that takes years to develop. Knowing when a confident-sounding answer is wrong. Knowing when flattery is manipulation. Knowing what questions to even ask. These are adult skills. And right now, our students need adults to lead the way.
          </p>

          <p>
            It&apos;s understandable that AI in education arrived first as a set of tools and tips for teachers. That conversation matters. But there&apos;s a larger question we haven&apos;t gotten to yet: when do we start teaching students about AI itself? Not just how to use a particular tool — but what AI is and isn&apos;t, what it gets right and gets wrong, and how to think responsibly in a world that AI is reshaping around them.
          </p>

          <p className="exists">That program now exists.</p>

          <p>
            <em>Understanding and Working with AI</em> is a complete, semester-long course built specifically for high school students — covering what AI is and how it learns, how bias enters and why it matters, how algorithms make high-stakes decisions about real people, how to detect misinformation, and what an AI-powered future might mean for your students&apos; lives and democracy. It fits naturally within social studies, CTE, computer science, and language arts.
          </p>

        </div>
      </section>

      {/* ── WHO IT'S FOR ── */}
      <section className="who-section">
        <div className="section-header">
          <p className="eyebrow">Who This Is For</p>
          <h2>Administrators and Teachers</h2>
          <p>Whether you&apos;re exploring adoption for your school or looking to deepen your own understanding of AI, there&apos;s a place for you here.</p>
        </div>

        <div className="who-grid">

          <div className="who-card">
            <h3>For Administrators</h3>
            <p>
              Your students are already using AI — in their schoolwork, their creative
              projects, their daily lives. You might question the degree to which your
              district is already addressing AI literacy, not just for the teachers,
              but for the students.
            </p>
            <p>
              This is a complete, ready-to-deploy program. First as professional
              development where teachers learn to teach the full semester course.
              Second as a student-facing curriculum complete with teacher guides,
              standards alignment, and a platform designed specifically for the
              high school experience.
            </p>
            <p>We&apos;d love to walk you through it.</p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfmC3t1awl9T0Ed1JZhtW24XEvp0znPoIITpbwcY7WvqYm12Q/viewform?usp=header"
              target="_blank"
              rel="noopener noreferrer"
              className="who-link"
            >
              Reach out to start the conversation →
            </a>
          </div>

          <div className="who-card">
            <h3>For Teachers</h3>
            <p>
              If you want to understand AI deeply — not just use it, but genuinely
              understand how it works, where it fails, and how to think critically
              about it — this summer PD program is built for you.
            </p>
            <p>
              You&apos;ll finish with a genuine understanding of AI and a certificate
              documenting up to 40 PD hours of professional learning. That knowledge
              puts you in a position to lead — to be part of your district&apos;s
              conversation about AI literacy for students.
            </p>
            <a href="#program" className="who-link">
              See the program details →
            </a>
          </div>

        </div>

        {/* ── ADOPTION BRIDGE ── */}
<div className="adoption-bridge">
  <p>
    For schools and districts interested in bringing this program to students,
    teacher PD is a natural starting point.
  </p>
  <p>
    
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSfmC3t1awl9T0Ed1JZhtW24XEvp0znPoIITpbwcY7WvqYm12Q/viewform?usp=header"
      target="_blank"
      rel="noopener noreferrer"
    >
      Reach out to learn more about what a full adoption looks like →
    </a>
  </p>
</div>

      </section>

      {/* ── VIDEO ── */}
      <section className="video-section">
        <p className="eyebrow">Program Overview</p>
        <h2>See the Program in Action</h2>
        <p>A quick look at what teachers experience and what students gain from this curriculum.</p>
        <div style={{ maxWidth: 960, margin: "0 auto", borderRadius: 12, overflow: "hidden" }}>
          <iframe
            src="https://players.brightcove.net/2505476419001/default_default/index.html?videoId=6393045525112"
            allowFullScreen
            allow="encrypted-media"
            style={{ width: "100%", aspectRatio: "16/9", border: "none", display: "block" }}
          />
        </div>
      </section>

      {/* ── PROGRAM DETAILS ── */}
      <section className="program-section" id="program">
        <div className="section-inner">
          <div className="section-header">
            <p className="eyebrow">The Program</p>
            <h2>Two Volumes. Eight Chapters.</h2>
            <p>
              Each chapter completed earns a certificate for 5 PD hours.
              Work through one volume or both — at your own pace, on your own schedule.
            </p>
          </div>

          <div className="volumes-grid">

            {/* Volume 1 */}
            <div className="volume-card featured">
              <span className="vol-tag">Volume 1</span>
              <h3>Foundations &amp; Practice</h3>
              <p className="vol-subtitle">Chapters 1–4 · 20 PD Hours</p>
              <ul className="vol-chapters">
                <li><strong>Ch. 1 — Intelligence:</strong> Three kinds of intelligence, types of AI, first lab experiments</li>
                <li><strong>Ch. 2 — Teaching Machines:</strong> How AI learns by example, the knock-knock joke journey, creativity</li>
                <li><strong>Ch. 3 — Prompt Engineering:</strong> Basic prompt structures, context &amp; clarity, building simulations</li>
                <li><strong>Ch. 4 — AI Bias:</strong> What bias is, hidden patterns, cultural assumptions, the flattery problem</li>
              </ul>
              <div className="pd-row">
                <span className="pd-num">20</span>
                <span className="pd-label">PD hours<br />upon completion</span>
              </div>
              <p className="price">$195</p>
              <p className="course-id">Course ID: <code>UAIVolume1</code></p>
              <a
                href="https://conceptualacademy.com/user/register"
                target="_blank"
                rel="noopener noreferrer"
                className="vol-enroll"
              >
                Enroll at Conceptual Academy →
              </a>
            </div>

            {/* Volume 2 */}
            <div className="volume-card">
              <span className="vol-tag">Volume 2</span>
              <h3>Society &amp; the Future</h3>
              <p className="vol-subtitle">Chapters 5–8 · 20 PD Hours</p>
              <ul className="vol-chapters">
                <li><strong>Ch. 5 — Magic from Math:</strong> Probability, AI&apos;s crystal ball, predictions, and sentience</li>
                <li><strong>Ch. 6 — AI Algorithms &amp; People:</strong> High-stakes decisions, hiring algorithms, criminal justice, fairness</li>
                <li><strong>Ch. 7 — AI in Media:</strong> Real or fake, deepfakes, misinformation, democracy &amp; information quality</li>
                <li><strong>Ch. 8 — An AI-Powered Future:</strong> The next 10 and 50 years, power, wealth, and control</li>
              </ul>
              <div className="pd-row">
                <span className="pd-num">20</span>
                <span className="pd-label">PD hours<br />upon completion</span>
              </div>
              <p className="price">$195</p>
              <p className="course-id">Course ID: <code>UAIVolume2</code></p>
              <a
                href="https://conceptualacademy.com/user/register"
                target="_blank"
                rel="noopener noreferrer"
                className="vol-enroll"
              >
                Enroll at Conceptual Academy →
              </a>
            </div>

          </div>
          <p className="pd-footnote">No expiration date — work at your own pace. Each chapter earns a certificate for 5 PD hours upon reaching the mastery threshold.</p>
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
              biology, and Earth science — trusted by thousands of students across the country —
              now bringing that same rigorous, accessible approach to AI literacy.
            </p>
          </div>
          <div className="cards-grid">
            {[
              {
                title: "Texas SBOE Approved",
                body: "Our programs are among a select few approved by the Texas State Board of Education — a rigorous review process that signals curricular quality.",
              },
              {
                title: "Fully Standards Aligned",
                body: "Complete alignment documentation for C3, NGSS, and state-specific CTE pathways — ready for curriculum coordinators and administrators.",
              },
              {
                title: "No AI Background Required",
                body: "Clear, accessible, and experiential — designed so any teacher can pick this up and teach it confidently from day one.",
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
                PocketLab Notebook delivers the program as structured lesson collections —
                Core, Lab, Discussion, and Project Days — ready to use from day one.
              </p>
              <p>
                Teachers can customize lessons, adjust reading levels with a single click,
                and deliver content in any language. Auto-grading is built in.
              </p>
              <p>
                Students work directly with AI tools — learning to prompt effectively,
                evaluate outputs critically, and collaborate with AI as a creative partner.
                No prior AI background required for teachers or students.
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
            <p>The program includes a full suite of instructor tools grounded in cognitive science — no prior AI background required.</p>
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
              <h3>Cognitive Science Based</h3>
              <p>
                Built on proven learning principles — spaced practice, retrieval,
                peer discussion, and project-based application. Students don&apos;t just learn about AI.
                They think with it, argue about it, and create alongside it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="cta-section">
        <div className="section-inner" style={{ maxWidth: 700 }}>
          <p className="eyebrow">Let&apos;s Talk</p>
          <h2>Curious? We&apos;d Love to Hear From You.</h2>
          <p>
            Whether you&apos;re an administrator exploring adoption, a teacher wanting to
            understand AI more deeply, or just someone who saw this in the PocketLab newsletter
            and wants to know more — reach out. No pressure, no pitch. Just a conversation.
          </p>
          <div className="cta-btn-row">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfmC3t1awl9T0Ed1JZhtW24XEvp0znPoIITpbwcY7WvqYm12Q/viewform?usp=header"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Get in Touch →
            </a>
            <a
              href="https://www.thepocketlab.com/conceptual-academy"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-dark"
            >
              Student Program Info →
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
