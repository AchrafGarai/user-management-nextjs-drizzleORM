"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { inviteUser } from "../actions";
import { useFormStatus } from "react-dom";

const formSchema = z.object({
	email: z
		.string()
		.min(2, { message: "Email must be at least 2 characters" })
		.email({ message: "Must be a valid email address" }),
});

export function NewUserForm({ onFormSubmit }: { onFormSubmit: () => void }) {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: "",
		},
	});

	const { pending } = useFormStatus();

	const { isValid } = form.formState;

	return (
		<Form {...form}>
			<form
				//onSubmit={form.handleSubmit(onSubmit)}
				onSubmit={onFormSubmit}
				action={inviteUser}
				className="space-y-8"
			>
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel>E-mail Address</FormLabel>
							<FormControl>
								<Input placeholder="Your email address" {...field} />
							</FormControl>
							<FormDescription>
								An email invitation will be sent to the following address to
								complete the registration
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type="submit" disabled={!isValid || pending}>
					Submit
				</Button>
			</form>
		</Form>
	);
}
