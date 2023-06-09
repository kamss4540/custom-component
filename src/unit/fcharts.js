import { useState, useEffect, useCallback, useRef } from "react";
import "./render.less";
export default function Render(comProps) {
	console.log("comProps_1642719617942544384=>", comProps); // comProps 在大屏中使用时有值
	const EventEmitter = window.globalEventEmitter;
	const { el = {} } = comProps;
	let { dataset = {} } = el;
	const { isVariable, expression, variable, defaultValue = [] } = dataset;

	const optionData = {
		seriesData: [
			{
				data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				name: "非居掉电报警",
			},
			{
				data: [49, 40, 460, 186, 45, 13, 0, 0, 0, 0, 0, 0],
				name: "非居低报",
			},
			{
				data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				name: "非居断电报警",
			},
			{
				data: [14, 86, 487, 260, 85, 19, 0, 0, 0, 0, 0, 0],
				name: "非居高报",
			},
			{
				data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				name: "非居传感器故障报警",
			},
		],
		xData: [
			"2023-01",
			"2023-02",
			"2023-03",
			"2023-04",
			"2023-05",
			"2023-06",
			"2023-07",
			"2023-08",
			"2023-09",
			"2023-10",
			"2023-11",
			"2023-12",
		],
	};

	useEffect(() => {
		return () => {
			echartins.current.clear();
		};
	}, []);

	const getData = useCallback(() => {
		if (isVariable) {
			//依赖变量信息
			if (!variable) {
				console.warn("请选择依赖变量!");
				return defaultValue;
			} else {
				let data = window.getDataByKey(variable);

				if (expression && expression.trim().length > 0) {
					try {
						let str = expression || "data";
						let fnStr = "return " + str;
						let fn = new Function("data", fnStr);
						data = fn(data);
						return data;
					} catch (e) {
						console.warn("变量表达式异常!");
						return defaultValue;
					}
				} else {
					console.warn("检查变量表达式!");
					return defaultValue;
				}
			}
		} else {
			// return defaultValue;
			return optionData;
		}
	});

	const [data, setData] = useState(getData());
	const [count, setCount] = useState(0);
	const echartsDom = useRef();
	const echartins = useRef();

	useEffect(() => {
		let listenFn;

		if (isVariable && variable) {
			listenFn = (data) => {
				// 取消变量类型限制
				if (Array.isArray(data) || true) {
					setCount(count + 1);
				} else {
					console.warn("请检查变量数据类型!");
				}
			};

			if (expression) {
				let val = getData();

				if (!_.isEqual(data, val)) {
					setData(val);
				}
			}

			EventEmitter.on(variable, listenFn);
		} else {
			let val = getData();
			// setData(val);
			if (!_.isEqual(data, val)) {
				setData(val);
			}
		}

		return () => {
			if (isVariable && variable && listenFn) {
				EventEmitter.removeListener(variable, listenFn);
			}
		};
	}, [
		EventEmitter,
		count,
		expression,
		getData,
		isVariable,
		setCount,
		data,
		variable,
	]);

	let color = ["#3A79EE", "#00BEB2", "#5D56E9", "#FFDB51", "#7853C0"];

	const formatSeries = (data) => {
		let totalData = [];
		data.map((item, index) => {
			let _series = {
				name: item.name,
				type: "line",
				stack: "Total",
				showSymbol: false,
				smooth: true,
				areaStyle: {},
				data: item.data,
			};
			// 数据全是0时不显示这个系列的线
			if (item.data.every((j) => j === 0)) {
				_series.lineStyle = {
					color: "rgba(0, 0, 0, 0)",
				};
			}
			totalData.push(_series);
		});

		return totalData;
	};

	const formatOption = (data) => {
		let option = {
			color,
			legend: {
				right: "auto",
				textStyle: {
					color: "#fff",
				},
			},
			tooltip: {
				trigger: "axis",
				formatter: (params) =>
					`<div><div><span>${
						params[0].axisValue
					}</span><span style="float: right;" >总计${params.reduce(
						(total, current) => total + current.data,
						0
					)}次</span></div>` +
					params
						.map(
							(item) =>
								`<div>${item.marker + item.seriesName}: ${item.data}</div>`
						)
						.join("") +
					"</div>",
			},
			grid: {
				left: "3%",
				right: "4%",
				bottom: "3%",
				containLabel: true,
			},
			xAxis: [
				{
					type: "category",
					boundaryGap: false,
					axisTick: {
						show: false,
					},
					axisLabel: {
						color: "#fff",
					},
					data: data.xData,
				},
			],
			yAxis: [
				{
					type: "value",
					minInterval: 1,
					axisLine: {
						show: false,
					},
					axisTick: {
						show: false,
					},
					splitLine: {
						lineStyle: {
							type: "dashed",
						},
					},
					axisLabel: {
						color: "#fff",
					},
				},
			],
			series: formatSeries(data.seriesData),
		};

		return option;
	};

	useEffect(() => {
		if (data) {
			echartins.current = echarts.init(echartsDom.current, "");
			let option = formatOption(data);

			echartins.current.setOption(option);
		}
	}, [data]);

	return (
		<div className="nest_area">
			{data && data.length != 0 ? (
				<div className="area" ref={echartsDom}></div>
			) : (
				<div className="nodata">
					<img
						src="/iocoss/datai/custom/1624947639074762752/images/pic／暂无数据@2x.png"
						style={{ width: 150, height: 150 }}
					/>
				</div>
			)}
		</div>
	);
}

data.map((item) => ({
	longitude: item[0],
	latitude: item[1],
	height: 1000,
	patrolTime: "2022-01-19 16:07:45",
}));
