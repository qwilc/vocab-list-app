import { useState } from "react";
import { Form } from "react-bootstrap"
import { WithContext as ReactTags, SEPARATORS } from "react-tag-input"

function MyTagInput({ id, type, label, placeholder, text }) {
	// TODO: make tag input work and format it
	const [tags, setTags] = useState ([]);

	const handleDelete = (index) => {
		setTags(tags.filter((_, i) => i !== index));
	};

	const onTagUpdate = (index, newTag) => {
		const updatedTags = [...tags];
		updatedTags.splice(index, 1, newTag);
		setTags(updatedTags);
	};

	const handleAddition = (tag) => {
		setTags((prevTags) => {
			return [...prevTags, tag];
		});
	};

	const handleDrag = (tag, currPos, newPos) => {
		const newTags = tags.slice();

		newTags.splice(currPos, 1);
		newTags.splice(newPos, 0, tag);

		// re-render
		setTags(newTags);
	};

	const handleTagClick = (index) => {
		console.log('The tag at index ' + index + ' was clicked');
	};

	const onClearAll = () => {
		setTags([]);
	};

	return (
		<>
			<ReactTags
				tags={tags}
				// suggestions={suggestions}
				separators={[SEPARATORS.ENTER, SEPARATORS.COMMA]}
				handleDelete={handleDelete}
				handleAddition={handleAddition}
				handleDrag={handleDrag}
				handleTagClick={handleTagClick}
				onTagUpdate={onTagUpdate}
				inputFieldPosition="bottom"
				editable
				clearAll
				onClearAll={onClearAll}
			/>
			<Form.Group className="mb-3" controlId={id}>
				<Form.Label>{label}</Form.Label>
				<Form.Control type={type} placeholder={placeholder} />
				<Form.Text className="text-muted">{text}</Form.Text>
			</Form.Group>
		</>
	)
}

export default MyTagInput