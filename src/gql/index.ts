export type GQLRequest<TVariables extends Record<string, unknown> = {}> = {
	operationName: string
	query: string
	variables: TVariables
}

// TODO: Add types
export type GQLErrorData = unknown

export type RawGQLResponse<TData = unknown> =
	| { errors: GQLErrorData[] }
	| GQLResponse<TData>

export type GQLResponse<TData> = {
	data: TData
}

const OPERATION_NAME_PATTERN = /(?:query|mutation)\s+(?<OperationName>\w+)/

export function createGqlQueryRequest(query: string): GQLRequest
export function createGqlQueryRequest<
	TVariables extends Record<string, unknown>,
>(query: string, variables: TVariables): GQLRequest<TVariables>
export function createGqlQueryRequest<
	TVariables extends Record<string, unknown>,
>(query: string, maybeVariables?: TVariables): GQLRequest<TVariables> {
	const variables = maybeVariables ?? {}

	// prettier-ignore
	const operationName = query.match(OPERATION_NAME_PATTERN)
		?.groups
		?.OperationName

	if (!operationName) {
		throw new Error(`Failed to extract operation name from query: ${query}`)
	}

	return {
		query,
		operationName,
		variables: variables as TVariables,
	}
}
