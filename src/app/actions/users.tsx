"use server";

import { db } from "@/db";
import { resend } from "@/lib/resend";
import { users } from "@/schema";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";
import { z } from "zod";
import { InvitationEmail } from "@/email";
import { signJwt } from "@/lib/jwt";
import { CreateEmail } from "@/email/create-user";

const inviteUserSchema = z.object({
	email: z.string({
		invalid_type_error: "Invalid Email",
	}),
});

const createUserSchema = z.object({
	firstName: z.string().min(2),
	lastName: z.string().min(2),
	email: z.string({
		invalid_type_error: "Invalid Email",
	}),
});

export async function inviteUser(formData: FormData) {
	const validatedFields = inviteUserSchema.safeParse({
		email: formData.get("email"),
	});

	// Return early if the form data is invalid
	if (!validatedFields.success) {
		return {
			errors: validatedFields.error.flatten().fieldErrors,
		};
	}
	const { data } = validatedFields;

	// Sign jwt
	const { token } = signJwt(data.email);
	console.log(token);
	const invitationLink = `https://localhost:3000/users/register?token=${token}`;

	// Send email invitation to users
	try {
		await resend.emails.send({
			from: "Acme <onboarding@resend.dev>",
			to: [data.email],
			subject: "You have been invited to join a workspace (from action)",
			text: "",
			react: InvitationEmail({
				user: data.email,
				invitation: invitationLink,
				invitedByEmail: "achrafgarai",
			}),
		});

		// Mutate data
		await db
			.insert(users)
			.values({
				firstName: "",
				lastName: "",
				email: data.email,
			})
			.onConflictDoNothing();
	} catch (error) {
		console.log(error);
	}
}

export async function createUser(formData: FormData) {
	const validatedFields = createUserSchema.safeParse({
		email: formData.get("email"),
		firstName: formData.get("firstName"),
		lastName: formData.get("lastName"),
	});

	// Return early if the form data is invalid
	if (!validatedFields.success) {
		return {
			errors: validatedFields.error.flatten().fieldErrors,
		};
	}
	const { data } = validatedFields;

	// Mutate data
	await db
		.update(users)
		.set({ ...data, status: "active" })
		.where(eq(users.email, data.email));

	await resend.emails.send({
		from: "Acme <onboarding@resend.dev>",
		to: [data.email],
		subject: "You have successfully set up your account",
		text: "",
		react: CreateEmail({
			user: data.email,
			invitation: "",
		}),
	});
	redirect("/");
}
