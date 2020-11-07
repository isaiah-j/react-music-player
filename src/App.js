
import React, {useState} from 'react'
import logo from './logo.svg';

import Player from './components/Player'
import Song from './components/Song'
import Library from './components/Library'

import './App.css'
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
      <Library setIsPlaying={setIsPlaying} music={music} currentSong={currentSong} setCurrentSong={setCurrentSong}/>
    </div>
  );
}

export default App;
