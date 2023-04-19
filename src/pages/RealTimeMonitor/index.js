// 沈阳-预警详情-实时监测
import React from "react";
import { Collapse, Tabs } from "antd";
import styles from "./index.module.less";
import MyChart from "./MyChart";

const { Panel } = Collapse;

export default (props) => {
	const { data } = props;

	return (
		<div className={styles.layout}>
			<Collapse
				defaultActiveKey={[Object.keys(data)[0]]}
				className={styles.collapse}
			>
				{Object.keys(data).map((key) => {
					const items = data[key].length ? data[key] : [];
					const element = key.split(",");
					return (
						<Panel
							header={`相关报警：${element[0]} 监测对象：${element[1]}}`}
							key={key}
						>
							<Tabs type="card" size="small">
								{items.map((_) => (
									<Tabs.TabPane tab={_.kpi} key={_.equipmentId}>
										<MyChart data={_} />
									</Tabs.TabPane>
								))}
							</Tabs>
						</Panel>
					);
				})}
			</Collapse>
		</div>
	);
};
