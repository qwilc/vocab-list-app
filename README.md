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

### JavaScript
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
