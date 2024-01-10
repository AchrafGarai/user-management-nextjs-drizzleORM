"use server";

import { resend } from "@/lib/resend";
import { redirect } from "next/navigation";
import { z } from "zod";

const schema = z.object({
	email: z.string({
		invalid_type_error: "Invalid Email",
	}),
});

export default async function createUser(formData: FormData) {
	const validatedFields = schema.safeParse({
		email: formData.get("email"),
	});

	// Return early if the form data is invalid
	if (!validatedFields.success) {
		return {
			errors: validatedFields.error.flatten().fieldErrors,
		};
	}
	const { data } = validatedFields;

	// Send email invitation to users
	resend.emails.send({
		from: "onboarding@resend.dev",
		to: data.email,
		subject: "You have been invited to join a workplace",
		html: "<p>Congrats on sending your <strong>first email</strong>!</p>",
	});

	// Mutate data
}
