import React, { useCallback, useEffect, useRef, useState } from "react";
import styles from "./index.module.less";

const App = () => {
	const list = [
		{
			title: "应急能力",
			subtitle: "应急管理",
			key: "1",
		},
		{
			title: "危险性",
			subtitle: "突发事件",
			key: "2",
		},
		{
			title: "脆弱性",
			subtitle: "承灾载体",
			key: "3",
		},
	];

	const container = useRef(null);
	// 整体旋转的角度
	const startAngle = useRef(90);
	// 自动播放定时器
	const timer = useRef(null);
	// 当前激活的元素下标
	const [active, setActive] = useState(0);
	// 鼠标在容器上
	const [hover, setHover] = useState(false);

	const autoSwitch = useCallback(() => {
		timer.current && clearInterval(timer.current);
		if (!hover) {
			timer.current = setInterval(() => {
				let next = (active + 1) % list.length;
				onClick(list[next], next);
			}, 2000);
		}
	}, [active, hover]);

	useEffect(() => {
		autoSwitch();

		return () => {
			timer.current && clearInterval(timer.current);
		};
	}, [autoSwitch]);

	useEffect(() => {
		const width = container.current.clientWidth;
		const height = container.current.clientHeight;
		let elementPositions = calculateEllipsePositions(width, height, 3);
		elementPositions.forEach((item, index) => {
			container.current.children[index].style.transform = `translate(${
				item.x - container.current.children[index].clientWidth / 2
			}px, ${
				item.y - container.current.children[index].clientHeight / 2
			}px)`;
		});
	}, []);

	/**
	 * 计算每个元素的位置
	 * @param {number} containerWidth 容器宽
	 * @param {number} containerHeight 容器高
	 * @param {number} numberOfElements 元素个数
	 * @returns
	 */
	const calculateEllipsePositions = (
		containerWidth,
		containerHeight,
		numberOfElements
	) => {
		var centerX = containerWidth / 2;
		var centerY = containerHeight / 2;
		var a = containerWidth / 2;
		var b = containerHeight / 2;
		var positions = [];

		for (var i = 0; i < numberOfElements; i++) {
			var angle =
				(i / numberOfElements) * 2 * Math.PI +
				(startAngle.current * Math.PI) / 180;
			var x = centerX + a * Math.cos(angle);
			var y = centerY + b * Math.sin(angle);
			positions.push({ x: x, y: y });
		}

		return positions;
	};

	const onClick = (item, index) => {
		if (active === index) {
			return;
		}
		// 计算将点击的元素旋转到正下方需要旋转的角度
		let diff = (index - active) * 2;
		if (2 * Math.abs(diff) > list.length) {
			diff = diff > 0 ? diff - list.length : diff + list.length;
		}
		setActive(index);
		goto(diff * 120);
	};

	/**
	 * 整体旋转
	 * @param {*} target 旋转多少度
	 */
	const goto = (target) => {
		let count = startAngle.current + target;
		// 超过360之后重置避免数字过大
		if (count > 360) {
			count -= 360;
			startAngle.current -= 360;
		} else if (count < 360) {
			count += 360;
			startAngle.current += 360;
		}

		let step = 0;
		if (count < startAngle.current) {
			step = -4;
		} else if (count > startAngle.current) {
			step = 4;
		}
		const move = () => {
			startAngle.current += step;
			const width = container.current.clientWidth;
			const height = container.current.clientHeight;
			let elementPositions = calculateEllipsePositions(width, height, 3);
			elementPositions.forEach((item, index) => {
				container.current.children[
					index
				].style.transform = `translate(${
					item.x - container.current.children[index].clientWidth / 2
				}px, ${
					item.y - container.current.children[index].clientHeight / 2
				}px)`;
			});
			if (Math.abs(count - startAngle.current) < 4) {
				startAngle.current = count;
			} else {
				if (step > 0) {
					if (count - startAngle.current > 0) {
						requestAnimationFrame(move);
					}
				} else if (step < 0) {
					if (count - startAngle.current < 0) {
						requestAnimationFrame(move);
					}
				}
			}
		};
		move(count);
	};

	const onMouseOver = () => {
		setHover(true);
		timer.current && clearTimeout(timer.current);
	};

	const onMouseOut = () => {
		setHover(false);
		autoSwitch();
	};

	return (
		<div
			ref={container}
			className={styles.container}
			onMouseOver={onMouseOver}
			onMouseOut={onMouseOut}
		>
			{list.map((item, index) => (
				<div
					key={item.key}
					className={`${styles["dot" + index]} ${
						index === active ? styles.active : ""
					}`}
					onClick={() => onClick(item, index)}
				>
					<div className={styles.card}>
						<div className={styles.title}>{item.title}</div>
						<div className={styles.subtitle}>{item.subtitle}</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default App;
