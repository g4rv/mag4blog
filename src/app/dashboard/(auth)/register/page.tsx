"use client";
import Button from "@/ui/Button";
import Input from "@/ui/Input";
import Link from "next/link";
import { FormEvent } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

const RegisterPage = () => {
	const route = useRouter();

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

<<<<<<< HEAD
		const formData = new FormData(e.currentTarget);
		console.log(formData.get("email"));

		try {
			const res = await fetch("/api/auth/register", {
				method: "POST",
				headers: {
					"Content-type": "application/json",
				},
				body: JSON.stringify(Object.fromEntries(formData)),
			});

			if (res.ok) {
				route.push('/dashboard/login')
			}
		} catch (err) {
			console.log("bob");
		}
	};
	return (
		<main className="flex h-full items-center justify-center">
			<form onSubmit={handleSubmit} className="flex flex-col gap-2">
				<label>
					<p>Name</p>
					<Input placeholder="John Doe" name="name" />
				</label>
				<label>
					<p>Username*</p>
					<Input
						className="peer"
						placeholder="John1Do3"
						name="username"
						required
					/>
					<p className="hidden font-light text-red-300 peer-invalid:block">
						Your username should contain at least 2 symbols
					</p>
				</label>
				<label>
					<p>Email*</p>
					<Input
						className="peer"
						placeholder="JohnDoe1994@example.com"
						name="email"
						type="email"
						required
					/>
					<p className="hidden font-light text-red-300 peer-invalid:block">
						Please provide valid email address
					</p>
				</label>
				<label>
					<p>Password*</p>
					<Input
						className="peer"
						placeholder="MpdkC4VVaU"
						name="password"
						type="password"
						required
					/>
					<p className="hidden font-light text-red-300 peer-invalid:block">
						Password should contain at least 6 symbols
					</p>
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
=======
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
>>>>>>> 02810fa6303adb6c00cc74c0bfe72b910a7222b9
};
export default RegisterPage;
