import React, { useEffect, useState, useRef } from "react";
import styles from "./index.module.less";
import ReactDOM from "react-dom";

const SmartCenter = (props) => {
	const [active, setActive] = useState({
		label: "",
		imgs: [],
	});

	const contentRef = useRef();

	useEffect(() => {
		setActive(btnlist[0]);
	}, []);

	const onNameClick = (data) => {
		window.globalEventEmitter.emit(data.event, data.data);
	};

	// 生成图片组
	const renderImgGroup = (obj) => {
		return (
			<div className={` ${styles["num_" + obj.imgs.length]} `}>
				{obj.imgs.map((item) => (
					<div
						key={item.url}
						onClick={() => onNameClick(item)}
						className={styles.element}
					>
						<img src={item.url} alt="" />
						<span>{item.name}</span>
					</div>
				))}
			</div>
		);
	};

	const onClick = (btn) => {
		if (btn.label === active.label) return;
		// 动画开始前如果已经有两个图片则组删除第一个
		if (contentRef.current.children.length > 1) {
			contentRef.current.removeChild(contentRef.current.children[0]);
		}
		if (btn.imgs.length) {
			setActive(btn);

			// 创建一个新dom
			let tar = document.createElement("div");
			// 设置起始位置
			tar.style.transform = "translateY(800px)";
			// 生成新的图片组
			let children = React.createElement(renderImgGroup, btn);
			// 把新的dom插入目标位置
			contentRef.current.append(tar);
			// 把图片组渲染到新建dom上
			ReactDOM.render(children, contentRef.current.children[1]);
			setTimeout(() => {
				contentRef.current.children[0].style.transform = "translateY(-800px)";
				tar.style.transform = "translateY(0)";
			}, 0);
		}
	};

	return (
		<div className={styles.smartCenter_layout}>
			<div className={styles.header}>
				<i className={styles.header_icon} />
				<span>智能中心</span>
			</div>
			<div className={styles.content}>
				<div
					ref={(e) => (contentRef.current = e)}
					className={`${styles.center_bg}`}
				>
					<div>{renderImgGroup(btnlist[0])}</div>
				</div>
				<div>
					{btnlist.map((item, index) => (
						<div
							key={item.label}
							className={`${styles.btn} ${styles["position_" + index]} ${
								index > 4 ? styles.right : ""
							} ${item.label === active.label ? styles.active : ""}`}
							onClick={() => onClick(item)}
						>
							<span>{item.label}</span>
						</div>
					))}
				</div>
			</div>
			{/* 由于客户反应每次切换都要加载图片，这里先把图片全部缓存 */}
			<div style={{ display: "none" }}>
				{btnlist.map((i) =>
					i.imgs.map((j) => <img key={j.url} src={j.url} alt="" />)
				)}
			</div>
		</div>
	);
};

export default SmartCenter;

