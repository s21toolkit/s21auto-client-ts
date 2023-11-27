import { source } from "common-tags"
import { S21_GQL_API_URL } from "@/constants"
import { GQLError, HttpError } from "@/errors"
import { createGqlQueryRequest, RawGQLResponse } from "@/gql"
import { TokenResponse } from "./flow"

export type UserRoleData = {
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

export async function fetchUserData(token: TokenResponse): Promise<UserRoleData>
export async function fetchUserData(accessToken: string): Promise<UserRoleData>
export async function fetchUserData(token: TokenResponse | string) {
	const accessToken = typeof token === "string" ? token : token.accessToken

	const userDataResponse = await fetch(S21_GQL_API_URL, {
		method: "POST",
		headers: {
			Authorization: `Bearer ${accessToken}`,
			"Content-Type": "application/json",
		},
		body: userRoleLoaderGetRolesRequest,
	})

	if (!userDataResponse.ok) {
		throw new HttpError(userDataResponse)
	}

	const body = (await userDataResponse.json()) as RawGQLResponse<UserRoleData>

	if ("errors" in body) {
		throw new GQLError(body.errors)
	}

	return body.data
}
