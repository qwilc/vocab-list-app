import { useState } from 'react';

import Button from 'react-bootstrap/Button';
import { MessageDialog } from '../messageDialog';

export function Unauthenticated(props) {
    const [username, setUsername] = useState(props.username);
    const [password, setPassword] = useState('');
    const [displayError, setDisplayError] = useState(null);

    async function login() {
        loginOrRegister(`/api/auth/login`);
    }

    async function register() {
        loginOrRegister(`/api/auth/register`);
    }

    async function loginOrRegister(endpoint) {
        const response = await fetch(endpoint, {
            method: 'post',
            body: JSON.stringify({ email: username, password: password }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        if (response?.status === 200) {
            localStorage.setItem('username', username);
            props.onLogin(username);
        } else {
            const body = await response.json();
            setDisplayError(`⚠ Error: ${body.msg}`);
        }
    }

    return (
        <>
            <p>Please log in</p>
            <div>
                <input
                    className='form-control'
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                />
            </div>
            <div>
                <input
                    className='form-control'
                    type="password"
                    id="userPassword"
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                />
            </div>
            <div>
                <Button onClick={() => login()}>
                    Login
                </Button>
                <Button onClick={() => register()}>
                    Register
                </Button>
            </div>

            <MessageDialog message={displayError} onHide={() => setDisplayError(null)} />
        </>
    )
}