// 沈阳-预警详情-处置进展
import React, { useEffect, useState } from "react";
import { Steps } from "antd";
import styles from "./index.module.less";
import MyTable from "./MyTable";

export default (props) => {
	const [data, setData] = useState({});

	useEffect(() => {
		if (props.data) {
			setData(props.data);
		}
	}, [props.data]);

	return (
		<div className={styles.layout}>
			<Steps
				progressDot
				current={Object.keys(data).length - 1}
				direction="vertical"
				className={styles.steps}
				items={Object.keys(data)
					.sort((a, b) => a.split(",")[0] - b.split(",")[0])
					.map((item) => ({
						title: item.split(",")[1],
						description: (
							<MyTable data={data[item]} type={item.split(",")[1]} />
						),
					}))}
			/>
		</div>
	);
};
