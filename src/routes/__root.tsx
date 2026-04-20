import { Outlet, createRootRoute, HeadContent, Scripts, useRouterState } from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { CookieBanner } from "@/components/CookieBanner";

const ENGLISH_ROUTES = ["/en"];

const SITE_URL = "https://datax.me";
const OG_IMAGE = `${SITE_URL}/og-image.jpg`;

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#f7f3ec" },
      { title: "DataX — Structured workflows for governed clinical data requests" },
      {
        name: "description",
        content:
          "DataX helps hospitals handle research and data access requests through a clear, auditable, review-ready workflow.",
      },
      { property: "og:title", content: "DataX — Workflows for governed clinical data requests" },
      {
        property: "og:description",
        content: "Software for hospital data request workflows.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:width", content: "1216" },
      { property: "og:image:height", content: "640" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "apple-touch-icon", href: "/favicon.png" },
      { rel: "canonical", href: SITE_URL + "/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "DataX",
          url: SITE_URL,
          logo: `${SITE_URL}/favicon.png`,
          description:
            "DataX helps hospitals handle research and data access requests through a clear, auditable, review-ready workflow.",
          email: "info@datax.me",
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: () => (
    <>
      <Outlet />
      <CookieBanner />
    </>
  ),
  notFoundComponent: NotFound,
});

function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="label-eyebrow mb-4">404</p>
        <h1 className="font-display text-4xl text-foreground">Page not found</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          The page you're looking for doesn't exist.
        </p>
        <a href="/" className="btn-ghost mt-6">Return home</a>
      </div>
    </div>
  );
}

function RootShell({ children }: { children: React.ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const lang = ENGLISH_ROUTES.some((p) => pathname === p || pathname.startsWith(p + "/")) ? "en" : "de";
  const themeScript = `(function(){try{var t=localStorage.getItem('datax-theme');if(t!=='light'&&t!=='dark'){t='light';}document.documentElement.classList.add(t);}catch(e){document.documentElement.classList.add('light');}})();`;
  return (
    <html lang={lang} className="light" suppressHydrationWarning>
      <head>
        <HeadContent />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}
