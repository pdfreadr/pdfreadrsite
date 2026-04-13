import React, { useState } from "react";

const features = [
  {
    title: "Focused reading",
    text: "Open PDF and TXT files in a clean Windows workspace built for reading, not clutter.",
  },
  {
    title: "Tabbed documents",
    text: "Work across multiple files with tabs, quick switching, and session restore.",
  },
  {
    title: "Local library",
    text: "Keep documents organized with recents, favorites, bookmarks, and reading progress.",
  },
  {
    title: "Fast search",
    text: "Find what you need quickly with local indexing and offline search tools.",
  },
  {
    title: "Professional PDF tools",
    text: "Use zoom controls, thumbnails, annotations, text selection, and printing in one place.",
  },
  {
    title: "Windows ready",
    text: "Built for desktop use with Explorer integration and a polished local workflow.",
  },
];

const faqs = [
  {
    question: "What files can users open?",
    answer: "PDFReadr is designed for PDF and TXT documents.",
  },
  {
    question: "Does it work offline?",
    answer: "Yes. PDFReadr uses a local-first workflow for reading, indexing, and organization.",
  },
  {
    question: "Can users annotate and print?",
    answer: "Yes. PDFReadr includes annotation, bookmark, search, and print features for document work.",
  },
];

const showcaseSlides = [
  {
    id: "reader",
    label: "Reader",
    title: "Focused reading workspace",
    description: "A large document view with tabs, page tools, and space to stay focused.",
    accent: "#2f6fe4",
  },
  {
    id: "library",
    label: "Library",
    title: "Organized local library",
    description: "Keep recents, favorites, and important files easy to browse and reopen.",
    accent: "#2b8a6d",
  },
  {
    id: "search",
    label: "Search",
    title: "Fast local search",
    description: "Find documents and text quickly with a simple desktop search workflow.",
    accent: "#b07a20",
  },
  {
    id: "tools",
    label: "Tools",
    title: "Bookmarks, notes, and print",
    description: "Work with the practical document tools users expect in one place.",
    accent: "#7b55d6",
  },
];

