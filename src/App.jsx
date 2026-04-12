import { useMemo, useState } from 'react'

export default function PdfReaderLandingPage() {
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
        }
  }, [darkMode])

  const lightImages = [
    {
      title: 'Main reader view',
      text: 'Use a bright clean screenshot of the main app window.',
      src: '/LIGHT_SCREENSHOT_1.png',
    },
    {
      title: 'Thumbnail browsing',
      text: 'Show page previews or navigation in the lighter theme.',
      src: '/LIGHT_SCREENSHOT_2.png',
    },
    {
      title: 'Reading layout',
      text: 'Show a close-up clean reading experience in light mode.',
      src: '/LIGHT_SCREENSHOT_3.png',
    },
  ]

  const darkImages = [
    {
      title: 'Main reader view',
      text: 'Use a darker polished screenshot of the main app window.',
      src: '/DARK_SCREENSHOT_1.png',
    },
    {
      title: 'Thumbnail browsing',
      text: 'Show navigation or pages in the dark theme.',
      src: '/DARK_SCREENSHOT_2.png',
    },
    {
      title: 'Reading layout',
      text: 'Show a close-up clean reading experience in dark mode.',
      src: '/DARK_SCREENSHOT_3.png',
    },
  ]

  const previewImages = darkMode ? darkImages : lightImages
  const safeActiveImage = Math.min(activeImage, Math.max(previewImages.length - 1, 0))
  const selectedImage = previewImages[safeActiveImage] || previewImages[0]

  const essentials = [
    {
      title: 'Fast opening',
      text: 'Launch documents quickly and move straight into reading.',
    },
    {
      title: 'Clean interface',
      text: 'A focused layout that keeps attention on the document.',
    },
    {
      title: 'One-time price',
      text: 'Simple $1.99 purchase through Gumroad, no subscription.',
    },
  ]

  const detailPoints = [
    {
      title: 'Built for reading',
      text: 'A focused PDF experience that opens documents quickly and keeps navigation simple.',
    },
    {
      title: 'Useful for everyday work',
      text: 'Good for forms, notes, school material, manuals, and general PDF viewing.',
    },
    {
      title: 'Straightforward purchase',
      text: 'A small one-time price through Gumroad with immediate access after checkout.',
    },
    {
      title: 'Light and dark previews',
      text: 'Visitors can switch themes and browse matching screenshots before buying.',
    },
  ]

  return (
    <div className={`min-h-screen ${theme.pageBg} ${theme.text} transition-colors duration-300`}>
      <section className="mx-auto max-w-7xl px-6 py-8 sm:px-8 lg:px-10">
        <header className={`flex flex-wrap items-center justify-between gap-4 border-b ${theme.border} pb-5`}>
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center">
              <img src="/logo.png" alt="PDFReadr logo" className="h-12 w-12 object-contain" />
            </div>
            <div>
              <div className={`text-xs uppercase tracking-[0.3em] ${theme.subtle}`}>PDFReadr Company Inc.</div>
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
              href="#buying"
              className={`rounded-full px-5 py-2 text-sm font-medium transition ${theme.buttonPrimary}`}
            >
              Buy for $1.99
            </a>
          </div>
        </header>

        <main>
          <section className="py-12 sm:py-14">
            <div className="mx-auto max-w-4xl text-center">
              <div className={`inline-flex rounded-full border px-3 py-1 text-xs shadow-sm ${theme.pill} ${theme.border}`}>
                Lightweight desktop PDF reader
              </div>
              <h2 className="mt-5 text-3xl font-semibold leading-tight text-current sm:text-4xl lg:text-5xl">
                Fast, clean PDF reading without clutter.
              </h2>
              <p className={`mx-auto mt-4 max-w-2xl text-base leading-7 sm:text-lg ${theme.muted}`}>
                Open documents quickly, move through pages smoothly, and read in a simple interface designed to stay out of the way.
              </p>
            </div>

            <div id="preview" className="mx-auto mt-10 max-w-6xl">
              <div className={`relative rounded-[2rem] border p-4 sm:p-5 ${theme.border} ${theme.panel} ${theme.shadow}`}>
                <div className="absolute left-1/2 top-0 z-10 -translate-x-1/2 -translate-y-1/2">
                  <a
                    id="buy"
                    href="#buying"
                    className={`inline-flex items-center rounded-full px-7 py-3 text-sm font-semibold transition ${theme.buttonPrimary}`}
                  >
                    Buy on Gumroad - $1.99
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

                <div className="grid grid-cols-3 gap-3 auto-rows-fr">
                  {previewImages.map((image, index) => (
                    <button
                      key={`${darkMode ? 'dark' : 'light'}-${index}`}
                      type="button"
                      onClick={() => setActiveImage(index)}
                      aria-pressed={safeActiveImage === index}
                      className={`flex h-full min-h-[182px] flex-col overflow-hidden rounded-[1.1rem] border text-left transition ${theme.border} ${theme.card} ${theme.softShadow} ${
                        safeActiveImage === index ? 'ring-2 ring-zinc-400' : ''
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
                  A simple app page with enough substance to feel complete.
                </h3>
                <p className={`mt-4 max-w-xl text-base leading-7 ${theme.muted}`}>
                  The page should feel clear and professional without turning into a long sales lecture. Keep the focus on the product image, but give buyers enough information to understand what the app is, why it is useful, and how they get it.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
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
                  <div className={`text-sm uppercase tracking-[0.25em] ${theme.subtle}`}>Price</div>
                  <h3 className="mt-3 text-3xl font-semibold text-current sm:text-4xl">
                    One price. One clean PDF reader.
                  </h3>
                  <p className={`mt-4 max-w-2xl text-base leading-7 ${theme.muted}`}>
                    No subscription. No tiers. Just a straightforward PDF reader for $1.99.
                  </p>
                  <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
                    <a
                      href="#"
                      className={`rounded-2xl px-6 py-3 text-sm font-semibold transition ${theme.buttonPrimary}`}
                    >
                      Buy on Gumroad
                    </a>
                    <div className={`text-sm ${theme.subtle}`}>Replace this link with your Gumroad product URL</div>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-1">
                  <div className={`rounded-[1.3rem] border p-5 ${theme.border} ${theme.cardAlt}`}>
                    <div className="text-sm font-semibold text-current">What buyers should understand</div>
                    <p className={`mt-2 text-sm leading-6 ${theme.muted}`}>
                      This is a lightweight PDF reader with a one-time price, simple checkout, and immediate download.
                    </p>
                  </div>
                  <div className={`rounded-[1.3rem] border p-5 ${theme.border} ${theme.cardAlt}`}>
                    <div className="text-sm font-semibold text-current">What this section should do</div>
                    <p className={`mt-2 text-sm leading-6 ${theme.muted}`}>
                      Remove doubt, reinforce the value, and make the next click obvious.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="buying" className={`border-t py-14 ${theme.border}`}>
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <div className={`text-sm uppercase tracking-[0.25em] ${theme.subtle}`}>Buying</div>
                <h3 className="mt-3 text-3xl font-semibold text-current sm:text-4xl">
                  Simple checkout through Gumroad.
                </h3>
                <p className={`mt-4 text-base leading-7 ${theme.muted}`}>
                  The buy button on this page should go directly to your Gumroad product page. After payment, the buyer gets the download immediately through Gumroad.
                </p>
              </div>

              <div className="space-y-4">
                <div className={`rounded-[1.5rem] border p-6 ${theme.border} ${theme.card} ${theme.softShadow}`}>
                  <div className={`text-sm font-semibold uppercase tracking-[0.14em] ${theme.subtle}`}>1. Click Buy</div>
                  <p className={`mt-3 text-sm leading-6 ${theme.muted}`}>The button sends the customer to your Gumroad checkout page.</p>
                </div>
                <div className={`rounded-[1.5rem] border p-6 ${theme.border} ${theme.card} ${theme.softShadow}`}>
                  <div className={`text-sm font-semibold uppercase tracking-[0.14em] ${theme.subtle}`}>2. Pay Once</div>
                  <p className={`mt-3 text-sm leading-6 ${theme.muted}`}>The customer completes a simple one-time $1.99 purchase.</p>
                </div>
                <div className={`rounded-[1.5rem] border p-6 ${theme.border} ${theme.card} ${theme.softShadow}`}>
                  <div className={`text-sm font-semibold uppercase tracking-[0.14em] ${theme.subtle}`}>3. Download</div>
                  <p className={`mt-3 text-sm leading-6 ${theme.muted}`}>Gumroad delivers the file or download link right after purchase.</p>
                </div>
              </div>
            </div>
          </section>

          <section className={`border-t py-14 ${theme.border}`}>
            <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
              <div>
                <div className={`text-sm uppercase tracking-[0.25em] ${theme.subtle}`}>Questions</div>
                <h3 className="mt-3 text-3xl font-semibold text-current">Useful details</h3>
                <p className={`mt-4 max-w-sm text-sm leading-6 ${theme.muted}`}>
                  Keep this section brief. It should answer the obvious questions without dragging the page into essay territory.
                </p>
              </div>
              <div className="space-y-3">
                <div className={`rounded-[1.35rem] border p-5 ${theme.border} ${theme.card} ${theme.softShadow}`}>
                  <h4 className="text-base font-medium text-current">What does PDFReadr do?</h4>
                  <p className={`mt-2 text-sm leading-6 ${theme.muted}`}>It opens PDF files in a fast, simple desktop reading interface.</p>
                </div>
                <div className={`rounded-[1.35rem] border p-5 ${theme.border} ${theme.card} ${theme.softShadow}`}>
                  <h4 className="text-base font-medium text-current">How do I buy it?</h4>
                  <p className={`mt-2 text-sm leading-6 ${theme.muted}`}>Click the buy button and complete the purchase on Gumroad.</p>
                </div>
                <div className={`rounded-[1.35rem] border p-5 ${theme.border} ${theme.card} ${theme.softShadow}`}>
                  <h4 className="text-base font-medium text-current">Is it a subscription?</h4>
                  <p className={`mt-2 text-sm leading-6 ${theme.muted}`}>No. It is a one-time $1.99 purchase.</p>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className={`border-t py-8 text-sm ${theme.border} ${theme.subtle}`}>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>© 2026 PDFReadr Company Inc.</div>
            <div>Replace with your support email or Gumroad link</div>
          </div>
        </footer>
      </section>
    </div>
  )
}
