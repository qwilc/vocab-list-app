import { useState } from "react"
import MyButton from "../sharedComponents/MyButton";
import Flashcard from "./Flashcard";

const _ = require("lodash");

function Flashcards({ words }) {
	const [shuffledWords, setShuffledWords] = useState(words);
	const [currWordIdx, setCurrWordIdx] = useState(0);
	const [showWord, setShowWord] = useState(false);
	const currText = showWord ? shuffledWords[currWordIdx].word : shuffledWords[currWordIdx].notes;

	const shuffleWords = () => {
		setShuffledWords(_.shuffle(words));
	}

	const incrementWord = () => {
		setShowWord(false);
		setCurrWordIdx((currWordIdx + 1) % words.length);
	}

	const decrementWord = () => {
		setShowWord(false);
		setCurrWordIdx((words.length + (currWordIdx - 1)) % words.length);
	}

	return (
		<>
			<h1>Flashcards</h1>
			<Flashcard text={currText} onClick={() => setShowWord(!showWord)} />
			<div style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
				<div>
					<MyButton onClick={decrementWord}>🢀</MyButton>
					<MyButton onClick={incrementWord}>🢂</MyButton>
				</div>
				<div>
					<MyButton onClick={shuffleWords}>Shuffle</MyButton>
				</div>
			</div>

		</>
	)
}

export default Flashcards