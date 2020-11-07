
import React, {useState} from 'react'
import logo from './logo.svg';

import Player from './components/Player'
import Song from './components/Song'
import Library from './components/Library'
import Nav from './components/Nav'


import './App.css'
import './styles/app.scss';

import chillHop from './data'

function App() {
  const audioRef = React.useRef(null)
  const [music, setMusic] = useState(chillHop())
  const [currentSong, setCurrentSong] = useState(music[0])
  const [isPlaying, setIsPlaying] = useState(false)
  const [isLibraryOpen, setIsLibraryOpen] = useState(false)
  

  return (
    <div className="App">
      <Nav setIsLibraryOpen={setIsLibraryOpen} isLibraryOpen={isLibraryOpen}/>
      <Song currentSong={currentSong}/>
      <Player setCurrentSong={setCurrentSong} music={music} audioRef={audioRef} currentSong={currentSong} isPlaying={isPlaying} setIsPlaying={setIsPlaying}/>
      <Library setIsLibraryOpen={setIsLibraryOpen} isLibraryOpen={isLibraryOpen} isPlaying={isPlaying} audioRef={audioRef} setIsPlaying={setIsPlaying} music={music} currentSong={currentSong} setCurrentSong={setCurrentSong}/>
    </div>
  );
}

export default App;
