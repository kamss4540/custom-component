import { useEffect } from "react";
import Com from "./pages/VideoSurveillance";
import { fetchCIMToken } from "./service/fetchToken";
import mockData from "./pages/VideoSurveillance/mockData";
import $ from "jquery";

window.$ = $;

function App() {
	const data = {};

	useEffect(() => {
		// fetchCIMToken()
	}, [])

	return (
		<div style={{ width: 1180, height: 860, border: "1px solid red" }}>
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
