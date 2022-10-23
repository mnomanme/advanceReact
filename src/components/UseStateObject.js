import React, { useState } from 'react';

const UseStateObject = () => {
	const [person, setPerson] = useState({
		name: 'noman',
		age: 26,
		message: 'good morning',
	});

	const [name, setName] = useState('noman');
	const [age, setAge] = useState(26);
	const [message, setmessage] = useState('hi, mehe');

	const changeMessage = () => {
		// setPerson({ ...person, message: 'good morning' });
		setmessage('good noon');
	};

	return (
		<>
			<h3>use state object</h3>
			<h4>{name}</h4>
			<h4>{age}</h4>
			<h4>{message}</h4>
			<button className="btn" onClick={changeMessage}>
				change message
			</button>
		</>
	);
};

export default UseStateObject;
