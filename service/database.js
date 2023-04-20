const bcrypt = require('bcrypt');
const uuid = require('uuid');
const {MongoClient} = require('mongodb');

const userName = process.env.MONGOUSER;
const password = process.env.MONGOPASSWORD;
const hostname = process.env.MONGOHOSTNAME;

// FIXME: database field names (especially username) are hard-coded right now

if (!userName) {
    throw Error('Database not configured. Set environment variables');
}
  
const url = `mongodb+srv://${userName}:${password}@${hostname}`;

const client = new MongoClient(url);
const wordCollection = client.db('startup').collection('word');
const userCollection = client.db('startup').collection('user');

function getUser(username) {
    return userCollection.findOne({ username: username });
}
  
function getUserByToken(token) {
    return userCollection.findOne({ token: token });   
}
  
async function createUser(username, password) {
    const passwordHash = await bcrypt.hash(password, 10);

    const user = {
        username: username,
        password: passwordHash,
        token: uuid.v4(),
    };
    await userCollection.insertOne(user);

    return user;
}

function addWord(word) {
    wordCollection.insertOne(word);
}

function getList(username) {
    const query = {username: username};
    const cursor = wordCollection.find(query);
    return cursor.toArray();
}

module.exports = {addWord, getList, getUser, getUserByToken, createUser};