import jwt, { VerifyErrors, VerifyOptions, Algorithm } from "jsonwebtoken";

// Secret key for signing and verifying tokens (replace this with a secure key)
const secretKey = process.env.JWT_SECRET || "";

export function signJwt(email: string) {
	// You can include additional data in the token payload if needed
	const payload = { email };

	// Generate a token with a 1-hour expiration time
	// Encrypt the payload
	const token = jwt.sign(payload, secretKey, {
		algorithm: "HS256",
		expiresIn: "1d",
	});

	return { token };
}

export function verifyJwt(token: string) {
	try {
		const decoded = (jwt.verify(token, secretKey) as { email: string }) || null;
		return decoded;
	} catch (err) {
		// err
		if (err instanceof jwt.TokenExpiredError) {
			// Token has expired
			throw new Error("Token has expired");
		}
	}
}
