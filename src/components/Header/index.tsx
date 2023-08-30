"use client";
import Link from "next/link";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { useSession, signOut, signIn } from "next-auth/react";
import ThemeToggle from "../ThemeToggle";
import Button from "@/ui/Button";
import Image from "next/image";

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [showDropdown, setShowDropdown] = useState(false);

	const closeFunc = () => setIsOpen(false);
	const openFunc = () => setIsOpen(true);

	const isFocusible = isOpen ? 0 : -1;
	const session = useSession();
	return (
		<header className="sticky top-0 z-50 w-full">
			<div className="container bg-white py-5 dark:bg-primary">
				<div className="flex items-center justify-between sm:hidden">
					<Link href="/">Mag4Blog</Link>
					<button className="relative h-6 w-6" onClick={openFunc}>
						<div className="absolute inset-0 top-3 m-auto h-0.5 w-[80%] bg-primary dark:bg-white"></div>
						<div className="absolute inset-0 m-auto h-0.5 w-[80%] bg-primary dark:bg-white"></div>
						<div className="absolute inset-0 bottom-3 m-auto h-0.5 w-[80%] bg-primary dark:bg-white"></div>
					</button>
				</div>
				<nav
					className={twMerge(
						"fixed inset-0 flex -translate-y-[100vh] flex-col items-center justify-center bg-white py-4 duration-200 dark:bg-primary sm:static sm:block sm:translate-y-0 sm:bg-transparent sm:dark:bg-transparent",
						isOpen && "translate-y-0",
					)}
				>
					<ul className="mx-auto my-auto flex flex-col items-center gap-4 sm:flex-row">
						<li className="mb-4 sm:mb-0 sm:mr-auto">
							<Link
								href="/"
								tabIndex={isFocusible}
								onClick={closeFunc}
							>
								Mag4Blog
							</Link>
						</li>
						<li>
							<Link
								href="/blog"
								tabIndex={isFocusible}
								onClick={closeFunc}
							>
								Posts
							</Link>
						</li>
						<li>
							<Link
								href="/about"
								tabIndex={isFocusible}
								onClick={closeFunc}
							>
								About us
							</Link>
						</li>
						<li className="leading-none">
							<ThemeToggle />
						</li>
						<li className="relative">
							{session.status === "authenticated" ? (
								<>
									<Image
										src={session.data.user?.image || ""}
										alt={session.data.user?.name || ""}
										width={40}
										height={40}
										className="rounded-full"
										onClick={() =>
											setShowDropdown((prev) => !prev)
										}
									/>
									{showDropdown ? (
										<div className="flex flex-col gap-2 absolute top-full bg-primary rounded-lg w-max p-2 left-1/2 -translate-x-1/2">
											<Link href="/dashboard/profile">
												Profile
											</Link>
											<button onClick={() => signOut()}>
												Log out
											</button>
										</div>
									) : null}
								</>
							) : (
								<Button onClick={() => signIn("google")}>
									Google
								</Button>
							)}
						</li>
					</ul>
					<button
						className="relative h-6 w-6 sm:hidden"
						onClick={closeFunc}
						tabIndex={isFocusible}
					>
						<div className="absolute inset-0 m-auto h-0.5 w-[80%] rotate-45 bg-primary dark:bg-white"></div>
						<div className="absolute inset-0 m-auto h-0.5 w-[80%] -rotate-45 bg-primary dark:bg-white"></div>
					</button>
				</nav>
			</div>
		</header>
	);
};
export default Header;
