import { FeaturedPosts } from "@/components/featured-posts";
import { PostList } from "@/components/post-list";

const HomePage = () => {
  return (
    <div>
    <div className="mt-4 flex items-center justify-between">
      <div className="">
        <h1 className="text-gray-800 text-2xl md:text-5xl lg:text-6xl font-bold">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h1>
        <p className="mt-8 text-md md:text-xls">This is the home page of your dashboard application.</p>
      </div>
    </div>

    <FeaturedPosts />

    {/* PostList */}

    <div className="">
      <h1 className="my-8 text-2xl text-gray-600">Recent Posts</h1>
      <PostList />
    </div>
    </div>
  )
};

export default HomePage;
