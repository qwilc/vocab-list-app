(async () => {
    let authenticated = false;
    const username = localStorage.getItem('username');
    if (username) {
      const user = await getUser(username);
      authenticated = user?.authenticated;
    }
  
    if (authenticated) {
        window.location.href = "add-word.html"
    }
  })();

async function login() {
    loginOrRegister(`/api/auth/login`);
}
  
async function register() {
    loginOrRegister(`/api/auth/register`);
}
  
async function loginOrRegister(endpoint) {
    const username = document.querySelector('#username')?.value;
    const password = document.querySelector('#userPassword')?.value;
    const response = await fetch(endpoint, {
        method: 'post',
        body: JSON.stringify({ username: username, password: password }),
        headers: {
        'Content-type': 'application/json; charset=UTF-8',
        },
    });
    const body = await response.json();

    if (response?.status === 200) {
        localStorage.setItem('username', username);
        window.location.href = 'add-word.html';
    } else {
        const modalEl = document.querySelector('#msgModal');
        modalEl.querySelector('.modal-body').textContent = `⚠ Error: ${body.msg}`;
        const msgModal = new bootstrap.Modal(modalEl, {});
        msgModal.show();
    }
}

async function getUser(email) {
    const response = await fetch(`/api/user/${email}`);
    if (response.status === 200) {
      return response.json();
    }
  
    return null;
}