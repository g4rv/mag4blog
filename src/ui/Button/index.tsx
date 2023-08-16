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
				"min-w-fit rounded-lg bg-white p-3 text-center text-sm font-medium text-black outline-transparent transition-colors hover:bg-slate-300 active:border-blue-800",
				className,
			)}
			{...buttonProps}
		>
			{children}
		</button>
	);
};

export default Button;
