"use client";

import { useUser } from "@clerk/nextjs";
import { NavUser } from "@/components/nav-user";

export function NavUserWrapper() {
  const { user, isLoading } = useUser();

  if (isLoading || !user) return null;

  return (
    <NavUser
      user={{
        name: user.fullName || user.primaryEmailAddress?.email || "User",
        email: user.primaryEmailAddress?.email || "example@mail.com",
        avatar: user.imageUrl || "/default-avatar.png",
      }}
    />
  );
}
