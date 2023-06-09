import React, { useMemo, useRef, useState, useEffect } from "react";
import styles from "./index.module.less";
import { Button, Form, Input, Select, Space, Switch } from "antd";

const { Option } = Select;

const RoutePlanning = (props) => {
	const myRef = useRef();
	// 起点
	const origin = useRef();
	// 终点
	const destination = useRef();
	// 途径点
	const approach = useRef([]);
	// 路线
	const routePaths = useRef([]);
	// 路径规划策略
	const [strategy, setStrategy] = useState("car_mintime");
	const [msg1, setMsg1] = useState();
	const [msg2, setMsg2] = useState();
	const [steps, setSteps] = useState([]);

	const map2d = useMemo(() => {
		return window.comList?.get(props.data).instance?._map;
	}, [props.data]);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					// 可见
				} else {
					// 不可见
					clearShroud();
				}
			},
			{
				root: null,
				rootMargin: "0px",
				threshold: 1.0,
			}
		);

		observer.observe(myRef.current);

		return () => {
			observer.unobserve(myRef.current);
		};
	}, []);

	// 清除所有覆盖物和事件
	const clearShroud = () => {
		map2d.remove(origin.current);
		origin.current = null;
		map2d.remove(destination.current);
		destination.current = null;
		routePaths.current.forEach((routePath) => map2d.remove(routePath));
		approach.current.forEach((routePath) => map2d.remove(routePath));
		approach.current = [];
		map2d.off("click", drawOrigin);
		map2d.off("click", drawDestination);
		map2d.off("click", drawApproach);
	};

	const drawOrigin = (e) => {
		// 清除已有的开始点
		if (origin.current) {
			map2d.remove(origin.current);
			origin.current = null;
		}

		// 开始标记
		let startMarker = new YunliMap.Marker({
			icon: "/iocoss/datai/custom/1663450520618991616/images/origin.png",
			position: e.position,
			offset: [-25, -44],
			scale: 1,
		});
		startMarker.setZIndex(999);
		startMarker.on("contextmenu", (e) => {
			map2d.remove(startMarker);
			origin.current = null;
		});
		map2d.add(startMarker);
		origin.current = startMarker;
		setMsg1("");
		map2d.off("click", drawOrigin);
	};

	const drawDestination = (e) => {
		// 清除已有的结束点
		if (destination.current) {
			map2d.remove(destination.current);
			destination.current = null;
		}

		// 结束标记
		let endMarker = new YunliMap.Marker({
			icon: "/iocoss/datai/custom/1663450520618991616/images/destination.png",
			position: e.position,
			offset: [-25, -44],
			scale: 1,
		});
		endMarker.setZIndex(999);
		endMarker.on("contextmenu", (e) => {
			map2d.remove(endMarker);
			destination.current = null;
		});
		map2d.add(endMarker);
		destination.current = endMarker;
		setMsg1("");
		map2d.off("click", drawDestination);
	};

	const drawApproach = (e) => {
		// 途径点大于5禁止设置
		if (approach.current.length >= 5) {
			setMsg2("已有5个途径点");
			return;
		}
		// 途径点标记
		let approachMarker = new YunliMap.Marker({
			icon: "/iocoss/datai/custom/1663450520618991616/images/approach.png",
			position: e.position,
			offset: [-24, -24],
			scale: 1,
		});
		approachMarker.setZIndex(999);
		approachMarker.on("contextmenu", (e) => {
			map2d.remove(approachMarker);
			let index = approach.current.findIndex(
				(item) =>
					JSON.stringify(item.getPosition()) == JSON.stringify(e.position)
			);
			approach.current.splice(index, 1);
			setMsg2("");
		});
		map2d.add(approachMarker);
		approach.current.push(approachMarker);
	};

	const onOriginClick = () => {
		map2d.off("click", drawApproach);
		map2d.on("click", drawOrigin);
	};

	const onDestinationClick = () => {
		map2d.off("click", drawApproach);
		map2d.on("click", drawDestination);
	};

	// 设置途径点
	const onApproachClick = () => {
		map2d.on("click", drawApproach);
	};

	// WGS84转高德
	const gpsConvertToGcj02 = (coord) => {
		return YunliMap.convertLocation("gps", "gcj02", coord);
	};

	// 高德转WGS84
	const gcj02ConvertToGps = (coord) => {
		return YunliMap.convertLocation("gcj02", "gps", coord);
	};

	const planning = () => {
		if (!origin.current) {
			setMsg1("未设置起点");
			return;
		}
		if (!destination.current) {
			setMsg1("未设置终点");
			return;
		}
		let planningType = strategy;
		let platName = "amap";

		let gpsOrigin = origin.current.getPosition();
		let gpsDestination = destination.current.getPosition();
		let gpsApproach = approach.current.map((item) => item.getPosition());
		// WGS84转高德
		let gcj02Origin = gpsConvertToGcj02(gpsOrigin);
		let gcj02Destination = gpsConvertToGcj02(gpsDestination);
		let gcj02Approach = gpsApproach.map((item) => gpsConvertToGcj02(item));

		const strategyMapping = { car_mintime: 0, car_mindis: 2 };
		let stra = strategyMapping[strategy];

		if (stra !== undefined) {
			gaodePathPlanning({
				origin: gcj02Origin,
				destination: gcj02Destination,
				waypoints: gcj02Approach,
				strategy: stra,
			});
		} else {
			setSteps([]);
		}

		// 多路径、avoidroad只在高德模式下有效
		YunliMap.pathPlanning(
			{
				origin: origin.current.getPosition(),
				destination: destination.current.getPosition(),
				type: planningType,
				// avoidroad: "西单北大街", // 规避道路
				online: {
					city: planningType === "transit" ? "沈阳市" : "", // 高德公交规划时时必传
					platName,
				}, // 值为false时，访问本地路径规划服务。
				wayPoints: approach.current.map((item) => item.getPosition()),
			},
			function (info) {
				// 高德公交规划只显示第一条路线
				if (planningType === "transit") info = info[0];

				routePaths.current.forEach((routePath) => map2d.remove(routePath));
				routePaths.current = [];

				info instanceof Array
					? info.forEach((item) => addPath(item))
					: addPath(info);

				// map2d.fitView({
				// 	padding: [50, 50, 50, 50],
				// });
			}
		);
	};

	const gaodePathPlanning = ({ origin, destination, waypoints, strategy }) => {
		console.info("origin=>", origin);
		console.info("destination=>", destination);
		console.info("waypoints=>", waypoints);
		$.get(
			`https://restapi.amap.com/v3/direction/driving?origin=${origin.toString()}&destination=${destination.toString()}&waypoints=${
				waypoints.length
					? waypoints.map((item) => item.toString()).join(";")
					: ""
			}&strategy=${strategy}&extensions=all&output=JSON&key=1beba9f9637105dcea1f63e59be432f3`,
			(res) => {
				console.info("gaodePathPlanning=>", res);
				let _steps = res.route.paths[0].steps.map((item) => item.instruction);
				setSteps(_steps);
			}
		);
	};

	//添加路径
	const addPath = (pathData) => {
		var routePath = new YunliMap.Polyline({
			coordinates: pathData.points,
			style: {
				color: "rgb(39,170,55)",
				lineWidth: 10,
				strokeWidth: 1,
				strokeColor: "#FFF",
			},
			showArrow: true,
		});
		map2d.add(routePath);
		routePaths.current.push(routePath);
	};

	return (
		<div ref={(e) => (myRef.current = e)} className={styles.RP_layout}>
			<div className={styles.title}>参数设置</div>
			<div className={styles.config}>
				<Form>
					<Form.Item label="路径设定" required>
						<Space>
							<Button className={styles.btn1} onClick={onOriginClick}>
								起点
							</Button>
							<Button className={styles.btn1} onClick={onDestinationClick}>
								终点
							</Button>
							{msg1 && <div className={styles.hint}>{msg1}</div>}
						</Space>
					</Form.Item>
					<Form.Item label="设置途径点（最多5个）">
						<Space>
							<Button className={styles.btn1} onClick={onApproachClick}>
								设置
							</Button>
							{msg2 && <div className={styles.hint}>{msg2}</div>}
						</Space>
					</Form.Item>
					<Form.Item label="路径规划策略">
						<Select
							size="small"
							style={{ width: 130, color: "#fff" }}
							value={strategy}
							onChange={setStrategy}
							getPopupContainer={(e) => e.parentNode}
						>
							<Option value="car_mintime">驾车最短时间</Option>
							<Option value="car_mindis">驾车最短距离</Option>
							<Option value="walking">步行</Option>
							<Option value="transit">公交</Option>
							{/* <Option value="car_multiple">多条路径</Option> */}
						</Select>
					</Form.Item>
					<Form.Item label="是否显示路况">
						<Switch />
					</Form.Item>
				</Form>
				<div>
					<Button className={styles.btn2} onClick={planning}>
						路径规划
					</Button>
				</div>
			</div>
			<div className={styles.planningResult}>
				<div>规划结果</div>
				<Input.TextArea value={steps.join("\n")} rows={3} />
			</div>
		</div>
	);
};

export default RoutePlanning;
