import React from 'react';
import { twMerge } from 'tailwind-merge';

type ButtonProps = { innerText: string } & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({
    type = 'button',
    className,
    innerText = '',
    ...buttonProps
}) => {
    return (
        <button
            type={type}
            className={twMerge(
                'p-3 rounded-lg text-center text-[rgb(var(--background-rgb))] bg-[rgb(var(--foreground-rgb))] font-medium text-sm min-w-fit outline-transparent hover:bg-slate-300 transition-colors',
                className,
            )}
            {...buttonProps}
        >
            {innerText}
        </button>
    );
};

export default Button;
