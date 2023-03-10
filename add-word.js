usernameEl = document.querySelector("#username");
username = localStorage.getItem('username');
usernameEl.textContent = username ?? 'Anonymous';

function saveWord() {

    // Verify that there is something in the word box

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
    document.querySelector("#display").innerHTML = localStorage.getItem("words");
    

    // get existing storage 
    // get existing storage for this user
    // if it doesn't exist, just add this word in a list
    // otherwise, add this word to the end of the list

}

// Pressing icon button changes icon 
// (or actually, maybe use a dropdown? or allow any single character? can it both be free response and give suggestions? Regex can limit to a single character right?)