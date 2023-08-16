import { NextResponse } from 'next/server';
import connect from '@/utils/db';
import Post from '@/models/Post';

type Post = {
	title: string;
	text: string;
	imgURL?: string;
};

type Params = {
	params: {
		id: string;
	};
};

export const DELETE = async (req: Request, { params }: Params) => {
	const id = params.id;

	try {
		await connect();
		await Post.findByIdAndDelete(id);
		return new NextResponse('Post has been deleted', { status: 200 });
	} catch (err) {
		return new NextResponse(`Something went wrong: ${err}`, {
			status: 500,
		});
	}
};

export const GET = async (req: Request, { params }: Params) => {
	const id = params.id;

	try {
		await connect();
		const post = await Post.findById(id);
		return new NextResponse(JSON.stringify(post), { status: 200 });
	} catch (err) {
		return new NextResponse(
			'Post with such id is not found, try enother id!',
			{ status: 500 }
		);
	}
};
