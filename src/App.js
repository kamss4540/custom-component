import { useEffect } from "react";
import Com from "./pages/RealTimeMonitor";
import { fetchCIMToken } from "./service/fetchToken";
import mockData from "./pages/RealTimeMonitor/mockData";

function App() {
	const data = {};

	return (
		<div style={{ width: 600, height: 500 }}>
			<Com data={mockData} />
		</div>
	);
}

export default App;
