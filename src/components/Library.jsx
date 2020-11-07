import React from 'react';
import LibrarySong from './LibrarySong';

const Library = ({ isLibraryOpen, audioRef, setIsPlaying, isPlaying, music, currentSong, setCurrentSong }) => {
	return (
		<div className={`library ${isLibraryOpen ? 'isOpen' : ''}`}>
			<h2>Library</h2>
			<div className="library-songs">
				{music.map((song) => {
					return (
						<LibrarySong
							isPlaying={isPlaying}
							audioRef={audioRef}
							setIsPlaying={setIsPlaying}
							currentSong={currentSong}
							setCurrentSong={setCurrentSong}
							key={song.id}
							song={song}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default Library;
