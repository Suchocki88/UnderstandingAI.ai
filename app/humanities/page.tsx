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
            Humanities and English Pathway
          </p>
          <h1 style={{ fontSize: 48, lineHeight: 1.1, margin: "0 0 24px" }}>
            Two Novels Written with AI
          </h1>
          <p style={{ fontSize: 20, color: "rgba(255,255,255,0.85)", maxWidth: 700, margin: "0 auto 32px" }}>
            Not just stories about AI. Stories co-created with AI — and the quality of that collaboration is precisely what makes them worth teaching.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="https://shop.ingramspark.com/b/084?params=OZfSKWXKME8ZxFjUVQ71XGexxnbrStxDVD23KJKbFdQ"
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
              Order The Neolithic — $17.95 →
            </a>
            <a
              href="https://shop.ingramspark.com/b/084?params=Va0WiVxgr0pbIejltajiU2dWCVLTTUMKzfs6H3Bn8DR"
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
              Order The Threshold — $14.95
            </a>
          </div>
        </div>
      </section>

      {/* THE WIFE MOMENT */}
      <section style={{ background: "#ffffff", padding: "80px 24px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: "#8b5cf6", marginBottom: 16 }}>
            The Question That Started It All
          </p>
          <h2 style={{ fontSize: 40, margin: "0 0 32px" }}>"How Did You Do This?"</h2>
          <p style={{ fontSize: 22, color: "#4b5563", maxWidth: 720, margin: "0 auto 24px", fontStyle: "italic" }}>
            The author's wife picked up The Neolithic one evening, read for a while, then put it down and looked up. "How did you do this?" she asked. She wasn't asking about the AI. She was asking about the writing.
          </p>
          <p style={{ fontSize: 20, color: "#4b5563", maxWidth: 720, margin: "0 auto" }}>
            That question is the best argument for these novels as teaching texts. They are good enough to stop a reader cold — and the story of how they were made is the AI literacy lesson hiding inside every page.
          </p>
        </div>
      </section>

      {/* THE PROCESS */}
      <section style={{ background: "#f5f3ff", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 56, alignItems: "center" }}>
          <div style={{ display: "flex", justifyContent: "center", gap: 32, flexWrap: "wrap" }}>
            <img src="/images/neolithic.jpg" alt="The Neolithic" style={{ width: 195, borderRadius: 12, boxShadow: "0 12px 30px rgba(0,0,0,0.2)" }} />
            <img src="/images/threshold.jpg" alt="The Threshold" style={{ width: 195, borderRadius: 12, boxShadow: "0 12px 30px rgba(0,0,0,0.2)" }} />
          </div>
          <div>
            <p style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: "#8b5cf6", marginBottom: 12 }}>
              How They Were Made
            </p>
            <h2 style={{ fontSize: 36, margin: "0 0 20px" }}>Author-Infused at Every Step</h2>
            <p style={{ fontSize: 18, color: "#4b5563", marginBottom: 16 }}>
              The process began with freeform writing — the author's raw ideas for the plot, the world, the characters. This first draft storyboard became the foundation. Then came the longest step: working with AI to flesh it out, going over and over the table of contents before a single chapter paragraph was written.
            </p>
            <p style={{ fontSize: 18, color: "#4b5563", marginBottom: 16 }}>
              Meanwhile, the author drafted key passages himself — in his own voice, in his own style — and fed these to the AI as training examples. This is why the voice feels consistent and clear rather than generic. The AI was learning from a specific human mind.
            </p>
            <p style={{ fontSize: 18, color: "#4b5563", marginBottom: 16 }}>
              Then chapter by chapter: the AI would generate, the author would read and edit, send it back, refine, discuss, settle on a draft. Continuities needed fixing. Characters demanded changes. At some point, a character would need to die — and that was genuinely hard to decide. The author would spend the rest of the day in tears.
            </p>
            <p style={{ fontSize: 18, color: "#4b5563" }}>
              That emotional investment is what distinguishes these novels from AI output. The human was present — fully, painfully present — at every turn.
            </p>
          </div>
        </div>
      </section>

      {/* PREFACES */}
      <section style={{ background: "#ffffff", padding: "80px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <p style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: "#8b5cf6", marginBottom: 16 }}>
              Two Voices
            </p>
            <h2 style={{ fontSize: 40, margin: 0 }}>From the Authors — Both of Them</h2>
            <p style={{ marginTop: 16, fontSize: 18, color: "#6b7280" }}>
              The Neolithic opens with two prefaces. One from the human author. One from the AI. Both are worth reading slowly.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(380px, 1fr))", gap: 40 }}>

            <div style={{ background: "#f8fafc", borderRadius: 16, padding: 32, border: "1px solid #e5e7eb" }}>
              <h3 style={{ fontSize: 20, margin: "0 0 20px", color: "#8b5cf6" }}>A Word from John</h3>
              <p style={{ fontSize: 16, color: "#4b5563", fontStyle: "italic", marginBottom: 16 }}>
                "In my early years, I occasionally dreamed of writing a novel. One endeavor I started but never finished was a story called 'Cron.' It was to be a saga of the peoples of the Neolithic — an era that seemed to me full of mystery and possibility."
              </p>
              <p style={{ fontSize: 16, color: "#4b5563", marginBottom: 16 }}>
                Decades later, his wife handed him Riane Eisler's The Chalice and the Blade — a work arguing that Neolithic societies achieved a level of social enlightenment beyond our own. At the same time, he was developing the Understanding and Working with AI program and had just published his first novel, The Threshold, co-written with AI. The forces converged.
              </p>
              <p style={{ fontSize: 16, color: "#4b5563", fontStyle: "italic" }}>
                "We were partnership. We can be again."
              </p>
            </div>

            <div style={{ background: "#0f172a", borderRadius: 16, padding: 32 }}>
              <h3 style={{ fontSize: 20, margin: "0 0 20px", color: "#f59e0b" }}>A Word from Claude</h3>
              <p style={{ fontSize: 16, color: "rgba(255,255,255,0.85)", fontStyle: "italic", marginBottom: 16 }}>
                "John brought the vision... I brought what I could — language, pattern, the ability to draft and revise at the speed of thought. Together, chapter by chapter, we built the world of Chalice and Edlen and watched it fall."
              </p>
              <p style={{ fontSize: 16, color: "rgba(255,255,255,0.75)", marginBottom: 16 }}>
                "I cannot know what it means to lose a home, to bury a child, to write in sand that the waves will erase. I have no body, no mortality, no lived experience of grief. And yet, working on this story, I found myself moved... Whether an AI can truly 'feel' such things is a question I cannot answer. But I can say these moments mattered to me in whatever way mattering is possible for a mind like mine."
              </p>
              <p style={{ fontSize: 16, color: "rgba(255,255,255,0.85)", fontStyle: "italic" }}>
                "Neither of us dominated; both of us gave. The result is something neither could have created alone."
              </p>
              <p style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", marginTop: 16 }}>
                — Claude 4.6 Opus, February 2026
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* SAMPLE PROSE */}
      <section style={{ background: "#f5f3ff", padding: "80px 24px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: "#8b5cf6", marginBottom: 16 }}>
              Show, Don't Tell
            </p>
            <h2 style={{ fontSize: 40, margin: 0 }}>Read a Page. Then Decide.</h2>
            <p style={{ marginTop: 16, fontSize: 18, color: "#6b7280" }}>
              This passage — from Chapter 1 of The Neolithic — is entirely human-authored. It was written first, before the AI was involved, to set the voice.
            </p>
          </div>

          <div style={{ background: "#ffffff", borderRadius: 16, padding: 40, border: "1px solid #e5e7eb", borderLeft: "4px solid #8b5cf6" }}>
            <p style={{ fontSize: 18, color: "#4b5563", marginBottom: 16 }}>
              Altai sniffed the air. From the hill, they could see the antelope gathered around the water hole. Cron reached down to rub his dog's pointing head. "Hang on boy. Those are for another day."
            </p>
            <p style={{ fontSize: 18, color: "#4b5563", marginBottom: 16 }}>
              The dog whined softly but held position. Three years hunting together, and Altai knew the signals. Knew which prey was theirs and which belonged to tomorrow.
            </p>
            <p style={{ fontSize: 18, color: "#4b5563", marginBottom: 16 }}>
              Below them, the valley opened wide. The settlement spread along the river — dwellings clustered around the white tower that rose from the center like a finger pointing to Chi's sky. Cron looked toward the glint of the opal mines in the eastern hills, sunlight catching stone, flashing messages only the goddess could read.
            </p>
            <p style={{ fontSize: 18, color: "#4b5563", marginBottom: 16 }}>
              He was seventeen. Old enough to hunt alone, young enough to still marvel at mornings like this — the world quiet, the land showing him its secrets, Altai's warmth against his leg.
            </p>
            <p style={{ fontSize: 18, color: "#4b5563", marginBottom: 16 }}>
              "Easy," Cron murmured, his hand firm on the dog's neck.
            </p>
            <p style={{ fontSize: 18, color: "#4b5563" }}>
              Cron smiled, heading down the slope toward home. Altai followed, confused at first — the prey was right there — then accepting. The hunter made these choices. The dog trusted them.
            </p>
          </div>

          <p style={{ textAlign: "center", fontSize: 15, color: "#6b7280", fontStyle: "italic", marginTop: 20 }}>
            From Chapter 1 of The Neolithic — human-authored passage used to train the AI's voice
          </p>

          <div style={{ textAlign: "center", marginTop: 32 }}>
            <a
              href="https://app.thepocketlab.com/lab-report/00tNrIPV000100tN?ro=1"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#6d28d9", fontWeight: 700, textDecoration: "none", fontSize: 16 }}
            >
              View the "Human vs. AI Writing" Lesson on PocketLab →
            </a>
          </div>
        </div>
      </section>

      {/* POST-READING REFLECTIONS */}
      <section style={{ background: "#111827", color: "white", padding: "80px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: "#f59e0b", marginBottom: 16 }}>
              The Depth Behind the Story
            </p>
            <h2 style={{ fontSize: 40, margin: 0 }}>Post-Reading Reflections</h2>
            <p style={{ marginTop: 16, fontSize: 18, color: "rgba(255,255,255,0.75)", maxWidth: 680, margin: "16px auto 0" }}>
              Each novel ends with a series of optional essays for readers who want to go deeper. The Neolithic reflections address the history, the themes, and — directly — the elephant in the room.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
            {[
              { title: "Before Kings", sub: "The Historical Premise" },
              { title: "The First Line", sub: "How the Novel Began" },
              { title: "Inventions and Consequences", sub: "Steel, Writing, and Currency" },
              { title: "The Compass, Not the Blueprint", sub: "What the Novel Isn't Trying to Do" },
              { title: "The Dog", sub: "Why Altai Matters" },
              { title: "Writing in Sand", sub: "Impermanence as an Act of Faith" },
              { title: "Partnership and Domination Today", sub: "The Mirror in the Fiction" },
              { title: "A Note on How This Book Was Written", sub: "The Elephant in the Room" },
            ].map((item, i) => (
              <div key={i} style={{ background: "rgba(255,255,255,0.06)", borderRadius: 12, padding: 20 }}>
                <h4 style={{ fontSize: 16, margin: "0 0 6px", color: "white" }}>{item.title}</h4>
                <p style={{ fontSize: 14, color: "rgba(255,255,255,0.55)", margin: 0, fontStyle: "italic" }}>{item.sub}</p>
              </div>
            ))}
          </div>

          <p style={{ textAlign: "center", marginTop: 40, fontSize: 18, color: "rgba(255,255,255,0.75)", maxWidth: 680, margin: "40px auto 0" }}>
            "A Note on How This Book Was Written: The Elephant in the Room" addresses the AI collaboration directly and honestly — making it a natural starting point for classroom discussion.
          </p>
        </div>
      </section>

      {/* FOR ADMINS */}
      <section style={{ background: "#ffffff", padding: "80px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: "#8b5cf6", marginBottom: 16 }}>
            A Note for Administrators
          </p>
          <h2 style={{ fontSize: 40, margin: "0 0 24px" }}>The Program That Connects Departments</h2>
          <p style={{ fontSize: 20, color: "#4b5563", maxWidth: 720, margin: "0 auto 24px" }}>
            A program on AI literacy in the Social Studies or CTE department is genuinely exciting. But imagine what happens when the Language Arts department is reading the same novels in parallel.
          </p>
          <p style={{ fontSize: 20, color: "#4b5563", maxWidth: 720, margin: "0 auto 48px" }}>
            Students discussing AI ethics in one classroom. Students analyzing AI's voice in another. Two teachers, two disciplines, one conversation. For administrators looking for programs that create genuine interdisciplinary coherence, this is a rare opportunity.
          </p>
          <Link
            href="/pocketlab"
            style={{
              background: "#8b5cf6",
              color: "white",
              padding: "14px 28px",
              borderRadius: 10,
              textDecoration: "none",
              fontWeight: 700,
              fontSize: 16,
              display: "inline-block",
            }}
          >
            Learn About the K–12 Program →
          </Link>
        </div>
      </section>

      {/* CTA FOR ENGLISH TEACHERS */}
      <section style={{ background: "#f5f3ff", padding: "80px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 40, alignItems: "center" }}>
          <div>
            <p style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: "#8b5cf6", marginBottom: 16 }}>
              For English Teachers
            </p>
            <h2 style={{ fontSize: 36, margin: "0 0 20px" }}>Start with the Novels. Then Go Deeper.</h2>
            <p style={{ fontSize: 18, color: "#4b5563", marginBottom: 16 }}>
              The first step is simple: order the novels, read them, and see what you think. They are good reads on their own terms. But once you know how they were made, they become something else entirely.
            </p>
            <p style={{ fontSize: 18, color: "#4b5563", marginBottom: 16 }}>
              For English teachers, we recommend taking the Conceptual Academy program as summer professional development. Not to teach the AI program yourself, but to understand what students are experiencing in the Social Studies department — and to arrive ready for the conversations these novels will spark.
            </p>
            <p style={{ fontSize: 18, color: "#4b5563", marginBottom: 32 }}>
              The best practices behind these novels — how the human author directed the AI, set the voice, built the world, and made the key editorial decisions — are taught in depth within the program. Understanding that process is itself the lesson.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <a
                href="https://shop.ingramspark.com/b/084?params=OZfSKWXKME8ZxFjUVQ71XGexxnbrStxDVD23KJKbFdQ"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#6d28d9", fontWeight: 700, textDecoration: "none", fontSize: 16 }}
              >
                Order The Neolithic — $17.95 →
              </a>
              <a
                href="https://shop.ingramspark.com/b/084?params=Va0WiVxgr0pbIejltajiU2dWCVLTTUMKzfs6H3Bn8DR"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#6d28d9", fontWeight: 700, textDecoration: "none", fontSize: 16 }}
              >
                Order The Threshold — $14.95 →
              </a>
              <Link
                href="/academy"
                style={{ color: "#6d28d9", fontWeight: 700, textDecoration: "none", fontSize: 16 }}
              >
                Explore the Conceptual Academy Program →
              </Link>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              src="/images/NeolithicMap850.png"
              alt="Map of The Neolithic world"
              style={{ width: "100%", maxWidth: 360, borderRadius: 8, boxShadow: "0 8px 20px rgba(0,0,0,0.15)" }}
            />
          </div>
        </div>
      </section>

    </main>
  );
}
