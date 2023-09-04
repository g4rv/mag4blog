import Button from "@/ui/Button";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, FC, FormEvent } from "react";

type PostCreateFormProps = {
	handleChangeTitle: (e: ChangeEvent<HTMLInputElement>) => void;
	handleChangeImg: (e: ChangeEvent<HTMLInputElement>) => void;
	handleChangeText: (e: ChangeEvent<HTMLTextAreaElement>) => void;
	handleTagsChange: (e: ChangeEvent<HTMLInputElement>) => void;
	showPreviewTags: () => void;
    onSubmit: () => void;
	title: string;
	postImg: string;
	postText: string;
	inputTag: string;
};

const PostCreateForm: FC<PostCreateFormProps> = (props) => {
    const router = useRouter()
    
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        try {
            props.onSubmit()
        } catch(err) {
            throw new Error(`${err}`)
        }
        router.push('/dashboard/profile')
    }

	return (
		<form className="flex w-full max-w-lg flex-col gap-3" onSubmit={handleSubmit}>
			<div className="relative">
				<p className="mb-3 text-lg font-semibold">
					Title<span>*</span>
				</p>
				<label className="w-full" htmlFor="postTitle">
					<input
						className="input"
						id="postTitle"
						name="postTitle"
						placeholder="Enter post title"
						maxLength={70}
						minLength={3}
						value={props.title}
						onChange={props.handleChangeTitle}
						required
					/>
					<p className="mt-1 hidden text-sm font-medium text-pink-600 peer-invalid:block peer-focus:hidden">
						Provide at least 3 letters
					</p>
				</label>
			</div>
			<div className="relative">
				<p className="mb-3 text-lg font-semibold">
					Photo<span>*</span>
				</p>
				<div className="flex gap-3">
					<label htmlFor="postImg" className="peer w-full">
						<input
							className="input"
							id="postImg"
							name="postImg"
							placeholder="Paste image url"
							onChange={props.handleChangeImg}
							value={props.postImg}
							required
						/>
						<p className="mt-1 hidden text-sm font-medium text-pink-600 peer-invalid:block peer-focus:hidden">
							Provide at least 10 letters
						</p>
					</label>
				</div>
			</div>
			<div className="relative">
				<p className="mb-3 text-lg font-semibold">
					Text<span>*</span>
				</p>
				<label className="w-full" htmlFor="postText">
					<textarea
						className="input"
						id="postText"
						name="postText"
						placeholder="Enter your text"
						minLength={10}
						onChange={props.handleChangeText}
						value={props.postText}
						required
					/>
					<p className="mt-1 hidden text-sm font-medium text-pink-600 peer-invalid:block peer-focus:hidden">
						Provide at least 10 letters
					</p>
				</label>
			</div>
			<div className="relative">
				<p className="mb-3 text-lg font-semibold">
					Tags<span>*</span>
				</p>
				<div className="">
					<label className="w-full">
						<input
							className="input"
							placeholder="Enter your tags"
							value={props.inputTag}
							onChange={props.handleTagsChange}
						/>
						{/* <p className="mt-1 hidden text-sm font-medium text-pink-600 peer-invalid:block peer-focus:hidden">
							Provide at least 3 letters
						</p> */}
					</label>
					<Button onClick={props.showPreviewTags}>Add tag</Button>
				</div>
			</div>
			<Button type="submit">Publish my post</Button>
		</form>
	);
};

export default PostCreateForm;
