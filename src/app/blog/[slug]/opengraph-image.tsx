import { ImageResponse } from "next/og";
import { notFound } from "next/navigation";
import { getPostBySlug } from "@/lib/blog/blog";

export const size = {
  width: 1200,
  height: 630
};

export const contentType = "image/png";

type OpenGraphImageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function Image({ params }: OpenGraphImageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#ffffff",
          color: "#222222",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          fontFamily: "Georgia, serif",
          backgroundImage:
            "linear-gradient(rgba(246,90,18,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(46,158,30,0.04) 1px, transparent 1px)",
          backgroundSize: "72px 72px"
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: 28, letterSpacing: "0.18em", textTransform: "uppercase" }}>
            Versatile Interior
          </span>
          <span style={{ fontSize: 22, color: "#f65a12" }}>{post.category}</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 82, lineHeight: 0.95, maxWidth: 940 }}>
            {post.title}
          </div>
          <div style={{ marginTop: 34, width: 520, height: 2, background: "#2e9e1e" }} />
          <p style={{ marginTop: 26, fontSize: 27, lineHeight: 1.35, maxWidth: 820, color: "#666666" }}>
            {post.excerpt}
          </p>
        </div>
      </div>
    ),
    size
  );
}
