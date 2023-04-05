import React, { useEffect, useState } from "react";
import EChartsReact from "echarts-for-react";

export default (props) => {
	const [option, setOption] = useState({});

	useEffect(() => {
		getOption();
	}, []);

	const getOption = () => {
		const datas = props.data.sort((a, b) => Number(b.value) - Number(a.value));
		const { customOption = {} } = props;
		var attaData = []; // 数据
		var topName = []; // 名称
		var foamatData = []; //处理数据,加颜色

		datas.forEach((it, index) => {
			attaData[index] = parseFloat(it.value).toFixed(2);
			topName[index] = `${it.sortNum}  ${it.name}`;
			foamatData[index] = {
				value: attaData[index],
				itemStyle: {
					color: attaData[index] > 0 ? "#52C41A" : "#F27B5A",
				},
			};
		});

		const _option = {
			tooltip: {
				show: false,
				trigger: "axis",
				axisPointer: {
					type: "shadow",
				},
			},
			legend: {
				data: ["Profit", "Expenses", "Income"],
			},
			grid: {
				left: 30,
				right: 40,
				bottom: 15,
				top: 18,
				containLabel: true,
			},
			xAxis: [
				{
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
						lineStyle: {
							color: "red",
						},
					},
				},
			],
			yAxis: [
				{
					width: 100,
					offset: 80,
					type: "category",
					inverse: true,
					axisTick: {
						show: false,
					},
					axisLabel: {
						color: "#fff",
						align: "left",
						lineHeight: 40,
						fontSize: 16,
						fontWeight: 400,
					},
					axisLine: {
						show: true,
						lineStyle: {
							color: "#5B6C80",
						},
					},
					data: topName,
				},
				{
					//数据
					type: "category",
					name: "百分比",
					nameLocation: "start",
					nameGap: 5,
					nameTextStyle: {
						color: "#f5f5f5",
					},
					offset: 80,
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
						lineHeight: 40,
						fontSize: 16,
						fontWeight: "bold",
						padding: [0, 10, 0, 0],
					},
					data: attaData,
				},
			],
			series: [
				{
					name: "",
					type: "bar",
					barWidth: 10,
					emphasis: {
						focus: "series",
					},
					data: foamatData,
				},
			],
		};
		const mergedOption = mergeObjects(_option, customOption);
		setOption(mergedOption);
	};

	return <EChartsReact option={option} style={{ width: 400, height: 534 }} />;
};

function mergeObjects(obj1, obj2) {
	// 遍历obj2中的每一个属性
	for (let prop in obj2) {
		// 如果obj1也有该属性，则递归合并
		if (prop in obj1) {
			if (typeof obj1[prop] === "object" && typeof obj2[prop] === "object") {
				// 如果都是对象，则递归合并
				obj1[prop] = mergeObjects(obj1[prop], obj2[prop]);
			} else {
				// 否则直接替换
				obj1[prop] = obj2[prop];
			}
		} else {
			// 如果obj1没有该属性，则直接赋值
			obj1[prop] = obj2[prop];
		}
	}
	return obj1;
}
