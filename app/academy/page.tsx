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
            Professional Development & Independent Learners
          </p>
          <h1 style={{ fontSize: 48, lineHeight: 1.1, margin: "0 0 24px" }}>
            AI Literacy You Can Credential
          </h1>
          <p style={{ fontSize: 20, color: "rgba(255,255,255,0.85)", maxWidth: 700, margin: "0 auto 32px" }}>
            A structured, self-paced online program for teachers, professionals, and independent learners. Start anytime. No expiration. Earn continuing education certificates along the way.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="https://conceptualacademy.com/textbook/understanding-and-working-ai"
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
              Visit Conceptual Academy
            </a>
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section style={{ background: "#ffffff", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: 760, margin: "0 auto 48px" }}>
            <p style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: "#ec4899" }}>
              Who It Is For
            </p>
            <h2 style={{ fontSize: 40, marginTop: 12 }}>For Every Learner Outside the Traditional K–12 Classroom</h2>
            <p style={{ marginTop: 16, fontSize: 20, color: "#6b7280" }}>
              While PocketLab serves students within institutional K–12, Conceptual Academy is for everyone else.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 24 }}>
            <div style={{ background: "#fdf2f8", borderRadius: 16, padding: 24, border: "2px solid #ec4899", textAlign: "center" }}>
              <div style={{ fontSize: 32, marginBottom: 12 }}>👩‍🏫</div>
              <h3 style={{ fontSize: 18, margin: "0 0 8px" }}>Teachers</h3>
              <p style={{ color: "#4b5563", margin: 0, fontSize: 15 }}>Earn summer CEUs and PD hours. Arrive in the fall ready to teach this program to your students through PocketLab.</p>
            </div>
            <div style={{ background: "#fdf2f8", borderRadius: 16, padding: 24, border: "2px solid #ec4899", textAlign: "center" }}>
              <div style={{ fontSize: 32, marginBottom: 12 }}>💼</div>
              <h3 style={{ fontSize: 18, margin: "0 0 8px" }}>Professionals</h3>
              <p style={{ color: "#4b5563", margin: 0, fontSize: 15 }}>Therapists, counselors, HR professionals, and anyone whose field is being shaped by AI.</p>
            </div>
            <div style={{ background: "#fdf2f8", borderRadius: 16, padding: 24, border: "2px solid #ec4899", textAlign: "center" }}>
              <div style={{ fontSize: 32, marginBottom: 12 }}>🎓</div>
              <h3 style={{ fontSize: 18, margin: "0 0 8px" }}>College Courses</h3>
              <p style={{ color: "#4b5563", margin: 0, fontSize: 15 }}>Our platform supports an instructor-plus-students model. Many of our adoptions are colleges.</p>
            </div>
            <div style={{ background: "#fdf2f8", borderRadius: 16, padding: 24, border: "2px solid #ec4899", textAlign: "center" }}>
              <div style={{ fontSize: 32, marginBottom: 12 }}>🏠</div>
              <h3 style={{ fontSize: 18, margin: "0 0 8px" }}>Independent Learners</h3>
              <p style={{ color: "#4b5563", margin: 0, fontSize: 15 }}>Homeschool families, life-long learners, and anyone who wants a structured path through this material.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PLATFORM SCREENSHOT */}
      <section style={{ background: "#f8fafc", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 56, alignItems: "center" }}>
          <div>
            <p style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: "#ec4899" }}>
              The Platform
            </p>
            <h2 style={{ fontSize: 36, margin: "12px 0 20px" }}>Join Us On a Guided Path Through the Curriculum</h2>
            <p style={{ fontSize: 18, color: "#4b5563", marginBottom: 16 }}>
              You'll find everything in one place: video lessons, interactive labs, AI tools, quizzes, and study guides designed to take you from the foundations of how AI works to its societal and creative implications.
            </p>
              <p style={{ fontSize: 18, color: "#4b5563", marginBottom: 16 }}>
              You can start anytime, stop anytime, and pick up exactly where you left off. There is no expiration date on your enrollment.
            </p>
            <p style={{ fontSize: 18, color: "#4b5563" }}>
              Each volume is $195 and earns up to 20 hours of continuing education credit. You can take them independently or together. The pace you set is up to you.
            </p>
          </div>
          <div>
            <img
              src="/images/CALandingPageB.jpg"
              alt="Conceptual Academy platform"
              style={{ width: "100%", borderRadius: 12, boxShadow: "0 8px 24px rgba(0,0,0,0.15)" }}
            />
            <p style={{ fontSize: 14, color: "#6b7280", fontStyle: "italic", marginTop: 12 }}>
  Screenshot from the Conceptual Academy platform
