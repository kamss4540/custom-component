// 车辆类型选中值
let val = getDataByKey(
	"store_group_d1408d8824004271bcb7364c3b1850f5-jEdEQGRANdLcWanYEhi4Jm"
);
let layer = null;
switch (val) {
	case "1":
		layer = [
			{
				key: "@com_628695f9fdee42ccac3598372d8ed657",
				name: "危险品车辆",
			},
		];
		break;
	case "2":
		layer = [
			{
				key: "@com_03a9f59d485d47059611587ccf2dcf7c",
				name: "包车客运",
			},
		];
		break;
	case "3":
		layer = [
			{
				key: "@com_18615b82a76341b399fd17dd9a6df061",
				name: "班车客运",
			},
		];
		break;

	default:
		layer = [
			{
				key: "@com_628695f9fdee42ccac3598372d8ed657",
				name: "危险品车辆",
			},
			{
				key: "@com_03a9f59d485d47059611587ccf2dcf7c",
				name: "包车客运",
			},
			{
				key: "@com_18615b82a76341b399fd17dd9a6df061",
				name: "班车客运",
			},
		];
		break;
}
let output = [
	{
		key: "@com_efaefba76f0a4482818f621c2a296c59",
		name: "行政区范围",
	},
];
if (layer) {
	output.concat(layer);
}
console.info("output=>", output);
return output;

// npm create vite@latest i-want --template vue
