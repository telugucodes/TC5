import { FeaturedPosts } from "@/src/components/featured-posts";

const HomePage = () => {
  return (
    <>
    <div className="mt-4 flex items-center justify-between">
      <div className="">
        <h1 className="text-gray-800 text-2xl md:text-5xl lg:text-6xl font-bold">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h1>
        <p className="mt-8 text-md md:text-xls">This is the home page of your dashboard application.</p>
      </div>
    </div>

    <FeaturedPosts />
    </>
  )
};

export default HomePage;
