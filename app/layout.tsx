"use client";
import Script from 'next/script'
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isLandingPage = pathname === "/ai-driver-ed";
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
<html lang="en">
  <head>
    <link rel="icon" href="/images/CAFavicon.jpg" type="image/jpeg" />
  </head>
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
              onClick={closeMenu}
              style={{
                color: "white",
                textDecoration: "none",
                fontWeight: pathname === "/" ? 700 : 600,
                fontSize: 18,
                letterSpacing: "-0.3px",
                fontFamily: "Arial, sans-serif",
              }}
            >
              Home
            </Link>

            {!isLandingPage && (
              <>
                {/* Desktop links */}
                <div className="nav-desktop" style={{ display: "flex", gap: 32, alignItems: "center" }}>
                  <Link
                    href="/curriculum"
                    style={{
                      ...navLink,
                      fontWeight: pathname === "/curriculum" ? 700 : 500,
                      color: pathname === "/curriculum" ? "white" : "rgba(255,255,255,0.85)",
                      borderBottom: pathname === "/curriculum" ? "2px solid #f59e0b" : "2px solid transparent",
                      paddingBottom: 4,
                    }}
                  >
                    Curriculum
                  </Link>

                  <div style={{ position: "relative" }} className="nav-dropdown">
                    <span
                      style={{
                        ...navLink,
                        cursor: "pointer",
                        fontWeight:
                          pathname.startsWith("/pocketlab") ||
                          pathname.startsWith("/colleges") ||
                          pathname.startsWith("/humanities") ||
                          pathname.startsWith("/academy")
                            ? 700
                            : 500,
                        color:
                          pathname.startsWith("/pocketlab") ||
                          pathname.startsWith("/colleges") ||
                          pathname.startsWith("/humanities") ||
                          pathname.startsWith("/academy")
                            ? "white"
                            : "rgba(255,255,255,0.85)",
                        borderBottom:
                          pathname.startsWith("/pocketlab") ||
                          pathname.startsWith("/colleges") ||
                          pathname.startsWith("/humanities") ||
                          pathname.startsWith("/academy")
                            ? "2px solid #f59e0b"
                            : "2px solid transparent",
                        paddingBottom: 4,
                      }}
                    >
                      Pathways ▾
                    </span>
                    <div className="dropdown-menu">
                      <Link href="/pocketlab" style={dropdownItem}>
                        High Schools — All Departments
                      </Link>
                      <Link href="/colleges" style={dropdownItem}>
                        Colleges — General Studies
                      </Link>
                      <Link href="/humanities" style={dropdownItem}>
                        Language Arts — Creative Writing
                      </Link>
                      <Link href="/academy" style={dropdownItem}>
                        Independent — Self-Paced
                      </Link>
                    </div>
                  </div>

                  <Link
                    href="/professionals"
                    style={{
                      ...navLink,
                      fontWeight: pathname.startsWith("/professionals") ? 700 : 500,
                      color: pathname.startsWith("/professionals") ? "white" : "rgba(255,255,255,0.85)",
                      borderBottom: pathname.startsWith("/professionals") ? "2px solid #f59e0b" : "2px solid transparent",
                      paddingBottom: 4,
                    }}
                  >
                    Professionals
                  </Link>

                  <Link
                    href="/librarians"
                    style={{
                      ...navLink,
                      fontWeight: pathname.startsWith("/librarians") ? 700 : 500,
                      color: pathname.startsWith("/librarians") ? "white" : "rgba(255,255,255,0.85)",
                      borderBottom: pathname.startsWith("/librarians") ? "2px solid #f59e0b" : "2px solid transparent",
                      paddingBottom: 4,
                    }}
                  >
                    Librarians
                  </Link>

                  <Link
                    href="/novels"
                    style={{
                      ...navLink,
                      fontWeight: pathname === "/novels" ? 700 : 500,
                      color: pathname === "/novels" ? "white" : "rgba(255,255,255,0.85)",
                      borderBottom: pathname === "/novels" ? "2px solid #f59e0b" : "2px solid transparent",
                      paddingBottom: 4,
                    }}
                  >
                    Novels
                  </Link>

                  <Link
                    href="/about"
                    style={{
                      ...navLink,
                      fontWeight: pathname === "/about" ? 700 : 500,
                      color: pathname === "/about" ? "white" : "rgba(255,255,255,0.85)",
                      borderBottom: pathname === "/about" ? "2px solid #f59e0b" : "2px solid transparent",
                      paddingBottom: 4,
                    }}
                  >
                    About
                  </Link>
                </div>

                {/* Mobile hamburger */}
                <button
                  className="nav-burger"
                  onClick={() => setMenuOpen((o) => !o)}
                  aria-label="Toggle menu"
                  aria-expanded={menuOpen}
                  style={{
                    background: "transparent",
                    border: "none",
                    color: "white",
                    fontSize: 24,
                    lineHeight: 1,
                    cursor: "pointer",
                    padding: 6,
                    fontFamily: "Arial, sans-serif",
                  }}
                >
                  {menuOpen ? "✕" : "☰"}
                </button>
              </>
            )}
          </div>

          {/* Mobile menu panel */}
          {!isLandingPage && menuOpen && (
            <div className="nav-mobile-panel" style={{ margin: "0 -24px", borderTop: "1px solid rgba(255,255,255,0.1)", paddingBottom: 8 }}>
              <Link href="/curriculum" onClick={closeMenu} style={mobileItem}>Curriculum</Link>
              <Link href="/pocketlab" onClick={closeMenu} style={mobileItem}>High Schools — All Departments</Link>
              <Link href="/colleges" onClick={closeMenu} style={mobileItem}>Colleges — General Studies</Link>
              <Link href="/humanities" onClick={closeMenu} style={mobileItem}>Language Arts — Creative Writing</Link>
              <Link href="/academy" onClick={closeMenu} style={mobileItem}>Independent — Self-Paced</Link>
              <Link href="/professionals" onClick={closeMenu} style={mobileItem}>Professionals</Link>
              <Link href="/librarians" onClick={closeMenu} style={mobileItem}>Librarians</Link>
              <Link href="/novels" onClick={closeMenu} style={mobileItem}>Novels</Link>
              <Link href="/about" onClick={closeMenu} style={mobileItem}>About</Link>
            </div>
          )}
        </nav>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-0EQBLGVCRX"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-0EQBLGVCRX');
        `}
      </Script>
      {children}

        <footer
          style={{
            background: "#0f172a",
            color: "rgba(255,255,255,0.6)",
            padding: "40px 24px",
            textAlign: "center",
            fontSize: 14,
            fontFamily: "Arial, sans-serif",
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
            <Link href="/academy" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>Conceptual Academy</Link>
            {" · "}
            <Link href="/professionals" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>Professionals</Link>
            {" · "}
            <Link href="/novels" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>Novels</Link>
          </p>
        </footer>

        <style>{`
          .nav-burger { display: none; }
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
          @media (max-width: 820px) {
            .nav-desktop { display: none !important; }
            .nav-burger { display: inline-flex !important; }
          }
          @media (min-width: 821px) {
            .nav-mobile-panel { display: none !important; }
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
  fontFamily: "Arial, sans-serif",
};

const dropdownItem: React.CSSProperties = {
  display: "block",
  padding: "10px 20px",
  color: "rgba(255,255,255,0.85)",
  textDecoration: "none",
  fontSize: 14,
  whiteSpace: "nowrap",
  fontFamily: "Arial, sans-serif",
};

const mobileItem: React.CSSProperties = {
  display: "block",
  padding: "14px 24px",
  color: "rgba(255,255,255,0.9)",
  textDecoration: "none",
  fontSize: 16,
  borderTop: "1px solid rgba(255,255,255,0.08)",
  fontFamily: "Arial, sans-serif",
};
