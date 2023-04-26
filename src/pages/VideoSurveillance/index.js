import React, { useEffect, useRef, useState } from "react";
import styles from "./index.module.less";
import {
	MenuFoldOutlined,
	MenuUnfoldOutlined,
	RetweetOutlined,
	PauseOutlined,
} from "@ant-design/icons";
import { Layout, Spin } from "antd";
import VideoTree from "./VideoTree";
import VideoVessel from "./VideoVessel";

const { Footer, Sider, Content } = Layout;

const VideoSurveillance = (props) => {
	// 轮播定时器
	const timer = useRef(null);

	// 折叠状态
	const [collapsed, setCollapsed] = useState(false);
	// 加载状态
	const [loading, setLoading] = useState(true);
	// 树形数据
	const [data, setData] = useState([]);
	// 元素位置列表
	const [positionList, setPositionList] = useState([]);
	// 视频列表
	const [videoList, setVideoList] = useState(Array.from({ length: 4 }));
	// 选中的容器
	const [selected, setSelected] = useState(0);
	// 当前布局 1：单屏 4：四屏
	const [layout, setLayout] = useState(4);
	// 轮播状态
	const [isAutoPlay, setIsAutoPlay] = useState(true);

	useEffect(() => {
		importJessibuca();
	}, []);

	useEffect(() => {
		setData(props.data || []);
	}, [props.data]);

	useEffect(() => {
		if (data.length && data[0].children?.length) {
			// 初始化视频列表
			setVideoList(data[0].children.slice(0, 4));
		}
	}, [data]);

	useEffect(() => {
		carousel();
		return () => {
			clearInterval(timer.current);
		};
	}, [isAutoPlay, videoList]);

	// layout 为1时，暂停轮播
	useEffect(() => {
		if (layout === 1) {
			stopCarousel();
		}
	}, [layout]);

	// 轮播
	const carousel = () => {
		if (isAutoPlay) {
			clearInterval(timer.current);
			timer.current = setInterval(() => {
				let _videoList = [];
				// 获取当前视频的下一个视频
				data.forEach((item) => {
					item.children.forEach((child, index) => {
						videoList.forEach((video) => {
							if (video?.moid === child.moid) {
								const getIndex = (num) => (num + 1) % item.children.length;
								_videoList = Array.from({ length: 4 }).map(
									(_, i) => item.children[getIndex(index + i + 1)]
								);
							}
						});
					});
				});
				setVideoList(_videoList);
			}, 45 * 1000);
		}
	};

	// 查询最后一个视频所在的位置
	const getLastVideo = () => {
		let arr = [];
		data.forEach((item, index1) => {
			item.children.forEach((child, index2) => {
				videoList.forEach((video) => {
					if (video?.moid === child.moid) {
						arr[0] = index1;
						arr[1] = index2;
					}
				});
			});
		});
		return arr;
	};

	// 在指定索引的播放器播放下一个视频
	const playNextVideo = (index) => {
		let arr = getLastVideo();
		let _videoList = [...videoList];
		const getIndex = (num) => (num + 1) % data[arr[0]].children.length;
		_videoList[index] = data[arr[0]].children[getIndex(arr[1] + 1)];
		setVideoList(_videoList);
	};

	// 停止轮播
	const stopCarousel = () => {
		setIsAutoPlay(false);
		clearInterval(timer.current);
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
		<div className={styles.video_surveillance}>
			<Layout className={styles.video_layout}>
				<Sider
					trigger={null}
					collapsible
					collapsed={collapsed}
					collapsedWidth={0}
					className={styles.v_sider}
					width={250}
				>
					<VideoTree
						data={data}
						positionList={positionList}
						videoList={videoList}
						setVideoList={setVideoList}
						selected={selected}
						setSelected={setSelected}
					/>
				</Sider>
				<Layout className={styles.site_layout}>
					<Content
						className={styles.site_layout_background}
						onDragOver={(e) => {
							e.preventDefault();
						}}
					>
						{loading ? (
							<Spin spinning={loading} className={styles.video_spin} />
						) : (
							<VideoVessel
								data={data}
								setPositionList={setPositionList}
								videoList={videoList}
								selected={selected}
								setSelected={setSelected}
								layout={layout}
								setLayout={setLayout}
								playNextVideo={playNextVideo}
							/>
						)}
					</Content>

					<Footer className={styles.footer_background}>
						{React.createElement(
							collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
							{
								className: styles.trigger,
								onClick: () => setCollapsed(!collapsed),
							}
						)}
						{React.createElement(isAutoPlay ? PauseOutlined : RetweetOutlined, {
							className: styles.play,
							onClick: () => {
								if (isAutoPlay) {
									stopCarousel();
								} else {
									setIsAutoPlay(true);
									carousel();
								}
							},
						})}
					</Footer>
				</Layout>
			</Layout>
		</div>
	);
};

export default VideoSurveillance;
