import React, { useState, useEffect } from "react";
import styles from "./index.module.less";
import MyTab from "./component/MyTab";
import ProvinceIndex from "./component/ProvinceIndex";
import AirQualityRanking from "./component/AirQualityRanking";
import Pm25Concentration from "./component/Pm25Concentration";
import AirQualityRating from "./component/AirQualityRating";

export default () => {
	// const [visible, setVisible] = useState(true);

	//数据大屏自适应函数
	const handleScreenAuto = () => {
		const designDraftWidth = 1920; //设计稿的宽度
		const designDraftHeight = 960; //设计稿的高度
		//根据屏幕的变化适配的比例
		const scale =
			document.documentElement.clientWidth /
				document.documentElement.clientHeight <
			designDraftWidth / designDraftHeight
				? document.documentElement.clientWidth / designDraftWidth
				: document.documentElement.clientHeight / designDraftHeight;
		//缩放比例
		document.querySelector(
			"#aqiRankingPopup"
		).style.transform = `scale(${scale}) translate(-50%, -50%)`;
	};

	//React的生命周期 如果你是vue可以放到mountd或created中
	useEffect(() => {
		//初始化自适应  ----在刚显示的时候就开始适配一次
		handleScreenAuto();
		//绑定自适应函数   ---防止浏览器栏变化后不再适配
		window.onresize = () => handleScreenAuto();
		//退出大屏后自适应消失   ---这是react的组件销毁生命周期，如果你是vue则写在deleted中。最好在退出大屏的时候接触自适应
		return () => (window.onresize = null);
	}, []);

	const onclose = () => {};

	const tabs = [
		{ id: 1, title: "综合指数(省内)", content: <ProvinceIndex /> },
		{ id: 2, title: "综合指数(168城市)", content: <AirQualityRanking /> },
		{ id: 3, title: "PM2.5浓度", content: <Pm25Concentration /> },
		{ id: 4, title: "优良率", content: <AirQualityRating /> },
	];

	return (
		<div className={styles.aqiRankingPopup_Layout}>
			<div className={styles.vessel} id="aqiRankingPopup">
				<div className={styles.header}>
					<i className={styles.decorate} />
					<span>大气环境质量排名</span>
				</div>
				<i className={styles.close} onClick={onclose} />
				<div className={styles.content}>
					<MyTab tabs={tabs} />
				</div>
			</div>
		</div>
	);
};
