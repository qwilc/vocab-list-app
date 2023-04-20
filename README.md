# startup
## About
This is an app for name nerds and vocab buffs alike.
Just add a word, write a description, and choose an icon, save it to your list, and you're good to go. Parents looking for baby names, creators looking to name characters, and people who just like learning and remembering new words will all be glad to have this on hand. 

![image](startup.jpg)

Key Features:
- Login
- Type out word and description
- Save to personal list
- Others are notified of newly saved names/words
- View list of your previously saved words

## Learning Notes
The VS Code merge editor is useful. You can choose to accept changes from one side or the other, or both, or neither.

IP:
3.138.248.88

SSH Command:  
ssh -i cs260/cs260.pem ubuntu@3.138.248.88

Simon Deployment:  
./deployFiles.sh -k ../cs260.pem -h quincywilcox.click -s simon

### HTML
```html
<!-- commented text -->
```

| element   | meaning                                                                |
| --------- | ---------------------------------------------------------------------- |
| `html`    | The page container                                                     |
| `head`    | Header information                                                     |
| `title`   | Title of the page                                                      |
| `meta`    | Metadata for the page such as character set or viewport settings       |
| `script`  | JavaScript reference. Either a external reference, or inline           |
| `include` | External content reference                                             |
| `body`    | The entire content body of the page                                    |
| `header`  | Header of the main content                                             |
| `footer`  | Footer of the main content                                             |
| `nav`     | Navigational inputs                                                    |
| `main`    | Main content of the page                                               |
| `section` | A section of the main content                                          |
| `aside`   | Aside content from the main content                                    |
| `div`     | A block division of content                                            |
| `span`    | An inline span of content                                              |
| `h<1-9>`  | Text heading. From h1, the highest level, down to h9, the lowest level |
| `p`       | A paragraph of text                                                    |
| `b`       | Bring attention                                                        |
| `table`   | Table                                                                  |
| `tr`      | Table row                                                              |
| `th`      | Table header                                                           |
| `td`      | Table data                                                             |
| `ol,ul`   | Ordered or unordered list                                              |
| `li`      | List item                                                              |
| `a`       | Anchor the text to a hyperlink                                         |
| `img`     | Graphical image reference                                              |
| `dialog`  | Interactive component such as a confirmation                           |
| `form`    | A collection of user input                                             |
| `input`   | User input field                                                       |
| `audio`   | Audio content                                                          |
| `video`   | Video content                                                          |
| `svg`     | Scalable vector graphic content                                        |
| `iframe`  | Inline frame of another HTML page                                      |

