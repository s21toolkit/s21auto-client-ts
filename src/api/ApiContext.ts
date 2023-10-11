import { Client } from "@/Client"
import { getCurrentUser } from "./getCurrentUser"

export class ApiContext {
	constructor(readonly client: Client) {}

	getCurrentUser = getCurrentUser
}
