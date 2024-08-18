import { Form } from "react-bootstrap"

function MyTextInput({ id, label, placeholder, text }) {
	return (
		<>
			<Form.Group className="mb-3" controlId={id}>
				<Form.Label>{label}</Form.Label>
				<Form.Control as="textarea" placeholder={placeholder} />
				<Form.Text className="text-muted">{text}</Form.Text>
			</Form.Group>
		</>
	)
}

export default MyTextInput