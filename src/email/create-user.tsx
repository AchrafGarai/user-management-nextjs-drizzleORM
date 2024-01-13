import React from "react";
import {
	Body,
	Button,
	Container,
	Column,
	Head,
	Heading,
	Hr,
	Html,
	Img,
	Link,
	Preview,
	Row,
	Section,
	Tailwind,
	Text,
} from "@react-email/components";

type Props = { user: string; invitation: string };

export function CreateEmail({ user, invitation }: Props) {
	return (
		<Html>
			<Head />
			<Preview>Welcoome to your new workspace 🚀</Preview>
			<Tailwind>
				<Body className="bg-white my-auto mx-auto font-sans">
					<Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] w-[465px]">
						<Section className="mt-[32px]">
							<Img
								src={
									"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/394px-Nextjs-logo.svg.png?20230404233503"
								}
								width="80"
								height="18"
								alt="Vercel"
								className="my-0 mx-auto"
							/>
						</Section>
						<Heading className="text-black text-[18px] font-semibold text-center p-0 my-[30px] mx-0">
							Welcome <strong>{user}</strong> 🎉
						</Heading>
						<Text className="text-black text-[14px] leading-[24px]">
							Hello {user},
						</Text>
						<Text className="text-black text-[14px] leading-[24px]">
							Your account has been set up successfully.{" "}
							<strong>{"congrats"}</strong>
						</Text>
						<Section className="text-center mt-[32px] mb-[32px]">
							<Button
								className="bg-[#000000] text-white text-[16px] rounded-md font-semibold no-underline text-center p-2"
								href={invitation}
							>
								Go you workspace
							</Button>
						</Section>
						<Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
						<Text className="text-[#666666] text-[12px] leading-[24px]">
							This invitation was intended for {user}
							<span className="text-black">{"username"} </span>.This invite was
							sent from <span className="text-black">{"inviteFromIp"}</span>{" "}
							located in{" "}
							<span className="text-black">{"inviteFromLocation"}</span>. If you
							were not expecting this invitation, you can ignore this email. If
							you are concerned about your account's safety, please reply to
							this email to get in touch with us.
						</Text>
					</Container>
				</Body>
			</Tailwind>
		</Html>
	);
}
