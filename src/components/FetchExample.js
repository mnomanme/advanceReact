import UseFetch from './UseFetch';

// const url = `https://course-api.netlify.app/api/javascript-store-products`;
const url = `https://jsonplaceholder.typicode.com/users`;

const FetchExample = () => {
	const { loading, products } = UseFetch(url);

	console.log(products);

	return (
		<>
			<h3>fetch example</h3>
			<h4>{loading ? 'loading...' : 'data'}</h4>
		</>
	);
};

export default FetchExample;
