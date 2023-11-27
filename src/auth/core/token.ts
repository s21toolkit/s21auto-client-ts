export type TokenPayload = {
	exp: number
	iat: number
	auth_time: number

	jti: string
	iss: string
	aud: string
	syb: string
	typ: string
	azp: string

	nonce: string
	session_state: string

	acr: string

	"allowed-origins": string[]

	realm_access: {
		roles: string[]
	}

	resource_access: {
		account: {
			roles: string[]
		}
	}

	scope: string
	auth_type_code: string

	email: string
	email_verified: boolean
	user_id: string
	name: string
	given_name: string
	family_name: string
}

export function extractPayload(token: string) {
	const encodedPayload = token.split(".")[1]

	if (!encodedPayload) {
		throw new Error("Failed to extract jwt payload")
	}

	const payload = JSON.parse(atob(encodedPayload)) as TokenPayload

	return payload
}

export function isExpired(token: string): boolean
export function isExpired(expirationTime: number): boolean
export function isExpired(tokenOrExpirationTime: string | number) {
	const exp =
		typeof tokenOrExpirationTime === "number"
			? tokenOrExpirationTime
			: extractPayload(tokenOrExpirationTime).exp

	const now = Date.now() / 1000

	return now >= exp
}
