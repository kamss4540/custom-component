// 沈阳-预警详情-处置进展
import React, { useEffect, useState } from "react";
import { Steps } from "antd";
import styles from "./index.module.less";
import MyTable from "./MyTable";
import mockData from "./mockData";

const { Step } = Steps;

export default (props) => {
	const {
		data: { dataKey, fieldsKey },
	} = props;

	const [data, setData] = useState({});
	const [fields, setFields] = useState();

	useEffect(() => {
		getData();
	}, [props.data]);

	const getData = () => {
		if (window.globalEventEmitter) {
			setData(window.getDataByKey(dataKey));
			window.globalEventEmitter.on(dataKey, (e) => {
				setData(e);
			});
			setFields(window.getDataByKey(fieldsKey));
			window.globalEventEmitter.on(fieldsKey, (e) => {
				setFields(e);
			});
		} else {
			setData(mockData.data);
			setFields(mockData.fields);
		}
	};

	if (data) {
		return (
			<div className={styles.layout}>
				<Steps
					progressDot
					current={Object.keys(data).length - 1}
					direction="vertical"
					className={styles.steps}
				>
					{Object.keys(data)
						.sort((a, b) => a.split(",")[0] - b.split(",")[0])
						.map((item) => (
							<Step
								key={item}
								title={item.split(",")[1]}
								description={
									<MyTable
										data={data[item]}
										type={item.split(",")[1]}
										fields={fields}
									/>
								}
							/>
						))}
				</Steps>
			</div>
		);
	}
};
