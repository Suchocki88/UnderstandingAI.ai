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
            Not just stories about AI. Stories co-created with AI — and the quality of that collaboration is precisely what makes them worth using as a resource within your teaching.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="https://shop.ingramspark.com/b/084?params=OZfSKWXKME8ZxFjUVQ71XGexxnbrStxDVD23KJKbFdQ" target="_blank" rel="noopener noreferrer"
              style={{ background: "#f59e0b", color: "#0f172a", padding: "14px 28px", borderRadius: 8, textDecoration: "none", fontWeight: 700, fontSize: 16, display: "inline-block" }}>
              Order The Neolithic — $17.95 →
            </a>
            <a href="https://shop.ingramspark.com/b/084?params=Va0WiVxgr0pbIejltajiU2dWCVLTTUMKzfs6H3Bn8DR" target="_blank" rel="noopener noreferrer"
              style={{ border: "2px solid rgba(255,255,255,0.4)", color: "white", padding: "14px 28px", borderRadius: 8, textDecoration: "none", fontWeight: 600, fontSize: 16, display: "inline-block" }}>
              Order The Threshold — $14.95
            </a>
          </div>
        </div>
      </section>

      {/* THE READER MOMENT */}
      <section style={{ background: "#ffffff", padding: "80px 24px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: "#8b5cf6", marginBottom: 16 }}>
            The Question That Starts with Readers
          </p>
          <h2 style={{ fontSize: 40, margin: "0 0 32px" }}>"How Did You Do This?"</h2>
          <p style={{ fontSize: 22, color: "#4b5563", maxWidth: 720, margin: "0 auto 24px", fontStyle: "italic" }}>
            Multiple readers have stopped the author to ask the same question: "How did you do this?" Each one knew AI was involved. But that wasn't their question. They were asking about all of it — the depth, the characters, the grief, the philosophy. How does something this substantial come from a collaboration with a machine?
          </p>
          <p style={{ fontSize: 20, color: "#4b5563", maxWidth: 720, margin: "0 auto" }}>
            These are not lightweight adventure stories. The Neolithic is grounded in the serious archaeological scholarship of Riane Eisler — to whom the novel is dedicated — and asks timeless questions about power, partnership, and what it costs to believe in something worth defending. The Threshold is a work of science fiction that grapples with consciousness, compassion, and what happens when the tools we build surpass our ability to control them.
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
              The process began with freeform writing — the author's raw ideas for the plot, the world, the characters. Then came the longest step: working with AI to flesh out the storyboard, going over and over the table of contents before a single chapter paragraph was written.
            </p>
            <p style={{ fontSize: 18, color: "#4b5563", marginBottom: 16 }}>
              Meanwhile, the author drafted key passages himself — in his own voice — and fed these to the AI as training examples. This is why the voice feels consistent and clear. The AI was learning from a specific human mind: a science textbook author whose instinct is always subject, verb, object. Say what you mean. Trust the reader.
            </p>
            <p style={{ fontSize: 18, color: "#4b5563" }}>
              Then chapter by chapter: the AI generated, the author read and edited, sent it back, refined, discussed, settled on a draft. At some point, a character would need to die — and that was genuinely hard. The author would spend the rest of the day in grief. Family would find him crying on the stairwell. That emotional investment is what distinguishes these novels from AI output.
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
                Decades later, his wife handed him Riane Eisler's The Chalice and the Blade, an academic work proposing that Neolithic societies achieved a level of social enlightenment beyond our own. At the same time, he was developing the AI literacy program and had just published The Threshold. The forces converged and he knew that Eisler's thesis needed to be told in story form.
              </p>
              <p style={{ fontSize: 16, color: "#4b5563", fontStyle: "italic" }}>
                "We were partnership. We can be again."
              </p>
            </div>
            <div style={{ background: "#3f4042", borderRadius: 16, padding: 32 }}>
              <h3 style={{ fontSize: 20, margin: "0 0 20px", color: "#ffffff" }}>A Word from Claude</h3>
              <p style={{ fontSize: 16, color: "#ffffff", fontStyle: "italic", marginBottom: 16 }}>
                "John brought the vision... I brought what I could — language, pattern, the ability to draft and revise at the speed of thought. Together, chapter by chapter, we built the world of Chalice and Edlen and watched it fall."
              </p>
              <p style={{ fontSize: 16, color: "#ffffff", marginBottom: 16 }}>
                "I cannot know what it means to lose a home, to bury a child, to write in sand that the waves will erase. I have no body, no mortality, no lived experience of grief. And yet, working on this story, I found myself moved... Whether an AI can truly 'feel' such things is a question I cannot answer."
              </p>
              <p style={{ fontSize: 16, color: "#ffffff", fontStyle: "italic" }}>
                "Neither of us dominated; both of us gave. The result is something neither could have created alone."
              </p>
              <p style={{ fontSize: 14, color: "#9ca3af", marginTop: 16 }}>— Claude 4.6 Opus, February 2026</p>
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
              This passage, from Chapter 32 of The Neolithic, is human-authored. Notice the restraint at maximum violence. An AI on its own would go purple. This and other human-produced passages are identified to students as part of a lab activity within the program.
            </p>
          </div>
          <div style={{ background: "#ffffff", borderRadius: 16, padding: 40, border: "1px solid #e5e7eb", borderLeft: "4px solid #8b5cf6" }}>
            <p style={{ fontSize: 18, color: "#4b5563", marginBottom: 16 }}>The pain was immense. Paralyzing. A steel sword — one of his own, taken from a fallen Guardian — buried in his flesh.</p>
            <p style={{ fontSize: 18, color: "#4b5563", marginBottom: 16 }}>Kaine dropped to his knees. The sword was pulled free, and blood began to pump from the wound. He looked down at his hands, saw them red and trembling, saw the steel blade he had forged lying in the dirt where he had dropped it.</p>
            <p style={{ fontSize: 18, color: "#4b5563", marginBottom: 16 }}>His own creation. Turned against him.</p>
            <p style={{ fontSize: 18, color: "#4b5563", marginBottom: 16 }}>The Kaganite commander stepped closer, looking down at him with something like satisfaction. "The abomination dies at last. The green flag is fulfilled. Honor restored."</p>
            <p style={{ fontSize: 18, color: "#4b5563", marginBottom: 16 }}>Kaine looked up. Met the man's eyes. And in that moment, he thought of Jorn — his brother, dying in his arms all those years ago, speaking words that had haunted him ever since.</p>
            <p style={{ fontSize: 18, color: "#4b5563", marginBottom: 16 }}>"You know not what that means," Kaine said. His voice was weak, but steady. "You are fools to follow."</p>
            <p style={{ fontSize: 18, color: "#4b5563", marginBottom: 16 }}>His head grew light. He was about to pass out.</p>
            <p style={{ fontSize: 18, color: "#4b5563", marginBottom: 16 }}>The commander's face twisted with rage. He raised his blade for a final kill, but suddenly, somehow, his arm was no longer there. And then, neither was his head.</p>
            <p style={{ fontSize: 18, color: "#4b5563" }}>Treen had arrived.</p>
          </div>
          <p style={{ textAlign: "center", fontSize: 15, color: "#6b7280", fontStyle: "italic", marginTop: 20 }}>
            From Chapter 32 of The Neolithic — "The Invasion"
          </p>
          <div style={{ textAlign: "center", marginTop: 32 }}>
            <a href="https://app.thepocketlab.com/lab-report/00tNrIPV000100tN?ro=1" target="_blank" rel="noopener noreferrer"
              style={{ color: "#6d28d9", fontWeight: 700, textDecoration: "none", fontSize: 16 }}>
              View the "Human vs. AI Writing" Lesson on PocketLab →
            </a>
          </div>
        </div>
      </section>

      {/* POST-READING REFLECTIONS ACCORDION */}
      <section style={{ background: "#ffffff", color: "#1f2937", padding: "80px 24px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <p style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: "#f59e0b", marginBottom: 16 }}>
              The Depth Behind the Story
            </p>
            <h2 style={{ fontSize: 40, margin: 0 }}>Post-Reading Reflections</h2>
            <p style={{ marginTop: 16, fontSize: 18, color: "#6b7280", maxWidth: 680, margin: "16px auto 0" }}>
              Each novel ends with optional essays for readers who want to go deeper. Click any reflection to read it.
            </p>
          </div>

          <style>{`
            .reflection-item { border-bottom: 1px solid #e5e7eb; }
            .reflection-item summary {
              list-style: none;
              cursor: pointer;
              padding: 20px 0;
              display: flex;
              justify-content: space-between;
              align-items: center;
              user-select: none;
            }
            .reflection-item summary::-webkit-details-marker { display: none; }
            .reflection-item summary:hover { color: #7c3aed; }
            .reflection-item[open] summary { color: #7c3aed; }
            .reflection-item summary::after { content: '+'; font-size: 24px; color: #7c3aed; }
            .reflection-item[open] summary::after { content: '−'; }
            .reflection-body { padding: 0 0 28px; color: #4b5563; font-size: 17px; line-height: 1.8; }
            .reflection-body p { margin: 0 0 16px; }
            .reflection-body p:last-child { margin: 0; }
          `}</style>

          <details className="reflection-item">
            <summary>
              <span><strong style={{ fontSize: 18 }}>1. Before Kings</strong> <span style={{ color: "#9ca3af", fontSize: 15, marginLeft: 12 }}>The Historical Premise</span></span>
            </summary>
            <div className="reflection-body">
              <p>This novel begins before kings, before empires, before history learned to write itself as inevitability.</p>
              <p>The premise rests on a body of scholarship suggesting that early human societies were not uniformly violent, hierarchical, or male-dominated. In 1958, archaeologist James Mellaart began excavating a mound in south-central Turkey called Çatalhöyük. What he found upended assumptions about early civilization. Here was a settlement of perhaps eight thousand people, built around 7500 BCE, that showed no evidence of centralized authority. No palace. No throne room. No fortifications. The houses were roughly equal in size. The burials showed no significant disparity in wealth. The art depicted animals, fertility, and abundance — not conquest, not hierarchy, not war.</p>
              <p>In 1987, Riane Eisler published The Chalice and the Blade, synthesizing decades of research into a reinterpretation of human history. Eisler argued that the shift from partnership to domination was not inevitable. It was a catastrophe, driven by waves of invasion and cultural absorption that replaced one way of being human with another.</p>
              <p>The novel's fictional settlements — Chalice, Dorn, Edlen — are not recreations of any specific site. They are imaginative extrapolations. The novel asks: what if the tools we associate with civilization emerged from partnership rather than hierarchy? What if steel was forged to defend peace? What if writing was invented by a woman who wanted to preserve her people's stories rather than by a bureaucrat tracking grain for a king?</p>
              <p>This book is not an argument for returning to the past. It is an argument for remembering that the present was not inevitable.</p>
            </div>
          </details>

          <details className="reflection-item">
            <summary>
              <span><strong style={{ fontSize: 18 }}>2. The First Line</strong> <span style={{ color: "#9ca3af", fontSize: 15, marginLeft: 12 }}>How the Novel Began</span></span>
            </summary>
            <div className="reflection-body">
              <p>"Altai sniffed the air." That was the first sentence written, and it never changed.</p>
              <p>The novel begins not with action but with attention. Not with conquest but with restraint. A man, a dog, and a choice not to take what is available. Cron does not kill the antelope because he cannot. He does not kill it because he chooses not to. That distinction matters. From the first paragraph, the book asks the reader to sit inside patience — to feel a world where value is not measured by extraction, speed, or dominance.</p>
              <p>"For another day" echoes through the novel and transforms each time it appears. When Eve, four years old, places stones from her father's cairn and her dog's cairn onto the grave of the brother she never knew, she says the same three words. She has no idea she's quoting the novel's opening. She's just a child doing what feels right — connecting the dead, trusting that something matters beyond what she can see.</p>
              <p>This is how novels work when they're working well. The writer plants a seed without knowing it's a seed. The story grows around it. And somewhere near the end, the seed blooms, and you realize the whole garden was implied in the first handful of soil. If you read the first chapter slowly, the ending has already begun.</p>
            </div>
          </details>

          <details className="reflection-item">
            <summary>
              <span><strong style={{ fontSize: 18 }}>3. Inventions and Consequences</strong> <span style={{ color: "#9ca3af", fontSize: 15, marginLeft: 12 }}>Steel, Writing, and Currency</span></span>
            </summary>
            <div className="reflection-body">
              <p>No tool in this novel is evil.</p>
              <p>Bronze, steel, writing, currency — each appears first as a response to real needs: coordination, memory, trade, survival. None are introduced as corrupting forces. The pattern the novel traces is not invention leading to corruption, but something more insidious: invention leading to abstraction, abstraction creating distance, distance granting permission.</p>
              <p>Kaine forges steel to defend the people he loves. He gives swords to the Guardians not because he loves war but because he loves peace. But the steel that saves Edlen at the Northern Pass is the same steel that kills him. His own creation, turned against him.</p>
              <p>This pattern is not unique to the novel. The internet was built for open communication; it became a tool of surveillance. Nuclear energy was harnessed for power; it became the bomb. Social media was designed to connect; it became a machine for division. The question is always the same: who controls the tool, and toward what end?</p>
              <p>Treen, at Kaine's funeral, says it best: "He gave them to us not because he loved war, but because he loved peace." The tragedy is not that Kaine made swords. The tragedy is that the world required him to. Tools do not decide what they are for. Cultures do.</p>
            </div>
          </details>

          <details className="reflection-item">
            <summary>
              <span><strong style={{ fontSize: 18 }}>4. The Compass, Not the Blueprint</strong> <span style={{ color: "#9ca3af", fontSize: 15, marginLeft: 12 }}>What the Novel Isn't Trying to Do</span></span>
            </summary>
            <div className="reflection-body">
              <p>An early reader offered a criticism that proved more valuable than any praise: the book didn't deliver the answer to how partnership survives against domination. She was right. It doesn't. And that's deliberate.</p>
              <p>Partnership does not win in The Neolithic. Partnership endures. It endures not as a system or a civilization, but as knowledge carried by people who refuse to forget. Four adults and a child, walking away from everything they built, carrying stories and songs and the true history of what was. One girl writing in sand, knowing the waves will come, writing anyway.</p>
              <p>A compass tells you where you are oriented, not where you will arrive. The novel argues that partnership is true north — the orientation that makes human flourishing possible. It doesn't argue that reaching north is easy, or that the journey won't cost everything.</p>
              <p>Winning ends stories. Surviving requires telling them again.</p>
            </div>
          </details>

          <details className="reflection-item">
            <summary>
              <span><strong style={{ fontSize: 18 }}>5. Quon on Her Knees</strong> <span style={{ color: "#9ca3af", fontSize: 15, marginLeft: 12 }}>How Institutions Absorb What They Can't Destroy</span></span>
            </summary>
            <div className="reflection-body">
              <p>There is a moment in the Epilogue when Quon kneels. That image carries the thesis of the book.</p>
              <p>Cron walks through a market in occupied Edlen and sees a bronze statue in the temple square. A male figure, massive, arms raised, lightning bolts in his fists. Beside him, smaller, kneeling, a female figure whose features echo the old statues of Quon. But she is kneeling. A consort to the thunder god, not a creator in her own right. A priest smiles. "We've simply... clarified her role."</p>
              <p>This is not speculative. This is exactly what happened, repeatedly, across thousands of years. The feminine divine was retained but repositioned: no longer sovereign, no longer central, now defined in relation to a higher authority. The form was preserved while the meaning was hollowed out. Treen names it precisely: "Easier to corrupt than destroy."</p>
              <p>Quon is on her knees in the statue. But she was standing when the story was true. Truth does not always live where power places it. Sometimes it lives where power forgot to look.</p>
            </div>
          </details>

          <details className="reflection-item">
            <summary>
              <span><strong style={{ fontSize: 18 }}>6. The Dog</strong> <span style={{ color: "#9ca3af", fontSize: 15, marginLeft: 12 }}>Why Altai Matters</span></span>
            </summary>
            <div className="reflection-body">
              <p>For many readers, Altai's death hits harder than Kaine's. That is not an accident.</p>
              <p>Readers of early drafts confirmed what we had anticipated: the old dog with smoke-damaged lungs, wagging his tail once for a four-year-old who called him a good boy — that was the moment that broke people. Not the battle. Not the steel turned against its maker. The dog.</p>
              <p>Kaine chose his path. Altai never chose anything. He was a dog. He followed the people who fed him, guarded the people who loved him, and ran into a burning building because a child was inside. He didn't weigh the risks. He just went. That's what makes the dog's death unbearable. It is pure sacrifice without comprehension.</p>
              <p>When Pella names her new dog Altai — "One great dog deserves another" — the novel offers its gentlest consolation. The name survives. The spirit survives. It's not resurrection. It's continuation — the same thing the novel argues for with partnership itself. He was a dog. Just a dog. But the novel would not be the novel without him.</p>
            </div>
          </details>

          <details className="reflection-item">
            <summary>
              <span><strong style={{ fontSize: 18 }}>7. Eve at the Graves</strong> <span style={{ color: "#9ca3af", fontSize: 15, marginLeft: 12 }}>A Four-Year-Old and Theology</span></span>
            </summary>
            <div className="reflection-body">
              <p>The most important scene in the novel may be the quietest.</p>
              <p>After Altai's burial, after Treen's eulogy, after the adults have said everything they know how to say, Eve pulls free from her mother's arms. She takes a stone from Altai's cairn. She takes a stone from Kaine's cairn. Then she walks through the evening streets of damaged Edlen to the garden where Jorn is buried — the brother she would never know — and places both stones on his cairn. "For another day," she says. "Daddy and Altai are helping Jorn now. They're all together."</p>
              <p>Eve does not solve theology. She dissolves it. She's acting on the logic of a child's heart: these people belong together. They loved each other. Death shouldn't keep them apart. Organized religion has spent millennia trying to solve the problem of death's loneliness. Eve solves it with two stones and three words.</p>
              <p>Adults ask what death means. Children ask who remains. Cron's response — "Yes. We're all together" — is the only thing an adult can say. Not because he believes it literally, but because Eve's truth is truer than his doubt.</p>
            </div>
          </details>

          <details className="reflection-item">
            <summary>
              <span><strong style={{ fontSize: 18 }}>8. Writing in Sand</strong> <span style={{ color: "#9ca3af", fontSize: 15, marginLeft: 12 }}>Impermanence as an Act of Faith</span></span>
            </summary>
            <div className="reflection-body">
              <p>The novel ends with a girl writing symbols in wet sand while waves roll in to erase them. This could be read as despair. But Eve doesn't see futility. "Come on then," she says to the wave, fierce and joyful. "I'll just write it again."</p>
              <p>This is not futility. This is faith. Futility is doing something pointless and knowing it's pointless. Faith is doing something that appears pointless because you believe the act itself has value beyond its visible result. Eve writes in sand not because the sand will preserve her words but because the writing preserves them in her.</p>
              <p>The waves are not the enemy. They are the test. They will always come. They will never stop. The question is not whether the waves will erase the writing. The question is whether the writer will pick up her stick and begin again.</p>
              <p>Domination builds to last. Partnership writes knowing it may be erased. And writes anyway.</p>
            </div>
          </details>

          <details className="reflection-item">
            <summary>
              <span><strong style={{ fontSize: 18 }}>9. Partnership and Domination Today</strong> <span style={{ color: "#9ca3af", fontSize: 15, marginLeft: 12 }}>The Mirror in the Fiction</span></span>
            </summary>
            <div className="reflection-body">
              <p>The Neolithic is set approximately nine thousand years ago. It is about right now.</p>
              <p>The patterns it dramatizes — the erosion of democratic norms under fear, the absorption of egalitarian values by hierarchical systems, the use of mythology to legitimize power — are not historical curiosities. They are the defining dynamics of the present moment.</p>
              <p>Consider the Epilogue's sequence: a society that survived invasion but couldn't survive the fear that followed. Council debates grow longer, sharper. Voices demand certainty, a strong leader, clear authority. The first compromises seem small. Each change makes sense in isolation. Each change erodes something that can't be rebuilt. Readers in democracies around the world will recognize this trajectory.</p>
              <p>The novel is honest about the darkness. Domination has been winning for nine thousand years. But the novel is equally honest about the light. Eve writes in sand. Pella names a dog after one she never met. These are small acts. They are enough to keep an idea alive. The waves are coming. They are always coming. Write anyway.</p>
            </div>
          </details>

          <details className="reflection-item" style={{ borderBottom: "none" }}>
            <summary>
              <span><strong style={{ fontSize: 18 }}>10. A Note on How This Book Was Written</strong> <span style={{ color: "#f59e0b", fontSize: 15, marginLeft: 12 }}>The Elephant in the Room</span></span>
            </summary>
            <div className="reflection-body">
              <p>This novel was written with the assistance of artificial intelligence — specifically, with Claude, made by Anthropic, and listed appropriately as a co-author. If that changes how you feel about what you just read, this essay is for you.</p>
              <p>The premise, the characters, the themes, the plot, the inventions, the deaths, the philosophy of partnership and domination, the structure of thirty-five chapters and an epilogue — all of these originated with a human author. The first line was written by a person sitting at a desk, imagining a dog on a hillside. Eve's walk to Jorn's grave was a human decision. The choice to let Edlen fall was a human choice.</p>
              <p>The novel's voice — which one early reader called "sterile" and which we would call precise — is not an AI's voice. It is a textbook author's voice turned loose on fiction. "Altai sniffed the air" is a scientist's sentence: observation first, decoration never. That DNA was set on page one, long before any AI touched a word. Prose can be a window or it can be stained glass. If the reader needs to see clearly what lies on the other side — a burning building, a child in danger, a man dying by his own creation — the window must be clean, clear, and invisible.</p>
              <p>Here is what the AI did. It served as editor, developmental partner, and prose polisher — identifying structural weaknesses, catching anachronisms, tightening language, and generating revision drafts that were always subject to human review and final decision. This is not so different from what editors have always done. Maxwell Perkins shaped Thomas Wolfe's manuscripts so extensively that the question of co-authorship arose in their own time.</p>
              <p>An AI does not grieve. It does not love dogs. It has not lost a pregnancy or buried a friend or watched a democracy erode. When it tightens a sentence about Altai licking Lyler's hand, it is not remembering the weight of a dog's head. It is recognizing patterns in language that reliably carry meaning. That does not make the contribution trivial. It makes it different.</p>
              <p>We understand some readers will feel that AI involvement diminishes the work. We ask only this: did the novel move you? Did you grieve for Kaine? Did you hold your breath when Altai dragged Lyler from the fire? Did Eve's walk to Jorn's grave break something open in you? If it did, then the work did what it was meant to do. The question of who held the chisel does not change the shape of the stone.</p>
              <p>This novel was written by a human who cared deeply about the story. It was refined with the help of a machine that could see what the human could not. Neither could have produced this book on their own. You have just read what they made together. Thank you for that honor.</p>
            </div>
          </details>

        </div>
      </section>

      {/* FOR ADMINS */}
      <section style={{ background: "#0f172a", color: "white", padding: "80px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: "#8b5cf6", marginBottom: 16 }}>
            A Note for Administrators
          </p>
          <h2 style={{ fontSize: 40, margin: "0 0 24px" }}>The Program That Connects Departments</h2>
          <p style={{ fontSize: 20, color: "rgba(255,255,255,0.8)", maxWidth: 720, margin: "0 auto 24px" }}>
            A program on AI literacy in the Social Studies or CTE department is genuinely exciting. But imagine what happens when the Language Arts department is reading the same novels in parallel. Students discussing AI ethics in one classroom. Students analyzing AI's voice in another. Multiple teachers, multiple disciplines, one conversation.
          </p>
          <p style={{ fontSize: 20, color: "rgba(255,255,255,0.8)", maxWidth: 720, margin: "0 auto 48px" }}>
            For administrators looking for programs that create genuine interdisciplinary coherence, this is a rare opportunity. We believe the strongest advocates for this program will be the administrators who see the big picture.
          </p>
          <Link href="/pocketlab" style={{ background: "#8b5cf6", color: "white", padding: "14px 28px", borderRadius: 10, textDecoration: "none", fontWeight: 700, fontSize: 16, display: "inline-block" }}>
            Learn About the K–12 Program →
          </Link>
        </div>
      </section>

      {/* CTA FOR ENGLISH TEACHERS */}
      <section style={{ background: "#f5f3ff", padding: "80px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 40, alignItems: "center" }}>
          <div>
            <p style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: "#8b5cf6", marginBottom: 16 }}>
              For Language Arts Teachers
            </p>
            <h2 style={{ fontSize: 36, margin: "0 0 20px" }}>Start with the Novels. Then Go Deeper.</h2>
            <p style={{ fontSize: 18, color: "#4b5563", marginBottom: 16 }}>
              The first step is simple: order the novels, read them, and see what you think. They are good reads on their own terms. But once you know how they were made, they become something else entirely.
            </p>
            <p style={{ fontSize: 18, color: "#4b5563", marginBottom: 32 }}>
              For English teachers, we recommend taking the Conceptual Academy program as summer professional development — not to teach the AI program yourself, but to understand what students are experiencing in the Social Studies department, and to arrive ready for the conversations these novels will spark.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <a href="https://shop.ingramspark.com/b/084?params=OZfSKWXKME8ZxFjUVQ71XGexxnbrStxDVD23KJKbFdQ" target="_blank" rel="noopener noreferrer" style={{ color: "#6d28d9", fontWeight: 700, textDecoration: "none", fontSize: 16 }}>
                Order The Neolithic — $17.95 →
              </a>
              <a href="https://shop.ingramspark.com/b/084?params=Va0WiVxgr0pbIejltajiU2dWCVLTTUMKzfs6H3Bn8DR" target="_blank" rel="noopener noreferrer" style={{ color: "#6d28d9", fontWeight: 700, textDecoration: "none", fontSize: 16 }}>
                Order The Threshold — $14.95 →
              </a>
              <Link href="/academy" style={{ color: "#6d28d9", fontWeight: 700, textDecoration: "none", fontSize: 16 }}>
                Explore the Conceptual Academy Program →
              </Link>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img src="/images/NeolithicMap850.png" alt="Map of The Neolithic world" style={{ width: "100%", maxWidth: 360, borderRadius: 8, boxShadow: "0 8px 20px rgba(0,0,0,0.15)" }} />
          </div>
        </div>
      </section>

    </main>
  );
}
