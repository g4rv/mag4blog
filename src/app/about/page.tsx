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
                    <p className="">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi vel dolore voluptatum officiis neque rem consequuntur aspernatur minima non omnis voluptatibus nam quasi, et eveniet saepe distinctio suscipit. Ipsum ipsa deserunt nisi vel accusamus expedita sint adipisci eos explicabo ducimus, animi vitae nulla, doloremque impedit laboriosam ea obcaecati laudantium. Obcaecati delectus commodi excepturi, odit voluptates nesciunt qui libero voluptate quo numquam mollitia odio officia eos voluptas est tenetur enim, exercitationem perspiciatis optio natus placeat doloribus? Eos magni eligendi natus placeat quasi, odit, illo odio atque praesentium id, saepe consequuntur nihil dolore aliquid iste. Est ipsa soluta eaque in voluptatibus eligendi ut ex maxime autem nemo tempore sequi corporis quam laboriosam excepturi totam, enim id itaque atque? Vel provident, quos vero perspiciatis, eos facilis placeat alias quas autem reprehenderit sequi dolores voluptatem, aut accusamus. Tenetur quo nisi, debitis, molestiae ducimus doloribus itaque distinctio asperiores ipsa autem perspiciatis deleniti nobis fugiat velit atque eum mollitia officiis, commodi sunt recusandae vel cupiditate. Ducimus in nostrum beatae, numquam velit fugiat esse? Dolore obcaecati autem sed similique tempore possimus voluptatum in nihil ducimus quidem nisi, perspiciatis eum sapiente velit nostrum praesentium esse? Possimus porro doloremque vitae nobis perspiciatis autem deleniti, molestiae aliquam et blanditiis consectetur?
                    </p>
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
                        <li className="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, dolorum.</li>
                        <li className="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, dolorum.</li>
                        <li className="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, dolorum.</li>
                        <li className="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, dolorum.</li>
                    </ul>
                </div>
                <div className="mb-8">
                    <h2 className="mb-3 text-2xl font-semibold">Education:</h2>
                    <ul className="list-disc pl-7">
                        <li className="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, dolorum.</li>
                        <li className="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, dolorum.</li>
                    </ul>
                </div>
            </section>
        </main>
    );
};

export default About;
