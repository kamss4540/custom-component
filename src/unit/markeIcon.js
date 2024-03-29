// 板块外边框配置
const outerBorder = {
	color: "#fa6814", // 颜色
	width: 4, // 宽度
	clockwise: true, // 流动方向, true(顺时针)/false(逆时针)
	segments: 3, // 流动线分段数量
	duration: 10000, // 运动周期，单位毫秒
};

// 板块内边框配置
const innerBorder = {
	color: "#0ebbff", // 颜色
	width: 3, // 宽度
	enabledBloom: false, // 是否开启辉光，true(开启)/false(关闭)
};

// 行政区鼠标移入颜色
const hoverColor = "rgba(63, 234, 255, 0.5)";

// 扫描动画配置
const scanColor = "#0ebbff"; // 颜色
const scanOpacity = 0.5; // 透明度
const scanDuration = 1000; // 扫描周期,单位毫秒

// 行政区编码，可通过百度搜索，如：北京市行政区划代码
const adcode = "210100"; // 全国

// 板块厚度系数
const thinckness = 2 / 3;

let areaArr = [];

let spStyle = document.createElement("style");
spStyle.type = "text/css";
spStyle.appendChild(
	document.createTextNode(`
    .glmapcontainer{display:flex;just-count;align-items:center;} 
    .hover img {width:24px;height:30px;} 
    .glmapcontainer img{opacity: 0;} 
    .glmapcontainer cite{opacity: 0;} 
    .glmapcontainer cite{opacity: 0;} 
    .glmapcontainer.hover img{opacity: 1;} 
    .glmapcontainer.hover cite{opacity: 1;}
    .glmapcontainer.hover .desc { 
		background-image: url(/iocoss/datai/screen/1609737255799529472/images/形状结合.png);
		width: 120px;
		height: 38px;
		position: relative;
	}
	.glmapcontainer.hover .desc div {
		position: absolute;
		left: 10px;
		top: 9px;
		width: 42px;
		height: 20px;
		line-height: 20px;
	}
	.glmapcontainer.hover .desc cite {
		position: absolute;
		right: 10px;
		top: 9px;
		color: #43BA62;
		width: 23px;
		height: 20px;
		line-height: 20px;
		display: flex;
    	justify-content: flex-end;
		font-style: normal;
	}
    `)
);

let heada = document.getElementsByTagName("body")[0];
heada.appendChild(spStyle);
let cesiumJs = "/iocoss/datai/screen/1640177046721724416/other/yunli-map-gl.js";
const jsDOM = document.createElement("script");
jsDOM.setAttribute("src", cesiumJs);
document.body.appendChild(jsDOM);
jsDOM.onload = () => {
	initMap();
};

