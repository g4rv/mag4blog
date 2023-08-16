import Image from 'next/image';
import React, { FC } from 'react';

type PreviewPostProps = {
    postTitle: string;
    postImg: string;
    postText: string;
    postTag: string[];
};

const PreviewPost: FC<PreviewPostProps> = (props) => {
    return (
        <div>
            <h2 className="mb-8 text-4xl font-bold">{props.postTitle}</h2>
            <Image src={props.postImg} width={1000} height={500} alt={props.postTitle} />
            <p className="mb-8">{props.postText}</p>
            <ul className="flex flex-wrap gap-4">
                {props.postTag.map((tag, index) => (
                    <li
                        className="bg-white text-black font-medium py-1 px-2.5 rounded-full text-sm"
                        key={index}
                    >
                        {tag}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PreviewPost;
