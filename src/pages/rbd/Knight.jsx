import React from "react";
import { ItemTypes } from "./Constants";
import { useDrag } from "react-dnd";

export default function Knight() {
	const [{ isDragging }, drag] = useDrag(() => ({
		type: ItemTypes.KNIGHT,
		collect: (monitor) => ({
			isDragging: !!monitor.isDragging(),
		}),
	}));

	return (
		<span
			ref={drag}
			style={{
				opacity: isDragging ? 0.5 : 1,
				fontSize: 48,
				fontWeight: "bold",
				cursor: "grab",
			}}
		>
			♘
		</span>
	);
}
