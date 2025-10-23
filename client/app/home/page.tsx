import { auth } from "@clerk/nextjs/server";
import { currentUser } from "@clerk/nextjs/server";
import { FeaturedPosts } from "@/components/featured-posts";
import { PostList } from "@/components/post-list";

export default async function HomePage() {
  // ✅ Server-side auth check
  const { userId } = auth();
  const user = await currentUser();

  return (
    <div className="px-6 md:px-12 lg:px-24 py-10">
      <div className="mt-4 flex flex-col items-start justify-between gap-4">
        <div>
          <h1 className="text-gray-800 text-2xl md:text-5xl lg:text-6xl font-bold leading-tight">
            {user
              ? `Welcome back, ${user.firstName || "there"}!`
              : "Welcome to your dashboard."}
          </h1>
          <p className="mt-4 text-md md:text-lg text-gray-600 max-w-3xl">
            {user
              ? "Here’s what’s new since your last visit."
              : "Sign in to see your personalized feed and recent updates."}
          </p>
        </div>
      </div>

      {/* ✅ Featured Posts */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">
          Featured Posts
        </h2>
        <FeaturedPosts />
      </div>

      {/* ✅ Recent Posts */}
      <div className="mt-16">
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">
          Recent Posts
        </h2>
        <PostList />
      </div>
    </div>
  );
}
