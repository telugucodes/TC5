// app/write/page.tsx
'use client';

import { useUser } from "@clerk/clerk-react";
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill-new';
import './index.css';

const WritePage = () => {
  const { isLoaded, isSignedIn } = useUser();

  if (!isLoaded) return <div>Loading...</div>;
  if (isLoaded && !isSignedIn) return <div>Please sign in to access this page.</div>;

  return (
    <div className="h-calc(100vh-60px)  md:h-calc(100vh - 60px) flex flex-col gap-6">
      <h1 className="text-cl font-light">Create a new post</h1>
      <form className="flex flex-col gap-6 flex-1 mb-6">
        <button className="w-max p-2 shadow-md rounded-xl text-sm bg-[#f0f0f0] text-gray-500">Add a cover picture</button>
        <input className="text-4xl font-semi-bold bg-transparent outline-none" type="text" placeholder="My Awesome Story" />
        <div className="flex items-center gap-4">
          <label htmlFor="content" className="text-sm">Choose a category: </label>
          <select name="cat" id="" className="p-2 rounded-xl shadow-md outline-none bg-white">
            <option value="general">General</option>
            <option value="web-design">Web Design</option>
            <option value="data-bases">Data Bases</option>
            <option value="servers">Servers</option>
            <option value="cn">CN</option>
            <option value="marketing">Marketing</option>
          </select>
        </div>
        <textarea name="desc" className= "p-4 rounded-xl shadow-md outline-none bg-[#f0f0f0]" id="" placeholder="Write your Desc..." />
        <ReactQuill theme="snow" className="flex-1 rounded-xl bg-[#f0f0f0] shadow-md"/>
        <button className="bg-blue-800 text-white font-medium rounded-xl mt-4 p-2 w-36">Send</button>
      </form>
    </div>
  );
};

export default WritePage;
