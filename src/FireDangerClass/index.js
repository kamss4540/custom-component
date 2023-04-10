import React, { useState } from "react";
import styles from "./index.module.less";

export default () => {
	const [activeKey, setActiveKey] = useState(0);
	const list = [
		{
			color: "rgba(234, 55, 55, 0.40)",
			borderColor: "rgba(249, 49, 49, 1)",
			boxShadow: "0px 0px 4px 0px rgba(234,55,55,0.5",
			label: "极高火险",
			key: 0,
		},
		{
			color: "rgba(234, 145, 34, 0.40)",
			borderColor: "rgba(253, 160, 41, 1)",
			boxShadow: "0px 2px 4px 0px rgba(234,145,34,0.5)",
			label: "高火险",
			key: 1,
		},
		{
			color: "rgba(255, 233, 31, 0.40)",
			borderColor: "rgba(253, 237, 27, 1)",
			boxShadow: "0px 0px 4px 0px rgba(255,233,31,0.5)",
			label: "较高火险",
			key: 2,
		},
		{
			color: "rgba(101, 168, 255, 0.60)",
			borderColor: "rgba(121, 176, 255, 1)",
			boxShadow: "0px 0px 4px 0px rgba(101,168,255,0.5)",
			label: "较低火险",
			key: 3,
		},
		{
			color: "rgba(0, 202, 255, 0.50)",
			borderColor: "rgba(52, 205, 245, 1)",
			boxShadow: "0px 0px 4px 0px rgba(48,223,245,0.5)",
			label: "低火险",
			key: 4,
		},
	];
	return (
		<div className={styles.layout}>
			{list.map((item, index) => (
				<div
					key={index}
					className={`${styles.item} ${
						activeKey == item.key ? styles.active : ""
					}`}
				>
					<i
						className={styles.icon}
						style={{ background: item.color, borderColor: item.borderColor }}
					/>
					<span>{item.label}</span>
				</div>
			))}
		</div>
	);
};
