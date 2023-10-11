import { S21_GQL_API_URL } from "@/constants"
import { ApiContext } from "./api/ApiContext"
import { AuthProvider } from "./AuthProvider"
import { extractGqlResponseData, GQLRequest } from "./gql"

export class Client {
	#authProvider: AuthProvider

	constructor(authProvider: AuthProvider) {
		this.#authProvider = authProvider
	}

	useAuth(authProvider: AuthProvider) {
		this.#authProvider = authProvider
	}

	get api() {
		return new ApiContext(this)
	}

	async request<TData>(gqlRequest: GQLRequest) {
		const credentials = await this.#authProvider.getAuthCredentials()

		const response = await fetch(S21_GQL_API_URL, {
			method: "POST",
			headers: {
				Authorization: `Bearer ${credentials.accessToken}`,
				schoolid: credentials.schoolId,
				"Content-Type": "application/json",
			},
			body: JSON.stringify(gqlRequest),
		})

		return extractGqlResponseData<TData>(response)
	}
}
