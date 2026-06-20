import Link from "next/link";

export const metadata = {
  title: "AI Literacy for Colleges | Conceptual Academy",
  description:
    "A complete, ready-to-teach AI literacy course for community colleges and universities. Adopt it for your class on the Conceptual Academy platform — with student assessment, a gradebook, and certificates.",
};

const CONTACT_FORM =
  "https://docs.google.com/forms/d/e/1FAIpQLSfmC3t1awl9T0Ed1JZhtW24XEvp0znPoIITpbwcY7WvqYm12Q/viewform?usp=header";
const MANUAL =
  "https://conceptualacademy.com/sites/default/files/2026-03/UAI_Users_Manual.pdf";

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
        <div style={{ position: "absolute", inset: 0, background: "rgba(15,23,42,0.72)" }} />
        <div style={{ maxWidth: 880, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <p style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: "#f59e0b", marginBottom: 16 }}>
            For Colleges &amp; Universities
          </p>
          <h1 style={{ fontSize: "clamp(32px, 6vw, 50px)", lineHeight: 1.1, margin: "0 0 24px" }}>
            A Ready-to-Teach AI Literacy to Fluency Course
          </h1>
          <p style={{ fontSize: 20, color: "rgba(255,255,255,0.85)", maxWidth: 720, margin: "0 auto 32px" }}>
            Bring <em>Understanding and Working with AI</em> to your students on the Conceptual Academy platform.
            You teach the course; the platform delivers the curriculum, the AI tools, the assessment, and a
            gradebook that keeps your whole class in view. Built with community and four-year colleges in mind —
            perfect for a liberal-arts elective, with no deep computer-science background required.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href={CONTACT_FORM}
              target="_blank"
              rel="noopener noreferrer"
              style={{ background: "#f59e0b", color: "#0f172a", padding: "14px 28px", borderRadius: 8, textDecoration: "none", fontWeight: 700, fontSize: 16, display: "inline-block" }}
            >
              Yes, I&apos;m Interested →
            </a>
            <a
              href={MANUAL}
              target="_blank"
              rel="noopener noreferrer"
              style={{ border: "2px solid rgba(255,255,255,0.4)", color: "white", padding: "14px 28px", borderRadius: 8, textDecoration: "none", fontWeight: 600, fontSize: 16, display: "inline-block" }}
            >
              Read the User Manual
            </a>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section style={{ background: "#ffffff", padding: "80px 24px" }}>
        <div style={{ maxWidth: 820, margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: "#204aab" }}>
            Why It Belongs in Your Catalog
          </p>
          <h2 style={{ fontSize: "clamp(28px, 5vw, 40px)", marginTop: 12 }}>AI Fluency Is Now a Core Competency</h2>
          <p style={{ marginTop: 20, fontSize: 20, color: "#4b5563" }}>
            AI and AI ethics are already reshaping every field your students are heading into — business,
            healthcare, the trades, the arts, public service. They need more than passing familiarity. They need
            fluency: the judgment to work with AI effectively and creatively, and the skepticism to question it.
            This course gives any department a turnkey way to teach that, without building it from scratch.
          </p>
        </div>

        <div
          style={{
            maxWidth: 900,
            margin: "48px auto 0",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 200px), 1fr))",
            gap: 16,
          }}
        >
          {[
            ["8", "Chapters across two volumes"],
            ["40+", "Hours of material"],
            ["Any", "Discipline or department"],
            ["No", "CS background required"],
          ].map(([big, small], i) => (
            <div key={i} style={{ background: "#f8fafc", border: "1px solid #e5e7eb", borderRadius: 12, padding: "24px 20px", textAlign: "center" }}>
              <div style={{ fontSize: 34, fontWeight: 800, color: "#204aab", lineHeight: 1 }}>{big}</div>
              <div style={{ marginTop: 8, fontSize: 14, color: "#6b7280" }}>{small}</div>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ background: "#f8fafc", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: 760, margin: "0 auto 48px" }}>
            <p style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: "#204aab" }}>
              The Instructor-Plus-Students Model
            </p>
            <h2 style={{ fontSize: "clamp(28px, 5vw, 40px)", marginTop: 12 }}>How It Works for Your Course</h2>
            <p style={{ marginTop: 16, fontSize: 20, color: "#6b7280" }}>
              The Conceptual Academy platform is built for an instructor teaching a class of students.
              Here&apos;s the shape of it.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))", gap: 24, marginBottom: 48 }}>
            {[
              ["1", "Adopt", "We customize the course to your needs. Student and site licenses are available."],
              ["2", "Students Enroll", "Each student enrolls in your customized program — text, videos, interactive labs, project-based learning, automated assessment, unit exams, a test bank, and access to Alia, our trained AI learning assistant."],
              ["3", "Class Gradebook", "Tracks student scores on the automated quizzes. You port those scores to your LMS at the end of the semester. Easy."],
            ].map(([n, title, body], i) => (
              <div key={i} style={{ background: "#ffffff", borderRadius: 16, padding: 32, border: "1px solid #e5e7eb", borderTop: "4px solid #204aab", display: "flex", flexDirection: "column" }}>
                <span style={{ width: 36, height: 36, borderRadius: 100, background: "#204aab", color: "white", fontWeight: 800, fontSize: 17, display: "flex", alignItems: "center", justifyContent: "center" }}>{n}</span>
                <h3 style={{ fontSize: 21, margin: "16px 0 10px" }}>{title}</h3>
                <p style={{ fontSize: 16, color: "#4b5563", margin: 0 }}>{body}</p>
              </div>
            ))}
          </div>

          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <img
              src="/images/CALandingPageB.jpg"
              alt="The Conceptual Academy platform"
              style={{ width: "100%", borderRadius: 12, boxShadow: "0 12px 36px rgba(0,0,0,0.15)", border: "1px solid #e5e7eb" }}
            />
            <p style={{ fontSize: 14, color: "#6b7280", fontStyle: "italic", textAlign: "center", marginTop: 12 }}>
              The platform your students will work in
            </p>
          </div>
        </div>
      </section>

      {/* MEET ALIA */}
      <section style={{ background: "#ffffff", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))", gap: 56, alignItems: "center" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img src="/images/AliaHiRezSmile.png" alt="Alia, the AI learning assistant" style={{ width: "100%", maxWidth: 320 }} />
          </div>
          <div>
            <img src="/images/AliaCircle.jpg" alt="ALIA — AI Learning Assistant" style={{ width: 92, marginBottom: 16, borderRadius: 8 }} />
            <p style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: "#204aab", margin: 0 }}>
              Every Student Gets a Guide
            </p>
            <h2 style={{ fontSize: "clamp(28px, 5vw, 40px)", margin: "12px 0 20px" }}>Meet Alia</h2>
            <p style={{ fontSize: 18, color: "#4b5563", marginBottom: 16 }}>
              Alia is the AI learning assistant built into the platform — and it&apos;s no generic chatbot. It&apos;s
              trained specifically on this curriculum, so it guides each student Socratically through the very
              material they&apos;re studying.
            </p>
            <p style={{ fontSize: 18, color: "#4b5563" }}>
              It takes three specialized forms — a tutor, a lab partner, and a creative collaborator. For an
              instructor, that means every student has on-demand, curriculum-aware help, without adding to your
              office hours. Plus, you can track each student&apos;s use of Alia through your instructor&apos;s panel.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section style={{ background: "#f8fafc", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: 760, margin: "0 auto 48px" }}>
            <p style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: "#204aab" }}>
              The Complete Environment
            </p>
            <h2 style={{ fontSize: "clamp(28px, 5vw, 40px)", marginTop: 12 }}>What Your Students Get</h2>
            <p style={{ marginTop: 16, fontSize: 20, color: "#6b7280" }}>
              Everything lives in one place — textbook pages are embedded, but printed textbooks are also available.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))", gap: 24 }}>
            {[
              ["Full-Color Curriculum Pages", "The complete curriculum is embedded directly into the platform in full color — every lesson, spotlight, lab, and project. The printed books make a fine companion, but students don't need them to complete the course."],
              ["Embedded Video Lessons", "Every core lesson includes a video from the author, embedded right alongside the reading — the same videos reachable by QR code in the printed books. Commercial-free and always in context."],
              ["Three Alia AI Instances", "Alia-Tutor guides students Socratically. Alia-Lab supports hands-on AI experiments. Alia-Creative assists with their writing project. Three specialized tools, not one generic chatbot."],
              ["Interactive Labs & AI Experiments", "Guided, methodical experiments with AI — using Claude or the model of your choice — so students discover how AI behaves, including its biases and its limits, for themselves."],
              ["Automated Assessment", "Three quiz types. The reading and video quizzes give students a chance to reflect on what they just learned. The more challenging \u201cHomework Practice Sessions\u201d feature mastery questions that help students apply and consolidate their understanding."],
              ["Podcast Previews", "Each chapter includes a 20-minute podcast preview — a perfect solution for the student on the go."],
            ].map(([title, body], i) => (
              <div key={i} style={{ background: "#ffffff", borderRadius: 16, padding: 28, border: "1px solid #e5e7eb", borderTop: "4px solid #204aab" }}>
                <h3 style={{ fontSize: 20, margin: "0 0 12px" }}>{title}</h3>
                <p style={{ color: "#4b5563", margin: 0 }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ASSESSMENT & GRADEBOOK */}
      <section style={{ background: "#204aab", color: "white", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))", gap: 56, alignItems: "center", marginBottom: 48 }}>
            <div>
              <p style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: "#f59e0b", marginBottom: 16 }}>
                Assessment &amp; Credentials
              </p>
              <h2 style={{ fontSize: "clamp(28px, 5vw, 40px)", margin: "0 0 24px" }}>A Gradebook Built In</h2>
              <p style={{ fontSize: 18, color: "rgba(255,255,255,0.85)", marginBottom: 16 }}>
                Assessment is automated and low-stakes — points-based quizzes that accumulate rather than penalize.
                Everyone starts at zero and builds upward to a threshold number of points that you set. It works as
                a robust participation grade, combining with the unit exams, the field-journal rubric, and the
                literary work toward each student&apos;s complete grade.
              </p>
              <p style={{ fontSize: 18, color: "rgba(255,255,255,0.85)" }}>
                Upon successful completion of the program, students can download a dated certificate in their name.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
              <img
                src="/images/UAICertificateFZ.png"
                alt="Certificate of Completion — Understanding and Working with AI"
                style={{ width: "100%", maxWidth: 460, borderRadius: 12, boxShadow: "0 12px 40px rgba(0,0,0,0.5)" }}
              />
              <p style={{ fontSize: 14, color: "rgba(255,255,255,0.55)", fontStyle: "italic", textAlign: "center", margin: 0 }}>
                Each student&apos;s dated certificate — downloadable on completion
              </p>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 180px), 1fr))", gap: 16 }}>
            <div style={{ background: "rgba(255,255,255,0.08)", borderRadius: 12, padding: 24 }}>
              <h3 style={{ color: "#f59e0b", margin: "0 0 8px", fontSize: 18 }}>Video Quizzes</h3>
              <p style={{ color: "rgba(255,255,255,0.75)", margin: 0 }}>5 points per correct answer</p>
            </div>
            <div style={{ background: "rgba(255,255,255,0.08)", borderRadius: 12, padding: 24 }}>
              <h3 style={{ color: "#f59e0b", margin: "0 0 8px", fontSize: 18 }}>Reading Checks</h3>
              <p style={{ color: "rgba(255,255,255,0.75)", margin: 0 }}>5 points per correct answer</p>
            </div>
            <div style={{ background: "rgba(255,255,255,0.08)", borderRadius: 12, padding: 24 }}>
              <h3 style={{ color: "#f59e0b", margin: "0 0 8px", fontSize: 18 }}>Homework</h3>
              <p style={{ color: "rgba(255,255,255,0.75)", margin: 0 }}>10 points per correct answer</p>
            </div>
          </div>
        </div>
      </section>

      {/* ADOPT */}
      <section style={{ background: "#eff6ff", padding: "80px 24px" }}>
        <div style={{ maxWidth: 820, margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: "#204aab" }}>
            Bring It to Your Campus
          </p>
          <h2 style={{ fontSize: "clamp(28px, 5vw, 40px)", marginTop: 12 }}>Adopt the Course</h2>
          <p style={{ marginTop: 20, fontSize: 20, color: "#4b5563" }}>
            We&apos;re standing by to answer your questions and to set up your customized course.
          </p>
          <div style={{ marginTop: 32, display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href={CONTACT_FORM}
              target="_blank"
              rel="noopener noreferrer"
              style={{ background: "#204aab", color: "white", padding: "16px 32px", borderRadius: 10, textDecoration: "none", fontWeight: 700, fontSize: 18, display: "inline-block" }}
            >
              Yes, I&apos;m Interested →
            </a>
            <Link
              href="/curriculum"
              style={{ background: "white", border: "2px solid #204aab", color: "#204aab", padding: "16px 32px", borderRadius: 10, textDecoration: "none", fontWeight: 700, fontSize: 18, display: "inline-block" }}
            >
              See the Full Curriculum →
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
