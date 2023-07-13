import { useState, useEffect, useCallback } from "react";
import { Radio, Select, DatePicker, Button } from "antd";
import "./render.less";
import locale from "./antdlocale";
const { RangePicker } = DatePicker;

const tabList = [
	{
		name: "温度/压力计",
		itemType: "OBJECT_HEATING_NETWORK_THERMOMETER",
	},
];

const deviceMap = {
	TD: "EQUIPMENT_BUILD_TOWER_CRANE",
	CAMERA: "EQUIPMENT_BUILDING_VIDEO",
};

const deviceNameMap = {
	FJ: "非居民报警器",
	SB: "地下井室管网哨兵",
	TYZ: "调压站",
	YT: "激光甲烷遥测系统",
};

export default function Render(comProps) {
	// console.log(comProps); // comProps 在大屏中使用时有值
	const EventEmitter = window.globalEventEmitter;
	const { el = {} } = comProps;
	let { dataset = {}, styles = {} } = el;
	const {
		isVariable,
		expression,
		variable,
		defaultValue = [
			// {
			//     "name": "东北制药集团股份有限公司",
			//     "value": 751
			// },
			// {
			//     "name": "沈阳化工股份有限公司",
			//     "value": 513
			// },
			// {
			//     "name": "沈阳联盛化工有限公司",
			//     "value": 295
			// },
			// {
			//     "name": "沈阳千代化工有限公司",
			//     "value": 233
			// },
			// {
			//     "name": "中国航空油料有限责任公司沈阳分公司",
			//     "value": 176
			// },
			// {
			//     "name": "沈阳北方石油公司",
			//     "value": 124
			// },
			// {
			//     "name": "沈阳百傲化学有限公司",
			//     "value": 119
			// },
			// {
			//     "name": "沈阳石蜡化工有限公司",
			//     "value": 119
			// }
		],
	} = dataset;

	const getData = useCallback(() => {
		// return domo
		if (isVariable) {
			//依赖变量信息
			if (!variable) {
				console.warn("请选择依赖变量!");
				return defaultValue;
			} else {
				let data = window.getDataByKey(variable);

				if (expression && expression.trim().length > 0) {
					try {
						let str = expression || "data";
						let fnStr = "return " + str;
						let fn = new Function("data", fnStr);
						data = fn(data);
						return data;
					} catch (e) {
						console.warn("变量表达式异常!");
						return defaultValue;
					}
				} else {
					console.warn("检查变量表达式!");
					return defaultValue;
				}
			}
		} else {
			return defaultValue;
		}
	});

	const [data, setData] = useState(getData());
	const [objectValue, setObjectValue] = useState("TD");
	const [type, setType] = useState(2);
	const [alarmType, setAlarmType] = useState(1);
	const [date, setDate] = useState([moment().subtract(3, "month"), moment()]);
	const [list, setList] = useState([]);

	useEffect(() => {
		let listenFn;

		if (isVariable && variable) {
			listenFn = (data) => {
				if (Array.isArray(data)) {
				} else {
					console.warn("请检查变量数据类型!");
				}
			};

			if (expression) {
				let val = getData();

				if (!_.isEqual(data, val)) {
					setData(val);
				}
			}

			EventEmitter.on(variable, listenFn);
		} else {
			let val = getData();
			setData(val);
		}

		return () => {
			if (isVariable && variable && listenFn) {
				EventEmitter.removeListener(variable, listenFn);
			}
		};
	}, [EventEmitter, expression, getData, isVariable, data, variable]);

	// function sort(data) {
	//     var arr = [...data];
	//     for (var i = 0; i < arr.length - 1; i++) {
	//       //每一轮比较要比多少次
	//       for (var j = 0; j < arr.length - 1 - i; j++) {
	//         //如果第一个比第二个大，就交换他们两个位置
	//         if (arr[j].value < arr[j + 1].value) {
	//           var temp = arr[j];
	//           arr[j] = arr[j + 1];
	//           arr[j + 1] = temp;
	//         }
	//       }
	//     }
	//     return arr
	// }

	function fnDanger(value) {
		let obj = {
			...value,
			dataType: type,
			deviceType: objectValue,
			itemType: deviceMap[objectValue],
			deviceName: deviceNameMap[objectValue],
			startTime: date[0].format("YYYY-MM-DD"),
			endTime: date[1].format("YYYY-MM-DD"),
		};
		EventEmitter.emit("onHistoryAlarmItem", obj);
	}
	const onObjectChange = (e) => {
		// console.log('radio checked', e.target.value);
		setObjectValue(e.target.value);
	};
	const handleTypeChange = (value) => {
		// console.log(`selected ${value}`);
		setType(value);
		setAlarmType("1");
	};
	const onAlarmTypeChange = (value) => {
		// console.log(`selected ${value}`);
		setAlarmType(value);
	};
	const onTimeChange = (date, dateString) => {
		// console.log(date, dateString);
		setDate(date);
	};

	const fetchData = (paramsDate) => {
		let _date = paramsDate || date;
		// let groupId = 2;
		// if (type == 2) {
		//     groupId = 2;
		// } else {
		//     groupId = 1;
		// }
		const params = {
			groupId: type,
			industry: "HEATING_NETWORK",
			startTime: _date[0].format("YYYY-MM-DD"),
			endTime: _date[1].format("YYYY-MM-DD"),
		};
		let itemType = "";
		if (type == 1 && alarmType == 2) {
			itemType = deviceMap[objectValue];
		}

		window.$.ajax({
			url: `http://${location.host}/easydata/api/center/JK1663818714325704704?itemType=EQUIPMENT_WATER_DRAINAGE_FLOWMETER&dataType=${alarmType}`,
			data: JSON.stringify(params),
			type: "POST",
			contentType: "application/json;charset=UTF-8",
			success: (res) => {
				if (res.code == 200) {
					setList(res.data || []);
				}
			},
		});
	};

	const onReset = () => {
		let _date = [moment().subtract(3, "month"), moment()];
		setDate(_date);
		fetchData(_date);
	};

	const onSearch = () => {
		fetchData();
	};

	useEffect(() => {
		fetchData();
	}, []);

	useEffect(() => {
		fetchData();
	}, [type]);

	return (
		<div className="history_alarm_build" style={{ height: styles.height }}>
			<div className="header">
				<Radio.Group
					buttonStyle="solid"
					onChange={onObjectChange}
					value={objectValue}
				>
					{tabList.map((item) => {
						return <Radio.Button value={item.value}>{item.name}</Radio.Button>;
					})}
				</Radio.Group>
				<Select
					defaultValue="2"
					style={{ width: 100, height: 30 }}
					onChange={handleTypeChange}
					dropdownClassName="gas_custom_select"
					getPopupContainer={(trigger) => trigger.parentNode}
					options={[
						{ value: "2", label: "监测设备" },
						{ value: "1", label: "区域" },
					]}
				/>
			</div>
			<div className="query">
				<div className="query-filter">
					<RangePicker
						locale={locale.DatePicker}
						allowClear={false}
						value={date}
						style={{ width: "400px" }}
						onChange={onTimeChange}
						getPopupContainer={(trigger) => trigger.parentNode}
						placeholder={["开始日期", "结束日期"]}
					/>
				</div>

				<div className="btn-box">
					<Button onClick={onSearch} type="primary">
						查询
					</Button>
					<Button onClick={onReset}>重置</Button>
				</div>
			</div>
			<div className="alarm-list">
				{list?.length ? (
					list.map((ele, i) => {
						return (
							<div
								className="list_danger"
								key={i}
								onClick={() => fnDanger(ele)}
							>
								<div className="left">
									<div className="text-wrapper_15_danger flex-col_danger">
										<span className="text_38_danger">{i + 1}</span>
									</div>
									<span className="text_39_danger" title={ele.name}>
										{ele.name}
									</span>
									<main className="container_danger">
										<section
											className="s3_danger"
											style={{
												width:
													(parseFloat(ele.num) / parseFloat(list[0].num)) *
														300 +
													"px",
											}}
										>
											<img
												src="/iocoss/datai/custom/1679020784781275136/images/编组 8@2x.png"
												className="img_danger"
											/>
										</section>
									</main>
								</div>

								<div className="number_danger">
									<span className="text_49_danger">{ele.num}</span>
								</div>
							</div>
						);
					})
				) : (
					<img
						src="/iocoss/datai/custom/1679020784781275136/images/pic／暂无数据@2x.png"
						alt=""
						style={{ display: "block", margin: "32px auto 0" }}
					/>
				)}
			</div>
		</div>
	);
}
