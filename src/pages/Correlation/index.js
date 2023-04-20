// 沈阳-预警详情-相关报警
import React, { useEffect, useMemo, useState } from "react";
import { Table } from "antd";
import styles from "./index.module.less";
import ImagePreviewer from "./ImagePreviewer";

export default (props) => {
	const { data, config } = props;

	// 数据源
	const [dataSource, setDataSource] = useState([]);

	useEffect(() => {
		if (data?.length) {
			data.forEach((item, index) => {
				item.order = index + 1;
			});
			setDataSource(data);
		}
	}, [data, config]);

	const columns = [
		{
			title: "序号",
			dataIndex: "order",
			key: "order",
			width: 100,
		},
		{
			title: "报警编号",
			dataIndex: "alarmNo",
			key: "alarmNo",
			width: 100,
		},
		{
			title: "报警类型",
			dataIndex: "alarmType",
			key: "alarmType",
			width: 120,
		},
		{
			title: "报警来源",
			dataIndex: "alarmSource",
			key: "alarmSource",
			width: 100,
		},
		{
			title: "报警设备",
			dataIndex: "deviceId",
			key: "deviceId",
			width: 100,
		},
		{
			title: "监测对象",
			dataIndex: "objectName",
			key: "objectName",
			width: 100,
		},
		{
			title: "报警值",
			dataIndex: "objectRealValue",
			key: "objectRealValue",
			render: (text, record) => {
				// 报警值   objectRealValue
				// 报警值   fileUrl
				// 报警值区分监测值与图片   flag：fileUrl图片，realValue监测值
				if (record.fileUrl) {
					return <ImagePreviewer width={48} src={record.fileUrl} />;
				} else {
					return text;
				}
			},
			width: 150,
		},
		{
			title: "报警位置",
			dataIndex: "address",
			key: "address",
			width: 200,
		},
		{
			title: "生成时间",
			dataIndex: "alarmTime",
			key: "alarmTime",
			width: 100,
		},
		{
			title: "处置状态",
			dataIndex: "alarmStatus",
			key: "alarmStatus",
			width: 100,
		},
		{
			title: "处置时间",
			dataIndex: "disposalTime",
			key: "disposalTime",
			width: 100,
		},
		{
			title: "消警状态",
			dataIndex: "cancelStatus",
			key: "cancelStatus",
			width: 100,
		},
		{
			title: "消警时间",
			dataIndex: "cancelTime",
			key: "cancelTime",
			width: 100,
		},
		{
			title: "解除状态",
			dataIndex: "removeState",
			key: "removeState",
			width: 100,
		},
		{
			title: "解除时间",
			dataIndex: "removeTime",
			key: "removeTime",
			width: 100,
		},
		{
			title: "是否督办",
			dataIndex: "superviseStatus",
			key: "superviseStatus",
			width: 100,
		},
		{
			title: "督办次数",
			dataIndex: "superviseNum",
			key: "superviseNum",
			width: 100,
		},
	];

	const scroll = useMemo(() => {
		let _scroll = {
			x: columns
				.map((item) => item.width || 0)
				.reduce((prev, cur) => prev + cur),
		};
		if (config?.height) {
			let scrollY = config.height.split("px")[0];
			if (scrollY) {
				_scroll.y = Number(scrollY) - 39;
			}
		}
		return _scroll;
	}, [config]);

	return (
		<Table
			className={styles.table}
			dataSource={dataSource}
			columns={columns}
			size="small"
			scroll={scroll}
		/>
	);
};
