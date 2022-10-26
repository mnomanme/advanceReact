import React, { useEffect, useState } from 'react';

const UseEffectCleanup = () => {
	const [size, setSize] = useState(window.innerWidth);
	console.log(size);

	const checkSize = () => {
		setSize(window.innerWidth);
	};

	useEffect(() => {
		console.log('useEffect');
		window.addEventListener('resize', checkSize);

		// return () => {
		// 	console.log('cleanup');
		// 	window.removeEventListener('resize', checkSize);
		// };
	}, []);

	console.log('render');

	return (
		<>
			<h3>useEffect cleanup</h3>
			<h2>window</h2>
			<h2>{size} PX</h2>
		</>
	);
};

export default UseEffectCleanup;
