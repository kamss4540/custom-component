import { useEffect } from "react";
import Com from "./component/AdressInput";
// import Com from "./component/VideoPlayer";
import mockData from "./pages/IndustryCoverage/mockData";
import $ from "jquery";

window.$ = $;

function App() {
	useEffect(() => {
		document.cookie =
			"datai-gateway-token=eyJraWQiOiIyMDIzMDUxODE1MzQ0NjExMDg3Nzk3MjQzNjYyODY4NDgiLCJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsInNpZCI6IjgxMzA3Y2EzMDgyOTRkNGNhZjJkZGNmMWZmMjc4MDdkIn0.eyJyb2xlSWRzIjpbIjIwMjIxMTE4MjAzMTMxMTA0MzI2MjE5OTI3Mjk3MjI4OCJdLCJvcmdJZHMiOltdLCJucyI6ImRlZmF1bHQiLCJyZXF1ZXN0SWQiOiI4OTI2MzkyNyIsImxvZ2luQXQiOjE2ODkyMTI4Njg1NjMsInVzZXJuYW1lIjoiZGV2ZWxvcF9wZW5nZmVpIn0.qMMcq8GrGM-mJ4zTFc-rPLoiUIgEF_30ySJEfNg8znU";
	}, []);

	return (
		<div
			style={{
				width: 1095,
				height: 300,
				border: "1px solid red",
				position: "absolute",
				left: 50,
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
