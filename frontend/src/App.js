import './App.css';
import ExposeCell from './Expose';
import {Container, InputGroup, FormControl} from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <div className="App-Grid">
        <div className="App-LeftPane">
          <div>
            <table>
              <tr><td>Latest</td></tr>
              <tr><td>Misformation  </td></tr>
              <tr><td>Misleading Headlines</td></tr>
            </table>
          </div>
        </div>
        <div className="App-FeedPane">
          <div style={{ height: "3.4em", fontSize: "1.2em", padding: "0.8em", borderBottom: "1px solid #eee"}}>
            <strong>Feed</strong>
          </div>
          <Container>
            <ExposeCell url="https://twitter.com/narendramodi/status/1353876965497872384"/>
            <ExposeCell url="https://twitter.com/BillGates/status/1359244572279201792" />
          </Container>
        </div>
        <div className="App-HighlightPane">
          <div style={{ paddingTop: '8px'}}>
            <InputGroup className="mb-1">
              <FormControl
                placeholder="Username"
                aria-label="Username"
                style={{borderRadius: "16px", margin: '8px', fontSize: '0.9em'}}
                aria-describedby="basic-addon1"
                />
            </InputGroup>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;