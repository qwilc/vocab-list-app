username = localStorage.getItem('username');
usernameEl = document.querySelector("#username");
usernameEl.textContent = username ?? 'Anonymous';

// TODO: maybe use objects or something
// TODO: Would it be better to have each user be a different key in localStorage? Does it really matter at this point?

function saveWord() {

    // TODO: verify that the word box is not empty
    // TODO: maybe break up the code more
    // TODO: maybe force words to be unique (case-insensitive)

    wordEl = document.querySelector("#word-input");
    word_val = wordEl.value;
    iconEl = document.querySelector("#icon");
    icon_val = iconEl.textContent;
    notesEl = document.querySelector("#notes");
    notes_val = notesEl.value;

    new_word = {word: word_val, icon: icon_val, notes: notes_val};

    new_word_json = JSON.stringify(new_word);

    stored_words = localStorage.getItem("words");
    if(!stored_words) {
        stored_words = {};
    }
    else {
        stored_words = JSON.parse(stored_words);
    }
    
    if(!stored_words[username]) {
        stored_words[username] = [new_word];
    }
    else {
        stored_words[username].push(new_word);
    }

    stored_words_json = JSON.stringify(stored_words);
    localStorage.setItem("words", stored_words_json);

    wordEl.value = "";
    notesEl.value = "";

    // TODO: Toast/success message
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