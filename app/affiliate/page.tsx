"use client";

// app/affiliate/page.tsx
// NOTE: metadata must be defined in a separate layout.tsx or head.tsx
// for this route, since this is a Client Component.

import Link from "next/link";

export default function AffiliatePage() {
  return (
    <main className="affiliate-page">

      {/* ── Hero ── */}
      <section className="hero">
        <div className="container">
          <p className="eyebrow">Affiliate Program</p>
          <h1>
            Teach it. Share it.<br />
            <em>Leverage your knowledge to help others.</em>
          </h1>
          <p className="subtitle">
            Once you've completed the program, you can share it with colleagues,
            clients, or your professional community — and earn every time someone
            enrolls, or provide a discount for them.
          </p>
          <a href="#get-started" className="btn-primary">
            Get Started
          </a>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section className="pricing-band">
        <div className="container">
          <p className="pricing-label">Program Pricing</p>
          <div className="pricing-grid">
            <div className="price-card">
              <span className="label">Volume 1</span>
              <span className="amount">$195</span>
            </div>
            <div className="price-card">
              <span className="label">Volume 2</span>
              <span className="amount">$195</span>
            </div>
            <div className="price-card featured">
              <span className="label">Both Volumes</span>
              <span className="amount">$390</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Three Tiers ── */}
      <section className="tiers">
        <div className="container">
          <h2>Three Ways to Participate</h2>
          <p className="section-intro">
            The program is built on a simple principle: the people who understand
            it best are the best ones to share it.
          </p>

          <div className="tier-stack">

            {/* Tier 1 */}
            <div className="tier-card">
              <div className="tier-badge">Tier 1</div>
              <div className="tier-content">
                <h3>Student</h3>
                <p>
                  Enroll in the program and work through the material at your
                  own pace. No obligations beyond learning.
                </p>
                <p className="tier-earn">No earnings — just the program.</p>
              </div>
            </div>

            {/* Tier 2 */}
            <div className="tier-card highlight">
              <div className="tier-badge">Tier 2</div>
              <div className="tier-content">
                <h3>Affiliate</h3>
                <p>
                  Complete the program and you're eligible. You'll receive
                  instructor-level account access on ConceptualAcademy.com and
                  a unique referral link. When someone enrolls through your
                  link, you earn <strong>25% per volume</strong> — roughly{" "}
                  <strong>$49 per volume enrolled</strong>. No customization
                  required. Share the program as-is.
                </p>
                <p className="tier-earn">~$49 per volume · ~$98 for both volumes</p>
                <p className="paypal-note">
                  <span className="paypal-dot" />
                  Earnings are deposited instantly to your PayPal account upon each enrollment.
                </p>
              </div>
            </div>

            {/* Tier 3 */}
            <div className="tier-card premium">
              <div className="tier-badge">Tier 3</div>
              <div className="tier-content">
                <h3>Certified Partner</h3>
                <p>
                  Reviewed and approved by Conceptual Academy based on
                  enrollment volume, customization of the program for a specific
                  professional field (adding spotlight essays, adapting content),
                  and/or professional organization certification.
                </p>
                <p>
                  A physical therapist teaching AI literacy to healthcare
                  workers. A paralegal building a legal-tech AI course. An HR
                  specialist becoming the AI literacy expert for their industry.
                  Certified Partners earn <strong>50% per volume</strong> and
                  gain professional recognition as domain experts.
                </p>
                <p className="tier-earn">~$97 per volume · ~$195 for both volumes</p>
                <p className="paypal-note">
                  <span className="paypal-dot" />
                  Earnings are deposited instantly to your PayPal account upon each enrollment.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Toggle Feature ── */}
      <section className="toggle-section">
        <div className="container toggle-inner">
          <div className="toggle-text">
            <h2>The Toggle</h2>
            <p>
              Inside your instructor account, a single setting changes how your
              25% works. Switch between two modes at any time.
            </p>
            <div className="toggle-options">
              <div className="toggle-option keep">
                <span className="toggle-label">Keep 25%</span>
                <p>
                  The traditional model. You earn ~$49 per volume every time
                  someone enrolls through your link.
                </p>
              </div>
              <div className="toggle-option pass">
                <span className="toggle-label">Pass as Discount</span>
                <p>
                  Your 25% is applied as a price reduction instead. The enrollee
                  pays <strong>$146.25</strong> per volume rather than $195. You
                  earn nothing — but your referral gets a meaningful discount.
                </p>
              </div>
            </div>
            <p className="toggle-note">
              The discount option removes the awkwardness of profiting from a
              recommendation to a friend or close colleague. You share it as a
              genuine endorsement; they get a better price.
            </p>
          </div>
          <div className="toggle-visual" aria-hidden="true">
            <div className="toggle-widget">
              <div className="tw-row active">
                <span className="tw-dot" />
                <span>Keep 25% → you earn $49/vol</span>
              </div>
              <div className="tw-divider" />
              <div className="tw-row">
                <span className="tw-dot outline" />
                <span>Pass as discount → they pay $146.25/vol</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Use Cases ── */}
      <section className="use-cases">
        <div className="container">
          <h2>Who This Is For</h2>
          <div className="case-grid">
            <div className="case-card">
              <h3>The Teacher</h3>
              <p>
                A high school teacher completes the summer PD program on
                ConceptualAcademy.com and becomes an Affiliate. When colleagues
                ask about AI literacy resources, they share their link — either
                earning $49 per colleague who enrolls, or toggling the discount
                so each colleague pays $146.25. If they build an enrollment base
                and customize the program, they can apply for Certified Partner
                status and earn 50%.
              </p>
            </div>
            <div className="case-card">
              <h3>The Professional</h3>
              <p>
                A professional in HR, healthcare, law, or any other field takes
                the program, adapts it to their domain, gets it certified by
                their professional organization, and builds an enrollment base
                among peers. As a Certified Partner, they earn 50% on every
                enrollment and gain recognition as the AI literacy expert in
                their field.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-section" id="get-started">
        <div className="container cta-inner">
          <h2>Ready to Begin?</h2>
          <p>
            Start with the program. Complete it. Then decide whether to become
            an Affiliate — there's no pressure and no deadline.
          </p>
          <div className="cta-buttons">
            <Link href="https://www.conceptualacademy.com" className="btn-primary">
              Enroll at Conceptual Academy
            </Link>
            <Link href="/curriculum" className="btn-secondary">
              Explore the Curriculum
            </Link>
          </div>
          <p className="cta-note">
            A PayPal account is required to receive affiliate earnings.
            Questions?{" "}
            <a href="mailto:Support@ConceptualAcademy.com">
              Support@ConceptualAcademy.com
            </a>
          </p>
        </div>
      </section>

      <style jsx>{`
        .affiliate-page {
          font-family: Georgia, "Times New Roman", serif;
          color: #1a1a1a;
          background: #faf9f7;
        }
        .container {
          max-width: 760px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }
        .hero {
          background: #1a2e3b;
          color: #f5f1eb;
          padding: 5rem 1.5rem 4rem;
          text-align: center;
        }
        .eyebrow {
          font-family: "Trebuchet MS", sans-serif;
          font-size: 0.75rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #8fb8c8;
          margin-bottom: 1rem;
        }
        .hero h1 {
          font-size: clamp(1.7rem, 4vw, 2.6rem);
          font-weight: normal;
          line-height: 1.25;
          margin: 0 auto 1.2rem;
          max-width: 540px;
        }
        .hero h1 em { font-style: italic; color: #8fb8c8; }
        .subtitle {
          font-size: 1rem;
          line-height: 1.75;
          color: #c8d8df;
          max-width: 500px;
          margin: 0 auto 2rem;
        }
        .btn-primary {
          display: inline-block;
          background: #2a7a5c;
          color: #fff;
          padding: 0.75rem 2rem;
          border-radius: 4px;
          text-decoration: none;
          font-family: "Trebuchet MS", sans-serif;
          font-size: 0.9rem;
          transition: background 0.2s;
        }
        .btn-primary:hover { background: #1f5c44; }
        .btn-secondary {
          display: inline-block;
          border: 1.5px solid #2a7a5c;
          color: #2a7a5c;
          padding: 0.75rem 2rem;
          border-radius: 4px;
          text-decoration: none;
          font-family: "Trebuchet MS", sans-serif;
          font-size: 0.9rem;
          transition: all 0.2s;
        }
        .btn-secondary:hover { background: #2a7a5c; color: #fff; }
        .pricing-band { background: #f0ece5; padding: 2.5rem 1.5rem; }
        .pricing-label {
          font-family: "Trebuchet MS", sans-serif;
          font-size: 0.72rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #888;
          margin-bottom: 0.8rem;
        }
        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.8rem;
          max-width: 500px;
          margin: 0 auto;
        }
        .price-card {
          background: #fff;
          border: 1px solid #ddd8d0;
          border-radius: 8px;
          padding: 1.2rem 1rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
        }
        .price-card.featured {
          border-color: #2a7a5c;
          box-shadow: 0 0 0 1px #2a7a5c;
        }
        .price-card .label {
          font-family: "Trebuchet MS", sans-serif;
          font-size: 0.72rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #888;
        }
        .price-card .amount { font-size: 1.5rem; color: #1a2e3b; }
        .tiers { padding: 4rem 1.5rem; }
        .tiers h2 {
          font-size: 1.6rem;
          font-weight: normal;
          margin-bottom: 0.5rem;
          color: #1a2e3b;
        }
        .section-intro {
          font-size: 0.97rem;
          color: #555;
          margin-bottom: 2rem;
          line-height: 1.75;
        }
        .tier-stack { display: flex; flex-direction: column; gap: 1.2rem; }
        .tier-card {
          display: flex;
          gap: 1.5rem;
          background: #fff;
          border: 1px solid #ddd8d0;
          border-radius: 10px;
          padding: 1.6rem;
          align-items: flex-start;
        }
        .tier-card.highlight {
          border-color: #2a7a5c;
          box-shadow: 0 2px 12px rgba(42,122,92,0.1);
        }
        .tier-card.premium {
          border-color: #1a2e3b;
          background: #f5f8fa;
        }
        .tier-badge {
          font-family: "Trebuchet MS", sans-serif;
          font-size: 0.68rem;
          letter-spacing: 0.13em;
          text-transform: uppercase;
          color: #888;
          white-space: nowrap;
          padding-top: 0.25rem;
          min-width: 44px;
        }
        .tier-content h3 {
          font-size: 1.15rem;
          font-weight: normal;
          margin: 0 0 0.6rem;
          color: #1a2e3b;
        }
        .tier-content p {
          font-size: 0.9rem;
          line-height: 1.78;
          color: #444;
          margin: 0 0 0.6rem;
        }
        .tier-earn {
          font-family: "Trebuchet MS", sans-serif;
          font-size: 0.78rem;
          color: #2a7a5c !important;
        }
        .paypal-note {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background: #f0f8f5;
          border: 1px solid #c8e4d8;
          border-radius: 5px;
          padding: 0.35rem 0.75rem;
          font-family: "Trebuchet MS", sans-serif;
          font-size: 0.76rem;
          color: #3a6a55;
          margin-top: 0.3rem;
        }
        .paypal-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #009cde;
          flex-shrink: 0;
          display: inline-block;
        }
        .toggle-section {
          background: #1a2e3b;
          color: #f5f1eb;
          padding: 4rem 1.5rem;
        }
        .toggle-inner {
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 3rem;
          align-items: start;
          max-width: 760px;
          margin: 0 auto;
        }
        .toggle-text h2 {
          font-size: 1.6rem;
          font-weight: normal;
          margin-bottom: 0.8rem;
          color: #f5f1eb;
        }
        .toggle-text p {
          font-size: 0.92rem;
          line-height: 1.78;
          color: #c8d8df;
          margin-bottom: 1.2rem;
        }
        .toggle-options { display: flex; flex-direction: column; gap: 1rem; margin: 1.2rem 0; }
        .toggle-option { border-left: 3px solid #4a8fa0; padding-left: 1rem; }
        .toggle-label {
          font-family: "Trebuchet MS", sans-serif;
          font-size: 0.7rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          display: block;
          margin-bottom: 0.3rem;
        }
        .toggle-option.keep .toggle-label { color: #8fb8c8; }
        .toggle-option.pass .toggle-label { color: #a8d0a0; }
        .toggle-option p { margin: 0; font-size: 0.88rem; }
        .toggle-note {
          font-style: italic;
          font-size: 0.85rem;
          color: #a0b8c0;
        }
        .toggle-widget {
          background: #0f1e28;
          border: 1px solid #2a4a5a;
          border-radius: 8px;
          padding: 1.2rem 1.4rem;
          min-width: 230px;
          font-family: "Trebuchet MS", sans-serif;
          font-size: 0.78rem;
          color: #c8d8df;
        }
        .tw-row {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.4rem 0;
          opacity: 0.5;
        }
        .tw-row.active { opacity: 1; color: #fff; }
        .tw-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #8fb8c8;
          flex-shrink: 0;
          display: inline-block;
        }
        .tw-dot.outline {
          background: transparent;
          border: 2px solid #4a8fa0;
        }
        .tw-divider { height: 1px; background: #2a4a5a; margin: 0.4rem 0; }
        .use-cases { padding: 4rem 1.5rem; background: #f0ece5; }
        .use-cases h2 {
          font-size: 1.6rem;
          font-weight: normal;
          margin-bottom: 1.5rem;
          color: #1a2e3b;
          max-width: 760px;
          margin-left: auto;
          margin-right: auto;
        }
        .case-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.2rem;
          max-width: 760px;
          margin: 0 auto;
        }
        .case-card {
          background: #fff;
          border: 1px solid #ddd8d0;
          border-radius: 10px;
          padding: 1.6rem;
        }
        .case-card h3 {
          font-size: 1.05rem;
          font-weight: normal;
          color: #1a2e3b;
          margin: 0 0 0.7rem;
        }
        .case-card p {
          font-size: 0.9rem;
          line-height: 1.82;
          color: #444;
          margin: 0;
        }
        .cta-section {
          padding: 4rem 1.5rem;
          text-align: center;
          background: #fff;
          border-top: 1px solid #ddd8d0;
        }
        .cta-inner h2 {
          font-size: 1.8rem;
          font-weight: normal;
          color: #1a2e3b;
          margin-bottom: 0.8rem;
        }
        .cta-inner > p {
          font-size: 0.97rem;
          line-height: 1.78;
          color: #555;
          max-width: 500px;
          margin: 0 auto 2rem;
        }
        .cta-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 1.5rem;
        }
        .cta-note { font-size: 0.82rem; color: #888; }
        .cta-note a { color: #2a7a5c; text-decoration: none; }
        .cta-note a:hover { text-decoration: underline; }
        @media (max-width: 640px) {
          .toggle-inner { grid-template-columns: 1fr; }
          .toggle-visual { display: none; }
          .case-grid { grid-template-columns: 1fr; }
          .tier-card { flex-direction: column; gap: 0.5rem; }
          .pricing-grid { grid-template-columns: 1fr 1fr; }
        }
      `}</style>
    </main>
  );
}
