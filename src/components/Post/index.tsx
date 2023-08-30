import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

export type PostProps = {
	imgUrl: string;
	title: string;
	date: string;
	text: string;
	tags: string[];
};

const Post: FC<PostProps> = ({ imgUrl, title, date, text, tags }) => {
	return (
		<article className="gap-3 2xs:gap-5 flex flex-col lg:gap-8">
			<Image
				src={imgUrl}
				className="max-h-64 object-cover"
				width={500}
				height={250}
				alt={title}
			/>
			<div>
				<time dateTime="" className="text-purple mb-3 block text-sm">
					{date}
				</time>
				<h2 className="mb-3 w-full border-b border-transparent text-2xl font-semibold transition-colors hover:border-primary dark:hover:border-secondary">
					<Link
						className="flex items-start justify-between "
						href="/blog/1"
					>
						<span>{title}</span>
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
				<p className="mb-2 2xs:mb-3 line-clamp-3 dark:text-secondary lg:mb-6">
					{text}
				</p>
				<div className="flex gap-2">
					{tags.map((tag, index) => (
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
	);
};
export default Post;
