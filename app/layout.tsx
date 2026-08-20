import type { Metadata } from "next";
import Script from "next/script";
import { Sora, Inter, JetBrains_Mono } from "next/font/google";
import { site } from "@/lib/site";
import ThemeProvider from "@/components/ThemeProvider";
import ScrollProgress from "@/components/ScrollProgress";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

const sora = Sora({
    variable: "--font-sora",
    subsets: ["latin"],
    weight: ["600", "700", "800"]
});

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
    weight: ["400", "500", "600"]
});

const jetbrainsMono = JetBrains_Mono({
    variable: "--font-jetbrains",
    subsets: ["latin"],
    weight: ["400", "500"]
});

export const metadata: Metadata = {
    metadataBase: new URL(site.url),
    title: {
        default: `${site.name} — ${site.tagline}`,
        template: `%s — ${site.name}`
    },
    description: site.description,
    keywords: [...site.keywords],
    authors: [{ name: site.author.name, url: site.author.portfolioUrl }],
    creator: site.author.name,
    alternates: {
        canonical: "/"
    },
    openGraph: {
        type: "website",
        url: site.url,
        siteName: site.name,
        title: `${site.name} — ${site.tagline}`,
        description: site.description,
        images: [
            {
                url: "/opengraph-image",
                width: 1200,
                height: 630,
                alt: `${site.name} — ${site.tagline}`
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: `${site.name} — ${site.tagline}`,
        description: site.description,
        images: ["/opengraph-image"]
    },
    icons: {
        icon: "/icon.png"
    }
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: site.name,
    applicationCategory: "HealthApplication",
    operatingSystem: "Windows",
    description: site.description,
    url: site.url,
    author: {
        "@type": "Person",
        name: site.author.name,
        url: site.author.portfolioUrl
    },
    offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD"
    }
};

export default function RootLayout({ children }: LayoutProps<"/">) {
    return (
        <html
            lang="en"
            suppressHydrationWarning
            className={`${sora.variable} ${inter.variable} ${jetbrainsMono.variable}`}
        >
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </head>
            <body className="min-h-screen bg-canvas font-body text-text-primary antialiased">
                <Script
                    src="https://www.googletagmanager.com/gtag/js?id=G-18Z3DXNQFC"
                    strategy="afterInteractive"
                />
                <Script id="google-analytics" strategy="afterInteractive">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-18Z3DXNQFC');
                    `}
                </Script>

                <ThemeProvider>
                    <ScrollProgress />
                    {children}

                    <Analytics/>
                    <SpeedInsights />

                </ThemeProvider>
            </body>
        </html>
    );
}