// middleware.ts
import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

// Protect all pages except Next.js internals and public files
export const config = {
  matcher: [
    "/((?!_next|.*\\..*|favicon.ico|login|register).*)",
  ],
};
