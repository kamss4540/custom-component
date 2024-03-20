import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Card from "./Card";
import ComponentList from "./ComponentList";

const DndPage = () => {
	const items = [
		{ id: "1", content: block1, colspan: 2 },
		{ id: "2", content: block2 },
		{ id: "3", content: block2 },
		{ id: "4", content: block1 },
		{ id: "5", content: block1, colspan: 2 },
		{ id: "6", content: block1 },
		{ id: "7", content: block1, colspan: 2 },
		{ id: "8", content: block1 },
		{ id: "9", content: block1 },
		{ id: "10", content: block1 },
	];

	const componentList = [
		{ id: "Button", component: "Button", content: block1 },
		{ id: "Input", component: "Input", content: block1 },
		{ id: "Checkbox", component: "Checkbox", content: block1 },
		{ id: "Radio", component: "Radio", content: block1 },
		{ id: "Select", component: "Select", content: block1 },
		{ id: "Textarea", component: "Textarea", content: block1 },
	];

	const [cards, setCards] = useState(items);

	const moveCard = (dragIndex, hoverIndex) => {
		const newCards = [...cards];
		const [dragCard] = newCards.splice(dragIndex, 1);
		newCards.splice(hoverIndex, 0, dragCard);
		setCards(newCards);
	};

	console.log(
		"cards=>",
		cards
	);

	return (
		<div style={{ width: "78%", overflow: "auto" }}>
			<h1>Drag and Drop</h1>
			<div
				style={{
					display: "flex",
					height: 710,
					flexDirection: "column",
					flexWrap: "wrap",
				}}
			>
				<DndProvider backend={HTML5Backend}>
					{cards.map((item, index) => (
						<Card
							key={item.id}
							id={item.id}
							index={index}
							text={item.content}
							moveCard={moveCard}
							colspan={item.colspan}
						/>
					))}
					<ComponentList dropCardList={cards} setCards={setCards} />
				</DndProvider>
			</div>
		</div>
	);
};

export default DndPage;

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

const block2 = (props) => {
	const { id, index } = props;
	return (
		<div style={{ backgroundColor: getRandomColor(), height: "100%" }}>
			<p>
				Block {id} - {index}
			</p>
		</div>
	);
};

// 获取随机色

function getRandomColor() {
	var letters = "0123456789ABCDEF";
	var color = "#";
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}
