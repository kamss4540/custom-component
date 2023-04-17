import Com from "./AlertTracking";

const data = [
	{ num: 1025, statusName: "待处置", statusCode: "1" },
	{ num: 2224, statusName: "已响应", statusCode: "4" },
	{ num: 5000, statusName: "处置中", statusCode: "2" },
	{ num: 109955, statusName: "处置完成", statusCode: "3" },
	{ num: 100, statusName: "无需处置", statusCode: "5" },
];

function App() {
	return <Com data={data} />;
}

export default App;
