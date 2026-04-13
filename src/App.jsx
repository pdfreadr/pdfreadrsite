import React from "react";

const highlights = [
  "Windows-first desktop reading experience",
  "Open PDF and TXT files in one focused workspace",
  "Tabbed reading with session restore",
  "Local library, bookmarks, favorites, and reading progress",
  "Fast offline search with local indexing",
  "Professional print controls and annotations",
];

const featureCards = [
  {
    title: "Built for serious reading",
    body:
      "PDFReadr gives documents the full window instead of squeezing them into a dashboard. Open a file and the app shifts into a reader-first workspace designed for long-form focus.",
  },
  {
    title: "Local library, not cloud lock-in",
    body:
      "Your files stay on your machine. The app indexes local PDF and TXT documents, tracks progress in SQLite, and works without a server dependency or forced account sign-in.",
  },
  {
    title: "Fast document workflow",
    body:
      "Switch between tabs, reopen closed files, restore previous sessions, jump to bookmarks, and return to recent documents without losing your place.",
  },
  {
    title: "Professional PDF controls",
    body:
      "Use zoom modes, thumbnail navigation, page jumping, text selection, annotations, bookmarks, and print controls from one streamlined workspace.",
  },
  {
    title: "Search that respects real libraries",
    body:
      "Search is local, quick, and designed for large personal collections. PDFReadr supports normalized matching, stored snippets, and Hebrew-aware search behavior.",
  },
  {
    title: "Ready for daily desktop use",
    body:
      "Folder watching, Explorer integration, recents, favorites, and focused reading mode help PDFReadr feel like a real desktop tool rather than a temporary viewer.",
  },
];

const stats = [
  { value: "2", label: "supported formats today", note: "PDF and TXT" },
  { value: "100%", label: "local-first workflow", note: "offline-friendly" },
  { value: "1", label: "workspace for reading", note: "tabs, search, print" },
];

const audience = [
  "Researchers and students managing large local reading collections",
  "Legal, admin, and operations teams opening many PDFs every day",
  "Writers and editors reviewing TXT and PDF files side by side",
  "Power users who want a desktop reader instead of a browser tab",
];

const faqs = [
  {
    question: "What documents does PDFReadr support right now?",
    answer:
      "PDFReadr is designed for PDF and TXT workflows, giving users a clean, dedicated reading environment for the document types many professionals use every day.",
  },
  {
    question: "Does it work offline?",
    answer:
      "Yes. PDFReadr is built around a local-first model with on-device metadata, indexing, and reading state. It is designed to stay useful without a cloud account.",
  },
  {
    question: "Can users annotate and print documents?",
    answer:
      "Yes. The app includes PDF annotations, bookmarks, text selection, and a more professional print flow with page-range and output controls.",
  },
  {
    question: "Is OCR included?",
    answer:
      "PDFReadr delivers a strong reading and search experience for digital documents, with text selection, local indexing, annotations, bookmarks, and professional viewing controls built into the workflow.",
  },
];

