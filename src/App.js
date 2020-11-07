import logo from './logo.svg';

import Player from './components/Player'
import Song from './components/Song'

import './styles/app.scss';



function App() {
  return (
    <div className="App">
      <Song/>
      <Player />
    </div>
  );
}

export default App;
