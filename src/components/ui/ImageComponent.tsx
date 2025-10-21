"use client";

import { Image } from "@imagekit/next";

interface ImageComponentProps {
  src: string;
  width: number;
  height: number;
  alt: string;
  className?: string;
}

export function ImageComponent({ src, width, height, alt, className }: ImageComponentProps) {
  const urlEndpoint = process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT!;

  return (
    <Image
      urlEndpoint={urlEndpoint}
      src={src}
      width={width}
      height={height}
      alt={alt}
      className={className}
    />
  );
}
