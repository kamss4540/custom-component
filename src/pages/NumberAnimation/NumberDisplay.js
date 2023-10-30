import React, { memo, useEffect, useMemo, useRef, useState } from "react";
import styles from "./index.module.less";
import ReactDOM from "react-dom";

export default (props) => {
	const { data, count, config = {} } = props;
	const { textStyles, wrapperStyles } = config;

	const myRef = useRef();

	useEffect(() => {
		if (isNaN(data)) return;
		myRef.current.innerHTML = "<div></div>";
		let children = React.createElement(Content, { data, textStyles });
		ReactDOM.render(children, myRef.current.children[0]);
	}, [count]);

	if (isNaN(data)) {
		return (
			<div className={styles.digitWrapper} style={wrapperStyles}>
				<span className={styles.digitList}>
					<span className={styles.digit} style={textStyles}>
						{data}
					</span>
				</span>
			</div>
		);
	} else {
		return (
			<div
				ref={myRef}
				className={styles.digitWrapper}
				style={wrapperStyles}
			></div>
		);
	}
};

const Content = (props) => {
	const { data, textStyles } = props;
	const listRef = useRef();

	const list = useMemo(() => {
		let arr = [];
		for (let i = 0; i < 10; i++) {
			arr.push(i);
		}
		return arr;
	});

	useEffect(() => {
		setTimeout(() => {
			listRef.current.style = `transform: translate(-50%, ${-data * 20}px)`;
		}, 0);
	}, []);

	return (
		<span ref={listRef} className={styles.digitList}>
			{list.map((item) => (
				<span key={item} className={styles.digit} style={textStyles}>
					{item}
				</span>
			))}
		</span>
	);
};
