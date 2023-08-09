import React from 'react';

const CreatePost = () => {
    return (
        <section className="container mx-auto">
            <h2 className="text-3xl mb-6 font-bold">Create post</h2>
            <form
                className="flex flex-col gap-3 max-w-lg"
                action="/"
                method="post"
                encType="multipart/form-data"
            >
                <div className="">
                    <span className="text-lg block mb-3 font-semibold">Title</span>
                    <label className="" htmlFor="postTitle">
                        <input
                            className="w-full border py-2 px-4 rounded-lg text-base text-black m-[1px] outline-offset-4 outline-1 outline-white"
                            type="text"
                            id="postTitle"
                            name="postTitle"
                            placeholder="Enter post title"
                            maxLength={45}
                            required
                        />
                    </label>
                </div>
                <div className="">
                    <span className="text-lg block mb-3 font-semibold">Photo</span>
                    <div className="flex gap-3">
                        <label
                            className="relative block cursor-pointer px-3 py-6 w-full rounded-lg text-center bg-white text-black font-medium text-sm m-[1px] outline-offset-4 outline-1 outline-white before:content-['Select_Photo'] before:absolute before:inset-0 before:m-auto before:text-black before:h-fit hover:bg-slate-300 transition-colors"
                            htmlFor="postImg"
                        >
                            <input
                                className="hidden  file:bg-transparent file:border-none file:cursor-pointer"
                                type="file"
                                id="postImg"
                                name="postImg"
                                placeholder="Select photo"
                                accept="image/*"
                                required
                            />
                        </label>
                        {/* <button
                                className="p-3 rounded-lg text-center bg-white text-black font-medium text-sm m-[1px] outline-offset-4 outline-1 min-w-fit outline-white hover:bg-slate-300 transition-colors"
                                type="submit"
                            >
                                Upload photo
                            </button> */}
                    </div>
                </div>
                <label className="" htmlFor="postText">
                    <span className="text-lg block mb-3 font-semibold">Text</span>
                    <textarea
                        className="w-full min-h-[12.5rem] border py-2 px-4 rounded-lg text-base text-black m-[1px] outline-offset-4 outline-1 outline-white"
                        id="postText"
                        name="postText"
                        placeholder="Enter your text"
                        required
                    />
                </label>
                <div className="">
                    <span className="text-lg block mb-3 font-semibold">Tags</span>
                    <label className="flex gap-3" htmlFor="postText">
                        <input
                            className="w-full border py-2 px-4 rounded-lg text-base text-black m-[1px] outline-offset-4 outline-1 outline-white"
                            type="text"
                            id="postText"
                            name="postText"
                            placeholder="Eneter your tags"
                            maxLength={45}
                            required
                        />
                        <button
                            className="p-3 rounded-lg text-center bg-white text-black font-medium text-sm min-w-fit m-[1px] outline-offset-4 outline-1 outline-white hover:bg-slate-300 transition-colors"
                            type="submit"
                        >
                            Add tag
                        </button>
                    </label>
                </div>
                <button
                    className="p-3 rounded-lg text-center bg-white text-black font-medium text-sm m-[1px] outline-offset-4 outline-1 outline-white hover:bg-slate-300 transition-colors"
                    type="submit"
                >
                    Publish my post
                </button>
            </form>
        </section>
    );
};

export default CreatePost;
