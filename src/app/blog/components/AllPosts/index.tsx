import React from "react";
import Image from "next/image";
import Link from "next/link";

const AllPosts = () => {
	return (
		<section>
			<h2 className="mb-8 font-medium text-2xl">All blog posts</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				<article className="flex flex-col lg:gap-8 gap-5">
					<Image
						src="/images/about.jpg"
						className="max-h-64  object-cover"
						width={1621}
						height={2432}
						alt="How do you create compelling"
					/>
					<div className="">
						<time
							dateTime=""
							className="text-purple mb-3 block text-sm"
						>
							Sunday , 1 Jan 2023
						</time>
						<h2 className="mb-3 w-full border-b border-transparent text-2xl font-semibold transition-colors hover:border-primary dark:hover:border-secondary">
							<Link
								className="flex items-start justify-between"
								href="/blog/1"
							>
								<span>How do you create compelling</span>
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
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
							</Link>
						</h2>
						<p className="mb-6 line-clamp-3 dark:text-[#C0C5D0] ">
							How do you create compelling presentations that wow
							your colleagues and impress your managers?
						</p>
						<div className="flex gap-2">
							<span className="before:bg-purple/10 relative overflow-hidden rounded-full bg-primary px-2.5 py-1 text-sm font-medium text-white before:absolute before:inset-0 dark:bg-white dark:text-primary ">
								111
							</span>
							<span className="before:bg-purple/10 relative overflow-hidden rounded-full bg-primary px-2.5 py-1 text-sm font-medium text-white before:absolute before:inset-0 dark:bg-white dark:text-primary ">
								222
							</span>
							<span className="before:bg-purple/10 relative overflow-hidden rounded-full bg-primary px-2.5 py-1 text-sm font-medium text-white before:absolute before:inset-0 dark:bg-white dark:text-primary ">
								333
							</span>
						</div>
					</div>
				</article>
                <article className="flex flex-col gap-8">
					<Image
						src="/images/about.jpg"
						className="max-h-64  object-cover"
						width={1621}
						height={2432}
						alt="How do you create compelling"
					/>
					<div className="">
						<time
							dateTime=""
							className="text-purple mb-3 block text-sm"
						>
							Sunday , 1 Jan 2023
						</time>
						<h2 className="mb-3 w-full border-b border-transparent text-2xl font-semibold transition-colors hover:border-primary dark:hover:border-secondary">
							<Link
								className="flex items-center justify-between "
								href="/blog/1"
							>
								<span>How do you create compelling</span>
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
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
							</Link>
						</h2>
						<p className="mb-6 line-clamp-3 dark:text-[#C0C5D0] ">
							How do you create compelling presentations that wow
							your colleagues and impress your managers?
						</p>
						<div className="flex gap-2">
							<span className="before:bg-purple/10 relative overflow-hidden rounded-full bg-primary px-2.5 py-1 text-sm font-medium text-white before:absolute before:inset-0 dark:bg-white dark:text-primary ">
								111
							</span>
							<span className="before:bg-purple/10 relative overflow-hidden rounded-full bg-primary px-2.5 py-1 text-sm font-medium text-white before:absolute before:inset-0 dark:bg-white dark:text-primary ">
								222
							</span>
							<span className="before:bg-purple/10 relative overflow-hidden rounded-full bg-primary px-2.5 py-1 text-sm font-medium text-white before:absolute before:inset-0 dark:bg-white dark:text-primary ">
								333
							</span>
						</div>
					</div>
				</article>
                <article className="flex flex-col gap-8">
					<Image
						src="/images/about.jpg"
						className="max-h-64  object-cover"
						width={1621}
						height={2432}
						alt="How do you create compelling"
					/>
					<div className="">
						<time
							dateTime=""
							className="text-purple mb-3 block text-sm"
						>
							Sunday , 1 Jan 2023
						</time>
						<h2 className="mb-3 w-full border-b border-transparent text-2xl font-semibold transition-colors hover:border-primary dark:hover:border-secondary">
							<Link
								className="flex items-center justify-between "
								href="/blog/1"
							>
								<span>How do you create compelling</span>
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
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
							</Link>
						</h2>
						<p className="mb-6 line-clamp-3 dark:text-[#C0C5D0] ">
							How do you create compelling presentations that wow
							your colleagues and impress your managers?
						</p>
						<div className="flex gap-2">
							<span className="before:bg-purple/10 relative overflow-hidden rounded-full bg-primary px-2.5 py-1 text-sm font-medium text-white before:absolute before:inset-0 dark:bg-white dark:text-primary ">
								111
							</span>
							<span className="before:bg-purple/10 relative overflow-hidden rounded-full bg-primary px-2.5 py-1 text-sm font-medium text-white before:absolute before:inset-0 dark:bg-white dark:text-primary ">
								222
							</span>
							<span className="before:bg-purple/10 relative overflow-hidden rounded-full bg-primary px-2.5 py-1 text-sm font-medium text-white before:absolute before:inset-0 dark:bg-white dark:text-primary ">
								333
							</span>
						</div>
					</div>
				</article>
			</div>
		</section>
	);
};

export default AllPosts;
