import { Form } from "react-bootstrap"

function MyTagInput({ id, type, label, placeholder, text }) {
	// TODO: make tag input work
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

export default MyTagInput