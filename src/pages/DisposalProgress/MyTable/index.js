import React, { useEffect, useMemo, useState } from "react";
import { Table } from "antd";

export default (props) => {
	const { type, data, fields } = props;

	// 预警生成
	const columns1 = [
		{
			title: "节点",
			dataIndex: "node",
			key: "node",
		},
		{
			title: "生成方式",
			dataIndex: "optionName",
			key: "optionName",
		},
		{
			title: "生成规则",
			dataIndex: "description",
			key: "description",
		},
		{
			title: "建议等级",
			dataIndex: "adjustLevel",
			key: "adjustLevel",
		},
		{
			title: "生成时间",
			dataIndex: "createTime",
			key: "createTime",
		},
		{
			title: "附件",
			dataIndex: "fileUrl",
			key: "fileUrl",
		},
	];

	// 预警审核发布 | 预警响应 | 预警处置 | 预警解除
	const columns2 = [
		{
			title: "节点",
			dataIndex: "node",
			key: "node",
		},
		{
			title: "人员",
			dataIndex: "optionUser",
			key: "optionUser",
		},
		{
			title: "部门",
			dataIndex: "optionUserDept",
			key: "optionUserDept",
		},
		{
			title: "操作",
			dataIndex: "optionName",
			key: "optionName",
		},
		{
			title: "时长",
			dataIndex: "duration",
			key: "duration",
		},
		{
			title: "处理意见",
			dataIndex: "description",
			key: "description",
		},
		{
			title: "处理时间",
			dataIndex: "updateTime",
			key: "updateTime",
		},
		{
			title: "附件",
			dataIndex: "fileUrl",
			key: "fileUrl",
		},
	];

	// 预警督办
	const columns3 = [
		{
			title: "节点",
			dataIndex: "node",
			key: "node",
		},
		{
			title: "督办方式",
			dataIndex: "optionName",
			key: "optionName",
		},
		{
			title: "人员",
			dataIndex: "optionUser",
			key: "optionUser",
		},
		{
			title: "部门/单位",
			dataIndex: "optionUserDept",
			key: "optionUserDept",
		},
		{
			title: "待反馈部门",
			dataIndex: "superviseDept",
			key: "superviseDept",
		},
		{
			title: "督办内容",
			dataIndex: "description",
			key: "description",
		},
		{
			title: "督办时间",
			dataIndex: "updateTime",
			key: "updateTime",
		},
		{
			title: "附件",
			dataIndex: "fileUrl",
			key: "fileUrl",
		},
	];

	// 报警生成
	const columns4 = [
		{
			title: "区域",
			dataIndex: "region",
			key: "region",
		},
		{
			title: "报警类型",
			dataIndex: "alarmType",
			key: "alarmType",
		},
		{
			title: "报警时间",
			dataIndex: "alarmTime",
			key: "alarmTime",
		},
		{
			title: "报警指标",
			dataIndex: "alarmKpi",
			key: "alarmKpi",
		},
		{
			title: "实时值",
			dataIndex: "realValue",
			key: "realValue",
		},
		{
			title: "报警位置",
			dataIndex: "alarmAddress",
			key: "alarmAddress",
		},
		{
			title: "报警内容",
			dataIndex: "alarmContent",
			key: "alarmContent",
		},
	];

	// 报警响应
	const columns5 = [
		{
			title: "响应人",
			dataIndex: "uerName",
			key: "uerName",
		},
		{
			title: "响应时间",
			dataIndex: "updateTime",
			key: "updateTime",
		},
	];

	// 报警督办
	const columns6 = [
		{
			title: "督办人",
			dataIndex: "uerName",
			key: "uerName",
		},
		{
			title: "督办时间",
			dataIndex: "updateTime",
			key: "updateTime",
		},
		{
			title: "督办内容",
			dataIndex: "description",
			key: "description",
		},
		{
			title: "附件",
			dataIndex: "fileUrl",
			key: "fileUrl",
		},
	];

	// 报警处置
	const columns7 = [
		{
			title: "处置人",
			dataIndex: "uerName",
			key: "uerName",
		},
		{
			title: "处置时间",
			dataIndex: "updateTime",
			key: "updateTime",
		},
		{
			title: "处置结果",
			dataIndex: "disposaResult",
			key: "disposaResult",
		},
		{
			title: "处置类型",
			dataIndex: "disposaType",
			key: "disposaType",
		},
		{
			title: "处置说明",
			dataIndex: "description",
			key: "description",
		},
		{
			title: "附件",
			dataIndex: "fileUrl",
			key: "fileUrl",
		},
	];

	const [columnsMapping, setColumnsMapping] = useState({
		预警生成: columns1,
		预警审核发布: columns2,
		预警响应: columns2,
		预警处置: columns2,
		预警解除: columns2,
		预警督办: columns3,
		报警生成: columns4,
		报警响应: columns5,
		报警督办: columns6,
		报警处置: columns7,
	});

	useEffect(() => {
		if (fields) {
			let _columnsMapping = { ...columnsMapping, ...fields };
			setColumnsMapping(_columnsMapping);
		}
	}, []);

	const columns = useMemo(() => {
		let _columns = columnsMapping[type];
		return _columns || columns1;
	}, [columnsMapping, type]);

	return (
		<Table
			columns={columns}
			dataSource={data}
			size="small"
			pagination={false}
			bordered
		/>
	);
};
