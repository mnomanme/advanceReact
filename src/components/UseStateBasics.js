import React, { useState } from 'react';

const UseStateBasics = () => {
	console.log(useState(1));

	const [text, setText] = useState('use state basic');

	const handleClick = () => {
		if (text === 'use state basic') {
			setText('hello, noman');
		} else {
			setText('use state basic');
		}
	};

	return (
		<React.Fragment>
			<h3>{text}</h3>
			<button type="button" className="btn" onClick={handleClick}>
				change basic
			</button>
		</React.Fragment>
	);
};

export default UseStateBasics;
