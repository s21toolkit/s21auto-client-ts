import { fetchUserData, Token } from "@/auth/core"
import { AuthCredentials, AuthProvider } from "@/auth/providers/AuthProvider"

export class DefaultAuthProvider implements AuthProvider {
	#token: Token

	#schoolId?: string

	constructor(username: string, password: string) {
		this.#token = new Token(username, password)
	}

	async #fetchSchoolId() {
		if (!this.#schoolId) {
			const userData = await fetchUserData(this.#token)

			this.#schoolId = userData.user.getCurrentUserSchoolRoles[0].schoolId

			return this.#schoolId
		}

		return this.#schoolId
	}

	async getAuthCredentials(): Promise<AuthCredentials> {
		await this.#token.tryRefresh()

		this.#token.assertValid()

		const schoolId = await this.#fetchSchoolId()

		return {
			accessToken: this.#token.accessToken,
			schoolId,
		}
	}
}
