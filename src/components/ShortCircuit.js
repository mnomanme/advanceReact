import React, { useState } from 'react';

const ShortCircuit = () => {
	const [text, setText] = useState('');
	const [isError, setIsError] = useState(false);

	const firstValue = text || 'hello world';
	const secondValue = text && 'hello world';

	return (
		<>
			<h3>short circuit</h3>
			<h2>{firstValue}</h2>
			<h2>value: {secondValue}</h2>
			<h2>{text || 'Noman'}</h2>
			<button className="btn" onClick={() => setIsError(!isError)}>
				toggle error
			</button>
			{isError && <h2>Error...</h2>}

			{isError ? (
				<p>there is an error...</p>
			) : (
				<div>
					<h2>there is no error</h2>
				</div>
			)}

			{text && <h2>hello world</h2>}
			{!text && <h2>hello world</h2>}
		</>
	);
};

export default ShortCircuit;
