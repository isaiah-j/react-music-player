import React from 'react';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const Player = () => {
	return (
		<div className="player">
			<div className="time-control">
				<p>Start Time</p>
				<input type="range" />
				<p>end time</p>
			</div>
			<div className="play-control">
				<ArrowLeftIcon fontSize="large" className="skip-back" />
				<PlayArrowIcon fontSize="large" className="play" />
				<ArrowRightIcon fontSize="large" className="skip-forward" />
			</div>
		</div>
	);
};

export default Player;
