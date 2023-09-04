"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const UserInfo = () => {
	const session = useSession();
	const route = useRouter();

	if (session.status === "unauthenticated") {
		route.push("/dashboard/login");
	}

	return (
		<div className="relative">
			<div className="flex flex-col items-center gap-4 sticky top-32">
				<Image
					className="aspect-square h-full max-h-[6.25rem] rounded-full"
					src={session.data?.user?.image || ""}
					width={100}
					height={100}
					alt={session.data?.user?.name || ""}
				/>
				<h1 className="title w-full text-2xl">
					{session.data?.user?.name || " "}
				</h1>
				<Link
					className="min-w-fit rounded-lg bg-primary p-3 text-center text-sm font-medium text-white outline-transparent transition-colors hover:bg-primary/70 dark:bg-white dark:text-primary dark:hover:bg-slate-300"
					href="/dashboard/create-post"
				>
					Create new post
				</Link>
				<button
					className="outline-red-600ed m-[1px] mt-8 min-w-fit rounded-lg bg-red-600 p-3 text-center text-sm font-medium text-white outline-1 outline-offset-4 transition-colors hover:bg-red-400"
					type="button"
				>
					Log out
				</button>
			</div>
		</div>
	);
};
export default UserInfo;
