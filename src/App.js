import { useEffect } from "react";
import Com from "./pages/Correlation";
import { fetchCIMToken } from "./service/fetchToken";
import mockData from "./pages/Correlation/mockData";

function App() {
	const data = {};

	return (
		<div style={{ width: 600, height: 300 }}>
			<Com
				data={mockData}
				config={{
					transform: "translate(4px, 7px)",
					position: "absolute",
					width: "1031px",
					height: "300px",
					opacity: 100,
				}}
			/>
		</div>
	);
}

export default App;
