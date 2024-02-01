import React, { useState, useEffect, useMemo } from "react";
import { Collapse, Slider, Row, Button } from "antd";
import styles from "./index.module.less";
import CustomTree from "./CustomTree";
import { UpOutlined, CloseOutlined } from "@ant-design/icons";
import DeductiveModel from "./DeductiveModel";
import mockData from "./mockData2";

const getDataByKey = window.getDataByKey;
const setStoreData = window.setStoreData;

const ResearchAndAnalysis = (props) => {
	const { data } = props;
	const { modelKey, newModelKey, selectedValueKey, sliderValueKey } = data;

	// console.log("data=>", data);
	const [isShow, setIsShow] = useState(false);
	const [littleWindowVisible, setLittleWindowVisible] = useState(false);
	const [activeKey2, setActiveKey2] = useState([]);

	const [newModel, setNemModel] = useState({});

	const marks = {
		0: "0米",
		1000: "1000米",
		2000: "2000米",
		3000: "3000米",
		4000: "4000米",
		5000: "5000米",
	};

	useEffect(() => {
		if (window.globalEventEmitter) {
			if (newModelKey) {
				let _newModel = getDataByKey(newModelKey);
				_newModel && setNemModel(_newModel);
				window.globalEventEmitter.on(newModelKey, setNemModel);
			}
		} else {
			setNemModel(mockData);
		}

		data && setIsShow(true);

		return () => {
			window.globalEventEmitter.off(newModelKey, setNemModel);
		};
	}, [data]);

	const onSliderChange = (value) => {
		setStoreData(sliderValueKey, value);
	};

	const curDeductiveModel = useMemo(() => {
		return data.evoModel?.find((item) => item.modelCode === activeKey2);
	}, [activeKey2]);

	useEffect(() => {
		if (curDeductiveModel) {
			setLittleWindowVisible(true);
		} else {
			setLittleWindowVisible(false);
		}
	}, [curDeductiveModel]);

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
					{newModel ? (
						<CustomTree
							data={newModel}
							selectedValueKey={selectedValueKey}
						/>
					) : null}
				</Row>
				<Row>
					<span className={styles.subtitle}>周边分析</span>
				</Row>
				<Row style={{ padding: "0px 25px 0 5px" }}>
					<Slider
						max={5000}
						marks={marks}
						tooltip={{ open: false }}
						onAfterChange={onSliderChange}
						style={{ width: "100%" }}
					/>
				</Row>
			</Row>

			<div
			onMouseOut={()=> null}
			onMouseOver={()=> null}
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
