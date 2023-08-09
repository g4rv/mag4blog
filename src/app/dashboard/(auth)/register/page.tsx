import Link from "next/link";

const RegisterPage = () => {
	return (
		<main className="h-full flex items-center justify-center">
			<form className="flex flex-col items-center gap-4">
				<label className="flex flex-col gap-2">
					<p>username</p>
					<input type="email" />
				</label>
				<label className="flex flex-col gap-2">
					<p>email</p>
					<input type="email" />
				</label>
				<label className="flex flex-col gap-2">
					<p>password</p>
					<input type="password" />
				</label>
                <br />
                Already have a profile? <Link href='/dashboard/login'>login</Link>
                <br />
				<button type="submit">Log in</button>
			</form>
		</main>
	);
};
export default RegisterPage;
