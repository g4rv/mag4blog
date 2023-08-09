'use client';
import Link from 'next/link';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { useSession, signOut } from 'next-auth/react';

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	const closeFunc = () => setIsOpen(false);
	const openFunc = () => setIsOpen(true);

	const isFocusible = isOpen ? 0 : -1;
	const session = useSession();
	return (
		<header className="sticky top-0 py-5 px-4 z-50">
			<div className="flex items-center justify-between sm:hidden">
				<p>Mag4Blog</p>
				<button className="w-6 h-6 relative" onClick={openFunc}>
					<div className="w-[80%] h-0.5 bg-[rgb(var(--foreground-rgb))] absolute inset-0 m-auto top-3"></div>
					<div className="w-[80%] h-0.5 bg-[rgb(var(--foreground-rgb))] absolute inset-0 m-auto"></div>
					<div className="w-[80%] h-0.5 bg-[rgb(var(--foreground-rgb))] absolute inset-0 m-auto bottom-3"></div>
				</button>
			</div>
			<nav
				className={twMerge(
					'fixed bg-[rgb(var(--background-rgb))] inset-0 flex flex-col justify-center items-center py-4 -translate-y-[100vh] duration-300 sm:static sm:translate-y-0 sm:block',
					isOpen && 'translate-y-0'
				)}
			>
				<ul className="flex items-center container mx-auto flex-col gap-4 my-auto sm:flex-row">
					<li
						className="mb-4 sm:mb-0 sm:mr-auto"
						tabIndex={isFocusible}
					>
						Mag4Blog
					</li>
					<li>
						<Link href="/" tabIndex={isFocusible}>
							Posts
						</Link>
					</li>
					<li>
						<Link href="/" tabIndex={isFocusible}>
							About us
						</Link>
					</li>
					<li>
						<Link href="/" tabIndex={isFocusible}>
							Theme switch
						</Link>
					</li>
					<li>
						{session.status === 'authenticated' ? (
							<button onClick={() => signOut()}>Log out</button>
						) : (
							<Link href="/dashboard" tabIndex={isFocusible}>
								Login/Register
							</Link>
						)}
					</li>
				</ul>
				<button
					className="w-6 h-6 relative sm:hidden"
					onClick={closeFunc}
					tabIndex={isFocusible}
				>
					<div className="w-[80%] h-0.5 bg-[rgb(var(--foreground-rgb))] absolute inset-0 m-auto rotate-45"></div>
					<div className="w-[80%] h-0.5 bg-[rgb(var(--foreground-rgb))] absolute inset-0 m-auto -rotate-45"></div>
				</button>
			</nav>
		</header>
	);
};
export default Header;
