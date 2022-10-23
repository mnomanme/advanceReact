import ErrorExample from './components/ErrorExample';
import UseStateBasics from './components/UseStateBasics';
import UseStateArray from './components/UseStateArray';
import UseStateObject from './components/UseStateObject';
import UseStateCounter from './components/UseStateCounter';

const App = () => {
	return (
		<div className="container">
			{/* <ErrorExample /> */}
			{/* <UseStateBasics /> */}
			{/* <UseStateArray /> */}
			<UseStateObject />
			<UseStateCounter />
		</div>
	);
};

export default App;
