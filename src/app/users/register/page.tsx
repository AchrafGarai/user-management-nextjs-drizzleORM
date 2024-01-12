import Banner from "@/components/ui/alert-banner";
import { Separator } from "@/components/ui/separator";
import { verifyJwt } from "@/lib/jwt";
import React from "react";
import { RegisterUserForm } from "./register-user";
import { db } from "@/db";
import { eq } from "drizzle-orm";
import { users } from "@/schema";
import { redirect } from "next/navigation";

// Page Type
type Props = {
	params: { slug: string };
	searchParams: { [key: string]: string | undefined };
};

async function Page({ searchParams }: Props) {
	// Get token from params
	const { token } = searchParams;
	if (!token) {
		return (
			<Banner
				title="Token is not valid"
				subTitle="make sure you are clicking the invitation link from your email"
			/>
		);
	}

	const payload = verifyJwt(token);

	if (!payload) {
		return (
			<Banner
				title="Token is not valid"
				subTitle="make sure you are clicking the invitation link from your email"
			/>
		);
	}
	const { email } = payload;

	// Check if user is already registered
	const user = await db.query.users.findFirst({
		where: eq(users.email, email),
	});

	if (user?.status !== "pending") {
		redirect("/");
	}

	return (
		<div>
			<h1 className=" text-2xl font-semibold mb-2">Welcome, {email}.</h1>
			<p className=" text-sm opacity-50  mb-4">
				Make sure to finish your account.
			</p>
			<Separator className=" my-8" />
			<RegisterUserForm email={email} />
		</div>
	);
}

export default Page;
