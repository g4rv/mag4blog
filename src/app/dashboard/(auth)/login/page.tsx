'use client';
import Button from '@/ui/Button';
import Input from '@/ui/Input';
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
            <form className="flex flex-col items-center gap-4" onSubmit={handleSubmit} autoComplete='true'>
                <label htmlFor="email" className="flex flex-col gap-2">
                    <p>Email</p>
                    <Input type="email" name="email" id="email" placeholder="example@gmail.com" required/>
                </label>
                <label htmlFor='password' className="flex flex-col gap-2">
                    <p>Password</p>
                    <Input type="password" name='passowrd' id='password' placeholder="Enter password" required/>
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
                <Button type="submit" innerText="Log in" />
                <button onClick={() => signIn('google')}>Google</button>
            </form>
        </main>
    );
};
export default LoginPage;
