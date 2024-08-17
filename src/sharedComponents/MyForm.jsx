import Form from 'react-bootstrap/Form';

function MyForm({ title, children, onSubmit }) {
	// TODO: make it look better on wide screens

	return (
		<div className="flex justify-center my-3 mx-auto w-75">
			<Form noValidate onSubmit={onSubmit}>
				<h2 className='text-center'>{title}</h2>
				{children}
			</Form>
		</div>
	)
}

export default MyForm;