const styles = {
  page: {
    minHeight: "100vh",
    margin: 0,
    fontFamily: '"Segoe UI", Arial, sans-serif',
    color: "#18283a",
    background: "#f7f9fc",
  },
  shell: {
    maxWidth: 960,
    margin: "0 auto",
    padding: "28px 20px 64px",
  },
  nav: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 16,
    marginBottom: 56,
    flexWrap: "wrap",
  },
  brand: {
    display: "flex",
    alignItems: "center",
    gap: 12,
  },
  brandIcon: {
    width: 42,
    height: 42,
    borderRadius: 12,
    background: "linear-gradient(135deg, #3276e8 0%, #1f4f9f 100%)",
    position: "relative",
  },
  brandDot: {
    position: "absolute",
    top: 8,
    left: 13,
    width: 15,
    height: 15,
    borderRadius: 999,
    background: "#fff",
  },
  brandBar: {
    position: "absolute",
    bottom: 9,
    left: 8,
    width: 26,
    height: 9,
    borderRadius: 999,
    background: "#fff",
  },
  brandName: {
    fontSize: 20,
    fontWeight: 700,
    letterSpacing: "-0.03em",
  },
  brandTag: {
    fontSize: 13,
    color: "#66758a",
  },
  navLinks: {
    display: "flex",
    alignItems: "center",
    gap: 16,
    flexWrap: "wrap",
  },
  link: {
    color: "#44566c",
    textDecoration: "none",
    fontSize: 14,
    fontWeight: 600,
  },
  button: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    height: 44,
    padding: "0 18px",
    borderRadius: 12,
    background: "#1f4f9f",
    color: "#fff",
    textDecoration: "none",
    fontWeight: 700,
  },
  hero: {
    padding: "0 0 36px",
  },
  badge: {
    display: "inline-block",
    padding: "6px 10px",
    borderRadius: 999,
    background: "#e9f0fd",
    color: "#1f4f9f",
    fontSize: 12,
    fontWeight: 700,
    letterSpacing: "0.06em",
    textTransform: "uppercase",
    marginBottom: 18,
  },
  title: {
    fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
    lineHeight: 1.05,
    letterSpacing: "-0.05em",
    margin: "0 0 16px",
    maxWidth: 760,
  },
  lead: {
    margin: "0 0 24px",
    maxWidth: 720,
    fontSize: 18,
    lineHeight: 1.7,
    color: "#556579",
  },
  ctas: {
    display: "flex",
    gap: 12,
    flexWrap: "wrap",
    marginBottom: 32,
  },
  showcase: {
    background: "#ffffff",
    border: "1px solid #e3e9f2",
    borderRadius: 20,
    padding: 16,
    marginBottom: 32,
  },
  showcaseFrame: {
    background: "#f2f6fb",
    border: "1px solid #e0e7f1",
    borderRadius: 16,
    padding: 14,
  },
  window: {
    background: "#ffffff",
    borderRadius: 14,
    border: "1px solid #e2e8f1",
    overflow: "hidden",
    minHeight: 320,
  },
  windowBar: {
    height: 40,
    display: "flex",
    alignItems: "center",
    gap: 8,
    padding: "0 14px",
    background: "#f7f9fc",
    borderBottom: "1px solid #e5ebf3",
  },
  windowDot: (color) => ({
    width: 10,
    height: 10,
    borderRadius: 999,
    background: color,
  }),
  windowTabs: {
    display: "flex",
    gap: 8,
    padding: "12px 14px 0",
    flexWrap: "wrap",
  },
  windowTab: (active) => ({
    padding: "8px 12px",
    borderRadius: 10,
    background: active ? "#edf3ff" : "#f5f7fb",
    border: active ? "1px solid #cfe0ff" : "1px solid #e5ebf3",
    color: active ? "#1f4f9f" : "#5e6d81",
    fontSize: 13,
    fontWeight: 700,
  }),
  windowBody: {
    display: "grid",
    gridTemplateColumns: "92px minmax(0, 1fr)",
    gap: 14,
    padding: 14,
  },
  sideColumn: {
    display: "grid",
    gap: 10,
  },
  sideThumb: {
    height: 60,
    borderRadius: 12,
    background: "#f5f7fb",
    border: "1px solid #e4eaf2",
  },
  documentCard: {
    minHeight: 220,
    borderRadius: 14,
    border: "1px solid #e2e8f1",
    background: "#ffffff",
    padding: 18,
  },
  showcaseTitle: {
    margin: "0 0 8px",
    fontSize: 24,
    fontWeight: 800,
    letterSpacing: "-0.04em",
  },
  showcaseText: {
    margin: "0 0 16px",
    color: "#5d6c80",
    lineHeight: 1.7,
  },
  lineStack: {
    display: "grid",
    gap: 10,
  },
  line: (width, color) => ({
    width,
    height: 10,
    borderRadius: 999,
    background: color,
  }),
  noteBox: (accent) => ({
    marginTop: 18,
    padding: "14px 16px",
    borderRadius: 14,
    background: `${accent}12`,
    border: `1px solid ${accent}30`,
    color: "#324255",
    fontWeight: 600,
  }),
  thumbnailRow: {
    display: "grid",
    gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
    gap: 10,
    marginTop: 12,
  },
  thumbnailButton: (active) => ({
    textAlign: "left",
    borderRadius: 12,
    border: active ? "1px solid #bfd3f7" : "1px solid #e3e9f2",
    background: active ? "#f3f7ff" : "#ffffff",
    padding: 12,
    cursor: "pointer",
  }),
  thumbnailLabel: {
    fontSize: 12,
    color: "#6b7a8d",
    marginBottom: 4,
  },
  thumbnailTitle: {
    fontSize: 14,
    fontWeight: 700,
    color: "#203246",
  },
  secondaryButton: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    height: 44,
    padding: "0 18px",
    borderRadius: 12,
    background: "#ffffff",
    color: "#1f4f9f",
    textDecoration: "none",
    fontWeight: 700,
    border: "1px solid #d9e2ef",
  },
  summaryRow: {
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: 14,
  },
  summaryCard: {
    background: "#ffffff",
    border: "1px solid #e3e9f2",
    borderRadius: 16,
    padding: "18px 16px",
  },
  summaryValue: {
    fontSize: 28,
    fontWeight: 800,
    letterSpacing: "-0.04em",
    marginBottom: 6,
  },
  summaryLabel: {
    fontSize: 14,
    color: "#5e6d81",
  },
  section: {
    marginTop: 48,
  },
  sectionTitle: {
    fontSize: 28,
    letterSpacing: "-0.03em",
    margin: "0 0 10px",
  },
  sectionText: {
    margin: "0 0 20px",
    color: "#5b6a7d",
    lineHeight: 1.7,
    maxWidth: 680,
  },
  featureGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gap: 14,
  },
  featureCard: {
    background: "#ffffff",
    border: "1px solid #e3e9f2",
    borderRadius: 16,
    padding: 20,
  },
  featureTitle: {
    margin: "0 0 8px",
    fontSize: 18,
    fontWeight: 700,
  },
  featureText: {
    margin: 0,
    color: "#5b6a7d",
    lineHeight: 1.7,
    fontSize: 15,
  },
  faqList: {
    display: "grid",
    gap: 12,
  },
  faqItem: {
    background: "#ffffff",
    border: "1px solid #e3e9f2",
    borderRadius: 16,
    padding: 20,
  },
  faqQuestion: {
    margin: "0 0 8px",
    fontSize: 17,
    fontWeight: 700,
  },
  faqAnswer: {
    margin: 0,
    color: "#5b6a7d",
    lineHeight: 1.7,
  },
  ctaPanel: {
    marginTop: 48,
    background: "#ffffff",
    border: "1px solid #e3e9f2",
    borderRadius: 20,
    padding: "28px 24px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 16,
    flexWrap: "wrap",
  },
  footer: {
    marginTop: 36,
    color: "#738296",
    fontSize: 14,
  },
};

