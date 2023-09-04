"use client";
import Button from "@/ui/Button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { z, ZodType } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";

type FormFileds = z.infer<typeof formSchema>;

const formSchema = z
	.object({
		name: z.string(),
		username: z.string().min(2).max(24),
		email: z.string().email(),
		password: z.string().min(6),
		confirmPassword: z.string().min(6),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "Passwords did not match",
		path: ["confirmPassword"],
	});

const RegisterPage = () => {
	const route = useRouter();

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
			const res = await fetch("/api/auth/register", {
				method: "POST",
				headers: {
					"Content-type": "application/json",
				},
				body: JSON.stringify({
					name: data.name,
					username: data.username,
					email: data.email,
					password: data.password,
				}),
			});

			if (res.ok) {
				route.push("/dashboard/login");
			}
		} catch (err) {
			console.log(err);
		}
	};
	return (
		<main className="flex h-full items-center justify-center">
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="flex flex-col gap-2"
			>
				<label>
					<p>Name</p>
					<input
						className="input"
						placeholder="John Doe"
						{...register("name")}
					/>
				</label>
				<label>
					<p>Username*</p>
					<input
						className="input"
						placeholder="John1Do3"
						{...register("username")}
					/>
					{errors.username?.message ? (
						<p className="font-light text-red-300">
							{errors.username.message}
						</p>
					) : null}
				</label>
				<label>
					<p>Email*</p>
					<input
						className="input"
						placeholder="JohnDoe1994@example.com"
						{...register("email")}
						type="email"
					/>
					{errors.email?.message ? (
						<p className="font-light text-red-300">
							{errors.email.message}
						</p>
					) : null}
				</label>
				<label>
					<p>Password*</p>
					<input
						className="input"
						placeholder="MpdkC4VVaU"
						{...register("password")}
						type="password"
					/>
					{errors.password?.message ? (
						<p className="font-light text-red-300">
							{errors.password.message}
						</p>
					) : null}
				</label>
				<label>
					<p>Confirm password*</p>
					<input
						className="input"
						placeholder="MpdkC4VVaU"
						{...register("confirmPassword")}
						type="password"
					/>
					{errors.confirmPassword?.message ? (
						<p className="font-light text-red-300">
							{errors.confirmPassword.message}
						</p>
					) : null}
				</label>
				<p className="my-8">
					You already have an account?{" "}
					<Link href="/dashboard/login" className="underline">
						Log in
					</Link>
				</p>
				<Button type="submit">Register</Button>
			</form>
		</main>
	);
};
export default RegisterPage;
