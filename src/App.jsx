import { useState, useEffect } from 'react'
import { NavLink, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import AddWord from './addWord/AddWord';
import Login from './Login';
import Register from './Register';
import UserHome from './userHome/UserHome';
import WordListService from './service/wordListService';
import About from './about/About';
import WordList from './wordList/WordList';
import AuthState from './authState';
import Flashcards from './flashcards/Flashcards';

function App() {
	const [username, setUsername] = useState(localStorage.getItem('username') || null);
	const [authState, setAuthState] = useState(AuthState.Unknown);
	const words = [ // TODO get actual data
		{
			word: "a",
			tags: ["a", "word"],
			notes: "note a",
		},
		{
			word: "b",
			tags: ["b", "word"],
			notes: "note b",
		},
		{
			word: "c",
			tags: ["c", "word"],
			notes: "note c",
		},
	];

	useEffect(() => {
		if (username) {
			const latestAuthState = (new WordListService()).getAuthState(username);
			setAuthState(latestAuthState);
		}
		else {
			setAuthState(AuthState.Unauthenticated);
		}

	}, [username]);

	return (
		<>
			<Header />
			<Routes>
				<Route path='/login?' element={
					<Login
						service={new WordListService()}
						onLogin={(username) => {
							setUsername(username);
							setAuthState(AuthState.Authenticated);
						}} />
				} />
				<Route path='/home' element={
					<UserHome
						username={username}
						onLogout={() => {
							setAuthState(AuthState.Unauthenticated);
							setUsername(null);
						}} />
				} />
				<Route path='/register' element={<Register />} />
				<Route path='/add-word' element={<AddWord />} />
				<Route path='/about' element={<About />} />
				<Route path='/list' element={<WordList words={words} />} />
				<Route path='/flashcards' element={<Flashcards words={words} />} />
			</Routes>
			<Footer />
		</>
	);
}

function Header() {
	return (
		<header>
			<nav className="navbar sticky-top">
				<h1 className="navbar-brand">Vocab List</h1>
				<menu className="navbar-nav">
					<li className="nav-item">
						<NavLink className="nav-link active" to="add-word">Add Word</NavLink>
					</li>
					<li className="nav-item">
						<NavLink className="nav-link" to="list">My List</NavLink>
					</li>
					<li className="nav-item">
						<NavLink className="nav-link" to="flashcards">Flashcards</NavLink>
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
		<footer className="container-fluid fixed-bottom">
			<span>Quincy Wilcox</span>
			<NavLink to="https://github.com/qwilc/startup">GitHub</NavLink>
		</footer>
	);
}

export default App;
