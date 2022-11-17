import { read } from "fs-extra";
import Com from "./SmartCenter";

const data = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];

function App() {
	return <Com data={data} />;
}

export default App;

let res = [
	{
		api_code: "autostation_warn ing",
		count: 0,
		component_type: "jzzs-hjgl-sf",
		api_name: "自动站水质预警",
	},
	{
		api_code: "bubbe1",
		count: 0,
		component_type: "jzzq-jcyb-sf",
		api_name: "冒泡算法-日均值",
	},
	{
		api_code: "bubbe2",
		count: 0,
		component_type: "jzzq-jcyb-sf",
		api_name: "冒泡算法-高值筛选法",
	},
	{
		api_code: "bubbe3",
		count: 0,
		component_type: "jzzq-jcyb-sf",
		api_name: "冒泡算法-空气质量分指数计算方法",
	},
	{
		api_code: "changeratemodel",
		count: 0,
		component_type: "jzzq-wrfz-mx",
		api_name: "变化速率模型",
	},
	{
		api_code: "citybrainaqi",
		count: 0,
		component_type: "jzzq-jcyb-sf",
		api_name: "环境空气质量指数（AQI）计算公式",
	},
	{
		api_code: "citybrainaqi2",
		count: 0,
		component_type: "jzzq-jcyb-sf",
		api_name: "空气质量评价及浓度日均值",
	},
	{
		api_code: "citybrainaqi3",
		count: 0,
		component_type: "jzzq-jcyb-sf",
		api_name: "空气质量综合指数",
	},
	{
		api_code: "citybrainaqi4",
		count: 0,
		component_type: "jzzq-jcyb-sf",
		api_name: "市域、县域污染物均值",
	},
	{
		api_code: "citybrainaqi5",
		count: 0,
		component_type: "jzzq-jcyb-sf",
		api_name: "市域、县域的空气质量综合指数",
	},
	{
		api_code: "citybrainaqi6",
		count: 0,
		component_type: "jzzq-jcyb-sf",
		api_name: "省域AQI",
	},
	{
		api_code: "citybrainaqi7",
		count: 0,
		component_type: "jzzq-jcyb-sf",
		api_name: "省域综合指数",
	},
	{
		api_code: "EKMA",
		count: 0,
		component_type: "jzzq-wrfz-sf",
		api_name: "EKMA曲线模拟",
	},
	{
		api_code: "hotGrid",
		count: 0,
		component_type: "jzzq-jcyb-sf",
		api_name: "热点网格筛选",
	},
	{
		api_code: "jcyj_lbsj",
		count: 0,
		component_type: "jzzs-hjgl-sf",
		api_name: "监测预警类别数据",
	},
	{
		api_code: "jcyj_sltj",
		count: 0,
		component_type: "jzzs-hjgl-sf",
		api_name: "监测预警数量统计",
	},
	{
		api_code: "jwjt_effect_index",
		count: 0,
		component_type: "jwjt-fxjc",
		api_name: "“协同效果”指数算法",
	},
	{
		api_code: "jwjt_index",
		count: 0,
		component_type: "jwjt-fxjc-mx",
		api_name: "减污降碳协同增效指数",
	},
	{
		api_code: "jwjt_manage_index",
		count: 0,
		component_type: "jwjt-fxjc-sf",
		api_name: "“协同管理”指数算法",
	},
	{
		api_code: "jwjt_path_index",
		count: 0,
		component_type: "jwjt-fxjc-sf",
		api_name: "“协同路径”指数算法",
	},
	{
		api_code: "NSWZPW",
		count: 0,
		component_type: "hbjg-fxjc-sf",
		api_name: "疑似未批先建",
	},
	{
		api_code: "PMF",
		count: 0,
		component_type: "jzzq-wrfz-mx",
		api_name: "源解析PMF模型",
	},
	{
		api_code: "province_score",
		count: 998,
		component_type: "jzzq-jcyb-mx",
		maxTime: 1668408660000,
		api_name: "全省治气画像",
	},
	{
		api_code: "province_water_score",
		count: 0,
		component_type: "jzzs-hjgl-sf",
		api_name: "全省治水画像",
	},
	{
		api_code: "RIR",
		count: 0,
		component_type: "jzzq-wrfz-mx",
		api_name: "RIR模型",
	},
	{
		api_code: "three_level_warning",
		count: 0,
		component_type: "jzzs-hjgl-sf",
		api_name: "地表水三级三色水质预警",
	},
	{
		api_code: "top100",
		count: 0,
		component_type: "jzzq-jcyb-sf",
		api_name: "全省各因子前100热点网格",
	},
	{
		api_code: "wrsyyj_lbsj",
		count: 0,
		component_type: "jzzs-hjgl-sf",
		api_name: "污染溯源预警类别数据",
	},
	{
		api_code: "wrsyyj_sltj",
		count: 0,
		component_type: "jzzs-hjgl-sf",
		api_name: "污染溯源预警数",
	},
	{
		api_code: "ycyjltjt",
		count: 0,
		component_type: "jzzs-hjgl-sf",
		api_name: "异常预警率统计",
	},
	{
		api_code: "yjpg",
		count: 5,
		component_type: "hpzr",
		maxTime: 1666944082000,
		api_name: "智能研判",
	},
	{
		api_code: "yjpgall",
		count: 0,
		component_type: "jzzs-hjgl-sf",
		api_name: "智能研判",
	},
];

