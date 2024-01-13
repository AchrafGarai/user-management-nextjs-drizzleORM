import { resend } from "@/lib/resend";
import { EmailTemplate } from "@/components/Email";
import { InvitationEmail } from "@/email";

export async function POST() {
	try {
		const data = await resend.emails.send({
			from: "Acme <onboarding@resend.dev>",
			to: ["a.garai@instadeep.com"],
			subject: "You have been invited to join a workspace (from action)",
			text: "",
			react: InvitationEmail({
				user: "a.garai@instadeep.com",
				invitation: "a.garai@instadeep.com",
				invitedByEmail: "achrafgarai",
			}),
		});
		return Response.json(data);
	} catch (error) {
		return Response.json({ error });
	}
}
