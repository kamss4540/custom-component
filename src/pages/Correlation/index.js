// 沈阳-预警详情-相关报警
import React, { useEffect, useMemo, useState } from "react";
import { Table, ConfigProvider } from "antd";
import styles from "./index.module.less";
import ImagePreviewer from "./ImagePreviewer";
import mockData from "./mockData";
import zhCN from "antd/es/locale/zh_CN";

export default (props) => {
	const {
		data: { dataKey, pageInfoKey },
		config,
	} = props;

	let temp = {
		// 变量名称：相关报警
		dataKey: "store_group_wP6D9eEScqaHNci28wKwuJ-jhREqoR9yDVfsQAwiRvUS7",
		// 变量名称：相关报警分页
		pageInfoKey: "store_group_wP6D9eEScqaHNci28wKwuJ-83mEVjgDfhjSBSgHpUqxMQ",
	};
	// 数据源
	const [dataSource, setDataSource] = useState([]);
	const [pageInfo, setPageInfo] = useState({}); //分页信息

	const getData = () => {
		if (window.globalEventEmitter) {
			processingData(window.getDataByKey(dataKey));
			window.globalEventEmitter.on(dataKey, (e) => {
				processingData(e);
			});
		} else {
			const { data, ...rest } = mockData;
			let _data = data.map((item, index) => ({
				order: index + 1,
				...item,
			}));
			setDataSource(_data);
			setPageInfo({
				current: rest.currentPage,
				total: rest.totalCount,
				pageSize: rest.pageSize,
			});
		}
	};

	const processingData = (val) => {
		if (!val) return;
		let _data = val.data.map((item, index) => ({
			order: index + 1,
			...item,
		}));
		setDataSource(_data);
		setPageInfo({
			current: val.currentPage,
			total: val.totalCount,
			pageSize: val.pageSize,
		});
	};

	useEffect(() => {
		getData();
	}, [props.data]);

	const columns = [
		{
			title: "序号",
			dataIndex: "order",
			key: "order",
			width: 50,
			align: "center",
		},
		{
			title: "报警编号",
			dataIndex: "alarmNo",
			key: "alarmNo",
			width: 180,
			align: "center",
		},
		{
			title: "报警类型",
			dataIndex: "alarmType",
			key: "alarmType",
			width: 120,
			align: "center",
		},
		{
			title: "报警来源",
			dataIndex: "alarmSource",
			key: "alarmSource",
			width: 100,
			align: "center",
		},
		{
			title: "报警设备",
			dataIndex: "deviceId",
			key: "deviceId",
			width: 150,
			align: "center",
		},
		{
			title: "监测对象",
			dataIndex: "objectName",
			key: "objectName",
			width: 100,
			align: "center",
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
			align: "center",
		},
		{
			title: "报警位置",
			dataIndex: "address",
			key: "address",
			width: 150,
			align: "center",
		},
		{
			title: "生成时间",
			dataIndex: "alarmTime",
			key: "alarmTime",
			width: 150,
			align: "center",
		},
		{
			title: "处置状态",
			dataIndex: "alarmStatus",
			key: "alarmStatus",
			width: 100,
			align: "center",
		},
		{
			title: "处置时间",
			dataIndex: "disposalTime",
			key: "disposalTime",
			width: 150,
			align: "center",
		},
		{
			title: "消警状态",
			dataIndex: "cancelStatus",
			key: "cancelStatus",
			width: 100,
			align: "center",
		},
		{
			title: "消警时间",
			dataIndex: "cancelTime",
			key: "cancelTime",
			width: 150,
			align: "center",
		},
		{
			title: "解除状态",
			dataIndex: "removeState",
			key: "removeState",
			width: 100,
			align: "center",
		},
		{
			title: "解除时间",
			dataIndex: "removeTime",
			key: "removeTime",
			width: 200,
			align: "center",
		},
		{
			title: "是否督办",
			dataIndex: "superviseStatus",
			key: "superviseStatus",
			width: 100,
			align: "center",
		},
		{
			title: "督办次数",
			dataIndex: "superviseNum",
			key: "superviseNum",
			width: 100,
			align: "center",
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
		<ConfigProvider locale={zhCN}>
			<Table
				className={styles.table}
				dataSource={dataSource}
				columns={columns}
				size="small"
				scroll={scroll}
				pagination={{
					...pageInfo,
					showSizeChanger: true,
					showQuickJumper: true,
					showTotal: (total) => `共 ${total} 条`,
					onChange: (page, pageSize) => {
						window.setStoreData(pageInfoKey, {
							page,
							pageSize,
						});
					},
				}}
			/>
		</ConfigProvider>
	);
};
