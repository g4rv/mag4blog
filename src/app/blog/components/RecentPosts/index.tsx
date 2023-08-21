import React from "react";
import Image from "next/image";
import Link from "next/link";

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
			<h2 className="text-2xl xxs:mb-5 font-medium lg:mb-8">Recent blog posts</h2>
			<div
				className={`grid ${firstChildStyles} ${secondChildStyles} ${thirdChildStyles} ${fourthChildStyles} gap-8 lg:grid-cols-2 lg:grid-rows-[repeat(3,200px)]`}
			>
				{arr.map((item, index) => (
					<article key={index} className="flex flex-col xxs:gap-5 lg:gap-8">
						<Image
							src={item.imgUrl}
							className="max-h-64 object-cover"
							width={1621}
							height={2432}
							alt={item.title}
						/>
						<div>
							<time
								dateTime=""
								className="text-purple mb-3 block text-sm"
							>
								{item.date}
							</time>
							<h2 className="mb-3 w-full border-b border-transparent text-2xl font-semibold transition-colors hover:border-primary dark:hover:border-secondary">
								<Link
									className="flex items-start justify-between "
									href="/blog/1"
								>
									<span>{item.title}</span>
									<svg
										width="12"
										height="12"
										viewBox="0 0 12 12"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M1 11L11 1M11 1H1M11 1V11"
											stroke="white"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</Link>
							</h2>
							<p className="lg:mb-6 xxs:mb-3 line-clamp-3 dark:text-secondary">
								{item.text}
							</p>
							<div className="flex gap-2">
								{item.tags.map((tag, index) => (
									<span
										key={index}
										className="before:bg-purple/10 relative overflow-hidden rounded-full bg-primary px-2.5 py-1 text-sm font-medium text-secondary before:absolute before:inset-0 dark:bg-white dark:text-primary "
									>
										{tag}
									</span>
								))}
							</div>
						</div>
					</article>
				))}
			</div>
		</section>
	);
};

export default RecentPosts;
