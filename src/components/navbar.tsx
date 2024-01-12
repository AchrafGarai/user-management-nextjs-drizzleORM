import React from "react";
import { ModeToggle } from "./mode-trigger";
import Image from "next/image";
function Navbar() {
	return (
		<div className="p-4 px-8 border-b flex flex-row items-center">
			<div className="flex-grow w-full">
				<Image
					src={"/next.svg"}
					width={80}
					height={56}
					alt="Next"
					className="dark:invert"
				/>
			</div>
			<ModeToggle />
		</div>
	);
}

export default Navbar;
