import { fetchAccessToken } from "@/auth/core/flow"
import { AuthCredentials, AuthProvider } from "./AuthProvider"
import { TokenAuthProvider } from "./TokenAuthProvider"

export class UserAuthProvider implements AuthProvider {
	#username: string
	#password: string

	#tokenAuthProvider?: TokenAuthProvider

	constructor(username: string, password: string) {
		this.#username = username
		this.#password = password
	}

	async getAuthCredentials(): Promise<AuthCredentials> {
		await this.tryRefresh()

		const credentials = await this.#tokenAuthProvider!.getAuthCredentials()

		return credentials
	}

	async tryRefresh() {
		if (this.#tokenAuthProvider && !this.#tokenAuthProvider.isExpired) {
			return
		}

		await this.refresh()
	}

	async refresh() {
		const tokenResponse = await fetchAccessToken(
			this.#username,
			this.#password,
		)

		const tokenAuthProvider = new TokenAuthProvider(tokenResponse.accessToken)

		this.#tokenAuthProvider = tokenAuthProvider
	}

	get tokenAuthProvider() {
		return this.#tokenAuthProvider
	}
}
