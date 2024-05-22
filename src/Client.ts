import { ApiContext } from "@/api"
import type { GQLRequest, RawGQLResponse } from "@/gql"
import {
	type AuthProvider,
	S21_GQL_API_URL,
	getAuthHeaders,
} from "@s21toolkit/auth"
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
		const authHeaders = await getAuthHeaders(this.#authProvider)

		const response = await fetch(S21_GQL_API_URL, {
			method: "POST",
			headers: {
				...authHeaders,
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
