import React from "react";
import styles from "./index.module.less";
import MyImg from "./MyImg";

const Monitor = (props) => {
	const { fields, type, data } = props;

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
				{type}
			</div>
			<img
				className={styles.line}
				src={encodeURI(
					"/iocoss/datai/screen/1609737255799529472/images/Group 3.png"
				)}
				width={164}
				height={17}
				alt=""
				loading="lazy"
				decoding="async"
			/>
			<div className={styles.grid}>
				{fields.map((item, index) => (
					<div key={index} className={styles.cell}>
						<MyImg src={item.iconPath} width={50} height={52} />
						<span className={styles.name}>{item.name}</span>
						<div className={styles.desc}>
							<span className={styles.value}>{data[item.itemType] || 0}</span>
							<span className={styles.unit}>个</span>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Monitor;
