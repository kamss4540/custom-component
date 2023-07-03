import React, { useState, useRef } from "react";
import styles from "./index.module.less";
import Monitor from './Monitor'

const Group = (props) => {
	const { data } = props;

	const [activeIndex, setActiveIndex] = useState(0);
	const headerRef = useRef(null);

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

	return (
		<>
			<div className={styles.groupHeader}>
				<i
					className={styles.triangle}
					style={{
						backgroundImage:
							"url(/iocoss/datai/screen/1609737255799529472/images/三角形%202164%20拷贝%208%20copy%203.png)",
						transform: "rotate(180deg)",
					}}
					onClick={() => pageTurning("left")}
				/>
				<div className={styles.middle}>
					<div ref={headerRef} className={styles.tabs}>
						{data.map((item, index) => (
							<div
								key={index}
								className={styles.cell}
								onClick={() => setActiveIndex(index)}
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

				<i
					className={styles.triangle}
					style={{
						backgroundImage:
							"url(/iocoss/datai/screen/1609737255799529472/images/三角形%202164%20拷贝%208%20copy%203.png)",
					}}
					onClick={() => pageTurning("right")}
				/>
			</div>
			<div className={styles.content}>
				<Monitor data={data[10].object} />
				
			</div>
		</>
	);
};

export default Group;
