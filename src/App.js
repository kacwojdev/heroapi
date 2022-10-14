import Nav from './Components/Nav/index';
import './App.css';

import { getBasicHeroById } from './request';

function App() {
  const name = "Kacper";

  return (
    <div className="App">
      <Nav />
    </div>
  );
}

export default App;
