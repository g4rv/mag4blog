// "use client";
import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import { useSession, signOut, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Post, { PostProps } from "@/components/Post";
import UserPosts from "./components/userPosts";
import UserInfo from "./components/userInfo";

export const metadata: Metadata = {
	title: "Profile",
	description: "User profile",
};

const Profile = () => {
	return (
		<main>
			<section className="container grid grid-cols-[0.35fr_1fr] gap-8">
				<UserInfo />
				<UserPosts />
			</section>
		</main>
	);
};

export default Profile;
