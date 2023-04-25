import { Tree } from "antd";
import React, { useEffect, useState } from "react";
import styles from "./index.module.less";
import { CaretRightOutlined, VideoCameraOutlined } from "@ant-design/icons";

const { DirectoryTree } = Tree;

export default (props) => {
	const { data, positionList, videoList, setVideoList, selected, setSelected } =
		props;

	const [treeData, setTreeData] = useState([]);

	useEffect(() => {
		let _treeData = data.map((item) => ({
			...item,
			selectable: false,
			children: item.children.map((child) => ({
				...child,
				icon: videoList.some((video) => video?.moid === child.moid) ? (
					<CaretRightOutlined style={{ color: "#52c41a" }} />
				) : (
					<VideoCameraOutlined />
				),
			})),
		}));
		setTreeData(_treeData);
	}, [data, videoList]);

	const onSelect = (keys, info) => {
		const { node } = info;
		setVideoListByIndex(selected, node);
		setSelected((selected + 1) % videoList.length);
	};

	const onDragEnd = (info) => {
		const {
			node,
			event: { pageX, pageY },
		} = info;
		const curIndex = positionList.findIndex((item) =>
			isInArea(pageX, pageY, item)
		);
		setVideoListByIndex(curIndex, node);
	};

	// 根据索引设置视频列表
	const setVideoListByIndex = (index, video) => {
		let newVideoList = [...videoList];
		newVideoList[index] = video;
		setVideoList(newVideoList);
	};

	// 判断是否在区域内
	const isInArea = (x, y, area) => {
		let left = area.x;
		let top = area.y;
		let right = area.x + area.width;
		let bottom = area.y + area.height;
		return x > left && x < right && y > top && y < bottom;
	};

	return (
		<DirectoryTree
			defaultExpandAll
			onSelect={onSelect}
			treeData={treeData}
			draggable={{ icon: false, nodeDraggable: () => true }}
			onDragEnd={onDragEnd}
			rootClassName={styles.video_tree}
		/>
	);
};
