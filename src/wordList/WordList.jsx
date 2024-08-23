function WordList({ words }) {
	return (
		<main className="container-fluid">
			<table className="table">
				<thead>
					<tr>
						<th>Word</th>
						<th>Tags</th>
						<th>Notes</th>
					</tr>
				</thead>
				<tbody>
					{words.map(({ word, tags, notes }) => {
						return (
						<tr>
							<td>{word}</td>
							<td>{tags.toString()}</td>
							<td>{notes}</td>
						</tr>)
					})}
				</tbody>
			</table>
		</main>
	);
}

export default WordList;