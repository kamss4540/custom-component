import React from "react";
import { Collapse, Tree } from "antd";
import styles from "./index.module.less";

const ResearchAndAnalysis = (props) => {
	const { data, type, activeKey, setActiveKey, checkedObj, setCheckedObj } =
		props;

	const onCheck = (e, item) => {
		const params = {
			modeType: type,
			modelName: item.modelName,
			modelCode: item.modelCode,
			checkedKeys: e,
		};
		window.globalEventEmitter.emit("onRaaTreeCheck", params);
		let _checkedObj = JSON.parse(JSON.stringify(checkedObj));
		_checkedObj[type][item.modelCode] = e;
		setCheckedObj(_checkedObj);
	};

	if (data?.length) {
		return (
			<Collapse accordion={true} activeKey={activeKey} onChange={setActiveKey}>
				{data.map((item) => {
					return (
						<Collapse.Panel header={item.modelName} key={item.modelCode}>
							<Tree
								showIcon
								checkable
								defaultCheckedKeys={item.legendTree.checkedKeys}
								defaultExpandedKeys={item.legendTree.expandedKeys}
								onCheck={(e) => onCheck(e, item)}
								icon={(e) =>
									e.color ? (
										<i
											className={styles.icon}
											style={{ backgroundColor: e.color }}
										/>
									) : null
								}
								treeData={item.legendTree.treeData}
							/>
						</Collapse.Panel>
					);
				})}
			</Collapse>
		);
	} else {
		return null;
	}
};

export default ResearchAndAnalysis;
