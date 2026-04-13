import React, { useMemo, useState } from "react";

const assetBase =
  typeof import.meta !== "undefined" &&
  import.meta.env &&
  import.meta.env.BASE_URL
    ? import.meta.env.BASE_URL
    : "/";

const productUrl = "#buy";
const logoSrc = `${assetBase}assets/icon/generated/icon_256x256.png`;

const lightImages = [
  {
    id: "reader",
    title: "Main reader view",
    caption:
      "The reading workspace keeps the document front and center with tabs, page controls, and a calm layout.",
    src: `${assetBase}LIGHT_SCREENSHOT_1.png`,
  },
  {
    id: "library",
    title: "Library and recents",
    caption:
      "Browse your collection, return to recent files, and move through documents without losing context.",
    src: `${assetBase}LIGHT_SCREENSHOT_2.png`,
  },
  {
    id: "tools",
    title: "Bookmarks and tools",
    caption:
      "Preview the side tools for bookmarks, annotations, thumbnails, and the practical reading controls users expect.",
    src: `${assetBase}LIGHT_SCREENSHOT_3.png`,
  },
];

const darkImages = [
  {
    id: "reader",
    title: "Main reader view",
    caption:
      "Dark mode keeps the same focused layout while giving long reading sessions a softer visual tone.",
    src: `${assetBase}DARK_SCREENSHOT_1.png`,
  },
  {
    id: "library",
    title: "Library and recents",
    caption:
      "Show the dark library experience with a simple browsing flow and familiar navigation.",
    src: `${assetBase}DARK_SCREENSHOT_2.png`,
  },
  {
    id: "tools",
    title: "Bookmarks and tools",
    caption:
      "Highlight the dark reader tools, side panels, and polished viewing controls in a matching theme.",
    src: `${assetBase}DARK_SCREENSHOT_3.png`,
  },
];

const featureGroups = [
  {
    title: "Focused reading",
    text:
      "PDFReadr is designed so the document owns the screen. When a file opens, the interface gets out of the way and gives users a more serious desktop reading experience.",
  },
  {
    title: "Tabbed workflow",
    text:
      "Users can keep multiple PDF and TXT files open, switch between tabs quickly, and continue working without reopening everything from scratch.",
  },
  {
    title: "Library and progress",
    text:
      "Recent documents, favorites, bookmarks, and reading progress help users stay organized across everyday document work.",
  },
  {
    title: "Local-first search",
    text:
      "Search runs through a local workflow built for speed and privacy, making it easier to find files and return to useful content quickly.",
  },
  {
    title: "Practical PDF tools",
    text:
      "Zoom controls, thumbnail browsing, page navigation, text selection, annotations, and printing are all available inside the same workspace.",
  },
  {
    title: "Made for Windows",
    text:
      "The product is shaped for desktop use, with a layout and behavior that feel at home in a Windows reading workflow.",
  },
];

const essentials = [
  {
    title: "PDF and TXT support",
    text: "Built around the file types users open every day for reading, reviewing, and reference work.",
  },
  {
    title: "Light and dark reading",
    text: "Visitors can preview both website themes, and the product story stays clean in either mode.",
  },
  {
    title: "Simple purchase flow",
    text: "A clear buy button keeps the page action-oriented and ready for your checkout link.",
  },
];

const faqs = [
  {
    question: "What does PDFReadr help with?",
    answer:
      "It gives users a cleaner desktop workflow for opening, reading, organizing, searching, and printing PDF and TXT documents.",
  },
  {
    question: "Who is it for?",
    answer:
      "It fits people who spend real time in documents: reading reports, reviewing files, studying material, or managing a personal library.",
  },
  {
    question: "Why is it different from a basic viewer?",
    answer:
      "The product combines a focused reader workspace with tabs, search, bookmarks, recents, and practical reading tools instead of just showing a single file.",
  },
];

