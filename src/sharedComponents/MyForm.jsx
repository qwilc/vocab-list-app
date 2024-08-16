import Form from 'react-bootstrap/Form';

function MyForm({ title, children }) {
	return (
		<>
			<Form>
				<h2>{title}</h2>
				{children}
			</Form>
		</>
	)
}

export default MyForm;