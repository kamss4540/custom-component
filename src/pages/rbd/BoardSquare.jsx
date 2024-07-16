import React from "react";
import Square from "./Square";
import { useDrop } from "react-dnd";
import { ItemTypes } from "./Constants";
import { moveKnight } from "./Game";
import Overlay from "./Overlay";
import { canMoveKnight } from "./Game";

export default function BoardSquare({ x, y, children }) {
	const black = (x + y) % 2 === 1;

	const [{ isOver, canDrop }, drop] = useDrop(
		() => ({
			accept: ItemTypes.KNIGHT,
			canDrop: () => canMoveKnight(x, y),
			drop: () => moveKnight(x, y),
			collect: (monitor) => ({
				isOver: !!monitor.isOver(),
				canDrop: !!monitor.canDrop(),
			}),
		}),
		[x, y]
	);

	return (
		<div
			ref={drop}
			style={{
				position: "relative",
				height: "100%",
				width: "100%",
				textAlign: "center",
			}}
		>
			<Square black={black}>{children}</Square>
			{isOver && !canDrop && <Overlay color="red" />}
			{!isOver && canDrop && <Overlay color="blue" />}
			{isOver && canDrop && <Overlay color="green" />}
		</div>
	);
}
