import MyForm from "../sharedComponents/MyForm";
import MyTextInput from "../sharedComponents/MyTextInput";
import { useNavigate } from "react-router-dom";
import MyButton from "../sharedComponents/MyButton";

function Register({ service, onSuccess }) {
	const navigate = useNavigate();

	const handleRegister = async (username, password) => {
		const response = await service.register(username, password);
		if (response.ok) {
			onSuccess(username);
		}
	}

	// TODO: password validation and error handling

	return (
		<MyForm title="Register" onSubmit={handleRegister}>
			<MyTextInput
				id="username"
				type="text"
				label="Username"
				placeholder="Enter username"
			/>
			<MyTextInput
				id="password"
				type="text"
				label="Password"
				placeholder="Enter password"
			/>
			<MyTextInput
				id="confirm-password"
				type="text"
				label="Confirm Password"
				placeholder="Re-enter password"
			/>
			<MyButton type="submit" isInline={false}>
				Register
			</MyButton>
			<MyButton variant="secondary" onClick={() => navigate('/login')}>
				Already have an account
			</MyButton>
		</MyForm>
	)
}

export default Register;