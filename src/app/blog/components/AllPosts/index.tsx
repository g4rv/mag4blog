import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const AllPosts = () => {
    return (
        <section>
            <h2 className="text-2xl mb-8">All blog posts</h2>
            <div className="flex gap-8">
                <article className="flex flex-col">
                    <div className="relative  overflow-hidden">
                        <Image
                            src="/images/about.jpg"
                            className="mb-8 max-w-[24.0625rem] max-h-[15rem] object-cover group-hover:scale-110 transition-transform"
                            width={385}
                            height={200}
                            alt="UX review presentations"
                        />
                    </div>
                    <div className="flex-1">
                        <time dateTime="" className="block text-sm text-[#6941C6] mb-3">
                            Sunday , 1 Jan 2023
                        </time>
                        <h2 className="text-2xl font-semibold border-b border-transparent w-fit mb-3 hover:border-white transition-colors">
                            <Link href="/">UX review presentations</Link>
                        </h2>
                        <p className="mb-6 text-[#C0C5D0]">
                            How do you create compelling presentations that wow your colleagues and
                            impress your managers?
                        </p>
                        <div className="flex gap-2">
                            <span className="bg-white font-medium py-1 px-2.5 rounded-full text-sm text-[#6941C6]">
                                Design
                            </span>
                            <span className="bg-white font-medium py-1 px-2.5 rounded-full text-sm text-[#3538CD]">
                                Research
                            </span>
                        </div>
                    </div>
                </article>
                <article className="flex flex-col">
                    <div className="relative  overflow-hidden">
                        <Image
                            src="/images/about.jpg"
                            className="mb-8 max-w-[24.0625rem] max-h-[15rem] object-cover group-hover:scale-110 transition-transform"
                            width={385}
                            height={200}
                            alt="UX review presentations"
                        />
                    </div>
                    <div className="flex-1">
                        <time dateTime="" className="block text-sm text-[#6941C6] mb-3">
                            Sunday , 1 Jan 2023
                        </time>
                        <h2 className="text-2xl font-semibold border-b border-transparent w-fit mb-3 hover:border-white transition-colors">
                            <Link href="/">UX review presentations</Link>
                        </h2>
                        <p className="mb-6 text-[#C0C5D0]">
                            How do you create compelling presentations that wow your colleagues and
                            impress your managers?
                        </p>
                        <div className="flex gap-2">
                            <span className="bg-white font-medium py-1 px-2.5 rounded-full text-sm text-[#6941C6]">
                                Design
                            </span>
                            <span className="bg-white font-medium py-1 px-2.5 rounded-full text-sm text-[#3538CD]">
                                Research
                            </span>
                        </div>
                    </div>
                </article>
                <article className="flex flex-col">
                    <div className="relative  overflow-hidden">
                        <Image
                            src="/images/about.jpg"
                            className="mb-8 max-w-[24.0625rem] max-h-[15rem] object-cover group-hover:scale-110 transition-transform"
                            width={385}
                            height={200}
                            alt="UX review presentations"
                        />
                    </div>
                    <div className="flex-1">
                        <time dateTime="" className="block text-sm text-[#6941C6] mb-3">
                            Sunday , 1 Jan 2023
                        </time>
                        <h2 className="text-2xl font-semibold border-b border-transparent w-fit mb-3 hover:border-white transition-colors">
                            <Link href="/">UX review presentations</Link>
                        </h2>
                        <p className="mb-6 text-[#C0C5D0]">
                            How do you create compelling presentations that wow your colleagues and
                            impress your managers?
                        </p>
                        <div className="flex gap-2">
                            <span className="bg-white font-medium py-1 px-2.5 rounded-full text-sm text-[#6941C6]">
                                Design
                            </span>
                            <span className="bg-white font-medium py-1 px-2.5 rounded-full text-sm text-[#3538CD]">
                                Research
                            </span>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    );
};

export default AllPosts;
