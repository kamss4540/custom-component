import React, { useEffect, useState, useRef } from "react";
import mockData from "./mockData";
import $ from "jquery";
import styles from "./index.module.less";

export default () => {
	const [data, setData] = useState();
	const myRef = useRef(null);
	// 播放器实例
	const jessibuca = useRef(null);

	useEffect(() => {
		fetchData();
		create();
	}, []);

	// 用ajax获取数据
	const fetchData = () => {
		$.ajax({
			url: "http://10.35.60.33:1985/api/play/start/21010000002000000116/21010000581314000063",
			type: "get",
			dataType: "json",
			success: function (res) {
				console.log("fetchData=>", res);
				if (res.code === 0) {
					setData(res.data);
				} else if (res.code === 100) {
					fetchData();
				}
			},
			error: function (err) {
				console.log(err);
			},
		});
	};

	const create = () => {
		jessibuca.current = new window.Jessibuca({
			container: myRef.current,
			videoBuffer: 0.2, // 缓存时长
			isResize: false,
			text: "",
			loadingText: "加载中",
			debug: true,
			showBandwidth: true, // 显示网速
			// operateBtns: {
			// 	fullscreen: this.showOperateBtns,
			// 	screenshot: this.showOperateBtns,
			// 	play: this.showOperateBtns,
			// 	audio: this.showOperateBtns,
			// },
			// forceNoOffscreen: this.forceNoOffscreen,
			isNotMute: false,
		});
	};

	const play = () => {
		jessibuca.current.play(data.flv);
	};

	return (
		<div>
			<p>VideoSurveillance</p>
			<div ref={(e) => (myRef.current = e)} className={styles.ccontainer} />
			<button onClick={play}>播放</button>
		</div>
	);
};