const btnlist = [
	{
		label: "精准治气",
		imgs: [
			{
				name: "精准治气主页",
				url: "/iocoss/$[bucketName]/custom/1588449679633207296/images/精准治气.png",
				event: "goToPreciseAir",
				data: { target: "_blank" },
			},
			{
				name: "大气预测预警",
				url: "/iocoss/$[bucketName]/custom/1588449679633207296/images/大气预测预警.png",
				event: "outLinkTo",
				data: "dqjcyj",
			},
			{
				name: "大气热点网格筛查",
				url: "/iocoss/$[bucketName]/custom/1588449679633207296/images/大气热点网格筛查.png",
				event: "outLinkTo",
				data: "dqrdwgsb",
			},
			{
				name: "大气管理风险识别",
				url: "/iocoss/$[bucketName]/custom/1588449679633207296/images/大气管理风险识别.png",
				event: "outLinkTo",
				data: "dqfxgl",
			},
		],
	},
	{
		label: "精准治水",
		imgs: [
			{
				name: "精准治水主页",
				url: "/iocoss/$[bucketName]/custom/1588449679633207296/images/精准治水.png",
				event: "goToPreciseWater",
				data: { target: "_blank" },
			},
			{
				name: "水质风险预警",
				url: "/iocoss/$[bucketName]/custom/1588449679633207296/images/水质风险预警.png",
				event: "outLinkTo",
				data: "szfxyj",
			},
			{
				name: "水质预测分析",
				url: "/iocoss/$[bucketName]/custom/1588449679633207296/images/水质预测分析.png",
				event: "outLinkTo",
				data: "szycfx",
			},
			{
				name: "污染溯源",
				url: "/iocoss/$[bucketName]/custom/1588449679633207296/images/污染溯源2.png",
				event: "outLinkTo",
				data: "szwrsy",
			},
			{
				name: "水生态健康评价",
				url: "/iocoss/$[bucketName]/custom/1588449679633207296/images/水生态健康评价.png",
				event: "outLinkTo",
				data: "sstjkpj",
			},
		],
	},
	{
		label: "精准治废",
		imgs: [
			{
				name: "精准治废主页",
				url: "/iocoss/$[bucketName]/custom/1588449679633207296/images/精准治废.png",
				event: "outLinkTo",
				data: "wfjzzf",
			},
			{
				name: "建设监测",
				url: "/iocoss/$[bucketName]/custom/1588449679633207296/images/画像分析(无废指数).png",
				event: "outLinkTo",
				data: "zshxfx",
			},
			{
				name: "监测预警",
				url: "/iocoss/$[bucketName]/custom/1588449679633207296/images/监测预警(闭环跟踪).png",
				event: "outLinkTo",
				data: "zsjcyj",
			},
			{
				name: "风险识别",
				url: "/iocoss/$[bucketName]/custom/1588449679633207296/images/风险识别.png",
				event: "outLinkTo",
				data: "zsfxsb",
			},
		],
	},
	{
		label: "精准治土",
		imgs: [
			{
				name: "精准治土主页",
				url: "/iocoss/$[bucketName]/custom/1588449679633207296/images/精准治土主页.png",
				event: "outLinkTo",
				data: "jzzt",
			},
			{
				name: "风险识别",
				url: "/iocoss/$[bucketName]/custom/1588449679633207296/images/精准治土-风险识别.png",
				event: "outLinkTo",
				data: "kflyjg",
			},
			{
				name: "目标管理",
				url: "/iocoss/$[bucketName]/custom/1588449679633207296/images/目标管理.png",
				event: "outLinkTo",
				data: "zdjsyd",
			},
		],
	},
	{
		label: "陆海协同",
		imgs: [
			{
				name: "陆海协同治污主页",
				url: "/iocoss/$[bucketName]/custom/1588449679633207296/images/陆海协同治污.png",
				event: "outLinkTo",
				data: "lhxtzw",
			},
		],
	},
	{
		label: "减污降碳",
		imgs: [
			{
				name: "减污降碳主页",
				url: "/iocoss/$[bucketName]/custom/1588449679633207296/images/减污降碳.png",
				event: "outLinkTo",
				data: "jwjtznmk",
			},
			{
				name: "减污降碳指数评价",
				url: "/iocoss/$[bucketName]/custom/1588449679633207296/images/减污降碳协同增效水平智能研判.png",
				event: "outLinkTo",
				data: "jwjtxtzx",
			},
			{
				name: "碳排放动态监测",
				url: "/iocoss/$[bucketName]/custom/1588449679633207296/images/碳排放监测分析.png",
				event: "outLinkTo",
				data: "tfxyc",
			},
		],
	},
	{
		label: "环评准入",
		imgs: [
			{
				name: "环评准入智能研判",
				url: "/iocoss/$[bucketName]/custom/1588449679633207296/images/环境准入智能研判.png",
				event: "outLinkTo",
				data: "hjzr_znyp",
			},
			{
				name: "项目环评预测预警",
				url: "/iocoss/$[bucketName]/custom/1588449679633207296/images/项目环评预测预警.png",
				event: "outLinkTo",
				data: "hjzr_znyj",
			},
		],
	},
	{
		label: "环境问题发现",
		imgs: [],
	},
	{
		label: "环保监管",
		imgs: [
			{
				name: "分级分类监管",
				url: "/iocoss/$[bucketName]/custom/1588449679633207296/images/分级分类监管.png",
				event: "outLinkTo",
				data: "fjfljg",
			},
		],
	},
];
