import React from 'react';

const Nav = ({ isLibraryOpen, setIsLibraryOpen }) => {
	const handleOpen = () => {
		setIsLibraryOpen(!isLibraryOpen);
	};
	return (
		<nav>
			<h1>Lofi</h1>
			<button onClick={handleOpen}>Library</button>
		</nav>
	);
};

export default Nav;
