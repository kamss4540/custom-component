import React, { memo, useEffect, useMemo, useRef, useState } from "react";
import styles from "./index.module.less";

export default (props) => {
	const { data, count, config = {} } = props;
	const { textStyles, wrapperStyles } = config;

	const _wrapperStyles = {
		height: textStyles.fontSize ? textStyles.fontSize + 2 : 20,
		...wrapperStyles,
	};

	const _digitStyle = {
		lineHeight: (textStyles.fontSize ? textStyles.fontSize + 2 : 20) + "px",
		...textStyles,
	};

	const myRef = useRef();

	const list = useMemo(() => {
		let arr = [];
		for (let i = 0; i < 10; i++) {
			arr.push(i);
		}
		return arr;
	});

	useEffect(() => {
		myRef.current.style.transition = "none";
		myRef.current.style.transform = "translate(-50%, 0px)";
		setTimeout(() => {
			myRef.current.style = `transform: translate(-50%, ${
				-data * (textStyles.fontSize + 2 || 20)
			}px)`;
		}, 0);
	}, [count]);

	return (
		<div className={styles.digitWrapper} style={_wrapperStyles}>
			<span ref={myRef} className={styles.digitList}>
				{list.map((item) => (
					<span key={item} className={styles.digit} style={_digitStyle}>
						{item}
					</span>
				))}
			</span>
		</div>
	);
};


