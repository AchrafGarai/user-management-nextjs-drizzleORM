"use client";

import { User } from "@/schema";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import { ReactNode } from "react";
import TimeAgo from "react-timeago-i18n";
import { StatusBadge } from "@/components/ui/status";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const columns: ColumnDef<User>[] = [
	{
		accessorKey: "avatar",
		header: "Profile Picture",
		cell: ({ row }) => (
			<div className="flex gap-3 items-center">
				<Image
					src={row.original.avatar || ""}
					width={36}
					height={36}
					alt={""}
				/>
				<div>
					<span>{`${row.original.firstName} ${row.original.lastName}`}</span>
				</div>
			</div>
		),
	},
	{
		accessorKey: "email",
		header: "Email",
	},
	{
		accessorKey: "createdAt",
		header: "Date Joined",

		cell: (row) => {
			return <TimeAgo date={row.getValue() as string | Date} />;
		},
	},
	{
		accessorKey: "status",
		header: "Status",
		cell: (row) => {
			return (
				<StatusBadge
					variant={row.getValue() as "pending" | "cancelled" | "active"}
				>
					{row.getValue() as ReactNode}
				</StatusBadge>
			);
		},
	},
	{
		id: "actions",
		enableHiding: false,
		cell: ({ row }) => {
			const payment = row.original;

			return (
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="ghost" className="h-8 w-8 p-0">
							<span className="sr-only">Open menu</span>
							<MoreHorizontal className="h-4 w-4" />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="end">
						<DropdownMenuLabel>Actions</DropdownMenuLabel>
						<DropdownMenuSeparator />
						<DropdownMenuItem>Resend Invitation</DropdownMenuItem>
						<DropdownMenuItem className=" text-red-500">
							Delete User
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			);
		},
	},
];
