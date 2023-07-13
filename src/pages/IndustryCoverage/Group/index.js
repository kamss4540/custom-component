import React, { useState, useRef, useEffect, useCallback } from "react";
import styles from "./index.module.less";
import Monitor from "./Monitor";

const Group = (props) => {
	const { fields, data } = props;

	const [activeIndex, setActiveIndex] = useState(0);
	const headerRef = useRef(null);
	const scrollRef = useRef(null);
	const timer = useRef(null);

	// 开始轮播
	const startCarousel = useCallback(() => {
		timer.current = setInterval(() => {
			setActiveIndex((prevIndex) => (prevIndex + 1) % fields.length);
		}, 5000);
	}, [fields.length]);

	useEffect(() => {
		startCarousel();
		return () => {
			timer.current && clearInterval(timer.current);
		};
	}, [startCarousel]);

	const pageTurning = (direction) => {
		const ele = headerRef.current;
		// 步长
		const step = ele.parentElement.clientWidth;
		window.temp1 = ele;
		// 当前translateX的数字
		const current = Number(
			ele.style.transform.replace(/translateX\((.*)px\)/, "$1")
		);
		let target = 0;
		if (direction === "right") {
			// 目标translateX的数值
			target = current - step;
			// 如果目标数值小于最小值，就等于最小值
			let min = 0;
			ele.childNodes.forEach((item) => {
				min -= item.clientWidth;
			});
			if (target < min) {
				target = min;
			}
		} else {
			// 目标translateX的数值
			target = current + step;
			// 如果目标数值大于最大值，就等于最大值
			if (target > 0) {
				target = 0;
			}
		}
		ele.style.transform = `translateX(${target}px)`;
	};

	const onTabClick = (index) => {
		setActiveIndex(index);
		// 点击tab时，将对应的内容移动到content位置
		const ele = scrollRef.current;
		const step = ele.childNodes[0].clientWidth;
		ele.style.transform = `translateX(-${step * index}px)`;
		// 点击tab时，如果选中的cell元素不在可视区域内，则移动到可视区域内
		// 容器元素
		const headerEle = headerRef.current;
		const containerEle = headerRef.current.parentNode;
		// 当前选中的cell元素
		const currentEle = headerRef.current.childNodes[index];
		// 当前选中的cell元素的左边距
		const currentEleLeft = currentEle.offsetLeft;
		// 当前选中的cell元素的宽度
		const currentEleWidth = currentEle.clientWidth;
		// 容器的左边距
		const containerEleLeft = 0;
		// 容器的宽度
		const containerEleWidth = containerEle.clientWidth;
		// 容器的右边距
		const containerEleRight = containerEleLeft + containerEleWidth;
		// 当前选中的cell元素的右边距
		const currentEleRight = currentEleLeft + currentEleWidth;
		if (currentEleLeft <= containerEleLeft) {
			headerEle.style.transform = `translateX(${
				containerEleLeft - currentEleLeft
			}px)`;
		}
		if (currentEleRight > containerEleRight) {
			headerEle.style.transform = `translateX(${
				containerEleRight - currentEleRight
			}px)`;
		}
	};

	useEffect(() => {
		onTabClick(activeIndex);
	}, [activeIndex]);

	return (
		<div>
			<div className={styles.groupHeader}>
				{fields.length > 5 ? (
					<i
						className={styles.triangle}
						style={{
							backgroundImage:
								"url(/iocoss/datai/screen/1609737255799529472/images/三角形%202164%20拷贝%208%20copy%203.png)",
							transform: "rotate(180deg)",
						}}
						onClick={() => pageTurning("left")}
					/>
				) : (
					<i className={styles.triangle} style={{ cursor: "default" }} />
				)}

				<div className={styles.middle}>
					<div ref={headerRef} className={styles.tabs}>
						{fields.map((item, index) => (
							<div
								key={index}
								className={styles.cell}
								onClick={() => onTabClick(index)}
							>
								<div
									className={styles.spotlight}
									style={{
										backgroundImage:
											"url(/iocoss/datai/screen/1609737255799529472/images/合成1_00000_iSpt.png)",
									}}
								>
									<img src={item.iconPath} width={37} height={37} alt="" />
								</div>
								<div
									className={styles.industryTitle}
									style={
										activeIndex === index
											? {
													backgroundImage:
														"url(/iocoss/datai/screen/1609737255799529472/images/Group%207.png)",
											  }
											: null
									}
								>
									<i
										className={styles.defaultDot}
										style={
											activeIndex === index
												? { backgroundColor: "#FFC73A" }
												: null
										}
									/>
									<span>{item.label}</span>
								</div>
							</div>
						))}
					</div>
				</div>

				{fields.length > 5 ? (
					<i
						className={styles.triangle}
						style={{
							backgroundImage:
								"url(/iocoss/datai/screen/1609737255799529472/images/三角形%202164%20拷贝%208%20copy%203.png)",
						}}
						onClick={() => pageTurning("right")}
					/>
				) : (
					<i className={styles.triangle} style={{ cursor: "default" }} />
				)}
			</div>
			<div className={styles.content}>
				<div ref={scrollRef} className={styles.pictureScroll}>
					{fields.map((item, index) => (
						<div key={index} className={styles.page}>
							<Monitor
								fields={fields[index].object}
								type="监测对象"
								data={data}
							/>
							<Monitor
								fields={fields[index].equipment}
								type="监测设备"
								data={data}
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Group;
