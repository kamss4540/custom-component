import AnalysisTree from "./AnalysisTree";
import mockData from "./mockData2";

const App = () => {
	return (
		<div style={{ height: "100%", overflow: "auto" }}>
			<AnalysisTree data={mockData} />
		</div>
	);
};

export default App;
