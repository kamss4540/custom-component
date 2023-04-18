// 沈阳-预警详情-实时监测
import React, { useEffect, useState } from "react";
import { Collapse, Tabs } from "antd";
import styles from "./index.module.less";
import mockData from "./mockData";
import MyChart from "./MyChart";

const { Panel } = Collapse;

export default (props) => {
	const {
		data: { dataKey, fieldsKey },
	} = props;

	const [data, setData] = useState({});
	const [fields, setFields] = useState([]);

	useEffect(() => {
		getData();
	}, []);

	const getData = () => {
		if (window.globalEventEmitter) {
			window.globalEventEmitter.on(dataKey, (e) => {
				setData(e);
			});
			setFields(window.getDataByKey(fieldsKey));
		} else {
			setData(mockData.data);
			setFields(mockData.fields);
		}
	};

	const onChange = (key) => {
		console.log(key);
	};

	return (
		<div className={styles.layout}>
			<Collapse
				defaultActiveKey={[Object.keys(data)[0]]}
				className={styles.collapse}
			>
				{Object.keys(data).map((key) => {
					const items = data[key];
					const element = key.split(",");
					return (
						<Panel
							header={`相关报警：${element[0]} 监测对象：${element[1]}}`}
							key={key}
						>
							<Tabs
								onChange={onChange}
								type="card"
								size="small"
								items={items.map((_, i) => ({
									label: _.kpi,
									key: _.equipmentId,
									children: <MyChart />,
								}))}
							/>
						</Panel>
					);
				})}
			</Collapse>
		</div>
	);
};
