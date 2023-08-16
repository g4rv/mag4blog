'use client';
import Link from 'next/link';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { useSession, signOut } from 'next-auth/react';
import ThemeToggle from '../ThemeToggle';

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	const closeFunc = () => setIsOpen(false);
	const openFunc = () => setIsOpen(true);

	const isFocusible = isOpen ? 0 : -1;
	const session = useSession();
	return (
		<header className="sticky top-0 py-5 px-4 z-50">
			<div className="flex items-center justify-between sm:hidden">
				<Link href='/'>Mag4Blog</Link>
				<button className="w-6 h-6 relative" onClick={openFunc}>
					<div className="w-[80%] h-0.5 bg-primary dark:bg-white absolute inset-0 m-auto top-3"></div>
					<div className="w-[80%] h-0.5 bg-primary dark:bg-white absolute inset-0 m-auto"></div>
					<div className="w-[80%] h-0.5 bg-primary dark:bg-white absolute inset-0 m-auto bottom-3"></div>
				</button>
			</div>
			<nav
				className={twMerge(
					'fixed bg-white dark:bg-primary inset-0 flex flex-col justify-center items-center py-4 -translate-y-[100vh] sm:static sm:translate-y-0 sm:block',
					isOpen && 'translate-y-0'
				)}
			>
				<ul className="flex items-center container mx-auto flex-col gap-4 my-auto sm:flex-row">
					<li
						className="mb-4 sm:mb-0 sm:mr-auto"
						tabIndex={isFocusible}
					>
						<Link href='/'>Mag4Blog</Link>
					</li>
					<li>
						<Link href="/blog" tabIndex={isFocusible}>
							Posts
						</Link>
					</li>
					<li>
						<Link href="/about" tabIndex={isFocusible}>
							About us
						</Link>
					</li>
					<li>
						<ThemeToggle/>
					</li>
					<li>
						{session.status === 'authenticated' ? (
							<button onClick={() => signOut()}>Log out</button>
						) : (
							<div className='flex gap-4'>
								<Link href="/dashboard/login" tabIndex={isFocusible}>
									Login
								</Link>
                                <Link href="/dashboard/register" tabIndex={isFocusible}>
									Register
								</Link>
							</div>
						)}
					</li>
				</ul>
				<button
					className="w-6 h-6 relative sm:hidden"
					onClick={closeFunc}
					tabIndex={isFocusible}
				>
					<div className="w-[80%] h-0.5 bg-primary dark:bg-white absolute inset-0 m-auto rotate-45"></div>
					<div className="w-[80%] h-0.5 bg-primary dark:bg-white absolute inset-0 m-auto -rotate-45"></div>
				</button>
			</nav>
		</header>
	);
};
export default Header;
