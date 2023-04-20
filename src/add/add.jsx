import React from 'react';

export function AddWord() {
    return (
        <main className="container-fluid text-center">
        <div>
            Current user: <span id="username">Anonymous</span>
        </div>
        <div>
            Latest Activity: <span id="message"></span>
        </div>

        <h1>Add New Word</h1>

    </main>
    );
}