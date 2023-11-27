import {
	extractPayload,
	fetchUserData,
	isExpired,
	TokenPayload,
} from "@/auth/core"
import { AuthCredentials, AuthProvider } from "@/auth/providers/AuthProvider"

type ExtraCredentials = Omit<AuthCredentials, "accessToken">

export class TokenAuthProvider implements AuthProvider {
	#accessToken: string
	#tokenPayload: TokenPayload

	#extraCredentials: Partial<ExtraCredentials>

	constructor(
		accessToken: string,
		extraCredentials: Partial<ExtraCredentials> = {},
	) {
		this.#accessToken = accessToken
		this.#tokenPayload = extractPayload(accessToken)

		this.#extraCredentials = extraCredentials
	}

	async getAuthCredentials(): Promise<AuthCredentials> {
		await this.assertValid()

		await this.fetchSchoolId()

		return this.authCredentials
	}

	async fetchSchoolId() {
		if (!this.#extraCredentials.schoolId) {
			await this.assertValid()

			const userData = await fetchUserData(this.#accessToken)

			const schoolId = userData.user.getCurrentUserSchoolRoles[0]?.schoolId

			if (!schoolId) {
				throw new Error("Failed to fetch schoolId")
			}

			this.#extraCredentials.schoolId = schoolId

			return schoolId
		}

		return this.#extraCredentials.schoolId
	}

	assertValid() {
		if (this.isExpired) {
			throw new Error("Token expired")
		}
	}

	get isExpired() {
		return isExpired(this.#tokenPayload.exp)
	}

	get authCredentials(): AuthCredentials {
		return {
			accessToken: this.#accessToken,
			schoolId: this.#extraCredentials.schoolId ?? "",
		}
	}

	get tokenPayload() {
		return this.#tokenPayload
	}
}
