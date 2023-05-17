globalEventEmitter.on(
	"store_group_t7gyQp1wpuM3qTofADmHmN-bn4XQLFdPNCjcRcFiKghKF",
	(e) => {
		console.info(
			"store_group_t7gyQp1wpuM3qTofADmHmN-bn4XQLFdPNCjcRcFiKghKF=>",
			e
		);
		if (!window.map3d_1607675060094816256) {
			// 创建一个div元素
			var divElement = document.createElement("div");

			// 设置div元素的宽度和高度
			divElement.style.width = "1317px";
			divElement.style.height = "956px";
			divElement.style.position = "absolute";
			divElement.style.left = "1260px";
			divElement.style.top = "111px";

			var map3d = new YunliMap3D.Map({
				container: divElement,
				center: [Number(e.longitude), Number(e.latitude)],
				pitch: -45,
				layers: ["tianditu_img"],
				zoom: 15,
			});

			// 获取要添加到的另一个元素
			var parentElement = document.querySelector(
				'[data-key="group_fU131scKADaAKt7ygMeKME"]'
			);

			// 将div元素添加到另一个元素中
			parentElement.appendChild(divElement);
			window.map3d_1607675060094816256 = map3d;
		}
	}
);
