// 沈阳-预警详情-监测对象
import React from "react";
import { Collapse, Descriptions } from "antd";
import styles from "./index.module.less";

const { Panel } = Collapse;

export default (props) => {
	const { data: {data, fields} } = props;



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
									title="3级对象名称"
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
