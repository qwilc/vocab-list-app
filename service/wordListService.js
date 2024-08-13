export class WordListService {
	async login(username, password) {
		return await fetch(`/api/auth/login`, {
			method: 'post',
			body: JSON.stringify({ email: username, password: password }),
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
		});
	}

	async register(username, password) {
		return await fetch(`/api/auth/register`, {
			method: 'post',
			body: JSON.stringify({ email: username, password: password }),
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
		});
	}

	logout() {
		fetch(`/api/auth/logout`, {
			method: 'delete',
		});
	}

}