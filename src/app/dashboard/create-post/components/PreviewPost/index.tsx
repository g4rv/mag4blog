import Image from "next/image";
import React, { FC } from "react";

type PreviewPostProps = {
	postTitle: string;
	postImg: string;
	postText: string;
	postTag: string[];
	deleteTag: (tag: string) => void;
};

const PreviewPost: FC<PreviewPostProps> = (props) => {
	const formatedImageUrl =
		props.postImg.startsWith("http://") ||
		props.postImg.startsWith("https://")
			? props.postImg
			: "https://images.pexels.com/photos/2832432/pexels-photo-2832432.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
	return (
		<div>
			<h2 className="mb-8 text-4xl font-bold first-letter:uppercase">{props.postTitle}</h2>
			{props.postImg.length === 0 ? null : (
				<Image
					className="aspect-video object-cover mb-4 "
					src={formatedImageUrl}
					width={500}
					height={250}
					alt={props.postTitle}
				/>
			)}
			<p className="mb-8 first-letter:uppercase">{props.postText}</p>
			<ul className="flex flex-wrap gap-4">
				{props.postTag.map((tag, index) => (
					<li
						className="group flex cursor-pointer items-center gap-1 rounded-full bg-primary text-white dark:bg-white px-2.5 py-1 text-sm font-medium dark:text-black"
						key={tag}
						onClick={() => props.deleteTag(tag)}
					>
						{tag}
						<p className="text-red-600">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
								className="hidden group-hover:block"
							>
								<line x1="18" y1="6" x2="6" y2="18"></line>
								<line x1="6" y1="6" x2="18" y2="18"></line>
							</svg>
						</p>
					</li>
				))}
			</ul>
		</div>
	);
};

export default PreviewPost;
