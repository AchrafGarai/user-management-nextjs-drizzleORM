import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { Badge, BadgeProps } from "./badge";

const statusVariants = cva("capitalize", {
	variants: {
		variant: {
			pending:
				"bg-orange-500 bg-opacity-10 text-orange-500 hover:bg-orange-200",
			active:
				"bg-emerald-500 bg-opacity-10 text-emerald-500 hover:bg-emerald-200",
			cancelled: "bg-red-500 bg-opacity-10 text-red-500 hover:bg-red-200",
		},
	},
	defaultVariants: {
		variant: "active",
	},
});

export interface StatusBadgeProps
	extends React.HTMLAttributes<BadgeProps>,
		VariantProps<typeof statusVariants> {}

export function StatusBadge({
	className,
	variant,
	children,
	...props
}: StatusBadgeProps) {
	return <Badge className={cn(statusVariants({ variant }))}>{children}</Badge>;
}
