import MyForm from "../sharedComponents/MyForm";
import MyTextInput from "../sharedComponents/MyTextInput";
import MyTagInput from "../sharedComponents/MyTagInput";
import MyTextArea from "../sharedComponents/MyTextArea";

function AddWord() {
	return (
		<>
			<div className="container-fluid text-center">
				<div>
					Current user: <span id="username">Anonymous</span>
				</div>
				<div>
					Latest Activity: <span id="message"></span>
				</div>
			</div>

			<MyForm title="Add New Word">
				<MyTextInput id="word-input" label="Word" placeholder="Enter word"></MyTextInput>
				<MyTagInput id="word-tag-input" label="Tags"></MyTagInput>
				<MyTextArea id="word-description-input" label="Description" placeholder="Type any notes or definitions here"></MyTextArea>
			</MyForm>
		</>
	);
}

export default AddWord;