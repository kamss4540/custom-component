import React from "react";
import { Radio, Table, Tabs } from "antd";
import TableGroup from "./TableGroup";
import styles from "./index.module.less";

const PeripheralAnalysis = () => {
	const types = [
		{
			title: "耦合监测",
			key: "耦合监测",
			content: <TableGroup {...data1} />,
		},
		{
			title: "周边分布",
			key: "周边分布",
			content: <TableGroup {...data2} />,
		},
		{
			title: "应急资源",
			key: "应急资源",
			content: <TableGroup {...data3} />,
		},
		{
			title: "视频资源",
			key: "视频资源",
			content: <TableGroup {...data4} />,
		},
	];

	const renderTabBar = (props, DefaultTabBar) => {
		const { panes, onTabClick, activeKey } = props;

		return (
			<Radio.Group defaultValue={activeKey} buttonStyle="solid">
				{panes.map((item) => (
					<Radio.Button
						key={item.key}
						value={item.key}
						onChange={(e) => {
							onTabClick(e.target.value);
						}}
					>
						{item.props.tab}
					</Radio.Button>
				))}
			</Radio.Group>
		);
	};

	return (
		<div className={styles.peripheralAnalysis}>
			<div className={styles.title}>周边分析</div>
			<div className={styles.content}>
				<Tabs renderTabBar={renderTabBar} destroyInactiveTabPane={true}>
					{types.map((item) => (
						<Tabs.TabPane key={item.key} tab={item.title}>
							{item.content ? item.content : item.title}
						</Tabs.TabPane>
					))}
				</Tabs>
			</div>
		</div>
	);
};

export default PeripheralAnalysis;

