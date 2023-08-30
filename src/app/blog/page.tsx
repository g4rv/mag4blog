import React from "react";
import RecentPosts from "./components/RecentPosts";
import AllPosts from "../../components/AllPosts";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Blog",
	description: "All blogs",
};

const Blog = () => {
	return (
		<main className="container">
			<h1 className="title xxs:text-[2rem] text-[2.5rem] sm:text-[4rem] md:text-[6rem] lg:text-[8rem] xl:text-[10rem] 2xl:text-[14rem]">
				The Blog
			</h1>
			<RecentPosts />
			<AllPosts />
		</main>
	);
};

export default Blog;
