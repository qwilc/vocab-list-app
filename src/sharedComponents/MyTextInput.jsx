import { Form } from "react-bootstrap"

function MyTextInput({ id, type, label, placeholder, text }) {
	return (
		<>
			<Form.Group className="mb-3" controlId={id}>
				<Form.Label>{label}</Form.Label>
				<Form.Control type={type} placeholder={placeholder} />
				<Form.Text className="text-muted">{text}</Form.Text>
			</Form.Group>
		</>
	)
}

export default MyTextInput