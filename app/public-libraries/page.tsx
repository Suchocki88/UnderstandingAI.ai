import Link from "next/link";

export const metadata = {
  title: "A Public Library Story | Understanding and Working with AI",
  description:
    "A hypothetical story of how one assistant librarian helped his town understand AI — an illustrated case study of the public library as a place to learn the technology reshaping our world, and to belong.",
};

const FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfmC3t1awl9T0Ed1JZhtW24XEvp0znPoIITpbwcY7WvqYm12Q/viewform?usp=header";

const SERIF = "Georgia, 'Times New Roman', serif";
const INK = "#2e2a26";

const para: React.CSSProperties = {
  fontFamily: SERIF,
  fontSize: "clamp(18px, 2.4vw, 20px)",
  lineHeight: 1.85,
  color: INK,
  margin: "0 0 26px",
};

function Prose({ children }: { children: React.ReactNode }) {
  return <div style={{ maxWidth: 680, margin: "0 auto", padding: "0 24px" }}>{children}</div>;
}

function Figure({ src, alt, caption }: { src: string; alt: string; caption: string }) {
  return (
    <figure style={{ maxWidth: 980, margin: "48px auto", padding: "0 16px" }}>
      <img
        src={src}
        alt={alt}
        style={{ width: "100%", height: "auto", display: "block", borderRadius: 12, boxShadow: "0 18px 44px rgba(46,42,38,0.22)" }}
      />
      <figcaption style={{ fontFamily: "Arial, sans-serif", fontSize: 14, color: "#8a7f73", textAlign: "center", marginTop: 12, fontStyle: "italic" }}>
        {caption}
      </figcaption>
    </figure>
  );
}

