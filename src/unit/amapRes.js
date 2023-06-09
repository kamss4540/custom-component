import React, { useRef, useEffect, useState } from "react";
import * as echarts from "echarts";
import styles from "./index.module.less";
import { Empty, Row, DatePicker } from "antd";
import locale from "./antdlocale"; // 解决DatePicker月份和星期国际化错乱的问题

const { RangePicker } = DatePicker;

export default (props) => {
	const { data } = props;
	// 图表容器
	const myRef = useRef(null);
	// 图表实例
	const myChart = useRef(null);

	const [list, setList] = useState();
	// 日期选择器
	const [date, setDate] = useState([moment().subtract(1, "day"), moment()]);

	useEffect(() => {
		// 初始化图表
		myChart.current = echarts.init(myRef.current);
	}, []);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					// 可见
				} else {
					// 不可见
					setDate([moment().subtract(1, "day"), moment()]);
				}
			},
			{
				root: null,
				rootMargin: "0px",
				threshold: 1.0,
			}
		);

		observer.observe(myRef.current);

		return () => {
			observer.unobserve(myRef.current);
		};
	}, []);

	useEffect(() => {
		if (date) {
			fetchData();
		}
	}, [date, data]);

	useEffect(() => {
		if (list?.length) {
			renderChart(list);
		}
	}, [list]);

	const fetchData = () => {
		const params = {
			startDate: date[0].format("YYYY-MM-DD HH:mm:ss"),
			endDate: date[1].format("YYYY-MM-DD HH:mm:ss"),
			code: data.code,
			pageIndex: "1",
			total: "0",
			pageSize: "9999",
			countTotal: "false",
			sort: "timestamp",
			order: "desc",
		};
		// let str = new URLSearchParams(params).toString();
		window.$.ajax({
			url: `http://124.95.178.231:9000/admin/api/historyTelemetry/listByCode`,
			data: JSON.stringify(params),
			type: "POST",
			contentType: "application/json;charset=UTF-8",
			headers: {
				Authorization:
					"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZCI6IiIsImlkIjoiNzMzNmFiN2QtYTU1ZC00YTRhLWEyMWQtMzlmZjgwYWY4YTVmIiwibmEiOiLlronnjq_nrqHnkIblkZgiLCJ0eSI6IjAiLCJwZiI6IjAiLCJsdCI6IjE2MzQwOTE1MzciLCJuYmYiOjE2MzQwOTE1MzcsImV4cCI6MTYzNDA5ODczNywiaXNzIjoiaHR0cDovLzEyNy4wLjAuMTo2MjIwIiwiYXVkIjoiaHR0cDovLzEyNy4wLjAuMTo2MjIwIn0.RKZu2ul8WDBDaxyg3rtxGtdeheQN58tnFGhx8xmoDRM",
			},
			success: (res) => {
				if (res.code == 200) {
					setList(res.data);
				}
			},
		});
	};

	// 渲染图表
	const renderChart = (val) => {
		const xAxisData = [];
		const seriesData = [];
		// 获取最大值
		let markLineMax =
			data.highThreshold == "-" ? data.thresholdUp : data.highThreshold;
		let markLineMin =
			data.lowThreshold == "-" ? data.thresholdDown : data.lowThreshold;

		val.forEach((item) => {
			xAxisData.push(item.timestamp);
			seriesData.push(item.value);
			if (data.thresholdUp && Number(item.value) > markLineMax) {
				markLineMax = Number(item.value);
			}
			if (data.thresholdDown && Number(item.value) < markLineMin) {
				markLineMin = Number(item.value);
			}
		});

		// 获取阈值
		let markLine = [];
		if (data.highThreshold !== undefined) {
			markLine.push({
				name: "高高报",
				label: {
					formatter: "{b}\t{c}",
					color: "#fff",
					// position: "insideEndTop",
				},
				yAxis: data.highThreshold,
			});
		}
		if (data.thresholdUp !== undefined) {
			markLine.push({
				name: "高报",
				label: {
					formatter: "{b}\t{c}",
					color: "#fff",
					// position: "insideEndBottom",
				},
				yAxis: data.thresholdUp,
			});
		}
		if (data.thresholdDown !== undefined) {
			markLine.push({
				name: "低报",
				label: {
					formatter: "{b}\t{c}",
					color: "#fff",
					// position: "insideEndTop",
				},
				yAxis: data.thresholdDown,
			});
		}
		if (data.lowThreshold !== undefined) {
			markLine.push({
				name: "低低报",
				label: {
					formatter: "{b}\t{c}",
					color: "#fff",
					// position: "insideEndBottom",
				},
				yAxis: data.lowThreshold,
			});
		}

		myChart.current.setOption({
			grid: {
				left: "15%",
				right: "13%",
			},
			tooltip: {
				trigger: "axis",
				axisPointer: {
					type: "cross",
					label: {
						backgroundColor: "rgba(0, 185, 239, 0.95)",
						color: "#fff",
					},
				},
				backgroundColor: "rgba(10, 9, 49, 0.88)",
				borderColor: "rgba(29, 186, 255, 0.65)",
				textStyle: {
					color: "#fff",
				},
			},
			xAxis: {
				type: "category",
				data: xAxisData,
				axisLabel: {
					color: "#fff",
				},
				axisLine: {
					show: true,
					lineStyle: {
						color: "#1178BF",
					},
				},
				axisTick: {
					show: false,
				},
			},
			yAxis: {
				type: "value",
				name: "单位：" + data.unit,
				min: markLineMin,
				max: markLineMax,
				nameTextStyle: {
					color: "#fff",
				},
				axisLabel: {
					color: "#fff",
				},
				axisLine: {
					show: true,
					lineStyle: {
						color: "#1178BF",
					},
				},
				splitLine: {
					lineStyle: {
						color: "#1DBAFF",
						opacity: 0.4,
					},
				},
				axisTick: {
					show: false,
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
					itemStyle: {
						color: "#00B9EF",
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

	const onRangePickerChange = (dates, dateStrings) => {
		setDate(dates);
	};

	return (
		<div className={styles.myChart_yx}>
			<Row className={styles.content}>
				<Row className={styles.card_header}>
					<span>{data.name}</span>
					<RangePicker
						showTime
						allowClear={false}
						locale={locale.DatePicker}
						value={date}
						onChange={onRangePickerChange}
						getPopupContainer={(trigger) => trigger.parentNode}
					/>
				</Row>
				<Row style={{ width: "100%", position: "relative" }}>
					<div
						ref={(e) => (myRef.current = e)}
						className={styles.chart}
						style={{ visibility: list?.length ? "visible" : "hidden" }}
					/>
					{list?.length ? null : (
						<div className={styles.nodata}>
							<Empty
								description="暂无数据"
								image={Empty.PRESENTED_IMAGE_SIMPLE}
							/>
						</div>
					)}
				</Row>
			</Row>
		</div>
	);
};

// 编写函数，变量data为接口的返回值，
// 函数的返回值为最终的过滤器结果，下面是一个例子
let type = getDataByKey(
	"store_group_2accde3a4cb742f0961e35075307f06d-5ed99fa5ed4649fdbe1512c983a9fb58"
).deviceType;
// 设置当前轨迹的车辆类型
setStoreData("store_group_9ip8dXfP9cuToiioodckKt-oLAXLEtvwJH53dgHgHibhY", type);
return data.data;
