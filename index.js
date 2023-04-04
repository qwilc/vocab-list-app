const express = require('express');
const app = express();
const DB = require('./database.js');

const port = process.argv.length > 2 ? process.argv[2] : 8080;

app.use(express.json());

app.use(express.static('public'));

var apiRouter = express.Router();
app.use('/api', apiRouter);

// getWords
// TODO: Need to get words by user, is that GET or POST?
apiRouter.post('/words', async (req, res) => {
    console.log("words API endpoint");
    console.log("name from req: " + req.body.username);
    const userWords = await DB.getList(req.body.username);
    res.send(userWords);
});

// addWord
apiRouter.post('/add', async (req, res) => {
    console.log("add API endpoint");
    DB.addWord(req.body);
    const userWords = await DB.getList(req.body.username);
    console.log(userWords);
    res.send(userWords);
});

// Return the application's default page if the path is unknown
app.use((_req, res) => {
    res.sendFile('index.html', { root: 'public' });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});