(The HTML: Input CodePen has good examples of all the different input types, but here's how radio buttons work:
<label for="radio1">radio1</label>
<input type="radio" id="radio1" name="varRadio" value="radio1" checked />
<label for="radio2">radio2</label>
<input type="radio" id="radio2" name="varRadio" value="radio2" checked />

Using this, submit button will take you to a different page:  
<form method="get" action="play.html">...</form>

Can use an svg as a button label instead of text  

Can use "readonly" in an <input> tag

### CSS
`div span { ... }`  
any span that is a child of a div will be styled

`position: sticky` will cause an item to switch from relative to fixed once you scroll past a certain point. The item will slide up once you scroll past its parent class.

Calculations!
e.g. `calc(100vh - 110px)`

`justify-content` property defines how the browser distributes space between and around content items along the main-axis of a flex container, and the inline axis of a grid container  
`justify-self` property sets the way a box is justified inside its alignment container  
`justify-items` property defines the default `justify-self` for all items of the box  

`!important` used to override Bootstrap

`vmin` and `vmax` find min/max of vh and vw

`min(80vmin, 1000px)` minimum of two or more values

`fr` represents a fraction of the leftover space in grid container

Import a Google Font:  
`@import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');`

Going inside to outside:  
content, padding, border, margin

### JavaScript

#### Functions
const f = (x) => {}  
function f(x) {}  
const f = function(x) {}  

#### Array Functions
| Function | Meaning                                                   | Example                       |
| -------- | --------------------------------------------------------- | ----------------------------- |
| push     | Add an item to the end of the array                       | `a.push(4)`                   |
| pop      | Remove an item from the end of the array                  | `x = a.pop`                   |
| slice    | Return a sub-array                                        | `a.slice(1,-1)`               |
| sort     | Run a function sort an array in place                     | `a.sort((a,b) => b-a)`        |
| values   | Creates an iterator for use with a `for of` loop          | `for (i of a.values()) {...}` |
| find     | Find the first item satisfied by a test function          | `a.find(i => i < 2)`          |
| forEach  | Run a function on each array item                         | `a.forEach(console.log)`      |
| reduce   | Run a function to reduce each array item to a single item | `a.reduce((a, c) => a + c)`   |
| map      | Run a function to map an array to a new array             | `a.map(i => i+i)`             |
| filter   | Run a function to remove items                            | `a.filter(i => i%2)`          |
| every    | Run a function to test if all items match                 | `a.every(i => i < 3)`         |
| some     | Run a function to test if any items match                 | `a.some(i => 1 < 1)`          |

#### Regular Expressions
const re = /pattern/flags;
OR
const re = new RegExp("pattern", "flags");

`g` flag indicates that the regular expression should be tested against all possible matches in a string
`i` flag indicates that case should be ignored
`m` flag indicates that a multiline input string should be treated as multiple lines

```js
const petRegex = /(dog)|(cat)|(bird)/gim;
const text = 'Both cats and dogs are pets, but not rocks.';

text.match(petRegex);
// RETURNS: ['cat', 'dog']

text.replace(petRegex, 'animal');
// RETURNS: Both animals and animals are pets, but not rocks.

petRegex.test(text);
// RETURNS: true
```

#### DOM
`querySelector()` returns first element matching the selector(s) or null  
`querySelectorAll()` returns a static list of all elements matching the selector(s)  

Pass in a CSS tag to create a new element  
`document.createElement()`

`parentEl.appendChild(childEl)`

use `.value` for inputs instead of `.textContent`

`JSON.stringify()`/`JSON.parse()`

#### Simon JavaScript notes
Store a key-value pair in browser's local storage  
`localStorage.setItem("key", value);`  
Retrieve value from local storage  
`localStorage.getItem("key");`

Get the current URL or navigate to a new URL  
`window.location.href`  
`window.location.href = new_url`

Get current date and time, and return just the date as a string  
`new Date().toLocaleDateString();`

Put <script> tag at bottom if JavaScript references HTML elements during initialization

### Node.js  
1. Create your project directory
1. Initialize it for use with NPM by running `npm init -y`
1. ⚠ Make sure `.gitignore` file contains `node-modules`
1. Install any desired packages with `npm install <package name here>`
1. Add `require('<package name here>')` to your JavaScript code
1. Run your code with `node main.js`

### Express
npm install express  

Create an express application:  
`const app = express()`

Built-in static file hosting (serves up static files in `public`)  
`app.use(express.static('public'));`

Create a router, handles endpoints beginning with /api  
```
  var apiRouter = express.Router();
app.use(`/api`, apiRouter);
  ```

Listen on a port  
`app.listen(port, function)`

Handles a GET request to /api/scores  
```
apiRouter.get('/scores', (_req, res) => {
  res.send(scores);
});
  ```

JavaScript to send the GET request  
```
const response = await fetch('/api/scores');
scores = await response.json();
  ```

Handles a POST request to /api/score
```
apiRouter.post('/score', (req, res) => {
  scores = updateScores(req.body, scores);
  res.send(scores);
});
  ```

JavaScript to send the POST request
```
const response = await fetch('/api/score', {
  method: 'POST',
  headers: { 'content-type': 'application/json' },
  body: JSON.stringify(newScore),
});
  ```
  
### MongoDB
`const {MongoClient} = require('mongodb');`

Get environment variables:  
`process.env.ENVVAR`

Create database:
```
const client = new MongoClient(url);
const scoreCollection = client.db('db name').collection('collection name');
```

### Simon Login
#### index.html
input fields for email and password (type = text and type = password)  
Login button and Create button with respective on-click functions  

Separate division with HTML for when already authenticated (`style="display: none"`)  
Play/Logout options

Another division with the pop-up that displays with errors

#### login.js
anonymous async function checks whether user is authenticated - sets the display for the login/already logged in page

login and create use the same code to send the request, just to different API endpoints

if response has error status, create bootstrap.Modal object and display it

#### index.js
The Create endpoint checks if the user already exists in the database, returns a 409 error if so  
Otherwise, creates a new user and sends a cookie with the authtoken in the response

Login endpoint checks whether the user exists and whether the password matches the one in the database
If either is untrue, sends 401 Unauthorized error
Otherwise, sends back a cookie with the user's authtoken in the response

Logout endpoint clears the authtoken cookie

Separate secure API router for post requests to /score and get requests to /scores with middleware that checks the authtoken and calls next() if it's valid

### Simon Websocket
#### play.js
  A websocket is stored as an attribute of the Game class and configured once a Game is created (i.e. when play page opens)
  
  http -> ws protocol  
  https -> wss protocol  
  `const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';`  
  
  Set up websocket connection:  
    ``this.socket = new WebSocket(\`${protocol}://${window.location.host}/ws`);``
  
  Set these to the function that should be executed on open/close  
  `this.socket.onopen`  
  `this.socket.onclose`
 
  Determines what will happen when a message is received:  
  `this.socket.onmessage = async (event) => {const msg = JSON.parse(await event.data.text()); ... }`
  
  Send and event object with whatever data you previously set it with:  
  `this.socket.send(JSON.stringify(event));`
  
#### peerProxy.js
  Contains a peer proxy class with a constructor that sets up the WS server
  Set `noServer` to true when creating the WebSocketServer and handle upgrade protocol
  Each time a new connection is made, add it to a list
  Ping connections every 10 seconds to see if they chould be kept
  
  Behavior when message is received (forward to every connection in the list except the one with connection.id equal to sender)
  `ws.on('message', function message(data) {...})`
  
Behavior when connection is closed (remove it from list in this case)  
      `ws.on('close', () => {...});`
  
Behavior on pong message from client (mark as alive in this case)  
  `ws.on('pong', () => {...});`
  
  #### index.js
  create a new `PeerProxy` using `httpService` returned by `app.listen()`  
  
  ### Startup Service Notes
  just because an API can be accessed on the browser and with curl doesn't mean it has CORS enabled :(
  
  uuid = universally unique identifier; unique 128-bit label  
  can import as package in node to create ids  
  app uses v4  
  
  bcrypt package's hash() and compare() methods can be used for storing and verifying passwords  
  
  use `res.cookie(...)` in endpoints to send a cookie with a response  
  use `res.delete(cookieName)` to clear the cookie  
  
  Get a matching entry from the database:  
  `collection.findOne({ key: value })`
  
  #### Converting to React
  1. Reorganize project
      1. delete node_modules
      1. move service code to new service directory
      1. run npm install in service
      1. test service with node index.js and curl (e.g. curl 'localhost:3000/api/user/joe')
      1. rename public to old-public (will move code out and then delete old-public)
  1. Commit as starting place
  1. Run `npx create-react-app template-react`
  1. Clean up template code
      1. uninstall unneeded packages (e.g. stats, test)
      1. delete unneeded files (e.g. images)
      1. rename js to jsx (optional, but helps human readability)
      1. Replace favico.ico with app's icon
      1. update manifest.json
      1. clean up index.html file
  1. Move template-react files
      1. copy files to project directory
      1. delete template-react
      1. run npm install in root of project directory
  1. Convert to React Bootstrap
      1. Run `npm install bootstrap react-bootstrap`
      1. Add `import 'bootstrap/dist/css/bootstrap.min.css';` to enable bootstrap
  1. Populate App.jsx
      1. move HTML that's common across pages (i.e. header and footer) into App()
      1. replace HTML `class` with JSX `className`
      1. move `main.css` to `app.css` and call ``import `./app.css` ``
      1. Check authentication state
          1. Create react state variable for auth state
          1. Call getUser endpoint
          1. Set state based on result
          1. Show or hide nav elements based on state (put in second half of && statement)
      1. Create view components
          1. Create stub .jsx files for each view
          1. Place each in own directory
      1. Create the router
          1. Run `npm install react-router-dom`
          1. Include router component in index.jsx and app.jsx
          1. Create `BrowserRouter` component in index.jsx with `App` component as a child
          1. Replace `a` elements in app.jsx with `NavLink` components
          1. Replace `href` with `to`
          1. Add router definitions (`Routes` component with `Route` child components)
          1. Use `Route` component with `path='*'` to capture unknown paths
          1. Create `NotFound` component in app.jsx (optional, could also just redirect to '/')
          1. Test that the React app runs
      1. Convert to React components
          1. copy HTML into return value of component
          1. class -> className
          1. delete header/footer
          1. copy JavaScript and turn functions into inner functions of component
          1. Create file for CSS and import it
          1. Create React state variables for stateful objects in component
          1. Replace DOM query selectors with React state variables
          1. Move state up to parent components as necessary. (e.g. auth state, username state)
          1. Create child components as necessary (e.g., for Simon, SimonGame and SimonButton)
          1. Test as you go
      1. Set up to debug
          1. Create `.env.local` file
          1. Add `PORT=3001` to the file
          1. Modify the package.json file to include the field `"proxy": "http://localhost:3000"` (If a request is made to a service endpoint, forward it to port 3000)
          1. In gameNotifier.js add the code `if (process.env.NODE_ENV !== 'production') { port = 3000; }` so websocket will use port 3000
      1. Refactor .jsx files into separate .jsx files as needed
      1. Refactor components to take advantage of React specific functionality and to create sub-components
      1. Move webSocket code to gameNotifier.js
  
  
  ### Startup React Notes
  Give a component parameters:  
  `function Component({param}) {...}`  
  `<Component param={value}`
  
  Set up router:  
  In index.jsx:  
  ```
  <BrowserRouter>
      <App />
    </BrowserRouter>
  ```  
  
  In app.jsx:  
  ```
  function App() {
      return (
        ...
        <Routes>
          <Route path="path" element={<Component />}>
        </Routes>
        ...
    ```
