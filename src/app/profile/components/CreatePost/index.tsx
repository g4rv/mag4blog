'use client';

import Button from '@/ui/Button';
import Input from '@/ui/Input';
import React, { ChangeEvent, InputHTMLAttributes, useRef, useState } from 'react';

const labelStyles =
    'relative focus-within:before:block focus-within:before:absolute focus-within:before:-left-5 focus-within:before:top-[35%] focus-within:before:w-2 focus-within:before:h-2 focus-within:before:bg-white focus-within:before:rounded-full';

const CreatePost = () => {
    const [title, setTitle] = useState<string>('');
    const [postText, setPostText] = useState<string>('');
    const [inputTag, setInputTag] = useState<string>('');
    const [postTag, setPostTag] = useState<string[]>([]);

    const showPreviewTags = () => {
        if(inputTag.length === 0) return
        setPostTag((prev) => [...prev, inputTag]);
        setInputTag('')
    };
    const handleTagsChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputTag(e.target.value);
    };
    const showPreviewTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    };
    const showPreviewText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setPostText(e.target.value);
    };

    return (
        <section className="container mx-auto">
            <h2 className="text-3xl mb-6 font-bold">Create post</h2>
            {/* <span className="text-pink-600 block mb-2">* required</span> */}
            <div className="grid grid-cols-2 gap-28">
                <form className="flex w-full flex-col gap-3 max-w-lg">
                    <div className="group relative">
                        <p className="text-lg mb-3 font-semibold">
                            Title <span className="text-pink-600 ">*</span>
                        </p>
                        <label className={labelStyles} htmlFor="postTitle">
                            <Input
                                id="postTitle"
                                name="postTitle"
                                placeholder="Enter post title"
                                maxLength={70}
                                minLength={3}
                                value={title}
                                onChange={showPreviewTitle}
                                required
                            />
                            <p className="hidden peer-invalid:block peer-focus:hidden mt-1 text-pink-600 font-medium text-sm">
                                Provide at least 3 letters
                            </p>
                        </label>
                    </div>
                    <div className="relative">
                        <p className="text-lg mb-3 font-semibold">
                            Photo <span className="text-pink-600">*</span>
                        </p>
                        <div className="flex gap-3">
                            {/* <label
                            className="relative block cursor-pointer px-3 py-6 w-full rounded-lg text-center bg-white text-black font-medium text-sm outline-transparent active:border-blue-800 before:content-['Select_Photo'] before:absolute before:inset-0 before:m-auto before:text-black before:h-fit hover:bg-slate-300 transition-colors "
                            htmlFor="postImg"
                        >
                            <Input
                                className="hidden file:bg-transparent file:border-none file:cursor-pointer valid:border-red-500 peer"
                                type="file"
                                id="postImg"
                                name="postImg"
                                placeholder="Select photo"
                                accept="image/*"
                                required
                            />
                        </label> */}
                            <label htmlFor={labelStyles}>
                                <Input
                                    id="postImg"
                                    name="postImg"
                                    placeholder="Paste image url"
                                    required
                                />
                            </label>
                            <p className="hidden peer-invalid:block mt-1 text-pink-600 font-medium text-sm">
                                Provide at least 10 letters
                            </p>
                        </div>
                    </div>
                    <label className={labelStyles} htmlFor="postText">
                        <p className="text-lg mb-3 font-semibold">
                            Text <span className="text-pink-600">*</span>
                        </p>
                        <textarea
                            className="w-full min-h-[12.5rem] outline-none border py-2 px-4 rounded-lg text-base text-black outline-transparent active:border-blue-800 valid:border-red-500 peer"
                            id="postText"
                            name="postText"
                            placeholder="Enter your text"
                            minLength={10}
                            onChange={showPreviewText}
                            value={postText}
                            required
                        />
                        <p className="hidden peer-invalid:block mt-1 text-pink-600 font-medium text-sm">
                            Provide at least 10 letters
                        </p>
                    </label>
                    <div className="relative">
                        <p className="text-lg mb-3 font-semibold">
                            Tags <span className="text-pink-600">*</span>
                        </p>
                        <div className="">
                            <label className={labelStyles} htmlFor="postTag">
                                <Input
                                    id="postTag"
                                    name="postTag"
                                    placeholder="Eneter your tags"
                                    maxLength={45}
                                    minLength={3}
                                    value={inputTag}
                                    onChange={handleTagsChange}
                                    required
                                />
                                <p className="invisible peer-invalid:visible mt-1 text-pink-600 font-medium text-sm">
                                    Provide at least 3 letters
                                </p>
                            </label>
                            <Button onClick={showPreviewTags} innerText="Add tag" />
                        </div>
                    </div>
                    <Button type="submit" innerText="Publish my post" />
                </form>
                <div className="">
                    <h2 className="mb-8 text-4xl font-bold">{title}</h2>
                    <p className="mb-8">{postText}</p>
                    <ul className='flex gap-4 '>
                        {postTag.map((tag, index) => (
                            <li className='bg-white text-black font-medium py-1 px-2.5 rounded-full text-sm' key={index}>{tag}</li>
                        ))}
                    </ul>

                </div>
            </div>
        </section>
    );
};

export default CreatePost;
