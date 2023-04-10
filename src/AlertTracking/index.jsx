// 警情跟踪
import React, { useMemo } from "react";
import styles from "./index.module.less";
import ProgressBar from "./ProgressBar";

export default () => {
	const list = useMemo(() => {
		return data.filter((item) => {
			if (item.statusName == "无需处置" && item.num == 0) {
				return false;
			}
			return true;
		});
	}, [data]);

	const total = useMemo(() => {
		let sum = 0;
		data.forEach((item) => {
			sum += item.num;
		});
		return sum;
	}, [data]);

	const getWidth = () => {
		let length = list.length;
		let result = 82;
		if (length == 5) {
			result = "14%";
		} else if (length == 4) {
			result = "18%";
		}
		return result;
	};

	// 根据statusName获取对应的颜色
	const getColor = (statusName) => {
		let color = "";
		switch (statusName) {
			case "待处置":
				color =
					"linear-gradient(90deg, rgba(238,75,24,0) 0%, #EE4B18 61%, #FFA18B 100%)";
				break;
			case "处置中":
				color =
					"linear-gradient(90deg, rgba(24,133,238,0) 0%, #188EEE 61%, #8BBFFF 100%)";
				break;
			case "处置完成":
				color =
					"linear-gradient(90deg, rgba(24,238,98,0) 0%, #18EEAC 61%, #8BFFDE 100%)";
				break;
			case "已响应":
				color =
					"linear-gradient(90deg, rgba(101,24,238,0) 0%, #7F18EE 61%, #D58BFF 100%)";
				break;
			case "无需处置":
				color =
					"linear-gradient(90deg, rgba(24,238,230,0) 0%, #18C9EE 61%, #8BF8FF 100%)";
				break;
			case "督办已完成":
				color =
					"linear-gradient(90deg, rgba(24,238,98,0) 0%, #18EEAC 61%, #8BFFDE 100%)";
				break;
			case "督办未完成":
				color =
					"linear-gradient(90deg, rgba(238,140,24,0) 0%, #EE9718 61%, #FFC18B 100%)";
				break;
			default:
				break;
		}
		return color;
	};

	const onClick = (item) => {
        // num
        // statusCode
        // statusName
		let target = document.querySelector(
			'[data-key="group_efiLZXU6yS6ay88TiJNUbE"]'
		);
		if (target) {
			target.style.display = "block";
		}
	};

	return (
		<div style={{ width: 477 }}>
			<div className={styles.layout}>
				{list.map((item, index) => {
					return (
						<div
							className={styles.item}
							key={index}
							style={{ width: getWidth() }}
							onClick={() => onClick(item)}
						>
							<div className={styles.num}>{item.num}</div>
							<ProgressBar
								percent={(item.num / total) * 100}
								color={getColor(item.statusName)}
							/>
							<div className={styles.name}>{item.statusName}</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

let data = [
	{ num: 0, statusName: "督办未完成", statusCode: "1" },
	{ num: 0, statusName: "督办已完成", statusCode: "2" },
];
