import Product from './Product';
import useFetch from './UseFetch';

const url = `https://www.themealdb.com/api/json/v1/1/search.php?s`;

const Index = () => {
	const { meals } = useFetch(url);
	return (
		<>
			<section className="products">
				{meals.map((meal) => {
					return <Product key={meal.idMeal} {...meal} />;
				})}
			</section>
		</>
	);
};

export default Index;
