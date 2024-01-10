import React from "react";
import { ModeToggle } from "./mode-trigger";
function Navbar() {
	return (
		<div className="p-4 px-8 border-b flex flex-row items-center">
			<span className="flex-grow w-full">Logo </span>
			<ModeToggle />
		</div>
	);
}

export default Navbar;
