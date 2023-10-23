import { GQLErrorData } from "@/gql"

export class ClientError extends Error {}

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
