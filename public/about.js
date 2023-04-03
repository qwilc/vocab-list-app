async function displayQuote() {
    // TODO: explore other quote APIs
    const response = await fetch('https://api.quotable.io/random');

    console.log(response);

    const response_text = await response.json();
    
    console.log(response);
    
    const containerEl = document.querySelector('#quote');
    const quoteEl = document.createElement('p');
    const authorEl = document.createElement('p');

    quoteEl.textContent = response_text.content;
    authorEl.textContent = response_text.author;

    containerEl.appendChild(quoteEl);
    containerEl.appendChild(authorEl);

}

displayQuote();