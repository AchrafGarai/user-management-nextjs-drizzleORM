import { verifyJwt } from "@/lib/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
	const searchParams = request.nextUrl.searchParams;
	const token = searchParams.get("token");
	if (token === null) {
		return NextResponse.json({ error: "invalid token" });
	}
	try {
		const { email } = verifyJwt(token);
	} catch (error) {
		return NextResponse.json({ error: "invalid token" });
	}
}
