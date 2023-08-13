'use client'
import { twMerge } from 'tailwind-merge';

type InputProps = {
	className?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<InputProps> = ({
	type = 'text',
	className,
	...inputProps
}) => {
	return (
		<input
			type={type}
			className={twMerge(
				'border border-[rgb(var(--background-rgb))] py-2 px-4 rounded-lg text-base text-[rgb(var(--background-rgb))] bg-[rgb(var(--foreground-rgb))]',
				className
			)}
			{...inputProps}
		/>
	);
};
export default Input;
