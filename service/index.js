const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const express = require('express');
const app = express();
const DB = require('./database.js');
const { PeerProxy } = require('./peerProxy.js');

const authCookieName = 'token';

const port = process.argv.length > 2 ? process.argv[2] : 4000;

app.use(express.json());

app.use(cookieParser());

app.use(express.static('public'));

var apiRouter = express.Router();
app.use('/api', apiRouter);

// create a new authtoken
apiRouter.post('/auth/register', async (req, res) => {
    // send error response if username already exists
    if(await DB.getUser(req.body.username)) {
        res.status(409).send({ msg: 'Existing user' });
        return;
    }

    // creates user and adds to database
    const user = DB.createUser(req.body.username, req.body.password);

    setAuthCookie(res, user.token);

    // TODO: How is the id used?
    res.send({ id: user._id });

});

// Login an existing user
apiRouter.post('/auth/login', async (req, res) => {
    const user = await DB.getUser(req.body.username);
    if (user) {
      if (await bcrypt.compare(req.body.password, user.password)) {
        setAuthCookie(res, user.token);
        res.send({ id: user._id });
        return;
      }
    }
    res.status(401).send({ msg: 'Unauthorized' });
  });

// clear authtoken cookie
apiRouter.delete('/auth/logout', (_req, res) => {
    res.clearCookie(authCookieName);
    res.status(204).end();
});

// Get info for user
apiRouter.get('/user/:username', async (req, res) => {
    const user = await DB.getUser(req.params.username);
    if (user) {
      const token = req?.cookies.token;
      res.send({ username: user.username, authenticated: token === user.token });
      return;
    }
    res.status(404).send({ msg: 'Unknown' });
  });

var secureApiRouter = express.Router();
apiRouter.use(secureApiRouter);

// FIXME: Sends correct status, but to be fancy, I want to add an error page
secureApiRouter.use(async (req, res, next) => {
  const authToken = req.cookies[authCookieName];
  const user = await DB.getUserByToken(authToken);
  if (user) {
    next();
  } else {
    res.status(401).send({ msg: 'Unauthorized' });
  }
});

// get a user's list from database
secureApiRouter.post('/words', async (req, res) => {
    console.log("words API endpoint");
    console.log("name from req: " + req.body.username);
    const userWords = await DB.getList(req.body.username);
    res.send(userWords);
});

// add word to database
secureApiRouter.post('/add', async (req, res) => {
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

function setAuthCookie(res, authToken) {
    res.cookie(authCookieName, authToken, {
      secure: true,
      httpOnly: true,
      sameSite: 'strict',
    });
  }

const httpService = app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

new PeerProxy(httpService);