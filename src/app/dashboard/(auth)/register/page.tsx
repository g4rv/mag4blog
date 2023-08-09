import Link from "next/link";

const RegisterPage = () => {
	return (
		<main className="h-full flex items-center justify-center">
			<form className="flex flex-col items-center gap-4">
				<label className="flex flex-col gap-2">
					<p>Username</p>
					<input className="w-full max-w-[16.25rem] border py-2 px-4 rounded-lg text-base text-black m-[1px] outline-offset-4 outline-1 outline-white" type="email" />
				</label>
				<label className="flex flex-col gap-2">
					<p>Email</p>
					<input className="w-full max-w-[16.25rem] border py-2 px-4 rounded-lg text-base text-black m-[1px] outline-offset-4 outline-1 outline-white" type="email" />
				</label>
				<label className="flex flex-col gap-2">
					<p>Password</p>
					<input className="w-full max-w-[16.25rem] border py-2 px-4 rounded-lg text-base text-black m-[1px] outline-offset-4 outline-1 outline-white" type="password" />
				</label>
                <br />
                Already have a profile? <Link className="p-3 rounded-lg text-center bg-white text-black font-medium text-sm min-w-fit m-[1px] outline-offset-4 outline-1 outline-white hover:bg-slate-300 transition-colors" href='/dashboard/login'>Login</Link>
                <br />
				<button className="p-3 rounded-lg text-center bg-white text-black font-medium text-sm min-w-fit m-[1px] outline-offset-4 outline-1 outline-white hover:bg-slate-300 transition-colors" type="submit">Log in</button>
			</form>
		</main>
	);
};
export default RegisterPage;
