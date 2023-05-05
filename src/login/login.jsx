import React from 'react';

import { Unauthenticated } from './unauthenticated';
import { Authenticated } from './authenticated';
import { AuthState } from './authState'; 

export function Login({ username, authState, onAuthChange }) {
    return (
        <main className="container-fluid text-center">
            <div id="login">
                {authState !== AuthState.Unknown && <h1>Welcome</h1>}
                {console.log(authState)}
                {authState === AuthState.Authenticated && (
                    <Authenticated 
                        username={username} 
                        onLogout={() => onAuthChange(username, AuthState.Unauthenticated)} 
                    />
                )}
                {authState === AuthState.Unauthenticated && (
                    <Unauthenticated
                        username = {username}
                        onLogin={(loginUserName) => {
                            onAuthChange(loginUserName, AuthState.Authenticated);
                        }}
                    />
                )}
            </div>
        </main>
    );
}