function makeTheme(darkMode) {
  return darkMode
    ? {
        pageBg: "#050608",
        pageGradient:
          "radial-gradient(circle at top left, rgba(28,33,41,0.9), transparent 34%), linear-gradient(180deg, #050608 0%, #0b1117 100%)",
        panel: "#11161d",
        panelAlt: "#161d26",
        border: "#293342",
        text: "#f3f5f8",
        muted: "#a9b4c2",
        subtle: "#7f8c9d",
        accent: "#7db3ff",
        accentStrong: "#4f8ef7",
        accentSoft: "rgba(125,179,255,0.12)",
        buttonText: "#08111c",
        buttonBg: "#dbe8ff",
        secondaryBg: "#161d26",
        secondaryText: "#f3f5f8",
        cardShadow: "0 20px 60px rgba(0,0,0,0.34)",
        screenshotBg: "#0d131a",
      }
    : {
        pageBg: "#f7f8fa",
        pageGradient:
          "radial-gradient(circle at top left, rgba(241,228,200,0.55), transparent 28%), linear-gradient(180deg, #f7f8fa 0%, #f6f1e8 100%)",
        panel: "#ffffff",
        panelAlt: "#f6f8fb",
        border: "#dce3eb",
        text: "#18232f",
        muted: "#5f6d80",
        subtle: "#7c8898",
        accent: "#2357b8",
        accentStrong: "#1c4b9c",
        accentSoft: "rgba(35,87,184,0.1)",
        buttonText: "#ffffff",
        buttonBg: "#2357b8",
        secondaryBg: "#ffffff",
        secondaryText: "#1b3557",
        cardShadow: "0 18px 44px rgba(16,31,54,0.08)",
        screenshotBg: "#eef2f7",
      };
}

function ScreenshotFallback({ theme, item, darkMode }) {
  return (
    <div
      style={{
        width: "100%",
        minHeight: 520,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: theme.screenshotBg,
        color: theme.text,
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 860,
          padding: 24,
        }}
      >
        <div
          style={{
            border: `1px solid ${theme.border}`,
            borderRadius: 22,
            overflow: "hidden",
            background: theme.panel,
            boxShadow: theme.cardShadow,
          }}
        >
          <div
            style={{
              height: 46,
              borderBottom: `1px solid ${theme.border}`,
              background: theme.panelAlt,
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: "0 16px",
            }}
          >
            <span
              style={{
                width: 10,
                height: 10,
                borderRadius: 999,
                background: "#ff6157",
              }}
            />
            <span
              style={{
                width: 10,
                height: 10,
                borderRadius: 999,
                background: "#ffbe2f",
              }}
            />
            <span
              style={{
                width: 10,
                height: 10,
                borderRadius: 999,
                background: "#28c840",
              }}
            />
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "96px minmax(0, 1fr)",
              gap: 16,
              padding: 18,
            }}
          >
            <div style={{ display: "grid", gap: 10 }}>
              {[0, 1, 2].map((index) => (
                <div
                  key={index}
                  style={{
                    height: 62,
                    borderRadius: 14,
                    background: theme.panelAlt,
                    border: `1px solid ${theme.border}`,
                  }}
                />
              ))}
            </div>

            <div
              style={{
                minHeight: 300,
                borderRadius: 18,
                border: `1px solid ${theme.border}`,
                background: theme.panel,
                padding: 24,
              }}
            >
              <div
                style={{
                  display: "inline-block",
                  marginBottom: 12,
                  padding: "6px 10px",
                  borderRadius: 999,
                  background: theme.accentSoft,
                  color: theme.accent,
                  fontSize: 12,
                  fontWeight: 700,
                }}
              >
                {darkMode ? "Dark preview" : "Light preview"}
              </div>
              <h3
                style={{
                  margin: "0 0 10px",
                  fontSize: 28,
                  letterSpacing: "-0.04em",
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  margin: "0 0 20px",
                  color: theme.muted,
                  lineHeight: 1.7,
                  fontSize: 16,
                }}
              >
                {item.caption}
              </p>
              <div style={{ display: "grid", gap: 10 }}>
                <div
                  style={{
                    width: "54%",
                    height: 10,
                    borderRadius: 999,
                    background: theme.accentStrong,
                  }}
                />
                <div
                  style={{
                    width: "88%",
                    height: 10,
                    borderRadius: 999,
                    background: theme.border,
                  }}
                />
                <div
                  style={{
                    width: "76%",
                    height: 10,
                    borderRadius: 999,
                    background: theme.border,
                  }}
                />
                <div
                  style={{
                    width: "92%",
                    height: 10,
                    borderRadius: 999,
                    background: theme.border,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PreviewImage({ item, theme, darkMode }) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return <ScreenshotFallback theme={theme} item={item} darkMode={darkMode} />;
  }

  return (
    <img
      src={item.src}
      alt={item.title}
      onError={() => setHasError(true)}
      style={{
        display: "block",
        width: "100%",
        maxHeight: 520,
        objectFit: "contain",
        background: theme.screenshotBg,
      }}
    />
  );
}

