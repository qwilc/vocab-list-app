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
const scoreCollection = client.db('startup').collection('word');

function addWord(word) {
    scoreCollection.insertOne(word);
}

function getList(username) {
    const query = {username: username};
    const cursor = scoreCollection.find(query);
    return cursor.toArray();
}

module.exports = {addWord, getList};