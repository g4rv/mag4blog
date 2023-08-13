'use client';
import { useSession, signIn } from 'next-auth/react';
import Link from 'next/link';

const LoginPage = () => {
    const session = useSession();

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        const email = e.target[0].value;
        const password = e.target[1].value;

        signIn('credentials', { email, password });
    };
    return (
        <main className="h-full flex items-center justify-center">
            {session.status === 'authenticated' && session.data.user?.name}
            <form className="flex flex-col items-center gap-4" onSubmit={handleSubmit}>
                <label className="flex flex-col gap-2">
                    <p>Email</p>
                    <input
                        className="w-full max-w-[16.25rem] border py-2 px-4 rounded-lg text-base text-black m-[1px] outline-offset-4 outline-1 outline-white"
                        type="email"
                    />
                </label>
                <label className="flex flex-col gap-2">
                    <p>Password</p>
                    <input
                        className="w-full max-w-[16.25rem] border py-2 px-4 rounded-lg text-base text-black m-[1px] outline-offset-4 outline-1 outline-white"
                        type="password"
                    />
                </label>
                <br />
                Dont have a profile yet?
                <Link
                    className="p-3 rounded-lg text-center bg-white text-black font-medium text-sm min-w-fit m-[1px] outline-offset-4 outline-1 outline-white hover:bg-slate-300 transition-colors"
                    href="/dashboard/register"
                >
                    Register
                </Link>
                <br />
                <button
                    className="p-3 rounded-lg text-center bg-white text-black font-medium text-sm min-w-fit m-[1px] outline-offset-4 outline-1 outline-white hover:bg-slate-300 transition-colors"
                    type="submit"
                >
                    Log in
                </button>
            </form>
        </main>
    );
};
export default LoginPage;