function Brand({ theme, darkMode }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
      <div
        style={{
          width: 48,
          height: 48,
          borderRadius: 14,
          background: darkMode
            ? "linear-gradient(145deg, #7db3ff 0%, #4f8ef7 100%)"
            : "linear-gradient(145deg, #4b8cff 0%, #2357b8 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          boxShadow: theme.cardShadow,
        }}
      >
        <img
          src={logoSrc}
          alt="PDFReadr logo"
          style={{ width: 34, height: 34, objectFit: "contain" }}
        />
      </div>
      <div>
        <div
          style={{
            fontSize: 20,
            fontWeight: 700,
            letterSpacing: "-0.03em",
            color: theme.text,
          }}
        >
          PDFReadr
        </div>
        <div style={{ fontSize: 13, color: theme.subtle }}>
          Fast local document reader
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeImage, setActiveImage] = useState(0);

  const theme = useMemo(() => makeTheme(darkMode), [darkMode]);
  const previewImages = darkMode ? darkImages : lightImages;
  const safeActiveImage = Math.min(
    activeImage,
    Math.max(previewImages.length - 1, 0),
  );
  const selectedImage = previewImages[safeActiveImage] || previewImages[0];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: theme.pageBg,
        backgroundImage: theme.pageGradient,
        color: theme.text,
        fontFamily: '"Segoe UI", Arial, sans-serif',
        transition: "background-color 180ms ease, color 180ms ease",
      }}
    >
      <style>{`
        * { box-sizing: border-box; }
        body { margin: 0; }
        button { font: inherit; }
        @media (max-width: 900px) {
          .preview-layout,
          .overview-grid,
          .essentials-grid,
          .feature-grid,
          .footer-row {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 720px) {
          .hero-actions,
          .top-actions,
          .thumb-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

      <div
        style={{
          maxWidth: 1180,
          margin: "0 auto",
          padding: "28px 20px 72px",
        }}
      >
        <header
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
            flexWrap: "wrap",
            paddingBottom: 20,
            marginBottom: 40,
            borderBottom: `1px solid ${theme.border}`,
          }}
        >
          <Brand theme={theme} darkMode={darkMode} />

          <div
            className="top-actions"
            style={{
              display: "grid",
              gridAutoFlow: "column",
              gap: 12,
              alignItems: "center",
            }}
          >
            <button
              type="button"
              onClick={() => {
                setDarkMode((previous) => !previous);
                setActiveImage(0);
              }}
              style={{
                height: 44,
                padding: "0 16px",
                borderRadius: 999,
                border: `1px solid ${theme.border}`,
                background: theme.secondaryBg,
                color: theme.secondaryText,
                cursor: "pointer",
              }}
            >
              {darkMode ? "Light mode" : "Dark mode"}
            </button>

            <a
              href={productUrl}
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                height: 44,
                padding: "0 18px",
                borderRadius: 999,
                background: theme.buttonBg,
                color: theme.buttonText,
                textDecoration: "none",
                fontWeight: 700,
              }}
            >
              Buy PDFReadr
            </a>
          </div>
        </header>

        <main>
          <section style={{ paddingBottom: 24 }}>
            <div
              style={{
                display: "inline-flex",
                padding: "7px 12px",
                borderRadius: 999,
                background: theme.accentSoft,
                color: theme.accent,
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: 18,
              }}
            >
              Windows Desktop Reader
            </div>

            <h1
              style={{
                margin: "0 0 14px",
                maxWidth: 820,
                fontSize: "clamp(2.4rem, 5vw, 4.6rem)",
                lineHeight: 1.02,
                letterSpacing: "-0.05em",
              }}
            >
              A cleaner way to read, organize, and work through PDF and TXT files.
            </h1>

            <p
              style={{
                margin: "0 0 24px",
                maxWidth: 760,
                color: theme.muted,
                fontSize: 18,
                lineHeight: 1.75,
              }}
            >
              PDFReadr is built for people who spend real time in documents. It
              brings together focused reading, tabbed file handling, local search,
              bookmarks, annotations, and printing in a layout that stays simple
              and easy to use.
            </p>

            <div
              className="hero-actions"
              style={{
                display: "grid",
                gridAutoFlow: "column",
                justifyContent: "start",
                gap: 12,
                marginBottom: 28,
              }}
            >
              <a
                href={productUrl}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: 48,
                  padding: "0 22px",
                  borderRadius: 14,
                  background: theme.buttonBg,
                  color: theme.buttonText,
                  textDecoration: "none",
                  fontWeight: 700,
                }}
              >
                Buy Now
              </a>
              <a
                href="#features"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: 48,
                  padding: "0 22px",
                  borderRadius: 14,
                  background: theme.secondaryBg,
                  color: theme.secondaryText,
                  border: `1px solid ${theme.border}`,
                  textDecoration: "none",
                  fontWeight: 700,
                }}
              >
                View Features
              </a>
            </div>

            <div
              style={{
                border: `1px solid ${theme.border}`,
                borderRadius: 30,
                background: theme.panel,
                boxShadow: theme.cardShadow,
                padding: 18,
              }}
            >
              <div
                style={{
                  position: "relative",
                  borderRadius: 24,
                  overflow: "hidden",
                  border: `1px solid ${theme.border}`,
                  background: theme.screenshotBg,
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    left: "50%",
                    top: 18,
                    transform: "translateX(-50%)",
                    zIndex: 1,
                  }}
                >
                  <a
                    href={productUrl}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      height: 46,
                      padding: "0 22px",
                      borderRadius: 999,
                      background: theme.buttonBg,
                      color: theme.buttonText,
                      textDecoration: "none",
                      fontWeight: 700,
                      boxShadow: theme.cardShadow,
                    }}
                  >
                    Buy PDFReadr
                  </a>
                </div>

                <PreviewImage
                  item={selectedImage}
                  theme={theme}
                  darkMode={darkMode}
                />
              </div>

              <div
                className="preview-layout"
                style={{
                  display: "grid",
                  gridTemplateColumns: "0.84fr 1.16fr",
                  gap: 16,
                  marginTop: 18,
                }}
              >
                <div
                  style={{
                    border: `1px solid ${theme.border}`,
                    borderRadius: 20,
                    background: theme.panel,
                    padding: 18,
                  }}
                >
                  <div
                    style={{
                      display: "inline-flex",
                      padding: "5px 10px",
                      borderRadius: 999,
                      background: theme.accentSoft,
                      color: theme.accent,
                      fontSize: 12,
                      fontWeight: 700,
                      marginBottom: 12,
                    }}
                  >
                    {darkMode ? "Dark preview" : "Light preview"}
                  </div>
                  <h2
                    style={{
                      margin: "0 0 8px",
                      fontSize: 22,
                      letterSpacing: "-0.03em",
                    }}
                  >
                    {selectedImage.title}
                  </h2>
                  <p
                    style={{
                      margin: 0,
                      color: theme.muted,
                      lineHeight: 1.75,
                    }}
                  >
                    {selectedImage.caption}
                  </p>
                </div>

                <div
                  className="thumb-grid"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                    gap: 12,
                  }}
                >
                  {previewImages.map((image, index) => (
                    <button
                      key={`${darkMode ? "dark" : "light"}-${image.id}`}
                      type="button"
                      onClick={() => setActiveImage(index)}
                      aria-pressed={safeActiveImage === index}
                      style={{
                        padding: 0,
                        textAlign: "left",
                        borderRadius: 18,
                        overflow: "hidden",
                        border: `1px solid ${theme.border}`,
                        background: theme.panel,
                        cursor: "pointer",
                        outline:
                          safeActiveImage === index
                            ? `2px solid ${theme.accentStrong}`
                            : "none",
                        boxShadow: safeActiveImage === index
                          ? theme.cardShadow
                          : "none",
                      }}
                    >
                      <div
                        style={{
                          aspectRatio: "4 / 3",
                          background: theme.screenshotBg,
                          borderBottom: `1px solid ${theme.border}`,
                          overflow: "hidden",
                        }}
                      >
                        <img
                          src={image.src}
                          alt={image.title}
                          onError={(event) => {
                            event.currentTarget.style.display = "none";
                          }}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                      <div style={{ padding: 12 }}>
                        <div
                          style={{
                            fontSize: 14,
                            fontWeight: 700,
                            color: theme.text,
                          }}
                        >
                          {image.title}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section
            style={{
              padding: "42px 0 10px",
              borderTop: `1px solid ${theme.border}`,
              marginTop: 28,
            }}
          >
            <div
              className="overview-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "0.95fr 1.05fr",
                gap: 20,
                alignItems: "start",
              }}
            >
              <div>
                <div
                  style={{
                    color: theme.subtle,
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    marginBottom: 12,
                  }}
                >
                  Overview
                </div>
                <h2
                  style={{
                    margin: "0 0 12px",
                    fontSize: 34,
                    lineHeight: 1.1,
                    letterSpacing: "-0.04em",
                  }}
                >
                  Minimal on the page, substantial in the product.
                </h2>
                <p
                  style={{
                    margin: 0,
                    color: theme.muted,
                    lineHeight: 1.8,
                    maxWidth: 520,
                  }}
                >
                  The goal is the same as the reader itself: show what matters,
                  reduce clutter, and make the next action obvious. Buyers get a
                  clear view of the app, a simple understanding of the feature
                  set, and a direct path to purchase.
                </p>
              </div>

              <div
                className="feature-grid"
                id="features"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                  gap: 14,
                }}
              >
                {featureGroups.map((item) => (
                  <article
                    key={item.title}
                    style={{
                      border: `1px solid ${theme.border}`,
                      borderRadius: 20,
                      background: theme.panel,
                      padding: 18,
                    }}
                  >
                    <h3
                      style={{
                        margin: "0 0 8px",
                        fontSize: 18,
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      style={{
                        margin: 0,
                        color: theme.muted,
                        lineHeight: 1.75,
                        fontSize: 15,
                      }}
                    >
                      {item.text}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section
            style={{
              padding: "38px 0 10px",
              borderTop: `1px solid ${theme.border}`,
              marginTop: 28,
            }}
          >
            <div
              className="essentials-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                gap: 14,
              }}
            >
              {essentials.map((item) => (
                <article
                  key={item.title}
                  style={{
                    border: `1px solid ${theme.border}`,
                    borderRadius: 20,
                    background: theme.panel,
                    padding: 18,
                  }}
                >
                  <h3
                    style={{
                      margin: "0 0 8px",
                      fontSize: 17,
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      margin: 0,
                      color: theme.muted,
                      lineHeight: 1.75,
                      fontSize: 15,
                    }}
                  >
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section
            id="buy"
            style={{
              padding: "42px 0 10px",
              borderTop: `1px solid ${theme.border}`,
              marginTop: 28,
            }}
          >
            <div
              style={{
                border: `1px solid ${theme.border}`,
                borderRadius: 28,
                background: theme.panel,
                padding: 28,
                boxShadow: theme.cardShadow,
              }}
            >
              <div
                className="overview-grid"
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 0.9fr",
                  gap: 20,
                  alignItems: "center",
                }}
              >
                <div>
                  <div
                    style={{
                      color: theme.subtle,
                      fontSize: 12,
                      fontWeight: 700,
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      marginBottom: 12,
                    }}
                  >
                    Buy
                  </div>
                  <h2
                    style={{
                      margin: "0 0 10px",
                      fontSize: 34,
                      lineHeight: 1.1,
                      letterSpacing: "-0.04em",
                    }}
                  >
                    A straightforward page for a straightforward product.
                  </h2>
                  <p
                    style={{
                      margin: "0 0 18px",
                      color: theme.muted,
                      lineHeight: 1.8,
                      maxWidth: 560,
                    }}
                  >
                    Use the main buy button for your checkout link. The page is
                    already set up to show the product clearly, reinforce the
                    feature set, and keep the purchase step simple.
                  </p>
                  <a
                    href={productUrl}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      height: 48,
                      padding: "0 22px",
                      borderRadius: 14,
                      background: theme.buttonBg,
                      color: theme.buttonText,
                      textDecoration: "none",
                      fontWeight: 700,
                    }}
                  >
                    Continue to Buy
                  </a>
                </div>

                <div
                  id="faq"
                  style={{
                    display: "grid",
                    gap: 12,
                  }}
                >
                  {faqs.map((item) => (
                    <article
                      key={item.question}
                      style={{
                        border: `1px solid ${theme.border}`,
                        borderRadius: 18,
                        background: theme.panelAlt,
                        padding: 16,
                      }}
                    >
                      <h3
                        style={{
                          margin: "0 0 6px",
                          fontSize: 16,
                        }}
                      >
                        {item.question}
                      </h3>
                      <p
                        style={{
                          margin: 0,
                          color: theme.muted,
                          lineHeight: 1.7,
                          fontSize: 14,
                        }}
                      >
                        {item.answer}
                      </p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer
          style={{
            marginTop: 38,
            paddingTop: 18,
            borderTop: `1px solid ${theme.border}`,
            color: theme.subtle,
            fontSize: 14,
          }}
        >
          <div
            className="footer-row"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr auto",
              gap: 12,
              alignItems: "center",
            }}
          >
            <div>PDFReadr for Windows</div>
            <div>Replace the buy link and screenshot files with your final assets</div>
          </div>
        </footer>
      </div>
    </div>
  );
}
