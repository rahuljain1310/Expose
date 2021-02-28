import { InputGroup, FormControl } from 'react-bootstrap';

function HighlightPane() {
	return (
		<div className="App-HighlightPane">
			<div style={{ paddingTop: '8px' }}>
				<InputGroup className="mb-1">
					<FormControl
						placeholder="Username"
						aria-label="Username"
						style={{ borderRadius: "16px", margin: '8px', fontSize: '0.9em' }}
						aria-describedby="basic-addon1"
					/>
				</InputGroup>
			</div>
		</div>)
}

export default HighlightPane;
