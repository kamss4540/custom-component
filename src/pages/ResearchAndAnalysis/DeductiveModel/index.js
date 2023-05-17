import React, { useMemo } from "react";

const DeductiveModel = (props) => {
	const { data } = props;

	// 地区
	const placeMapping = {
		city: "城市",
	};

	// 白天/夜晚
	const dayOrNightMapping = {
		day: "白天",
	};

	// 天气
	const weatherMapping = {
		overcast: "阴天",
	};

	// 风向
	const azMapping = {
		S: "南",
		N: "北",
		E: "东",
		W: "西",
	};

	// 气体持续扩散模型 hcDiffuseCmbi
	const fields1 = [
		{
			name: "material",
			lable: "气体名称material",
		},
		{
			name: "v",
			lable: "容器体积V",
			unit: "m³",
		},
		{
			name: "ll",
			lable: "容器液位([%,%])",
			render: (value) => (value ? `[${value[0]}, ${value[1]}]` : null),
		},
		{
			name: "z",
			lable: "垂直风向高度Z",
			unit: "m",
		},
		{
			name: "t_lag",
			lable: "泄露时间T_LAG",
			unit: "s",
		},
		{
			name: "t",
			lable: "预测泄露时间T",
			unit: "s",
		},
		{
			name: "h",
			lable: "泄露源有效高度H",
			unit: "m",
		},
		{
			name: "p",
			lable: "容器压强P",
			unit: "Pa",
		},
		{
			name: "place", // "city"
			lable: "地区",
			render: (value) => placeMapping[value],
		},
		{
			name: "dayOrNight", // "day"
			lable: "白天/夜晚",
			render: (value) => dayOrNightMapping[value],
		},
		{
			name: "weather", // "overcast"
			lable: "天气",
			render: (value) => weatherMapping[value],
		},
		{
			name: "u",
			lable: "风速U",
			unit: "m/s",
		},
		{
			name: "az", // "S"
			lable: "风向",
			render: (value) => azMapping[value],
		},
	];

	// 气体瞬时扩散模型 hcDiffuseInstant
	const fields2 = [
		{
			name: "material",
			lable: "气体名称material",
		},
		{
			name: "v",
			lable: "容器体积V",
			unit: "m³",
		},
		{
			name: "ll",
			lable: "容器液位([%,%])",
			render: (value) => (value ? `[${value?.[0]}, ${value?.[1]}]` : null),
		},
		{
			name: "z",
			lable: "垂直风向高度Z",
			unit: "m",
		},
		{
			name: "t",
			lable: "泄露时间T",
			unit: "s",
		},
		{
			name: "h",
			lable: "泄露源有效高度H",
			unit: "m",
		},
		{
			name: "p",
			lable: "容器压强P",
			unit: "Pa",
		},
		{
			name: "dayOrNight", // "day"
			lable: "白天/夜晚",
			render: (value) => dayOrNightMapping[value],
		},
		{
			name: "weather", // "overcast"
			lable: "天气",
			render: (value) => weatherMapping[value],
		},
		{
			name: "u",
			lable: "风速U",
			unit: "m/s",
		},
		{
			name: "az", // "S"
			lable: "风向",
			render: (value) => azMapping[value],
		},
	];

	// 重气持续扩散模型 hcHeavyDiffuseContinue
	const fields3 = [
		{
			name: "material",
			lable: "气体名称material",
		},
		{
			name: "v",
			lable: "容器体积V",
			unit: "m³",
		},
		{
			name: "heat",
			lable: "容器破裂前器内介质温度t",
			unit: "℃",
		},
		{
			name: "t",
			lable: "泄露时间T",
			unit: "s",
		},
		{
			name: "p",
			lable: "容器压强P",
			unit: "Pa",
		},
		{
			name: "u",
			lable: "风速U",
			unit: "m/s",
		},
		{
			name: "az", // "S"
			lable: "风向",
			render: (value) => azMapping[value],
		},
	];

	// 重气瞬时扩散模型 hcHeavyDiffuseInstant
	const fields4 = [
		{
			name: "material",
			lable: "气体名称material",
		},
		{
			name: "v",
			lable: "容器体积V",
			unit: "m³",
		},
		{
			name: "heat",
			lable: "容器破裂前器内介质温度t",
			unit: "℃",
		},
		{
			name: "t",
			lable: "泄露时间T",
			unit: "s",
		},
		{
			name: "p",
			lable: "容器压强P",
			unit: "Pa",
		},
		{
			name: "u",
			lable: "风速U",
			unit: "m/s",
		},
		{
			name: "az", // "S"
			lable: "风向",
			render: (value) => azMapping[value],
		},
	];

	// 气体蒸汽云爆炸模型 hcExplode
	const fields5 = [
		{
			name: "material",
			lable: "容器气体名称",
		},
		{
			name: "v",
			lable: "容器体积V",
			unit: "m³",
		},
		{
			name: "ll",
			lable: "容器液位LL([%,%])",
			render: (value) => `[${value[0]}, ${value[1]}]`,
		},
		{
			name: "beta",
			lable: "地面爆炸系数beta",
			unit: "beta",
		},
		{
			name: "rt",
			lable: "TNT当量系数Rt",
		},
		{
			name: "qtnt",
			lable: "QTNT爆热",
			unit: "kJ/kg",
		},
		{
			name: "p0",
			lable: "环境压力P0",
			unit: "Pa",
		},
		{
			name: "p",
			lable: "容器压强P",
			unit: "Pa",
		},
		{
			name: "az", // "S"
			lable: "风向",
			render: (value) => azMapping[value],
		},
	];

	// 沸腾液体扩展蒸气爆炸模型 hcBleve
	const fields6 = [
		{
			name: "material",
			lable: "气体名称material",
		},
		{
			name: "v",
			lable: "容器体积V",
			unit: "m³",
		},
		{
			name: "ll",
			lable: "容器液位LL([%,%])",
			render: (value) => `[${value[0]}, ${value[1]}]`,
		},
		{
			name: "cntr_t",
			lable: "容器破裂前器内介质温度",
			unit: "℃",
		},
		{
			name: "p",
			lable: "容器压强P",
			unit: "Pa",
		},
		{
			name: "shapeType",
			lable: "储罐形状类型",
		},
		{
			name: "storeType",
			lable: "储罐存储类型",
		},
		{
			name: "az", // "S"
			lable: "风向",
			render: (value) => azMapping[value],
		},
	];

	// 液池火模型 hcMultiPool
	const fields7 = [
		{
			name: "material",
			lable: "液池物质",
		},
		{
			name: "area",
			lable: "液池面积",
			render: (value) => `[${value}]`,
			unit: "m²",
		},
		{
			name: "windSpeed",
			lable: "风速",
			unit: "m/s",
		},
		{
			name: "windSpeed",
			lable: "环境温度",
			unit: "℃",
		},
		{
			name: "az", // "S"
			lable: "风向",
			render: (value) => azMapping[value],
		},
	];

	// 喷射火模型 hcSprayFire
	const fields8 = [
		{
			name: "material",
			lable: "气体名称material",
		},
		{
			name: "v",
			lable: "容器体积V",
			unit: "m³",
		},
		{
			name: "ll",
			lable: "容器液位([%,%])",
			render: (value) => (value ? `[${value[0]}, ${value[1]}]` : null),
		},
		{
			name: "cntr_t",
			lable: "容器破裂前器内介质温度",
			unit: "℃",
		},
		{
			name: "p",
			lable: "容器压强P",
			unit: "Pa",
		},
		{
			name: "h",
			lable: "容器长度H",
			unit: "m",
		},

		{
			name: "t",
			lable: "预测泄露时间T",
			unit: "s",
		},
		{
			name: "h",
			lable: "泄露源有效高度H",
			unit: "m",
		},
		{
			name: "shapeType",
			lable: "储罐形状类型",
		},
		{
			name: "spray_theta",
			lable: "喷射角度",
		},
		{
			name: "pair",
			lable: "环境大气压强",
			unit: "Pa",
		},
		{
			name: "tair",
			lable: "环境温度",
			unit: "℃",
		},
		{
			name: "rh",
			lable: "环境湿度",
		},
		{
			name: "az", // "S"
			lable: "风向",
			render: (value) => azMapping[value],
		},
	];

	const fieldMapping = {
		hcDiffuseCmbi: fields1,
		hcDiffuseInstant: fields2,
		hcHeavyDiffuseContinue: fields3,
		hcHeavyDiffuseInstant: fields4,
		hcExplode: fields5,
		hcBleve: fields6,
		hcMultiPool: fields7,
		hcSprayFire: fields8,
	};

	const fields = useMemo(() => {
		return fieldMapping[data.modelCode];
	}, [data]);

	return (
		<div>
			{fields.map((item) => (
				<div>
					<span>{item.lable}：</span>
					<span>
						{item.render
							? item.render(data.modelParam[item.name])
							: data.modelParam[item.name]}
					</span>
					<span>{item.unit}</span>
				</div>
			))}
		</div>
	);
};

export default DeductiveModel;
