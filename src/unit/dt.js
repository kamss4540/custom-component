// 实时轨迹
globalEventEmitter.on("realTimeTrack", realTimeTrack);

// 定时器
let realTimeTrackTimer = null;
// 删除标记
let delMarker = null;
let animationTimer = null;

function realTimeTrack(obj, prev) {
	let map2d = getMapInstance();
	clearShroud();

	if (obj && obj.lineString && obj.lineString.length) {
		// 路径线
		bjgjpolyline = new YunliMap.Polyline({
			coordinates: obj.lineString,
			zIndex: 99,
			style: {
				color: "rgb(39,170,55)",
				lineWidth: 10,
				strokeWidth: 1,
				strokeColor: "#FFF",
			},
			showArrow: true,
		});
		// 单击鼠标右键显示删除按钮
		bjgjpolyline.on("contextmenu", (e) => {
			addDelBtn(e);
		});

		bjgjpolyline.on("mouseleave", removeDelMarker);

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
				bjgjpolyline.off("mouseleave", removeDelMarker);
			});

			// 鼠标离开删除按钮时重新绑定事件
			delMarker.on("mouseleave", bindMouseleave);

			delMarker.on("click", function () {
				delMarker.off("click"); //移除marker下所有click事件
				delMarker.off("mouseleave", bindMouseleave);
				clearShroud();
			});
		}

		map2d.add(bjgjpolyline);
		if (!prev) {
			map2d.fit({
				feature: bjgjpolyline,
				maxZoom: 14,
			});
		}
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
			let length = YunliMap.GeometryUtil.getPathLength(obj.lineString);
			let extent = YunliMap.GeometryUtil.extentFromCoordinates(obj.lineString);
			// if (!prev) {
			// 	map2d.fit({
			// 			extent,
			// 			padding: [100, 100, 100, 100],
			// 	});
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
						color: "#F90",
						lineWidth: 5,
						strokeWidth: 2,
						strokeColor: "#FFF",
					},
					showArrow: true,
				}, //线段对象
				speed: length / 8, // 速度，米/秒
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
				// 结束回放时，清除已回放路径坐标
				_passedLine.setCoordinates([]);
				console.info("运行到终点了");
			});

			animation.onProgress(function (info) {
				// 设置已回放路径的坐标
				_passedLine.setCoordinates(info.passedCoordinates);
			});

			// 已回放路径，在轨迹回放的onProgress事件回调中设置坐标
			var _passedLine = new YunliMap.Polyline({
				style: {
					color: "rgb(39,170,55)",
					lineWidth: 5,
					strokeWidth: 1,
					strokeColor: "#FFF",
				},
			});
			map2d.add(_passedLine);
		}

		function getPath() {
			let _path = [obj.lineString[obj.lineString.length - 1]];
			if (prev) {
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
			console.info("_path=>", _path);
			console.info("_path.length=>", _path.length);
			console.info("_path[0][0] == _path[1][0]=>", _path[0][0] == _path[1][0]);
			console.info("_path[0][1] == _path[1][1]=>", _path[0][1] == _path[1][1]);
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

		const [path, isStay] = getPath();
		console.info("isStay=>", isStay);

		clearTimeout(animationTimer);
		if (!isStay) {
			// 销毁轨迹动画
			if (animation) {
				animation.stop();
				animation.destroy();
				animation = null;
			}
			initAnimation();

			if (animation) {
				animationTimer = setTimeout(() => {
					animation.start();
				}, 1000);
			}
		}

		requestNextLine();

		// 请求下一次路径
		function requestNextLine() {
			clearRealTimeTrackTimer();
			realTimeTrackTimer = setTimeout(() => {
				let vehicleNo = getDataByKey(
					"store_group_426ZZUE9suia9Yb3n4yYp9-wjkWRjdQcUxcUaPF2Mcn7y"
				).carNo;
				let startTime = moment()
					.subtract(5, "minutes")
					.format("YYYY-MM-DD HH:mm:ss");
				let endTime = moment().format("YYYY-MM-DD HH:mm:ss");
				$.get(
					`/easydata/api/center/JK1716365255599656960?vehicleNo=${vehicleNo}&startTime=${startTime}&endTime=${endTime}`,
					(res) => {
						if (res.code == 200) {
							let data = res.data;
							realTimeTrack(data, obj.lineString);
						}
					}
				);
			}, 10 * 1000);
		}
	}
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
	bjgjpolyline.on("mouseleave", removeDelMarker);
}

// 清除覆盖物
function clearShroud() {
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
	removeDelMarker();

	// 手动执行 animation.stop() 之后必须清除定时器
	clearRealTimeTrackTimer();
}
