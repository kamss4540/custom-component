import { useEffect } from "react";
import Com from "./pages/CustomList";
import { fetchCIMToken } from "./service/fetchToken";
import mockData from "./pages/CustomList/mockData";

function App() {
	const data = {};

	return (
		<div style={{ width: 779, height: 300, border: "1px solid red" }}>
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
