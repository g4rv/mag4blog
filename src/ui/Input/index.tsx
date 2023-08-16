import { twMerge } from "tailwind-merge";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<InputProps> = ({
	type = "text",
	className = "",
	...inputProps
}) => {
	return (
		<input
			type={type}
			className={twMerge(
				"w-full rounded-lg border border-primary bg-white px-4 py-2 text-base text-primary outline-none duration-200 focus:bg-primary focus:text-white dark:border-white dark:bg-primary dark:text-white dark:focus:bg-white dark:focus:text-primary",
				className,
			)}
			{...inputProps}
		/>
	);
};
export default Input;
