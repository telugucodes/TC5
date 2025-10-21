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
      className={className}
      loading="lazy"
      alt={alt}
      width={width}
      height={height}
      transformation={[
        {
          width: width,
          height: height,
          quality: 80, // optional, optimize quality
            progressive: true, // enable progressive loading
        },
      ]}
    />
  );
}
