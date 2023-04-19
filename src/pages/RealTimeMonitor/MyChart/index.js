import React, { useRef, useEffect, useState } from "react";
import * as echarts from "echarts";
import styles from "./index.module.less";
import $ from "jquery";
import mockData from "./mockData";
import { Radio, DatePicker, Row, Col, Button } from "antd";
import moment from "moment";

const { RangePicker } = DatePicker;

export default (props) => {
	// 图表容器
	const myRef = useRef(null);
	// 图表实例
	const myChart = useRef(null);

	// 日期选择器
	const [date, setDate] = useState([
		moment().subtract(1, "days"),
		moment().subtract(0, "days"),
	]);
	// Radio选中值
	const [radioValue, setRadioValue] = useState("1");

	useEffect(() => {
		// 初始化图表
		myChart.current = echarts.init(myRef.current);
		getData();
	}, []);

	// 获取数据
	const getData = () => {
		const { itemType, equipmentId, kpi } = props.data;
		const params = {
			itemType,
			equipmentId,
			startTime: date[0].format("YYYY-MM-DD HH:mm:ss"),
			endTime: date[1].format("YYYY-MM-DD HH:mm:ss"),
			typeName: kpi,
		};
		$.ajax({
			url: "http://10.35.60.136:32119/easydata/api/center/JK1642694429480001536",
			type: "GET",
			data: params,
			dataType: "json",
			success: (res) => {
				console.log("success", res);
				if (res.code == "200") {
					const _data = res.data[0];
					_data && renderChart(_data);
				}
			},
		});
	};

	// 渲染图表
	const renderChart = (val) => {
		const xAxisData = [];
		const seriesData = [];
		// 获取最大值
		let markLineMax = null;
		val.dataList.forEach((item) => {
			xAxisData.push(item.btime);
			seriesData.push(item.numdata);
			if (val.thresholdList && item.numdata > markLineMax) {
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

	const optionsWithDisabled = [
		{ label: "24小时", value: "1" },
		{ label: "7天", value: "2" },
		{ label: "30天", value: "3" },
	];

	const onRadioChange = ({ target: { value } }) => {
		setRadioValue(value);
		let temp = [];
		switch (value) {
			case "1":
				temp = [moment().subtract(1, "days"), moment().subtract(0, "days")];
				break;
			case "2":
				temp = [moment().subtract(7, "days"), moment().subtract(0, "days")];
				break;
			case "3":
				temp = [moment().subtract(30, "days"), moment().subtract(0, "days")];
				break;
			default:
				break;
		}
		setDate(temp);
	};

	const onRangePickerChange = (dates, dateStrings) => {
		setDate(dates);
		setRadioValue(0);
	};

	const onClick = () => {
		getData();
	};

	return (
		<div>
			<Row gutter={16}>
				<Col span={10}>
					<Radio.Group
						value={radioValue}
						options={optionsWithDisabled}
						onChange={onRadioChange}
						optionType="button"
						buttonStyle="solid"
					/>
				</Col>
				<Col span={10}>
					<RangePicker showTime value={date} onChange={onRangePickerChange} />
				</Col>
				<Col span={4}>
					<Button onClick={onClick}>查询</Button>
				</Col>
			</Row>

			<div ref={(e) => (myRef.current = e)} className={styles.chart} />
		</div>
	);
};
