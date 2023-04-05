import React, { useEffect, useMemo, useRef, useState } from "react";
import { Row, Col, Space } from "antd";
import BarChart from "./BarChart";
import TwoBarGraph from "./TwoBarGraph";
import styles from "./ProvinceIndex.module.less";
import RollSomething from "./RollSomething";

export default (props) => {
	const customOption = {
		yAxis: [
			{},
			{
				name: "百分点",
			},
		],
	};

	return (
		<Space>
			<div className={styles.group}>
				<div className={styles.chartTitle}>设区城市优良率排名</div>
				<BarChart data={mData} />
			</div>
			<i className={styles.line} />
			<div className={styles.group}>
				<div className={styles.chartTitle}>改善幅度排名</div>
				<TwoBarGraph data={mData2} customOption={customOption} />
			</div>
			<i className={styles.line} />
			<div className={styles.group}>
				<div className={styles.chartTitle}>县(市、区)优良率排名</div>
				<RollSomething data={{ style: { height: 495 } }}>
					<BarChart data={mData3} />
				</RollSomething>
			</div>
			<i className={styles.line} />
			<div className={styles.group}>
				<div className={styles.chartTitle}>改善幅度排名</div>
				<RollSomething data={{ style: { width: 400, height: 495 } }}>
					<TwoBarGraph data={mData4} customOption={customOption} />
				</RollSomething>
			</div>
		</Space>
	);
};

const mData = [
	{
		name: "舟山市",
		value: "2.27",
		sortNum: 1,
	},
	{
		name: "丽水市",
		value: "2.48",
		sortNum: 2,
	},
	{
		name: "台州市",
		value: "2.77",
		sortNum: 3,
	},
	{
		name: "衢州市",
		value: "3.15",
		sortNum: 4,
	},
	{
		name: "宁波市",
		value: "3.16",
		sortNum: 5,
	},
	{
		name: "温州市",
		value: "3.26",
		sortNum: 6,
	},
	{
		name: "金华市",
		value: "3.39",
		sortNum: 7,
	},
	{
		name: "嘉兴市",
		value: "3.45",
		sortNum: 8,
	},
	{
		name: "绍兴市",
		value: "3.53",
		sortNum: 9,
	},
	{
		name: "湖州市",
		value: "3.66",
		sortNum: 10,
	},
	{
		name: "杭州市",
		value: "3.78",
		sortNum: 11,
	},
];

const mData2 = [
	{
		name: "舟山市",
		value: "-0.15",
		sortNum: 1,
	},
	{
		name: "衢州市",
		value: "-0.09",
		sortNum: 2,
	},
	{
		name: "嘉兴市",
		value: "-0.08",
		sortNum: 3,
	},
	{
		name: "丽水市",
		value: "-0.04",
		sortNum: 4,
	},
	{
		name: "台州市",
		value: "-0.02",
		sortNum: 5,
	},
	{
		name: "温州市",
		value: "-0.01",
		sortNum: 6,
	},
	{
		name: "湖州市",
		value: "0.00",
		sortNum: 7,
	},
	{
		name: "金华市",
		value: "0.09",
		sortNum: 8,
	},
	{
		name: "宁波市",
		value: "0.12",
		sortNum: 9,
	},
	{
		name: "绍兴市",
		value: "0.13",
		sortNum: 10,
	},
	{
		name: "杭州市",
		value: "0.15",
		sortNum: 11,
	},
];

const mData3 = [
	{
		name: "丽水市",
		value: "97.3",
		sortNum: 1,
	},
	{
		name: "舟山市",
		value: "96.6",
		sortNum: 2,
	},
	{
		name: "台州市",
		value: "95.1",
		sortNum: 3,
	},
	{
		name: "温州市",
		value: "93.5",
		sortNum: 4,
	},
	{
		name: "衢州市",
		value: "91.6",
		sortNum: 5,
	},
	{
		name: "金华市",
		value: "88.2",
		sortNum: 6,
	},
	{
		name: "宁波市",
		value: "85.9",
		sortNum: 7,
	},
	{
		name: "绍兴市",
		value: "80.2",
		sortNum: 8,
	},
	{
		name: "杭州市",
		value: "79.5",
		sortNum: 9,
	},
	{
		name: "嘉兴市",
		value: "75.7",
		sortNum: 10,
	},
	{
		name: "湖州市",
		value: "73.4",
		sortNum: 11,
	},
];

const mData4 = [
	{
		name: "舟山市",
		value: "-0.8",
		sortNum: 1,
	},
	{
		name: "丽水市",
		value: "-2.0",
		sortNum: 2,
	},
	{
		name: "衢州市",
		value: "-3.6",
		sortNum: 3,
	},
	{
		name: "台州市",
		value: "-3.8",
		sortNum: 4,
	},
	{
		name: "温州市",
		value: "-4.6",
		sortNum: 5,
	},
	{
		name: "杭州市",
		value: "-6.1",
		sortNum: 6,
	},
	{
		name: "金华市",
		value: "-6.2",
		sortNum: 7,
	},
	{
		name: "湖州市",
		value: "-7.7",
		sortNum: 8,
	},
	{
		name: "宁波市",
		value: "-8.9",
		sortNum: 9,
	},
	{
		name: "绍兴市",
		value: "-12.0",
		sortNum: 10,
	},
	{
		name: "嘉兴市",
		value: "-13.9",
		sortNum: 11,
	},
];
