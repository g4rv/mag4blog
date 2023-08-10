import React from 'react';

const CreatePost = () => {
    return (
        <section className="container mx-auto">
            <h2 className="text-3xl mb-6 font-bold">Create post</h2>
            <span className="text-pink-600 block mb-2">* required</span>
            <form
                className="flex flex-col gap-3 max-w-lg"
                action="/"
                method="post"
                encType="multipart/form-data"
            >
                <div className="group relative">
                    <p className="text-lg mb-3 font-semibold">
                        Title <span className="text-pink-600 ">*</span>
                    </p>
                    <label
                        className="relative group-focus:before:block group-focus:before:absolute group-focus:before:-left-5 group-focus:before:top-[50%] group-focus:before:w-2 group-focus:before:h-2 group-focus:before:bg-white group-focus:before:rounded-full"
                        htmlFor="postTitle"
                    >
                        <input
                            className="w-full border-2 py-2 px-4 rounded-lg text-base text-black outline-none peer"
                            type="text"
                            id="postTitle"
                            name="postTitle"
                            placeholder="Enter post title"
                            maxLength={45}
                            minLength={3}
                            required
                        />
                        <p className="hidden peer-invalid:block mt-1 text-pink-600 font-medium text-sm">
                            Provide at least 3 letters
                        </p>
                    </label>
                </div>
                <div className="relative">
                    <p className="text-lg mb-3 font-semibold">
                        Photo <span className="text-pink-600">*</span>
                    </p>
                    <div className="flex gap-3">
                        <label
                            className="relative block cursor-pointer px-3 py-6 w-full rounded-lg text-center bg-white text-black font-medium text-sm outline-transparent active:border-blue-800 before:content-['Select_Photo'] before:absolute before:inset-0 before:m-auto before:text-black before:h-fit hover:bg-slate-300 transition-colors "
                            htmlFor="postImg"
                        >
                            <input
                                className="hidden file:bg-transparent file:border-none file:cursor-pointer valid:border-red-500 peer"
                                type="file"
                                id="postImg"
                                name="postImg"
                                placeholder="Select photo"
                                accept="image/*"
                                required
                            />
                        </label>
                        {/* <p className="invisible peer-invalid:visible text-pink-600 font-medium text-sm">
                                Provide a photo
                            </p> */}
                    </div>
                </div>
                <label className="" htmlFor="postText">
                    <p className="text-lg mb-3 font-semibold">
                        Text <span className="text-pink-600">*</span>
                    </p>
                    <textarea
                        className="w-full min-h-[12.5rem] border py-2 px-4 rounded-lg text-base text-black outline-transparent active:border-blue-800 valid:border-red-500 peer"
                        id="postText"
                        name="postText"
                        placeholder="Enter your text"
                        required
                        minLength={10}
                    />
                    <p className="hidden peer-invalid:block mt-1 text-pink-600 font-medium text-sm">
                        Provide at least 10 letters
                    </p>
                </label>
                <div className="relative">
                    <p className="text-lg mb-3 font-semibold">
                        Tags <span className="text-pink-600">*</span>
                    </p>
                    <label className="flex gap-3" htmlFor="postText">
                        <input
                            className="w-full border py-2 px-4 rounded-lg text-base text-black outline-transparent active:border-blue-800 valid:border-red-500 peer"
                            type="text"
                            id="postText"
                            name="postText"
                            placeholder="Eneter your tags"
                            maxLength={45}
                            minLength={3}
                            required
                        />
                        <button
                            className="p-3 rounded-lg text-center bg-white text-black font-medium text-sm min-w-fit outline-transparent active:border-blue-800 hover:bg-slate-300 transition-colors"
                            type="submit"
                        >
                            Add tag
                        </button>
                        <p className="invisible peer-invalid:visible mt-1 text-pink-600 font-medium text-sm">
                            Provide at least 3 letters
                        </p>
                    </label>
                </div>
                <button
                    className="p-3 rounded-lg text-center bg-white text-black font-medium text-sm outline-transparent active:border-blue-800 hover:bg-slate-300 transition-colors"
                    type="submit"
                >
                    Publish my post
                </button>
            </form>
        </section>
    );
};

export default CreatePost;
