"use client";

import PreviewPost from "./components/PreviewPost";
import PostCreateForm from "./components/PostCreateForm";
import { ChangeEvent, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const CreatePost = () => {
	const session = useSession();
	const route = useRouter();

	const [title, setTitle] = useState<string>("");
	const [postImg, setPostImg] = useState<string>("");
	const [postText, setPostText] = useState<string>("");
	const [inputTag, setInputTag] = useState<string>("");
	const [postTag, setPostTag] = useState<string[]>([]);

    if (session.status === "unauthenticated") {
		route.push("/dashboard/login");
	}

	if (session.status === "loading") {
		return <h1>Loading...</h1>;
	}

	const showPreviewTags = () => {
		if (inputTag.length === 0) return;
		setPostTag((prev) => [...prev, inputTag]);
		setInputTag("");
	};
	const handleChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
		setTitle(e.target.value);
	};
	const handleChangeImg = (e: ChangeEvent<HTMLInputElement>) => {
		setPostImg(e.target.value);
	};
	const handleChangeText = (e: ChangeEvent<HTMLTextAreaElement>) => {
		setPostText(e.target.value);
	};
	const handleTagsChange = (e: ChangeEvent<HTMLInputElement>) => {
		setInputTag(e.target.value);
	};
    const deleteTag = (tag: string) => {
        setPostTag(prevTags => prevTags.filter(item => item !== tag))
    }
	return (
		<section className="container">
			<h2 className="mb-6 text-3xl font-bold">Create post</h2>
			<div className="grid grid-cols-1 gap-16  lg:grid-cols-2 lg:gap-28">
				<PostCreateForm
					showPreviewTags={showPreviewTags}
					handleChangeTitle={handleChangeTitle}
					handleChangeImg={handleChangeImg}
					handleChangeText={handleChangeText}
					handleTagsChange={handleTagsChange}
					inputTag={inputTag}
					title={title}
					postText={postText}
					postImg={postImg}
				/>
				<PreviewPost
					postTitle={title}
					postImg={postImg}
					postText={postText}
					postTag={postTag}
                    deleteTag={deleteTag}
				/>
                
			</div>
		</section>
	);
};

export default CreatePost;
