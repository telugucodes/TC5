"use client";
import React, { useState } from "react";
import { PostList } from "@/components/post-list";
import SideMenu from "@/components/side-menu";

const PostListPage = () => {
const [open, setOpen] = useState(false);

  return (
    <div className="">
      <h1 className="mb-8 text-2xl">Development Blog</h1>
      <button onClick={()=>setOpen((prev) => !prev)} className="bg-blue-800 text-sm text-white px-4 py-2 rounded-2xl md:hidden mb-4">{open? "Close" : "Filter or Search"}</button>
      <div className="flex flex-col-reverse gap-8 md:flex-row justify-between">
        <div className="">
          <PostList />
        </div>
        <div className={`${open ? "block" : "hidden"} md:block`}>
          <SideMenu />
        </div>
      </div>
    </div>
  )
};

export default PostListPage;
