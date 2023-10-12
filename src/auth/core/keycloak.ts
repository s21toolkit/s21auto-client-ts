export const KC_BASE_URL =
	"https://auth.sberclass.ru/auth/realms/EduPowerKeycloak"

export const KC_COOKIE_BASE_URL = `${KC_BASE_URL}/protocol/openid-connect/auth?client_id=school21&redirect_uri=https%3A%2F%2Fedu.21-school.ru%2F&response_mode=fragment&response_type=code&scope=openid`

export const KC_TOKEN_URL = `${KC_BASE_URL}/protocol/openid-connect/token`

export function createKCCookieUrl(state: string, nonce: string) {
	const params = new URLSearchParams({ state, nonce })

	return `${KC_COOKIE_BASE_URL}&${params}`
}

export const KC_REDIRECT_URI = "https://edu.21-school.ru/"
