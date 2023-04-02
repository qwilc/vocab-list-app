const express = require('express');
const app = express();

const port = process.argv.length > 2 ? process.argv[2] : 8080;

app.use(express.json());

app.use(express.static('public'));

var apiRouter = express.Router();
app.use('/api', apiRouter);

// getWords
apiRouter.get('/words', (req, res) => {
    let userWords = getUserWords(req.body.name, words);
    res.send(userWords);
});

// addWord
apiRouter.post('/add', (req, res) => {
    let userWords = updateWords(req.body, words);
    res.send(userWords);
});

// Return the application's default page if the path is unknown
app.use((_req, res) => {
    res.sendFile('index.html', { root: 'public' });
  });

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

let words = []

function getUserWords(name, words) {
    let userWords = words.filter((word) => word.name == name);
    return userWords;
}

function updateWords(newWord, words) {
    words.push(newWord);
    return getUserWords(newWord.name, words);
}