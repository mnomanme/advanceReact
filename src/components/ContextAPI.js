import React, { useState } from 'react';
import { useContext } from 'react';
import { data } from '../data';

const PersonContext = React.createContext();

// two components - Provider, Consumer

const ContextAPI = () => {
	const [people, setPeople] = useState(data);

	const removePerson = (id) => {
		setPeople((people) => {
			return people.filter((person) => person.id !== id);
		});
	};

	return (
		<PersonContext.Provider value={{ removePerson, people }}>
			<h3>context API / useContext</h3>
			<List />
		</PersonContext.Provider>
	);
};

const List = () => {
	const mainData = useContext(PersonContext);
	console.log(mainData);

	return (
		<>
			{mainData.people.map((person) => {
				return <SinglePerson key={person.id} {...person} />;
			})}
		</>
	);
};

const SinglePerson = ({ id, name }) => {
	// const data = useContext(PersonContext);
	// console.log(data);
	const { removePerson } = useContext(PersonContext);

	return (
		<>
			<div className="item">
				<h4>{name}</h4>
				<button onClick={() => removePerson(id)}>remove</button>
			</div>
		</>
	);
};

export default ContextAPI;
