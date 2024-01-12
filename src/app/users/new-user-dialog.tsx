"use client";
import React, { useState } from "react";
import { buttonVariants } from "@/components/ui/button";
import { Mail } from "lucide-react";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { NewUserForm } from "./new-user-form";
import { Separator } from "@/components/ui/separator";

function NewUserDialogue() {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<Dialog open={isOpen} onOpenChange={() => setIsOpen(!isOpen)}>
			<DialogTrigger
				className={cn(buttonVariants({ variant: "outline" }), " gap-2")}
			>
				<Mail />
				Invite new user
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Invite a new user</DialogTitle>
					<DialogDescription>
						Fill in the user details and send an e-mail invitation.
					</DialogDescription>
					<Separator />
					<NewUserForm onFormSubmit={() => setIsOpen(!isOpen)} />
				</DialogHeader>
			</DialogContent>
		</Dialog>
	);
}

export default NewUserDialogue;
