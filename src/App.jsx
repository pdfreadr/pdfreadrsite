import { useMemo, useState } from 'react'

const assetBase =
  typeof import.meta !== 'undefined' &&
  import.meta.env &&
  import.meta.env.BASE_URL
    ? import.meta.env.BASE_URL
    : '/'

const productUrl = 'https://payhip.com/b/Cf7QH'
const logoSrc = `${assetBase}logo.png`

export default function PdfReadrLandingPage() {
  const [darkMode, setDarkMode] = useState(false)
  const [activeImage, setActiveImage] = useState(0)

  const theme = useMemo(() => {
    return darkMode
      ? {
          pageBg: 'bg-zinc-950',
          text: 'text-zinc-100',
          muted: 'text-zinc-400',
          subtle: 'text-zinc-500',
          border: 'border-zinc-800',
          card: 'bg-zinc-900',
          cardAlt: 'bg-zinc-900',
          panel: 'bg-zinc-950',
          buttonPrimary: 'bg-white text-zinc-950 hover:bg-zinc-200',
          buttonSecondary: 'bg-zinc-900 text-white hover:bg-zinc-800',
          pill: 'bg-zinc-900 text-zinc-400 border-zinc-800',
          shadow: 'shadow-[0_24px_70px_rgba(0,0,0,0.32)]',
          softShadow: 'shadow-[0_8px_24px_rgba(0,0,0,0.18)]',
          accentRing: 'ring-zinc-400',
        }
      : {
          pageBg: 'bg-stone-50',
          text: 'text-zinc-900',
          muted: 'text-stone-600',
          subtle: 'text-stone-500',
          border: 'border-stone-200',
          card: 'bg-white',
          cardAlt: 'bg-stone-100',
          panel: 'bg-white',
          buttonPrimary: 'bg-zinc-900 text-white hover:bg-zinc-700',
          buttonSecondary: 'bg-white text-zinc-900 hover:bg-stone-100',
          pill: 'bg-white text-stone-500 border-stone-200',
          shadow: 'shadow-[0_24px_70px_rgba(0,0,0,0.06)]',
          softShadow: 'shadow-[0_8px_24px_rgba(0,0,0,0.04)]',
          accentRing: 'ring-zinc-400',
        }
  }, [darkMode])

  const lightImages = [
    {
      id: 'reader',
      title: 'Main reader view',
      text: 'Keep the document front and center with tabs, page controls, and a calm reading layout.',
      src: `${assetBase}LIGHT_SCREENSHOT_1.png`,
    },
    {
      id: 'library',
      title: 'Library and recents',
      text: 'Return to recent files, browse your collection, and move between documents without losing your place.',
      src: `${assetBase}LIGHT_SCREENSHOT_2.png`,
    },
    {
      id: 'tools',
      title: 'Bookmarks, annotations, and tools',
      text: 'Work with thumbnails, bookmarks, notes, signatures, and practical reading tools in one place.',
      src: `${assetBase}LIGHT_SCREENSHOT_3.png`,
    },
  ]

  const darkImages = [
    {
      id: 'reader',
      title: 'Main reader view',
      text: 'Dark mode keeps the same focused layout while making longer reading sessions easier on the eyes.',
      src: `${assetBase}DARK_SCREENSHOT_1.png`,
    },
    {
      id: 'library',
      title: 'Library and recents',
      text: 'Use the same simple browsing flow and familiar navigation in a darker theme.',
      src: `${assetBase}DARK_SCREENSHOT_2.png`,
    },
    {
      id: 'tools',
      title: 'Bookmarks, annotations, and tools',
      text: 'See annotations, signatures, side panels, and reading controls in the dark workspace.',
      src: `${assetBase}DARK_SCREENSHOT_3.png`,
    },
  ]

  const previewImages = darkMode ? darkImages : lightImages
  const safeActiveImage = Math.min(activeImage, Math.max(previewImages.length - 1, 0))
  const selectedImage = previewImages[safeActiveImage] || previewImages[0]

  const essentials = [
    {
      title: 'PDF and TXT support',
      text: 'Open the document formats you use most for reading, review, and reference work.',
    },
    {
      title: 'Light and dark mode',
      text: 'Choose the reading style that feels right for daytime work or longer evening sessions.',
    },
    {
      title: 'Annotations and signatures',
      text: 'Mark up documents, add notes, and place signatures without leaving the reader.',
    },
  ]

  const detailPoints = [
    {
      title: 'Focused reading',
      text: 'PDFReadr keeps the document front and center, with an interface that supports the work instead of crowding it.',
    },
    {
      title: 'Tabbed workflow',
      text: 'Keep multiple PDF and TXT files open, switch quickly between tabs, and continue without reopening everything.',
    },
    {
      title: 'Library and progress',
      text: 'Recent files, favorites, bookmarks, and reading progress help you stay organized across daily document work.',
    },
    {
      title: 'Fast local search',
      text: 'Find files and return to useful content quickly with search designed for speed and privacy.',
    },
    {
      title: 'Practical document tools',
      text: 'Use zoom, thumbnails, page navigation, text selection, printing, annotations, and signatures in one workspace.',
    },
    {
      title: 'Made for desktop use',
      text: 'PDFReadr is built for a serious desktop workflow, not just a stripped-down file viewer.',
    },
  ]

  const faqs = [
    {
      question: 'What does PDFReadr help with?',
      answer:
        'It gives you a cleaner desktop workflow for opening, reading, organizing, searching, annotating, signing, and printing PDF and TXT documents.',
    },
    {
      question: 'Who is it for?',
      answer:
        'It works well for anyone who spends real time in documents, whether that means reading reports, reviewing files, studying material, filling forms, or keeping a personal library organized.',
    },
    {
      question: 'Why is it different from a basic viewer?',
      answer:
        'PDFReadr brings together tabs, search, bookmarks, recents, annotations, signatures, and practical reading tools in one focused workspace instead of only showing a single file.',
    },
  ]

  return (
    <div className={`min-h-screen ${theme.pageBg} ${theme.text} transition-colors duration-300`}>
      <section className="mx-auto max-w-7xl px-6 py-8 sm:px-8 lg:px-10">
        <header className={`flex flex-wrap items-center justify-between gap-4 border-b ${theme.border} pb-5`}>
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center">
              <img
                src={logoSrc}
                alt="PDFReadr logo"
                className="h-12 w-12 object-contain"
              />
            </div>
            <div>
              <div className={`text-xs uppercase tracking-[0.3em] ${theme.subtle}`}>Windows Desktop Reader</div>
              <h1 className="mt-1 text-lg font-semibold text-current">PDFReadr</h1>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => {
                setDarkMode((prev) => !prev)
                setActiveImage(0)
              }}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition ${theme.border} ${theme.buttonSecondary}`}
            >
              {darkMode ? 'Light mode' : 'Dark mode'}
            </button>
            <a
              href={productUrl}
              className={`rounded-full px-5 py-2 text-sm font-medium transition ${theme.buttonPrimary}`}
            >
              Buy PDFReadr
            </a>
          </div>
        </header>

        <main>
          <section className="py-12 sm:py-14">
            <div className="mx-auto max-w-4xl text-center">
              <div className={`inline-flex rounded-full border px-3 py-1 text-xs shadow-sm ${theme.pill} ${theme.border}`}>
                Clean desktop reading for PDF and TXT
              </div>
              <h2 className="mt-5 text-3xl font-semibold leading-tight text-current sm:text-4xl lg:text-5xl">
                Read, review, annotate, and sign documents in a cleaner desktop workspace.
              </h2>
              <p className={`mx-auto mt-4 max-w-2xl text-base leading-7 sm:text-lg ${theme.muted}`}>
                PDFReadr is built for people who spend real time in documents. It combines focused reading, tabbed file handling,
                fast local search, bookmarks, annotations, signatures, and printing in a layout that stays simple and easy to use.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href={productUrl}
                  className={`rounded-2xl px-6 py-3 text-sm font-semibold transition ${theme.buttonPrimary}`}
                >
                  Buy Now
                </a>
                <a
                  href="#features"
                  className={`rounded-2xl border px-6 py-3 text-sm font-semibold transition ${theme.border} ${theme.buttonSecondary}`}
                >
                  View Features
                </a>
              </div>
            </div>

            <div id="preview" className="mx-auto mt-10 max-w-6xl">
              <div className={`relative rounded-[2rem] border p-4 sm:p-5 ${theme.border} ${theme.panel} ${theme.shadow}`}>
                <div className="absolute left-1/2 top-0 z-10 -translate-x-1/2 -translate-y-1/2">
                  <a
                    id="buy"
                    href={productUrl}
                    className={`inline-flex items-center rounded-full px-7 py-3 text-sm font-semibold transition ${theme.buttonPrimary}`}
                  >
                    Buy PDFReadr
                  </a>
                </div>

                <div className={`overflow-hidden rounded-[1.6rem] border ${theme.border} ${theme.cardAlt}`}>
                  <div className="flex min-h-[620px] items-center justify-center">
                    <img
                      src={selectedImage.src}
                      alt={selectedImage.title}
                      className="h-auto max-h-[620px] w-full object-contain"
                    />
                  </div>
                </div>
              </div>

              <div className="mx-auto mt-8 grid max-w-5xl grid-cols-1 gap-4 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
                <div className={`rounded-[1.35rem] border p-5 ${theme.border} ${theme.card} ${theme.softShadow}`}>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-base font-semibold text-current">{selectedImage.title}</div>
                      <p className={`mt-2 text-sm leading-6 ${theme.muted}`}>{selectedImage.text}</p>
                    </div>
                    <div className={`rounded-full border px-3 py-1 text-[11px] ${theme.border} ${theme.pill}`}>
                      {darkMode ? 'Dark preview' : 'Light preview'}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 auto-rows-fr">
                  {previewImages.map((image, index) => (
                    <button
                      key={`${darkMode ? 'dark' : 'light'}-${image.id}`}
                      type="button"
                      onClick={() => setActiveImage(index)}
                      aria-pressed={safeActiveImage === index}
                      className={`flex h-full min-h-[182px] flex-col overflow-hidden rounded-[1.1rem] border text-left transition ${theme.border} ${theme.card} ${theme.softShadow} ${
                        safeActiveImage === index ? `ring-2 ${theme.accentRing}` : ''
                      }`}
                    >
                      <div className={`flex aspect-[4/3] items-center justify-center ${theme.cardAlt}`}>
                        <img
                          src={image.src}
                          alt={image.title}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="p-3">
                        <div className="text-sm font-semibold text-current">{image.title}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className={`border-t py-14 ${theme.border}`}>
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div>
                <div className={`text-sm uppercase tracking-[0.25em] ${theme.subtle}`}>Overview</div>
                <h3 className="mt-3 text-3xl font-semibold text-current sm:text-4xl">
                  Clean on the page. Serious in the product.
                </h3>
                <p className={`mt-4 max-w-xl text-base leading-7 ${theme.muted}`}>
                  PDFReadr is designed for people who spend real time in documents. It stays clean and easy to use while
                  giving quick access to the tools that matter most.
                </p>
              </div>

              <div id="features" className="grid gap-4 sm:grid-cols-2">
                {detailPoints.map((item) => (
                  <div
                    key={item.title}
                    className={`rounded-[1.35rem] border p-5 ${theme.border} ${theme.card} ${theme.softShadow}`}
                  >
                    <h3 className="text-base font-semibold text-current">{item.title}</h3>
                    <p className={`mt-2 text-sm leading-6 ${theme.muted}`}>{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className={`border-t py-14 ${theme.border}`}>
            <div className="grid gap-4 md:grid-cols-3">
              {essentials.map((item) => (
                <div
                  key={item.title}
                  className={`rounded-[1.35rem] border p-5 ${theme.border} ${theme.card} ${theme.softShadow}`}
                >
                  <h3 className="text-base font-semibold text-current">{item.title}</h3>
                  <p className={`mt-2 text-sm leading-6 ${theme.muted}`}>{item.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section className={`border-t py-14 ${theme.border}`}>
            <div className={`rounded-[1.7rem] border p-8 sm:p-10 lg:p-12 ${theme.border} ${theme.card} ${theme.softShadow}`}>
              <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
                <div className="max-w-3xl">
                  <div className={`text-sm uppercase tracking-[0.25em] ${theme.subtle}`}>Why it stands out</div>
                  <h3 className="mt-3 text-3xl font-semibold text-current sm:text-4xl">
                    More than a basic viewer.
                  </h3>
                  <p className={`mt-4 max-w-2xl text-base leading-7 ${theme.muted}`}>
                    PDFReadr combines focused reading, tabs, search, bookmarks, recents, annotations, signatures, and
                    printing in one clean desktop workspace built for everyday document use.
                  </p>
                  <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
                    <a
                      href={productUrl}
                      className={`rounded-2xl px-6 py-3 text-sm font-semibold transition ${theme.buttonPrimary}`}
                    >
                      Buy PDFReadr
                    </a>
                    <div className={`text-sm ${theme.subtle}`}>https://payhip.com/b/Cf7QH</div>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-1">
                  <div className={`rounded-[1.3rem] border p-5 ${theme.border} ${theme.cardAlt}`}>
                    <div className="text-sm font-semibold text-current">Built for real document work</div>
                    <p className={`mt-2 text-sm leading-6 ${theme.muted}`}>
                      Good for reading reports, reviewing files, filling forms, studying material, and managing a personal library.
                    </p>
                  </div>
                  <div className={`rounded-[1.3rem] border p-5 ${theme.border} ${theme.cardAlt}`}>
                    <div className="text-sm font-semibold text-current">Easy to start using</div>
                    <p className={`mt-2 text-sm leading-6 ${theme.muted}`}>
                      Open files quickly, move through pages smoothly, and keep useful tools close without overwhelming the workspace.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="buying" className={`border-t py-14 ${theme.border}`}>
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <div className={`text-sm uppercase tracking-[0.25em] ${theme.subtle}`}>Questions</div>
                <h3 className="mt-3 text-3xl font-semibold text-current sm:text-4xl">
                  Useful details, without the extra noise.
                </h3>
                <p className={`mt-4 text-base leading-7 ${theme.muted}`}>
                  Get a quick sense of what PDFReadr does, who it is for, and what makes it different from a simple viewer.
                </p>
              </div>

              <div className="space-y-4">
                {faqs.map((item) => (
                  <div
                    key={item.question}
                    className={`rounded-[1.5rem] border p-6 ${theme.border} ${theme.card} ${theme.softShadow}`}
                  >
                    <div className={`text-sm font-semibold ${theme.text}`}>{item.question}</div>
                    <p className={`mt-3 text-sm leading-6 ${theme.muted}`}>{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>

        <footer className={`border-t py-8 text-sm ${theme.border} ${theme.subtle}`}>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>© 2026 PDFReadr</div>
            <div>https://payhip.com/b/Cf7QH</div>
          </div>
        </footer>
      </section>
    </div>
  )
}