import React from "react";
import styles from "./index.module.less";

const Pie = () => {
	const totalDots = 32;

	const generateDots = () => {
		const dots = [];
		for (let i = 0; i < totalDots; i++) {
			dots.push(<div key={i} className={`${styles["dot" + i]} `} />);
		}
		return dots;
	};
	return <div className={styles.clock_container}>{generateDots()}</div>;
};

export default Pie;
