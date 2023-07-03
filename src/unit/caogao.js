// 沈阳-预警详情-监测对象
import React, { useEffect, useState } from "react";
import { Collapse, Descriptions, Empty } from "antd";
import styles from "./index.module.less";
import mockData from "./mockData";

const { Panel } = Collapse;

export default (props) => {
	const {
		data: { dataKey, fieldsKey },
	} = props;

	const [data, setData] = useState([]);
	const [fields, setFields] = useState([]);
	const [activeKey, setActiveKey] = useState();

	useEffect(() => {
		getData();
	}, []);

	const getData = () => {
		if (window.globalEventEmitter) {
			window.globalEventEmitter.on(dataKey, (e) => {
				setData(e || {});
				if (e) {
					setActiveKey(Object.keys(e)[0]);
				}
			});
			let _fields = window.getDataByKey(fieldsKey);
			_fields && setFields(_fields);
		} else {
			setData(mockData.data);
			setFields(mockData.fields);
		}
	};

	return (
		<div className={styles.layout}>
			{Object.keys(data)?.length ? (
				<Collapse
					className={styles.collapse}
					expandIconPosition="right"
					activeKey={activeKey}
					onChange={setActiveKey}
				>
					{Object.keys(data).map((key) => {
						const items = data[key];
						return (
							<Panel header={`监测对象：${key || "-"}`} key={key}>
								{items.map((item, index) => (
									<div className={styles.card}>
										<>
											<i>
												<span>{items.length - index}</span>
											</i>
											<div className={styles.subTitle}>{`${
												items.length - index
											}级对象名称`}</div>
										</>
										<div className={styles.content}>
											<Descriptions
												key={index}
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
										</div>
									</div>
								))}
							</Panel>
						);
					})}
				</Collapse>
			) : (
				<Empty description="暂无数据" image={Empty.PRESENTED_IMAGE_SIMPLE} />
			)}
		</div>
	);
};
