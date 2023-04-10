// 进度条组件
import React from "react";
import styles from "./index.module.less";

export default (props) => {
	const { percent, color } = props;

	return (
		<div className={styles.progress_bar}>
			<div
				className={styles.progress_bar_percent}
				style={{
					width: `${percent}%`,
					background: color,
				}}
			/>
		</div>
	);
};
