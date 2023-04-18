import React, { useRef, useEffect, useState } from "react";
import * as echarts from "echarts";
import styles from "./index.module.less";
import $ from "jquery";
import mockData from "./mockData";
import { Radio, DatePicker, Row, Col } from "antd";
import moment from "moment";

const { RangePicker } = DatePicker;

export default (props) => {
	const myRef = useRef(null);
	const myChart = useRef(null);
	const [data, setData] = useState({});
	// 日期选择器
	const [date, setDate] = useState([
		moment().subtract(1, "days"),
		moment().subtract(0, "days"),
	]);

	useEffect(() => {
		myChart.current = echarts.init(myRef.current);
	}, []);

	useEffect(() => {
		console.log("mockData=>", mockData);
		getData();
	}, [date]);

	const getData = () => {
		setData(mockData);
		const xAxisData = [];
		const seriesData = [];
		mockData.dataList.forEach((item) => {
			xAxisData.push(item.btime);
			seriesData.push(item.numdata);
		});
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
				name: mockData.name + ":" + mockData.unit,
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
				},
			],
			dataZoom: [
				{
					type: "inside",
					start: 0,
					end: 20,
				},
				{
					start: 0,
					end: 20,
				},
			],
		});

		$.ajax({
			url: "http://10.35.60.136:32119/easydata/api/center/JK1642694429480001536",
			type: "GET",
			data: {
				itemType: "EQUIPMENT_HAZARDOUS_CHEMICALS_RADAR_LEVEL",
				equipmentId: "20bedfc4bc9976a35276a476a9326873",
				startTime: "2023-01-01 00:00:00",
				endTime: "2023-04-01 00:00:00",
				typeName: "液位",
			},
			dataType: "json",
			success: (e) => {
				console.log("success", e);
			},
		});
	};

	const optionsWithDisabled = [
		{ label: "24小时", value: "1" },
		{ label: "7天", value: "2" },
		{ label: "30天", value: "3" },
	];

	const onRadioChange = ({ target: { value } }) => {
		console.log("radio4 checked", value);
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
		console.log("From: ", dates[0], ", to: ", dates[1]);
		console.log("From: ", dateStrings[0], ", to: ", dateStrings[1]);
		setDate(dates);
	};

	return (
		<div>
			<Row>
				<Col span={12}>
					<Radio.Group
						defaultValue={"1"}
						options={optionsWithDisabled}
						onChange={onRadioChange}
						optionType="button"
						buttonStyle="solid"
					/>
				</Col>
				<Col span={12}>
					<RangePicker showTime value={date} onChange={onRangePickerChange} />
				</Col>
			</Row>

			<div ref={(e) => (myRef.current = e)} className={styles.chart} />
		</div>
	);
};
