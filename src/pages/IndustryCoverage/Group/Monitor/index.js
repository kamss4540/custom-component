import React from "react";
import styles from "./index.module.less";

const Monitor = (props) => {
	console.log("props=>", props);
	const { data } = props;

	return (
		<div className={styles.monitor}>
			<div
				className={styles.title}
				style={{
					backgroundImage: `url(${encodeURI(
						"/iocoss/datai/screen/1609737255799529472/images/Group 2.png"
					)})`,
				}}
			>
				监测对象
			</div>
			<img
				className={styles.line}
				src={encodeURI(
					"/iocoss/datai/screen/1609737255799529472/images/Group 3.png"
				)}
				width={164}
				height={17}
				alt=""
			/>
			<div className={styles.grid}>
				{data.map((item, index) => (
					<div key={index} className={styles.cell}>
						<img src={encodeURI(item.iconPath)} width={50} height={52} alt="" />
						<span className={styles.name}>{item.name}</span>
						<div>
							<span className={styles.value}>999</span>
							<span className={styles.unit}>个</span>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Monitor;
