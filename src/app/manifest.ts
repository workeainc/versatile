import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Versatile Interior",
    short_name: "Versatile",
    description:
      "Dhaka-based interior design studio for homes, workplaces, restaurants, showrooms, and events.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#f65a12",
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png"
      }
    ]
  };
}
