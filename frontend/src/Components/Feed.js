import ExposeCell from './Expose';
import { Container} from 'react-bootstrap';

function Feed () {
	return (
		<div className="App-FeedPane">
			<div style={{ height: "3.4em", fontSize: "1.2em", padding: "0.8em", borderBottom: "1px solid #eee" }}>
				<strong>Feed</strong>
			</div>
			<Container>
				<ExposeCell url="https://twitter.com/narendramodi/status/1353876965497872384" />
				<ExposeCell url="https://twitter.com/BillGates/status/1359244572279201792" />
			</Container>
		</div>
	)
}

export default Feed;