import PropTypes from 'prop-types';
import defaultImage from '../assests/sofa.png';

const Product = ({ id, name, image, price }) => {
	console.log(id, name, image, price);

	const imageURL = image && image.url;

	return (
		<>
			<article className="product">
				<img src={imageURL || defaultImage} alt={name || 'default name'} />
				<h4>{name}</h4>
				<p>$ {price}</p>
			</article>
		</>
	);
};

Product.propTypes = {
	id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	price: PropTypes.string.isRequired,
	image: PropTypes.object.isRequired,
};

Product.defaultProps = {
	name: 'default name',
	price: 3.67,
	image: defaultImage,
};

export default Product;
