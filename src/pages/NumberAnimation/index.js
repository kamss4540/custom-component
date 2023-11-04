import React, { useEffect, useRef, useState } from "react";
import NumberDisplay from "./NumberDisplay";
import styles from "./index.module.less";

let _data = {
	value: "12345/67890",
	config: {
		textStyles: {
			fontSize: 30,
			fontFamily: "huxiaobo",
			fontWeight: "bold",
			backgroundImage:
				"linear-gradient(rgb(255, 255, 255) 0%, rgb(248, 231, 28) 100%)",
			backgroundClip: "text",
			WebkitBackgroundClip: "text",
			WebkitTextFillColor: "transparent",
		},
		wrapperStyles: {
			width: 18,
		},
	},
};
export default (props) => {
	const {
		data: { value, suffix, config = {}, clickFlag },
	} = props;

	const timer = useRef();

	const [count, setCount] = useState(0);

	useEffect(() => {
		if (timer.current) {
			clearInterval(timer.current);
		}
		timer.current = setInterval(() => {
			triggeredUpdates();
		}, 10 * 1000);
		triggeredUpdates();
		return () => {
			clearInterval(timer.current);
		};
	}, [value, clickFlag]);

	const triggeredUpdates = () => {
		setCount((prev) => {
			return prev + 1;
		});
	};

	const extraStyles = {
		height: config.textStyles ? config.textStyles.fontSize : 20,
		lineHeight:
			(config.textStyles.fontSize ? config.textStyles.fontSize + 2 : 20) + "px",

		...config.textStyles,
	};

	return (
		<div className={styles.layout} style={config.layoutStyles}>
			<div className={styles.text}>重点高风险领域</div>
			{typeof value === "string" || typeof value === "number"
				? value
						.toString()
						.replace(/[\u4e00-\u9fa5]/g, "") // 去掉中文字符，有需要可以通过 suffix 添加后缀
						.split("")
						.map((item, index) => {
							if (isNaN(item)) {
								return <span style={extraStyles}>{item}</span>;
							} else {
								return (
									<NumberDisplay
										key={index}
										data={item}
										count={count}
										config={config}
									/>
								);
							}
						})
				: null}
			{suffix ? <span style={config.textStyles}>{suffix}</span> : null}
		</div>
	);
};
