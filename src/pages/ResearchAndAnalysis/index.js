import React, { useState, useEffect, useMemo } from "react";
import { Collapse, Slider, Row, Button } from "antd";
import styles from "./index.module.less";
import CustomTree from "./CustomTree";
import { UpOutlined, CloseOutlined } from "@ant-design/icons";
import DeductiveModel from "./DeductiveModel";

const ResearchAndAnalysis = (props) => {
	const { data } = props;
	// console.log("data=>", data);
	const [isShow, setIsShow] = useState(false);
	const [littleWindowVisible, setLittleWindowVisible] = useState(false);
	const [activeKey1, setActiveKey1] = useState([]);
	const [activeKey2, setActiveKey2] = useState([]);
	// 树的选中状态
	const [checkedObj, setCheckedObj] = useState({ autoModel: {}, evoModel: {} });

	const marks = {
		0: "0米",
		1000: "1000米",
		2000: "2000米",
		3000: "3000米",
		4000: "4000米",
		5000: "5000米",
	};

	useEffect(() => {
		data?.autoModel && setActiveKey1([data?.autoModel?.[0]?.modelCode]);
		data && setIsShow(true);
	}, [data]);

	const onSliderChange = (value) => {
		window.globalEventEmitter.emit("onDistanceChange", value);
	};

	const onCustomTreeChange = (e, type) => {
		if (!e) {
			return;
		}
		let params;
		if (type === "autoModel") {
			if (activeKey2.length) {
				setActiveKey2([]);
			}
			setActiveKey1(e);
			let tar = data.autoModel.find((item) => item.modelCode === e);
			params = {
				modeType: "autoModel",
				modelName: tar?.modelName,
				modelCode: tar?.modelCode,
				checkedKeys: checkedObj.autoModel[e] || tar?.legendTree.checkedKeys,
			};
			window.globalEventEmitter.emit("onModelLegendChange", params);
		} else if (type === "evoModel") {
			if (activeKey1.length) {
				setActiveKey1([]);
			}
			setActiveKey2(e);
			let tar = data.evoModel.find((item) => item.modelCode === e);
			params = {
				modeType: "evoModel",
				modelName: tar?.modelName,
				modelCode: tar?.modelCode,
				checkedKeys: checkedObj.evoModel[e] || tar?.legendTree.checkedKeys,
			};
			window.globalEventEmitter.emit("onModelLegendChange", params);
		}
	};

	const curDeductiveModel = useMemo(() => {
		return data.evoModel.find((item) => item.modelCode === activeKey2);
	}, [activeKey2]);

	useEffect(() => {
		if (curDeductiveModel) {
			setLittleWindowVisible(true);
		} else {
			setLittleWindowVisible(false);
		}
	}, [curDeductiveModel]);

	console.log("curDeductiveModel=>", curDeductiveModel);

	return (
		<div className={styles.raa}>
			<Row className={styles.title}>
				<span>研判模型</span>
				<UpOutlined
					className={`${styles.control} ${isShow ? "" : styles.down}`}
					onClick={() => {
						setIsShow(!isShow);
					}}
				/>
			</Row>
			<Row
				className={styles.content}
				style={{ display: isShow ? "block" : "none" }}
			>
				<Row>
					<span className={styles.subtitle}>综合研判</span>
				</Row>
				<Row>
					<CustomTree
						data={data.autoModel}
						type="autoModel"
						activeKey={activeKey1}
						setActiveKey={(e) => onCustomTreeChange(e, "autoModel")}
						checkedObj={checkedObj}
						setCheckedObj={setCheckedObj}
					/>
				</Row>
				<Row>
					<span className={styles.subtitle}>周边分析</span>
				</Row>
				<Row>
					<Slider
						max={5000}
						marks={marks}
						tooltip={{ open: false }}
						onAfterChange={onSliderChange}
						style={{ width: "98%" }}
					/>
				</Row>
				<Row>
					<span className={styles.subtitle}>分析推演</span>
				</Row>
				<Row>
					<CustomTree
						data={data.evoModel}
						type="evoModel"
						activeKey={activeKey2}
						setActiveKey={(e) => onCustomTreeChange(e, "evoModel")}
						checkedObj={checkedObj}
						setCheckedObj={setCheckedObj}
					/>
				</Row>
				<Row>
					<Button
						type="ghost"
						onClick={() => {
							setLittleWindowVisible(!littleWindowVisible);
						}}
					>
						弹窗
					</Button>
				</Row>
			</Row>

			<div
				className={styles.littleWindow}
				style={{ display: littleWindowVisible ? "block" : "none" }}
			>
				<div className={styles.littleTitle}>
					<span>推演模型</span>
					<CloseOutlined
						className={styles.close}
						onClick={() => setLittleWindowVisible(false)}
					/>
				</div>
				<div className={styles.littleContent}>
					{curDeductiveModel ? (
						<DeductiveModel data={curDeductiveModel} />
					) : null}
				</div>
			</div>
		</div>
	);
};

export default ResearchAndAnalysis;
