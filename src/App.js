import MultipleReturns from './components/MultipleReturns';
import ShortCircuit from './components/ShortCircuit';

const App = () => {
	return (
		<div className="container">
			<h2>Conditional Rendering</h2>
			<MultipleReturns />
			<ShortCircuit />
		</div>
	);
};

export default App;
