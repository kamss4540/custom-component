import { useEffect } from "react";
import Com from "./pages/MyCarousel";
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
				// data={mockData}
				data={[
					{
						url: "https://t7.baidu.com/it/u=1595072465,3644073269&fm=193&f=GIF",
					},
					{
						url: "https://t7.baidu.com/it/u=1956604245,3662848045&fm=193&f=GIF",
					},
					{
						url: "https://t7.baidu.com/it/u=1819248061,230866778&fm=193&f=GIF",
					},
				]}
				config={{
					transform: "translate(4px, 7px)",
					position: "absolute",
					width: "1031px",
					height: "300px",
					opacity: 100,
				}}
				comProps={{
					css: {
						height: "300px",
					},
				}}
			/>
		</div>
	);
}

export default App;
