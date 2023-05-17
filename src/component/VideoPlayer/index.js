import React, { useCallback, useEffect, useRef, useState } from "react";
import styles from "./index.module.less";

const VideoPlayer = (props) => {
	const { data } = props;

	const videoRef = useRef(null);
	const jessibuca = useRef(null);
	const timer = useRef(null);
	const count = useRef(0);

	// 加载jessibuca状态
	const [loading, setLoading] = useState(true);
	// 是否显示信息图层
	const [isShowInfo, setIsShowInfo] = useState(false);
	// 连接状态
	const [connectStatus, setConnectStatus] = useState(1);
	// url
	const [url, setUrl] = useState("");

	// 状态
	const status = {
		1: "正在请求资源...",
		2: "摄像头无法连接，请稍后再试",
	};

	useEffect(() => {
		importJessibuca();
	}, []);

	// 创建jessibuca
	const create = useCallback(() => {
		destroy();
		jessibuca.current = new window.JessibucaPro({
			container: videoRef.current,
			videoBuffer: 0.2, // 缓存时长
			isResize: false,
			text: "",
			loadingText: "",
			decoder:
				"/iocoss/datai/custom/1640190958838022144/other/decoder-pro-simd.js",
			// useMSE: true, // 是否开启MediaSource硬解码
			useSIMD: true,
			// useWCS: true, // 是否开启Webcodecs硬解码
			debug: false,
			hasAudio: false,
			// showBandwidth: showOperateBtns, // 显示网速
			forceNoOffscreen: true,
			isNotMute: false,
		});
		jessibuca.current.on("start", () => {
			setIsShowInfo(false);
		});
		jessibuca.current.on("error", (err) => {
			console.info("error=>", err);
		});
		jessibuca.current.on("timeout", (e) => {
			console.info("timeout=>", e);
		});
		jessibuca.current.on("loadingTimeout", (e) => {
			console.info("loadingTimeout=>", e);
		});
	}, []);

	// 请求播放地址
	const requestPlayUrl = useCallback(() => {
		if (data?.videoUrl) {
			setConnectStatus(1);
			setIsShowInfo(true);
			window.$.get(data.videoUrl, (res) => {
				if (res.code === 0) {
					count.current = 0;
					// create();
					setUrl(res.data.flv);
					// play(res.data.flv);
				} else if (res.code === 100) {
					// 收流超时 | 点播失败
					if (count.current > 2) {
						if (data.initiative) {
							setConnectStatus(2);
						} else {
						}
					} else {
						count.current += 1;
						clearTimeout(timer.current);
						timer.current = setTimeout(() => {
							requestPlayUrl();
						}, 3000);
					}
				}
			});
		}
	}, [create, data.videoUrl]);

	useEffect(() => {
		requestPlayUrl();
		return () => {
			clearTimeout(timer.current);
			destroy();
		};
	}, [data, requestPlayUrl]);

	useEffect(() => {
		if (!loading) {
			create();
			play(url);
		}
	}, [loading, url]);

	// 播放
	const play = (url) => {
		if (jessibuca.current && url) {
			jessibuca.current.play(url);
		}
	};

	// 销毁
	const destroy = () => {
		if (jessibuca.current) {
			jessibuca.current.destroy();
			jessibuca.current = null;
		}
	};

	// 引入jessibuca
	const importJessibuca = () => {
		window.$.getScript(
			"/iocoss/datai/custom/1640190958838022144/other/jessibuca-pro-demo.js"
		).then((res) => {
			if (res) {
				setLoading(false);
			}
		});
	};

	return (
		<div className={styles.video_player}>
			<div ref={videoRef} className={styles.v_instance} />
			{isShowInfo ? (
				<div className={styles.v_info}>
					<div className={styles.status}>
						<span className={styles.msg}>{status[connectStatus]}</span>
					</div>
				</div>
			) : null}
		</div>
	);
};

export default VideoPlayer;
