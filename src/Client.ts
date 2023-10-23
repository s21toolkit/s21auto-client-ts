import { ApiContext } from "@/api"
import { AuthProvider, getAuthHeaders } from "@/auth/providers/AuthProvider"
import { S21_GQL_API_URL } from "@/constants"
import { GQLRequest } from "@/gql"

export class ClientError extends Error {}

export class HttpError extends ClientError {
	constructor(readonly response: Response) {
		super(`HTTP Error: [${response.status}] ${response.statusText}`)
	}
}

export class GQLError extends ClientError {
	constructor(readonly errors: unknown[]) {
		super(`GQL Error`)
	}
}

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
			throw new HttpError(response)
		}

		const body = (await response.json()) as
			| { data: TData }
			| { errors: unknown[] }

		if ("errors" in body) {
			throw new GQLError(body.errors)
		}

		return body.data
	}
}
