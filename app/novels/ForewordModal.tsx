"use client";

import { useEffect, useState, type CSSProperties } from "react";

const FOREWORD: string[] = [
  "We have been told that there is essentially one story worth telling, whether it is in old or new celluloid epics: the story of the hero.",
  "Joseph Campbell mapped this territory, identifying the recurring mythic patterns that surface across cultures and centuries — the call to adventure, the ordeal, the return. Twelve story types, each a variation on a theme. And yet, when we look closely at these archetypes, something important becomes visible: they are all, without exception, rooted in a dominator worldview. The hero is singular. The hero conquers. The hero — almost always male and violent — defeats the monster, claims the prize, and returns in triumph. The story of the many working together, the story of the collective, the story of partnership — these have no place in Campbell's map.",
  "This is not Campbell's unique failure; it is a reflection of the world that produced him and the stories he studied.",
  "Consider Homer's epics — the Iliad and the Odyssey — among the foundational texts of Western civilization. We read them as timeless. But they are not timeless. They are documents of a particular historical moment: the consolidation of dominator culture over the ruins of something older and more fully human.",
  "Look carefully at the Odyssey and you will find, embedded within it like fossils in stone, traces of an earlier world. The Sirens, Charybdis, Calypso, Circe — these \u201cmonstrous\u201d females that the hero must outwit or escape — were once, in an earlier telling, something else entirely. They were not monstrous; they were not, like Calypso and Circe, sexual objects for the male hero to conquer and manipulate. They are the remnants of the Goddess tradition, of a time when the feminine was sacred, when power meant nurture rather than domination. The hero's triumph over them is not merely a narrative device. It is a cultural statement: the old world of partnership is being defeated. The new order of domination is being born.",
  "My life's work, beginning with The Chalice and the Blade, has been to recover what was lost in that cultural transformation — to show, through archaeology, myths, and DNA studies, that the domination model is not the inevitable expression of human nature. It is actually a relatively recent cultural choice. For thousands of years before the Kurgan invasions, partnership-oriented societies flourished across Old Europe and the Near East, even, as The Chalice and the Blade in Chinese Culture by Chinese scholars shows, and a recent archaeological find in China also indicates, in Asia. These were not utopias, but they were organized around empathy rather than fear, around the power to create rather than the power to destroy.",
  "Fiction, however, does something scholarship cannot. It makes the past breathe.",
  "When John sent me The Neolithic, what struck me first and deeply was what was absent: the hero. In his place — four young people, coming of age together, each remarkable in their own way. Cron, a male and natural leader. Treen, a fierce and strong woman. Kaine, the craftsman whose hands know both blade and tenderness. Lyler, a woman who is a quiet genius discovering that sounds can be captured — that memory itself can be made permanent. No one of them could survive what they face alone. No one of them tries to. The real hero of this novel is their partnership — the web of trust, complementary strength, and mutual care that holds them together as the world they love falls apart — and the partnership-oriented communities we read about along the way.",
  "This is not a story Campbell mapped. But it is a story our world desperately needs.",
  "In my work on caring economics — The Real Wealth of Nations — I have argued that our greatest failure as a civilization is the systematic devaluing of care: the work of the household, the labor of volunteers, the gifts of the natural world. These are not peripheral to economic life as we have been led to believe. They are its foundation. A society that cannot see this, that measures wealth only in transactions between dominant actors, is a society operating with a profoundly incomplete picture of reality.",
  "The Neolithic offers a more complete picture. It shows us what a caring society looks like from the inside — not as an abstraction, but as a lived experience. It shows us what was lost. And in showing us what was lost, it opens the possibility of imagining what type of social organization we can build.",
  "That this novel was developed in collaboration with artificial intelligence, and that it now forms the heart of a high school curriculum designed to teach young people both the history of partnership and the responsible use of AI, strikes me as exactly right. We are at another hinge moment in human history — one in which the tools we are building will either replicate and amplify dominator patterns, or help us find our way back toward something wiser. The choice, as always, belongs to us.",
  "This novel is an act of that choice.",
];

