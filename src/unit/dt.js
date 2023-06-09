globalEventEmitter.on(
	"store_group_ea56e6bbc54d467996319ce8062f8632-fm4zwQamcG52zU3MnZXaE2",
	changeEgisMapLayer
);
let wmtsLayerInit = null;
let wmtsLayer2 = null;
function changeEgisMapLayer() {
	let varVal = getDataByKey(
		"store_group_ea56e6bbc54d467996319ce8062f8632-fm4zwQamcG52zU3MnZXaE2"
	); //类型变量
	let layerTypeObj = {
		高分影像: "kd",
		全国二维影像: "img",
		默认: "yunli-3",
		白色: "egis-5",
	};

	console.info("地图----", varVal);
	let layerType = layerTypeObj[varVal];
	let mapCom = comList.get("@com_1d95771e8b584d7d92ee2898acbc1e84"); //地图key
	let mapIns = mapCom.instance._map;

	console.log("changeEgisMapLayer********", varVal, layerType, mapIns);

	switch (layerType) {
		case "kd":
		case "img":
			wmtsLayerInit = new YunliMap.XYZLayer({
				url:
					"http://120.52.31.31:590/service/api/egis/base/v1/wmts?layer=" +
					layerType +
					"&style=default&tilematrixset=c&Service=WMTS&Request=GetTile&Version=1.0.0&Format=tiles&TileMatrix={z}&TileCol={x}&TileRow={y}",
				projection: "EPSG:4326",
				tileLoadFunction: tileLoadFun,
			});
			mapIns.add(wmtsLayerInit);

			wmtsLayer2 = new YunliMap.XYZLayer({
				url: "http://120.52.31.31:590/service/api/egis/base/v1/wmts?layer=cta&style=default&tilematrixset=c&Service=WMTS&Request=GetTile&Version=1.0.0&Format=tiles&TileMatrix={z}&TileCol={x}&TileRow={y}",
				projection: "EPSG:4326",
				tileLoadFunction: tileLoadFun,
			});
			mapIns.add(wmtsLayer2);
			break;

		case "yunli-3":
		case "egis-5":
			if (wmtsLayerInit) {
				wmtsLayerInit.hide();
			}
			if (wmtsLayer2) {
				wmtsLayer2.hide();
			}
			mapIns.loadMapboxStyle({
				style:
					" http://10.35.60.136:32119/iocoss/datai/screen/1600033481625178112/other/" +
					layerType +
					".json",
				headers: {
					Authorization:
						"Basic MDAyYTJjY2JkY2NmNDJhYWE2OTEyMGY3YjRmN2EwOWI6NGVlZDQ1ODU4ZGI0NGU0Njk4MzVkNTQ5Y2JkZmNkMDM=",
				},
				zIndex: 99,
				projection: "EPSG:4326",
			});
			break;
	}
}

function tileLoadFun(imageTile, src) {
	const client = new XMLHttpRequest();
	client.open("GET", src);
	client.responseType = "arraybuffer";
	client.setRequestHeader(
		"Authorization",
		"Basic " +
			btoa("002a2ccbdccf42aaa69120f7b4f7a09b:4eed45858db44e469835d549cbdfcd03")
	);

	client.onload = function () {
		const arrayBufferView = new Uint8Array(this.response);
		const blob = new Blob([arrayBufferView], { type: "image/png" });
		const urlCreator = window.URL;
		const imageUrl = urlCreator.createObjectURL(blob);
		imageTile.getImage().src = imageUrl;
	};
	client.send();
}
