import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { MessageDialog } from '../messageDialog';
import MyForm from '../sharedComponents/myForm';

function Login({ onLoginSuccess, service }) {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [displayError, setDisplayError] = useState(null);

	const navigate = useNavigate();

	const tryLogin = async (username, password) => {
		const response = await service.login(username, password);
		if (response.ok) {
			onLoginSuccess(username);
		}
		else if (response.status === 401) {
			setDisplayError("That username and password combination is incorrect.");
		}
		else {
			setDisplayError("An error occurred. Please try again later.")
		}
	}

	// TODO: make error messages be not a modal

	return (
		<>
			<MyForm title="Log in">
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
			</MyForm>

			<MessageDialog message={displayError} onHide={() => setDisplayError(null)} />
		</>
	);
}

export default Login;