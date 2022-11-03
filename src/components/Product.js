import PropTypes from 'prop-types';
import defaultImage from '../assests/sofa.png';

const Product = ({ strMeal, strCategory, strArea, strMealThumb }) => {
	console.log(strMeal, strCategory, strArea, strMealThumb);

	const imageURL = strMealThumb && strMealThumb;

	return (
		<>
			<article className="product">
				<img src={imageURL || defaultImage} alt={strMeal || 'default name'} />
				<h4>{strMeal}</h4>
				<h6>{strCategory}</h6>
				<p>
					<small>{strArea} </small>
				</p>
			</article>
		</>
	);
};

Product.propTypes = {
	strMeal: PropTypes.string.isRequired,
	strCategory: PropTypes.string.isRequired,
	strArea: PropTypes.string.isRequired,
	strMealThumb: PropTypes.string.isRequired,
};

Product.defaultProps = {
	strMeal: 'default name',
	strCategory: 'default category',
	strArea: 'default area',
	strMealThumb: defaultImage,
};

export default Product;
