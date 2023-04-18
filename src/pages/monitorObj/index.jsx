// 沈阳-预警详情-监测对象
import React, { useEffect, useState } from "react";
import { Collapse, Descriptions } from "antd";
import styles from "./index.module.less";
import mockData from "./mockData";

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
			window.globalEventEmitter.on(fieldsKey, (e) => {
				setFields(e);
			});
		} else {
			setData(mockData.data);
			setFields(mockData.fields);
		}
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
							{items.map((item, index) => (
								<Descriptions
									key={index}
									title={`${items.length - index}级对象名称`}
									bordered
									column={2}
									size="small"
									className={styles.descriptions}
								>
									{fields.map((field) => (
										<Descriptions.Item
											key={field.name}
											label={field.label + ":"}
										>
											{item[field.name]}
										</Descriptions.Item>
									))}
								</Descriptions>
							))}
						</Panel>
					);
				})}
			</Collapse>
		</div>
	);
};
