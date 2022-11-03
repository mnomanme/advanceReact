import { useEffect, useState } from 'react';

const UseFetch = (url) => {
	const [loading, setLoading] = useState(true);
	const [meals, setMeals] = useState([]);

	const getProducts = async () => {
		const response = await fetch(url);
		const products = await response.json();

		setMeals(products.meals);
		setLoading(false);
	};

	useEffect(() => {
		getProducts();
	}, [url]);

	return { loading, meals };
};

export default UseFetch;
