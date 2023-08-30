import { twMerge } from "tailwind-merge";

type InputProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea: React.FC<InputProps> = ({
	className = "",
	...textareaProps
}) => {
	return (
		<textarea
			className={twMerge(
				"w-full rounded-lg border border-primary bg-white px-4 py-2 text-base text-primary outline-none duration-200 focus:bg-primary focus:text-white dark:border-white dark:bg-primary dark:text-white dark:focus:bg-white dark:focus:text-primary",
				className,
			)}
			{...textareaProps}
		/>
	);
};
export default Textarea;