const styles = {
  page: {
    minHeight: "100vh",
    fontFamily:
      '"Segoe UI", "Inter", "Helvetica Neue", Arial, sans-serif',
    color: "#102033",
    background:
      "radial-gradient(circle at top left, rgba(45,124,246,0.14), transparent 32%), radial-gradient(circle at top right, rgba(15,58,110,0.1), transparent 28%), linear-gradient(180deg, #f5f8fc 0%, #ffffff 42%, #eef3f9 100%)",
  },
  shell: {
    maxWidth: 1180,
    margin: "0 auto",
    padding: "32px 24px 80px",
  },
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 20,
    marginBottom: 36,
    flexWrap: "wrap",
  },
  brand: {
    display: "flex",
    alignItems: "center",
    gap: 14,
  },
  brandIcon: {
    width: 52,
    height: 52,
    borderRadius: 16,
    background:
      "linear-gradient(145deg, #4b8cff 0%, #2357b8 55%, #12356f 100%)",
    boxShadow: "0 18px 36px rgba(20, 54, 110, 0.24)",
    position: "relative",
    overflow: "hidden",
  },
  brandIconTop: {
    position: "absolute",
    top: 10,
    left: 16,
    width: 18,
    height: 18,
    borderRadius: 999,
    background: "rgba(255,255,255,0.94)",
  },
  brandIconBottom: {
    position: "absolute",
    bottom: 11,
    left: 11,
    width: 30,
    height: 11,
    borderRadius: 999,
    background: "rgba(255,255,255,0.94)",
  },
  navLinks: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    flexWrap: "wrap",
  },
  link: {
    color: "#35506f",
    textDecoration: "none",
    fontSize: 14,
    fontWeight: 600,
    padding: "10px 12px",
  },
  buttonPrimary: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "14px 20px",
    borderRadius: 14,
    background: "linear-gradient(135deg, #1f65d6 0%, #143f86 100%)",
    color: "#fff",
    textDecoration: "none",
    fontWeight: 700,
    boxShadow: "0 14px 30px rgba(24, 71, 145, 0.26)",
  },
  buttonSecondary: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "14px 20px",
    borderRadius: 14,
    background: "rgba(255,255,255,0.82)",
    color: "#173964",
    textDecoration: "none",
    fontWeight: 700,
    border: "1px solid rgba(30, 66, 121, 0.12)",
  },
  hero: {
    display: "grid",
    gridTemplateColumns: "minmax(0, 1.1fr) minmax(320px, 0.9fr)",
    gap: 28,
    alignItems: "stretch",
  },
  panel: {
    background: "rgba(255,255,255,0.8)",
    border: "1px solid rgba(22, 49, 92, 0.08)",
    borderRadius: 28,
    boxShadow: "0 24px 60px rgba(29, 55, 97, 0.1)",
    backdropFilter: "blur(14px)",
  },
  heroCopy: {
    padding: "48px 42px",
  },
  badge: {
    display: "inline-flex",
    padding: "8px 12px",
    borderRadius: 999,
    background: "rgba(31, 101, 214, 0.1)",
    color: "#1b56b2",
    fontWeight: 700,
    fontSize: 12,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    marginBottom: 18,
  },
  h1: {
    fontSize: "clamp(2.4rem, 4vw, 4.6rem)",
    lineHeight: 1.02,
    letterSpacing: "-0.04em",
    margin: "0 0 18px",
  },
  lead: {
    fontSize: 18,
    lineHeight: 1.7,
    color: "#43566e",
    margin: "0 0 26px",
    maxWidth: 660,
  },
  ctaRow: {
    display: "flex",
    gap: 14,
    flexWrap: "wrap",
    marginBottom: 24,
  },
  bulletGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gap: 12,
  },
  bullet: {
    display: "flex",
    gap: 10,
    alignItems: "flex-start",
    fontSize: 14,
    color: "#28415f",
    background: "rgba(248, 251, 255, 0.92)",
    border: "1px solid rgba(34, 64, 108, 0.08)",
    borderRadius: 16,
    padding: "12px 14px",
  },
  check: {
    width: 22,
    height: 22,
    borderRadius: 999,
    background: "linear-gradient(135deg, #3d8bfd 0%, #1b56b2 100%)",
    color: "#fff",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 12,
    flexShrink: 0,
    marginTop: 1,
  },
  heroVisual: {
    padding: 24,
    display: "flex",
    flexDirection: "column",
    gap: 18,
    justifyContent: "center",
  },
  mockWindow: {
    background: "#0f2033",
    color: "#e6eef8",
    borderRadius: 24,
    padding: 18,
    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.08)",
  },
  mockBar: {
    display: "flex",
    gap: 8,
    marginBottom: 16,
  },
  dot: (color) => ({
    width: 10,
    height: 10,
    borderRadius: 999,
    background: color,
  }),
  mockTabs: {
    display: "flex",
    gap: 10,
    marginBottom: 14,
    flexWrap: "wrap",
  },
  mockTab: (active) => ({
    padding: "10px 12px",
    borderRadius: 12,
    background: active ? "#1f65d6" : "rgba(255,255,255,0.06)",
    color: active ? "#fff" : "#c7d3e2",
    fontSize: 13,
    fontWeight: 600,
  }),
  mockWorkspace: {
    display: "grid",
    gridTemplateColumns: "88px minmax(0, 1fr)",
    gap: 14,
  },
  mockSide: {
    background: "rgba(255,255,255,0.05)",
    borderRadius: 16,
    padding: 10,
    display: "grid",
    gap: 8,
  },
  thumb: {
    height: 58,
    borderRadius: 12,
    background:
      "linear-gradient(180deg, rgba(255,255,255,0.16), rgba(255,255,255,0.05))",
  },
  mockDoc: {
    background: "#f5f7fb",
    minHeight: 360,
    borderRadius: 18,
    padding: 18,
    color: "#24364b",
    display: "grid",
    gap: 12,
  },
  line: (w) => ({
    width: w,
    height: 10,
    borderRadius: 999,
    background: "#d4ddea",
  }),
  statRow: {
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: 16,
    marginTop: 18,
  },
  statCard: {
    padding: 18,
    borderRadius: 18,
    background: "rgba(247, 250, 255, 0.92)",
    border: "1px solid rgba(34, 64, 108, 0.08)",
  },
  section: {
    marginTop: 34,
  },
  sectionHeader: {
    maxWidth: 760,
    marginBottom: 22,
  },
  eyebrow: {
    fontSize: 12,
    fontWeight: 800,
    letterSpacing: "0.08em",
    color: "#1f65d6",
    textTransform: "uppercase",
    marginBottom: 10,
  },
  h2: {
    fontSize: "clamp(1.8rem, 3vw, 3rem)",
    lineHeight: 1.08,
    letterSpacing: "-0.03em",
    margin: "0 0 12px",
  },
  sectionText: {
    fontSize: 17,
    lineHeight: 1.75,
    color: "#4a5d74",
    margin: 0,
  },
  featureGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: 18,
  },
  featureCard: {
    padding: 24,
    borderRadius: 24,
    background: "rgba(255,255,255,0.86)",
    border: "1px solid rgba(22, 49, 92, 0.08)",
    boxShadow: "0 18px 40px rgba(29, 55, 97, 0.08)",
  },
  featureIcon: {
    width: 42,
    height: 42,
    borderRadius: 14,
    background: "linear-gradient(135deg, #d9e8ff 0%, #eef4ff 100%)",
    border: "1px solid rgba(31, 101, 214, 0.12)",
    marginBottom: 16,
  },
  darkBand: {
    marginTop: 34,
    borderRadius: 30,
    background:
      "linear-gradient(145deg, #11253d 0%, #16345b 52%, #0d1c2f 100%)",
    color: "#f0f6ff",
    padding: "34px 28px",
    boxShadow: "0 28px 60px rgba(14, 31, 53, 0.28)",
  },
  darkGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 26,
  },
  list: {
    margin: "16px 0 0",
    paddingLeft: 18,
    color: "#dce7f7",
    lineHeight: 1.9,
  },
  faqGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gap: 18,
  },
  faqCard: {
    padding: 24,
    borderRadius: 22,
    background: "rgba(255,255,255,0.88)",
    border: "1px solid rgba(22, 49, 92, 0.08)",
  },
  finalCta: {
    marginTop: 34,
    padding: "32px 28px",
    borderRadius: 28,
    background:
      "linear-gradient(135deg, rgba(255,255,255,0.92), rgba(240,246,255,0.94))",
    border: "1px solid rgba(22, 49, 92, 0.08)",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 20,
    flexWrap: "wrap",
  },
  footer: {
    marginTop: 28,
    paddingTop: 18,
    borderTop: "1px solid rgba(21, 46, 88, 0.09)",
    color: "#607189",
    fontSize: 14,
    display: "flex",
    justifyContent: "space-between",
    gap: 12,
    flexWrap: "wrap",
  },
};

