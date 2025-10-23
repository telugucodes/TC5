// src/components/FeaturedPosts.tsx
"use client";

import React from "react";
import { ImageComponent } from "./ui/ImageComponent";
import Link from "next/dist/client/link";

export function FeaturedPosts() {
  return (
    <div className="mt-8 flex flex-col lg:flex-row gap-8">
        {/* FirstPost */}
        <div className="w-full lg:w-1/2 gap-4">
        {/* image */}
            <ImageComponent src="featured1.jpeg" alt="featured1" width={500} height={300} className="object-cover rounded-3xl w-894 h-auto" />

        {/* details */}
        <div className="flex items-center gap-4">
            <h1 className="font-semibold lg:text-lg">01.</h1>
            <Link href="/tests" className="text-blue-800 lg:text-lg">Web Design</Link>
            <span className="text-gray-500">2 days ago</span>
        </div>
        {/* title */}
        <Link href="/test" className="sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl font-bold "> The Ultimate Guide to Web Design Trends in 2024</Link>
        </div>

        {/* other posts */}
        <div className="w-full lg:w-1/2 gap-4 flex flex-col">

        {/* second post */}
        <div className="h-1/3 flex justify-between gap-4">
            <div className="w-1/3 aspect-video">
                <ImageComponent src="featured2.jpeg" alt="featured2" width={150} height={100} className="object-cover rounded-3xl w-298 w-full h-full" />
            </div>
            {/* details and title  */}
            <div className="w-2/3">
                <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
                <h1 className="semi-bold"></h1>
                <Link href="/tests" className="text-blue-800 lg:text-lg">Web Design</Link>
                <span className="text-gray-500">2 days ago</span>
                </div>
                <Link href="/test" className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-xl font-medium">Top 10 UI/UX Design Principles for Engaging Websites</Link>
            </div>
        </div>
        {/* third post */}
        <div className="h-1/3 flex justify-between gap-4">
            <div className="w-1/3 aspect-video">
                <ImageComponent src="featured3.jpeg" alt="featured3" width={150} height={100} className="object-cover rounded-3xl w-298 w-full h-full" />
            </div>
            {/* details and title  */}
            <div className="w-2/3">
                <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
                <h1 className="semi-bold"></h1>
                <Link href="/tests" className="text-blue-800 lg:text-lg">Web Design</Link>
                <span className="text-gray-500">2 days ago</span>
                </div>
                <Link href="/test" className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-xl font-medium">Top 10 UI/UX Design Principles for Engaging Websites</Link>
            </div>
        </div>
        {/* fourth post */}
        <div className="h-1/3 flex justify-between gap-4">
            <div className="w-1/3 aspect-video">
                <ImageComponent src="featured4.jpeg" alt="featured4" width={150} height={100} className="object-cover rounded-3xl w-298 w-full h-full" />
            </div>
            {/* details and title  */}
            <div className="w-2/3">
                <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
                <h1 className="semi-bold"></h1>
                <Link href="/tests" className="text-blue-800 lg:text-lg">Web Design</Link>
                <span className="text-gray-500">2 days ago</span>
                </div>
                <Link href="/test" className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-xl font-medium">Top 10 UI/UX Design Principles for Engaging Websites</Link>
            </div>
        </div>
        </div>
    </div>
  );
}
