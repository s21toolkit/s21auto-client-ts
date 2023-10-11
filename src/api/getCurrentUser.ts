import { createGqlQueryRequest } from "@/gql/index"
import { ApiContext } from "./ApiContext"

export type GetCurrentUser_Variables = {}

export type GetCurrentUser_Data = {
	user: unknown
}

export async function getCurrentUser(
	this: ApiContext,
	variables: GetCurrentUser_Variables,
) {
	const request = createGqlQueryRequest(
		"query getCurrentUser {\n  user {\n    getCurrentUser {\n      ...CurrentUser\n      __typename\n    }\n    __typename\n  }\n  student {\n    getExperience {\n      ...CurrentUserExperience\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment CurrentUser on User {\n  id\n  avatarUrl\n  login\n  firstName\n  middleName\n  lastName\n  currentSchoolStudentId\n  __typename\n}\n\nfragment CurrentUserExperience on UserExperience {\n  id\n  cookiesCount\n  codeReviewPoints\n  coinsCount\n  level {\n    id\n    range {\n      id\n      levelCode\n      __typename\n    }\n    __typename\n  }\n  __typename\n}\n",
		variables,
	)

	return this.client.request<GetCurrentUser_Data>(request)
}
