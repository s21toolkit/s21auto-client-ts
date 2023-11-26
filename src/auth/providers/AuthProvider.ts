export type AuthCredentials = {
	accessToken: string
	schoolId: string
}

export type AuthProvider = {
	getAuthCredentials(): Promise<AuthCredentials>
}

export function getAuthHeaders(credentials: AuthCredentials) {
	return {
		Authorization: `Bearer ${credentials.accessToken}`,
		schoolid: credentials.schoolId,
		"x-edu-product-id": "96098f4b-5708-4c42-a62c-6893419169b3",
	}
}
