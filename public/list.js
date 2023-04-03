const username = localStorage.getItem("username");
const tableBodyEl = document.querySelector('#words');


async function loadWords() {
    let words = [];

    try {
        console.log("before words fetch");
        const response = await fetch('/api/words', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({name: username})
        });
        console.log("after words fetch");

        words = await response.json();
    }
    catch {
        console.log("Error getting words, using locally stored data");

        const words_text = localStorage.getItem("words");

        console.log(words_text);

        if(words_text) {
            words = JSON.parse(words_text);
        }
    }
    finally {
        display_words(words);
    }
}

function display_words(words) {
    if(words.length) {
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
    else {
        tableBodyEl.innerHTML = '<tr><td colSpan=3>Words you add will appear here</td></tr>';
    }
}

loadWords();