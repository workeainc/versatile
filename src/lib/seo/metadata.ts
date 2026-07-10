import type { Metadata } from "next";

const siteName = "Versatile Interior";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://versatileinterior.com";

export function createMetadata({
  title,
  description,
  path = "",
  image = "/opengraph-image"
}: {
  title: string;
  description: string;
  path?: string;
  image?: string;
}): Metadata {
  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;
  const url = path ? `/${path.replace(/^\/+/, "")}` : "/";

  return {
    metadataBase: new URL(siteUrl),
    title: fullTitle,
    description,
    alternates: {
      canonical: url
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      images: [image],
      siteName,
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image]
    }
  };
}
