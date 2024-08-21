const uuid = require('uuid');
const { MongoClient } = require('mongodb');

class MongoDB {
	constructor() {
		const userName = process.env.MONGOUSER;
		const password = process.env.MONGOPASSWORD;
		const hostname = process.env.MONGOHOSTNAME;

		if (!userName) {
			throw Error('Database not configured. Set environment variables');
		}

		const url = `mongodb+srv://${userName}:${password}@${hostname}`;
		const client = new MongoClient(url);
		this.wordCollection = client.db('startup').collection('word');
		this.userCollection = client.db('startup').collection('user');
	}

	getUser(username) {
		return this.userCollection.findOne({ username: username });
	}

	getUserByToken(token) {
		return this.userCollection.findOne({ token: token });
	}

	async createUser(username, passwordHash) {
		const user = {
			username: username,
			password: passwordHash,
			token: uuid.v4(),
		};
		await this.userCollection.insertOne(user);

		return user;
	}

	addWord(word) {
		this.wordCollection.insertOne(word);
	}

	getList(username) {
		const query = { username: username };
		const cursor = this.wordCollection.find(query);
		return cursor.toArray();
	}
}

module.exports = MongoDB;