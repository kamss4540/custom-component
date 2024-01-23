import { Tree } from "antd";
import React, { useEffect, useMemo, useState } from "react";
import styles from "./index.module.less";

const AnalysisTree = (props) => {
	const { data } = props;
	console.info("data=>", data);

	const [checkedKeys, setCheckedKeys] = useState([]);
	const [expandedKeys, setExpandedKeys] = useState([]);

	const treeData = useMemo(() => {
		return getTree(data);
	}, [data]);

	useEffect(() => {
		if (treeData?.length > 0) {
			setExpandedKeys([treeData[0].id]);
		}
	}, [treeData]);

	console.info("treeData=>", treeData);

	const onCheck = (checkedKeysValue, info) => {
		const { checked, node } = info;
		let _checkedKeys = [];
		if (checked) {
			// 比较前两级，如果选中的节点跟之前不在一个分支，清除之前的选中
			const { id } = node;
			_checkedKeys = checkedKeysValue.filter((item) =>
				// item.startsWith(id)
				{
					const itemParts = item.split("-");
					const compareParts = id.split("-");
					return (
						itemParts[0] === compareParts[0] &&
						itemParts[1] === compareParts[1]
					);
				}
			);
			// 选中某个节点时，展开这个节点以及他的所有子节点
			const { children } = node;
			const _expandedKeys = [id, ...expandedKeys];
			if (children) {
				children.forEach((item) => {
					_expandedKeys.push(item.id);
				});
			}
			setExpandedKeys(_expandedKeys);
		} else {
			_checkedKeys = checkedKeysValue;
		}
		setCheckedKeys(_checkedKeys);
	};

	return (
		<Tree
			showIcon
			checkable
			selectable={false}
			fieldNames={{ key: "id" }}
			checkedKeys={checkedKeys}
			expandedKeys={expandedKeys}
			onExpand={setExpandedKeys}
			onCheck={onCheck}
			treeData={treeData}
			icon={(e) =>
				e.color ? (
					<i
						className={styles.icon}
						style={{ backgroundColor: e.color }}
					/>
				) : null
			}
		/>
	);
};
export default AnalysisTree;

const getTree = (obj) => {
	const loopObj = (obj, pid) => {
		let arr = null;

		if (
			obj instanceof Object &&
			Object.keys(obj).some((item) => !containsChinese(item))
		) {
			return loopObj(Object.values(obj)[0], pid);
		} else if (obj instanceof Array || typeof obj === "number") {
			console.log("obj=>", obj);
			return null;
		} else {
			arr = [];
			Object.keys(obj).forEach((key, index) => {
				let value = obj[key];
				let node = {
					title: key,
					key,
				};

				if (pid !== undefined) {
					node.pid = pid;
					node.id = pid + "-" + index;
				} else {
					node.id = index;
					node.disableCheckbox = true;
				}

				if (value instanceof Array || typeof value === "number") {
					node = { ...node, ...colorArr[key] };
				}

				if (Object.keys(value).length > 0) {
					if (key === "喷射火模型") {
						node.children = [
							{
								title: "三度烧伤区",
								key: "三度烧伤区",
								...colorArr["三度烧伤区"],
								id: node.id + "-0",
							},
							{
								title: "二度烧伤区",
								key: "二度烧伤区",
								...colorArr["二度烧伤区"],
								id: node.id + "-1",
							},
							{
								title: "一度烧伤区",
								key: "一度烧伤区",
								...colorArr["一度烧伤区"],
								id: node.id + "-2",
							},
						];
					} else if (typeof value !== "number") {
						node.children = loopObj(value, node.id);
					}
				}
				arr.push(node);
			});
		}

		return arr;
	};
	return loopObj(obj);
};

const containsChinese = (str) => {
	// 使用正则表达式匹配中文字符的 Unicode 范围
	var chineseRegExp = /[\u4e00-\u9fa5]/;
	// 使用 test 方法检查字符串是否包含中文字符
	return chineseRegExp.test(str);
};

// 树节点图标的颜色
let colorArr = {
	爆炸上限: {
		color: "rgba(255, 0, 0, 0.8)",
		zIndex: 90,
	},
	爆炸下限: {
		color: "rgba(255, 105, 0, 0.8)",
		zIndex: 80,
	},
	人员死亡: {
		color: "rgba(255, 0, 0, 0.8)",
		zIndex: 70,
	},
	人员重伤: {
		color: "rgba(255, 105, 0, 0.8)",
		zIndex: 60,
	},
	人员轻伤: {
		color: "rgba(255, 255, 0, 0.8)",
		zIndex: 50,
	},
	人员伤害: {
		color: "rgba(255, 255, 0, 0.8)",
	},
	"人员灾损:三级:死亡": {
		color: "rgba(255, 0, 0, 0.8)",
		zIndex: 90,
	},
	"人员灾损:二级:重伤": {
		color: "rgba(255, 105, 0, 0.8)",
		zIndex: 80,
	},
	"人员灾损:一级:轻伤": {
		color: "rgba(255, 255, 0, 0.8)",
		zIndex: 70,
	},
	"建筑物灾损:五级:倒塌": {
		color: "rgba(255, 0, 0, 0.8)",
		zIndex: 60,
	},
	"建筑物灾损:四级:严重破坏": {
		color: "rgba(255, 105, 0, 0.8)",
		zIndex: 50,
	},
	"建筑物灾损:三级:中度破坏": {
		color: "rgba(255, 255, 0, 0.8)",
		zIndex: 40,
	},
	"建筑物灾损:二级:轻度破坏": {
		color: "rgba(0, 0, 255, 0.8)",
		zIndex: 30,
	},
	"建筑物灾损:一级:玻璃破坏": {
		color: "rgba(0, 255, 255, 0.8)",
		zIndex: 20,
	},
	三度烧伤区: {
		color: "rgba(255, 0, 0, 0.8)",
		zIndex: 90,
	},
	二度烧伤区: {
		color: "rgba(255, 105, 0, 0.8)",
		zIndex: 80,
	},
	一度烧伤区: {
		color: "rgba(255, 255, 0, 0.8)",
		zIndex: 70,
	},
};