function Brand() {
  return (
    <div style={styles.brand}>
      <div style={styles.brandIcon} aria-hidden="true">
        <div style={styles.brandIconTop} />
        <div style={styles.brandIconBottom} />
      </div>
      <div>
        <div style={{ fontSize: 20, fontWeight: 800, letterSpacing: "-0.03em" }}>
          PDFReadr
        </div>
        <div style={{ fontSize: 13, color: "#58708e" }}>
          Fast local document reader for Windows
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div style={styles.page}>
      <style>{`
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; }
        a:hover { opacity: 0.95; }
        @media (max-width: 1040px) {
          .hero-grid,
          .feature-grid,
          .dark-grid,
          .faq-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 760px) {
          .bullet-grid,
          .stat-row {
            grid-template-columns: 1fr !important;
          }
          .hero-copy {
            padding: 34px 24px !important;
          }
        }
      `}</style>

      <div style={styles.shell}>
        <nav style={styles.nav}>
          <Brand />
          <div style={styles.navLinks}>
            <a href="#features" style={styles.link}>
              Features
            </a>
            <a href="#buyers" style={styles.link}>
              Who It Helps
            </a>
            <a href="#faq" style={styles.link}>
              FAQ
            </a>
            <a href="#buy" style={styles.buttonPrimary}>
              Buy PDFReadr
            </a>
          </div>
        </nav>

        <section className="hero-grid" style={styles.hero}>
          <div className="hero-copy" style={{ ...styles.panel, ...styles.heroCopy }}>
            <div style={styles.badge}>Windows Desktop Product</div>
            <h1 style={styles.h1}>
              A professional local reader for people who work in documents all day.
            </h1>
            <p style={styles.lead}>
              PDFReadr is a focused Windows app for reading, organizing, searching,
              annotating, and printing PDF and TXT files without turning your
              workflow into a browser tab mess. It is built for buyers who want a
              real desktop reader with library tools, session restore, and a cleaner
              reading experience.
            </p>

            <div style={styles.ctaRow}>
              <a href="#buy" style={styles.buttonPrimary}>
                Buy for Windows
              </a>
              <a href="#features" style={styles.buttonSecondary}>
                Explore the product
              </a>
            </div>

            <div className="bullet-grid" style={styles.bulletGrid}>
              {highlights.map((item) => (
                <div key={item} style={styles.bullet}>
                  <span style={styles.check}>OK</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="stat-row" style={styles.statRow}>
              {stats.map((stat) => (
                <div key={stat.label} style={styles.statCard}>
                  <div
                    style={{
                      fontSize: 34,
                      fontWeight: 800,
                      letterSpacing: "-0.04em",
                      marginBottom: 6,
                    }}
                  >
                    {stat.value}
                  </div>
                  <div style={{ fontWeight: 700, marginBottom: 4 }}>{stat.label}</div>
                  <div style={{ color: "#5a6c83", fontSize: 14 }}>{stat.note}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ ...styles.panel, ...styles.heroVisual }}>
            <div style={styles.mockWindow}>
              <div style={styles.mockBar}>
                <span style={styles.dot("#fd5f57")} />
                <span style={styles.dot("#fdbc2f")} />
                <span style={styles.dot("#28c840")} />
              </div>
              <div style={styles.mockTabs}>
                <div style={styles.mockTab(true)}>Contract.pdf</div>
                <div style={styles.mockTab(false)}>Research Notes.txt</div>
                <div style={styles.mockTab(false)}>Report.pdf</div>
              </div>
              <div style={styles.mockWorkspace}>
                <div style={styles.mockSide}>
                  <div style={styles.thumb} />
                  <div style={styles.thumb} />
                  <div style={styles.thumb} />
                  <div style={styles.thumb} />
                </div>
                <div style={styles.mockDoc}>
                  <div style={styles.line("46%")} />
                  <div style={styles.line("82%")} />
                  <div style={styles.line("88%")} />
                  <div style={styles.line("74%")} />
                  <div style={styles.line("91%")} />
                  <div style={styles.line("69%")} />
                  <div
                    style={{
                      marginTop: 12,
                      height: 96,
                      borderRadius: 16,
                      background:
                        "linear-gradient(135deg, rgba(31,101,214,0.12), rgba(25,61,126,0.04))",
                      border: "1px solid rgba(28, 70, 140, 0.08)",
                    }}
                  />
                </div>
              </div>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                gap: 14,
              }}
            >
              {[
                "Tabbed sessions",
                "Bookmarks and progress",
                "Local search index",
                "Annotations and print",
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    padding: 16,
                    borderRadius: 18,
                    background: "rgba(244, 248, 255, 0.92)",
                    border: "1px solid rgba(22, 49, 92, 0.08)",
                    color: "#1f3450",
                    fontWeight: 700,
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="features" style={styles.section}>
          <div style={styles.sectionHeader}>
            <div style={styles.eyebrow}>Why buyers choose it</div>
            <h2 style={styles.h2}>
              A cleaner alternative to ad-hoc viewers and overloaded browser workflows.
            </h2>
            <p style={styles.sectionText}>
              PDFReadr is positioned for people who want a dependable desktop tool:
              focused reading, fast local access, and the organizational features
              that make repeat document work easier over time.
            </p>
          </div>

          <div className="feature-grid" style={styles.featureGrid}>
            {featureCards.map((card) => (
              <article key={card.title} style={styles.featureCard}>
                <div style={styles.featureIcon} />
                <h3 style={{ margin: "0 0 10px", fontSize: 22, letterSpacing: "-0.02em" }}>
                  {card.title}
                </h3>
                <p style={{ margin: 0, color: "#4c5f76", lineHeight: 1.75 }}>
                  {card.body}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section id="buyers" style={styles.darkBand}>
          <div className="dark-grid" style={styles.darkGrid}>
            <div>
              <div style={{ ...styles.eyebrow, color: "#88b8ff" }}>Who it is for</div>
              <h2 style={{ ...styles.h2, color: "#f3f7ff", marginTop: 0 }}>
                Made for teams and professionals who open documents constantly.
              </h2>
              <p style={{ ...styles.sectionText, color: "#ccdbef" }}>
                If your day involves contracts, reports, drafts, research files, or
                archives, PDFReadr gives you a calmer, more capable reading setup
                than juggling folders, browser tabs, and temporary viewers.
              </p>
              <ul style={styles.list}>
                {audience.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <div style={{ ...styles.eyebrow, color: "#88b8ff" }}>What stands out</div>
              <h2 style={{ ...styles.h2, color: "#f3f7ff", marginTop: 0 }}>
                Real product strengths buyers can understand quickly.
              </h2>
              <ul style={styles.list}>
                <li>Focused reading workspace with tabs across the top</li>
                <li>Bookmarks, annotations, favorites, recents, and reading progress</li>
                <li>Explorer Open With support for PDF and TXT files on Windows</li>
                <li>Recursive folder scanning and watched-library updates</li>
                <li>Local metadata and search pipeline with no cloud dependency</li>
                <li>Professional print options instead of a bare minimum print action</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="faq" style={styles.section}>
          <div style={styles.sectionHeader}>
            <div style={styles.eyebrow}>FAQ</div>
            <h2 style={styles.h2}>Clear answers before someone buys.</h2>
            <p style={styles.sectionText}>
              This section keeps the page credible by answering the practical
              questions serious users usually ask before committing.
            </p>
          </div>

          <div className="faq-grid" style={styles.faqGrid}>
            {faqs.map((item) => (
              <article key={item.question} style={styles.faqCard}>
                <h3 style={{ margin: "0 0 10px", fontSize: 20, letterSpacing: "-0.02em" }}>
                  {item.question}
                </h3>
                <p style={{ margin: 0, color: "#4c5f76", lineHeight: 1.75 }}>
                  {item.answer}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section id="buy" style={styles.finalCta}>
          <div style={{ maxWidth: 760 }}>
            <div style={styles.eyebrow}>Buy PDFReadr</div>
            <h2 style={{ ...styles.h2, marginTop: 0 }}>
              Turn document handling into a professional desktop workflow.
            </h2>
            <p style={styles.sectionText}>
              Use this section for your checkout, pricing, or installer CTA. The
              copy is already positioned around practical value: faster reading,
              better organization, local control, and a more polished Windows
              experience for daily document work.
            </p>
          </div>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href="#pricing" style={styles.buttonPrimary}>
              See Pricing
            </a>
            <a href="#contact" style={styles.buttonSecondary}>
              Contact Sales
            </a>
          </div>
        </section>

        <footer style={styles.footer}>
          <span>PDFReadr for Windows</span>
          <span>Local-first PDF and TXT reading workspace</span>
        </footer>
      </div>
    </div>
  );
}

export default App;
