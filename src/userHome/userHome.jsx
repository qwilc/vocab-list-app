import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button';

export function UserHome({ username, onLogout }) {
    const navigate = useNavigate();
    
    return (
        <div>
          <div className='playerName'>Welcome, {username}</div>
          <Button variant='primary' onClick={() => navigate('/add-word')}>
            Add a Word
          </Button>
        <Button variant='secondary' onClick={() => onLogout()}>
            Logout
          </Button>
        </div>
    );
}