const username = localStorage.getItem("username");
const tableBodyEl = document.querySelector('#words');

function loadWords() {

    const words_text = localStorage.getItem("words");

    if(words_text) {
        words = JSON.parse(words_text);
        if(words[username]) {
            display_words(words[username]);
            return;
        }
    }

    tableBodyEl.innerHTML = '<tr><td colSpan=3>Words you add will appear here</td></tr>';
}

function display_words(words) {
    for(word of words) {
        const wordTdEl = document.createElement('td');
        const iconTdEl = document.createElement('td');
        const notesTdEl = document.createElement('td');
  
        wordTdEl.textContent = word.word;
        iconTdEl.textContent = word.icon;
        notesTdEl.textContent = word.notes;
  
        const rowEl = document.createElement('tr');
        rowEl.appendChild(wordTdEl);
        rowEl.appendChild(iconTdEl);
        rowEl.appendChild(notesTdEl);
  
        tableBodyEl.appendChild(rowEl);
    }
}

loadWords();