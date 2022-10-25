import React, { useState } from 'react';

const UseStateCounter = () => {
	const [value, setValue] = useState(0);
	const title = `use state counter example`;

	const reset = () => {
		setValue(0);
	};

	const complexIncrease = () => {
		setTimeout(() => {
			// setValue(value + 1);
			setValue((prevState) => {
				return prevState + 1;
			});
		}, 2000);
	};

	return (
		<>
			<h3>{title}</h3>
			<section style={{ margin: '4rem 0' }}>
				<h3>regular counter</h3>
				<h1>{value}</h1>
				<button
					className="btn"
					onClick={() => setValue(value >= 1 ? value - 1 : 0)}
				>
					decrease
				</button>
				<button className="btn" onClick={reset}>
					reset
				</button>
				<button className="btn" onClick={() => setValue(value + 1)}>
					increase
				</button>
			</section>
			<section style={{ margin: '4rem 0' }}>
				<h3>more complex counter</h3>
				<h1>{value}</h1>
				<button className="btn" onClick={complexIncrease}>
					increase later
				</button>
			</section>
		</>
	);
};

export default UseStateCounter;
