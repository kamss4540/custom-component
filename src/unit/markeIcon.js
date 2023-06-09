let tldian = $("div[datatype='@com_9xV75AVceQquoaLUay7nhC']");
let tlmian = $("div[datatype='@com_u794XRHTsdeuK9Gxma5mG5']");
let bjdian = $("div[datatype='@com_qScaoLNaUdDPH1cMWCLvxZ']");
let bjmian = $("div[datatype='@com_s632heir8tCDNsK4yEB9EF']");
tldian.css({ display: "none" });
tlmian.css({ display: "none" });
bjdian.css({ display: "none" });
bjmian.css({ display: "none" });
setTimeout(() => {
	let tldian1 = $("div[datatype='@com_9xV75AVceQquoaLUay7nhC']");
	let tlmian1 = $("div[datatype='@com_u794XRHTsdeuK9Gxma5mG5']");
	let bjdian1 = $("div[datatype='@com_qScaoLNaUdDPH1cMWCLvxZ']");
	let bjmian1 = $("div[datatype='@com_s632heir8tCDNsK4yEB9EF']");
	tldian1.css({ display: "none" });
	tlmian1.css({ display: "none" });
	bjdian1.css({ display: "none" });
	bjmian1.css({ display: "none" });
}, 2000);

window.globalEventEmitter.on(
	"store_group_9f9ZNRWGoQ86qDYydyap8c-fKv2B7bxX5QTP5bPJh5AEC",
	(obj) => {
		if (obj.alarmkey) {
			window.setStoreData(
				"store_group_9f9ZNRWGoQ86qDYydyap8c-nkbccnqbuKqfsYHKT7LopC",
				{
					type: "vehicle",
					alarmkey: obj.alarmkey,
				}
			); //点
			window.setStoreData(
				"store_group_9f9ZNRWGoQ86qDYydyap8c-11CU3AHhj1jtfiTNnmqNRH",
				{
					type: "influence",
					alarmkey: obj.alarmkey,
				}
			);
			console.info(layerList, "layerList");
			layerList[77].layers[3].instance.show();
			layerList[77].layers[4].instance.show();
		}
	}
);
window.globalEventEmitter.on(
	"store_group_9f9ZNRWGoQ86qDYydyap8c-1xLJtNFti6PKbET7S8DZa8",
	(obj) => {
		if (obj.alarmkey) {
			window.setStoreData(
				"store_group_9f9ZNRWGoQ86qDYydyap8c-foZfAYBx4P5YsozgwXdVgr",
				{
					type: "vehicle",
					alarmkey: obj.alarmkey,
				}
			); //点
			window.setStoreData(
				"store_group_9f9ZNRWGoQ86qDYydyap8c-5fvtJRsDqusSbcwUzqJYSM",
				{
					type: "influence",
					alarmkey: obj.alarmkey,
				}
			);
			console.info(layerList, "layerList");
			layerList[77].layers[0].instance.show();
			layerList[77].layers[1].instance.show();
		}
	}
);

window.globalEventEmitter.on(
	"store_group_f87043abacf6435eaa8a8072edf7eaa1-2fbc7135fede4b0faa8c4a6cee88bcc2",
	(list) => {
		if (list && list.length) {
			const keyList = list.map((item) => item.key);
			if (!keyList.includes("@com_dHQ8hmmRTVTcXavhLXDrDq")) {
				// setTimeout(()=>{
				layerList[77].layers[3].instance.hide();
				layerList[77].layers[4].instance.hide();
				// },1000)
				setTimeout(() => {
					let tldian = $("div[datatype='@com_9xV75AVceQquoaLUay7nhC']");
					let tlmian = $("div[datatype='@com_u794XRHTsdeuK9Gxma5mG5']");
					let bjdian = $("div[datatype='@com_qScaoLNaUdDPH1cMWCLvxZ']");
					let bjmian = $("div[datatype='@com_s632heir8tCDNsK4yEB9EF']");
					tldian.css({ display: "none" });
					tlmian.css({ display: "none" });
					bjdian.css({ display: "none" });
					bjmian.css({ display: "none" });
				}, 100);
			}

			if (!keyList.includes("@com_kDHjCHvqMBshNceRUVrL28")) {
				layerList[77].layers[0].instance.hide();
				layerList[77].layers[1].instance.hide();
				setTimeout(() => {
					let tldian = $("div[datatype='@com_9xV75AVceQquoaLUay7nhC']");
					let tlmian = $("div[datatype='@com_u794XRHTsdeuK9Gxma5mG5']");
					let bjdian = $("div[datatype='@com_qScaoLNaUdDPH1cMWCLvxZ']");
					let bjmian = $("div[datatype='@com_s632heir8tCDNsK4yEB9EF']");
					tldian.css({ display: "none" });
					tlmian.css({ display: "none" });
					bjdian.css({ display: "none" });
					bjmian.css({ display: "none" });
				}, 100);
			}
		} else {
			layerList[77].layers[3].instance.hide();
			layerList[77].layers[4].instance.hide();
			layerList[77].layers[0].instance.hide();
			layerList[77].layers[1].instance.hide();
			setTimeout(() => {
				let tldian = $("div[datatype='@com_9xV75AVceQquoaLUay7nhC']");
				let tlmian = $("div[datatype='@com_u794XRHTsdeuK9Gxma5mG5']");
				let bjdian = $("div[datatype='@com_qScaoLNaUdDPH1cMWCLvxZ']");
				let bjmian = $("div[datatype='@com_s632heir8tCDNsK4yEB9EF']");
				tldian.css({ display: "none" });
				tlmian.css({ display: "none" });
				bjdian.css({ display: "none" });
				bjmian.css({ display: "none" });
			}, 100);
		}
	}
);

