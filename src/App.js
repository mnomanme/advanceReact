import UseEffectBasics from './components/UseEffectBasics';
import UseEffectCleanup from './components/UseEffectCleanup';
import UseEffectFetchData from './components/UseEffectFetchData';

const App = () => {
	return (
		<div className="container">
			<UseEffectBasics />
			<UseEffectCleanup />
			<UseEffectFetchData />
		</div>
	);
};

export default App;
