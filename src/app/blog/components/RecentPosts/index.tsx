import React from "react";
import Image from "next/image";
import Link from "next/link";
import Post from "@/components/Post";

const firstChildStyles =
	"lg:[&>*:nth-child(1)]:row-start-1 lg:[&>*:nth-child(1)]:justify-between lg:[&>*:nth-child(1)]:row-end-3 lg:[&>*:nth-child(1)_img]:max-h-[200px]";
const secondChildStyles =
	"md:[&>*:nth-child(2)]:flex-row md:[&>*:nth-child(2)_img]:flex-1 md:[&>*:nth-child(2)>div]:flex-[1.5]";
const thirdChildStyles =
	"md:[&>*:nth-child(3)]:flex-row md:[&>*:nth-child(3)_img]:flex-1 md:[&>*:nth-child(3)>div]:flex-[1.5]";
const fourthChildStyles =
	"lg:[&>*:nth-child(4)]:col-span-full lg:[&>*:nth-child(4)]:flex-row lg:[&>*:nth-child(4)_img]:flex-1 lg:[&>*:nth-child(4)>div]:flex-1";

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

const RecentPosts = () => {
	return (
		<section>
			<h2 className="text-2xl font-medium xxs:mb-5 lg:mb-8">
				Recent blog posts
			</h2>
			<div
				className={`grid ${firstChildStyles} ${secondChildStyles} ${thirdChildStyles} ${fourthChildStyles} gap-8 lg:grid-cols-2 lg:grid-rows-[repeat(3,200px)]`}
			>
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

export default RecentPosts;
