export const metadata = {
  title: "Honest Questions | Understanding and Working with AI",
  description:
    "The objections we hear most — about AI, about this program, and about whether any of it should exist. Answered straight, without the spin.",
};

const FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfmC3t1awl9T0Ed1JZhtW24XEvp0znPoIITpbwcY7WvqYm12Q/viewform?usp=header";

const faqs: { q: string; a: string }[] = [
  {
    q: "Isn't this just learning how to use a chatbot?",
    a: `Learning how to operate a chatbot takes about five minutes, and plenty of what's sold as "AI literacy" really is just that, dressed up. But operating it and working well with it are different skills, the way steering a car and driving one are different. The hard part was never the interface. It's the judgment: when to trust it and when to verify, how to tell fluent nonsense from fluent truth, how to catch it flattering you or handing your own assumptions back as conclusions — and why the output stays bland until your voice is inserted. Working with a chatbot well requires critical thinking, source evaluation, and craft. These are skills external to the chatbot.`,
  },
  {
    q: "Can't we just learn as we go? Why do we need a course?",
    a: `For most tools, learning as you go is exactly right — nobody needs a course to use a web browser, because the browser tells you when you're wrong: a dead link throws an error; a page loads or it doesn't. AI doesn't correct you reliably. It can deliver a false answer in the same fluent, confident voice it uses for a true answer. A course isn't there to teach the buttons. It's there to build the judgment necessary before any buttons get pressed.`,
  },
  {
    q: "But won't lots of use eventually make me an expert?",
    a: `Using AI a lot will certainly make you experienced at using AI — but experience and expertise aren't the same thing. Practice only teaches when the feedback is reliable: miss a note at the piano and you hear it; swing and miss the baseball and you know it. AI can reward a poor question with a wonderfully convincing answer, so without an outside reference point you get faster and more confident without necessarily becoming more discerning. And if AI is your only guide, you're learning about AI from AI — a system that can reassure you when it shouldn't, flatter you, and leave its own blind spots invisible.`,
  },
  {
    q: "Won't better, more accurate AI make all this unnecessary?",
    a: `In some ways, better AI certainly lowers the risk — and the models really are improving. But there's a paradox: the better AI gets, the harder its remaining mistakes can be to catch. A clumsy error you'd spot in a second. A subtle, expert-sounding answer that's 98% right is far harder to question, because everything about it gives you reason to trust it. And accuracy isn't the only challenge: AI can still flatter you, reinforce your assumptions, or confidently follow you in the wrong direction. So better AI doesn't make human judgment less important. In some ways, it makes it more important. The sharper the tool, the sharper the person has to be to stay in charge of it.`,
  },
  {
    q: "Why trust a book or course about AI when AI changes so quickly?",
    a: `An effective AI-Ed program is not built around today's interface, model rankings, or prompt tricks — all of which change all too fast. An effective AI-Ed program is built around the judgment one needs regardless of the latest tools. By parallel, Driver's Ed remains valuable regardless of the latest automotive technology. And because an effective AI-Ed program is built around judgment, that makes it amenable to a print format, which with today's print technology can be updated regularly as needed.`,
  },
  {
    q: "Should students be using AI at all — won't teaching it just encourage more of it?",
    a: `Possibly, and we take that seriously. But our goal isn't maximum AI use; it's appropriate use. There are things students need to learn to do without AI at all — think, write, struggle productively through a hard problem — precisely so they have something of their own to bring to AI later. Real fluency includes knowing when to close the laptop: protecting your attention, matching the tool to the stakes, recognizing when you're better off without it. A program that only ever said "use more AI" would be part of the problem it claims to solve.`,
  },
  {
    q: "Isn't AI going to make students worse thinkers and writers?",
    a: `It can. Give AI the thinking before you've done any yourself, and you've just outsourced the very exercise that was supposed to make you better at thinking. Ask it for a first draft every time you face a blank page, and eventually the blank page becomes something you don't know how to face alone. That's a real danger. But it's also an argument for AI education, not against it. Students need to learn the difference between using AI to extend their thinking and using it to replace their thinking. Sometimes the right sequence is: struggle first, form your own view, then bring in AI to challenge, test, or extend it. The goal isn't to make thinking easier. It's to help students become better thinkers with and without AI.`,
  },
];

export default function Page() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif", color: "#1f2937", background: "#ffffff" }}>
      <style>{`
        .faq-item { border-bottom: 1px solid #e5e7eb; }
        .faq-item:first-of-type { border-top: 1px solid #e5e7eb; }
        .faq-item summary {
          list-style: none;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 20px;
          padding: 24px 4px;
          font-size: 19px;
          font-weight: 700;
          color: #111827;
          line-height: 1.4;
        }
        .faq-item summary::-webkit-details-marker { display: none; }
        .faq-item summary::after {
          content: "+";
          color: #b45309;
          font-size: 28px;
          font-weight: 400;
          line-height: 0.9;
          flex-shrink: 0;
        }
        .faq-item[open] summary::after { content: "\u2212"; }
        .faq-item summary:hover { color: #b45309; }
        .faq-answer {
          padding: 0 4px 28px;
          font-size: 17px;
          line-height: 1.75;
          color: #4b5563;
          max-width: 680px;
        }
      `}</style>

      {/* HEADER */}
      <section style={{ padding: "clamp(56px, 9vw, 88px) 24px clamp(18px, 3vw, 30px)", textAlign: "center" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <p style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: "#b45309", margin: "0 0 16px" }}>
            Frequently Asked Honest Questions
          </p>
          <h1 style={{ fontSize: "clamp(34px, 6vw, 52px)", lineHeight: 1.1, margin: "0 0 20px", color: "#111827" }}>
            Honest Questions
          </h1>
          <p style={{ fontSize: 19, color: "#4b5563", lineHeight: 1.6, margin: 0 }}>
            The objections we hear most — about AI, about this program, and about whether any of it should exist.
            Answered straight, without the spin.
          </p>
        </div>
      </section>

      {/* ACCORDION */}
      <section style={{ padding: "clamp(18px, 3vw, 30px) 24px clamp(56px, 9vw, 80px)" }}>
        <div style={{ maxWidth: 780, margin: "0 auto" }}>
          {faqs.map((f, i) => (
            <details key={i} className="faq-item">
              <summary>{f.q}</summary>
              <div className="faq-answer">{f.a}</div>
            </details>
          ))}
          <p style={{ marginTop: 44, textAlign: "center", fontSize: 16, color: "#6b7280" }}>
            Have a question we haven&apos;t answered?{" "}
            <a href={FORM_URL} target="_blank" rel="noopener noreferrer" style={{ color: "#b45309", fontWeight: 700, textDecoration: "none" }}>
              Ask us →
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
