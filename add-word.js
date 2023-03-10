usernameEl = document.querySelector("#username")
usernameEl.textContent = localStorage.getItem('username') ?? 'Anonymous';