import Com from "./FireDangerClass";

const data = [
	{ name: "杭州市", value: 50, level: "优" },
	{ name: "宁波市", value: 38, level: "优" },
	{ name: "温州市", value: 40, level: "优" },
	{ name: "嘉兴市", value: 46, level: "优" },
	{ name: "湖州市", value: 51, level: "良" },
	{ name: "绍兴市", value: 47, level: "优" },
	{ name: "金华市", value: 48, level: "优" },
	{ name: "衢州市", value: 49, level: "优" },
	{ name: "舟山市", value: 36, level: "优" },
	{ name: "台州市", value: 41, level: "优" },
	{ name: "丽水市", value: 42, level: "优" },
];

function App() {
	return <Com data={data} />;
}

export default App;
