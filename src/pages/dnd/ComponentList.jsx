import React, { useMemo, useRef } from "react";
import { useDrag } from "react-dnd";
const ComponentList = (props) => {
	const { dropCardList, setCards } = props;
	const [componentList, setComponentList] = React.useState([
		{ id: "Button", component: "Button", content: block1 },
		{ id: "Input", component: "Input", content: block1 },
		{ id: "Checkbox", component: "Checkbox", content: block1 },
		{ id: "Radio", component: "Radio", content: block1 },
		{ id: "Select", component: "Select", content: block1 },
		{ id: "Textarea", component: "Textarea", content: block1 },
	]);

	return (
		<div
			style={{
				position: "absolute",
				width: 300,
				height: "100%",
				backgroundColor: "aquamarine",
				right: 0,
			}}
		>
			<h1>Component List</h1>

			{componentList.map((item, index) => (
				<DraggableComponent
					key={item.id + index}
					id={item.id}
					index={index}
					dropCardList={dropCardList}
					updateDragAndDrop={setCards}
					text={item.content}
				/>
			))}
		</div>
	);
};

export default ComponentList;

const DraggableComponent = (props) => {
	const { id, dropCardList, updateDragAndDrop, text, index } = props;

	const [{ isDragging }, drag] = useDrag({
		type: "card",
		item() {
			//在拖动操作开始时触发
			const useless = dropCardList.find((item) => item.id === -1);
			// 拖拽开始时，向 cardList 数据源中插入一个占位的元素，如果占位元素已经存在，不再重复插入
			if (!useless) {
				updateDragAndDrop([
					{ id: -1, component: "Button", content: block1 },
					...dropCardList,
				]);
			}

			return { id: id, index: index, content: block1 };
		},
		end(_, monitor) {
			const uselessIndex = dropCardList.findIndex(
				(item) => item.id === -1
			);

			console.log("monitor.getItem()=>", monitor.getItem());

			/**
			 * 拖拽结束时，判断是否将拖拽元素放入了目标接收组件中
			 *  1、如果是，则使用真正传入的 box 元素代替占位元素
			 *  2、如果否，则将占位元素删除
			 */

			if (monitor.didDrop()) {
				dropCardList.splice(uselessIndex, 1, {
					...monitor.getItem(),
					id: id,
				});
			} else {
				dropCardList.splice(uselessIndex, 1);
			}
			// 更新 cardList 数据源
			updateDragAndDrop(dropCardList);
		},
		collect: (monitor) => ({
			isDragging: monitor.isDragging(),
		}),
	});

	return (
		<div ref={drag} style={{ height: 200 }}>
			{React.createElement(text, { id, index })}
		</div>
	);
};

const block1 = (props) => {
	const { id, index } = props;
	return (
		<div style={{ backgroundColor: getRandomColor(), height: "100%" }}>
			<p>
				Block {id} - {index}
			</p>
		</div>
	);
};

function getRandomColor() {
	var letters = "0123456789ABCDEF";
	var color = "#";
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}
