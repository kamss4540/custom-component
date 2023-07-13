import React from "react";
import Group from "./Group";

const IndustryCoverage = (props) => {
	const { data } = props;

	const industryField = [
		{
			label: "供水",
			iconPath:
				"/iocoss/datai/screen/1609737255799529472/images/icon／救援力量@2x-ti93yS8Txu5UQbT2UHV1Y9.png",
			remark: "WATER_SUPPLY",
			object: [
				{
					itemType: "OBJECT_WATER_SUPPLY_NETWORK",
					name: "供水管网",
					iconPath:
						"/iocoss/datai/screen/1609737255799529472/images/Group 10 Copy 29-qP927AkjgdXM9pHr3Wh3b8.png",
				},
				{
					itemType: "OBJECT_MONITORING_POINT_MUNICIPAL",
					name: "市政消火栓监测点位",
					iconPath:
						"/iocoss/datai/screen/1609737255799529472/images/Group 10 Copy 24-2Gz8fsmkRVNjCL59LDgPuu.png",
				},
				{
					itemType: "OBJECT_WATER_SUPPLY_FIRE_WATER_MONITOR",
					name: "消防水鹤监测点位",
					iconPath:
						"/iocoss/datai/screen/1609737255799529472/images/Group 10 Copy 27-e3x1VskvJPYDV2sQTBrWzz.png",
				},
			],
			equipment: [
				{
					itemType: "EQUIPMENT_WATER_LEAKAGE_ACOUSTIC_WAVE",
					name: "漏水声波",
					iconPath:
						"/iocoss/datai/screen/1609737255799529472/images/Group 10 Copy 62.png",
				},
				{
					itemType: "EQUIPMENT_WATER_SUPPLY_PRESSURE_GAUGE",
					name: "压力计",
					iconPath:
						"/iocoss/datai/screen/1609737255799529472/images/Group 10 Copy 63.png",
				},
				{
					itemType: "EQUIPMENT_WATER_SUPPLY_FLOWMETER",
					name: "流量计",
					iconPath:
						"/iocoss/datai/screen/1609737255799529472/images/Group 10 Copy 69.png",
				},
			],
		},
		{
			label: "排水",
			iconPath:
				"/iocoss/datai/screen/1609737255799529472/images/icon／救援力量@2x-hD2bNBt23LPCA1ptgxhnPs.png",
			remark: "WATER_DRAINAGE",
			object: [
				{
					itemType: "OBJECT_WATER_DRAINAGE_RAINWATER_PUMP",
					name: "雨水泵站",
					iconPath:
						"/iocoss/datai/screen/1609737255799529472/images/Group 10 Copy 30-28LUoKeexZkEQxF4FZtXbE.png",
				},
				{
					itemType: "OBJECT_WATER_DRAINAGE_RESERVOIR",
					name: "水库",
					iconPath:
						"/iocoss/datai/screen/1609737255799529472/images/Group 10 Copy 36-vmr4zv1VbqdkuqoBPvM3FE.png",
				},
			],
			equipment: [
				{
					itemType: "EQUIPMENT_WATER_DRAINAGE_RESERVOIR_VIDEO",
					name: "水库视频",
					iconPath:
						"/iocoss/datai/screen/1609737255799529472/images/Group 10 Copy 69.png",
				},

				{
					itemType: "EQUIPMENT_NATURAL_DISASTER_MONITOR_STATION",
					name: "雨量站",
					iconPath:
						"/iocoss/datai/screen/1609737255799529472/images/Group 10 Copy 68.png",
				},
				{
					itemType: "EQUIPMENT_WATER_DRAINAGE_VIDEO_SURVEILLANCE",
					name: "积水点视频",
					iconPath:
						"/iocoss/datai/screen/1609737255799529472/images/Group 10 Copy 67.png",
				},
			],
		},
		{
			label: "热力",
			iconPath:
				"/iocoss/datai/screen/1609737255799529472/images/icon／救援力量@2x-cM7dH7nDRvYQvt5JscyNtq.png",
			remark: "HEATING_NETWORK",
			object: [
				{
					itemType: "OBJECT_HEATING_NETWORK_ENTERPRISE",
					name: "供热企业",
					iconPath:
						"/iocoss/datai/screen/1609737255799529472/images/Group 10 Copy 40-kzbDycuSWzrecc5j9vvXgU.png",
				},
				{
					itemType: "OBJECT_HEATING_NETWORK_EXCHANGE_STATION",
					name: "换热站",
					iconPath:
						"/iocoss/datai/screen/1609737255799529472/images/Group 10 Copy 34-naC3NR52XfHKPckBeN7wJz.png",
				},
				{
					itemType: "OBJECT_HEATING_NETWORK_HEAT_FACTORY",
					name: "热源厂",
					iconPath:
						"/iocoss/datai/screen/1609737255799529472/images/Group 10 Copy 42-dFrDhmTdhDY7rXcXG4d4Jc.png",
				},
			],
			equipment: [
				{
					itemType: "OBJECT_HEATING_NETWORK_THERMOMETER",
					name: "温度压力表",
					iconPath:
						"/iocoss/datai/screen/1609737255799529472/images/Group 10 Copy 66.png",
				},
				{
					itemType: "EQUIPMENT_HEATING_NETWORK_BOILER_锅炉",
					name: "锅炉",
					iconPath:
						"/iocoss/datai/screen/1609737255799529472/images/Group 10 Copy 73.png",
				},
			],
		},
		{
			label: "综合管廊",
			iconPath:
				"/iocoss/datai/screen/1609737255799529472/images/icon／救援力量@2x-2B92wVqJNAMUyeFtpkjfxb.png",
			remark: "UTILITY_TUNNEL",
			object: [
				{
					itemType: "UTILITY_TUNNEL",
					name: "综合管廊",
					iconPath:
						"/iocoss/datai/screen/1609737255799529472/images/Group 10 Copy 31-4Ji9CHZKEfAEKmt86TmfZb.png",
				},
			],
			equipment: [
				{
					itemType: "WARM_HUMID_UTILITY_TUNNEL",
					name: "温湿探测器",
					iconPath:
						"/iocoss/datai/screen/1609737255799529472/images/Group 10 Copy 72.png",
				},
				{
					itemType: "METHANE_UTILITY_TUNNEL",
					name: "甲烷探测器",
					iconPath:
						"/iocoss/datai/screen/1609737255799529472/images/Group 10 Copy 71.png",
				},
				{
					itemType: "OXYGEN_DETECTOR_UTILITY_TUNNEL",
					name: "氧气探测器",
					iconPath:
						"/iocoss/datai/screen/1609737255799529472/images/Group 10 Copy 70.png",
				},
				{
					itemType: "HYDROGEN_SULFIDE_UTILITY_TUNNEL",
					name: "硫化氢设备",
					iconPath:
						"/iocoss/datai/screen/1609737255799529472/images/Group 10 Copy 77.png",
				},
			],
		},
		{
			label: "桥梁",
			iconPath:
				"/iocoss/datai/screen/1609737255799529472/images/icon／桥梁@2x.png",
			remark: "BRIDGE",
			object: [
				{
					itemType: "OBJECT_BRIDGE_BASE",
					name: "桥梁",
					iconPath:
						"/iocoss/datai/screen/1609737255799529472/images/Group 10 Copy 45-gyr9WhZ1GdmF68d2kPY5QX.png",
				},
			],
			equipment: [
				{
					itemType: "EQUIPMENT_BRIDGE_TEMPERATURE",
					name: "温湿度仪",
					iconPath:
						"/iocoss/datai/screen/1609737255799529472/images/Group 10 Copy 76.png",
				},
				{
					itemType: "EQUIPMENT_BRIDGE_STRAIN",
					name: "应变计",
					iconPath:
						"/iocoss/datai/screen/1609737255799529472/images/Group 10 Copy 75.png",
				},
				{
					itemType: "EQUIPMENT_BRIDGE_ANEMOCLINOGRAPH",
					name: "风速风向仪",
					iconPath:
						"/iocoss/datai/screen/1609737255799529472/images/Group 10 Copy 74.png",
				},
				{
					itemType: "EQUIPMENT_BRIDGE_LEVEL",
					name: "水准仪",
					iconPath:
						"/iocoss/datai/screen/1609737255799529472/images/Group 10 Copy 81.png",
				},
			],
		},
		{
			label: "隧道",
			iconPath:
				"/iocoss/datai/screen/1609737255799529472/images/icon／救援力量@2x-mB46ecLpKifyQ3EjtjaUkE.png",
			remark: "TUNNEL",
			object: [
				{
					itemType: "OBJECT_SUBWAY_SAFETY_TUNNEL",
					name: "隧道",
					iconPath:
						"/iocoss/datai/screen/1609737255799529472/images/Group 10 Copy 35-1zd6v3zrv8tCPGKdPnr3Wn.png",
				},
			],
			equipment: [
				{
					itemType: "EQUIPMENT_TUNNEL_VIDEO",
					name: "监测摄像头",
					iconPath:
						"/iocoss/datai/screen/1609737255799529472/images/Group 10 Copy 80.png",
				},
				{
					itemType: "EQUIPMENT_TUNNEL_MONITORING_电力监控",
					name: "电力监控设备",
					iconPath:
						"/iocoss/datai/screen/1609737255799529472/images/Group 10 Copy 81.png",
				},
				{
					itemType: "EQUIPMENT_TUNNEL_MONITORING_温度计",
					name: "温度计",
					iconPath:
						"/iocoss/datai/screen/1609737255799529472/images/Group 10 Copy 79.png",
				},
				{
					itemType: "EQUIPMENT_TUNNEL_MONITORING_光照度仪",
					name: "光照度仪",
					iconPath:
						"/iocoss/datai/screen/1609737255799529472/images/Group 10 Copy 78.png",
				},
			],
		},
		{
			label: "特特设备",
			iconPath:
				"/iocoss/datai/screen/1609737255799529472/images/icon／救援力量@2x-6NZw3tn7Cbma59958aH7AL.png",
			remark: "EQU",
			object: [
				{
					itemType: "OBJECT_MONITORING_ELEVATOR",
					name: "电梯",
					iconPath:
						"/iocoss/datai/screen/1609737255799529472/images/Group 10 Copy 41-gjyvTZsahqqfEGkYqmzufV.png",
				},
			],
			equipment: [
				{
					itemType: "EQUIPMENT_EQU_MONITORING_ELEVATOR",
					name: "视频监控",
					iconPath:
						"/iocoss/datai/screen/1609737255799529472/images/Group 10 Copy 84.png",
				},
			],
		},
		{
			label: "地铁",
			iconPath:
				"/iocoss/datai/screen/1609737255799529472/images/icon／救援力量@2x-fegnguM1g3d992edwFU4Ei.png",
			remark: "SUBWAY_SAFETY",
			object: [
				{
					itemType: "OBJECT_SUBWAY_SAFETY_TRANSFER_STATION",
					name: "地铁站",
					iconPath:
						"/iocoss/datai/screen/1609737255799529472/images/Group 10 Copy 43-sqjLeuZdxzD5jiWt92nDuy.png",
				},
				{
					itemType: "OBJECT_SUBWAY_SAFETY_FLOOD_CONTROL_POINT",
					name: "防汛点位",
					iconPath:
						"/iocoss/datai/screen/1609737255799529472/images/Group 10 Copy 46-aR7Z4BVUU94Y3kETnnQZg9.png",
				},
				{
					itemType: "OBJECT_SUBWAY_SAFETY_SUBWAY_PASSAGE",
					name: "通道",
					iconPath:
						"/iocoss/datai/screen/1609737255799529472/images/Group 10 Copy 47-2kTjz8SJoa3V6MNGmG9vv3.png",
				},
			],
			equipment: [
				{
					itemType: "EQUIPMENT_SUBWAY_SAFETY_VIDEO",
					name: "监测摄像头",
					iconPath:
						"/iocoss/datai/screen/1609737255799529472/images/Group 10 Copy 54.png",
				},
				{
					itemType: "EQUIPMENT_SUBWAY_SAFETY_ELECTRONIC_WATER_GAUGE",
					name: "电子水尺",
					iconPath:
						"/iocoss/datai/screen/1609737255799529472/images/Group 10 Copy 83.png",
				},
				{
					itemType: "EQUIPMENT_SUBWAY_SAFETY_PEOPLE_MONITORING",
					name: "客流预警监控设备",
					iconPath:
						"/iocoss/datai/screen/1609737255799529472/images/Group 10 Copy 54.png",
				},
			],
		},
		{
			label: "旅游",
			iconPath:
				"/iocoss/datai/screen/1609737255799529472/images/icon／救援力量@2x-sWEqGuYVMVu27QgAejiKXd.png",
			remark: "TRAVEL",
			object: [
				{
					itemType: "KEY_TOURIST_ATTRACTIONS",
					name: "重点旅游景区",
					iconPath:
						"/iocoss/datai/screen/1609737255799529472/images/Group 10 Copy 49-gjnFPznpwfuUsBHPssFaUV.png",
				},
			],
			equipment: [
				{
					itemType: "EQUIPMENT_TRAVEL_SMOKE_DETECTOR",
					name: "感烟监测设备",
					iconPath:
						"/iocoss/datai/screen/1609737255799529472/images/Group 10 Copy 89.png",
				},
				{
					itemType: "KEY_AREAS_VIDES_MONITOR_EQUIPMENT",
					name: "重点区域视频监控设备",
					iconPath:
						"/iocoss/datai/screen/1609737255799529472/images/Group 10 Copy 88.png",
				},
			],
		},
		{
			label: "人员密集",
			iconPath:
				"/iocoss/datai/screen/1609737255799529472/images/icon／救援力量@2x-eR8fAowgH1VGgCtU1VY6YN.png",
			remark: "ASSEMBLY_OCCUPANCIES",
			object: [
				{
					itemType: "LARGE_COMMERICAL_COMPLEX",
					name: "大型商业综合体",
					iconPath:
						"/iocoss/datai/screen/1609737255799529472/images/Group 10 Copy 50-353q53MC6DHRWkUAx4yXjr.png",
				},
				{
					itemType: "OBJECT_ASSEMBLY_OCCUPANCIES_CULTURE",
					name: "文化馆",
					iconPath:
						"/iocoss/datai/screen/1609737255799529472/images/Group 10 Copy 53-6W8dKvqyRzucfNy7Df1fUV.png",
				},
			],
			equipment: [
				{
					itemType: "EQUIPMENT_SUBWAY_SAFETY_VIDEO",
					name: "闸机",
					iconPath:
						"/iocoss/datai/screen/1609737255799529472/images/Group 10 Copy 5 (1).png",
				},
				{
					itemType: "KEY_AREAS_VIDES_MONITOR_EQUIPMENT",
					name: "客流相机",
					iconPath:
						"/iocoss/datai/screen/1609737255799529472/images/Group 10 Copy 9.png",
				},
				{
					itemType: "EQUIPMENT_FIRE_CONTROL_SMOKE_DETECTOR",
					name: "烟感设备",
					iconPath:
						"/iocoss/datai/screen/1609737255799529472/images/Group 10 Copy 9.png",
				},
				{
					itemType: "KEY_AO_AREAS_VIDES_MONITOR_EQUIPMENT",
					name: "视频设备",
					iconPath:
						"/iocoss/datai/screen/1609737255799529472/images/Group 10 Copy 5 (1).png",
				},
			],
		},
		{
			label: "自然灾害",
			iconPath:
				"/iocoss/datai/screen/1609737255799529472/images/icon／救援力量@2x-iDEi9bHQmrqiRCuSeU2fdP.png",
			remark: "NATURAL_DISASTER",
			object: [
				{
					itemType: "OBJECT_NATURAL_DISASTER_SUBSIDE",
					name: "地质塌陷区",
					iconPath:
						"/iocoss/datai/screen/1609737255799529472/images/Group 10 Copy 48-cCrKgS8T1h7KggU2V1dmRm.png",
				},
				{
					itemType: "OBJECT_NATURAL_DISASTER_DANGER_POINT",
					name: "地质灾害隐患点",
					iconPath:
						"/iocoss/datai/screen/1609737255799529472/images/Group 10 Copy 51-7cFVrjNijbTXjqhUSRoThV.png",
				},
				{
					itemType: "OBJECT_NATURAL_DISASTER_FOREST_FARM",
					name: "林场",
					iconPath:
						"/iocoss/datai/screen/1609737255799529472/images/Group 10 Copy 52-xAL2PvG5DFASHkTutMXyBe.png",
				},
				{
					itemType: "OBJECT_NATURAL_DISASTER_FOREST_CHECK_STATION",
					name: "森林防火检查站",
					iconPath:
						"/iocoss/datai/screen/1609737255799529472/images/Group 10 Copy 94-f8R9McjA9ywTBJqTvsfwGu.png",
				},
			],
			equipment: [
				{
					itemType: "EQUIPMENT_NATURAL_DISASTER_DEVICE_大量程位移计",
					name: "大量程位移计",
					iconPath:
						"/iocoss/datai/screen/1609737255799529472/images/Group 10 Copy 54.png",
				},
				{
					itemType: "EQUIPMENT_NATURAL_DISASTER_DEVICE_GNSS位移监测",
					name: "GNSS位移监测",
					iconPath:
						"/iocoss/datai/screen/1609737255799529472/images/Group 10 Copy 87.png",
				},
				{
					itemType: "EQUIPMENT_NATURAL_DISASTER_DEVICE_振动采集仪",
					name: "振动采集仪",
					iconPath:
						"/iocoss/datai/screen/1609737255799529472/images/Group 10 Copy 86.png",
				},
				{
					itemType: "EQUIPMENT_FOREST_FIRE_PREVENTION_MONITOR_VIDEO",
					name: "森林灾害监测设备",
					iconPath:
						"/iocoss/datai/screen/1609737255799529472/images/Group 10 Copy 93.png",
				},
			],
		},
	];

	const keyField = [
		{
			label: "城镇燃气",
			iconPath:
				"/iocoss/datai/screen/1609737255799529472/images/icon／救援力量@2x.png",
			remark: "GAS",
			object: [
				{
					itemType: "SYYJ_FACILITY_GAS_PLACE",
					name: "用气场所",
					iconPath:
						"/iocoss/datai/screen/1609737255799529472/images/Group 10 Copy 95.png",
				},
				{
					itemType: "SYYJ_FACILITY_GAS_PIPELINE",
					name: "燃气管线",
					iconPath:
						"/iocoss/datai/screen/1609737255799529472/images/Group 10 Copy 96.png",
				},
				{
					itemType: "SYYJ_FACILITY_GAS_COMMERCIAL_SYNTHESES",
					name: "商业综合体",
					iconPath:
						"/iocoss/datai/screen/1609737255799529472/images/Group 10 Copy 19-v84pS9vUEoYwE8xTy21T9C.png",
				},
				{
					itemType: "SYYJ_FACILITY_GAS_DENSELY_POPULATED",
					name: "人员密集区",
					iconPath:
						"/iocoss/datai/screen/1609737255799529472/images/Group 10 Copy 97.png",
				},
			],
			equipment: [
				{
					itemType: "EQUIPMENT_NO_PEOPLE_SIREN",
					name: "非居民用报警器",
					iconPath:
						"/iocoss/datai/screen/1609737255799529472/images/Group 10 Copy 102.png",
				},
				{
					itemType: "MONITOR_EQUIPMENT_GAS_SENTRY",
					name: "地下井室管网哨兵",
					iconPath:
						"/iocoss/datai/screen/1609737255799529472/images/Group 10 Copy 103.png",
				},
				{
					itemType: "EQUIPMENT_METHANE",
					name: "激光甲烷遥测系统",
					iconPath:
						"/iocoss/datai/screen/1609737255799529472/images/Group 10 Copy 104.png",
				},
				{
					itemType: "SYYJ_FACILITY_GAS_REGULATOR_STATION_SYSTEM",
					name: "调压站监控系统",
					iconPath:
						"/iocoss/datai/screen/1609737255799529472/images/Group 10 Copy 106.png",
				},
			],
		},
		{
			label: "危化品",
			iconPath:
				"/iocoss/datai/screen/1609737255799529472/images/icon／救援力量@2x-fYqPWQijnCPXZfXnNAaHYh.png",
			remark: "HAZARDOUS_CHEMICALS",
			object: [
				{
					itemType: "OBJECT_HAZARDOUS_CHEMICALS_ENTERPRISE",
					name: "企业",
					iconPath:
						"/iocoss/datai/screen/1609737255799529472/images/Group 10 Copy 98.png",
				},
				{
					itemType: "OBJECT_HAZARDOUS_CHEMICALS_STORAGE_TANK",
					name: "储罐设备",
					iconPath:
						"/iocoss/datai/screen/1609737255799529472/images/Group 10 Copy 99.png",
				},
				{
					itemType: "OBJECT_HAZARDOUS_CHEMICALS_GAS_UNITS",
					name: "气体监测设备",
					iconPath:
						"/iocoss/datai/screen/1609737255799529472/images/Group 10 Copy 100.png",
				},
				{
					itemType: "OBJECT_HAZARDOUS_CHEMICALS_PROCESS_UNITS",
					name: "生产装置",
					iconPath:
						"/iocoss/datai/screen/1609737255799529472/images/Group 10 Copy 101.png",
				},
			],
			equipment: [
				{
					itemType: "EQUIPMENT_HAZARDOUS_CHEMICALS_VIDEO",
					name: "监控视频",
					iconPath:
						"/iocoss/datai/screen/1609737255799529472/images/Group 10 Copy 105.png",
				},
				{
					itemType: "EQUIPMENT_HAZARDOUS_CHEMICALS_PRESSURE_DIFFERENCE_PRO",
					name: "生产装置压差传感器",
					iconPath:
						"/iocoss/datai/screen/1609737255799529472/images/Group 10 Copy 107.png",
				},
				{
					itemType: "EQUIPMENT_HAZARDOUS_CHEMICALS_PRESSURE_TRANSMITTER_PRO",
					name: "生产装置压力传感器",
					iconPath:
						"/iocoss/datai/screen/1609737255799529472/images/Group 10 Copy 108.png",
				},
				{
					itemType: "EQUIPMENT_HAZARDOUS_CHEMICALS_TEMPERATURE_SENSOR_PRO",
					name: "生产装置温度传感器",
					iconPath:
						"/iocoss/datai/screen/1609737255799529472/images/Group 10 Copy 109.png",
				},
			],
		},
		{
			label: "建筑施工",
			iconPath:
				"/iocoss/datai/screen/1609737255799529472/images/icon／救援力量@2x-qmGS2V4q7wztZfzfvC7nbE.png",
			remark: "BUILDING",
			object: [
				{
					itemType: "FACILITY_BUILDING_PROJECT_ENGINEERING",
					name: "项目工程",
					iconPath:
						"/iocoss/datai/screen/1609737255799529472/images/项目工程-89V4HRB3eKwvq8RoALosXt.png",
				},
				{
					itemType: "FACILITY_UNDERGROUND_FOR_SUBWAY",
					name: "地铁施工暗挖工程",
					iconPath:
						"/iocoss/datai/screen/1609737255799529472/images/Group 10 Copy 15-kM9oi33oDSifJYPUo6MTGC.png",
				},
				{
					itemType: "FACILITY_BUILDING_PROJECT_ENGINEERING_塔吊",
					name: "塔吊工程",
					iconPath:
						"/iocoss/datai/screen/1609737255799529472/images/Group 10 Copy 16-j8x7S7bKTgPDnv8aFfAoN9.png",
				},
				{
					itemType: "FACILITY_BUILDING_PROJECT_ENGINEERING_在建塔吊",
					name: "在建工程",
					iconPath:
						"/iocoss/datai/screen/1609737255799529472/images/Group 10 Copy 20-pihvtr5x9P6HFH21g2W9E8.png",
				},
			],
			equipment: [
				{
					itemType: "EQUIPMENT_BUILDING_VIDEO",
					name: "视频摄像头",
					iconPath:
						"/iocoss/datai/screen/1609737255799529472/images/Group 10 Copy 54.png",
				},
				{
					itemType: "EQUIPMENT_BUILD_TOWER_CRANE_塔吊监测",
					name: "塔吊监测",
					iconPath:
						"/iocoss/datai/screen/1609737255799529472/images/Group 10 Copy 55.png",
				},
				{
					itemType: "EQUIPMENT_BUILDING_GAS_MONITORING",
					name: "气体监测",
					iconPath:
						"/iocoss/datai/screen/1609737255799529472/images/Group 10 Copy 56.png",
				},
				{
					itemType: "EQUIPMENT_ARCH_CROWN_SETTLEMENT",
					name: "支护结构拱顶沉降监测",
					iconPath:
						"/iocoss/datai/screen/1609737255799529472/images/Group 10 Copy 57.png",
				},
			],
		},
		{
			label: "消防安全",
			iconPath:
				"/iocoss/datai/screen/1609737255799529472/images/icon／救援力量@2x-qQtWfjTjeEGwUyXxXSJKnK.png",
			remark: "FIRE_CONTROL",
			object: [
				{
					itemType: "OBJECT_FIRE_CONTROL_HIGHT_BUILDING",
					name: "高层建筑",
					iconPath:
						"/iocoss/datai/screen/1609737255799529472/images/Group 10 Copy 17-f2NPgqy5Mkjkvnv6g1gBzB.png",
				},
				{
					itemType: "OBJECT_FIRE_CONTROL_KEY_UNIT",
					name: "消防安全重点单位",
					iconPath:
						"/iocoss/datai/screen/1609737255799529472/images/Group 10 Copy 18-mvVMafBB7DgmmgBStzPtbD.png",
				},
			],
			equipment: [
				{
					itemType: "EQUIPMENT_FIRE_CONTROL_SMOKE_DETECTOR",
					name: "感烟监测设备",
					iconPath:
						"/iocoss/datai/screen/1609737255799529472/images/Group 10 Copy 58.png",
				},
				{
					itemType: "EQUIPMENT_FIRE_CONTROL_THALPOSIS",
					name: "感温监测设备",
					iconPath:
						"/iocoss/datai/screen/1609737255799529472/images/Group 10 Copy 59.png",
				},
				{
					itemType: "EQUIPMENT_FIRE_CONTROL_LIQUID_PLACE",
					name: "液位监测设备",
					iconPath:
						"/iocoss/datai/screen/1609737255799529472/images/Group 10 Copy 54.png",
				},
				{
					itemType: "EQUIPMENT_FIRE_CONTROL_PRESSURE",
					name: "压力监测设备",
					iconPath:
						"/iocoss/datai/screen/1609737255799529472/images/Group 10 Copy 60.png",
				},
			],
		},
		{
			label: "交通运输",
			iconPath:
				"/iocoss/datai/screen/1609737255799529472/images/icon／救援力量@2x-aGBeUCaLU1sLea6nDhsuzn.png",
			remark: "TRAFFIC",
			object: [
				{
					itemType: "OBJECT_TRAFFIC_GUEST_CRISIS",
					name: "涉两客一危企业",
					iconPath:
						"/iocoss/datai/screen/1609737255799529472/images/Group 10 Copy 23-s8PVFjcuTtKmjUR3Vy9GQ5.png",
				},
				{
					itemType: "OBJECT_TRAFFIC_VEHICLE_TRANSPORT",
					name: "运输车辆",
					iconPath:
						"/iocoss/datai/screen/1609737255799529472/images/Group 10 Copy 22-r6shbFze1vzztqgdw3mKUU.png",
				},
				{
					itemType: "OBJECT_MAIN_FAST_ROAD",
					name: "重要快速路",
					iconPath:
						"/iocoss/datai/screen/1609737255799529472/images/Group 10 Copy 25-9sW3qrgeFmZQmuoAqy96qJ.png",
				},
				{
					itemType: "OBJECT_TRAFFIC_PASSENGER_STATION",
					name: "客运站",
					iconPath:
						"/iocoss/datai/screen/1609737255799529472/images/Group 10 Copy 26-cNMGPoJ1NYPyGfKnGHg8k5.png",
				},
			],
			equipment: [
				{
					itemType: "dangerOnlineNum",
					name: "危化品车辆定位设备",
					iconPath:
						"/iocoss/datai/screen/1609737255799529472/images/Group 10 Copy 61.png",
				},
				{
					itemType: "charterOnlineNum",
					name: "旅游包车定位设备",
					iconPath:
						"/iocoss/datai/screen/1609737255799529472/images/Group 10 Copy 65.png",
				},
				{
					itemType: "busOnlineNum",
					name: "班车定位设备",
					iconPath:
						"/iocoss/datai/screen/1609737255799529472/images/Group 10 Copy 64.png",
				},
			],
		},
	];

	return (
		<div style={{ display: "flex", gap: 16 }}>
			<Group fields={keyField} data={data} />
			<Group fields={industryField} data={data} />
		</div>
	);
};

export default IndustryCoverage;
