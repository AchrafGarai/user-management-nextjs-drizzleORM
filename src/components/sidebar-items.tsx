"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { SidebarNavItem } from "@/types/nav";
import { User, Mail, Settings } from "lucide-react";

type SidebarNavElementProps = {
	item: SidebarNavItem;
	pathname: string | null;
};

export function SidebarItems() {
	const items: SidebarNavItem[] = [
		{
			title: "Users",
			href: "/",
			icon: <User />,
		},
		{
			title: "Settings",
			href: "/settings",
			icon: <Settings />,
		},
		{
			title: "Invitations",
			href: "/invitations",
			icon: <Mail />,
		},
	];
	const pathname = usePathname();
	return items.map((item) => (
		<SidebarNavElement item={item} pathname={pathname} key={item.href} />
	));
}

export function SidebarNavElement({ item, pathname }: SidebarNavElementProps) {
	const isActive = pathname === item.href;
	return (
		<Link
			href={item.href || ""}
			className={cn(
				`p-2 rounded-md px-3 text-primary-foreground flex gap-2 items-center  ${
					isActive ? "bg-primary/90 " : " text-secondary-foreground "
				}`,
			)}
		>
			{item.icon}
			<p className="text-sm font-semibold">{item.title}</p>
		</Link>
	);
}
