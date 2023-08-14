'use client';
import Button from '@/ui/Button';
import Input from '@/ui/Input';
import Link from 'next/link';
import { FormEvent } from 'react';

const RegisterPage = () => {
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        try {
            const res = await fetch('/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(Object.fromEntries(formData)),
            });
        } catch (err) {
            console.log('bob');
        }
    };
    return (
        <main className="h-full flex items-center justify-center">
            <form
                className="flex flex-col items-center gap-4"
                onSubmit={handleSubmit}
                autoComplete="true"
            >
                <label htmlFor="userName" className="flex flex-col gap-2">
                    <p>Name</p>
                    <Input
                        id="userName"
                        name="userName"
                        placeholder="Pedro"
                        maxLength={45}
                        required
                    />
                    {/* <p className="hidden peer-invalid:block text-pink-600 font-medium text-sm">
                        Provide at least 2 characters
                    </p> */}
                </label>
                <label htmlFor="userNickname" className="flex flex-col gap-2">
                    <p>Nickname*</p>
                    <Input
                        name="userNickname"
                        id="userNickname"
                        placeholder="Leonardo"
                        minLength={2}
                        maxLength={45}
                        required
                    />
                    <p className="hidden peer-invalid:block text-pink-600 font-medium text-sm">
                        Provide at least 2 characters
                    </p>
                </label>
                <label htmlFor="email" className="flex flex-col gap-2">
                    <p>Email*</p>
                    <Input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="example@gmail.com"
                        required
                    />
                    <p className="hidden peer-invalid:block text-pink-600 font-medium text-sm">
                        Provide at least 10 characters
                    </p>
                </label>
                <label htmlFor="password" className="flex flex-col gap-2">
                    <p>Password*</p>
                    <Input
                        type="password"
                        name="passowrd"
                        id="password"
                        placeholder="Enter password"
                        minLength={8}
                        required
                    />
                    <p className="hidden peer-invalid:block text-pink-600 font-medium text-sm">
                        Provide at least 8 characters
                    </p>
                </label>
                <p>
                    Already have a profile?
                    <Link href="/dashboard/login" className="ml-4 underline">
                        Login
                    </Link>
                </p>
                <Button innerText="Register" />
            </form>
        </main>
    );
};
export default RegisterPage;
