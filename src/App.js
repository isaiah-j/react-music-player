
import React, {useState} from 'react'
import logo from './logo.svg';

import Player from './components/Player'
import Song from './components/Song'

import './styles/app.scss';

import chillHop from './data'

function App() {
  const [music, setMusic] = useState(chillHop())
  const [currentSong, setCurrentSong] = useState(music[0])
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div className="App">
      <Song currentSong={currentSong}/>
      <Player currentSong={currentSong} isPlaying={isPlaying} setIsPlaying={setIsPlaying}/>
    </div>
  );
}

export default App;
