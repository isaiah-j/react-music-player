import React, { useRef, useState, useEffect } from 'react';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import PauseIcon from '@material-ui/icons/Pause';

import PropTypes from 'prop-types';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';

const PrettoSlider = withStyles({
	root: {
		color: '#bd93f9',
		height: 8
	},
	thumb: {
		height: 24,
		width: 24,
		backgroundColor: '#fff',
		border: '2px solid currentColor',
		marginTop: -8,
		marginLeft: -12,
		'&:focus, &:hover, &$active': {
			boxShadow: 'inherit'
		}
	},
	active: {},
	valueLabel: {
		left: 'calc(-50% + 4px)'
	},
	track: {
		height: 8,
		borderRadius: 4
	},
	rail: {
		height: 8,
		borderRadius: 4
	}
})(Slider);

const Player = ({ music, audioRef, setCurrentSong, currentSong, isPlaying, setIsPlaying }) => {
	let handleSkip = async (direction) => {
		let index = music.findIndex((song) => {
			return song.id === currentSong.id;
		});

		if (direction == 'skip-back' && index > 0) {
			index--;
		} else if (direction == 'skip-forward' && index < music.length - 1) {
			index++;
		} else {
			if (index == 0) {
				index = music.length - 1;
			} else {
				index = 0;
			}
		}

		let nextSong = music[index];

		currentSong.active = false;

		nextSong.active = true;

		await setCurrentSong(nextSong);

		if (isPlaying) {
			await audioRef.current.play();
		}
	};

	const [ songInfo, setSongInfo ] = useState({
		currentTime: 0,
		duration: 0
	});

	const dragHandler = (e, val) => {
		audioRef.current.currentTime = val;
		setSongInfo({ ...songInfo, val });
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
		if (currentTime == duration) {
			return handleSkip('skip-forward');
		}

		setSongInfo({
			currentTime,
			duration
		});
	};

	return (
		<div className="player">
			<div className="time-control">
				<p>{getTime(songInfo.currentTime)}</p>
				{/* <input
					onChange={dragHandler}
					type="range"
					min={0}
					value={songInfo.currentTime}
					max={songInfo.duration}
				/> */}
				<PrettoSlider
					valueLabelDisplay="auto"
					onChange={dragHandler}
					min={0}
					value={Math.floor(songInfo.currentTime)}
					max={songInfo.duration}
				/>
				<p>{getTime(songInfo.duration || 0)}</p>
			</div>
			<div className="play-control">
				<ArrowLeftIcon onClick={() => handleSkip('skip-back')} fontSize="large" className="skip-back" />
				{isPlaying ? (
					<PauseIcon onClick={playSongHandler} fontSize="large" className="play" />
				) : (
					<PlayArrowIcon onClick={playSongHandler} fontSize="large" className="play" />
				)}
				<ArrowRightIcon onClick={() => handleSkip('skip-forward')} fontSize="large" className="skip-forward" />
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
