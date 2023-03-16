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
