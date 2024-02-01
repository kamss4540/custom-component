const globalEventEmitter = window.globalEventEmitter;
const setStoreData = window.setStoreData;
const getDataByKey = window.getDataByKey;
const YunliMap3D = window.YunliMap3D;
const Cesium = window.Cesium;

// 变量组：新版研判分析
const dataKey = {
	// 当前模型
	curModelKey: "store_group_sLyybKNKmJEDjaLvgJjKoN-t9C9cL756Dpeejq9jYEqbc",
	// 新版模型数据
	newModelKey: "store_group_sLyybKNKmJEDjaLvgJjKoN-pKzFQG3GgCJUXbhPgKtNWP",
	// 研判地图面板数据
	treeDataKey: "store_group_sLyybKNKmJEDjaLvgJjKoN-qZs9we3mnb6ShvaEtae8vV",
	// 地图挂载点
	mapMountKey: "@com_cB9PqCbxEmh6FbJU3wwpK6",
	// 地图实例
	mapInstanceKey: "store_group_sLyybKNKmJEDjaLvgJjKoN-3bBdCvLiJAbDHt7mRroUQQ",
	// 研判分析树选中值
	selectedValueKey:
		"store_group_sLyybKNKmJEDjaLvgJjKoN-fpZJe7xQRjKbkmTpCqxxRX",
	// 时间轴数据
	timeLineDataKey:
		"store_group_sLyybKNKmJEDjaLvgJjKoN-fM5LBRw567DaG3VejHPQ7U",
	// 当前时间点位
	timeLineSelectedValueKey:
		"store_group_sLyybKNKmJEDjaLvgJjKoN-hjJmkFPTWYakcyhzAyV136",
	// 时间轴显示隐藏
	timeLineVisible:
		"store_group_sLyybKNKmJEDjaLvgJjKoN-sVU3HaSH4xeAFKYYj3ni3Y",
};

const MapElements = {
	judgeMap3d: null,
	markers: null,
	infowindow1: null,
	// 半径距离文本框
	radiuInfoWindow: null,
	// 预警点
	warningPoint: null,
	// 火焰gif
	fireGif: null,
	// 烟雾
	smoke: null,
	// 模型图层
	modelLayer: [],
};

const state = {
	center: [],
	fireTimer: null,
	path: [],
	modelData: null,
	selectedValue: [],
};

globalEventEmitter.on("init3dMap", init3dMap);

globalEventEmitter.on(dataKey.selectedValueKey, (e) => {
	// console.info("研判分析树选中值=>", e);
	clearOldLayer();
	const { path, selectedValue } = e;
	const newMode = getDataByKey(dataKey.newModelKey);
	state.path = path;
	state.selectedValue = selectedValue;
	if (!path) {
		return;
	}
	const modelData = newMode[path[0]][path[1]];
	state.modelData = modelData;
	// console.info("modelData=>", modelData);

	const keys = Object.keys(modelData);

	if (keys.every((item) => isAlphabeticOnly(item))) {
		setStoreData(dataKey.timeLineVisible, "false");

		// 如果对象的key都是字母,找到value是对象的属性
		const realyKey = keys.find((key) => modelData[key] instanceof Object);
		const data = modelData[realyKey];
		for (const key in data) {
			const value = data[key];
			if (selectedValue.includes(key)) {
				renderModelLayer(key, value);
			}
		}
	} else if (isNumericAndColonOnly(Object.keys(modelData)[0])) {
		// 有时间轴
		setStoreData(dataKey.timeLineVisible, "true");
		setStoreData(dataKey.timeLineDataKey, Object.keys(modelData));
	} else {
		// 没有时间轴
		setStoreData(dataKey.timeLineVisible, "false");
	}
});

globalEventEmitter.on(dataKey.timeLineVisible, (e) =>
	console.info("时间轴显示隐藏=>", e)
);

// 监听时间轴选中值ww
globalEventEmitter.on(dataKey.timeLineSelectedValueKey, (e) => {
	// console.info("时间轴选中值=>", e);
	clearOldLayer();
	let val = state.modelData[e];
	loopObj(val);
});

globalEventEmitter.on("closeAnalysis", closeAnalysis);

