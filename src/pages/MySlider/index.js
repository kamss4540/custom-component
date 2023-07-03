import React, { useState } from "react";
import "./SliderComponent.css";

const SliderComponent = () => {
	const [value, setValue] = useState(50); // 初始值为50

	const handleChange = (event) => {
		setValue(event.target.value);
	};

	return (
		<div className="slider-container">
			<input
				type="range"
				className="slider"
				value={value}
				onChange={handleChange}
				min={0}
				max={100}
			/>
			<p>当前值：{value}</p>
			<div>
				{Array.from({ length: 11 }).map((_, index) => (
					<span
						key={index}
						style={{ position: "absolute", left: `${index * 10}%`, top: -20 }}
					>
						{index * 10}
					</span>
				))}
			</div>
		</div>
	);
};

export default SliderComponent;
