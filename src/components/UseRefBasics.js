import React, { useEffect, useRef } from 'react';

const UseRefBasics = () => {
	const refContainer = useRef(null);
	const divContainer = useRef(null);

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(refContainer.current.value);
		console.log(divContainer.current);
	};

	console.log(refContainer);

	useEffect(() => {
		console.log(refContainer.current);
		refContainer.current.focus();
	});

	return (
		<>
			<h3>useRef basics</h3>

			<form className="form" onSubmit={handleSubmit}>
				<div>
					<input type="text" ref={refContainer} />
					<button type="submit">submit</button>
				</div>
			</form>
			<div ref={divContainer}>
				<h2>hello world</h2>
			</div>
		</>
	);
};

export default UseRefBasics;
