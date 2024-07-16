import React, { useEffect, useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Board from "./Board";
import { observe } from "./Game";

export default function Rbd() {
	const [knightPosition, setKnightPosition] = useState([0, 0]);

	useEffect(() => {
		console.log("Observing game state");
		observe((val) => {
			setKnightPosition(val);
		});
	}, []);

	return (
		<DndProvider backend={HTML5Backend}>
			<Board knightPosition={knightPosition} />
		</DndProvider>
	);
}