const data1 = {
	dataSource1: [
		{
			key: "1",
			name: "1",
			age: "燃气",
			address: "22",
		},
		{
			key: "2",
			name: "2",
			age: "交通",
			address: "22",
		},
		{
			key: "3",
			name: "3",
			age: "危化",
			address: "22",
		},
		{
			key: "4",
			name: "4",
			age: "消防",
			address: "22",
		},
		{
			key: "5",
			name: "5",
			age: "危化",
			address: "22",
		},
		{
			key: "6",
			name: "6",
			age: "危化",
			address: "22",
		},
		{
			key: "7",
			name: "7",
			age: "危化",
			address: "22",
		},
	],
	dataSource2: [
		{
			key: "1",
			name: "1",
			age: "山水花园",
			address: "0.12km",
		},
		{
			key: "2",
			name: "2",
			age: "山水花园",
			address: "0.12km",
		},
		{
			key: "3",
			name: "4",
			age: "山水花园",
			address: "0.12km",
		},
		{
			key: "4",
			name: "5",
			age: "山水花园",
			address: "0.12km",
		},
		{
			key: "5",
			name: "6",
			age: "山水花园",
			address: "0.12km",
		},
		{
			key: "6",
			name: "7",
			age: "山水花园",
			address: "0.12km",
		},
	],
	columns1: [
		{
			title: "序号",
			dataIndex: "name",
			key: "name",
			align: "center",
		},
		{
			title: "行业",
			dataIndex: "age",
			key: "age",
			align: "center",
		},
		{
			title: "数量",
			dataIndex: "address",
			key: "address",
			align: "center",
		},
	],
	columns2: [
		{
			title: "序号",
			dataIndex: "name",
			key: "name",
			align: "center",
		},
		{
			title: "监测对象",
			dataIndex: "age",
			key: "age",
			align: "center",
		},
		{
			title: "距离",
			dataIndex: "address",
			key: "address",
			align: "center",
		},
	],
};
const data2 = {
	dataSource1: [
		{
			key: "1",
			name: "1",
			age: "购物中心",
			address: "22",
		},
		{
			key: "2",
			name: "2",
			age: "商城",
			address: "22",
		},
		{
			key: "3",
			name: "3",
			age: "学习",
			address: "22",
		},
		{
			key: "4",
			name: "4",
			age: "医院",
			address: "22",
		},
		{
			key: "5",
			name: "5",
			age: "医院",
			address: "22",
		},
		{
			key: "6",
			name: "6",
			age: "医院",
			address: "22",
		},
		{
			key: "7",
			name: "7",
			age: "医院",
			address: "22",
		},
	],
	dataSource2: [
		{
			key: "1",
			name: "1",
			age: "万象城",
			address: "0.12km",
		},
		{
			key: "2",
			name: "2",
			age: "大悦城",
			address: "0.12km",
		},
		{
			key: "3",
			name: "4",
			age: "k11",
			address: "0.12km",
		},
		{
			key: "4",
			name: "5",
			age: "万达",
			address: "0.12km",
		},
		{
			key: "5",
			name: "6",
			age: "万达",
			address: "0.12km",
		},
		{
			key: "6",
			name: "7",
			age: "万达",
			address: "0.12km",
		},
	],
	columns1: [
		{
			title: "序号",
			dataIndex: "name",
			key: "name",
			align: "center",
		},
		{
			title: "类别",
			dataIndex: "age",
			key: "age",
			align: "center",
		},
		{
			title: "数量",
			dataIndex: "address",
			key: "address",
			align: "center",
		},
	],
	columns2: [
		{
			title: "序号",
			dataIndex: "name",
			key: "name",
			align: "center",
		},
		{
			title: "监测对象",
			dataIndex: "age",
			key: "age",
			align: "center",
		},
		{
			title: "距离",
			dataIndex: "address",
			key: "address",
			align: "center",
		},
	],
};
const data3 = {
	dataSource1: [
		{
			key: "1",
			name: "1",
			age: "应急队伍",
			address: "22",
		},
		{
			key: "2",
			name: "2",
			age: "应急仓库",
			address: "22",
		},
		{
			key: "3",
			name: "3",
			age: "救援专家",
			address: "22",
		},
	],
	dataSource2: [
		{
			key: "1",
			name: "1",
			age: "队伍一",
			address: "0.12km",
			phone: "13434343434",
		},
		{
			key: "2",
			name: "2",
			age: "队伍二",
			address: "0.12km",
			phone: "13434343434",
		},
		{
			key: "3",
			name: "4",
			age: "队伍三",
			address: "0.12km",
			phone: "13434343434",
		},
		{
			key: "4",
			name: "5",
			age: "队伍四",
			address: "0.12km",
			phone: "13434343434",
		},
		{
			key: "5",
			name: "6",
			age: "队伍五",
			address: "0.12km",
			phone: "13434343434",
		},
		{
			key: "6",
			name: "7",
			age: "队伍六",
			address: "0.12km",
			phone: "13434343434",
		},
	],
	columns1: [
		{
			title: "序号",
			dataIndex: "name",
			key: "name",
			align: "center",
		},
		{
			title: "类别",
			dataIndex: "age",
			key: "age",
			align: "center",
		},
		{
			title: "数量",
			dataIndex: "address",
			key: "address",
			align: "center",
		},
	],
	columns2: [
		{
			title: "序号",
			dataIndex: "name",
			key: "name",
			align: "center",
		},
		{
			title: "名称",
			dataIndex: "age",
			key: "age",
			align: "center",
		},
		{
			title: "电话",
			dataIndex: "phone",
			key: "phone",
			align: "center",
		},
		{
			title: "距离",
			dataIndex: "address",
			key: "address",
			align: "center",
		},
	],
};
const data4 = {
	dataSource1: [
		{
			key: "1",
			name: "1",
			age: "燃气",
			address: "22",
		},
		{
			key: "2",
			name: "2",
			age: "交通",
			address: "22",
		},
		{
			key: "3",
			name: "3",
			age: "危化",
			address: "22",
		},
		{
			key: "4",
			name: "4",
			age: "消防",
			address: "22",
		},
		{
			key: "5",
			name: "5",
			age: "危化",
			address: "22",
		},
		{
			key: "6",
			name: "6",
			age: "危化",
			address: "22",
		},
		{
			key: "7",
			name: "7",
			age: "危化",
			address: "22",
		},
	],
	dataSource2: [
		{
			key: "1",
			name: "1",
			age: "山水花园",
			address: "0.12km",
		},
		{
			key: "2",
			name: "2",
			age: "山水花园",
			address: "0.12km",
		},
		{
			key: "3",
			name: "4",
			age: "山水花园",
			address: "0.12km",
		},
		{
			key: "4",
			name: "5",
			age: "山水花园",
			address: "0.12km",
		},
		{
			key: "5",
			name: "6",
			age: "山水花园",
			address: "0.12km",
		},
		{
			key: "6",
			name: "7",
			age: "山水花园",
			address: "0.12km",
		},
	],
	columns1: [
		{
			title: "序号",
			dataIndex: "name",
			key: "name",
			align: "center",
		},
		{
			title: "行业",
			dataIndex: "age",
			key: "age",
			align: "center",
		},
		{
			title: "数量",
			dataIndex: "address",
			key: "address",
			align: "center",
		},
	],
	columns2: [
		{
			title: "序号",
			dataIndex: "name",
			key: "name",
			align: "center",
		},
		{
			title: "监测对象",
			dataIndex: "age",
			key: "age",
			align: "center",
		},
		{
			title: "距离",
			dataIndex: "address",
			key: "address",
			align: "center",
		},
	],
};
