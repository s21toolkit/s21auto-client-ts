import { Client } from "@/Client"
import { createGqlQueryRequest } from "@/gql"

type ElideVariables<TVariables> = {} extends TVariables
	? [variables?: TVariables]
	: [variables: TVariables]

export namespace GetCurrentUser {
	export const request = createGqlQueryRequest(
		"query getCurrentUser {\n  user {\n    getCurrentUser {\n      ...CurrentUser\n      __typename\n    }\n    __typename\n  }\n  student {\n    getExperience {\n      ...CurrentUserExperience\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment CurrentUser on User {\n  id\n  avatarUrl\n  login\n  firstName\n  middleName\n  lastName\n  currentSchoolStudentId\n  __typename\n}\n\nfragment CurrentUserExperience on UserExperience {\n  id\n  cookiesCount\n  codeReviewPoints\n  coinsCount\n  level {\n    id\n    range {\n      id\n      levelCode\n      __typename\n    }\n    __typename\n  }\n  __typename\n}\n",
	)

	export type Variables = {}

	export namespace Variables {}

	export type Data = {
		user: Data.User
	}

	export namespace Data {
		export type User = {}
	}
}

export class ApiContext {
	constructor(readonly client: Client) {}

	async getCurrentUser(
		...[variables = {}]: ElideVariables<GetCurrentUser.Variables>
	) {
		return this.client.request<GetCurrentUser.Data>({
			...GetCurrentUser.request,
			variables,
		})
	}
}
