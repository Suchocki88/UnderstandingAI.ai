import Link from "next/link";

export const metadata = {
  title: "Understanding AI Learning Pathways",
  description: "A cross-disciplinary approach to AI literacy",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>
        <nav
          style={{
            background: "#0f172a",
            color: "white",
            padding: "0 24px",
            position: "sticky",
            top: 0,
            zIndex: 100,
            boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
          }}
        >
          <div
            style={{
              maxWidth: 1100,
              margin: "0 auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              height: 64,
            }}
          >
            <Link
              href="/"
              style={{
                color: "white",
                textDecoration: "none",
                fontWeight: 700,
                fontSize: 18,
                letterSpacing: "-0.3px",
              }}
            >
              UnderstandingAI.ai
            </Link>

            <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
              <Link href="/curriculum" style={navLink}>
                Curriculum
              </Link>

              <div style={{ position: "relative" }} className="nav-dropdown">
                <span style={{ ...navLink, cursor: "pointer" }}>
                  Pathways ▾
                </span>
                <div className="dropdown-menu">
                  <Link href="/pocketlab" style={dropdownItem}>
                    PocketLab — K–12 STEM &amp; Social Studies
                  </Link>
                  <Link href="/humanities" style={dropdownItem}>
                    Humanities — English &amp; Interdisciplinary
                  </Link>
                  <Link href="/academy" style={dropdownItem}>
                    Conceptual Academy — Professional Development
                  </Link>
                </div>
              </div>

              <Link href="/novels" style={navLink}>
                Novels
              </Link>

              <Link href="/about" style={navLink}>
                About
              </Link>
            </div>
          </div>
        </nav>

        {children}

        <footer
          style={{
            background: "#0f172a",
            color: "rgba(255,255,255,0.6)",
            padding: "40px 24px",
            textAlign: "center",
            fontSize: 14,
          }}
        >
          <p style={{ margin: 0 }}>
            © {new Date().getFullYear()} Conceptual Academy · Understanding AI Learning Pathways
          </p>
          <p style={{ marginTop: 8 }}>
            <Link href="/about" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>About</Link>
            {" · "}
            <Link href="/curriculum" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>Curriculum</Link>
            {" · "}
            <Link href="/novels" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>Novels</Link>
          </p>
        </footer>

        <style>{`
          .nav-dropdown:hover .dropdown-menu {
            display: block;
          }
          .dropdown-menu {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            background: #1e293b;
            border-radius: 8px;
            padding: 8px 0;
            min-width: 280px;
            box-shadow: 0 8px 24px rgba(0,0,0,0.4);
          }
        `}</style>
      </body>
    </html>
  );
}

const navLink: React.CSSProperties = {
  color: "rgba(255,255,255,0.85)",
  textDecoration: "none",
  fontSize: 15,
  fontWeight: 500,
};

const dropdownItem: React.CSSProperties = {
  display: "block",
  padding: "10px 20px",
  color: "rgba(255,255,255,0.85)",
  textDecoration: "none",
  fontSize: 14,
  whiteSpace: "nowrap",
};
