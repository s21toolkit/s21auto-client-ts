import { ApiContext } from "@/api"
import { AuthProvider, getAuthHeaders, PRODUCT_ID_HEADER } from "@/auth"
import { S21_GQL_API_URL } from "@/constants"
import { GQLRequest, RawGQLResponse } from "@/gql"
import { GQLError, HttpError } from "./errors"

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
				...PRODUCT_ID_HEADER,
				"Content-Type": "application/json",
			},
			body: JSON.stringify(gqlRequest),
		})

		if (!response.ok) {
			throw new HttpError(response)
		}

		const body = (await response.json()) as RawGQLResponse<TData>

		if ("errors" in body) {
			throw new GQLError(body.errors)
		}

		return body.data
	}
}
