import React, { useMemo, useState } from "react";
import styles from "./index.module.less";

const ImagePreviewer = (props) => {
	const { src } = props;

	const [currentImageIndex, setCurrentImageIndex] = useState(-1);

	const images = useMemo(() => {
		let _images = [];
		if (src) {
			if (typeof src === "string") {
				_images = src.split(",");
			} else if (Array.isArray(src)) {
				_images = src;
			}
		}
		return _images;
	}, [src]);

	const handleImageClick = (index) => {
		setCurrentImageIndex(index);
	};

	return (
		<div className={styles.imagePreviewer}>
			{images.map((imageUrl, index) => (
				<img
					key={index}
					src={imageUrl}
					width={48}
					alt={`Image ${index}`}
					onClick={() => handleImageClick(index)}
				/>
			))}

			{currentImageIndex !== -1 && (
				<div className={styles.image_modal}>
					<img
						src={images[currentImageIndex]}
						alt={`Image ${currentImageIndex}`}
						onClick={() => setCurrentImageIndex(-1)}
					/>
				</div>
			)}
		</div>
	);
};

export default ImagePreviewer;
