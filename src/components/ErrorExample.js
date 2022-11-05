import React from 'react';

const ErrorExample = () => {
	let title = 'error example';

	const handleClick = () => {
		title = 'hello people';
		console.log(title);
	};
	return (
		<React.Fragment>
			<h3>{title}</h3>
			<button type="button" className="btn" onClick={handleClick}>
				change error
			</button>
		</React.Fragment>
	);
};

export default ErrorExample;
