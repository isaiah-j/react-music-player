import React from 'react';

const LibrarySong = ({ setIsPlaying, currentSong, setCurrentSong, song, handleSongChange }) => {
	const changeSongHandler = async () => {
		if (song.id == currentSong.id) return;

		await setCurrentSong(song);
		await setIsPlaying(false);
	};

	return (
		<div onClick={changeSongHandler} className="library-song">
			<img src={song.cover} alt="" />
			<div className="song-description">
				<h3>{song.name}</h3>
				<h4>{song.artist}</h4>
			</div>
		</div>
	);
};

export default LibrarySong;
