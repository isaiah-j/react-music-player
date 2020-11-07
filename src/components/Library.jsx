import React from 'react';
import LibrarySong from './LibrarySong';

const Library = ({ setIsPlaying, music, currentSong, setCurrentSong }) => {
	return (
		<div className="library">
			<h2>Library</h2>
			<div className="library-songs">
				{music.map((song) => {
					return (
						<LibrarySong
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
