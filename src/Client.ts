import { ApiContext } from "@/api"
import { AuthProvider, getAuthHeaders } from "@/auth/providers/AuthProvider"
import { S21_GQL_API_URL } from "@/constants"
import { extractGqlResponseData, GQLRequest } from "@/gql"

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
				...getAuthHeaders(credentials),
				"Content-Type": "application/json",
			},
			body: JSON.stringify(gqlRequest),
		})

		if (!response.ok) {
			throw new Error(`Response failed: ${response.statusText}`, {
				cause: response,
			})
		}

		return extractGqlResponseData<TData>(response)
	}
}
