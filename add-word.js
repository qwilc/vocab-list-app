username = localStorage.getItem('username');
usernameEl = document.querySelector("#username");
usernameEl.textContent = username ?? 'Anonymous';

function saveWord() {

    // TODO: verify that the word box is not empty
    // TODO: maybe break up the code across functions

    wordEl = document.querySelector("#word-input");
    console.log(wordEl);
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
        console.log(stored_words)
    }
    
    if(!stored_words[username]) {
        stored_words[username] = [new_word];
    }
    else {
        stored_words[username].push(new_word);
    }

    stored_words_json = JSON.stringify(stored_words);
    localStorage.setItem("words", stored_words_json);
    // document.querySelector("#display").innerHTML = localStorage.getItem("words");
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