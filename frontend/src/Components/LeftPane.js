import {Button} from 'react-bootstrap';

function LeftPane() {
	return (
		<div className="App-LeftPane">
			<div>
				<table>
					<tr><td>Latest</td></tr>
					<tr><td>Misformation  </td></tr>
					<tr><td>Misleading Headlines</td></tr>
					<tr>
						<td>
							<Button> Create </Button>
						</td>
					</tr>
				</table>
			</div>
		</div>
	)
}

export default LeftPane;