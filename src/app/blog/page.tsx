import React from 'react';
import RecentPosts from './components/RecentPosts';
import AllPosts from './components/AllPosts';
import Title from '@/ui/Title';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Blog',
    description: 'All blogs',
};

const Blog = () => {
    return (
        <main className="container mx-auto">
            {/* <Title titleText="The Blog" /> */}
            <RecentPosts />
            {/* <AllPosts /> */}
        </main>
    );
};

export default Blog;
