import React from 'react';

const LibrarySong = ({ audioRef, setIsPlaying, isPlaying, currentSong, setCurrentSong, song, handleSongChange }) => {
	const changeSongHandler = async () => {
		if (song.id == currentSong.id) return;

		currentSong.active = false;
		song.active = true;

		await setCurrentSong(song);

		// if (isPlaying) {
		// 	const playPromise = audioRef.current.play();
		// 	if (playPromise !== undefined) {
		// 		playPromise.then((audio) => {
		// 			audioRef.current.play();
		// 		});
		// 	}
		// }

		if (isPlaying) {
			await audioRef.current.play();
		}
	};

	return (
		<div onClick={changeSongHandler} className={`library-song ${song.active ? 'selected' : ''}`}>
			<img src={song.cover} alt="" />
			<div className="song-description">
				<h3>{song.name}</h3>
				<h4>{song.artist}</h4>
			</div>
		</div>
	);
};

export default LibrarySong;
