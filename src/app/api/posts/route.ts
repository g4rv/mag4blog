import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Post from "@/models/Post";
import { FilterQuery } from "mongoose";
import { use } from "react";

type Post = {
    title: string;
    text: string;
    imgURL?: string;
}

export const POST = async (req: Request) => {
    const body = await req.json()

    const newPost = new Post(body)    

	try {
		await connect();

		await newPost.save()

		return new NextResponse('Post has been created', { status: 201 });
	} catch (err) {
		return new NextResponse(`${err}`, { status: 500 });
	}
}

export const GET = async (req: Request) => {
	const url = new URL(req.url);

	const username = url.searchParams.get('username');
    console.log("username");
    

	try {
		await connect();
        let query: FilterQuery<Post> = {}
        if(username) {
            query.username = username
        }
		const posts = await Post.find(query);
		return new NextResponse(JSON.stringify(posts), { status: 200 });
	} catch (err) {
		return new NextResponse('DB error', { status: 500 });
	}
};