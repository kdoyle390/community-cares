import './App.css';
import Intro from './Intro.js';
import Search from './Search.js';
import GoodContainer from './GoodContainer.js';

function App() {
  return (
    <div className="App">
      <h1 id="app-name">Community Cares</h1>
      {/* add burger menu to right side with app pages */}
      <Intro />
      <Search />
      <GoodContainer />
    </div>
  );
}

export default App;
