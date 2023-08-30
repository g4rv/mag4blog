"use client";
import Button from "@/ui/Button";
import Input from "@/ui/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSession, signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { NextResponse } from "next/server";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

type FormFileds = z.infer<typeof formSchema>;

const formSchema = z.object({
	email: z.string().email(),
	password: z.string().min(6),
});

const LoginPage = () => {
	const session = useSession();
    const route = useRouter()

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormFileds>({
		resolver: zodResolver(formSchema),
	});

	const onSubmit: SubmitHandler<FormFileds> = async (data) => {
		console.log(data);
		try {
			const x = await signIn("credentials", data);
			console.log(x);
		} catch (err) {
			console.log(err);
			console.log(123);
		}
	};

    useEffect(() => {
        if(session.status === 'authenticated') {
            route.push('/dashboard/profile')
        }
    }, [session, route])

	return (
		<main className="flex h-full items-center justify-center">
			{session.status === "authenticated" && session.data.user?.name}
			{/* <form
				className="flex flex-col items-center gap-4"
				onSubmit={handleSubmit(onSubmit)}
				autoComplete="true"
			>
				<label className="flex flex-col gap-2">
					<p>Email</p>
					<input
						className="input"
						type="email"
						placeholder="example@gmail.com"
						{...register("email")}
					/>
					{errors.email?.message ? (
						<p className="font-light text-red-300">
							{errors.email.message}
						</p>
					) : null}
				</label>
				<label className="flex flex-col gap-2">
					<p>Password</p>
					<input
						className="input"
						type="password"
						placeholder="Enter password"
						{...register("password")}
					/>
					{errors.password?.message ? (
						<p className="font-light text-red-300">
							{errors.password.message}
						</p>
					) : null}
				</label>
				{session.status}
				{JSON.stringify(session.data)}
				<p>
					Dont have a profile yet?{" "}
					<Link className="underline" href="/dashboard/register">
						Register
					</Link>
				</p>
				<Button type="submit">Log in</Button>
			</form> */}
			<Button onClick={() => signIn("google")}>Google</Button>
		</main>
	);
};
export default LoginPage;
