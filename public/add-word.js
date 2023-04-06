let username = localStorage.getItem('username');
const usernameEl = document.querySelector("#username");
usernameEl.textContent = username ?? 'Anonymous';

let socket;
configureWebSocket();

// TODO: Would be nice if unsaved input persists across page switches 
// (e.g. if you accidentally click a different page in the middle of creating a word)

async function saveWord() {

    // TODO: verify that the word box is not empty
    // TODO: maybe break up the code more
    // TODO: maybe force words to be unique (case-insensitive)

    wordEl = document.querySelector("#word-input");
    word_val = wordEl.value;
    iconEl = document.querySelector("#icon");
    icon_val = iconEl.textContent;
    notesEl = document.querySelector("#notes");
    notes_val = notesEl.value;

    new_word = {
        username: username, 
        word: word_val, 
        icon: icon_val, 
        notes: notes_val
    };

    try {
        console.log("before fetch");
        const response = await fetch('/api/add', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(new_word)
        });
        console.log("after fetch");

        const words = await response.json();
        localStorage.setItem('words', JSON.stringify(words));

        broadcastEvent(username, word_val);
    }
    catch {
        // Saves words locally in case of error
        // TODO: Ideally, if there was an error, the words only saved locally would be added later
        console.log("Error storing new word, saving locally");
        updateWordsLocal(new_word);
    }
    finally {
        console.log("Finished saving word");
        wordEl.value = "";
        notesEl.value = "";
    }
}

function updateWordsLocal(new_word) {
    let words = [];
    const wordsText = localStorage.getItem('words');
    
    if (wordsText) {
      words = JSON.parse(wordsText);
    }

    words.push(new_word);

    localStorage.setItem('words', JSON.stringify(words));
}

icon_idx = 0;
icons_list = ["❤️","💛","💙"];
iconEl = document.querySelector("#icon");
iconEl.textContent = icons_list[icon_idx];

function switchIcon() {
    // TODO: maybe use a dropdown with the option for custom character instead
    icon_idx++;
    icon_idx = icon_idx % icons_list.length;
    iconEl.textContent = icons_list[icon_idx];
}

// Websockets

function configureWebSocket() {
    const protocol = window.location.protocol === 'http:'? 'ws' : 'wss';
    socket = new WebSocket(`${protocol}://${window.location.host}/ws`);
    socket.onopen = (event) => {
        displayMsg('Connected');
    }
    socket.onclose = (event) => {
        displayMsg('Disconnected');
    }
    socket.onmessage = async (event) => {
        const msg = JSON.parse(await event.data.text());
        displayMsg(`${msg.user} added "${msg.word}"`);
    }
}

// TODO: I'd like a more sophisticated notification system
function displayMsg(msg) {
    const chatText = document.querySelector('#message');
    chatText.innerHTML =
      `<span class="event">${msg}</span>`;
}

function broadcastEvent(user, word) {
    const event = {
        user: user,
        word: word,
    }
    socket.send(JSON.stringify(event));
}