import './App.css';
import LeftPane from './Components/LeftPane'
import Feed from './Components/Feed'
import HighlightPane from './Components/HighlightPane'

function App() {
  return (
    <div className="App">
      <div className="App-Grid">
        <LeftPane/>
        <Feed/>
        <HighlightPane/>
      </div>
    </div>
  );
}

export default App;