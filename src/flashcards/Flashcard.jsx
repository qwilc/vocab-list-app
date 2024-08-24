
function Flashcard({ text, onClick }) {
	const cardStyle = {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		fontSize: "xx-large", // TODO: resize based on amount of text
		margin: "2rem auto",
		height: "50vh",
		width: "75vh",
		backgroundColor: "var(--block-color)",
		cursor: "pointer",
		borderRadius: "20px"
	}

	return (
		<div style={cardStyle} onClick={onClick}>
			<div>
				{text}
			</div>
		</div>
	)
}

export default Flashcard