import './App.css';
import Intro from './Intro.js';
import Search from './Search.js';
import GoodContainer from './GoodContainer.js';

function App() {
// Update below with correct endpoint and add useEffect
  // fetch('http://localhost:3006/')
  // .then((response) => response.json())
  // .then((data) => console.log(data));

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
