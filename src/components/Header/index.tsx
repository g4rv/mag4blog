"use client";
import Link from "next/link";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { useSession, signOut } from "next-auth/react";
import ThemeToggle from "../ThemeToggle";

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	const closeFunc = () => setIsOpen(false);
	const openFunc = () => setIsOpen(true);

	const isFocusible = isOpen ? 0 : -1;
	const session = useSession();
	return (
		<header className="sticky w-full top-0 z-50">
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
						"fixed inset-0 flex -translate-y-[100vh] flex-col items-center justify-center bg-white py-4 duration-200 dark:bg-primary sm:bg-transparent sm:static sm:block sm:translate-y-0",
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
						<li>
							<ThemeToggle />
						</li>
						<li>
							{session.status === "authenticated" ? (
								<button onClick={() => signOut()}>
									Log out
								</button>
							) : (
								<div className="flex gap-4">
									<Link
										href="/dashboard/login"
										tabIndex={isFocusible}
										onClick={closeFunc}
									>
										Login
									</Link>
									<Link
										href="/dashboard/register"
										tabIndex={isFocusible}
										onClick={closeFunc}
									>
										Register
									</Link>
								</div>
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
