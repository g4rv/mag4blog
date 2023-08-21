import Button from "@/ui/Button";
import Input from "@/ui/Input";
import React, { ChangeEvent, FC } from "react";

type PostCreateFormProps = {
	handleChangeTitle: (e: ChangeEvent<HTMLInputElement>) => void;
	handleChangeImg: (e: ChangeEvent<HTMLInputElement>) => void;
	handleChangeText: (e: ChangeEvent<HTMLTextAreaElement>) => void;
	handleTagsChange: (e: ChangeEvent<HTMLInputElement>) => void;
	showPreviewTags: () => void;
	title: string;
	postImg: string;
	postText: string;
	inputTag: string;
};

const PostCreateForm: FC<PostCreateFormProps> = (props) => {
	const validateImageUrl = () => {
		return (
			!props.postImg.startsWith("https://") ||
			!props.postImg.startsWith("http://")
		);
	};
	return (
		<form className="flex w-full max-w-lg flex-col gap-3">
			<div className="relative">
				<p className="mb-3 text-lg font-semibold">
					Title<span>*</span>
				</p>
				<label className="w-full" htmlFor="postTitle">
					<Input
						className="peer"
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
						<Input
							className="peer"
							id="postImg"
							name="postImg"
							placeholder="Paste image url"
							onChange={props.handleChangeImg}
							value={validateImageUrl() ? props.postImg : ""}
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
						className="peer min-h-[12.5rem] w-full rounded-lg border border-primary bg-white px-4 py-2 text-base text-primary outline-none outline-transparent  duration-200 focus:bg-primary focus:text-white dark:border-white dark:bg-primary dark:text-white dark:focus:bg-white dark:focus:text-primary"
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
					<label className="w-full" htmlFor="postTag">
						<Input
							className="mb-4 peer"
							id="postTag"
							name="postTag"
							placeholder="Enter your tags"
							maxLength={45}
							minLength={3}
							value={props.inputTag}
							onChange={props.handleTagsChange}
							required
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
