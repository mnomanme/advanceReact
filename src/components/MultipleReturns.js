import React, { useEffect, useState } from 'react';

const url = `https://api.github.com/users/mnomanme`;

const MultipleReturns = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);
	const [user, setUser] = useState('default user');

	useEffect(() => {
		// setIsLoading(true);
		fetch(url)
			.then((res) => {
				if (res.status >= 200 && res.status <= 299) {
					return res.json();
				} else {
					setIsLoading(false);
					setIsError(true);
					throw new Error(res.statusText);
				}
			})
			.then((user) => {
				console.log(user);
				const { login } = user;
				setUser(login);
				setIsError(false);
				setIsLoading(false);
			})
			.catch((err) => console.log(err));
	}, []);

	if (isLoading) {
		return (
			<>
				<h2>loading.....</h2>
			</>
		);
	}
	if (isError) {
		return (
			<>
				<h2>Error.....</h2>
			</>
		);
	}
	return (
		<>
			<h3>multiple returns</h3>
			<h2>{user}</h2>
		</>
	);
};

export default MultipleReturns;
