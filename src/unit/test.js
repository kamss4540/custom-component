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

// http://124.95.131.16:9061/baisheng210110096/tileset.json
// http://124.95.178.231:9000/baisheng210110096/tileset.json

let map3d = null;
const create3DMap = () => {
	// 创建一个div元素
	var divElement = document.createElement("div");

	// 设置div元素的宽度和高度
	divElement.style.width = "1100px";
	divElement.style.height = "500px";
	divElement.style.position = "absolute";
	divElement.style.left = "13px";
	divElement.style.top = "0";

	map3d = new YunliMap3D.Map({
		container: divElement,
		// center: [Number(e.longitude), Number(e.latitude)],
		pitch: -45,
		// layers: ["tianditu_img"],
		zoom: 18,
	});

	

	// 获取要添加到的另一个元素
	var parentElement = document.querySelector(
		'[data-key="group_fU131scKADaAKt7ygMeKME"]'
	);

	// 将div元素添加到另一个元素中
	parentElement.appendChild(divElement);

	var wmtslayer = new YunliMap3D.WMTSLayer({
		url: 'http://120.52.31.31:590/service/api/egis/base/v1/wmts?Authorization=Basic%20MDAyYTJjY2JkY2NmNDJhYWE2OTEyMGY3YjRmN2EwOWI6NGVlZDQ1ODU4ZGI0NGU0Njk4MzVkNTQ5Y2JkZmNkMDM=',
		layer: 'img',
		matrixSet: 'c',
		format: 'tiles',
		style: 'default',
		tilingScheme:'Geographic',
		tileMatrixSetID : 'c',
		tileMatrixLabels:['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18']
	});
	map3d.add(wmtslayer)
};