</p>
          </div>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section style={{ background: "#ffffff", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: 760, margin: "0 auto 48px" }}>
            <p style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: "#ec4899" }}>
              What You Get
            </p>
            <h2 style={{ fontSize: 40, marginTop: 12 }}>Everything in One Place</h2>
            <p style={{ marginTop: 16, fontSize: 20, color: "#6b7280" }}>
              For $195 per volume, you get the complete learning environment — no textbook required, though the printed books make a great companion.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, marginBottom: 24 }}>

            <div style={{ background: "#fdf2f8", borderRadius: 16, padding: 28, border: "2px solid #ec4899" }}>
              <h3 style={{ fontSize: 20, margin: "0 0 12px" }}>Three Alia AI Instances</h3>
              <p style={{ color: "#4b5563", margin: 0 }}>
                Alia-Tutor is trained specifically on this curriculum and guides you Socratically. Alia-Lab supports hands-on AI experiments. Alia-Creative assists with your writing project, including artifact handling for your evolving manuscript. Not one generic chatbot, but three specialized AI learning tools.
              </p>
            </div>

            <div style={{ background: "#fdf2f8", borderRadius: 16, padding: 28, border: "2px solid #ec4899" }}>
              <h3 style={{ fontSize: 20, margin: "0 0 12px" }}>Full Color Curriculum Pages</h3>
              <p style={{ color: "#4b5563", margin: 0 }}>
                The complete curriculum in PDF tablet ready form is embedded directly into the platform in full color — all lessons, spotlights, labs, and projects. The printed books are a wonderful study companion for those who prefer less screen time, but you do not need them to complete the program.
              </p>
            </div>

            <div style={{ background: "#fdf2f8", borderRadius: 16, padding: 28, border: "2px solid #ec4899" }}>
              <h3 style={{ fontSize: 20, margin: "0 0 12px" }}>Embedded Video Lessons</h3>
              <p style={{ color: "#4b5563", margin: 0 }}>
                Every core lesson includes a video from the author — the same videos accessible via QR code in the printed books. On the platform, they are embedded directly alongside the reading. Commercial free, always available, always in context.
              </p>
            </div>

          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>

            <div style={{ background: "#fdf2f8", borderRadius: 16, padding: 28, border: "2px solid #ec4899" }}>
              <h3 style={{ fontSize: 20, margin: "0 0 12px" }}>Automated Assessment</h3>
              <p style={{ color: "#4b5563", margin: 0 }}>
                Three quiz types build your point total: Video Quizzes (5 pts each), Reading Checks (5 pts each), and Homework Practice Sessions (10 pts each). Points accumulate — there is no percentage, no failure for a wrong answer. You simply keep building. Reach the chapter threshold and download your certificate.
              </p>
            </div>

            <div style={{ background: "#fdf2f8", borderRadius: 16, padding: 28, border: "2px solid #ec4899" }}>
              <h3 style={{ fontSize: 20, margin: "0 0 12px" }}>Unit Exams and Study Guides</h3>
              <p style={{ color: "#4b5563", margin: 0 }}>
                PDF unit exams that are collaborative in nature and designed for reflection and discussion rather than high-stakes testing. Accompanied by study advice and commentary from the authors to help you get the most from each chapter.
              </p>
            </div>

            <div style={{ background: "#fdf2f8", borderRadius: 16, padding: 28, border: "2px solid #ec4899" }}>
              <h3 style={{ fontSize: 20, margin: "0 0 12px" }}>Real Human Tech Support</h3>
              <p style={{ color: "#4b5563", margin: 0 }}>
                When you have a question, a real person responds. We are a small team that cares about your experience. If you exhaust the question bank and still need points to reach a threshold, you can submit field journal photos for manual review — because the only way not to succeed is to stop trying.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CREDENTIAL SYSTEM */}
      <section style={{ background: "#111827", color: "white", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>

          {/* Top: text left, certificate right */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 56, alignItems: "center", marginBottom: 48 }}>
            <div>
              <p style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: "#f59e0b", marginBottom: 16 }}>
                How Credentialing Works
              </p>
              <h2 style={{ fontSize: 40, margin: "0 0 24px" }}>Points, Not Percentages</h2>
              <p style={{ fontSize: 18, color: "rgba(255,255,255,0.85)", marginBottom: 16 }}>
                Everyone starts at zero and builds upward based on demonstrated effort. There is no penalty for a wrong answer — only points to be earned with correct answers. This is not a pass-fail system. It is a point-accumulation system, and pedagogically that makes a world of difference.
              </p>
              <p style={{ fontSize: 18, color: "rgba(255,255,255,0.85)", marginBottom: 16 }}>
                Reach the threshold for a chapter and download a personalized 5-hour continuing education certificate with your name and date. Complete the full volume and earn a single 20-hour certificate instead. Complete both volumes for a total of 40 hours of professional development.
              </p>
              <p style={{ fontSize: 18, color: "rgba(255,255,255,0.85)" }}>
                The only real way to not receive a certificate is to stop studying. We have built this program to make that as unlikely as possible. But more than the certificate, you'll finish with a much deeper understanding of the nature of AI and how to work with it effectively.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
              <img
                src="/images/UAICertificate800.png"
                alt="Certificate of Completion — Understanding and Working with AI"
                style={{ width: "100%", maxWidth: 460, borderRadius: 12, boxShadow: "0 12px 40px rgba(0,0,0,0.5)" }}
              />
              <p style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", fontStyle: "italic", textAlign: "center", margin: 0 }}>
                Your personalized certificate — downloadable when you reach each threshold
              </p>
            </div>
          </div>

          {/* Bottom: point breakdown cards full width */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 16 }}>
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
            <div style={{ background: "#f59e0b", borderRadius: 12, padding: 24 }}>
              <h3 style={{ color: "#0f172a", margin: "0 0 8px", fontSize: 18 }}>Certificate</h3>
              <p style={{ color: "#0f172a", margin: 0 }}>5 hours CE — complete the chapter</p>
            </div>
            <div style={{ background: "#f59e0b", borderRadius: 12, padding: 24 }}>
              <h3 style={{ color: "#0f172a", margin: "0 0 8px", fontSize: 18 }}>Volume Certificate</h3>
              <p style={{ color: "#0f172a", margin: 0 }}>20 hours CE — complete the volume</p>
            </div>
          </div>

        </div>
      </section>

      {/* A NOTE ABOUT POCKETLAB */}
      <section style={{ background: "#f8fafc", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 56, alignItems: "center" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              src="/images/FrankBulbClear.png"
              alt="Frank with a lightbulb idea"
              style={{ width: 240 }}
            />
          </div>
          <div>
            <p style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: "#ec4899", marginBottom: 16 }}>
              To Keep in Mind
            </p>
            <h2 style={{ fontSize: 36, margin: "0 0 20px" }}>A Note About PocketLab</h2>
            <p style={{ fontSize: 18, color: "#4b5563", marginBottom: 16 }}>
              We encourage you to open a teacher's account on PocketLab's Notebook plaform. Exploring our AI program on that platform is a genuinely good way to get familiar with the material before teaching it.
            </p>
            <p style={{ fontSize: 18, color: "#4b5563", marginBottom: 16 }}>
              However, PocketLab Notebook is designed for a classroom with a teacher and students. There are no self-study programs on that platform, which is to say there is no way for you to enroll as a student yourself. For CEUs and PD hours that hold up professionally, you need an independent assessment system, which is the Conceptual Academy platform.
            </p>
          </div>
        </div>
      </section>

      {/* ENROLL */}
      <section style={{ background: "#fdf2f8", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 56, alignItems: "center" }}>
          <div>
            <p style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: "#ec4899", marginBottom: 16 }}>
              Enroll Today
            </p>
            <h2 style={{ fontSize: 40, margin: "0 0 24px" }}>Start Anytime. Go at Your Own Pace.</h2>
            <p style={{ fontSize: 18, color: "#4b5563", marginBottom: 24 }}>
              To enroll, go to Conceptual Academy and sign up. When prompted for a Course ID, use the ones below. Payment is accepted via PayPal or credit card.
            </p>

            <div style={{ display: "grid", gap: 16, marginBottom: 32 }}>
              <div style={{ background: "#ffffff", borderRadius: 12, padding: 20, border: "2px solid #ec4899" }}>
                <p style={{ margin: 0, fontSize: 16 }}>
                  <strong>Volume 1: Foundations and Practice</strong><br />
                  <span style={{ color: "#6b7280" }}>Course ID: </span>
                  <strong style={{ color: "#ec4899", fontSize: 18 }}>UAIVolume1</strong>
                  <span style={{ color: "#6b7280", marginLeft: 16 }}>$195</span>
                </p>
              </div>
              <div style={{ background: "#ffffff", borderRadius: 12, padding: 20, border: "2px solid #ec4899" }}>
                <p style={{ margin: 0, fontSize: 16 }}>
                  <strong>Volume 2: Society and the Future</strong><br />
                  <span style={{ color: "#6b7280" }}>Course ID: </span>
                  <strong style={{ color: "#ec4899", fontSize: 18 }}>UAIVolume2</strong>
                  <span style={{ color: "#6b7280", marginLeft: 16 }}>$195</span>
                </p>
              </div>
            </div>

            <p style={{ fontSize: 15, color: "#6b7280", marginBottom: 32 }}>
              Each person needs their own account. Group discounts are available for coops, departments, and college adoptions — contact us to discuss.
            </p>

            <a
              href="https://www.conceptualacademy.com/signup"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "#ec4899",
                color: "white",
                padding: "16px 32px",
                borderRadius: 10,
                textDecoration: "none",
                fontWeight: 700,
                fontSize: 18,
                display: "inline-block",
              }}
            >
              Sign Up at Conceptual Academy →
            </a>
          </div>
          <div>
            <img
              src="/images/CASignUp.jpg"
              alt="Conceptual Academy sign up"
              style={{ width: "100%", borderRadius: 12, boxShadow: "0 8px 24px rgba(0,0,0,0.15)" }}
            />
          </div>
        </div>
      </section>

    </main>
  );
}
