import React from 'react';
import CreatePost from './conponents/CreatePost';
import Title from '@/ui/Title';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Profile',
    description: 'User profile',
};

const Profile = () => {
    return (
        <main>
            <section className="container mx-auto">
                <Title titleText='Profile'/>
                <Image className='rounded-full' src='/' width={100} height={100} alt=''/>
                <span className=''>123</span>
                {/* <button className='p-3 rounded-lg text-center bg-red-600 text-white font-medium text-sm m-[1px] outline-offset-4 outline-1 min-w-fit outline-red-600ed hover:bg-red-400 transition-colors' type='button'>Log out</button> */}
                <div className="">
                    <h2>Recent post</h2>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                    <button></button>
                </div>
            </section>
            <CreatePost />
        </main>
    );
};

export default Profile;
