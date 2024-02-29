/**
 * It returns a bunch of meta tags that are used by the browser to display the app in the browser
 * @returns A React element.
 */
function Meta() {
  return (
    <>
      <title>Campus Quest - Tom Delaunay</title>
      <meta charSet="utf-8" />
      <meta name="author" content="Tom Delaunay" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {/* KEYWORDS */}
      <meta name="title" content="Campus Quest - Tom Delaunay" />
      <meta
        name="description"
        content="Exercice Campus Quest - Tom Delaunay"
      />
      {/* THEMES */}
      <meta name="color-scheme" content="dark light" />
      <meta name="theme-color" content="#F3EFE0" media="(prefers-color-scheme: light)" />
      <meta name="theme-color" content="#18181b" media="(prefers-color-scheme: dark)" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-title" content="Campus Quest - Tom Delaunay" />
      <meta name="application-name" content="Campus Quest - Tom Delaunay" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      {/* ICONS */}
      <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
      <link rel="manifest" href="/manifest.json" />
    </>
  );
}

export default Meta;
