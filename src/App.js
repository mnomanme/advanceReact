import MultipleReturns from './components/MultipleReturns';
import ShortCircuit from './components/ShortCircuit';
import ShowHide from './components/ShowHide';

const App = () => {
	return (
		<div className="container">
			<h2>Conditional Rendering</h2>
			<MultipleReturns />
			<ShortCircuit />
			<ShowHide />
		</div>
	);
};

export default App;
