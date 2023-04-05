import React, { useEffect, useRef } from "react";
import styles from "./index.module.less";
import EchartCom from "../../../RollEcharts";

export default (props) => {
	const timer = useRef();
	const ref1 = useRef();

	useEffect(() => {
		roll();
		return unload;
	}, []);

	const unload = () => {
		cancelAnimationFrame(timer.current);
	};

	const roll = () => {
		window.$ref1 = ref1.current;
		unload();
		step(hander);
	};

	const hander = () => {
		if (!ref1.current) return;
		ref1.current.scrollTop += 1;
	};

	const step = () => {
		hander();
		timer.current = window.requestAnimationFrame(step);
	};

	const onScroll = (e) => {
		const height = ref1.current.firstChild.offsetHeight;
		if (ref1.current.scrollTop >= height) {
			ref1.current.scrollTop = 0;
		}
	};

	const { style } = props.data;

	return (
		<div
			className={styles.roll_layout}
			ref={(e) => (ref1.current = e)}
			onMouseOver={unload}
			onMouseLeave={roll}
			onScroll={onScroll}
			style={style}
		>
			{props.children}
			{props.children}
		</div>
	);
};