let gjStartMarker = null;
let gjEndMarker = null;
let gjpolyline = null;
let bjgjpolyline = null;
let animation = null;
let alarmPoints = [];
let timer = null // 播放动画延迟的id

// 获取地图实例
const getMapInstance = () => {
	return comList.get("@com_bf19d892893c4e439eb9642d3144da80").instance?._map;
};

// 销毁轨迹动画
function destroyAnimation() {
	if (animation) {
		animation.stop();
		animation.destroy();
		animation = null;
	}
}

// 清除历史轨迹中的报警点位
function clearAlarmPoints() {
	if (alarmPoints.length) {
		let map2d = getMapInstance();
		alarmPoints.forEach((item) => {
			map2d.remove(item);
		});
		alarmPoints = [];
	}
}

// 监听轨迹线数据
window.globalEventEmitter.on(
	"store_group_9ip8dXfP9cuToiioodckKt-vpdQj3bhRgFAEYSmqFrrsh",
	(obj) => {
		let map2d = getMapInstance();
		if (gjStartMarker) {
			map2d.remove(gjStartMarker);
			gjStartMarker = null;
		}
		if (gjEndMarker) {
			map2d.remove(gjEndMarker);
			gjEndMarker = null;
		}
		if (gjpolyline) {
			map2d.remove(gjpolyline);
			gjpolyline = null;
		}
		if (bjgjpolyline) {
			map2d.remove(bjgjpolyline);
			bjgjpolyline = null;
		}
		destroyAnimation();
		clearAlarmPoints();

		if (obj && obj.alarmLineString && obj.alarmLineString.length) {
			bjgjpolyline = new YunliMap.Polyline({
				coordinates: obj.alarmLineString,
				zIndex: 99,
				style: {
					color: "#FF4343",
					lineWidth: 5,
					strokeWidth: 1,
					strokeColor: "#FFF",
				},
			});
			map2d.add(bjgjpolyline);
			map2d.fit({
				feature: bjgjpolyline,
				maxZoom: 14,
			});
		}
		if (obj.startAddress) {
			gjStartMarker = new YunliMap.Marker({
				icon: "/iocoss/datai/screen/1607190335685922816/images/origin.png",
				position: [
					Number(obj.startAddress.longitude),
					Number(obj.startAddress.latitude),
				],
				scale: 1,
				offset: [-25, -44],
				zIndex: 999,
				label: {
					offset: [0, -40],
					text: obj.startAddress.address,
					fontSize: 12,
					color: "#fff",
					strokeWidth: 0,
				},
			});
			map2d.add(gjStartMarker);
		}
		if (obj.endAddress) {
			gjEndMarker = new YunliMap.Marker({
				icon: "/iocoss/datai/screen/1607190335685922816/images/destination.png",
				position: [
					Number(obj.endAddress.longitude),
					Number(obj.endAddress.latitude),
				],
				scale: 1,
				offset: [-25, -44],
				zIndex: 999,
				label: {
					offset: [0, -40],
					text: obj.endAddress.address,
					fontSize: 12,
					color: "#fff",
					strokeWidth: 0,
				},
			});
			map2d.add(gjEndMarker);
		}
		if (obj && obj.lineString && obj.lineString.length) {
			const getCarIcon = (type) => {
				switch (type) {
					case "WXPC":
						return "/iocoss/datai/screen/1607190335685922816/images/bao2.png";
					case "BANC":
						return "/iocoss/datai/screen/1607190335685922816/images/ban.png";
					case "BAOC":
						return "/iocoss/datai/screen/1607190335685922816/images/ban.png";

					default:
						return "/iocoss/datai/screen/1607190335685922816/images/ban.png";
				}
			};
			// 车辆类型
			let carType = getDataByKey(
				"store_group_9ip8dXfP9cuToiioodckKt-oLAXLEtvwJH53dgHgHibhY"
			);

			function initAnimation() {
				let length = YunliMap.GeometryUtil.getPathLength(obj.lineString);
				let extent = YunliMap.GeometryUtil.extentFromCoordinates(
					obj.lineString
				);
				map2d.fit({
					extent,
					padding: [100, 20, 30, 100],
				});

				animation = new YunliMap.TrackPlayback({
					map: map2d, // 地图对象
					path: obj.lineString, // 轨迹数据
					polyline: {
						// 轨迹线样式
						style: {
							color: "#F90",
							lineWidth: 5,
							strokeWidth: 2,
							strokeColor: "#FFF",
						},
						showArrow: true,
					}, //线段对象
					speed: length / 5, // 速度，米/秒
					marker: new YunliMap.Marker2({
						position: [
							Number(obj.startAddress.longitude),
							Number(obj.startAddress.latitude),
						],
						icon: getCarIcon(carType),
						offset: [0, 0],
						opacity: 1,
						width: 52,
						height: 26,
						hidden: false,
					}),
					autoRotation: true, // 自动旋转图标角度
					iconDegree: 90, //图片原始角度
				});

				animation.onStop(function () {
					// 结束回放时，清除已回放路径坐标
					passedLine.setCoordinates([]);
					console.log("运行到终点了");
				});

				animation.onProgress(function (info) {
					// 设置已回放路径的坐标
					passedLine.setCoordinates(info.passedCoordinates);
					console.log("行走里程", info.passDistance);
					console.log("剩余里程", info.surplusDistance);
				});

				// 已回放路径，在轨迹回放的onProgress事件回调中设置坐标
				var passedLine = new YunliMap.Polyline({
					style: {
						color: "rgb(39,170,55)",
						lineWidth: 5,
						strokeWidth: 1,
						strokeColor: "#FFF",
					},
				});
				map2d.add(passedLine);
			}

			initAnimation();
			clearTimeout(timer)
			timer = setTimeout(() => {
				animation.start();
			}, 1000);

			// 轨迹列表数据
			let trackList = getDataByKey(
				"store_group_9ip8dXfP9cuToiioodckKt-7cUAdm5Jzd2TL3a7xrS7sq"
			);

			let alarms = trackList.filter((item) => item.alarmStatus != "正常");

			// 信息窗
			var infowindow = new YunliMap.InfoWindow({
				content:
					'<div id="trackInfo" style="display: block;padding: 5px 10px;box-shadow: 0px 0px 10px #03ccbb;background: #03ccbb;color: #FFF;font-size: 12px;line-height: 18px;border-radius: 4px;pointer-events: auto;"></div>',
				forceTop: true,
			});

			map2d.add(infowindow);
			var info_ele = document.querySelector("#trackInfo");

			const getIcon = (str) => {
				let icon =
					"/iocoss/datai/screen/1607190335685922816/images/chaosubaojing_icon.png";
				if (str.includes("超速预警")) {
					icon =
						"/iocoss/datai/screen/1607190335685922816/images/chaosubaojing_icon.png";
				} else if (str.includes("疲劳驾驶")) {
					icon =
						"/iocoss/datai/screen/1607190335685922816/images/pilaojiashi_icon.png";
				} else if (str.includes("当天累计驾驶超时")) {
					icon =
						"/iocoss/datai/screen/1607190335685922816/images/dangtianleij_icon.png";
				} else if (str.includes("线路偏移报警")) {
					icon =
						"/iocoss/datai/screen/1607190335685922816/images/xianlupianyi_icon.png";
				} else if (str.includes("车辆超载报警")) {
					icon =
						"/iocoss/datai/screen/1607190335685922816/images/cheliangchaozai_icon.png";
				}
				return icon;
			};

			alarms.map((item) => {
				let marker = new YunliMap.Marker({
					icon: getIcon(item.alarmStatus),
					position: [Number(item.longitude), Number(item.latitude)],
					scale: 0.2,
					anchor: "bottom",
					// offset: [-15, 15], //偏移量
					zIndex: 999,
				});

				// 点标记绑定鼠标移入
				marker.on("mouseover", function () {
					info_ele.innerText = item.alarmStatus + "\n" + item.gpstime;
					infowindow.setPosition(marker.getPosition());
					infowindow.show();
					infowindow.setOffset([0, -28]);
				});
				// 点标记绑定鼠标移入
				marker.on("mouseout", function () {
					infowindow.hide();
				});

				map2d.add(marker);
				alarmPoints.push(marker);
			});
		}
	}
);

