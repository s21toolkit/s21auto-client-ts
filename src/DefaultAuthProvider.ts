import { Token } from "@/auth/Token"
import { AuthCredentials, AuthProvider } from "@/AuthProvider"
import { fetchUserData } from "./auth/user"

export class DefaultAuthProvider implements AuthProvider {
	#token: Token

	constructor(username: string, password: string) {
		this.#token = new Token(username, password)
	}

	async getAuthCredentials(): Promise<AuthCredentials> {
		await this.#token.tryRefresh()

		this.#token.assertValid()

		const userData = await fetchUserData(this.#token)

		return {
			accessToken: this.#token.accessToken,
			schoolId: userData.user.getCurrentUserSchoolRoles[0].schoolId,
		}
	}
}
