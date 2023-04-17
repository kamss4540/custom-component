import Com from "./pages/monitorObj";
import data from "./pages/monitorObj/mockData.js";

function App() {
	return (
		<div style={{ width: 600, height: 500 }}>
			<Com data={data} />
		</div>
	);
}

export default App;
