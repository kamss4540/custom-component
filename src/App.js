import { useEffect } from "react";
import Com from "./pages/Correlation";
// import Com from "./component/VideoPlayer";
import mockData from "./pages/Correlation/mockData";
import $ from "jquery";

window.$ = $;

function App() {
	useEffect(() => {
		document.cookie =
			"datai-gateway-token=eyJraWQiOiIyMDIzMDIwMzEwMjIzNTEwNzEwMTI4MjExMjQzODY4MTYiLCJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsInNpZCI6ImJlNDk4YmFlMDdhMzQ1MTNhYzA0NGJkZDRhZDZlNmU4In0.eyJyb2xlSWRzIjpbIjIwMjIxMTE4MjAzMTMxMTA0MzI2MjE5OTI3Mjk3MjI4OCJdLCJvcmdJZHMiOltdLCJucyI6ImRlZmF1bHQiLCJyZXF1ZXN0SWQiOiIzNjhjZDRhMiIsImxvZ2luQXQiOjE2ODI1NTk1MzcwNTUsInVzZXJuYW1lIjoiZGV2ZWxvcC14emgifQ.0M8xZB-hTK2SD3kT5H3O1Dtfc_3WkOCHtbXMGfIKjMs";
	}, []);

	return (
		<div
			style={{
				width: 1095,
				height: 300,
				border: "1px solid red",
				position: "absolute",
				left: 500,
			}}
		>
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
