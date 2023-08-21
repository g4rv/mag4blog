'use client';

import PreviewPost from '../PreviewPost';
import PostCreateForm from '../PostCreateForm';
import { ChangeEvent, useState } from 'react';

const CreatePost = () => {
    const [title, setTitle] = useState<string>('');
    const [postImg, setPostImg] = useState<string>('');
    const [postText, setPostText] = useState<string>('');
    const [inputTag, setInputTag] = useState<string>('');
    const [postTag, setPostTag] = useState<string[]>([]);

    const showPreviewTags = () => {
        if (inputTag.length === 0) return;
        setPostTag((prev) => [...prev, inputTag]);
        setInputTag('');
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
    return (
        <section className="container mx-auto">
            <h2 className="text-3xl mb-6 font-bold">Create post</h2>
            <div className="grid lg:grid-cols-2 grid-cols-1  lg:gap-28 gap-16">
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
                />
            </div>
        </section>
    );
};

export default CreatePost;
