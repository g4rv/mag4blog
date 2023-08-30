import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Post from "@/models/Post";
import { FilterQuery } from "mongoose";

type Post = {
    title: string,
	text: string,
	imgURL?: string,
    tags: {
        type: [String]
    },
    author: {
        name?: string,
        username: string,
        userId: string
    }
}

export const POST = async (req: Request) => {
    const body = await req.json()
    console.log(body);
    
    const newPost = new Post(body)   
    console.log(newPost);
     
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