// AI Driver's Ed landing page (Revision 3)
// This revision focuses on a cleaner funnel:
// • Two-column hero with the YouTube thumbnail (no cropped background)
// • Merged "Teachers tell us" + "Classroom reality"
// • Introduces AI-Ed branding once
// • Primary CTA goes directly to the Google Form
// • PocketLab remains the secondary path

import Link from "next/link";

export const metadata = {
  title: "AI Driver's Ed | Understanding and Working with AI",
  description:
    "A campaign landing page for educators discovering AI Driver's Ed through Time of the Weird.",
};

const FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfmC3t1awl9T0Ed1JZhtW24XEvp0znPoIITpbwcY7WvqYm12Q/viewform";

export default function Page() {
  return (
    <main style={{fontFamily:"Arial,sans-serif",color:"#1f2937",lineHeight:1.6}}>
      <section style={{padding:"70px 24px",background:"#0f172a",color:"white"}}>
        <div style={{maxWidth:1100,margin:"0 auto",display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,430px),1fr))",gap:40,alignItems:"center"}}>
          <div>
            <p style={{color:"#facc15",fontWeight:800,letterSpacing:2,textTransform:"uppercase"}}>For high school teachers and curriculum leaders</p>
            <h1 style={{fontSize:"clamp(42px,6vw,68px)",lineHeight:1.05}}>
              You've seen the weird.
              <br/>
              Now help students navigate it.
            </h1>
            <p style={{fontSize:24,maxWidth:700}}>
              Students are already using AI every day. The question isn't whether they'll use it.
              It's whether they'll understand it.
            </p>
            <p style={{fontSize:20,color:"rgba(255,255,255,.82)",maxWidth:700}}>
              <strong>AI Driver's Ed</strong>—or simply <strong>AI‑Ed</strong>—is a semester-ready pathway
              that helps students understand how AI works, when to trust it, and how to use it
              responsibly and creatively.
            </p>
            <div style={{display:"flex",gap:16,flexWrap:"wrap",marginTop:30}}>
              <a href={FORM_URL} target="_blank" rel="noreferrer"
                style={{background:"#f59e0b",padding:"15px 24px",borderRadius:12,fontWeight:700,color:"#111",textDecoration:"none"}}>
                Request Curriculum Information →
              </a>
              <Link href="/pocketlab"
                style={{border:"2px solid rgba(255,255,255,.45)",padding:"13px 22px",borderRadius:12,color:"white",textDecoration:"none",fontWeight:700}}>
                Explore the Teacher Pathway
              </Link>
            </div>
          </div>

          <div style={{textAlign:"center"}}>
            <img
              src="/images/TimeWeirdThumb.jpg"
              alt="Time of the Weird"
              style={{width:"100%",maxWidth:560,borderRadius:18,boxShadow:"0 20px 60px rgba(0,0,0,.45)"}}
            />
          </div>
        </div>
      </section>

      <section style={{padding:"72px 24px"}}>
        <div style={{maxWidth:1050,margin:"0 auto",display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,420px),1fr))",gap:42}}>
          <div>
            <h2 style={{fontSize:42,marginTop:0}}>Teachers tell us the same thing.</h2>
            <p style={{fontSize:21,color:"#64748b"}}>
              "My students are already using ChatGPT. I know AI matters, but I don't know what
              I should actually teach."
            </p>
            <p style={{fontSize:20,color:"#64748b"}}>
              That's exactly why we created AI Driver's Ed. Not to teach students clever prompts,
              but to help them become thoughtful users of one of the most powerful technologies
              they'll encounter.
            </p>
          </div>

          <div style={{border:"1px solid #e5e7eb",borderRadius:18,padding:28}}>
            <h3>Students need more than access.</h3>
            <ul style={{fontSize:18,lineHeight:1.8}}>
              <li>A clear mental model of AI</li>
              <li>Practice asking better questions</li>
              <li>Tools for recognizing weak reasoning and hallucinations</li>
              <li>Responsible authorship and academic integrity</li>
              <li>Confidence without dependence</li>
            </ul>
          </div>
        </div>
      </section>

      <section style={{background:"#fff7ed",padding:"72px 24px"}}>
        <div style={{maxWidth:900,margin:"0 auto",textAlign:"center"}}>
          <h2 style={{fontSize:42}}>Why Driver's Ed?</h2>
          <p style={{fontSize:22,color:"#555"}}>
            We don't hand teenagers car keys without instruction.
            AI deserves the same respect.
          </p>
          <p style={{fontSize:20,color:"#666"}}>
            Students don't need fear. They don't need hype.
            They need fluency, judgment, practice, and guidance.
          </p>
        </div>
      </section>

      <section style={{padding:"72px 24px"}}>
        <div style={{maxWidth:1050,margin:"0 auto",display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,420px),1fr))",gap:40,alignItems:"center"}}>
          <div>
            <h2 style={{fontSize:42}}>A complete AI literacy pathway.</h2>
            <p style={{fontSize:20,color:"#64748b"}}>
              Two textbook volumes, videos, podcasts, AI experiments, classroom activities,
              and flexible implementation for teachers, departments, or districts.
            </p>
            <p>
              <Link href="/curriculum">Learn more about the curriculum →</Link>
            </p>
          </div>

          <div style={{textAlign:"center"}}>
            <img src="/images/Volumes12.png"
              alt="Curriculum"
              style={{maxWidth:"100%",borderRadius:18}} />
          </div>
        </div>
      </section>

      <section style={{background:"#451a03",padding:"56px 24px",color:"white"}}>
        <div style={{maxWidth:900,margin:"0 auto"}}>
          <p style={{fontSize:28,fontStyle:"italic"}}>
            “AI is designed to agree with you. That’s a problem. If you don’t actively ask
            for the opposing view, you won’t get it.”
          </p>
        </div>
      </section>

      <section style={{padding:"80px 24px",textAlign:"center"}}>
        <div style={{maxWidth:850,margin:"0 auto"}}>
          <h2 style={{fontSize:44}}>Ready to start the conversation?</h2>
          <p style={{fontSize:21,color:"#64748b"}}>
            Whether you're exploring a single classroom, a department, or a district-wide
            initiative, we'd love to help.
          </p>
          <div style={{display:"flex",justifyContent:"center",gap:16,flexWrap:"wrap",marginTop:30}}>
            <a href={FORM_URL} target="_blank" rel="noreferrer"
              style={{background:"#f59e0b",padding:"15px 24px",borderRadius:12,fontWeight:700,color:"#111",textDecoration:"none"}}>
              Request Curriculum Information →
            </a>
            <Link href="/pocketlab"
              style={{border:"2px solid #f59e0b",padding:"13px 22px",borderRadius:12,textDecoration:"none"}}>
              Visit the Teacher Pathway
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
