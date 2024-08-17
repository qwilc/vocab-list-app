import { Button } from "react-bootstrap"

function MyButton({ children, type, variant, isInline=true, onClick }) {
	const buttonStyle = {
		display: isInline ? "inline" : "block"
	}

	// TODO: mr-3 not working?
	
	return (
		<Button className="mb-3 mr-3" style={ buttonStyle } type={type} variant={variant} onClick={onClick}>{children}</Button>
	)
}

export default MyButton