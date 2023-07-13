import React, { useRef, useEffect } from "react";

const MyImg = (props) => {
	const imgRef = useRef(null);

	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			if (entries[0].intersectionRatio > 0) {
				setTimeout(() => {
					imgRef.current.style.transform = "rotateX(0deg)";
				}, 0);
			} else {
				setTimeout(() => {
					imgRef.current.style.transform = "rotateX(90deg)";
				}, 0);
			}
		});
		observer.observe(imgRef.current);
		return () => {
			observer.disconnect();
		};
	}, []);

	return (
		<img
			ref={imgRef}
			src={props.src}
			width={props.width}
			height={props.height}
			alt=""
			loading="lazy"
			decoding="async"
		/>
	);
};

export default MyImg;
