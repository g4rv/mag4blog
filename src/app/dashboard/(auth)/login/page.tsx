'use client'
import { useSession, signIn } from "next-auth/react";
import Link from "next/link";

const LoginPage = () => {

    const session = useSession()

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
                    <p>email</p>
                    <input type="email" />
                </label>
                <label className="flex flex-col gap-2">
                    <p>password</p>
                    <input type="password" />
                </label>
                <br />
                Dont have a profile yet? <Link href='/dashboard/register'>Register</Link>
                <br />
                <button type="submit">Log in</button>
            </form>
        </main>
    );
};
export default LoginPage;