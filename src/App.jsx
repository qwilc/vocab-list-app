import React from 'react';

import { NavLink, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { AddWord } from './add/add';
import { LandingPage } from './landingPage/login';
import { About } from './about/about';
import { List } from './list/list';
import { AuthState } from './authState';

function App() {
  const [username, setUsername] = React.useState(localStorage.getItem('username') || '');
  const [authState, setAuthState] = React.useState(AuthState.Unknown);

  React.useEffect(() => {
    if (username) {
      getUser(username)
        .then((user) => {
          const state = user?.authenticated ? AuthState.Authenticated : AuthState.Unauthenticated;
          setAuthState(state);
        });
    }
    else {
      setAuthState(AuthState.Unauthenticated);
    }

  }, [username]);

  async function getUser(email) {
    const response = await fetch(`/api/user/${email}`);
    if (response.status === 200) {
      return response.json();
    }

    return null;
  }

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={
          <LandingPage
            username={username}
            authState={authState}
            onAuthChange={(username, authState) => {
              setAuthState(authState);
              setUsername(username);
            }}
          />
        } />
        <Route path='/home' element={<UserHome />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/add-word' element={<AddWord />} />
        <Route path='/about' element={<About />} />
        <Route path='/list' element={<List />} />
      </Routes>
      <Footer />
    </>
  );
}

function Header() {
  return (
    <header className="container-fluid">
      <nav className="navbar fixed-top">
        <h1 className="navbar-brand">Vocab List</h1>
        <menu className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link active" to="add-word">Add Word</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="list">My List</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="about">About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="">Logout</NavLink>
          </li>
        </menu>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="container-fluid">
      <span>Quincy Wilcox</span>
      <NavLink to="https://github.com/qwilc/startup">GitHub</NavLink>
    </footer>
  );
}

export default App;
