import Post from "@/components/Post";

const getPosts = async () => {
	try {
		const response = await fetch("http://localhost:3000/api/posts", {
			cache: "no-store",
		});

		if (!response.ok) {
			throw new Error("Failed fetching data");
		}

		return response.json();
	} catch (error) {
		throw new Error(`ERROR 'getData()' ${error}`);
	}
};
const UserPosts = async () => {
	const posts: {
		title: string;
		date: string;
		imgUrl: string;
		tags: string[];
		text: string;
	}[] = await getPosts();

	return (
		<ul className="w-full">
			{posts.map((post) => (
				<li key={post.text}>
					<Post
						title={post.title}
						date="123"
						imgUrl=""
						tags={post.tags}
						text={post.text}
					/>
				</li>
			))}
		</ul>
	);
};
export default UserPosts;
