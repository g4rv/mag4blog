"use client";
import Button from "@/ui/Button";
import Input from "@/ui/Input";
import { useSession, signIn } from "next-auth/react";
import Link from "next/link";

const LoginPage = () => {
	const session = useSession();

	const handleSubmit = async (e: any) => {
		e.preventDefault();

		const email = e.target[0].value;
		const password = e.target[1].value;

		signIn("credentials", { email, password });
	};
	return (
		<main className="flex h-full items-center justify-center">
			{session.status === "authenticated" && session.data.user?.name}
			<form
				className="flex flex-col items-center gap-4"
				onSubmit={handleSubmit}
				autoComplete="true"
			>
				<label htmlFor="email" className="flex flex-col gap-2">
					<p>Email</p>
					<Input
						type="email"
						name="email"
						id="email"
						placeholder="example@gmail.com"
						required
					/>
				</label>
				<label htmlFor="password" className="flex flex-col gap-2">
					<p>Password</p>
					<Input
						type="password"
						name="passowrd"
						id="password"
						placeholder="Enter password"
						required
					/>
				</label>
				<p>
					Dont have a profile yet?{' '}
					<Link className="underline" href="/dashboard/register">
						Register
					</Link>
				</p>
				<Button type="submit">Log in</Button>
				<Button onClick={() => signIn("google")}>Google</Button>
			</form>
		</main>
	);
};
export default LoginPage;
