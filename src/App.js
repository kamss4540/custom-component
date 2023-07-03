import { useEffect } from "react";
import Com from "./pages/IndustryCoverage";
// import Com from "./component/VideoPlayer";
import mockData from "./pages/Correlation/mockData";
import $ from "jquery";

window.$ = $;

function App() {
	useEffect(() => {
		document.cookie =
			"datai-gateway-token=eyJraWQiOiIyMDIzMDUxODE1MzQ0NjExMDg3Nzk3MjQzNjYyODY4NDgiLCJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsInNpZCI6ImYxNjFjYjU0ZGI0YzQ2YTlhOTViOTA1ODMwOTAwMzkyIn0.eyJyb2xlSWRzIjpbIjIwMjIxMTE4MjAzMTMxMTA0MzI2MjE5OTI3Mjk3MjI4OCJdLCJvcmdJZHMiOltdLCJucyI6ImRlZmF1bHQiLCJyZXF1ZXN0SWQiOiI5NGYwMWMzMSIsImxvZ2luQXQiOjE2ODgzNDg5NTA3NTYsInVzZXJuYW1lIjoiZGV2ZWxvcF9wZW5nZmVpIn0.ooaCUB2Q7tKOUkjNIzmO1s-szdqJMnTLY9iTOSNi5PE";
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
