import { Tree } from "antd";
import React, { useEffect, useMemo, useState } from "react";
import styles from "./index.module.less";

const AnalysisTree = (props) => {
	const { data, selectedValueKey, defaultSelectedKey } = props;

	const setStoreData = window.setStoreData ? window.setStoreData : () => {};

	const [checkedKeys, setCheckedKeys] = useState([]);
	const [expandedKeys, setExpandedKeys] = useState([]);

	const treeData = useMemo(() => {
		return getTree(data);
	}, [data]);

	useEffect(() => {
		console.info("treeData=>", treeData);

		if (treeData?.length > 0) {
			let keys = [];
			let titles = [];
			const loopGetKey = (tree, arr) => {
				tree.forEach((item) => {
					arr.push(item.key);
					titles.push(item.title);
					if (item.children) {
						loopGetKey(item.children, arr);
					}
				});
			};
			loopGetKey(treeData[0].children[0].children, keys);
			const path = getCurrentModel(keys);
			setCheckedKeys(keys);
			setExpandedKeys(keys);
			setStoreData(defaultSelectedKey, { path, selectedValue: keys });
		}
	}, [treeData]);

	const onCheck = (checkedKeysValue, info) => {
		const { checked, node, checkedNodes } = info;
		let _checkedKeys = [];
		if (checked) {
			// 比较前两级，如果选中的节点跟之前不在一个分支，清除之前的选中
			const { key } = node;
			_checkedKeys = checkedKeysValue.filter((item) => {
				const itemParts = item.split("-");
				const compareParts = key.split("-");
				return (
					itemParts[0] === compareParts[0] &&
					itemParts[1] === compareParts[1]
				);
			});
			// 选中某个节点时，展开这个节点以及他的所有子节点
			const { children } = node;
			let _expandedKeys = [key, ...expandedKeys];
			if (children) {
				children.forEach((item) => {
					_expandedKeys.push(item.key);
				});
			}

			setExpandedKeys([...new Set(_expandedKeys)]);
		} else {
			_checkedKeys = checkedKeysValue;
		}
		setCheckedKeys(_checkedKeys);
		const path = getCurrentModel(_checkedKeys);
		const selectedValue = checkedNodes.map((item) => item.title);
		setStoreData(selectedValueKey, { path, selectedValue });
	};

	// 获取当前模型
	const getCurrentModel = (list) => {
		let path = [];
		let curLevel = treeData;
		const loopNode = (list, index) => {
			const node = list[index];
			path.push(node.title);
			curLevel = node.children;
		};
		if (list.length) {
			let _key = list[0];
			let arr = _key.split("-");
			arr.forEach((item) => {
				loopNode(curLevel, item);
			});
			return path;
		}
	};

	return (
		<Tree
			showIcon
			checkable
			selectable={false}
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
					node.key = pid + "-" + index;
				} else {
					node.key = index.toString();
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
								// key: "三度烧伤区",
								...colorArr["三度烧伤区"],
								key: node.key + "-0",
							},
							{
								title: "二度烧伤区",
								// key: "二度烧伤区",
								...colorArr["二度烧伤区"],
								key: node.key + "-1",
							},
							{
								title: "一度烧伤区",
								// key: "一度烧伤区",
								...colorArr["一度烧伤区"],
								key: node.key + "-2",
							},
						];
					} else if (typeof value !== "number") {
						node.children = loopObj(value, node.key);
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
		zIndex: 40,
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