function initMap() {
	$('[data-key="@com_wX76fmKkF6nu56HPnHhsHm"] > .ref-component')
		.children("div")
		.remove();
	var mapgl = new YunliMapGL.Map({
		container: $(
			'[data-key="@com_wX76fmKkF6nu56HPnHhsHm"] > .ref-component'
		)[0], //容器ID或
		// center: [123.429096, 41.796767], //中心
		center: [123.11234077542645, 41.87448452443669],
		zoom: 8.166914876057984, //缩放等级
		pitch: 40,
		projection: "EPSG:4326",
		transformRequest(url) {
			if (url.startsWith("https://gis.yunlizhihui.com/egis")) {
				return {
					url,
					headers: {
						authorization:
							"Basic MDAyYTJjY2JkY2NmNDJhYWE2OTEyMGY3YjRmN2EwOWI6NGVlZDQ1ODU4ZGI0NGU0Njk4MzVkNTQ5Y2JkZmNkMDM=",
					},
				};
			}
		},
		style: "/iocoss/datai/screen/1613451824520015872/other/yunli-3.json",
	});

	window.temp1 = mapgl;

	var maskLayer = new YunliMapGL.Layer({
		layerCode: "mask_layer",
		// 蒙版颜色
		maskColor: "rgba(0, 13, 77, .65)",
	});
	mapgl.add(maskLayer);

	var scan = new YunliMapGL.Plane({
		position: [123.15, 38.7],
		color: "#03ccbb",
		opacity: 1,
		width: 7000,
		height: 7000,
		texture: "/iocoss/datai/screen/1609737255799529472/images/scan.png",
	});
	mapgl.add(scan);

	var duration = 6000;
	mapgl.on("render", function () {
		var radius = ((performance.now() % duration) / duration) * 360;
		scan.rotation = [0, 0, -radius];
	});

	mapgl._enabledPass = true;
	mapgl._bloomParams.exposure = 1;
	mapgl._bloomParams.bloomStrength = 1;
	mapgl._bloomParams.bloomThreshold = 0;
	mapgl._bloomParams.bloomRadius = 0;

	var INFOMAPPINGREF = {},
		ignoreRef,
		plateRef,
		overlaysRef = [],
		plateTopTexture =
			"/iocoss/datai/screen/1640177046721724416/images/1111.png",
		plateWallTexture =
			"/iocoss/datai/screen/1640177046721724416/images/plate_wall_texture.png";

	const transitionOverlays = function ({
		overlays,
		duration = 1000,
		visible = false,
		callback,
	}) {
		let start_t = performance.now();
		requestAnimationFrame(function loop() {
			let progress = Math.min((performance.now() - start_t) / duration, 1);

			for (let overlay of overlays) {
				if (overlay) {
					let from = visible ? 0 : overlay.visible_opacity;
					let to = visible ? overlay.visible_opacity : 0;
					let target_v = from + (to - from) * progress;
					overlay.opacity = target_v;
				}
			}

			if (progress < 1) return requestAnimationFrame(loop);

			callback && callback();
		});
	};

	const clickCallback = function (name, adcode, showDetail) {
		if (ignoreRef) return;

		if (showDetail) {
			// 显示详情
			addPlate({ regionCode: adcode });
		} else {
			addPlate({ regionCode: adcode });
		}
	};

	// 添加板块
	const addPlate = async function ({ regionCode }) {
		let {
			regionData,
			plate,
			colorBorder,
			borderData,
			innerBorders,
			eventPolygons,
			eventInfoWindows,
		} = await getSceneInfo({
			adcode: regionCode,
			eventCallback: clickCallback,
			mapgl,
		});
		let lastOverlays = overlaysRef.concat(plateRef);
		// transitionOverlays({
		//   overlays: lastOverlays,
		//   duration: 1000,
		//   visible: false,
		//   callback() {
		//     mapgl.remove(lastOverlays);
		//   },
		// });

		let { properties, extent } = regionData;

		plateRef = plate;

		// 适应现实
		// mapgl.fitExtent(extent, {
		// 	pitch: 40,
		// 	padding: { top: 0, bottom: 200, right: 0, left: 0 },
		// 	duration: 1000,
		// });

		// 添加覆盖物到地图
		overlaysRef = [
			colorBorder,
			...innerBorders,
			...eventPolygons,
			...eventInfoWindows,
		];

		let currentOverlays = overlaysRef.concat(plateRef);
		mapgl.add(currentOverlays);
		transitionOverlays({
			overlays: currentOverlays,
			duration: 1000,
			visible: true,
		});
		let startIndex = 0;
		window.curTimer = {};

		function carousel() {
			let _eventPolygons = window.$eventPolygons;
			if (startIndex == _eventPolygons?.length) startIndex = 0;
			if (window.curTimer.id) clearTimeout(window.curTimer.id);
			window.curTimer.id = setTimeout(() => {
				if (startIndex != 0)
					_eventPolygons[startIndex - 1]._mouseoutHandlers[0]();
				else _eventPolygons[_eventPolygons.length - 1]._mouseoutHandlers[0]();

				_eventPolygons[startIndex]._mouseoverHandlers[0]();
				// _eventPolygons[startIndex]._mouseenterHandlers[0]();
				startIndex++;
				carousel(_eventPolygons);
			}, 5000);
		}
		window.$eventPolygons = eventPolygons;
		carousel(eventPolygons);
	};

	const getSceneInfo = async function ({ adcode, eventCallback }) {
		return new Promise(async function (resolve, reject) {
			if (INFOMAPPINGREF[adcode]) return resolve(INFOMAPPINGREF[adcode]);

			let info = {};
			// let layerCode = "cim_platform_20230328094327428489289945317376" // 沈阳行政区域
			let layerCode = "layer_e8be2ef8"; // 沈阳行政区域-新
			// http://10.35.60.131:30005/ 用这个
			if (location.host == "10.35.60.131:30005") {
				layerCode = "cim_platform_20230411190617433704362510909440";
			}
			let regionData = await YunliMapGL.queryDataInLayer({ layerCode });
			if (!regionData || !regionData.length) return reject();
			info.regionData = regionData[0];
			let { coordinates, extent, properties } = info.regionData;

			// 板块厚度
			let thickness = calcPlateThickness(extent);

			info.plate = new YunliMapGL.Plate({
				coordinates: coordinates,
				topImg: plateTopTexture,
				wallImg: plateWallTexture,
				height: thickness,
				baseHeight: -thickness,
				renderOrder: 1,
				opacity: 0,
			});
			info.plate.visible_opacity = 1;

			info.colorBorder = new YunliMapGL.FlowLine(
				Object.assign(
					{
						coordinates,
						color: "#fa6814",
						opacity: 0.8,
						width: 4,
						clockwise: true,
						segments: 3,
						duration: 10000,
						renderOrder: 999,
						enabledBloom: true,
					},
					outerBorder
				)
			);

			info.colorBorder.visible_opacity = 1;

			// 获取下级区划
			info.borderData = await YunliMapGL.queryDataInLayer({
				layerCode: "layer_988fddd1",
				// cqlfilter: `padcode='${adcode}'`,
				// autoSimplify: adcode == 100000, // 数据抽稀
				// simplifyTolerance: adcode == 100000 ? 10000 : 1000, // 抽稀容差10000米
			});
			// 下级行政区边界
			info.innerBorders = [];
			info.eventPolygons = [];
			info.eventInfoWindows = [];

			addTextLayer(info);

			let arr = [];

			for (let item of info.borderData) {
				// 添加省级边界
				let border = new YunliMapGL.Polyline(
					Object.assign(
						{
							coordinates: item.coordinates,
							color: "#0ebbff",
							width: 20,
							renderOrder: 99,
							enabledBloom: true,
						},
						innerBorder
					)
				);
				border.visible_opacity = 1;

				info.innerBorders.push(border);

				// 添加事件交互蒙层
				let { polygon, infoWindow } = addEventLayer(item, eventCallback);
				info.eventPolygons.push(polygon);
				info.eventInfoWindows.push(infoWindow);

				arr.push({
					extra: item,
					instance: infoWindow,
				});
			}

			window.temp2 = arr;
			setInterval(() => {
				return;
				console.info("arr=>", arr);
				arr.forEach((item) => {
					item.instance.setContent(`
          <div class="glmapcontainer">
            <img
              src="/iocoss/datai/custom/1628575312170618880/images/报警 copy.png"
				style={{ width: 24px; height: 30px }}
              alt=""
            />
            <div class="desc" style="margin-left: 5px;" >
              <div>${item.extra.properties.Name}</div>
              <cite>${"areaCount"}个</cite>
            </div>
          </div>
        `);
				});
			}, 3 * 1000);

			console.info("info.eventInfoWindows=>", info.eventInfoWindows);

			INFOMAPPINGREF[adcode] = info;
			resolve(info);
		});
	};

	const addTextLayer = (info) => {
		var texts = info.borderData.map(({ properties }) => ({
			position: YunliMapGL.getInteriorPoint(properties.coordinates), // 行政区划中心
			text: properties.Name, // 行政区名称
			anchor: "center", // 文本标记的锚点，可选值："center", "left", "right", "top", "bottom", "top-left", "top-right", "bottom-left", "bottom-right"。
			color: "#000", // 文本颜色
			haloBlur: 3, // 外阴影模糊半径
			haloColor: "#FFF", // 外阴影颜色
			haloWidth: 3, // 外阴影半径
			justify: "center", // 文本对齐方式。可选值："auto"|"left"|"center"|"right"
			letterSpacing: 0, // 文本间隙大小。单位：em。
			maxWidth: 100, // 文本换行的最大宽度。
			offset: [0, 0], // 文本标记与其锚点的偏移。
			opacity: 1, // 文本标记的不透明度。
			rotate: 0, // 文本标记的旋转角度。
			fontSize: 20, // 文本标记的字体大小。
			transform: "uppercase", // 英文字母是否大写。可选值："none"|"uppercase"|"lowercase"
		}));

		// 创建文本标记层，所有文本标记的通用配置在此时定义
		var textLayer = new YunliMapGL.TextLayer(texts, {
			allowOverlap: false, // 如果为true，则即使点标记与以前绘制的其他符号冲突，点标记也将可见。
			color: "#000", // 默认文本颜色
			keepUpright: true, // 如果为true，则可能会翻转点标记以防止其被颠倒呈现。
			lineHeight: 1.2, // 多行文本的行高，单位：em。
			padding: 2, // 用于检测符号冲突的点标记边界框周围的附加区域的大小。单位：px
			pitchAlignment: "auto", // 地图倾斜时点标记的方向。可选值："map"|"viewport"|"auto"
			ignorePlacement: false, // 如果为true，则即使其他符号与点标记发生碰撞，也可以看到它们。
			translate: [0, 0], // 点标记的定位点从其原始位置偏移的距离。单位：px
			translateAnchor: "map", // 控制 "translate" 的参照系。可选值："map"|"viewport"
		});
		mapgl.add(textLayer);
	};

	const addEventLayer = function ({ coordinates, properties }, eventCallback) {
		let showDetail = true;

		let area = new YunliMapGL.Polygon({
			coordinates,
			color: getPlateColor(properties.name),
			opacity: 0,
			renderOrder: 99,
			depthTest: false,
		});
		let centerPoint = area.centroid();

		let areaCount = 0;

		const todayData = getDataByKey(
			"store_group_rYfdQCf2WNdwfox5cpHmVD-qz3uxrPpdrXNMw9ftZ5fWR"
		);
		todayData?.data?.map((item) => {
			if (item.dict_key == properties.code.substr(0, 6)) {
				areaCount = item.alarmCount;
			}
		});

		area.visible_opacity = AREACOLORMAP[properties.name] ? 0.5 : 0;
		/*
        content: `<div class="glmap-container">
            <div class="glmap-icon-container">
              <img src="/iocoss/datai/custom/1628575312170618880/images/报警 copy.png" alt="" />
              <div class="glmap-name">${properties.xzq_name}</div>
            </div>
            <div class="glmap-count">192个</div>
          </div>`,
      */

		// 创建信息窗
		let infoWindow = new YunliMapGL.InfoWindow({
			content: `
          <div class="glmapcontainer">
            <img
              src="/iocoss/datai/custom/1628575312170618880/images/报警 copy.png"
				style={{ width: 24px; height: 30px }}
              alt=""
            />
            <div class="desc" style="margin-left: 5px;" >
              <div>${properties.Name}</div>
              <cite>${areaCount}个</cite>
            </div>
          </div>
        `,
			position: centerPoint,
			anchor: "top-left",
			stopEvents: false,
			zIndex: 1,
		});

		if (!AREACOLORMAP[properties.name]) {
			// 绑定行政区事件
			area.on("mouseover", function (e) {
				area.color = hoverColor || HOVERCOLOR;
				infoWindow.contentWrap.children[0].classList.add("hover");
				infoWindow.zIndex = 2;
			});

			area.on("mouseout", function (e) {
				area.color = getPlateColor(properties.name);
				infoWindow.contentWrap.children[0].classList.remove("hover");
				infoWindow.zIndex = 1;
			});
			// area.on("click", function () {
			//   eventCallback(properties.name, properties.adcode, showDetail);
			// });
		}

		return {
			polygon: area,
			infoWindow,
		};
	};

	/**
	 * 使用板块外接矩形计算板块厚度
	 */
	function calcPlateThickness(extent) {
		// 矩形对角线度数
		let degrees = Math.sqrt(
			Math.pow(extent[2] - extent[0], 2) + Math.pow(extent[3] - extent[1], 2)
		);

		// 度转米
		let meters = YunliMapGL.degreesToLength(degrees);

		return (meters / 20) * thinckness;
	}

	function getPlateColor(name) {
		return AREACOLORMAP[name] || "rgba(255,255,255,0)";
	}

	const AREACOLORMAP = {
		大东区: "rgba(255, 63, 126, 1)",
		铁西区: "rgba(255, 122, 55, 1)",
		浑南区: "rgba(255, 218, 55, 1)",
	};
	const HOVERCOLOR = "rgba(63, 234, 255, 0.5)";

	mapgl.on("style.load", function () {
		addPlate({ regionCode: adcode });
	});

	// 销毁地图、定时器
	window.globalEventEmitter.on("destoryHandler", () => {
		console.warn("destory map", mapgl);
		mapgl.destroy();
		mapgl.clearDraw();
		mapgl.remove(currentOverlays);
		mapgl.off("render", renderFn);
		cancelAnimationFrame(animationTag);
		clearTimeout(window.curTimer.id);
	});
}
