import React from "react";
import BoardSquare from "./BoardSquare";
import Knight from "./Knight";

function renderSquare(i, knightPosition) {
	const x = i % 8;
	const y = Math.floor(i / 8);
	return (
		<div key={i} style={{ width: "12.5%", height: "12.5%" }}>
			<BoardSquare x={x} y={y}>
				{renderPiece(x, y, knightPosition)}
			</BoardSquare>
		</div>
	);
}

function renderPiece(x, y, [knightX, knightY]) {
	if (x === knightX && y === knightY) {
		return <Knight />;
	}
}

export default function Board({ knightPosition }) {
	const squares = [];
	for (let i = 0; i < 64; i++) {
		squares.push(renderSquare(i, knightPosition));
	}

	return (
		<div
			style={{
				height: "100%",
				aspectRatio: "1",
				display: "flex",
				flexWrap: "wrap",
			}}
		>
			{squares}
		</div>
	);
}
