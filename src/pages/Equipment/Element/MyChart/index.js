import React, { useRef, useEffect } from "react";
import * as echarts from "echarts";
import styles from "./index.module.less";
import { Empty } from "antd";

export default (props) => {
	const { data } = props;
	// 图表容器
	const myRef = useRef(null);
	// 图表实例
	const myChart = useRef(null);

	useEffect(() => {
		// 初始化图表
		myChart.current = echarts.init(myRef.current);
	}, []);

	useEffect(() => {
		renderChart(data);
        console.log("data=>", data);
	}, [data]);

	// 渲染图表
	const renderChart = (val) => {
		const xAxisData = [];
		const seriesData = [];
		// 获取最大值
		let markLineMax = null;
		val.dataList.forEach((item) => {
			xAxisData.push(item.btime);
			seriesData.push(item.numdata);
			if (val.thresholdList && Number(item.numdata) > markLineMax) {
				markLineMax = item.numdata;
			}
		});

		// 获取阈值
		let markLine = val.thresholdList
			? val.thresholdList.map((item) => {
					if (item.value > markLineMax) {
						markLineMax = item.value;
					}
					return {
						name: item.name || "",
						label: {
							formatter: "{b}\n{c}",
						},
						yAxis: item.value,
					};
			  })
			: [];

		myChart.current.setOption({
			tooltip: {
				trigger: "axis",
				axisPointer: {
					type: "cross",
					label: {
						backgroundColor: "#6a7985",
					},
				},
			},
			xAxis: {
				type: "category",
				data: xAxisData,
				axisLabel: {
					color: "#fff",
				},
			},
			yAxis: {
				type: "value",
				name: val.name + ":" + val.unit,
				max: markLineMax,
				nameTextStyle: {
					color: "#fff",
				},
				axisLabel: {
					color: "#fff",
				},
			},
			series: [
				{
					data: seriesData,
					type: "line",
					markLine: {
						silent: true,
						lineStyle: {
							color: "#f00",
						},
						data: markLine,
					},
				},
			],
			dataZoom: [
				{
					start: 0,
					height: 15,
					bottom: 10,
				},
				{
					type: "inside",
				},
			],
		});
	};

	return (
		<div className={styles.myChart}>
			<div ref={(e) => (myRef.current = e)} className={styles.chart} />
			{data?.dataList?.length ? null : (
				<div className={styles.nodata}>
					<Empty />
				</div>
			)}
		</div>
	);
};
