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
                'p-3 rounded-lg text-center bg-white text-black font-medium text-sm min-w-fit outline-transparent active:border-blue-800 hover:bg-slate-300 transition-colors',
                className,
            )}
            {...buttonProps}
        >
            {innerText}
        </button>
    );
};

export default Button;
