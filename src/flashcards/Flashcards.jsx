import { useState } from "react"
import MyButton from "../sharedComponents/MyButton";

function Flashcards({ words }) {
	const [currWordIdx, setCurrWordIdx] = useState(0);

	const incrementWord = () => {
		setCurrWordIdx((currWordIdx + 1) % words.length)
	}

	const decrementWord = () => {
		setCurrWordIdx((currWordIdx - 1) % words.length)
	}

	return (
		<>
			<h1>Flashcards</h1>
			<div>{words[currWordIdx].word} : {words[currWordIdx].notes}</div>
			<MyButton onClick={decrementWord}>back</MyButton>
			<MyButton onClick={incrementWord}>next</MyButton>
		</>
	)
}

export default Flashcards