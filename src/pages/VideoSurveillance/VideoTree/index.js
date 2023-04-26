import { Tree, Input, Tooltip } from "antd";
import React, { useEffect, useState, useMemo } from "react";
import styles from "./index.module.less";
import { CaretRightOutlined, VideoCameraOutlined } from "@ant-design/icons";

const { DirectoryTree } = Tree;
const { Search } = Input;

export default (props) => {
	const { data, positionList, videoList, setVideoList, selected, setSelected } =
		props;

	// 搜索值
	const [searchValue, setSearchValue] = useState("");
	const [expandedKeys, setExpandedKeys] = useState([]);
	const [autoExpandParent, setAutoExpandParent] = useState(true);

	useEffect(() => {
		setExpandedKeys([data[0]?.key ?? ""]);
	}, [data]);

	const treeData = useMemo(() => {
		const loop = (data) =>
			data.map((item) => {
				const strTitle = item.title;
				const index = strTitle.indexOf(searchValue);
				const beforeStr = strTitle.substring(0, index);
				const afterStr = strTitle.slice(index + searchValue.length);
				const title =
					index > -1 ? (
						<span>
							{beforeStr}
							<span className={styles.site_tree_search_value}>
								{searchValue}
							</span>
							{afterStr}
						</span>
					) : (
						<span>{strTitle}</span>
					);
				if (item.children) {
					return {
						...item,
						title,
						selectable: false,
						key: item.key,
						children: loop(item.children),
					};
				}
				return {
					...item,
					title,
					icon: videoList.some((video) => video?.moid === item.moid) ? (
						<CaretRightOutlined style={{ color: "#52c41a" }} />
					) : (
						<VideoCameraOutlined />
					),
				};
			});
		return loop(data);
	}, [data, videoList, searchValue]);

	// 数据展开
	const dataList = useMemo(() => {
		let _dataList = [];
		const generateList = (data) => {
			for (let i = 0; i < data.length; i++) {
				const node = data[i];
				const { key, title } = node;
				_dataList.push({
					key,
					title,
				});
				if (node.children) {
					generateList(node.children);
				}
			}
		};
		generateList(data);
		return _dataList;
	}, [data]);

	// 选中
	const onSelect = (keys, info) => {
		const { node } = info;
		setVideoListByIndex(selected, node);
		setSelected((selected + 1) % videoList.length);
	};

	// 拖拽结束
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
		// 主动推流的视频不因拉流失败而被替换
		newVideoList[index] = { ...video, initiative: true };
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

	// 标题渲染
	const titleRender = (nodeData) => {
		return (
			<Tooltip title={nodeData.moid && nodeData.title}>
				<span
					draggable={Boolean(nodeData.moid)}
					onDragEnd={(e) => onDragEnd({ event: e, node: nodeData })}
				>
					{nodeData.title}
				</span>
			</Tooltip>
		);
	};

	// 获取父节点key
	const getParentKey = (key, tree) => {
		let parentKey;
		for (let i = 0; i < tree.length; i++) {
			const node = tree[i];
			if (node.children) {
				if (node.children.some((item) => item.key === key)) {
					parentKey = node.key;
				} else if (getParentKey(key, node.children)) {
					parentKey = getParentKey(key, node.children);
				}
			}
		}
		return parentKey;
	};

	// 搜索
	const onSearch = (value) => {
		setSearchValue(value);
		const newExpandedKeys = dataList
			.map((item) => {
				if (item.title.indexOf(value) > -1) {
					return getParentKey(item.key, data);
				}
				return null;
			})
			.filter((item, i, self) => item && self.indexOf(item) === i);
		setExpandedKeys(newExpandedKeys);
		setAutoExpandParent(true);
	};

	// 展开
	const onExpand = (newExpandedKeys) => {
		setExpandedKeys(newExpandedKeys);
		setAutoExpandParent(false);
	};

	return (
		<div className={styles.v_tree}>
			<Search onSearch={onSearch} />
			<DirectoryTree
				onExpand={onExpand}
				onSelect={onSelect}
				treeData={treeData}
				className={styles.video_tree}
				titleRender={titleRender}
				expandedKeys={expandedKeys}
				autoExpandParent={autoExpandParent}
			/>
		</div>
	);
};
