import React, { useEffect, useCallback, useState, useMemo } from "react";
import styles from "./index.module.less";

const App = (props) => {
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

	const onMouseOver = () => {
		let items = document.getElementsByClassName(styles.cell);
		for (var i = 0; i < items.length; i++) {
			(function (i) {
				items[i].classList.add(styles.paused);
			})(i);
		}
	};

	const onMouseOut = () => {
		let items = document.getElementsByClassName(styles.cell);
		for (var i = 0; i < items.length; i++) {
			(function (i) {
				items[i].classList.remove(styles.paused);
			})(i);
		}
	};

	return (
		<div>
			<div className={styles.center}></div>
			<div>
				{list.map((item, index) => (
					<div
						key={index}
						className={styles.cell}
						onMouseOver={onMouseOver}
						onMouseOut={onMouseOut}
					>
						<div className={styles.nameBackground}>
							<span>{item.name}</span>
						</div>
						<div className={styles.desc}>
							<img src={item.iconPath} alt="" />
							<span>{item.value}</span>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default App;