const trigger: CSSProperties = {
  display: "inline-flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: 3,
  maxWidth: 440,
  marginTop: 24,
  padding: "13px 22px",
  background: "#ffffff",
  border: "2px solid #7c3aed",
  borderRadius: 10,
  color: "#6d28d9",
  cursor: "pointer",
  textAlign: "left",
  fontFamily: "inherit",
};

const backdrop: CSSProperties = {
  position: "fixed",
  inset: 0,
  background: "rgba(0,0,0,0.6)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "clamp(16px, 5vh, 56px) 16px",
  zIndex: 1000,
  overflowY: "auto",
};

const panel: CSSProperties = {
  position: "relative",
  background: "#f4f4f5",
  color: "#1f2937",
  width: "100%",
  maxWidth: 720,
  maxHeight: "86vh",
  overflowY: "auto",
  borderRadius: 14,
  padding: "48px clamp(24px, 5vw, 52px) 40px",
  boxShadow: "0 24px 64px rgba(0,0,0,0.45)",
};

const closeBtn: CSSProperties = {
  position: "absolute",
  top: 10,
  right: 14,
  width: 36,
  height: 36,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "transparent",
  border: "none",
  fontSize: 30,
  lineHeight: 1,
  color: "#6b7280",
  cursor: "pointer",
  fontFamily: "inherit",
};

const eyebrow: CSSProperties = {
  fontSize: 12,
  fontWeight: 700,
  textTransform: "uppercase",
  letterSpacing: 2,
  color: "#7c3aed",
  margin: 0,
};

const title: CSSProperties = {
  fontSize: "clamp(26px, 4vw, 32px)",
  margin: "8px 0 6px",
  color: "#111827",
};

const byline: CSSProperties = {
  fontSize: 15,
  color: "#6b7280",
  margin: "0 0 28px",
  paddingBottom: 22,
  borderBottom: "1px solid #d4d4d8",
};

const body: CSSProperties = {
  fontFamily: "Georgia, 'Times New Roman', serif",
  fontSize: 16.5,
  lineHeight: 1.75,
  color: "#374151",
};

const signature: CSSProperties = {
  marginTop: 28,
  paddingTop: 18,
  borderTop: "1px solid #d4d4d8",
  fontFamily: "Georgia, 'Times New Roman', serif",
};

export default function ForewordModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} style={trigger}>
        <span style={{ fontWeight: 700, fontSize: 15 }}>
          Read the Foreword by Riane Eisler →
        </span>
        <span style={{ fontSize: 13, fontWeight: 400, color: "#7c3aed", lineHeight: 1.4 }}>
          author of <em>The Chalice and the Blade</em> · founder of the Center for Partnership Systems
        </span>
      </button>

      {open && (
        <div
          style={backdrop}
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Foreword to The Neolithic by Riane Eisler"
        >
          <div style={panel} onClick={(e) => e.stopPropagation()}>
            <button type="button" onClick={() => setOpen(false)} aria-label="Close" style={closeBtn} autoFocus>
              &times;
            </button>

            <p style={eyebrow}>Foreword to The Neolithic</p>
            <h2 style={title}>A Story Our World Needs</h2>
            <p style={byline}>
              by Riane Eisler — author of <em>The Chalice and the Blade</em> and{" "}
              <em>The Real Wealth of Nations</em>, founder of the Center for Partnership Systems
            </p>

            <div style={body}>
              {FOREWORD.map((para, i) => (
                <p key={i} style={{ margin: "0 0 18px" }}>
                  {para}
                </p>
              ))}

              <div style={signature}>
                <p style={{ margin: 0, fontWeight: 700, color: "#1f2937" }}>Riane Eisler</p>
                <p style={{ margin: "2px 0 0", fontSize: 14.5, color: "#6b7280", fontStyle: "italic" }}>
                  Author of <em>The Chalice and the Blade</em> and <em>The Real Wealth of Nations</em>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
