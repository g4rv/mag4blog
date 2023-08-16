import { useTheme } from "@/context/ThemeContext";
import { twMerge } from "tailwind-merge";

const ThemeToggle = () => {
	const { theme, toggleTheme } = useTheme();

	return (
		<button
			onClick={toggleTheme}
			className="relative h-6 w-12 rounded-full bg-primary p-1 dark:bg-white"
		>
			<div
				className={twMerge(
					"absolute bottom-0 top-0 my-auto h-4 w-4 overflow-hidden rounded-full bg-white bg-left-bottom outline outline-2 -outline-offset-[1px] outline-primary transition-all duration-300 before:absolute before:-right-[40%] before:-top-1 before:h-4 before:w-4 before:rounded-full before:bg-primary before:duration-200",
					theme === "dark" && "translate-x-6 before:right-0 before:top-0",
				)}
			/>
		</button>
	);
};
export default ThemeToggle;
