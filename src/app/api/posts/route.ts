import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Post from "@/models/Post";

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