// 清理旧图层
const clearOldLayer = () => {
	MapElements.modelLayer.forEach((item) => {
		MapElements.judgeMap3d.remove(item);
	});
	MapElements.modelLayer = [];
};

const renderModelLayer = (key, value) => {
	console.info("renderModelLayer.key=>", key);
	const colorObj = colorMapping[key];
	const modelType = state.path[1];
	const graphicType = colorObj.getType
		? colorObj.getType(modelType)
		: colorObj.type;

	if (graphicType === "椭圆围栏") {
		renderEllipseFence(value, colorMapping[key]);
	} else if (graphicType === "圆形围栏") {
		renderRoundFence(value, colorMapping[key]);
	}
};

const loopObj = (obj) => {
	Object.keys(obj).forEach((key) => {
		const value = obj[key];
		if (value instanceof Array) {
			if (state.selectedValue.includes(key)) {
				renderModelLayer(key, value);
			}
		} else if (typeof value === "number") {
			console.info("number=>", key);
			if (state.selectedValue.includes(key)) {
				// console.info("开始渲染=>", key);
				renderModelLayer(key, value);
			}
		} else {
			// console.info("其他=>", key);
			loopObj(obj[key]);
		}
	});
};

// 注册地图
function init3dMap() {
	// let warnListDom = $("div[data-key='group_19ffb84b649646f5840710623d622f7b']");
	//     warnListDom.css({transform: 'translate(1308px, 244px)'});  // 预警列表弹框 移动到中间
	// let warnDtlDom = $("div[data-key='group_8jmyRGUnc1oK6bWMGKEWrh']");
	//     warnDtlDom.css({transform: 'translate(1329px, 194px)'});  // 移动预警详情弹框 到中间

	if (!MapElements.judgeMap3d) {
		MapElements.judgeMap3d = new window.YunliMap3D.Map({
			// container: divElement,
			container: window.DataI.select(dataKey.mapMountKey)
				.get(0)
				.querySelector(".ref-component"),
			// center: [Number(e.longitude), Number(e.latitude)],
			center: [123.432863, 41.792236],
			pitch: -45,
			// showTerrain: true,
			// layers: ["tianditu_img"],
			zoom: 17,
		});
		setStoreData(dataKey.mapInstanceKey, MapElements.judgeMap3d);
		MapElements.judgeMap3d.mapEvent.enablePointMove = true;
		var wmtslayer = new window.YunliMap3D.WMTSLayer({
			url: "http://120.52.31.31:590/service/api/egis/base/v1/wmts?Authorization=Basic%20MDAyYTJjY2JkY2NmNDJhYWE2OTEyMGY3YjRmN2EwOWI6NGVlZDQ1ODU4ZGI0NGU0Njk4MzVkNTQ5Y2JkZmNkMDM=",
			layer: "img",
			matrixSet: "c",
			format: "tiles",
			style: "default",
			tilingScheme: "Geographic",
			tileMatrixSetID: "c",
			tileMatrixLabels: [
				"1",
				"2",
				"3",
				"4",
				"5",
				"6",
				"7",
				"8",
				"9",
				"10",
				"11",
				"12",
				"13",
				"14",
				"15",
				"16",
				"17",
				"18",
			],
		});
		MapElements.judgeMap3d.add(wmtslayer);
		MapElements.judgeMap3d.setMinZoom(7); // 限制缩放级别
		MapElements.judgeMap3d.setMaxZoom(20);

		addJudgeMapTool();

		MapElements.radiuInfoWindow = new window.YunliMap3D.InfoWindow({
			content: "",
			position: [117.648113, 26.280479],
			show: false,
		});
		MapElements.judgeMap3d.add(MapElements.radiuInfoWindow);
	}

	queryData();
}

