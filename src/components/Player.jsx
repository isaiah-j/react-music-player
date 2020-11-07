import React, { useRef, useState } from 'react';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import PauseIcon from '@material-ui/icons/Pause';

const Player = ({ currentSong, isPlaying, setIsPlaying }) => {
	const audioRef = useRef(null);

	const [ songInfo, setSongInfo ] = useState({
		currentTime: null,
		duration: null
	});

	const dragHandler = (e) => {
		const currentTime = e.target.value;
		audioRef.current.currentTime = currentTime;
		setSongInfo({ ...songInfo, currentTime });
	};

	const getTime = (time) => {
		return Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2);
	};

	const playSongHandler = () => {
		if (isPlaying) {
			setIsPlaying(false);
			audioRef.current.pause();
		} else {
			setIsPlaying(true);
			audioRef.current.play();
		}
	};

	const timeUpdateHandler = (e) => {
		const { currentTime, duration } = e.target;
		setSongInfo({
			currentTime,
			duration
		});
	};

	return (
		<div className="player">
			<div className="time-control">
				<p>{getTime(songInfo.currentTime)}</p>
				<input
					onChange={dragHandler}
					type="range"
					min={0}
					value={songInfo.currentTime || 0}
					max={songInfo.duration}
				/>
				<p>{getTime(songInfo.duration)}</p>
			</div>
			<div className="play-control">
				<ArrowLeftIcon fontSize="large" className="skip-back" />
				{isPlaying ? (
					<PauseIcon onClick={playSongHandler} fontSize="large" className="play" />
				) : (
					<PlayArrowIcon onClick={playSongHandler} fontSize="large" className="play" />
				)}
				<ArrowRightIcon fontSize="large" className="skip-forward" />
			</div>
			<audio
				onLoadedMetadata={timeUpdateHandler}
				onTimeUpdate={timeUpdateHandler}
				ref={audioRef}
				src={currentSong.audio}
			/>
		</div>
	);
};

export default Player;
