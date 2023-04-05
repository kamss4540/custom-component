import React, { useRef } from "react";
import { useEffect } from "react";
import styles from "./index.module.less";

const Rotation = () => {
	const containerRef = useRef();
	const list = [
		{ label: 1 },
		{ label: 2 },
		{ label: 3 },
		{ label: 4 },
		{ label: 5 },
		{ label: 6 },
		{ label: 7 },
		{ label: 8 },
		{ label: 9 },
	];

	useEffect(() => {
		start();
	}, []);

	const start = () => {
		let item = document.getElementsByClassName("rotation3D__item");
		let length = item.length;
		let destRotation = Math.PI / 2;

		// 图形间隔：弧度
		let spacing = (2 * Math.PI) / length;
		let itemRotation = destRotation;
		for (let i = 0; i < item.length; i++) {
			const element = item[i];
			itemStyle(element, i, itemRotation);
			itemRotation += spacing;
		}
	};

	const itemStyle = ($item, index, rotation) => {
		let sin = Math.sin(rotation);
		let cos = Math.cos(rotation);
		// 横向半径
		let xr = containerRef.current.offsetWidth * 0.5;
		// 纵向半径
		let yr = containerRef.current.offsetHeight * 0.5;
		// x起点
		let xs = xr;
		// y起点
		let ys = yr;
		let x = xs + cos * xr - $item.offsetWidth * 0.5;
		let y = ys + sin * yr - $item.offsetHeight * 0.5;
		$item.style.position = "absolute";
		$item.style.transform = `translate(${x}px, ${y}px)`;
	};

	const goto = (index) => {
		console.log("index=>", index);
		let item = document.getElementsByClassName("rotation3D__item");
		let length = item.length;
		let destRotation = Math.PI / 2;

		// 图形间隔：弧度
		let spacing = (2 * Math.PI) / length;
		let itemRotation = destRotation + (index + 1) * spacing;
		for (let i = 0; i < item.length; i++) {
			const element = item[i];
			itemStyle(element, i, itemRotation);
			itemRotation += spacing;
		}
	};

	return (
		<div className={styles.layout} ref={(e) => (containerRef.current = e)}>
			{list.map((item, index) => (
				<div
					key={item.label}
					className={`${styles.group} rotation3D__item`}
					onClick={() => goto(index)}
				>
					<span>{item.label}</span>
				</div>
			))}
		</div>
	);
};

export default Rotation;
