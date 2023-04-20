import React from 'react';

import { NavLink, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { AddWord } from './add/add';
import { Login } from './login/login';
import { About } from './about/about';
import { List } from './list/list';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/add-word' element={<AddWord/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/list' element={<List/>}/>
      </Routes>
      <Footer />
    </>
  );
}

function Header() {
  return (
    <header className="container-fluid">
      <nav className="navbar fixed-top">
          <h1 className="navbar-brand">App Title</h1>
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
