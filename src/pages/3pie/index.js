import React, { useEffect, useState } from "react";
import styles from "./index.module.less";

const App = () => {
	const list = [
		{
			title: "应急能力",
			subtitle: "应急管理",
			key: "1",
		},
		{
			title: "危险性",
			subtitle: "突发事件",
			key: "2",
		},
		{
			title: "脆弱性",
			subtitle: "承灾载体",
			key: "3",
		},
	];

	const [active, setActive] = useState("1");

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

	const onClick = (key) => {
		setActive(key);
	};

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
		<div className={styles.container}>
			{list.map((item, index) => (
				<div
					key={item.key}
					className={`${styles.cell} ${styles["dot" + index]} ${
						item.key === active ? styles.active : ""
					}`}
					onMouseOver={onMouseOver}
					onMouseOut={onMouseOut}
				>
					<div
						className={styles.card}
						onClick={() => onClick(item.key)}
					>
						<div className={styles.title}>{item.title}</div>
						<div className={styles.subtitle}>{item.subtitle}</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default App;
