'use client'
import Input from '@/ui/Input';
import Link from 'next/link';
import { FormEvent } from 'react';



const RegisterPage = () => {
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    
        const formData = new FormData(e.currentTarget)
        
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
    }
	return (
		<main className="h-full flex items-center justify-center">
			<form className="flex flex-col items-center gap-4" onSubmit={handleSubmit}>
				<label className="flex flex-col gap-2">
					<p>Name</p>
					<Input name="name" />
					<p className="hidden peer-invalid:block text-pink-600 font-medium text-sm">
						Provide at least 2 characters
					</p>
				</label>
				<label className="flex flex-col gap-2">
					<p>Username*</p>
					<Input name="username" className='perr' required/>
					<p className="text-pink-600 font-medium text-sm peer-empty:hidden peer-invalid:block peer-focus:hidden">
						Provide at least 2 characters
					</p>
				</label>
				<label className="flex flex-col gap-2">
					<p>Email*</p>
					<Input name="email" required/>
					<p className="hidden peer-invalid:block text-pink-600 font-medium text-sm">
						Provide at least 2 characters
					</p>
				</label>
				<label className="flex flex-col gap-2">
					<p>Password*</p>
					<Input name="password" required/>
					<p className="hidden peer-invalid:block text-pink-600 font-medium text-sm">
						Provide at least 6 characters
					</p>
				</label>
				<p>
					Already have a profile?
					<Link href="/dashboard/login" className="ml-4 underline">
						Login
					</Link>
				</p>
				<button
					className="p-3 rounded-lg text-center bg-white text-black font-medium text-sm min-w-fit m-[1px] outline-offset-4 outline-1 outline-white hover:bg-slate-300 transition-colors"
					type="submit"
				>
					Register
				</button>
			</form>
		</main>
	);
};
export default RegisterPage;
