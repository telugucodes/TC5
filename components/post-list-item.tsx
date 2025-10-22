import { ImageComponent } from "./ui/ImageComponent";
import Link from "next/dist/client/link";

const PostListItem = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-8">
        {/* image */}
        <div className="md:hidden xl:block xl:w-1/3">
            <ImageComponent src="postImg.jpeg" alt="Post Image" width={400} height={250} className="rounded-2xl object-cover w-765 h-auto" />
        </div>
        {/* details */}
        <div className="flex flex-col gap-4 xl:w-2/3">
            <Link href="/test" className="text-4xl font-semibold">The SDK is designed to work with both the App Router and the Pages Router. </Link>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
                <span>Written by</span>
                <Link href="#" className="text-blue-800">Sulin</Link>
                <span>On</span>
                <Link href="#" className="text-blue-800">Web Design</Link>
                <span>2 days ago</span>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <Link href="/test" className="underline text-blue-800 text-sm">Read More</Link>
        </div>
    </div>
  );
};
export { PostListItem };