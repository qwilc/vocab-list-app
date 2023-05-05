import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button';

export function Authenticated(props) {
    const navigate = useNavigate();

    function logout() {
        fetch(`/api/auth/logout`, {
            method: 'delete',
        }).then(() => props.onLogout());
    }

    return (
        <div>
          <div className='playerName'>{props.username}</div>
          <Button variant='primary' onClick={() => navigate('/add-word')}>
            Add a Word
          </Button>
          <Button variant='secondary' onClick={() => logout()}>
            Logout
          </Button>
        </div>
    );
}