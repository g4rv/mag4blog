import Link from 'next/link';

const Footer = () => {
	return (
		<footer className="flex items-center gap-3 container mx-auto sticky top-full pb-6 flex-col-reverse sm:flex-row sm:gap-8">
			<p>&copy; 2023</p>
			<nav>
				<ul className="flex items-center gap-1 flex-col sm:flex-row sm:gap-4">
					<li>
						<Link href="/">LinkedIn</Link>
					</li>
					<li>
						<Link href="/">GitHub</Link>
					</li>
				</ul>
			</nav>
		</footer>
	);
};
export default Footer;
