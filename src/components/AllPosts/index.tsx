import React from "react";
import Image from "next/image";
import Link from "next/link";
import Post from "@/components/Post";

const arr = [
	{
		imgUrl: "/images/about.jpg",
		date: "Sunday , 1 Jan 2023",
		title: "Lorem ipsum dolor",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci eos aut placeat omnis, quo qui neque, molestias ipsum explicabo est provident maiores harum iusto doloribus nulla. Nobis eaque amet commodi?",
		tags: ["111", "222", "333"],
	},
	{
		imgUrl: "/images/about.jpg",
		date: "Sunday , 1 Jan 2023",
		title: "Lorem ipsum dolor",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci eos aut placeat omnis, quo qui neque, molestias ipsum explicabo est provident maiores harum iusto doloribus nulla. Nobis eaque amet commodi?",
		tags: ["111", "222", "333"],
	},
	{
		imgUrl: "/images/about.jpg",
		date: "Sunday , 1 Jan 2023",
		title: "Lorem ipsum dolor",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci eos aut placeat omnis, quo qui neque, molestias ipsum explicabo est provident maiores harum iusto doloribus nulla. Nobis eaque amet commodi?",
		tags: ["111", "222", "333"],
	},
	{
		imgUrl: "/images/about.jpg",
		date: "Sunday , 1 Jan 2023",
		title: "Lorem ipsum dolor",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci eos aut placeat omnis, quo qui neque, molestias ipsum explicabo est provident maiores harum iusto doloribus nulla. Nobis eaque amet commodi?",
		tags: ["111", "222", "333"],
	},
];

const AllPosts = () => {
	return (
		<section>
			<h2 className="mb-8 text-2xl font-medium">All blog posts</h2>
			<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
				{arr.map((item, index) => (
					<Post
						key={index}
						date={item.date}
						imgUrl={item.imgUrl}
						tags={item.tags}
						text={item.text}
						title={item.title}
					/>
				))}
			</div>
		</section>
	);
};

export default AllPosts;
