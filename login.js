function login() {
    nameInputEl = document.querySelector("#name")
    localStorage.setItem("username", nameInputEl.value)
    window.location.href = "add-word.html"
}