// /iocoss/datai/screen/

let temp = {
	jzzq: {
		moduleCode: "1",
		moduleName: "精准治气",
		amount: 0,
		callCount: 0,
		picPath: "/iocoss/datai/screen/1555442540203278336/images/精准治气.png",
	},
	jzzs: {
		moduleCode: "2",
		moduleName: "精准治水",
		amount: 0,
		callCount: 0,
		picPath: "/iocoss/datai/screen/1555442540203278336/images/精准治水.png",
	},
	jzzt: {
		moduleCode: "3",
		moduleName: "精准治土",
		amount: 0,
		callCount: 0,
		picPath:
			"/iocoss/datai/api/env-zj-screen/component20220805/qryComponentPicInfo/精准治土.jpg",
	},
	jzzf: {
		moduleCode: "4",
		moduleName: "精准治废",
		amount: 0,
		callCount: 0,
		picPath: "/iocoss/datai/screen/1555442540203278336/images/精准治废.png",
	},
	hpzr: {
		moduleCode: "5",
		moduleName: "环评准入",
		amount: 0,
		callCount: 0,
		picPath:
			"/iocoss/datai/screen/1555442540203278336/images/环境准入智能研判.png",
	},
	hbjg: {
		moduleCode: "6",
		moduleName: "环保监管",
		amount: 0,
		callCount: 0,
		picPath:
			"/iocoss/datai/api/env-zj-screen/component20220805/qryComponentPicInfo/环保监管.jpg",
	},
	hjwt: {
		moduleCode: "7",
		moduleName: "环境问题发现",
		amount: 0,
		callCount: 0,
		picPath:
			"/iocoss/datai/api/env-zj-screen/component20220805/qryComponentPicInfo/环境问题发现.jpg",
	},
	hlxt: {
		moduleCode: "8",
		moduleName: "海陆协同治污",
		amount: 0,
		callCount: 0,
		picPath: "/iocoss/datai/screen/1555442540203278336/images/陆海协同治污.png",
	},
	jwjt: {
		moduleCode: "9",
		moduleName: "减污降碳协同增效",
		amount: 0,
		callCount: 0,
		picPath:
			"/iocoss/datai/api/env-zj-screen/component20220805/qryComponentPicInfo/减污降碳协同增效.jpg",
	},
};

res.map((item) => {
	for (const key in temp) {
		if (item.component_type.includes(key)) {
			const element = temp[key];
			element.amount += 1;
			element.callCount += item.count;
		}
	}
});

let output = Object.values(temp);

//请将返回值以retun方式返回
return [
	{
		label: "杭州市 - 生态智卫",
		imgUrl:
			"/iocoss/ioc-screen/screen/1585817538669359104/images/1.生态智卫（杭州市）.png",
		event: "outLinkTo",
		data: "dfts-hzs-stzw",
	},
	{
		label: "宁波市 - 甬河清",
		imgUrl: "",
		event: "outLinkTo",
		data: "dfts-nbs-yhq",
	},
	{
		label: "温州市 - 云管家",
		imgUrl:
			"/iocoss/ioc-screen/screen/1585817538669359104/images/3.美丽“云管家”（温州市）.png",
		event: "outLinkTo",
		data: "dfts-wzs-ygj",
	},
	{
		label: "湖州市 - “铅蛋”应用",
		imgUrl:
			"/iocoss/ioc-screen/screen/1585817538669359104/images/5.铅蛋应用（湖州市）.png",
		event: "outLinkTo",
		data: "dfts-hzs-tdyy",
	},
	{
		label: "绍兴市 - 生态创建",
		imgUrl: "",
		event: "outLinkTo",
		data: "dfts-sxs-stwm",
	},
	{
		label: "衢州市 - 智慧环保",
		imgUrl:
			"/iocoss/ioc-screen/screen/1585817538669359104/images/7.智慧生态环境综合应用（衢州市）.png",
		event: "outLinkTo",
		data: "dfts-qzs-zhst",
	},
	{
		label: "舟山市 - 河湖滩湾",
		imgUrl: "",
		event: "outLinkTo",
		data: "dfts-zss-hhtw",
	},
	{
		label: '台州市 - "全生态圈"环保大脑',
		imgUrl:
			"/iocoss/ioc-screen/screen/1585817538669359104/images/9.”全生态圈“环保大脑（台州市）.png",
		event: "outLinkTo",
		data: "dfts-tzs-qstq",
	},
	{
		label: "丽水市 - 天眼守望",
		imgUrl:
			"/iocoss/ioc-screen/screen/1585817538669359104/images/9.”全生态圈“环保大脑（台州市）(1).png",
		event: "outLinkTo",
		data: "dfts-lss-tysw",
	},
];
