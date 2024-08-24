import { Button } from "react-bootstrap"

function MyButton({ children, type, variant, isInline=true, onClick }) {
	const buttonStyle = {
		display: isInline ? "inline" : "block",
	}

	
	return (
		<Button className="mb-3 mx-3" style={ buttonStyle } type={type} variant={variant} onClick={onClick}>{children}</Button>
	)
}

export default MyButton