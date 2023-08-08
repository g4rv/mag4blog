import Title from '@/ui/Title';
import { Metadata } from 'next';
import Image from 'next/image';
import React from 'react';

export const metadata: Metadata = {
    title: 'About us',
    description: 'About us',
};

const About = () => {
    return (
        <main className="container mx-auto">
            <Title titleText="About Us" />
            <section>
                <Image
                    className="mb-8 w-full max-h-[34.75rem] object-cover"
                    src="/images/about.jpg"
                    width={1216}
                    height={556}
                    alt="About us"
                />
                <div className="mb-8">
                    <h2 className="mb-3 text-2xl font-semibold">About Us</h2>
                    <p className="">123</p>
                </div>
                <div className="mb-8">
                    <h2 className="mb-3 text-2xl font-semibold">Skills:</h2>
                    <ul className="list-disc pl-7">
                        <li className="">
                            Extensive experience in UI design, with a strong portfolio of completed
                            projects
                        </li>
                        <li className="">
                            Proficiency in design tools such as Adobe Creative Suite and Sketch
                        </li>
                        <li className="">
                            Excellent visual design skills, with a strong understanding of layout,
                            color theory, and typography
                        </li>
                        <li className="">
                            Ability to create wireframes and prototypes to communicate design
                            concepts
                        </li>
                        <li className="">
                            Strong communication and collaboration skills, with the ability to work
                            effectively with cross-functional teams
                        </li>
                        <li className="">
                            Experience conducting user research and gathering insights to inform
                            design decisions
                        </li>
                        <li className="">Proficiency in HTML, CSS, and JavaScript</li>
                    </ul>
                </div>
                <div className="mb-8">
                    <h2 className="mb-3 text-2xl font-semibold">Experience:</h2>
                    <ul className="list-disc pl-7">
                        <li className="">1</li>
                        <li className="">2</li>
                        <li className="">1</li>
                        <li className="">2</li>
                    </ul>
                </div>
                <div className="mb-8">
                    <h2 className="mb-3 text-base font-semibold">Education:</h2>
                    <ul className="list-disc pl-7">
                        <li className="">1</li>
                        <li className="">2</li>
                    </ul>
                </div>
            </section>
        </main>
    );
};

export default About;
