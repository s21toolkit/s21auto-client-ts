import type { GQLRequest, RawGQLResponse } from "@/gql"
import {
	type AuthProvider,
	S21_GQL_API_URL,
	getAuthHeaders,
} from "@s21toolkit/auth"
import { AuthError, GQLError, HttpError } from "./errors"

export namespace Client {
	export type ApiContext = new (client: Client) => unknown
}

export class Client {
	constructor(
		readonly ApiContext: Client.ApiContext,
		public auth: AuthProvider,
	) {}

	useAuth(authProvider: AuthProvider) {
		this.auth = authProvider
	}

	get api() {
		return new this.ApiContext(this)
	}

	async request<TData>(gqlRequest: GQLRequest) {
		let authHeaders
		try {
			authHeaders = await getAuthHeaders(this.auth)
		} catch (error) {
			if (error instanceof Error) {
				throw new AuthError(error)
			}

			throw new AuthError(new Error("Unknown error", { cause: error }))
		}

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
