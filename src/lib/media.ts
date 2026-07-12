const defaultMediaBaseUrl = "https://pub-a04264e3824f4e5abf5c1deed24d01b2.r2.dev";

export const mediaBaseUrl = (process.env.NEXT_PUBLIC_MEDIA_BASE_URL ?? defaultMediaBaseUrl).replace(/\/$/, "");

export function getMediaUrl(path: string) {
  return `${mediaBaseUrl}/${path.replace(/^\/+/, "")}`;
}
