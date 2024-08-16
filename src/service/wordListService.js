import { AuthState } from "../authState";

class WordListService {
	async getUser(username) {
		const response = await fetch(`/api/user/${username}`);
		if (response.status === 200) {
			return response.json();
		}

		return null;
	}

	async getAuthState(username) {
		const user = await this.getUser(username)
		return user?.authenticated ? AuthState.Authenticated : AuthState.Unauthenticated;
	}

	async login(username, password) {
		return await fetch(`/api/auth/login`, {
			method: 'post',
			body: JSON.stringify({ username: username, password: password }),
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
		});
	}

	async register(username, password) {
		return await fetch(`/api/auth/register`, {
			method: 'post',
			body: JSON.stringify({ username: username, password: password }),
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
		});
	}

	async logout() {
		await fetch(`/api/auth/logout`, {
			method: 'delete',
		});
	}
}

export default WordListService;