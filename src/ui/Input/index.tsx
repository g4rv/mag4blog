'use client';
import { twMerge } from 'tailwind-merge';

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<InputProps> = ({ type = 'text', className, ...inputProps }) => {
    return (
        <input
            type={type}
            className={twMerge(
                'border border-[rgb(var(--background-rgb))] outline-none w-full py-2 px-4 rounded-lg text-base text-[rgb(var(--foreground-rgb))] bg-[rgba(var(--foreground-rgb),0.5)] valid:border-red-500 peer',
                className,
            )}
            {...inputProps}
        />
    );
};
export default Input;
