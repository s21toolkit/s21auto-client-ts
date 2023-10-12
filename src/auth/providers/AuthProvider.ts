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
	}
}