// 添加地图工具以及修复地图工具的样式
function addJudgeMapTool() {
	var toolbar = new window.YunliMap3D.Toolbar();
	MapElements.judgeMap3d.add(toolbar);
	let iconUrl =
		"url(/iocoss/datai/screen/1607675060094816256/images/ctb.png)";
	document.getElementsByClassName(
		"yunlimap3d-luopan-bg"
	)[0].style.backgroundImage = iconUrl;
	document.getElementsByClassName(
		"yunlimap3d-compass"
	)[0].style.backgroundImage = iconUrl;
	document.getElementsByClassName(
		"yunlimap3d-pointers"
	)[0].style.backgroundImage = iconUrl;
	document.getElementsByClassName(
		"yunlimap3d-rotateLeft"
	)[0].style.backgroundImage = iconUrl;
	document.getElementsByClassName(
		"yunlimap3d-rotateRight"
	)[0].style.backgroundImage = iconUrl;
	document.getElementsByClassName(
		"yunlimap3d-pitchUp"
	)[0].style.backgroundImage = iconUrl;
	document.getElementsByClassName(
		"yunlimap3d-controlbar-disable"
	)[0].style.csstext =
		'background-image: url("/iocoss/datai/screen/1607675060094816256/images/ctb.png") !important';
	document
		.getElementsByClassName("yunlimap3d-pitchDown")[0]
		.setAttribute(
			"style",
			'background-image: url("/iocoss/datai/screen/1607675060094816256/images/ctb.png") !important'
		);
} // 三维地图工具

async function queryData() {
	let params = {
		warnId: "1653812516680335362",
	};
	const promise1 = queryOldModel(params);
	const promise2 = queryNewModel(params);
	const [oldModel, newModel] = await Promise.all([promise1, promise2]);
	console.info("oldModel=>", oldModel);
	console.info("newModel=>", newModel);
	if (oldModel.code === "200") {
		const data = oldModel.data;
		setStoreData(dataKey.curModelKey, oldModel.data);
		state.center = [Number(data.longitude), Number(data.latitude)];
		MapElements.judgeMap3d.setCenter(state.center);
		addModelMarker3();
		renderFireGif();
		renderSmog();
	}
	if (newModel.code === "200") {
		setStoreData(dataKey.newModelKey, newModel.data);
	}
}

// 预警点标记
function addModelMarker3() {
	if (MapElements.warningPoint) {
		MapElements.judgeMap3d.remove(MapElements.warningPoint);
	}
	var marker = new window.YunliMap3D.Marker({
		icon: "/iocoss/datai/screen/1657309315717517312/images/dgWarnMarker-qeyenJ1DGEWV1VjXomquF3.png", // 模型中心点-点标记
		position: state.center,
		show: true, //非必填
		anchor: "top-left", //非必填，可选值:top-left/bottom-left/center-left/baseline-left/top-center/bottom-center/center-center/baseline-center/top-right/bottom-right/center-right/baseline-right
		offset: [-20, -140], //非必填
		rotation: 0, //非必填，旋转角度，0-360，单位:度
		width: 40, //非必填
		height: 140, //非必填
		scale: 1, //非必填
	});
	MapElements.warningPoint = marker;
	MapElements.judgeMap3d.add(marker);
}

function renderFireGif() {
	state.fireTimer && clearTimeout(state.fireTimer);
	state.fireTimer = setTimeout(function () {
		MapElements.fireGif &&
			MapElements.judgeMap3d.remove(MapElements.fireGif);
		var element = `<div><img width="200px" src="/iocoss/datai/screen/1657309315717517312/images/bgif1.gif" /></div>`;
		let infoWindowGif = new window.YunliMap3D.InfoWindow({
			position: state.center,
			content: element,
			anchor: "bottom-center",
		});
		infoWindowGif.container.style.pointerEvents = "none";
		MapElements.judgeMap3d.add(infoWindowGif);
		MapElements.fireGif = infoWindowGif;
	}, 5000);
}

