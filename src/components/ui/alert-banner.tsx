import React, { ReactNode } from "react";
type BannerProps = {
	title?: string;
	subTitle?: string;
	image?: ReactNode;
	children?: ReactNode;
};
function Banner({ title, subTitle, image, children }: BannerProps) {
	return (
		<div className="flex flex-col gap-2 items-center justify-center flex-grow min-h-80 border rounded-md">
			{image}
			<span className=" text-lg font-semibold ">{title}</span>
			<span className=" text-sm opacity-50">{subTitle}</span>
			{children}
		</div>
	);
}

export default Banner;
