import Image from "next/image";
import { cn } from "@/lib/cn";

type ImageFrameProps = {
  src: string;
  alt: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
  imageClassName?: string;
};

export function ImageFrame({
  src,
  alt,
  priority,
  sizes = "100vw",
  className,
  imageClassName
}: ImageFrameProps) {
  return (
    <div className={cn("relative overflow-hidden bg-[var(--color-surface)]", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className={cn("object-cover transition duration-700", imageClassName)}
        sizes={sizes}
      />
    </div>
  );
}
