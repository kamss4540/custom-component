// 警情跟踪 - 报警跟踪
import React, { useMemo } from "react";
import styles from "./index.module.less";
import ProgressBar from "./ProgressBar";

export default (props) => {
	const { data } = props;
	const list = useMemo(() => {
		if (data && data.length) {
			return data.length
				? data.filter((item) => {
						if (item.statusName == "无需处置" && item.num == 0) {
							return false;
						}
						return true;
				  })
				: [];
		} else {
			return [];
		}
	}, [data]);

	const total = useMemo(() => {
		let sum = 0;
		list.forEach((item) => {
			sum += item.num;
		});
		return sum;
	}, [list]);

	const getWidth = () => {
		let length = list.length;
		let result = 82;
		if (length == 5) {
			result = "18%";
		} else if (length == 4) {
			result = "22%";
		} else if (length == 2) {
			result = "46%";
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

	// const onClick = (obj) => {
	// 	// 弹窗元素
	// 	let target = document.querySelector(
	// 		'[data-key="group_efiLZXU6yS6ay88TiJNUbE"]'
	// 	);
	// 	setDateRange();
	// 	// 设置状态码
	// 	setStoreData(
	// 		"store_group_4eJ49Yvt4BHPoNV5E3zAaR-dwQaTKqniBFNGPyvpuHtF6",
	// 		obj.statusCode
	// 	);
	// 	// 触发请求的key，每次变化时，都会触发请求
	// 	let triggerKey =
	// 		"store_group_4eJ49Yvt4BHPoNV5E3zAaR-uzrj1Hg9pBt3nuucjG4b2c";
	// 	let falg = getDataByKey(triggerKey);
	// 	setStoreData(triggerKey, falg + 1);

	// 	if (target) {
	// 		target.style.display = "block";
	// 	}
	// };

	// 设置时间范围
	// const setDateRange = () => {
	// 	// 时间类型
	// 	let timeType = getDataByKey(
	// 		"store_group_e554fda892b44fd3b847cdbb28ddda8d-2760468f8e8b4f419a7c2c65dc743b38"
	// 	);
	// 	let timeRange = [];
	// 	if (timeType == 0) {
	// 		timeRange = [];
	// 	} else if (timeType == 1) {
	// 		timeRange = [
	// 			moment().format("YYYY-MM-DD 00:00:00"),
	// 			moment().format("YYYY-MM-DD HH:mm:ss"),
	// 		];
	// 	} else if (timeType == 2) {
	// 		timeRange = [
	// 			moment().startOf("week").add(1, "d").format("YYYY-MM-DD HH:mm:ss"),
	// 			moment().format("YYYY-MM-DD HH:mm:ss"),
	// 		];
	// 	} else if (timeType == 3) {
	// 		timeRange = [
	// 			moment(moment().startOf("month")).format("YYYY-M-D HH:mm:ss"),
	// 			moment().format("YYYY-MM-DD HH:mm:ss"),
	// 		];
	// 	} else if (timeType == 4) {
	// 		timeRange = [
	// 			moment(moment().startOf("year")).format("YYYY-M-D HH:mm:ss"),
	// 			moment().format("YYYY-MM-DD HH:mm:ss"),
	// 		];
	// 	}
	// 	setStoreData(
	// 		"store_group_4eJ49Yvt4BHPoNV5E3zAaR-2BA2cKks3FuKwHW4PWrKqF",
	// 		timeRange
	// 	);
	// };

	return (
		<div className={styles.layout}>
			{list.map((item, index) => {
				return (
					<div
						className={styles.item}
						key={index}
						style={{ width: getWidth() }}
						// onClick={() => onClick(item)}
					>
						<div className={styles.num}>{item.num}</div>
						<div className={styles.interlayer}>
							<ProgressBar
								percent={total ? (item.num / total) * 100 : 0}
								color={getColor(item.statusName)}
							/>
						</div>
						<div className={styles.name}>{item.statusName}</div>
					</div>
				);
			})}
		</div>
	);
};
