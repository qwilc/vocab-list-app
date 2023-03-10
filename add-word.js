usernameEl = document.querySelector("#username")
usernameEl.textContent = localStorage.getItem('username') ?? 'Anonymous';

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

    document.querySelector("#display").innerHTML = new_word_json;

}

// Pressing icon button changes icon 
// (or actually, maybe use a dropdown? or allow any single character? can it both be free response and give suggestions? Regex can limit to a single character right?)