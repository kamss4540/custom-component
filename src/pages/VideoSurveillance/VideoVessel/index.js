import React, { useEffect, useRef } from "react";
import styles from "./index.module.less";
import VideoPlayer from "./VideoPlayer";

const VideoVessel = (props) => {
	const {
		setPositionList,
		videoList,
		selected,
		setSelected,
		layout,
		setLayout,
	} = props;

	const myRef = useRef(null);

	// 播放器实例列表
	const playerRefList = useRef([]);

	// 获取元素位置
	useEffect(() => {
		if (myRef.current) {
			let positionList = [];
			myRef.current.childNodes.forEach((item) => {
				positionList.push(item.getBoundingClientRect());
			});
			setPositionList(positionList);
			window.myRef = myRef.current;
		}
	}, [setPositionList]);

	const onClick = (index) => {
		setSelected(index);
	};

	return (
		<div
			className={`${styles.video_vessel} ${styles[`mode${layout}`]}`}
			ref={myRef}
		>
			{Array.from({ length: 4 }).map((item, index) => (
				<div
					key={index}
					className={`${styles.item} ${
						index === selected ? styles.active : ""
					}`}
					onClick={() => onClick(index)}
				>
					<VideoPlayer
						data={videoList[index] || {}}
						index={index}
						layout={layout}
						setLayout={setLayout}
						playerRefList={playerRefList}
						playNextVideo={props.playNextVideo}
					/>
				</div>
			))}
		</div>
	);
};

export default VideoVessel;
