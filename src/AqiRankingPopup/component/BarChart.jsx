import React, { useEffect, useState } from "react";
import EChartsReact from "echarts-for-react";

export default (props) => {
	const [option, setOption] = useState({});

	useEffect(() => {
		getOption();
	}, []);

	const getOption = () => {
		const list = props.data.sort((a, b) => Number(a.value) - Number(b.value));
		let valuelist = [];
		let names = [];
		list.forEach((item, index) => {
			valuelist.push(item.value);
			names.push(index + 1 + " " + item.name);
		});
		let _option = {
			grid: {
				left: -80,
				right: -35,
				bottom: 0,
				top: 35,
				containLabel: true,
			},
			xAxis: {
				type: "value",
				splitLine: {
					show: false,
				},
				axisLabel: {
					show: false,
				},
				axisTick: {
					show: false,
				},
				axisLine: {
					show: false,
				},
			},
			yAxis: [
				{
					//名称
					type: "category",
					offset: 0,
					position: "left",
					inverse: true,
					axisLine: {
						show: false,
					},
					axisTick: {
						show: false,
					},
					axisLabel: {
						interval: 0,
						color: "#fff",
						align: "left",
						verticalAlign: "bottom",
						lineHeight: 48,
						fontSize: 16,
						fontWeight: 400,
						padding: [0, 0, 0, 10],
					},
					data: names,
				},
				{
					//数据
					type: "category",
					offset: 0,
					position: "right",
					inverse: true,
					axisLine: {
						show: false,
					},
					axisTick: {
						show: false,
					},
					axisLabel: {
						interval: 0,
						color: "#fff",
						align: "right",
						verticalAlign: "bottom",
						lineHeight: 48,
						fontSize: 16,
						fontWeight: "bold",
						padding: [0, 10, 0, 0],
					},
					data: valuelist,
				},
			],
			series: [
				{
					data: valuelist,
					type: "bar",
					showBackground: true,
					barWidth: "8px",
					color: "#366BFF",
					showBackground: true,
					backgroundStyle: {
						color: "#87B9E7",
						borderRadius: "10",
					},
				},
			],
		};
		setOption(_option);
	};

	return <EChartsReact option={option} style={{ width: 300, height: 534 }} />;
};
