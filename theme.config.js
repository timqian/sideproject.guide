export default {
  github: 'https://github.com/timqian/sideproject.guide',
  docsRepositoryBase: 'https://github.com/timqian/sideproject.guide/blob/main',
  titleSuffix: '',
  logo: (
    <>
      <span className="mr-2 font-extrabold hidden md:inline">Side Project Guide</span>
      {/* <span className="text-gray-600 font-normal hidden md:inline">
        The Next.js Static Site Generator
      </span> */}
    </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content="Side Project Guide" />
      <meta name="og:description" content="Side Project Guide" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="https://sideproject.guide/og.png" />
      <meta name="twitter:site:domain" content="sideproject.guide" />
      <meta name="twitter:url" content="https://sideproject.guide" />
      <meta name="og:title" content="Side Project Guide" />
      <meta name="og:image" content="https://sideproject.guide/og.png" />
      <meta name="apple-mobile-web-app-title" content="Side Project Guide" />
      <link
        rel="apple-touch-icon"
        sizes="256x256"
        href="/favicon.ico"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="256x256"
        href="/favicon.ico"
      />
      <meta name="msapplication-TileImage" content="/og.png" />
    </>
  ),
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  footerEditLink: 'Edit this page on GitHub',
  footerText: <>By <a href="https://github.com/sponsors/timqian/">timqian</a></>,
  // unstable_faviconGlyph: '👋',
  i18n: [
    { locale: 'en', text: 'English' },
    { locale: 'zh', text: '中文' },
  ],
}
