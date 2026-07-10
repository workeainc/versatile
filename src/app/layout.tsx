import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { AnalyticsProvider } from "@/components/analytics/AnalyticsProvider";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://versatileinterior.com.bd";
const googleSiteVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION?.replace(
  "google-site-verification=",
  ""
);
const bingSiteVerification = process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION?.replace("msvalidate.01=", "");
const siteJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Versatile Interior",
    url: siteUrl,
    logo: `${siteUrl}/icon.png`,
    image: `${siteUrl}/opengraph-image`,
    description:
      "Interior design studio shaping homes, workplaces, restaurants, showrooms, and events in Bangladesh."
  },
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    additionalType: "https://schema.org/InteriorDesignBusiness",
    name: "Versatile Interior",
    url: siteUrl,
    image: `${siteUrl}/opengraph-image`,
    areaServed: ["Dhaka", "Bangladesh"],
    description:
      "Interior design studio shaping homes, workplaces, restaurants, showrooms, and events in Bangladesh."
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Versatile Interior",
    url: siteUrl,
    publisher: {
      "@type": "Organization",
      name: "Versatile Interior"
    }
  }
];

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"]
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Versatile Interior | Interior Design Studio",
  description:
    "Dhaka-based interior design studio shaping homes, workplaces, restaurants, showrooms, and events with calm detail, local context, and site-ready execution.",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Versatile Interior | Interior Design Studio",
    description:
      "Interior design in Bangladesh shaped around light, storage, material durability, service flow, and execution discipline.",
    images: ["/opengraph-image"],
    siteName: "Versatile Interior",
    type: "website",
    url: "/"
  },
  twitter: {
    card: "summary_large_image",
    title: "Versatile Interior | Interior Design Studio",
    description:
      "Dhaka-based interior design studio for homes, workplaces, restaurants, showrooms, and events.",
    images: ["/opengraph-image"]
  },
  verification: {
    google: googleSiteVerification,
    other: bingSiteVerification
      ? {
          "msvalidate.01": bingSiteVerification
        }
      : undefined
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${cormorant.variable}`}>
        <script
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }}
          suppressHydrationWarning
          type="application/ld+json"
        />
        <AnalyticsProvider />
        {children}
      </body>
    </html>
  );
}
