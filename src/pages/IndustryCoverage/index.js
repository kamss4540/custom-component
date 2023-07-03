import React from "react";
import Group from "./Group";

const IndustryCoverage = () => {
	const industryField = [
		{
			label: "供水",
			iconPath:
				"/iocoss/datai/screen/1609737255799529472/images/icon／救援力量@2x-ti93yS8Txu5UQbT2UHV1Y9.png",
			remark: "WATER_SUPPLY",
		},
		{
			label: "排水",
			iconPath:
				"/iocoss/datai/screen/1609737255799529472/images/icon／救援力量@2x-hD2bNBt23LPCA1ptgxhnPs.png",
			remark: "WATER_DRAINAGE",
		},
		{
			label: "热力",
			iconPath:
				"/iocoss/datai/screen/1609737255799529472/images/icon／救援力量@2x-cM7dH7nDRvYQvt5JscyNtq.png",
			remark: "HEATING_NETWORK",
		},
		{
			label: "综合管廊",
			iconPath:
				"/iocoss/datai/screen/1609737255799529472/images/icon／救援力量@2x-2B92wVqJNAMUyeFtpkjfxb.png",
			remark: "UTILITY_TUNNEL",
		},
		{
			label: "桥梁",
			iconPath:
				"/iocoss/datai/screen/1609737255799529472/images/icon／桥梁@2x.png",
			remark: "BRIDGE",
		},
		{
			label: "隧道",
			iconPath:
				"/iocoss/datai/screen/1609737255799529472/images/icon／救援力量@2x-mB46ecLpKifyQ3EjtjaUkE.png",
			remark: "TUNNEL",
		},
		{
			label: "特特设备",
			iconPath:
				"/iocoss/datai/screen/1609737255799529472/images/icon／救援力量@2x-6NZw3tn7Cbma59958aH7AL.png",
			remark: "EQU",
		},
		{
			label: "地铁",
			iconPath:
				"/iocoss/datai/screen/1609737255799529472/images/icon／救援力量@2x-fegnguM1g3d992edwFU4Ei.png",
			remark: "SUBWAY_SAFETY",
		},
		{
			label: "旅游",
			iconPath:
				"/iocoss/datai/screen/1609737255799529472/images/icon／救援力量@2x-sWEqGuYVMVu27QgAejiKXd.png",
			remark: "TRAVEL",
		},
		{
			label: "人员密集",
			iconPath:
				"/iocoss/datai/screen/1609737255799529472/images/icon／救援力量@2x-eR8fAowgH1VGgCtU1VY6YN.png",
			remark: "ASSEMBLY_OCCUPANCIES",
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
					itemType: "EQUIPMENT_NATURAL_DISASTER_DEVICE",
					name: "大量程位移计",
					iconPath:
						"/iocoss/datai/screen/1609737255799529472/images/Group 10 Copy 54.png",
				},
				{
					itemType: "EQUIPMENT_NATURAL_DISASTER_DEVICE",
					name: "GNSS位移监测",
					iconPath:
						"/iocoss/datai/screen/1609737255799529472/images/Group 10 Copy 87.png",
				},
				{
					itemType: "EQUIPMENT_NATURAL_DISASTER_DEVICE",
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

	return (
		<div>
			<Group data={industryField} />
		</div>
	);
};

export default IndustryCoverage;
