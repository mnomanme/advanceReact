import React, { useState } from 'react';

const ShortCircuit = () => {
	const [text, setText] = useState('');
	const firstValue = text || 'hello world';
	const secondValue = text && 'hello world';

	return (
		<>
			<h3>short circuit</h3>
			<h2>{firstValue}</h2>
			<h2>value: {secondValue}</h2>
			<h2>{text || 'Noman'}</h2>
			{text && <h2>hello world</h2>}
			{!text && <h2>hello world</h2>}
		</>
	);
};

export default ShortCircuit;
