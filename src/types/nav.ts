import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

export interface NavItem {
	title: string;
	href?: string;
	disabled?: boolean;
	external?: boolean;
	label?: string;
	icon?: ReactNode;
}

export interface SidebarNavItem extends NavItem {}