// 烟雾效果
function renderSmog() {
	let pos = state.center;
	// const pos = [116.514849, 39.923649, 26.02009];
	const position = window.Cesium.Cartesian3.fromDegrees(pos[0], pos[1], 2);
	let partSmog = new window.YunliMap3D.ParticleSystem({
		position: position, // 位置
		style: {
			image: "/iocoss/datai/screen/1657309315717517312/images/smoke.png",
			particleSize: 12, // 粒子大小（单位：像素）
			emissionRate: 40.0, // 发射速率 （单位：次/秒）
			startColor: window.Cesium.Color.WHITE.withAlpha(0.7), // 开始颜色
			endColor: window.Cesium.Color.WHITE.withAlpha(0.0), // 结束颜色
			startScale: 4.0, //  开始比例（单位：相对于imageSize大小的倍数）
			endScale: 40.0, // 结束比例（单位：相对于imageSize大小的倍数）
			minimumSpeed: 5, // 最小速度(米/秒)
			maximumSpeed: 10, // 最大速度(米/秒)
			minimumParticleLife: 1.1, // 设置粒子寿命的可能持续时间的最小界限（以秒为单位），超过该最小界限，粒子的实际寿命将随机生成
			maximumParticleLife: 1.5, // 设置粒子寿命的可能持续时间的最大界限（以秒为单位），超过该最大界限，粒子的实际寿命将随机生成
			lifetime: 2.0, // 粒子系统发射粒子的时间（以秒为单位）。
		},
		gravity: 15, //重力因子
		target: new window.Cesium.Cartesian3(-0.2, -0.4, 0.1), // 粒子的方向（东北上）
		// target: new window.Cesium.Cartesian3(-1, -1, 1), // 粒子的方向（东北上）
	});

	MapElements.judgeMap3d.add(partSmog);
	MapElements.smoke = partSmog;
}

function isNumericAndColonOnly(inputString) {
	// 使用正则表达式匹配只包含数字和冒号的字符串
	var regex = /^[0-9:]+$/;
	return regex.test(inputString);
}

function isAlphabeticOnly(inputString) {
	// 使用正则表达式匹配只包含字母的字符串
	var regex = /^[a-zA-Z]+$/;
	return regex.test(inputString);
}

// 椭圆围栏（通用围栏）
function renderEllipseFence(coords, colorObj) {
	try {
		let geoFencing = new YunliMap3D.GeoFencingEntity({
			coordinates: coords,
			// flip: true,
			height: 40,
			color: colorObj.color,
			type: "animationVertical", //竖向运动
			alphaImage:
				"/iocoss/datai/screen/1657309315717517312/images/fence.png", //透明纹理，只使用这个图片的alpha参数。 只有在type类型为animationVertical或animationHorizontal的时候有作用
			repeat: new Cesium.Cartesian2(1, 1), //纹理重复个数 只有在type类型为animationVertical或animationHorizontal的时候有作用
			zIndex: 999999,
		});
		MapElements.judgeMap3d.add(geoFencing);
		MapElements.modelLayer.push(geoFencing);
	} catch (error) {
		console.info("renderEllipseFence_error=>", error);
	}
}

// 圆形围栏（根据中心点和半径）
function renderRoundFence(radius, colorObj) {
	// let center = [123.531, 41.94427];
	//    console.info('initEllipseFenceFromCenterAndRadius------', radius, colorObj.color);
	var point = new YunliMap3D.Point({
		position: state.center,
		size: 2,
		color: "#F90",
		outlineColor: "#03ccbb",
		outlineWidth: 2,
		show: true,
	});
	let pointBuffer = YunliMap3D.Buffer.getBufferEntityOfPoint(point.csEntity, {
		radius: radius,
		units: "meters",
	});
	YunliMap3D.Entity.fromCesiumEntity(pointBuffer);
	let arr = pointBuffer.getLngLats("polygon");
	arr.length = arr.length - 1;
	// console.info('initEllipseFenceFromCenterAndRadius------', arr);
	let geoFencing2 = new YunliMap3D.GeoFencingEntity({
		coordinates: arr,
		// flip: true,
		height: 40,
		color: colorObj.color,
		type: "animationVertical", //竖向运动
		alphaImage: "/iocoss/datai/screen/1657309315717517312/images/fence.png", //透明纹理，只使用这个图片的alpha参数。 只有在type类型为animationVertical或animationHorizontal的时候有作用
		repeat: new Cesium.Cartesian2(1, 1), //纹理重复个数 只有在type类型为animationVertical或animationHorizontal的时候有作用
		zIndex: 999999,
	});
	MapElements.judgeMap3d.add(geoFencing2);
	MapElements.modelLayer.push(geoFencing2);
}

