import React, { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";

const style = {
	border: "1px dashed gray",
	padding: "1rem",
	backgroundColor: "white",
	cursor: "grab",
	width: "300px",
	height: "30%",
};
const Card = ({ id, text, index, moveCard, colspan }) => {
	const ref = useRef(null);

	const [{ handlerId }, drop] = useDrop({
		accept: "card",
		collect(monitor) {
			return {
				handlerId: monitor.getHandlerId(),
			};
		},
		hover(item, monitor) {
			if (!ref.current) {
				return;
			}
			const dragIndex = item.index;
			const hoverIndex = index;
			// Don't replace items with themselves
			// 翻译：不要替换自己
			if (dragIndex === hoverIndex) {
				return;
			}
			// Determine rectangle on screen
			// 翻译：确定屏幕上的矩形
			const hoverBoundingRect = ref.current?.getBoundingClientRect();
			// Get vertical middle
			// 翻译：获取垂直中间
			const hoverMiddleY =
				(hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
			// Determine mouse position
			// 翻译：确定鼠标位置
			const clientOffset = monitor.getClientOffset();
			// Get pixels to the top
			// 翻译：获取顶部的像素
			const hoverClientY = clientOffset.y - hoverBoundingRect.top;
			// Only perform the move when the mouse has crossed half of the items height
			// 翻译：只在鼠标经过一半的项目高度时执行移动
			// When dragging downwards, only move when the cursor is below 50%
			// 翻译：当向下拖动时，只在光标位于50%以下时移动
			// When dragging upwards, only move when the cursor is above 50%
			// 翻译：当向上拖动时，只在光标位于50%以上时移动
			// Dragging downwards
			// 翻译：向下拖动
			if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
				return;
			}
			// Dragging upwards
			// 翻译：向上拖动
			if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
				return;
			}
			// Time to actually perform the action
			// 翻译：进行实际的操作
			moveCard(dragIndex, hoverIndex);
			// Note: we're mutating the monitor item here!
			// 翻译：注意：我们正在这里修改监视项！
			// Generally it's better to avoid mutations,
			// 翻译：通常情况下，避免修改是更好的做法
			// but it's good here for the sake of performance
			// 翻译：但是在这里，由于性能原因，这是必要的
			// to avoid expensive index searches.
			// 翻译：为了避免昂贵的索引搜索。
			item.index = hoverIndex;
		},
	});

	const [{ isDragging }, drag] = useDrag({
		type: "card",
		item: { id, index },
		collect: (monitor) => ({
			isDragging: monitor.isDragging(),
		}),
	});

	const opacity = isDragging ? 0 : 1;
	drag(drop(ref));

	return (
		<div
			ref={ref}
			style={{ ...style, opacity, height: (colspan || 1) * 30 + "%" }}
			data-handler-id={handlerId}
		>
			{React.createElement(text, { id, index })}
		</div>
	);
};

export default Card;
