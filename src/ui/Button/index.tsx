import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type ButtonProps = {
	children: ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({
	type = "button",
	className,
	children,
	...buttonProps
}) => {
	return (
		<button
			type={type}
			className={twMerge(
				"min-w-fit rounded-lg bg-primary p-3 text-center text-sm font-medium text-white outline-transparent transition-colors dark:hover:bg-slate-300 dark:bg-white dark:text-primary hover:bg-primary/70",
				className,
			)}
			{...buttonProps}
		>
			{children}
		</button>
	);
};

export default Button;
