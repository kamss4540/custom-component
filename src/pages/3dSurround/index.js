import React, { useEffect, useCallback, useState, useMemo } from "react";
import styles from "./index.module.less";
import { ConfigProvider } from "antd";

export default (props) => {
	const list = [
		{
			name: "非居民用报警器",
			value: "188 处",
			iconPath: "./img/编组_16.png",
		},
		{
			name: "调压室监控系统",
			value: "188 处",
			iconPath: "./img/编组_16.png",
		},
		{
			name: "激光甲烷遥测系统",
			value: "188 处",
			iconPath: "./img/编组_16.png",
		},
		{
			name: "地下井室官网哨兵",
			value: "188 处",
			iconPath: "./img/编组_16.png",
		},
	];

	useEffect(() => {
		let items = document.getElementsByClassName(styles.cell);
		let coefficient = 20 / items.length;
		for (let i = 0; i < items.length; i++) {
			let val =
				-5 -
				coefficient * i +
				"s," +
				-coefficient * i +
				"s," +
				-coefficient * i +
				"s";
			items[i].style["animation-delay"] = val;
		}
	}, []);

	return (
		<div>
			<div className={styles.center}></div>
			<div>
				{list.map((item, index) => (
					<div key={index} className={styles.cell}
						onMouseEnter={null}
						onMouseOut={null}
					>
						<div className={styles.nameBackground}>
							<span>{item.name}</span>
						</div>
						<div className={styles.desc}>
							<img src={item.iconPath} />
							<span>{item.value}</span>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
