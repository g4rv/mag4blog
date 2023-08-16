import Button from '@/ui/Button';
import Input from '@/ui/Input';
import React, { ChangeEvent, FC} from 'react';

const labelStyles =
    'w-full relative focus-within:before:block focus-within:before:absolute before:-left-5 before:top-[35%] before:w-2 before:h-2 before:bg-white before:rounded-full';

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
        return !props.postImg.startsWith('https://') || !props.postImg.startsWith('http://');
    };
    return (
        <form className="flex w-full flex-col gap-3 max-w-lg">
            <div className="relative">
                <p className="text-lg mb-3 font-semibold">
                    Title<span className="text-pink-600 ">*</span>
                </p>
                <label className={labelStyles} htmlFor="postTitle">
                    <Input
                        id="postTitle"
                        name="postTitle"
                        placeholder="Enter post title"
                        maxLength={70}
                        minLength={3}
                        value={props.title}
                        onChange={props.handleChangeTitle}
                        required
                    />
                    <p className="hidden peer-invalid:block peer-focus:hidden mt-1 text-pink-600 font-medium text-sm">
                        Provide at least 3 letters
                    </p>
                </label>
            </div>
            <div className="relative">
                <p className="text-lg mb-3 font-semibold">
                    Photo<span className="text-pink-600">*</span>
                </p>
                <div className="flex gap-3">
                    <label htmlFor="postImg" className={labelStyles}>
                        <Input
                            id="postImg"
                            name="postImg"
                            placeholder="Paste image url"
                            onChange={props.handleChangeImg}
                            value={validateImageUrl() ? props.postImg : ''}
                            required
                        />
                        <p className="hidden peer-invalid:block peer-focus:hidden mt-1 text-pink-600 font-medium text-sm">
                            Provide at least 10 letters
                        </p>
                    </label>
                </div>
            </div>
            <div className="relative">
                <p className="text-lg mb-3 font-semibold">
                    Text<span className="text-pink-600">*</span>
                </p>
                <label className={labelStyles} htmlFor="postText">
                    <textarea
                        className="w-full min-h-[12.5rem] outline-none border py-2 px-4 rounded-lg text-base text-black outline-transparent active:border-blue-800 valid:border-red-500 peer"
                        id="postText"
                        name="postText"
                        placeholder="Enter your text"
                        minLength={10}
                        onChange={props.handleChangeText}
                        value={props.postText}
                        required
                    />
                    <p className="hidden peer-invalid:block peer-focus:hidden mt-1 text-pink-600 font-medium text-sm">
                        Provide at least 10 letters
                    </p>
                </label>
            </div>
            <div className="relative">
                <p className="text-lg mb-3 font-semibold">
                    Tags<span className="text-pink-600">*</span>
                </p>
                <div className="">
                    <label className={labelStyles} htmlFor="postTag">
                        <Input
                            id="postTag"
                            name="postTag"
                            placeholder="Eneter your tags"
                            maxLength={45}
                            minLength={3}
                            value={props.inputTag}
                            onChange={props.handleTagsChange}
                            required
                        />
                        <p className="hidden peer-invalid:block peer-focus:hidden mt-1 text-pink-600 font-medium text-sm">
                            Provide at least 3 letters
                        </p>
                    </label>
                    <Button onClick={props.showPreviewTags} innerText="Add tag" />
                </div>
            </div>
            <Button type="submit" innerText="Publish my post" />
        </form>
    );
};

export default PostCreateForm;
