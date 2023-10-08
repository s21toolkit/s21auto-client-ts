import { source } from "common-tags"
import { createGqlQueryRequest, extractGqlResponseData } from "@/gql"
import { Token } from "./Token"

type UserDataRole = {
	user: User
}

type User = {
	getCurrentUser: UserData
	getCurrentUserSchoolRoles: UserRole[]
}

type UserData = {
	functionalRoles: FunctionalRole[]
	id: string
	studentRoles: StudentRole[]
	userSchoolPermissions: UserSchoolPermission[]
}

type FunctionalRole = {
	code: string
}

type StudentRole = {
	id: string
	school: School
	status: string
}

type School = {
	id: string
	shortName: string
	organizationType: string
}

type UserSchoolPermission = {
	schoolId: string
	permissions: string[]
}

type UserRole = {
	schoolId: string
}

const S21_GQL_API_URL = "https://edu.21-school.ru/services/graphql"

const userRoleLoaderGetRolesRequest = JSON.stringify(
	createGqlQueryRequest(source`
		query userRoleLoaderGetRoles {
			user {
			getCurrentUser {
				functionalRoles {
					code
					__typename
				}
				id
				studentRoles {
					id
					school {
					id
					shortName
					organizationType
					__typename
					}
					status
					__typename
				}
				userSchoolPermissions {
					schoolId
					permissions
					__typename
				}
				systemAdminRole {
					id
					__typename
				}
				businessAdminRolesV2 {
					id
					school {
					id
					organizationType
					__typename
					}
					orgUnitId
					__typename
				}
				__typename
			}
			getCurrentUserSchoolRoles {
				schoolId
				__typename
			}
			__typename
			}
		}
	`),
)

export async function fetchUserData(token: Token) {
	const userDataResponse = await fetch(S21_GQL_API_URL, {
		method: "POST",
		headers: {
			...token.headers,
			"Content-Type": "application/json",
		},
		body: userRoleLoaderGetRolesRequest,
	})

	if (!userDataResponse.ok) {
		throw new Error(
			`Failed to fetch user data: ${userDataResponse.statusText}`,
		)
	}

	const data = await extractGqlResponseData<UserDataRole>(userDataResponse)

	return data
}
