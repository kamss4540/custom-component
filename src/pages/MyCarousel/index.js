import { Carousel } from "antd";
import React from "react";
import ReactDOM from "react-dom";
import styles from "./index.module.less";
import ImagePreviewer from "./ImagePreviewer";

const App = (props) => {
	const { data, comProps } = props;
	const height = comProps?.css?.height;

	const handleImageClick = (item, index) => {
		let node = document.getElementById("$customCarousel");
		if (node) {
			node.remove();
		}

		const target = document.getElementsByClassName("screen-wrap")[0];

		if (target) {
			let dom = convertElementToDomString(
				<ImagePreviewer data={data} index={index} />
			);
			target.appendChild(dom);
		}
	};

	const convertElementToDomString = (element) => {
		const newDom = document.createElement("div");
		ReactDOM.render(element, newDom);
		return newDom;
	};

	return (
		<div className={styles.layout}>
			<Carousel autoplay>
				{data.length ? (
					data.map((item, index) => (
						<img
							key={index}
							src={item.url}
							width="100%"
							height={height}
							alt=""
							onClick={() => handleImageClick(item, index)}
						/>
					))
				) : (
					<img
						src="/iocoss/datai/custom/1697064148309368832/images/video.png"
						alt=""
					/>
				)}
			</Carousel>
		</div>
	);
};
export default App;