function Brand() {
  return (
    <div style={styles.brand}>
      <div style={styles.brandIcon} aria-hidden="true">
        <div style={styles.brandDot} />
        <div style={styles.brandBar} />
      </div>
      <div>
        <div style={styles.brandName}>PDFReadr</div>
        <div style={styles.brandTag}>Fast local document reader</div>
      </div>
    </div>
  );
}

function Showcase({ slide }) {
  return (
    <div style={styles.showcaseFrame}>
      <div style={styles.window}>
        <div style={styles.windowBar}>
          <span style={styles.windowDot("#ff6157")} />
          <span style={styles.windowDot("#ffbe2f")} />
          <span style={styles.windowDot("#28c840")} />
        </div>

        <div style={styles.windowTabs}>
          <div style={styles.windowTab(true)}>{slide.label}</div>
          <div style={styles.windowTab(false)}>Document</div>
          <div style={styles.windowTab(false)}>Search</div>
        </div>

        <div style={styles.windowBody}>
          <div style={styles.sideColumn}>
            <div style={styles.sideThumb} />
            <div style={styles.sideThumb} />
            <div style={styles.sideThumb} />
          </div>

          <div style={styles.documentCard}>
            <h3 style={styles.showcaseTitle}>{slide.title}</h3>
            <p style={styles.showcaseText}>{slide.description}</p>

            <div style={styles.lineStack}>
              <div style={styles.line("54%", slide.accent)} />
              <div style={styles.line("88%", "#d8e0eb")} />
              <div style={styles.line("76%", "#d8e0eb")} />
              <div style={styles.line("92%", "#d8e0eb")} />
              <div style={styles.line("67%", "#d8e0eb")} />
            </div>

            <div style={styles.noteBox(slide.accent)}>{slide.description}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [activeSlideId, setActiveSlideId] = useState(showcaseSlides[0].id);
  const activeSlide =
    showcaseSlides.find((slide) => slide.id === activeSlideId) ??
    showcaseSlides[0];

  return (
    <div style={styles.page}>
      <style>{`
        * { box-sizing: border-box; }
        body { margin: 0; }
        @media (max-width: 720px) {
          .summary-row,
          .feature-grid,
          .thumbnail-row {
            grid-template-columns: 1fr !important;
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
            <a href="#faq" style={styles.link}>
              FAQ
            </a>
            <a href="#buy" style={styles.button}>
              Buy
            </a>
          </div>
        </nav>

        <section style={styles.hero}>
          <div style={styles.badge}>Windows Desktop App</div>
          <h1 style={styles.title}>
            A clean, professional way to read and manage PDF and TXT documents.
          </h1>
          <p style={styles.lead}>
            PDFReadr helps users open, organize, search, annotate, and print
            documents in one focused desktop workspace. It is built for people who
            want a simple reading experience with the tools they actually use.
          </p>

          <div style={styles.ctas}>
            <a href="#buy" style={styles.button}>
              Buy PDFReadr
            </a>
            <a href="#features" style={styles.secondaryButton}>
              View Features
            </a>
          </div>

          <div style={styles.showcase}>
            <Showcase slide={activeSlide} />

            <div className="thumbnail-row" style={styles.thumbnailRow}>
              {showcaseSlides.map((slide) => (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => setActiveSlideId(slide.id)}
                  style={styles.thumbnailButton(slide.id === activeSlide.id)}
                >
                  <div style={styles.thumbnailLabel}>{slide.label}</div>
                  <div style={styles.thumbnailTitle}>{slide.title}</div>
                </button>
              ))}
            </div>
          </div>

          <div className="summary-row" style={styles.summaryRow}>
            <div style={styles.summaryCard}>
              <div style={styles.summaryValue}>PDF + TXT</div>
              <div style={styles.summaryLabel}>Document support for everyday reading workflows</div>
            </div>
            <div style={styles.summaryCard}>
              <div style={styles.summaryValue}>Local-first</div>
              <div style={styles.summaryLabel}>Reading, indexing, and organization stay on device</div>
            </div>
            <div style={styles.summaryCard}>
              <div style={styles.summaryValue}>Built for Windows</div>
              <div style={styles.summaryLabel}>Desktop workflow with tabs, search, and printing</div>
            </div>
          </div>
        </section>

        <section id="features" style={styles.section}>
          <h2 style={styles.sectionTitle}>Features</h2>
          <p style={styles.sectionText}>
            Everything important is easy to scan and easy to understand.
          </p>

          <div className="feature-grid" style={styles.featureGrid}>
            {features.map((feature) => (
              <article key={feature.title} style={styles.featureCard}>
                <h3 style={styles.featureTitle}>{feature.title}</h3>
                <p style={styles.featureText}>{feature.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="faq" style={styles.section}>
          <h2 style={styles.sectionTitle}>FAQ</h2>
          <p style={styles.sectionText}>
            Short answers to the questions most buyers ask first.
          </p>

          <div style={styles.faqList}>
            {faqs.map((item) => (
              <article key={item.question} style={styles.faqItem}>
                <h3 style={styles.faqQuestion}>{item.question}</h3>
                <p style={styles.faqAnswer}>{item.answer}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="buy" style={styles.ctaPanel}>
          <div>
            <h2 style={{ ...styles.sectionTitle, margin: "0 0 8px" }}>Ready to buy?</h2>
            <p style={{ ...styles.sectionText, margin: 0 }}>
              Add your pricing, checkout, or download link here.
            </p>
          </div>
          <a href="#pricing" style={styles.button}>
            See Pricing
          </a>
        </section>

        <footer style={styles.footer}>PDFReadr for Windows</footer>
      </div>
    </div>
  );
}

export default App;
