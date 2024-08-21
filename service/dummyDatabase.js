const uuid = require('uuid');

class DummyDB {
	users = [
		{
			username: 'a',
			password: '$2b$10$nXF6yuxidDWPyp3Y44Gre.RGrtRiKohiA8Hs8AK3zFwPwM3F52e4K',
			token: 'a',
		}
	]

	words = [
		{
			username: 'a',
			word: 'word',
			tags: 'a, b, c',
			description: 'description',
		}
	]

	getUser(username) {
		return this.users.find(u => u.username === username);
	}

	getUserByToken(token) {
		return this.users.find(u => u.token === token);
	}

	async createUser(username, passwordHash) {
		const user = {
			username: username,
			password: passwordHash,
			token: uuid.v4(),
		};
		this.users.push(user);

		return user;
	}

	addWord(word) {
		this.words.push(word);
	}

	getList(username) {
		const list = [];
		this.words.forEach(word => {
			if (word.username === username) {
				list.push(word);
			}
		});
		return list;
	}
}

module.exports = DummyDB;