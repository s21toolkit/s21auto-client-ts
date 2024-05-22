import type { GQLErrorData } from "@/gql"

export class ClientError extends Error {}

export class AuthError extends ClientError {
	constructor(override readonly cause: Error) {
		super(`Auth Error: [${cause.name}] ${cause.message}`)
	}
}

export class HttpError extends ClientError {
	constructor(readonly response: Response) {
		super(`HTTP Error: [${response.status}] ${response.statusText}`)
	}
}

export class GQLError extends ClientError {
	constructor(readonly errors: GQLErrorData[]) {
		super("GQL Error")
	}
}