window.globalEventEmitter.on("qcgjDetailFn", (obj) => {
	let map2d = getMapInstance();
	if (gjStartMarker) {
		map2d.remove(gjStartMarker);
		gjStartMarker = null;
	}
	if (gjEndMarker) {
		map2d.remove(gjEndMarker);
		gjEndMarker = null;
	}
	if (gjpolyline) {
		map2d.remove(gjpolyline);
		gjpolyline = null;
	}
	if (bjgjpolyline) {
		map2d.remove(bjgjpolyline);
		bjgjpolyline = null;
	}
	destroyAnimation();
	clearAlarmPoints();
});

window.globalEventEmitter.on("hanleWjscFn", (obj) => {
	setTimeout(() => {
		let key = window.getDataByKey(
			"store_group_uiAwLTZ9tsDuHMLM4enLzZ-1Ew73dq57nyMoQLJRQ8PkK"
		);
		if (!key) {
			window.setStoreData(
				"store_group_uiAwLTZ9tsDuHMLM4enLzZ-1Ew73dq57nyMoQLJRQ8PkK",
				"null"
			);
		}
	}, 100);
});

// 重播轨迹动画
window.globalEventEmitter.on("rebroadcast", () => {
	if (animation) {
		animation.stop();
		animation.start();
	}
});
