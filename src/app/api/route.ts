import { signJwt, verifyJwt } from "@/lib/jwt";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic"; // defaults to auto

export async function GET(request: Request) {
	const email = "achrafgarai@hotmail.com";
	const { token } = signJwt(email);
	return NextResponse.json(token);
}

export async function POST(request: Request) {
	const { token } = await request.json();
	const decoded = verifyJwt(token);
	return Response.json(decoded);
}
