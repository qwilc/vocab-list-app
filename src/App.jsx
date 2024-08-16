import { useState, useEffect } from 'react'
import { NavLink, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import AddWord from './addWord/AddWord';
import Login from './loginAndRegister/Login';
import Register from './loginAndRegister/Register';
import UserHome from './userHome/UserHome';
import WordListService from './service/wordListService';
import About from './about/About';
import List from './wordList/WordList';
import AuthState from './authState';

function App() {
	const [username, setUsername] = useState(localStorage.getItem('username') || null);
	const [authState, setAuthState] = useState(AuthState.Unknown);

	useEffect(() => {
		if (username) {
			const latestAuthState = (new WordListService()).getAuthState(username);
			setAuthState(latestAuthState);
		}
		else {
			setAuthState(AuthState.Unauthenticated);
		}

	}, [username]);

	// TODO: there's gotta be a better way. also it causes errors
	// const currentPath = useLocation().pathname;

	// if (currentPath !== '/login' && currentPath !== '/register' && authState !== AuthState.Authenticated) {
	//   navigate('/login');
	// }
	// else if ((currentPath === '/login' || currentPath === '/register') && authState === AuthState.Authenticated) {
	//   navigate('/home');
	// }

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
				<Route path='/list' element={<List />} />
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