function closeAnalysis() {
	MapElements.judgeMap3d.remove(MapElements.fireGif);
	MapElements.judgeMap3d.remove(MapElements.smoke);
	MapElements.judgeMap3d.remove(MapElements.warningPoint);
	clearOldLayer();
}

const getBurnAreaType = (model) => {
	if (model === "喷射火模型") {
		return "椭圆围栏";
	} else {
		return "圆形围栏";
	}
};

let colorMapping = {
	爆炸上限: {
		color: "rgba(255, 0, 0, 0.8)",
		zIndex: 90,
		type: "椭圆围栏",
	},
	爆炸下限: {
		color: "rgba(255, 105, 0, 0.8)",
		zIndex: 80,
		type: "椭圆围栏",
	},
	人员死亡: {
		color: "rgba(255, 0, 0, 0.8)",
		zIndex: 70,
		type: "椭圆围栏",
	},
	人员重伤: {
		color: "rgba(255, 105, 0, 0.8)",
		zIndex: 60,
		type: "椭圆围栏",
	},
	人员轻伤: {
		color: "rgba(255, 255, 0, 0.8)",
		zIndex: 50,
		type: "椭圆围栏",
	},
	人员伤害: {
		color: "rgba(255, 255, 0, 0.8)",
		zIndex: 40,
		type: "椭圆围栏",
	},
	"人员灾损:三级:死亡": {
		color: "rgba(255, 0, 0, 0.8)",
		zIndex: 90,
		type: "圆形围栏",
	},
	"人员灾损:二级:重伤": {
		color: "rgba(255, 105, 0, 0.8)",
		zIndex: 80,
		type: "圆形围栏",
	},
	"人员灾损:一级:轻伤": {
		color: "rgba(255, 255, 0, 0.8)",
		zIndex: 70,
		type: "圆形围栏",
	},
	"建筑物灾损:五级:倒塌": {
		color: "rgba(255, 0, 0, 0.8)",
		zIndex: 60,
		type: "圆形围栏",
	},
	"建筑物灾损:四级:严重破坏": {
		color: "rgba(255, 105, 0, 0.8)",
		zIndex: 50,
		type: "圆形围栏",
	},
	"建筑物灾损:三级:中度破坏": {
		color: "rgba(255, 255, 0, 0.8)",
		zIndex: 40,
		type: "圆形围栏",
	},
	"建筑物灾损:二级:轻度破坏": {
		color: "rgba(0, 0, 255, 0.8)",
		zIndex: 30,
		type: "圆形围栏",
	},
	"建筑物灾损:一级:玻璃破坏": {
		color: "rgba(0, 255, 255, 0.8)",
		zIndex: 20,
		type: "圆形围栏",
	},
	三度烧伤区: {
		color: "rgba(255, 0, 0, 0.8)",
		zIndex: 90,
		type: "椭圆围栏",
		getType: getBurnAreaType,
	},
	二度烧伤区: {
		color: "rgba(255, 105, 0, 0.8)",
		zIndex: 80,
		type: "椭圆围栏",
		getType: getBurnAreaType,
	},
	一度烧伤区: {
		color: "rgba(255, 255, 0, 0.8)",
		zIndex: 70,
		type: "椭圆围栏",
		getType: getBurnAreaType,
	},
};

const $ = window.$;

function makeAjaxRequest(url, method, data) {
	// 返回一个 Promise 对象
	return new Promise((resolve, reject) => {
		$.ajax({
			url: url,
			method: method,
			data: data,
			success: function (response) {
				// 成功时，调用 resolve 并传递响应数据
				resolve(response);
			},
			error: function (error) {
				// 失败时，调用 reject 并传递错误信息
				reject(error);
			},
		});
	});
}

// 旧模型
// http://10.35.60.136:32119/easydata/api/center/JK1748265725028929536?warnId=1653812516680335362
const queryOldModel = (data) => {
	return makeAjaxRequest(
		"/easydata/api/center/JK1748265725028929536",
		"GET",
		data
	);
};

// 新模型
// http://10.35.60.136:32119/easydata/api/center/JK1747830600046678016?warnId=1653812516680335362
const queryNewModel = (data) => {
	return makeAjaxRequest(
		"/easydata/api/center/JK1747830600046678016",
		"GET",
		data
	);
};
