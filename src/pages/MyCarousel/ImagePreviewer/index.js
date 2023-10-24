import React, { useEffect, useState } from "react";
import styles from "./index.module.less";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";

export default (props) => {
	const { data, index } = props;

	const [count, setCount] = useState(0);

	useEffect(() => {
		setCount(index);
	}, []);

	const colseModal = () => {
		document.getElementById("$customCarousel").parentNode.remove();
	};

	const prev = (e) => {
		e.stopPropagation();
		let temp = count - 1;
		if (temp < 0) {
			setCount(data.length - 1);
		} else {
			setCount(temp);
		}
	};

	const next = (e) => {
		e.stopPropagation();
		let temp = count + 1;
		if (temp > data.length - 1) {
			setCount(0);
		} else {
			setCount(temp);
		}
	};

	return (
		<div
			id="$customCarousel"
			style={{
				position: "absolute",
				top: 0,
				left: 0,
				bottom: 0,
				right: 0,
				display: "flex",
				backgroundColor: "rgb(0, 0, 0, 0.45)",
				zIndex: 9997,
				justifyContent: "center",
				alignItems: "center",
			}}
			onClick={colseModal}
		>
			<img
				src={data?.[count]?.url}
				alt=""
				style={{
					maxWidth: "90%",
					maxHeight: "90%",
					objectFit: "contain",
					cursor: "pointer",
				}}
			/>
			<div className={styles.leftBtn} onClick={prev}>
				<LeftOutlined />
			</div>
			<div className={styles.rightBtn} onClick={next}>
				<RightOutlined />
			</div>
		</div>
	);
};
