"use client";

import { ImageKitProvider } from "@imagekit/next";

export function ImageKitProviderWrapper({ children }: { children: React.ReactNode }) {
  return (
    <ImageKitProvider urlEndpoint="https://ik.imagekit.io/ovs45slu1">
      {children}
    </ImageKitProvider>
  );
}
