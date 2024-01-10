import React from "react";
import { SidebarItems } from "./sidebar-items";
import { Separator } from "./ui/separator";
import { Github } from "lucide-react";

function SideNav() {
	return (
		<div className="p-4 flex flex-col gap-4 py-8 border-r flex-grow max-w-64">
			<SidebarItems />
			<Separator className="mt-auto " />
			<div className=" flex gap-2 text-sm items-center">
				<Github />
				Gode available on GitHub
			</div>
		</div>
	);
}

export default SideNav;
