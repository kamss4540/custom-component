// 实时轨迹
globalEventEmitter.on("realTimeTrack", realTimeTrack);
// 渲染报警点位
// 实时轨迹-报警列表
globalEventEmitter.on("renderAlarmPoint", renderAlarmPoint);

// 实时轨迹第一步，今日历史轨迹的动画
globalEventEmitter.on("firstStep", firstStep);

// 是否主动触发 onStop
let initiative = false;

// 定时器
let realTimeTrackTimer = null;
// 删除标记
let delMarker = null;
let animationTimer = null;
let realTimeTrackLine = null;

function firstStep(obj) {
	console.info("%c firstStep=>", "color: red; font-size: 18px", obj);
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
	// 实时轨迹的定时器
	clearRealTimeTrackTimer();
	clearAlarmPoints();
	// 实时轨迹的删除按钮
	removeDelMarker();

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
			let extent = YunliMap.GeometryUtil.extentFromCoordinates(obj.lineString);
			map2d.fit({
				extent,
				padding: [100, 100, 100, 100],
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
				speed: length / 8, // 速度，米/秒
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

				// 在initiative为true时,说明是主动触发的onStop,不触发后续事件
				if (!initiative) {
					// 今日历史轨迹播放完毕，开始播放实时轨迹
					const startTime = moment()
						.subtract(1, "minutes")
						.format("YYYY-MM-DD HH:mm:ss");
					const endTime = moment().format("YYYY-MM-DD HH:mm:ss");
					fetchTrackData({ startTime, endTime }).then((res) => {
						realTimeTrack(res);
					});
				} else {
					console.info("=>手动停止动画");
				}
			});

			animation.onProgress(function (info) {
				// 设置已回放路径的坐标
				passedLine.setCoordinates(info.passedCoordinates);
				// console.log("行走里程", info.passDistance);
				// console.log("剩余里程", info.surplusDistance);
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
		clearTimeout(timer);
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

			marker.setExtData(item);

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

function realTimeTrack(obj, prev) {
	console.info("%c initiative=>", "color: red; font-size: 18px", initiative);
	let map2d = getMapInstance();
	clearShroud();

	if (!realTimeTrackLine) {
		// 路径线
		realTimeTrackLine = new YunliMap.Polyline({
			zIndex: 99,
			style: {
				color: "rgb(39,170,55)",
				lineWidth: 10,
				strokeWidth: 0,
				strokeColor: "#FFF",
			},
		});
		map2d.add(realTimeTrackLine);

		// 单击鼠标右键显示删除按钮
		realTimeTrackLine.on("contextmenu", (e) => {
			addDelBtn(e);
		});

		realTimeTrackLine.on("mouseleave", removeDelMarker);
	}

	if (obj && obj.lineString && obj.lineString.length) {
		function addDelBtn(e) {
			if (delMarker) {
				map2d.remove(delMarker);
				delMarker = null;
			}

			delMarker = new YunliMap.Text({
				coordinate: e.coordinate,
				textAlign: "center",
				textBaseline: "middle",
				offsetX: 25,
				offsetY: 0,
				scale: 1,
				radius: 3,
				//zooms: [8, 18],
				rotation: 0,
				text: "删除",
				zIndex: 991,
				color: "#fff",
				padding: [5, 10, 5, 10],
				background: "rgba(236,56,114,0.9)",
			});
			map2d.add(delMarker); // 添加删除按钮

			// 鼠标进入删除按钮时解绑事件
			delMarker.on("mouseenter", (e) => {
				realTimeTrackLine.off("mouseleave", removeDelMarker);
			});

			// 鼠标离开删除按钮时重新绑定事件
			delMarker.on("mouseleave", bindMouseleave);

			delMarker.on("click", function () {
				delMarker.off("click"); //移除marker下所有click事件
				delMarker.off("mouseleave", bindMouseleave);
				clearAnimation();
				clearShroud();
				globalEventEmitter.emit("closeRealTimeTrack");
			});
		}

		// if (!prev) {
		// 	map2d.fit({
		// 		feature: realTimeTrackLine,
		// 		maxZoom: 14,
		// 	});
		// }
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

		function initAnimation(path) {
			// 调试用 无需打开
			// debuggingPoint(path)

			let length = YunliMap.GeometryUtil.getPathLength(path);
			let extent = YunliMap.GeometryUtil.extentFromCoordinates(obj.lineString);
			// if (!prev) {
			map2d.fit({
				extent: extent,
				// padding: [100, 100, 100, 100],
				maxZoom: 16,
			});
			// }

			let position = [
				Number(obj.startPoint.longitude),
				Number(obj.startPoint.latitude),
			];

			animation = new YunliMap.TrackPlayback({
				map: map2d, // 地图对象
				path, // 轨迹数据
				polyline: {
					// 轨迹线样式
					style: {
						color: "rgba(0, 0, 0, 0)",
						lineWidth: 5,
						strokeWidth: 2,
						strokeColor: "rgba(0, 0, 0, 0)",
					},
					// showArrow: true,
				}, //线段对象
				speed: length / (60 * 1), // 速度，米/秒
				marker: new YunliMap.Marker2({
					position,
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
				// 如果这次结束不是手动触发
				if (!initiative) {
					console.info("=>运行到终点了", initiative);

					// console.info("realTimeTrackLine=>", realTimeTrackLine.coordinates);
					realTimeTrackLine.setCoordinates([
						...realTimeTrackLine.coordinates,
						...obj.lineString,
					]);
					// 结束回放时，清除已回放路径坐标
					_passedLine.setCoordinates([]);
				} else {
					console.info("=>手动停止动画");
				}
			});

			animation.onProgress(function (info) {
				// 设置已回放路径的坐标
				_passedLine.setCoordinates(info.passedCoordinates);
			});

			// 已回放路径，在轨迹回放的onProgress事件回调中设置坐标
			var _passedLine = new YunliMap.Polyline({
				style: {
					color: "rgb(39,170,55)",
					lineWidth: 10,
					strokeWidth: 0,
					strokeColor: "#FFF",
				},
			});
			map2d.add(_passedLine);
		}

		function getPath() {
			let _path = [obj.lineString[obj.lineString.length - 1]];
			if (prev) {
				_path = [prev[prev.length - 1]];
				let last = prev[prev.length - 1];
				for (let i = obj.lineString.length - 1; i >= 0; i--) {
					_path.push(obj.lineString[i]);
					if (
						obj.lineString[i][0] == last[0] &&
						obj.lineString[i][1] == last[1]
					) {
						break;
					}
				}
				_path.reverse();
			} else {
				_path = obj.lineString;
			}

			let isStay;
			if (
				_path.length <= 2 &&
				_path[0][0] == _path[1][0] &&
				_path[0][1] == _path[1][1]
			) {
				isStay = true;
			}
			return [_path, isStay];
		}

		function getPath2() {
			let _path = [obj.lineString[obj.lineString.length - 1]];
			if (prev) {
				_path = [prev[prev.length - 1], ...obj.lineString];
			} else {
				_path = obj.lineString;
			}
			let isStay;
			if (
				_path.length <= 2 &&
				_path[0][0] == _path[1][0] &&
				_path[0][1] == _path[1][1]
			) {
				isStay = true;
			}
			return [_path, isStay];
		}

		const [path, isStay] = getPath2();

		clearTimeout(animationTimer);
		if (!isStay) {
			// 销毁轨迹动画
			clearAnimation();
			initAnimation(path);

			if (animation) {
				animationTimer = setTimeout(() => {
					animation.start();
				}, 1000);
			}
		}

		requestNextLine(obj.lineString);

		// 请求下一次路径
		function requestNextLine(current) {
			clearRealTimeTrackTimer();
			realTimeTrackTimer = setTimeout(() => {
				let vehicleNo = getDataByKey(
					"store_group_426ZZUE9suia9Yb3n4yYp9-wjkWRjdQcUxcUaPF2Mcn7y"
				).carNo;
				// 实时轨迹时间
				let timeKey =
					"store_group_426ZZUE9suia9Yb3n4yYp9-u8NPDnBiYV1mDsbyZqaG8M";
				let lastTime = getDataByKey(timeKey);
				let startTime = lastTime[1];
				let endTime = moment().format("YYYY-MM-DD HH:mm:ss");
				setStoreData(timeKey, [startTime, endTime]);
				$.get(
					`/easydata/api/center/JK1716365255599656960?vehicleNo=${vehicleNo}&startTime=${startTime}&endTime=${endTime}`,
					(res) => {
						if (res.code == 200) {
							let data = res.data;
							realTimeTrack(data, current);
						}
					}
				);
			}, 1 * 60 * 1000 + 2000);
		}
	}
}

/**
 * 获取轨迹数据
 * @param {Object} params
 * @param {String} params.startTime
 * @param {String} params.endTime
 */
function fetchTrackData({ startTime, endTime }) {
	return new Promise((resolve, reject) => {
		// 变量名称：车牌号
		const vehicleNo = getDataByKey(
			"store_group_9ip8dXfP9cuToiioodckKt-tM9njF1JVEaown4HoKFKNs"
		);
		$.get(
			`/easydata/api/center/JK1716365255599656960?vehicleNo=${vehicleNo}&startTime=${startTime}&endTime=${endTime}`,
			(res) => {
				if (res.code == 200) {
					resolve(res.data);
				} else {
					reject(res);
				}
			}
		);
	});
}

// 移除删除按钮
function removeDelMarker() {
	if (delMarker) {
		getMapInstance().remove(delMarker);
	}
}

// 清除定时器
function clearRealTimeTrackTimer() {
	if (realTimeTrackTimer) {
		clearTimeout(realTimeTrackTimer);
	}
}

// 绑定鼠标移出事件
function bindMouseleave() {
	realTimeTrackLine.on("mouseleave", removeDelMarker);
}

// 清除覆盖物 运行中
function clearShroud() {
	removeDelMarker();
	// 手动执行 animation.stop() 之后必须清除定时器
	clearRealTimeTrackTimer();
}

// 清除覆盖物 退出时
function clearAllShroud() {
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
	if (realTimeTrackLine) {
		map2d.remove(realTimeTrackLine);
		realTimeTrackLine = null;
	}
	removeDelMarker();

	// 手动执行 animation.stop() 之后必须清除定时器
	clearRealTimeTrackTimer();
}

// 清除轨迹动画
function clearAnimation() {
	initiative = true;
	if (animation) {
		animation.stop();
		animation.destroy();
		animation = null;
	}
	initiative = false;
}

// 渲染报警点位
function renderAlarmPoint(trackList) {
	console.info("renderAlarmPoint=>", trackList);
	let map2d = getMapInstance();

	// 轨迹列表数据
	// let trackList = getDataByKey(
	// 	"store_group_9ip8dXfP9cuToiioodckKt-7cUAdm5Jzd2TL3a7xrS7sq"
	// );

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

		marker.setExtData(item);

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

function debuggingPoint(list) {
	list.forEach((item, index) => {
		delMarker = new YunliMap.Text({
			coordinate: item,
			textAlign: "center",
			textBaseline: "middle",
			offsetX: 25,
			offsetY: 0,
			scale: 1,
			radius: 3,
			rotation: 0,
			text: index + "_" + item.toString(),
			zIndex: 999,
			color: "#fff",
			padding: [5, 10, 5, 10],
			background: "rgba(236,56,114,0.9)",
		});
		map2d.add(delMarker); // 添加删除按钮
	});
}
