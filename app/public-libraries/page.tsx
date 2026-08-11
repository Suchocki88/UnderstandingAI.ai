import Link from "next/link";

export const metadata = {
  title: "A Public Library Story | Understanding and Working with AI",
  description:
    "How one assistant librarian turned a shelf of books into a community — an illustrated case study of the library as a third place for AI education and human connection.",
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
            Come to the library to write a novel.
          </h1>
          <p style={{ fontFamily: SERIF, fontSize: "clamp(19px, 2.6vw, 22px)", lineHeight: 1.6, color: "#5c5347", margin: 0, fontStyle: "italic" }}>
            How one assistant librarian turned a shelf of books into a community — and found that AI, of all things,
            could bring people together rather than pull them apart.
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
            course at a time — and the course he&apos;s in now, computational linguistics, is the one that introduced
            him to a book. It was called <em>Understanding and Working with AI</em>, and what struck Rich was that it
            didn&apos;t stop at AI literacy; it offered an ordinary reader a genuine pathway to AI fluency. Studying how
            language models are built by day, he could see exactly why the book worked. And he had an idea: what if he
            led people through it, together?
          </p>
          <p style={para}>
            The program was designed for precisely that — independent reading, supported by a weekly gathering. Rich
            sketched out eight weeks for the eight chapters, with two bookends: a first night for introductions, and a
            final night for a celebration where people would read from the creative work the book had guided them to
            write. Nine sessions in all.
          </p>
          <p style={para}>
            For this first cohort, Rich decided to keep things simple and open registration to adults eighteen and
            older. A public library serves everyone, but for this first experiment Rich thought the program would be
            cleaner — and frankly richer — if he kept the cohort to adults.
          </p>
          <p style={para}>
            He brought the idea to the head librarian, who liked it and assigned him a room. Then Rich did something
            rather simple. He hung a banner at the checkout desk and another in the entryway:{" "}
            <em>Learn to Write a Novel — and More — Using AI.</em> He left a sign-up sheet at the front desk with a
            Thursday evening slot and a note that he&apos;d call once eight people had signed up. Within a week he was
            leaving voice messages that the program would begin the following Thursday. Friends told friends, a few
            more names appeared, and he eventually closed the list at fourteen.
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
            Rich explained the format that first evening. There were eight chapters in the program and eight weeks of
            study. Participants would read approximately one chapter each week on their own, conduct the AI labs, make
            entries in their field journals, and work on their creative projects. They would meet nine times
            altogether: that night&apos;s orientation, seven more weekly meetings as they progressed through the books,
            and a final evening devoted largely to sharing what they had created.
          </p>
          <p style={para}>
            &ldquo;And one request,&rdquo; Rich added. &ldquo;Some of you are going to move faster than others. If you
            finish a chapter early, please resist the temptation to race ahead. Instead, put that extra energy into
            your literary project. That way we&apos;ll stay reasonably close together and have more to talk about when
            we meet.&rdquo;
          </p>
          <p style={para}>
            Over the course of the program, people overwhelmingly wanted to talk about their writing projects — but
            they were happy to warm up first with the book&apos;s reflection questions. Rich broke the group into teams
            of three or four so the conversation stayed intimate, and reshuffled the teams every week, so that by the
            end everyone had worked with everyone. The reflection questions were the icebreaker; teams talked, then the
            whole room talked.
          </p>
          <p style={para}>
            After every two chapters there was an informal unit exam. The week before, he&apos;d hand it out to take
            home — on your own, and please, no AI on this one. Then class would open with each team taking that same
            exam together, followed by discussion. The individual attempt showed them what they knew; the team attempt
            gave them a reason to talk through what they didn&apos;t.
          </p>
          <p style={para}>
            Most of his participants had computers with good internet at home. A few didn&apos;t, and came in to use
            the library&apos;s — and during the day Rich would spot them there, utterly ensconced, hours vanishing. He
            assumed research, until he realized they were deep inside their own novels. It made him smile at the quiet
            inversion of it: people once came to the library to find a novel to read. Now they were coming to the
            library to write one.
          </p>
        </Prose>
      </section>

      <Pull>People once came to the library to find a novel to read. Now they came to write one.</Pull>

      <section style={{ padding: "0 0 8px" }}>
        <Prose>
          <p style={para}>
            By the fourth or fifth week, Rich noticed something else. People weren&apos;t coming because they had to.
            There were no grades, no attendance requirements, no credits at stake. They came because Thursday night had
            become something they looked forward to. They wanted to hear other people&apos;s perspectives and share
            their own. Learning together was proving more engaging — and often more effective — than working alone.
            They wanted to hear how the literary works of others were progressing. They had started to become a group.
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
            On the last night, the teams reviewed their final exam and then, almost impatiently, turned to the
            readings. One by one, people stood, described what they&apos;d made, and read a passage aloud. Included
            were novels, autobiographies, screenplays, and poetry collections. The room leaned in. The applause after
            each presentation was sincere, heartfelt, and earned. Rich&apos;s only regret was arithmetic — twelve had
            made it all the way through, and ninety minutes left them each barely enough time. They went later into the
            evening and few cared. But he noted it in the margin: next time, smaller.
          </p>
          <p style={para}>
            What everyone understood by then was that they didn&apos;t have finished literary works. They had
            beginnings — first drafts that still needed to cure, needed human judgment, needed the AI&apos;s idioms
            sanded away by a real hand. A few had become genuine friends and decided to keep meeting on their own, in
            what they&apos;d taken to calling a writing circle. Rich pointed the rest toward FluentVoices.org, where
            adult writers form online circles around exactly this — the community continuing well past the last
            session.
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
            After they&apos;d gone, Rich sat alone in the library&apos;s classroom with his own field journal — the
            same kind he&apos;d asked all of them to keep — and tried to name what had happened. So much of our
            technology, he wrote, seems to be isolating us even as it promises to connect us. And here was AI, the very
            technology many feared would deepen that isolation, doing something like the opposite: not only lifting
            what these people could make, but drawing them together to make it. With the library as the third place and
            the writing as the reason to come, they&apos;d built a small community out of the very thing that was
            supposed to pull them apart.
          </p>
          <p style={{ ...para, fontStyle: "italic" }}>This is not what I expected, he wrote.</p>
          <p style={para}>
            Then he added one more thought. None of it had happened automatically. The books had provided the pathway.
            AI had provided the catalyst. But someone still had to put up the sign, open the room, welcome the
            strangers, and help them become a group. That had been his part. And the library had done what libraries do
            at their best: provided a third place where people could learn, create, and belong.
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
          {/* Replace VIDEO_ID below with your public-library outro Brightcove video ID.
              If the outro video isn't ready yet, you can delete this <div> and the page still reads cleanly. */}
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
