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
            About This Program
          </p>
          <h1 style={{ fontSize: 48, lineHeight: 1.1, margin: "0 0 24px" }}>
            Good Generations to You
          </h1>
          <p style={{ fontSize: 20, color: "rgba(255,255,255,0.85)", maxWidth: 700, margin: "0 auto" }}>
            A program built with heart, level-headed optimism, and a dog named Frank.
          </p>
        </div>
      </section>

      {/* MEET THE TEAM */}
      <section style={{ background: "#f8fafc", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: "#f59e0b" }}>
              The Life Behind It
            </p>
            <h2 style={{ fontSize: 40, marginTop: 12 }}>Meet the Team</h2>
          </div>

          {/* Team photo */}
          <img
            src="/images/AuthorTeam.jpg"
            alt="The Understanding AI team"
            style={{
              width: "100%",
              maxWidth: 900,
              display: "block",
              margin: "0 auto 16px",
              borderRadius: 16,
              boxShadow: "0 12px 32px rgba(0,0,0,0.15)",
            }}
          />

          {/* Photo legend */}
          <p style={{
            textAlign: "center",
            fontSize: 15,
            color: "#6b7280",
            fontStyle: "italic",
            marginBottom: 56,
          }}>
            Left to right: Ian Suchocki, Frank Zappa, John Suchocki, Evi Judge, Reece Suchocki
          </p>

          {/* 3x2 grid of bios */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 28 }}>

            <div style={{ background: "#ffffff", borderRadius: 16, padding: 28, border: "1px solid #e5e7eb" }}>
              <h3 style={{ fontSize: 22, margin: "0 0 12px", color: "#1f2937" }}>John</h3>
              <p style={{ color: "#4b5563", margin: 0 }}>
                Welcome! I am a science instructor, your video host, and the architect of this program on understanding and working with AI. Of course, AI is a tool. And like any tool, first you need to know how it works, and then how to use it effectively.
              </p>
            </div>

            <div style={{ background: "#ffffff", borderRadius: 16, padding: 28, border: "1px solid #e5e7eb" }}>
              <h3 style={{ fontSize: 22, margin: "0 0 12px", color: "#1f2937" }}>Reece</h3>
              <p style={{ color: "#4b5563", margin: 0 }}>
                As a computational linguist, my main role has been guiding the direction and assuring technical accuracy. You are going to love this program. It is full of insightful and useful information, but mostly it is full of heart and level-headed optimism.
              </p>
            </div>

            <div style={{ background: "#ffffff", borderRadius: 16, padding: 28, border: "1px solid #e5e7eb" }}>
              <h3 style={{ fontSize: 22, margin: "0 0 12px", color: "#1f2937" }}>Ian</h3>
              <p style={{ color: "#4b5563", margin: 0 }}>
                As a cultural anthropologist, my role has been developing the later chapters where we dig into the many social impacts of AI. Thank you for taking this program on how AI works and how we can work with AI to make this world a better place.
              </p>
            </div>

            <div style={{ background: "#ffffff", borderRadius: 16, padding: 28, border: "1px solid #e5e7eb" }}>
              <h3 style={{ fontSize: 22, margin: "0 0 12px", color: "#1f2937" }}>Evi</h3>
              <p style={{ color: "#4b5563", margin: 0 }}>
                I am a trained computational linguist as well as a professional prompt engineer. I am a reviewer of this program, but my main role is as the artist of all the fun line drawings you will find throughout this insightful program.
              </p>
            </div>

            <div style={{ background: "#ffffff", borderRadius: 16, padding: 28, border: "1px solid #e5e7eb" }}>
              <h3 style={{ fontSize: 22, margin: "0 0 12px", color: "#1f2937" }}>Frank</h3>
              <p style={{ color: "#4b5563", margin: 0 }}>
                I know, I know. A mascot introducing itself. But I am Frank. Through Evi's art, you will find me cheering you along throughout this animal and human friendly program where you will have fun with lab experiments and in producing a creative literary work. Ruff!
              </p>
            </div>

            <div style={{ background: "#ffffff", borderRadius: 16, padding: 28, border: "1px solid #e5e7eb", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <img
                src="/images/FrankComputer.png"
                alt="Frank the mascot at a computer"
                style={{ width: "80%", maxWidth: 220 }}
              />
            </div>

          </div>
        </div>
      </section>

      {/* ABOUT THIS JOURNEY */}
      <section style={{ background: "#ffffff", padding: "80px 24px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <p style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: "#f59e0b", marginBottom: 16 }}>
            Welcome
          </p>
          <h2 style={{ fontSize: 40, margin: "0 0 32px" }}>About This Journey</h2>
          <p style={{ fontSize: 20, color: "#4b5563", marginBottom: 24 }}>
            You are about to begin a journey into one of the most significant technological developments of our time. Artificial intelligence is already shaping how we communicate, create, learn, and work. This program is designed to help you understand it clearly, use it effectively, and think about it critically.
          </p>
          <p style={{ fontSize: 20, color: "#4b5563", marginBottom: 24 }}>
            Together, we will explore how AI works with pattern recognition, correlation, and probability so you can see for yourself where AI excels and where it struggles. You will experiment directly with AI tools, develop your own creative project in collaboration with an AI, and examine the social, ethical, and civic questions that this technology raises.
          </p>
          <p style={{ fontSize: 20, color: "#4b5563", marginBottom: 24 }}>
            Along the way, you will learn to verify information in an age of synthetic media, maintain your authentic voice while collaborating with AI, and think structurally about how power operates around these systems. That is a tall order. But we are here as your guides to walk with you step by step in a simple, joyful, yet meaningful manner.
          </p>
          <p style={{ fontSize: 22, fontWeight: 700, color: "#1f2937", marginTop: 32 }}>
            Good generations to you!
          </p>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#f8fafc", padding: "80px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <h2 style={{ fontSize: 40, margin: "0 0 24px" }}>Ready to Begin?</h2>
          <p style={{ fontSize: 20, color: "#6b7280", marginBottom: 36 }}>
            Explore the curriculum, find the pathway that fits your context, and start your journey into AI literacy.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <Link
              href="/curriculum"
              style={{
                background: "#2563eb",
                color: "white",
                padding: "14px 28px",
                borderRadius: 10,
                textDecoration: "none",
                fontWeight: 700,
                fontSize: 16,
                display: "inline-block",
              }}
            >
              Explore the Curriculum
            </Link>
            <Link
              href="/#pathways"
              style={{
                border: "2px solid #2563eb",
                color: "#2563eb",
                padding: "14px 28px",
                borderRadius: 10,
                textDecoration: "none",
                fontWeight: 700,
                fontSize: 16,
                display: "inline-block",
              }}
            >
              Find Your Pathway
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
