import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const RecentPosts = () => {
    return (
        <section className="">
            <h2 className="text-2xl mb-8">Recent blog posts</h2>
            <div className="grid gap-8 grid-cols-2 grid-rows-[repeat(2,200px)_1fr]">
                <article className="col-start-1 flex flex-col gap-8 col-end-2 row-span-2 group">
                    <div className="relative flex-1 overflow-hidden">
                        <Image
                            src="/images/about.jpg"
                            className="mb-8 object-cover group-hover:scale-110 transition-transform"
                            fill
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
                            <span className="bg-white font-medium py-1 px-2.5 rounded-full text-sm text-[#C11574]">
                                Presentation
                            </span>
                        </div>
                    </div>
                </article>
                <article className="col-start-2 group col-end-3 row-start-1 row-end-2 flex gap-6">
                    <div className="relative flex-1 overflow-hidden">
                        <Image
                            src="/images/about.jpg"
                            className="mb-8 object-cover group-hover:scale-110 transition-transform"
                            fill
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
                <article className="col-start-2 group col-end-3 row-start-2 row-end-3 flex gap-6">
                    <div className="relative flex-1 overflow-hidden">
                        <Image
                            src="/images/about.jpg"
                            className="mb-8 object-cover group-hover:scale-110 transition-transform"
                            fill
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
                            <span className="bg-white font-medium py-1 px-2.5 rounded-full text-sm text-[#C11574]">
                                Presentation
                            </span>
                        </div>
                    </div>
                </article>
                <article className="col-span-full group flex gap-8">
                    <div className="relative flex-1 overflow-hidden">
                        <Image
                            src="/images/about.jpg"
                            className="mb-8 object-cover group-hover:scale-110 transition-transform"
                            fill
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
                            <span className="bg-white font-medium py-1 px-2.5 rounded-full text-sm text-[#C11574]">
                                Presentation
                            </span>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    );
};

export default RecentPosts;
