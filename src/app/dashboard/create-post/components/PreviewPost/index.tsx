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
			<h2 className="mb-8 text-4xl font-bold">{props.postTitle}</h2>
			{props.postImg.length === 0 ? null : (
				<Image
					className="aspect-video object-cover"
					src={formatedImageUrl}
					width={500}
					height={250}
					alt={props.postTitle}
				/>
			)}
			<p className="mb-8">{props.postText}</p>
			<ul className="flex flex-wrap gap-4">
				{props.postTag.map((tag, index) => (
					<li
						className="rounded-full bg-white px-2.5 py-1 text-sm font-medium text-black"
						key={tag}
						onClick={() => props.deleteTag(tag)}
					>
						{tag}
					</li>
				))}
			</ul>
		</div>
	);
};

export default PreviewPost;
