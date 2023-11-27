import { v4 as randomUUID } from "uuid"
import { createKCCookieUrl, KC_REDIRECT_URI, KC_TOKEN_URL } from "./keycloak"

const LOGIN_ACTION_PATTERN = /(?<LoginActionURL>https:\/\/.+?)"/
const OAUTH_CODE_PATTERN = /code=(?<OAuthCode>.+)[&$]?/

function getLoginActionUrl(data: string) {
	const rawUrl = data.match(LOGIN_ACTION_PATTERN)?.groups?.LoginActionURL

	if (!rawUrl) {
		throw new Error(`Failed to extract login action from "${data}"`)
	}

	return rawUrl.replaceAll("amp;", "")
}

function getOAuthCode(location: string) {
	const oauthCode = location.match(OAUTH_CODE_PATTERN)?.groups?.OAuthCode ?? ""

	if (!oauthCode) {
		throw new Error(
			`Failed to extract oauth code from location header "${location}"`,
		)
	}

	return oauthCode
}

async function fetchAuthData(username: string, password: string) {
	const state = randomUUID()
	const nonce = randomUUID()

	const cookieUrl = createKCCookieUrl(state, nonce)

	const cookieResponse = await fetch(cookieUrl, {
		method: "GET",
		redirect: "manual",
	})

	if (!cookieResponse.ok) {
		throw new Error(
			`Failed to fetch keycloak cookies: ${cookieResponse.statusText}`,
		)
	}

	let kcCookies = cookieResponse.headers.get("set-cookie") ?? ""

	const loginResponseBody = await cookieResponse.text()
	const loginActionUrl = getLoginActionUrl(loginResponseBody)

	const loginData = new URLSearchParams({
		username,
		password,
	})

	const loginResponse = await fetch(loginActionUrl, {
		method: "POST",
		redirect: "manual",
		headers: {
			Cookie: kcCookies,
			"Content-Type": "application/x-www-form-urlencoded",
		},
		body: loginData,
	})

	if (loginResponse.status !== 302) {
		throw new Error(
			`Failed to perform login action: ${loginResponse.statusText}`,
		)
	}

	kcCookies += ";"
	kcCookies += loginResponse.headers.get("set-cookie") ?? ""

	const authUrl = loginResponse.headers.get("location")

	if (!authUrl) {
		throw new Error(`Failed to extract "location" header from login response`)
	}

	const authResponse = await fetch(authUrl, {
		method: "POST",
		redirect: "manual",
		headers: {
			Cookie: kcCookies,
		},
	})

	if (authResponse.status !== 302) {
		throw new Error(
			`Failed to perform auth request: ${authResponse.statusText}`,
		)
	}

	const redirectUrl = authResponse.headers.get("location")

	if (!redirectUrl) {
		throw new Error(`Failed to extract "location" header from auth response`)
	}

	const oauthCode = getOAuthCode(redirectUrl)

	return { oauthCode, kcCookies }
}

type TokenResponseData =
	| {
			error: string
			error_description: string
	  }
	| {
			access_token: string
			expires_in: number
			refresh_expires_in: number
			refresh_token: string
			token_type: string
			id_token: string
			not_before_policy: number
			session_state: string
			scope: string
	  }

export type TokenResponse = {
	accessToken: string
	oauthCode: string
	cookies: string
	issueTime: number
	expiryTime: number
}

export async function fetchAccessToken(
	username: string,
	password: string,
): Promise<TokenResponse> {
	const authData = await fetchAuthData(username, password)

	const tokenRequestData = new URLSearchParams({
		code: authData.oauthCode,
		grant_type: "authorization_code",
		client_id: "school21",
		redirect_uri: KC_REDIRECT_URI,
	})

	const tokenIssueTime = Date.now() / 1000

	const tokenResponse = await fetch(KC_TOKEN_URL, {
		method: "POST",
		headers: {
			Cookie: authData.kcCookies,
			"Content-Type": "application/x-www-form-urlencoded",
		},
		body: tokenRequestData,
	})

	const tokenData = (await tokenResponse.json()) as TokenResponseData

	if ("error" in tokenData) {
		throw new Error(
			`Failed to fetch access token: [${tokenData.error}] ${tokenData.error_description}`,
		)
	}

	return {
		accessToken: tokenData.access_token,
		oauthCode: authData.oauthCode,
		issueTime: tokenIssueTime,
		expiryTime: tokenData.expires_in,
		cookies: authData.kcCookies,
	}
}
