export type AuthCredentials = {
	accessToken: string
	schoolId: string
}

export type AuthProvider = {
	getAuthCredentials(): Promise<AuthCredentials>
}
