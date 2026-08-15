import Link from "next/link";

export const metadata = {
  title: "A Public Library Story | Understanding and Working with AI",
  description:
    "How one assistant librarian helped his town understand AI — an illustrated case study of the public library as a place to learn the technology reshaping our world, and to belong.",
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
            How one assistant librarian used a shelf of books to help his town make sense of AI — and found that the
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
            not a manual for using a chatbot, but a real education in what AI is and isn&apos;t — how it works, where it
            fails, what it&apos;s doing to media and politics and the way we come to know things — and how a person keeps
            their own judgment in charge of it. Studying how language models are built by day, he could see exactly why
            the book worked. And he had an idea: what if he led people through it, together?
          </p>
          <p style={para}>
            The book was built for exactly that — independent reading, supported by a weekly gathering. Rich sketched
            out eight weeks for the eight chapters, with two bookends: a first night for introductions and a final night
            to share what people had made. For the book asks every reader to carry a project through to the end — a
            piece of creative work of their own, shaped with the AI but steered by their own voice and judgment — so the
            last night would be a kind of celebration. Nine sessions in all.
          </p>
          <p style={para}>
            He brought the idea to the head librarian. Her first response was the honest one: &ldquo;You know we already
            have a writers&apos; group — the Thursday cafe.&rdquo; And that was the moment Rich understood what he was
            really proposing. &ldquo;It&apos;s not a writing group,&rdquo; he said. &ldquo;It&apos;s a course in
            understanding AI — what it is, how it works, why it matters. The creative project at the end is just how
            people make the learning their own. The cafe is for people who already write. This is for everyone
            who&apos;s been uneasy or curious about AI and has had nowhere to actually learn it.&rdquo; She thought about
            the AI panel the library had hosted a few months back — packed to the walls, and every question left
            half-answered. She gave him a room.
          </p>
          <p style={para}>
            Then Rich did something simple. He hung a banner at the checkout desk and another in the entryway:{" "}
            <em>Understanding AI — a community learning series. No experience required.</em> He left a sign-up sheet with
            a Thursday-evening slot and a note that he&apos;d call once eight people had signed up. The names that came
            weren&apos;t the ones he&apos;d expected. A retired accountant who kept reading about AI in the news and felt
            he was falling behind. A high-school teacher unsure what to tell her students. A nurse. A small-business
            owner. One novelist, yes — but mostly people who had never once thought of themselves as writers, and who
            had every intention of understanding this thing before it understood them. Friends told friends, and he
            closed the list at fourteen.
          </p>
        </Prose>
      </section>

      <Figure
        src="/images/Public02.jpg"
        alt="Rich leading the first evening of the community learning series, a group of adult learners gathered around a library table beneath a screen reading Understanding and Working with AI: A community learning series."
        caption="Week one: strangers around a table."
      />

      {/* STORY — PART 2 */}
      <section style={{ padding: "8px 0" }}>
        <Prose>
          <p style={para}>
            Rich explained the format that first evening. One chapter a week, read on your own. Each chapter came with
            AI labs — structured experiments you ran on a real chatbot to see for yourself where it was brilliant and
            where it quietly fell apart — a field journal to record what you found, and a running project of your own.
            They would meet nine times: that night&apos;s orientation, seven weekly sessions, and a final evening to
            share what they had made.
          </p>
          <p style={para}>
            &ldquo;And one request,&rdquo; Rich added. &ldquo;Some of you will move faster than others. If you finish a
            chapter early, resist the urge to race ahead — put that energy into your project instead. That way we stay
            close enough together to actually talk when we meet.&rdquo;
          </p>
          <p style={para}>
            The talking was the point, and it surprised him how much of it there was. They compared what their chatbots
            had told them — the confident answers that turned out to be wrong, the flattery, the moments the machine
            handed their own assumptions back to them as fact. Rich broke the group into teams of three or four so the
            conversation stayed intimate, and reshuffled the teams every week, so that by the end everyone had worked
            with everyone. The book&apos;s reflection questions were the icebreaker; the teams talked, then the whole
            room talked.
          </p>
          <p style={para}>
            After every two chapters there was an informal unit exam. The week before, he&apos;d hand it out to take
            home — on your own, and please, no AI on this one. Then the session would open with each team taking that
            same exam together, followed by discussion. The solo attempt showed them what they knew; the team attempt
            gave them a reason to talk through what they didn&apos;t.
          </p>
          <p style={para}>
            Most of them had computers at home; a few didn&apos;t, and came in to use the library&apos;s. Rich would
            spot them during the day, utterly absorbed, hours vanishing — running one more lab, or deep in the creative
            project the book had led them to. It made him smile at the quiet inversion of it: people once came to the
            library to borrow a story. These came to make sense of the strangest new thing in their lives — and stayed
            to write one of their own.
          </p>
        </Prose>
      </section>

      <Pull>They came to understand AI. They stayed because of one another.</Pull>

      <section style={{ padding: "0 0 8px" }}>
        <Prose>
          <p style={para}>
            By the fourth or fifth week, Rich noticed something else. People weren&apos;t coming because they had to —
            no grades, no credits, nothing at stake. They came because Thursday night had become something they looked
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
            One by one, people described what they&apos;d made and read a passage aloud. Some had written short fiction,
            some memoir, one a set of poems, one an essay on what AI might mean for her own profession. The room leaned
            in. The applause after each was sincere, heartfelt, and earned. Rich&apos;s only regret was arithmetic —
            twelve had made it all the way through, and ninety minutes left them barely enough time. They ran late into
            the evening, and few minded. But he noted it in the margin: next time, smaller.
          </p>
          <p style={para}>
            What everyone understood by then was that they didn&apos;t have finished works. They had beginnings — first
            drafts that still needed to cure, still needed human judgment, still needed the AI&apos;s borrowed idioms
            sanded away by a real hand. That was the lesson in miniature: the tool could lift what they made, but only
            they could make it theirs. A few had become genuine friends and decided to keep meeting on their own. Rich
            pointed the rest toward FluentVoices.org, where people form online circles to keep learning and creating
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
            Then he added one more thought. None of it had happened automatically. The book had provided the pathway. AI
            had provided the occasion. But someone still had to put up the sign, open the room, welcome the strangers,
            and help them become a group. That had been his part. And the library had done what libraries do at their
            best: given people a place to learn, to create, and to belong.
          </p>
        </Prose>
      </section>

      <Pull>Someone still had to put up the sign, open the room, welcome the strangers, and help them become a group.</Pull>

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

      {/* CTA + CROSS-LINK */}
      <section style={{ padding: "clamp(52px, 8vw, 76px) 24px", textAlign: "center" }}>
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
            Get in Touch →
          </a>
          <p style={{ fontFamily: "Arial, sans-serif", fontSize: 15, color: "#8a7f73", marginTop: 34 }}>
            This story is set in a public library — but much of it applies to school libraries too.{" "}
            <Link href="/librarians" style={{ color: "#0f766e", fontWeight: 700, textDecoration: "none" }}>
              See the school library page →
            </Link>
          </p>
        </div>
      </section>

    </main>
  );
}
