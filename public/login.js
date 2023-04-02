// TODO: only login if username was input (otherwise, toast/error message)
// TODO: Passwords would be cool

function login() {
    nameInputEl = document.querySelector("#name")
    localStorage.setItem("username", nameInputEl.value)
    localStorage.setItem('words', []);
    window.location.href = "add-word.html"
}