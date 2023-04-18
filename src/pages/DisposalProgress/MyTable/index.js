import React, { useMemo } from "react";
import { Table } from "antd";

export default (props) => {
	const { type, data } = props;

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

	const columns = useMemo(() => {
		switch (type) {
			case "预警生成":
				return columns1;
			case "预警审核发布":
			case "预警响应":
			case "预警处置":
			case "预警解除":
				return columns2;
			case "预警督办":
				return columns3;
			default:
				return [];
		}
	}, [type]);

	return (
		<Table
			columns={columns}
			dataSource={data}
			size="small"
			pagination={false}
		/>
	);
};
