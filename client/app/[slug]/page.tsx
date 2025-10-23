// app/[slug]/page.tsx

import { auth, currentUser } from "@clerk/nextjs/server";
import PostMenuActions from "@/components/post-menu-actions";
import { ImageComponent } from "@/components/ui/ImageComponent";
import Link from "next/link";
import Search from "@/components/search";
import Comments from "@/components/comments";

const IK_BASE = "https://ik.imagekit.io/ovs45slu1"; // Replace with your ImageKit account URL

export default async function SinglePostPage({
  params,
}: {
  params: { slug: string };
}) {
  // ✅ Server-side auth
  const { userId } = auth();
  const user = await currentUser();

  return (
    <div className="flex flex-col gap-8">
      {/* Post Details */}
      <div className="flex gap-8">
        <div className="lg:w-3/5 flex flex-col gap-8">
          <h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-bold">
            Understanding React Hooks: A Comprehensive Guide
          </h1>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Written by</span>
            <Link href="#" className="text-blue-800">
              Jane Doe
            </Link>
            <span>on</span>
            <Link href="#" className="text-blue-800">
              Web Design
            </Link>
            <span>2 days ago</span>
          </div>
          <p className="text-gray-500 font-medium">
            {user
              ? `Hello ${user.firstName}, enjoy this post!`
              : "Welcome! Sign in to get personalized features."}
          </p>
        </div>

        <div className="hidden lg:block w-2/5">
          <ImageComponent
            src={`${IK_BASE}/postImg.jpeg`}
            alt="featured1"
            width={500}
            height={300}
            className="object-cover rounded-2xl w-600"
          />
        </div>
      </div>

      {/* Post Content */}
      <div className="flex flex-col md:flex-row gap-12 justify-between">
        <div className="lg:text-lg flex flex-col gap-6 text-justify">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
          <p>
            React DOM APIs The react-dom package contains methods that are only
            supported for the web applications (which run in the browser DOM
            environment). They are not supported for React Native. APIs These
            APIs can be imported from your components. They are rarely used:
            createPortal lets you render child components in a different part of
            the DOM tree. flushSync lets you force React to flush a state update
            and update the DOM synchronously. Resource Preloading APIs These
            APIs can be used to make apps faster by pre-loading resources such
            as scripts, stylesheets, and fonts as soon as you know you need
            them, for example before navigating to another page where the
            resources will be used. React-based frameworks frequently handle
            resource loading for you, so you might not have to call these APIs
            yourself. Consult your framework’s documentation for details.
            prefetchDNS lets you prefetch the IP address of a DNS domain name
            that you expect to connect to. preconnect lets you connect to a
            server you expect to request resources from, even if you don’t know
            what resources you’ll need yet. preload lets you fetch a stylesheet,
            font, image, or external script that you expect to use.
            preloadModule lets you fetch an ESM module that you expect to use.
            preinit lets you fetch and evaluate an external script or fetch and
            insert a stylesheet. preinitModule lets you fetch and evaluate an
            ESM module. Entry points The react-dom package provides two
            additional entry points: react-dom/client contains APIs to render
            React components on the client (in the browser). react-dom/server
            contains APIs to render React components on the server.
          </p>
          <p>
            React DOM APIs The react-dom package contains methods that are only
            supported for the web applications (which run in the browser DOM
            environment). They are not supported for React Native. APIs These
            APIs can be imported from your components. They are rarely used:
            createPortal lets you render child components in a different part of
            the DOM tree. flushSync lets you force React to flush a state update
            and update the DOM synchronously. Resource Preloading APIs These
            APIs can be used to make apps faster by pre-loading resources such
            as scripts, stylesheets, and fonts as soon as you know you need
            them, for example before navigating to another page where the
            resources will be used. React-based frameworks frequently handle
            resource loading for you, so you might not have to call these APIs
            yourself. Consult your framework’s documentation for details.
            prefetchDNS lets you prefetch the IP address of a DNS domain name
            that you expect to connect to. preconnect lets you connect to a
            server you expect to request resources from, even if you don’t know
            what resources you’ll need yet. preload lets you fetch a stylesheet,
            font, image, or external script that you expect to use.
            preloadModule lets you fetch an ESM module that you expect to use.
            preinit lets you fetch and evaluate an external script or fetch and
            insert a stylesheet. preinitModule lets you fetch and evaluate an
            ESM module. Entry points The react-dom package provides two
            additional entry points: react-dom/client contains APIs to render
            React components on the client (in the browser). react-dom/server
            contains APIs to render React components on the server.
          </p>
          <p>
            React DOM APIs The react-dom package contains methods that are only
            supported for the web applications (which run in the browser DOM
            environment). They are not supported for React Native. APIs These
            APIs can be imported from your components. They are rarely used:
            createPortal lets you render child components in a different part of
            the DOM tree. flushSync lets you force React to flush a state update
            and update the DOM synchronously. Resource Preloading APIs These
            APIs can be used to make apps faster by pre-loading resources such
            as scripts, stylesheets, and fonts as soon as you know you need
            them, for example before navigating to another page where the
            resources will be used. React-based frameworks frequently handle
            resource loading for you, so you might not have to call these APIs
            yourself. Consult your framework’s documentation for details.
            prefetchDNS lets you prefetch the IP address of a DNS domain name
            that you expect to connect to. preconnect lets you connect to a
            server you expect to request resources from, even if you don’t know
            what resources you’ll need yet. preload lets you fetch a stylesheet,
            font, image, or external script that you expect to use.
            preloadModule lets you fetch an ESM module that you expect to use.
            preinit lets you fetch and evaluate an external script or fetch and
            insert a stylesheet. preinitModule lets you fetch and evaluate an
            ESM module. Entry points The react-dom package provides two
            additional entry points: react-dom/client contains APIs to render
            React components on the client (in the browser). react-dom/server
            contains APIs to render React components on the server.
          </p>
        </div>

        {/* Sidebar */}
        <div className="px-4 h-max sticky top-8">
          <h1 className="mb-4 text-sm font-medium">Author</h1>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-8">
              <ImageComponent
                src={`${IK_BASE}/userImg.jpeg`}
                alt="author"
                width={48}
                height={48}
                className="rounded-full object-cover"
              />
              <Link href="#" className="text-blue-800 font-medium">
                Jane Doe
              </Link>
            </div>
            <p className="text-sm text-gray-500">Frontend Developer</p>

            <div className="flex gap-2">
              <Link href="#">
                <ImageComponent
                  src={`${IK_BASE}/facebook.svg`}
                  alt="Facebook"
                  width={24}
                  height={24}
                />
              </Link>
              <Link href="#">
                <ImageComponent
                  src={`${IK_BASE}/instagram.svg`}
                  alt="Instagram"
                  width={24}
                  height={24}
                />
              </Link>
            </div>
          </div>

          <PostMenuActions />
          <h1 className="mt-8 mb-4 text-sm font-medium">Categories</h1>
          <div className="flex flex-col gap-2 text-sm">
            <Link className="underline" href="/">
              All
            </Link>
            <Link className="underline" href="/">
              Web Design
            </Link>
            <Link className="underline" href="/">
              Development
            </Link>
            <Link className="underline" href="/">
              Databases
            </Link>
            <Link className="underline" href="/">
              Search Engines
            </Link>
            <Link className="underline" href="/">
              Marketing
            </Link>
          </div>

          <h1 className="mt-8 mb-4 text-sm font-medium">Search</h1>
          <Search />
        </div>
      </div>

      {/* Comments */}
      <Comments user={user} />
    </div>
  );
}
