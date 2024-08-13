import React from 'react'
import { WordListService } from '../../service/wordListService';
import { AuthState } from '../authState';
import { Login } from './login';
import { UserHome } from './userHome';

function LandingPage({ username, authState, onAuthChange }) {
	return (
		<div className="container-fluid text-center">
			{authState !== AuthState.Unknown && <h1>Welcome</h1>}
			{console.log(authState)}
			{authState === AuthState.Authenticated && (
				<UserHome
					username={username}
					onLogout={() => {
						WordListService.logout();
						onAuthChange(username, AuthState.Unauthenticated);
					}}
				/>
			)}
			{authState === AuthState.Unauthenticated && (
				<Login onLoginSuccess={(username) => {
					onAuthChange(username, AuthState.Authenticated);
				}}/>
			)}
		</div>
	)
}

export default LandingPage