import Product from './Product';
import useFetch from './UseFetch';

const url = `https://course-api.com/react-prop-types-example`;

const Index = () => {
	const { products } = useFetch(url);
	return (
		<>
			<section className="products">
				{products.map((product) => {
					return <Product key={product.id} {...product} />;
				})}
			</section>
		</>
	);
};

export default Index;
