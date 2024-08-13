import React from 'react';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { MessageDialog } from '../messageDialog';
import { WordListService } from '../../service/wordListService';

export function Login({ onLoginSuccess }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [displayError, setDisplayError] = useState(null);

    const navigate = useNavigate();

    const tryLogin = (username, password) => {
        const response = await WordListService.login(username, password);
        onLoginSuccess(username);
    }

    return (
        <>
            <p>Log in</p>
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
                <Button onClick={() => tryLogin(username, password)}>
                    Login
                </Button>
                <Button variant="secondary" onClick={() => navigate('/register')}>
                    Register
                </Button>
            </div>

            <MessageDialog message={displayError} onHide={() => setDisplayError(null)} />
        </>
    );
}