function Pull({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ maxWidth: 780, margin: "8px auto 40px", padding: "0 24px" }}>
      <div style={{ borderTop: "2px solid #0f766e", borderBottom: "2px solid #0f766e", padding: "26px 0" }}>
        <p style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: "clamp(22px, 3.4vw, 30px)", lineHeight: 1.4, color: "#0f766e", textAlign: "center", margin: 0 }}>
          {children}
        </p>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif", background: "#faf7f2", color: INK }}>

      {/* HERO */}
      <section style={{ padding: "clamp(56px, 9vw, 88px) 24px clamp(24px, 4vw, 36px)", textAlign: "center" }}>
        <div style={{ maxWidth: 820, margin: "0 auto" }}>
          <p style={{ fontFamily: "Arial, sans-serif", fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2.5, color: "#0f766e", margin: "0 0 20px" }}>
            For Public Libraries · A Case Study
          </p>
          <h1 style={{ fontFamily: SERIF, fontSize: "clamp(34px, 6vw, 58px)", lineHeight: 1.08, margin: "0 0 22px", color: INK, fontWeight: 700 }}>
            Understanding AI, together.
          </h1>
          <p style={{ fontFamily: SERIF, fontSize: "clamp(19px, 2.6vw, 22px)", lineHeight: 1.6, color: "#5c5347", margin: 0, fontStyle: "italic" }}>
            A hypothetical story of how one assistant librarian used a shelf of books to help his town make sense of AI — and found that the
            very technology people feared would isolate them could bring them together instead.
          </p>
        </div>
      </section>

      <Figure
        src="/images/Public01.jpg"
        alt="Rich Richards, an assistant librarian at the Oakwood Public Library, holding Volume 1 of Understanding and Working with AI beside his computational-linguistics notes and a page of program ideas."
        caption="It started with a book — and an idea."
      />

      {/* STORY — PART 1 */}
      <section style={{ padding: "16px 0 8px" }}>
        <Prose>
          <p style={para}>
            Rich Richards is an assistant librarian at the Oakwood Public Library, a position he took after finishing a
            bachelor&apos;s degree in English. He&apos;s making slow but steady progress toward his MLIS, one graduate
            course at a time — and the course he&apos;s in now, computational linguistics, is what introduced him to a
            book. It was called <em>Understanding and Working with AI</em>, and what struck Rich was how far it went:
            not a manual for using a chatbot, but a real education in what AI is and isn&apos;t — what sits under the
            hood, why language models behave as they do, where they fail, and how a person keeps their own judgment
            in charge while working with them. The books also spent real time on best practices: verification,
            iteration, authorship, and how to use AI in writing without letting the machine flatten your voice.
          </p>
          <p style={para}>
            Rich brought the books to the head librarian. She immediately thought of the library&apos;s Thursday writers&apos;
            cafe. &ldquo;They might love this,&rdquo; she said. Rich agreed — up to a point. Writers had particular reasons to be
            interested. They were already experimenting with AI, wondering what was actually happening under the hood,
            and asking how to use it without surrendering the craft that made their work theirs. The cafe might even
            decide to explore the books together in whatever way suited them. But Rich had something broader in mind.
            &ldquo;I&apos;m thinking about everyone else, too,&rdquo; he said. &ldquo;The people who keep hearing about AI at work, in
            school, in the news — and have never had a place to sit down and really understand it.&rdquo;
          </p>
          <p style={para}>
            A recurring class series was not the library&apos;s usual programming model. A one-night presentation was. So
            that was where Rich started. The library scheduled an evening talk: <em>Understanding AI — What&apos;s Under
            the Hood, Why It Matters, and How to Work with It Well.</em> He expected a respectable crowd. Instead, the
            room filled. People came with questions about jobs, school, misinformation, creativity, privacy, and what
            these systems were actually doing when they seemed to think. Along with this graduate-level training, Rich used
            the books as his framework. He showcased an interesting AI experiment: he told the machine to forget their
            discussion until he used the word &ldquo;pickle&rdquo; — and then tried, question after question, to get it
            to remember early. Without revealing the results, he told the crowd that it told him more than he expected. He was also sure to leave plenty of time at the end for questions.
          </p>
          <p style={para}>
            Near the end, a woman in the audience raised her hand. &ldquo;Could we do something like a book club?&rdquo; she
            asked. &ldquo;Not another lecture — a group that actually works through these books and meets to talk about
            them?&rdquo; Rich had not planned for that question. He looked toward the head librarian, who gave him the
            smallest of shrugs. &ldquo;Maybe,&rdquo; he said. &ldquo;If you&apos;d seriously be interested, write down your name and
            contact information before you leave. Let me see what I can put together.&rdquo;
          </p>
          <p style={para}>
            After the room emptied, Rich counted eight names. That was enough to try. The library ordered a lending
            set of <em>Understanding and Working with AI</em>, and Rich reserved one of the conference rooms for Tuesday
            evenings, which was a time that worked for him personally. In his message to the eight participants, he explained that library copies would be available to
            borrow and included a link for anyone who preferred to purchase a copy of their own. Eight chapters suggested
            eight weeks of reading, with a first meeting to get oriented and a final evening to share what people had
            learned and made. What had begun as a one-night library presentation was turning, at the audience&apos;s request,
            into something closer to a book club for understanding AI.
          </p>
        </Prose>
      </section>

      <Figure
        src="/images/Public02.jpg"
        alt="Rich leading the first Tuesday evening discussion, a group of adult learners gathered around a library table beneath a screen reading Understanding and Working with AI: A community learning series."
        caption="The first Tuesday: learning AI together."
      />

      {/* STORY — PART 2 */}
      <section style={{ padding: "8px 0" }}>
        <Prose>
          <p style={para}>
            The eight were a cross-section of the town. A retired accountant who kept reading about AI in the news and
            felt he was falling behind. A high-school teacher unsure what to tell her students. A nurse. A small-business
            owner. A few members of the Thursday writers&apos; cafe, curious both about how the technology actually worked
            and about better ways to use it in their writing. They had different reasons for coming, which turned out to
            be exactly what made the conversation useful. This was not the writers&apos; group with a new topic pasted on.
            It was a general-public learning group in which writers happened to be members of the general public, too.
          </p>
          <p style={para}>
            Rich explained the format that first Tuesday. One chapter a week, read mostly on your own. Each chapter came
            with AI labs — structured experiments run on a real chatbot to see where the technology was brilliant and
            where it quietly fell apart — a field journal to record what you found, and a creative project that let you
            put the ideas into practice. The writers could naturally push deeper into authorship and craft; others might
            write memoir, explore a professional question, or create something they had never tried before. No one had
            to use the program in exactly the same way. The shared chapters simply gave them enough common ground to
            meet every Tuesday and have a real conversation.
          </p>
          <p style={para}>
            &ldquo;And one request,&rdquo; Rich added. &ldquo;Some of you will move faster than others. If you finish a chapter
            early, resist the urge to race ahead. Explore one of the labs more deeply, work on your project, or bring a
            question back for the group. That way we stay close enough together to actually talk when we meet.&rdquo;
          </p>
          <p style={para}>
            The talking was the point, and it surprised him how much of it there was. They compared what their chatbots
            had told them — the confident answers that turned out to be wrong, the flattery, the moments the machine
            handed their own assumptions back to them as fact. The writers were especially interested in the science of why
            the model produced the language it did, and in the huge difference between using AI as a subordinate
            collaborator and letting it become the author. Others brought questions from medicine, teaching, business, and everyday life. Rich broke the
            group into smaller teams so the conversation stayed intimate, and reshuffled the teams every week,
            so that by the end everyone had worked with everyone. The book&apos;s reflection questions were the icebreaker;
            the teams talked, then the whole room talked.
          </p>
          <p style={para}>
            After every two chapters there was an informal unit exam that came with the program. The week before, he&apos;d hand it out to take
            home — on your own, and please, no AI on this one. Then the session would open with each team taking that
            same exam together, followed by discussion. The solo attempt showed them what they knew; the team attempt
            gave them a reason to talk through what they didn&apos;t.
          </p>
          <p style={para}>
            Most of them had computers at home; a few didn&apos;t, and came in to use the library&apos;s. Rich would spot
            them during the day, utterly absorbed, hours vanishing — running one more lab, reading ahead, or deep in the
            literary project the books had led them to. It made him smile at the quiet inversion of it: people once came to the
            library to borrow a story. These folks came to make sense of the strangest new thing in their lives — and some
            stayed to write a story of their own.
          </p>
        </Prose>
      </section>

      <Pull>They came to understand AI. They stayed because of one another.</Pull>

      <section style={{ padding: "0 0 8px" }}>
        <Prose>
          <p style={para}>
            By the fourth or fifth week, Rich noticed something else. They came because Tuesday night had become something they looked
            forward to. They wanted to hear how others were making sense of it all, and to be heard in return. Learning
            together was proving more engaging — and more honest — than puzzling it out alone. They had started to
            become a group.
          </p>
        </Prose>
      </section>

      <Figure
        src="/images/Public03.jpg"
        alt="The final night — a participant standing to read from her work to the group, beneath a screen reading Understanding and Working with AI: The Final Night, Readings and Reflections."
        caption="The final night: readings and reflections."
      />

      {/* STORY — PART 3 */}
      <section style={{ padding: "8px 0" }}>
        <Prose>
          <p style={para}>
            On the last night, the teams reviewed their final exam and then, almost impatiently, turned to the sharing.
            One by one, people described what they&apos;d made and read a passage aloud — each passage now free of any
            telltale AI idioms, rich with the author&apos;s own voice and vision. Some had written short fiction,
            some memoir, one a set of poems, one a screenplay scene, and one an essay on what AI might mean for her own profession. The room leaned
            in. The applause after each was sincere, heartfelt, and earned. Seven of the eight had made it all the way
            through, and on most Tuesdays six or so had filled the room — one or two always away for the evening.
            Ninety minutes disappeared faster than Rich expected; they ran late into the evening, and few minded.
          </p>
          <p style={para}>
            Six to eight, Rich decided, had felt about right — small enough for everyone to be heard, varied enough to
            keep the conversation alive. What he kept turning over instead was the day and the hour. A Tuesday evening
            had worked for these eight, but he thought of the people the slot must have quietly turned away: the parent
            who couldn&apos;t do weeknights, the shift worker, the retiree who&apos;d rather come at ten in the morning.
            Maybe a weekend group next time. Maybe a daytime one. Questions for the next round.
          </p>
          <p style={para}>
            What everyone understood by then was that they didn&apos;t have finished works. They had beginnings — first
            drafts that still needed to cure, still needed human judgment. That was the lesson in miniature: AI could open roads they couldn&apos;t have traveled alone, but it
            couldn&apos;t walk them for them; the tool could lift what they made, but only they could make it theirs. A few had become genuine friends and decided to keep meeting on their own. Rich
            pointed the rest toward the library&apos;s own writing circle as well as FluentVoices.org, where people form online circles to keep learning and creating
            together — the community continuing well past the last session.
          </p>
        </Prose>
      </section>

      <Figure
        src="/images/Public04.jpg"
        alt="Rich alone at night, writing in his field journal after the last session, beside a whiteboard that reads: Real people plus real conversations plus the power of AI equals a more connected community."
        caption="After everyone had gone."
      />

      {/* STORY — PART 4 (reflection) */}
      <section style={{ padding: "8px 0 24px" }}>
        <Prose>
          <p style={para}>
            After they&apos;d gone, Rich sat alone in the library&apos;s classroom with his own field journal — the same
            kind he&apos;d asked all of them to keep — and tried to name what had happened. So much of our technology, he
            wrote, seems to isolate us even as it promises to connect us. And here was AI — the very thing many feared
            would deepen that isolation — doing something like the opposite: not only sharpening what these people
            understood and lifting what they could make, but drawing them together to do it. With the library as the
            third place and the wish to understand as the reason to come, they&apos;d built a small community out of the
            very technology that was supposed to pull them apart.
          </p>
          <p style={{ ...para, fontStyle: "italic" }}>This is not what I expected, he wrote.</p>
          <p style={para}>
            Then he added one more thought. None of it had happened automatically. The books had provided the pathway. AI
            had provided the occasion. But someone still had to give the first talk, listen when an audience member asked
            for more, open the room on Tuesday nights, welcome the strangers, and help them become a group. That had been his part. And the library had done what libraries do at their
            best: given people a place to learn, to create, and to belong.
          </p>
        </Prose>
      </section>

      <Pull>Someone still had to answer the call, open the room, welcome the strangers, and help them become a group.</Pull>

      {/* OUTRO VIDEO */}
      <section style={{ background: "#0f766e", color: "white", padding: "clamp(52px, 8vw, 76px) 24px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontFamily: "Arial, sans-serif", fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: "#99f6e4", margin: "0 0 14px" }}>
            A word from the author
          </p>
          <h2 style={{ fontFamily: SERIF, fontSize: "clamp(26px, 4vw, 38px)", margin: "0 0 28px", color: "white" }}>
            Could this happen at your library?
          </h2>
          <div style={{ maxWidth: 760, margin: "0 auto", borderRadius: 14, overflow: "hidden", boxShadow: "0 20px 50px rgba(0,0,0,0.35)", border: "1px solid rgba(255,255,255,0.15)" }}>
            <iframe
              src="https://players.brightcove.net/2505476419001/ocOFOM0IrR_default/index.html?videoId=6403237298112"
              allowFullScreen
              allow="encrypted-media"
              title="A word from the author — public libraries"
              style={{ width: "100%", aspectRatio: "16 / 9", border: "none", display: "block" }}
            />
          </div>
        </div>
      </section>

      {/* CREDO + GO DEEPER */}
      <section style={{ padding: "clamp(44px, 7vw, 60px) 24px 0" }}>
        <div style={{ maxWidth: 780, margin: "0 auto" }}>
          <div style={{ borderTop: "2px solid #0f766e", borderBottom: "2px solid #0f766e", padding: "30px 24px", textAlign: "center" }}>
            <p style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: "clamp(20px, 3vw, 27px)", lineHeight: 1.45, color: "#0f766e", margin: "0 0 18px" }}>
              &ldquo;Don&apos;t use AI to avoid the road that builds you. Use it to reach roads you couldn&apos;t
              travel before.&rdquo;
            </p>
            <p style={{ fontFamily: "Arial, sans-serif", fontSize: 15, color: "#5c5347", margin: "0 0 18px" }}>
              The idea at the heart of the program — and of the reflection students read before they begin.
            </p>
            <a
              href="https://conceptualacademy.com/sites/default/files/2026-08/WhyWriteWithAI.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontFamily: "Arial, sans-serif", color: "#0f766e", fontWeight: 700, textDecoration: "none", fontSize: 16 }}
            >
              Read &ldquo;Why Write With AI&rdquo; &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* CTA + ORDERING + CROSS-LINK */}
      <section style={{ padding: "clamp(44px, 7vw, 68px) 24px", textAlign: "center" }}>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <h2 style={{ fontFamily: SERIF, fontSize: "clamp(26px, 4vw, 36px)", margin: "0 0 18px", color: INK }}>
            We&apos;re looking for people to explore this with us.
          </h2>
          <p style={{ fontFamily: SERIF, fontSize: "clamp(18px, 2.4vw, 20px)", lineHeight: 1.7, color: "#5c5347", margin: "0 0 30px" }}>
            The story you just read is hypothetical — our best guess at how this might work. How it actually works is
            what we hope to find out, alongside public librarians and community educators willing to try it.
          </p>
          <a
            href={FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "inline-block", background: "#0f766e", color: "white", padding: "15px 32px", borderRadius: 10, textDecoration: "none", fontWeight: 700, fontSize: 17, fontFamily: "Arial, sans-serif" }}
          >
            Get in Touch &rarr;
          </a>

          {/* ORDERING */}
          <div style={{ marginTop: 46, borderTop: "1px solid #e3d9c9", paddingTop: 38 }}>
            <h3 style={{ fontFamily: SERIF, fontSize: "clamp(20px, 3vw, 25px)", color: INK, margin: "0 0 24px" }}>
              Getting the books
            </h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))", gap: 20, textAlign: "left" }}>
              <div style={{ background: "#ffffff", border: "1px solid #e3d9c9", borderRadius: 12, padding: 24 }}>
                <p style={{ fontFamily: "Arial, sans-serif", fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1.5, color: "#0f766e", margin: "0 0 10px" }}>
                  For a library
                </p>
                <p style={{ fontFamily: "Arial, sans-serif", fontSize: 15, lineHeight: 1.6, color: "#5c5347", margin: "0 0 12px" }}>
                  Order a lending set through Ingram Library Services (ipage) — the channel you already use — by ISBN:
                </p>
                <p style={{ fontFamily: "Arial, sans-serif", fontSize: 15, lineHeight: 1.9, color: INK, margin: 0 }}>
                  Vol. 1 &mdash; <strong>979-8-9998297-6-4</strong>
                  <br />
                  Vol. 2 &mdash; <strong>979-8-9998297-7-1</strong>
                </p>
              </div>
              <div style={{ background: "#ffffff", border: "1px solid #e3d9c9", borderRadius: 12, padding: 24 }}>
                <p style={{ fontFamily: "Arial, sans-serif", fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1.5, color: "#0f766e", margin: "0 0 10px" }}>
                  For your own copy
                </p>
                <p style={{ fontFamily: "Arial, sans-serif", fontSize: 15, lineHeight: 1.6, color: "#5c5347", margin: "0 0 14px" }}>
                  Prefer a copy of your own? Order either volume directly:
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <a
                    href="https://shop.ingramspark.com/b/084?params=HYIdgSCn0BEBG6sdzaDavNmzKwzbKq2iEm0iVf7Bvzc"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontFamily: "Arial, sans-serif", color: "#0f766e", fontWeight: 700, textDecoration: "none", fontSize: 15 }}
                  >
                    Buy Volume 1 &rarr;
                  </a>
                  <a
                    href="https://shop.ingramspark.com/b/084?params=KvE5ozT0IsH3MPDfWbMyP3M9EvvOKU5PVrFySqsSJT7"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontFamily: "Arial, sans-serif", color: "#0f766e", fontWeight: 700, textDecoration: "none", fontSize: 15 }}
                  >
                    Buy Volume 2 &rarr;
                  </a>
                </div>
              </div>
            </div>
          </div>

          <p style={{ fontFamily: "Arial, sans-serif", fontSize: 15, color: "#8a7f73", marginTop: 42 }}>
            This story is set in a public library — but much of it applies to school libraries too.{" "}
            <Link href="/librarians" style={{ color: "#0f766e", fontWeight: 700, textDecoration: "none" }}>
              See the school library page &rarr;
            </Link>
          </p>
        </div>
      </section>

    </main>
  );
}
