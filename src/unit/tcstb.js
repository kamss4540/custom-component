// 替换图层树的图标
// 图层树的状态列表
let list = [
	{
		id: "1",
		key: "123456",
		name: "商场",
		ruleSymbol: "equal",
		ruleVal: "商场",
		defaultIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／商场@2x-iqCcTbsDapBBT19zCvCwfd.png",
		highIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／商场@2x-mk9EoTUPWmKnxtEwGrmDNF.png",
		columnTitle: "状态1",
	},
	{
		id: "2",
		key: 1670984306491,
		name: "状态2",
		ruleSymbol: "equal",
		ruleVal: "购物服务",
		text: {
			fontSize: "14px",
			fontFamily: "Microsoft Yahei",
			fontWeight: "normal",
			color: "#ffffff",
		},
		defaultIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／购物服务@2x-7BWm4SPqkMHiDEa7YPfkg7.png",
		highIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／购物服务@2x-7BWm4SPqkMHiDEa7YPfkg7.png",
		columnTitle: "状态2",
	},
	{
		id: "3",
		key: 1670984382548,
		name: "状态3",
		ruleSymbol: "equal",
		ruleVal: "服装店",
		text: {
			fontSize: "14px",
			fontFamily: "Microsoft Yahei",
			fontWeight: "normal",
			color: "#ffffff",
		},
		defaultIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／服装店@2x-mykeoT8ZVM1Rtoi3hhM3gh.png",
		highIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／服装店@2x-mykeoT8ZVM1Rtoi3hhM3gh.png",
		columnTitle: "状态3",
	},
	{
		id: "4",
		key: 1670984415887,
		name: "状态4",
		ruleSymbol: "equal",
		ruleVal: "书店",
		text: {
			fontSize: "14px",
			fontFamily: "Microsoft Yahei",
			fontWeight: "normal",
			color: "#ffffff",
		},
		defaultIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／书店@2x-45oi1pv2GBZohNPvZ6P56c.png",
		highIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／书店@2x-45oi1pv2GBZohNPvZ6P56c.png",
		columnTitle: "状态4",
	},
	{
		id: "5",
		key: 1670984581758,
		name: "状态5",
		ruleSymbol: "equal",
		ruleVal: "家电电子卖场",
		text: {
			fontSize: "14px",
			fontFamily: "Microsoft Yahei",
			fontWeight: "normal",
			color: "#ffffff",
		},
		defaultIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／家电电子卖场@2x-uugWmkBw5LaPDyCNhUqRtL.png",
		highIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／家电电子卖场@2x-uugWmkBw5LaPDyCNhUqRtL.png",
		columnTitle: "状态5",
	},
	{
		id: "6",
		key: 1670984621135,
		name: "状态6",
		ruleSymbol: "equal",
		ruleVal: "综合市场",
		text: {
			fontSize: "14px",
			fontFamily: "Microsoft Yahei",
			fontWeight: "normal",
			color: "#ffffff",
		},
		defaultIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／综合市场@2x-gBM91hb9xL8fMEnBYsG1eY.png",
		highIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／综合市场@2x-gBM91hb9xL8fMEnBYsG1eY.png",
		columnTitle: "状态6",
	},
	{
		id: "7",
		key: 1670984650404,
		name: "状态7",
		ruleSymbol: "equal",
		ruleVal: "家具建材市场",
		text: {
			fontSize: "14px",
			fontFamily: "Microsoft Yahei",
			fontWeight: "normal",
			color: "#ffffff",
		},
		defaultIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／家具建材市场@2x-tXs9obbrxh6JQP58jVgeko.png",
		highIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／家具建材市场@2x-tXs9obbrxh6JQP58jVgeko.png",
		columnTitle: "状态7",
	},
	{
		id: "8",
		key: 1670984892631,
		name: "状态8",
		ruleSymbol: "equal",
		ruleVal: "学校",
		text: {
			fontSize: "14px",
			fontFamily: "Microsoft Yahei",
			fontWeight: "normal",
			color: "#ffffff",
		},
		defaultIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／学校@2x-7JVJHJgHLUww6adtB1KpR3.png",
		highIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／学校@2x-7JVJHJgHLUww6adtB1KpR3.png",
		columnTitle: "状态8",
	},
	{
		id: "9",
		key: 1670984931150,
		name: "状态9",
		ruleSymbol: "equal",
		ruleVal: "幼儿园",
		text: {
			fontSize: "14px",
			fontFamily: "Microsoft Yahei",
			fontWeight: "normal",
			color: "#ffffff",
		},
		defaultIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／幼儿园@2x-qxET1QW2zKfwBrS6jYwat4.png",
		highIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／幼儿园@2x-qxET1QW2zKfwBrS6jYwat4.png",
		columnTitle: "状态9",
	},
	{
		id: "10",
		key: 1670984952307,
		name: "状态10",
		ruleSymbol: "equal",
		ruleVal: "旅游景点",
		text: {
			fontSize: "14px",
			fontFamily: "Microsoft Yahei",
			fontWeight: "normal",
			color: "#ffffff",
		},
		defaultIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／旅游景点@2x-w2YLr1whgvkTSFyq4rRQgx.png",
		highIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／旅游景点@2x-w2YLr1whgvkTSFyq4rRQgx.png",
		columnTitle: "状态10",
	},
	{
		id: "11",
		key: 1670984991619,
		name: "状态11",
		ruleSymbol: "equal",
		ruleVal: "风景名胜",
		text: {
			fontSize: "14px",
			fontFamily: "Microsoft Yahei",
			fontWeight: "normal",
			color: "#ffffff",
		},
		defaultIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／风景名胜@2x-8N2ogrf6zVmmzd8BGSbaGF.png",
		highIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／风景名胜@2x-8N2ogrf6zVmmzd8BGSbaGF.png",
		columnTitle: "状态11",
	},
	{
		id: "12",
		key: 1670985019699,
		name: "状态12",
		ruleSymbol: "equal",
		ruleVal: "寺庙道观",
		text: {
			fontSize: "14px",
			fontFamily: "Microsoft Yahei",
			fontWeight: "normal",
			color: "#ffffff",
		},
		defaultIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／寺庙道观@2x-gUpgZgF6QS1yJRCLv1zfai.png",
		highIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／寺庙道观@2x-gUpgZgF6QS1yJRCLv1zfai.png",
		columnTitle: "状态12",
	},
	{
		id: "13",
		key: 1670985036326,
		name: "状态13",
		ruleSymbol: "equal",
		ruleVal: "博物馆",
		text: {
			fontSize: "14px",
			fontFamily: "Microsoft Yahei",
			fontWeight: "normal",
			color: "#ffffff",
		},
		defaultIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／博物馆@2x-ffonJ73U37nAbErFWuLnRC.png",
		highIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／博物馆@2x-sTa5g3g5tHJQNQKxzHXuHf.png",
		columnTitle: "状态13",
	},
	{
		id: "14",
		key: 1670985060664,
		name: "状态14",
		ruleSymbol: "equal",
		ruleVal: "动物园",
		text: {
			fontSize: "14px",
			fontFamily: "Microsoft Yahei",
			fontWeight: "normal",
			color: "#ffffff",
		},
		defaultIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／动物园@2x-wTczCib8xry3vBEkXaasZk.png",
		highIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／动物园@2x-wTczCib8xry3vBEkXaasZk.png",
		columnTitle: "状态14",
	},
	{
		id: "15",
		key: 1670985084874,
		name: "状态15",
		ruleSymbol: "equal",
		ruleVal: "水族馆",
		text: {
			fontSize: "14px",
			fontFamily: "Microsoft Yahei",
			fontWeight: "normal",
			color: "#ffffff",
		},
		defaultIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／水族馆@2x-iHfutVazmG4cxYGdMi5AQt.png",
		highIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／水族馆@2x-iHfutVazmG4cxYGdMi5AQt.png",
		columnTitle: "状态15",
	},
	{
		id: "16",
		key: 1670985103999,
		name: "状态16",
		ruleSymbol: "equal",
		ruleVal: "植物园",
		text: {
			fontSize: "14px",
			fontFamily: "Microsoft Yahei",
			fontWeight: "normal",
			color: "#ffffff",
		},
		defaultIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／植物园@2x-aXfAP468fzVyJmpvxyxcRg.png",
		highIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／植物园@2x-aXfAP468fzVyJmpvxyxcRg.png",
		columnTitle: "状态16",
	},
	{
		id: "17",
		key: 1670985743288,
		name: "状态17",
		ruleSymbol: "equal",
		ruleVal: "世界遗产",
		text: {
			fontSize: "14px",
			fontFamily: "Microsoft Yahei",
			fontWeight: "normal",
			color: "#ffffff",
		},
		defaultIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／世界遗产@2x-7UFu8LJUYPtQkGk2AuuyWC.png",
		highIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／世界遗产@2x-7UFu8LJUYPtQkGk2AuuyWC.png",
		columnTitle: "状态17",
	},
	{
		id: "18",
		key: 1670985820474,
		name: "状态18",
		ruleSymbol: "equal",
		ruleVal: "会展中心",
		text: {
			fontSize: "14px",
			fontFamily: "Microsoft Yahei",
			fontWeight: "normal",
			color: "#ffffff",
		},
		defaultIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／会展中心@2x-eVG3iXjf7o5maabL6nNnvm.png",
		highIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／会展中心@2x-eVG3iXjf7o5maabL6nNnvm.png",
		columnTitle: "状态18",
	},
	{
		id: "19",
		key: 1670985846967,
		name: "状态19",
		ruleSymbol: "equal",
		ruleVal: "图书馆",
		text: {
			fontSize: "14px",
			fontFamily: "Microsoft Yahei",
			fontWeight: "normal",
			color: "#ffffff",
		},
		defaultIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／图书馆11111@2x.png",
		highIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／图书馆11111@2x.png",
		columnTitle: "状态19",
	},
	{
		id: "20",
		key: 1670986080941,
		name: "状态20",
		ruleSymbol: "equal",
		ruleVal: "公园",
		text: {
			fontSize: "14px",
			fontFamily: "Microsoft Yahei",
			fontWeight: "normal",
			color: "#ffffff",
		},
		defaultIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／公园@2x-kbCEhvfYAoUyvHTzg3WoRD.png",
		highIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／公园@2x-kbCEhvfYAoUyvHTzg3WoRD.png",
		columnTitle: "状态20",
	},
	{
		id: "21",
		key: 1670986105016,
		name: "状态21",
		ruleSymbol: "equal",
		ruleVal: "城市广场",
		text: {
			fontSize: "14px",
			fontFamily: "Microsoft Yahei",
			fontWeight: "normal",
			color: "#ffffff",
		},
		defaultIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／城市广场@2x-qwySLesczUU3mncnTgrqD5.png",
		highIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／城市广场@2x-qwySLesczUU3mncnTgrqD5.png",
		columnTitle: "状态21",
	},
	{
		id: "22",
		key: 1670986222994,
		name: "状态22",
		ruleSymbol: "equal",
		ruleVal: "文化宫",
		text: {
			fontSize: "14px",
			fontFamily: "Microsoft Yahei",
			fontWeight: "normal",
			color: "#ffffff",
		},
		defaultIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／文化宫@2x-4CyddDziPkbCLR1qim9Vvi.png",
		highIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／文化宫@2x-4CyddDziPkbCLR1qim9Vvi.png",
		columnTitle: "状态22",
	},
	{
		id: "23",
		key: 1670986277987,
		name: "状态23",
		ruleSymbol: "equal",
		ruleVal: "医疗保健服务场所",
		text: {
			fontSize: "14px",
			fontFamily: "Microsoft Yahei",
			fontWeight: "normal",
			color: "#ffffff",
		},
		defaultIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／医疗保健服务场所@2x-9QvTvfmpeyqWQZYSfC9nwv.png",
		highIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／医疗保健服务场所@2x-9QvTvfmpeyqWQZYSfC9nwv.png",
		columnTitle: "状态23",
	},
	{
		id: "24",
		key: 1670986819457,
		name: "状态24",
		ruleSymbol: "equal",
		ruleVal: "诊所",
		text: {
			fontSize: "14px",
			fontFamily: "Microsoft Yahei",
			fontWeight: "normal",
			color: "#ffffff",
		},
		defaultIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／诊所@2x-wrbY3N9c5qiBxmjcHpq9Jj.png",
		highIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／诊所@2x-wrbY3N9c5qiBxmjcHpq9Jj.png",
		columnTitle: "状态24",
	},
	{
		id: "25",
		key: 1670987728013,
		name: "状态25",
		ruleSymbol: "equal",
		ruleVal: "卫生院",
		text: {
			fontSize: "14px",
			fontFamily: "Microsoft Yahei",
			fontWeight: "normal",
			color: "#ffffff",
		},
		defaultIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／卫生院@2x-fBJ6tr7Ww5LmUfA5E4FoPV.png",
		highIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／卫生院@2x-fBJ6tr7Ww5LmUfA5E4FoPV.png",
		columnTitle: "状态25",
	},
	{
		id: "26",
		key: 1670987849751,
		name: "状态26",
		ruleSymbol: "equal",
		ruleVal: "专科医院",
		text: {
			fontSize: "14px",
			fontFamily: "Microsoft Yahei",
			fontWeight: "normal",
			color: "#ffffff",
		},
		defaultIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／专科医院@2x-53UcwL2yRXQK71Abx2fCP6.png",
		highIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／专科医院@2x-53UcwL2yRXQK71Abx2fCP6.png",
		columnTitle: "状态26",
	},
	{
		id: "27",
		key: 1670987927607,
		name: "状态27",
		ruleSymbol: "equal",
		ruleVal: "三级甲等医院",
		text: {
			fontSize: "14px",
			fontFamily: "Microsoft Yahei",
			fontWeight: "normal",
			color: "#ffffff",
		},
		defaultIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／三级甲等医院@2x-a9EcnABo5bW8yDgGkXF883.png",
		highIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／三级甲等医院@2x-a9EcnABo5bW8yDgGkXF883.png",
		columnTitle: "状态27",
	},
	{
		id: "28",
		key: 1670987950588,
		name: "状态28",
		ruleSymbol: "equal",
		ruleVal: "急救中心",
		text: {
			fontSize: "14px",
			fontFamily: "Microsoft Yahei",
			fontWeight: "normal",
			color: "#ffffff",
		},
		defaultIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／急救中心@2x-gjj3zDezaxnRFuB9jnaeRp.png",
		highIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／急救中心@2x-gjj3zDezaxnRFuB9jnaeRp.png",
		columnTitle: "状态28",
	},
	{
		id: "29",
		key: 1670987982329,
		name: "状态29",
		ruleSymbol: "equal",
		ruleVal: "乡镇级政府及事业单位",
		text: {
			fontSize: "14px",
			fontFamily: "Microsoft Yahei",
			fontWeight: "normal",
			color: "#ffffff",
		},
		defaultIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／乡镇级政府及事业单位@2x-k4euYzSX8ePhF4KWmh52Qb.png",
		highIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／乡镇级政府及事业单位@2x-k4euYzSX8ePhF4KWmh52Qb.png",
		columnTitle: "状态29",
	},
	{
		id: "30",
		key: 1670988056518,
		name: "状态30",
		ruleSymbol: "equal",
		ruleVal: "区县级政府及事业单位",
		text: {
			fontSize: "14px",
			fontFamily: "Microsoft Yahei",
			fontWeight: "normal",
			color: "#ffffff",
		},
		defaultIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／区县级政府及事业单位@2x-jkzXKkQC28ZwKsGieLy5SR.png",
		highIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／区县级政府及事业单位@2x-jkzXKkQC28ZwKsGieLy5SR.png",
		columnTitle: "状态30",
	},
	{
		id: "31",
		key: 1670997543520,
		name: "状态31",
		ruleSymbol: "equal",
		ruleVal: "政府机关相关",
		text: {
			fontSize: "14px",
			fontFamily: "Microsoft Yahei",
			fontWeight: "normal",
			color: "#ffffff",
		},
		defaultIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／政府机关相关@2x-xrQQ9MtJAfvADQDP7bXuoU.png",
		highIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／政府机关相关@2x-xrQQ9MtJAfvADQDP7bXuoU.png",
		columnTitle: "状态31",
	},
	{
		id: "32",
		key: 1670997582009,
		name: "状态32",
		ruleSymbol: "equal",
		ruleVal: "外地政府办",
		text: {
			fontSize: "14px",
			fontFamily: "Microsoft Yahei",
			fontWeight: "normal",
			color: "#ffffff",
		},
		defaultIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／外地政府办@2x-naUZceNk4YEVatNJpbr3qX.png",
		highIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／外地政府办@2x-naUZceNk4YEVatNJpbr3qX.png",
		columnTitle: "状态32",
	},
	{
		id: "33",
		key: 1670997619283,
		name: "状态33",
		ruleSymbol: "equal",
		ruleVal: "地市级政府及事业单位",
		text: {
			fontSize: "14px",
			fontFamily: "Microsoft Yahei",
			fontWeight: "normal",
			color: "#ffffff",
		},
		defaultIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／地市级政府及事业单位@2x-827snuStURpYHUZU6hyoBA.png",
		highIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／地市级政府及事业单位@2x-827snuStURpYHUZU6hyoBA.png",
		columnTitle: "状态33",
	},
	{
		id: "34",
		key: 1670997725293,
		name: "状态34",
		ruleSymbol: "equal",
		ruleVal: "乡镇以下级政府及事业单位",
		text: {
			fontSize: "14px",
			fontFamily: "Microsoft Yahei",
			fontWeight: "normal",
			color: "#ffffff",
		},
		defaultIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／乡镇级政府及事业单位 copy@2x-nLFtmMC46QdcbxPrM1VQ8Y.png",
		highIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／乡镇级政府及事业单位 copy@2x-nLFtmMC46QdcbxPrM1VQ8Y.png",
		columnTitle: "状态34",
	},
	{
		id: "35",
		key: 1670997998153,
		name: "状态35",
		ruleSymbol: "equal",
		ruleVal: "省直辖市级政府及事业单位",
		text: {
			fontSize: "14px",
			fontFamily: "Microsoft Yahei",
			fontWeight: "normal",
			color: "#ffffff",
		},
		defaultIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／省直辖市级政府及事业单位@2x-d6YFFf4Y4CyUwybpVwThqT.png",
		highIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／省直辖市级政府及事业单位@2x-d6YFFf4Y4CyUwybpVwThqT.png",
		columnTitle: "状态35",
	},
	{
		id: "36",
		key: 1670998338608,
		name: "状态36",
		ruleSymbol: "equal",
		ruleVal: "消防机关",
		text: {
			fontSize: "14px",
			fontFamily: "Microsoft Yahei",
			fontWeight: "normal",
			color: "#ffffff",
		},
		defaultIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／消防机关@2x-fpysPcUetBuUBoucUkTQqp.png",
		highIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／消防机关@2x-fpysPcUetBuUBoucUkTQqp.png",
		columnTitle: "状态36",
	},
	{
		id: "37",
		key: 1670998380408,
		name: "状态37",
		ruleSymbol: "equal",
		ruleVal: "政府及社会团体相关",
		text: {
			fontSize: "14px",
			fontFamily: "Microsoft Yahei",
			fontWeight: "normal",
			color: "#ffffff",
		},
		defaultIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／政府及社会团体相关@2x-hpEeWDnUqZfjbxmGTMKx3v.png",
		highIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／政府及社会团体相关@2x-hpEeWDnUqZfjbxmGTMKx3v.png",
		columnTitle: "状态37",
	},
	{
		id: "38",
		key: 1670998434002,
		name: "状态38",
		ruleSymbol: "equal",
		ruleVal: "公安警察",
		text: {
			fontSize: "14px",
			fontFamily: "Microsoft Yahei",
			fontWeight: "normal",
			color: "#ffffff",
		},
		defaultIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／公安警察@2x-3s4QKadu8upyYWcfhunwp4.png",
		highIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／公安警察@2x-3s4QKadu8upyYWcfhunwp4.png",
		columnTitle: "状态38",
	},
	{
		id: "39",
		key: 1670998520288,
		name: "状态39",
		ruleSymbol: "equal",
		ruleVal: "检察院",
		text: {
			fontSize: "14px",
			fontFamily: "Microsoft Yahei",
			fontWeight: "normal",
			color: "#ffffff",
		},
		defaultIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／检察院@2x-cr6n4ogfHbb5RyoCs5SQcc.png",
		highIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／检察院@2x-cr6n4ogfHbb5RyoCs5SQcc.png",
		columnTitle: "状态39",
	},
	{
		id: "40",
		key: 1670998643279,
		name: "状态40",
		ruleSymbol: "equal",
		ruleVal: "交通管理机构",
		text: {
			fontSize: "14px",
			fontFamily: "Microsoft Yahei",
			fontWeight: "normal",
			color: "#ffffff",
		},
		defaultIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／交通管理机构@2x-myB9S2hTQ2ffDWpZ1XdJKe.png",
		highIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／交通管理机构@2x-myB9S2hTQ2ffDWpZ1XdJKe.png",
		columnTitle: "状态40",
	},
	{
		id: "41",
		key: 1670998701980,
		name: "状态41",
		ruleSymbol: "equal",
		ruleVal: "社会治安机构",
		text: {
			fontSize: "14px",
			fontFamily: "Microsoft Yahei",
			fontWeight: "normal",
			color: "#ffffff",
		},
		defaultIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／社会治安机构@2x-2jyuGz24xjj6cK7L5cN9hB.png",
		highIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／社会治安机构@2x-2jyuGz24xjj6cK7L5cN9hB.png",
		columnTitle: "状态41",
	},
	{
		id: "42",
		key: 1670998729107,
		name: "状态42",
		ruleSymbol: "equal",
		ruleVal: "国家级机关及事业单位",
		text: {
			fontSize: "14px",
			fontFamily: "Microsoft Yahei",
			fontWeight: "normal",
			color: "#ffffff",
		},
		defaultIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／国家级机关及事业单位@2x-nb9XZ7BnKbDMjv4GsvKDcs.png",
		highIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／国家级机关及事业单位@2x-nb9XZ7BnKbDMjv4GsvKDcs.png",
		columnTitle: "状态42",
	},
	{
		id: "43",
		key: 1670998779884,
		name: "状态43",
		ruleSymbol: "equal",
		ruleVal: "交通执法站",
		text: {
			fontSize: "14px",
			fontFamily: "Microsoft Yahei",
			fontWeight: "normal",
			color: "#ffffff",
		},
		defaultIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／交通执法站@2x-8byx8G7mSppwxp2wsYd7BX.png",
		highIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／交通执法站@2x-8byx8G7mSppwxp2wsYd7BX.png",
		columnTitle: "状态43",
	},
	{
		id: "44",
		key: 1671001280425,
		name: "状态44",
		ruleSymbol: "equal",
		ruleVal: "地铁站",
		text: {
			fontSize: "14px",
			fontFamily: "Microsoft Yahei",
			fontWeight: "normal",
			color: "#ffffff",
		},
		defaultIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／地铁站@2x-sNKJuvDCSMoTeQLmb5NEVw.png",
		highIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／地铁站@2x-sNKJuvDCSMoTeQLmb5NEVw.png",
		columnTitle: "状态44",
	},
	{
		id: "45",
		key: 1671001299936,
		name: "状态45",
		ruleSymbol: "equal",
		ruleVal: "公交站",
		text: {
			fontSize: "14px",
			fontFamily: "Microsoft Yahei",
			fontWeight: "normal",
			color: "#ffffff",
		},
		defaultIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／公交站@2x-vnzkyzJwyv3TntCrhGBmmX.png",
		highIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／公交站@2x-vnzkyzJwyv3TntCrhGBmmX.png",
		columnTitle: "状态45",
	},
	{
		id: "46",
		key: 1671001322313,
		name: "状态46",
		ruleSymbol: "equal",
		ruleVal: "长途汽车站",
		text: {
			fontSize: "14px",
			fontFamily: "Microsoft Yahei",
			fontWeight: "normal",
			color: "#ffffff",
		},
		defaultIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／长途汽车站@2x-dVTcLuH9AHAQ2eg2J74ksQ.png",
		highIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／长途汽车站@2x-dVTcLuH9AHAQ2eg2J74ksQ.png",
		columnTitle: "状态46",
	},
	{
		id: "47",
		key: 1671001363261,
		name: "状态47",
		ruleSymbol: "equal",
		ruleVal: "客运站",
		text: {
			fontSize: "14px",
			fontFamily: "Microsoft Yahei",
			fontWeight: "normal",
			color: "#ffffff",
		},
		defaultIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／客运站@2x-sDxMZDtAHREirRqSXccxPJ.png",
		highIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／客运站@2x-sDxMZDtAHREirRqSXccxPJ.png",
		columnTitle: "状态47",
	},
	{
		id: "48",
		key: 1671001581021,
		name: "状态48",
		ruleSymbol: "equal",
		ruleVal: "火车站",
		text: {
			fontSize: "14px",
			fontFamily: "Microsoft Yahei",
			fontWeight: "normal",
			color: "#ffffff",
		},
		defaultIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／火车站@2x-3L9XYJkMdvSnpicecLXh9V.png",
		highIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／火车站@2x-3L9XYJkMdvSnpicecLXh9V.png",
		columnTitle: "状态48",
	},
	{
		id: "49",
		key: 1671001601160,
		name: "状态49",
		ruleSymbol: "equal",
		ruleVal: "飞机场",
		text: {
			fontSize: "14px",
			fontFamily: "Microsoft Yahei",
			fontWeight: "normal",
			color: "#ffffff",
		},
		defaultIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／飞机场@2x-gzHLyUehwaNqbXWgWdFTTJ.png",
		highIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／飞机场@2x-gzHLyUehwaNqbXWgWdFTTJ.png",
		columnTitle: "状态49",
	},
	{
		id: "50",
		key: 1671001619438,
		name: "状态50",
		ruleSymbol: "equal",
		ruleVal: "立交桥",
		text: {
			fontSize: "14px",
			fontFamily: "Microsoft Yahei",
			fontWeight: "normal",
			color: "#ffffff",
		},
		defaultIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／立交桥@2x-d5vdfFx6VYrJhuZVVfbBRh.png",
		highIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／立交桥@2x-d5vdfFx6VYrJhuZVVfbBRh.png",
		columnTitle: "状态50",
	},
	{
		id: "51",
		key: 1671001644559,
		name: "状态51",
		ruleSymbol: "equal",
		ruleVal: "服务区",
		text: {
			fontSize: "14px",
			fontFamily: "Microsoft Yahei",
			fontWeight: "normal",
			color: "#ffffff",
		},
		defaultIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／服务区@2x-sZCE2Prcd3yJP7coQEurGa.png",
		highIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／服务区@2x-sZCE2Prcd3yJP7coQEurGa.png",
		columnTitle: "状态51",
	},
	{
		id: "52",
		key: 1671001661220,
		name: "状态52",
		ruleSymbol: "equal",
		ruleVal: "隧道",
		text: {
			fontSize: "14px",
			fontFamily: "Microsoft Yahei",
			fontWeight: "normal",
			color: "#ffffff",
		},
		defaultIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／隧道@2x-js1tNzEEss2QYsGViJbawu.png",
		highIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／隧道@2x-js1tNzEEss2QYsGViJbawu.png",
		columnTitle: "状态52",
	},
	{
		id: "53",
		key: 1671001895151,
		name: "状态53",
		ruleSymbol: "equal",
		ruleVal: "收费站",
		text: {
			fontSize: "14px",
			fontFamily: "Microsoft Yahei",
			fontWeight: "normal",
			color: "#ffffff",
		},
		defaultIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／收费站@2x-uRSNyCvk5Rqx1C4hmTFQzM.png",
		highIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／收费站@2x-uRSNyCvk5Rqx1C4hmTFQzM.png",
		columnTitle: "状态53",
	},
	{
		id: "54",
		key: 1671001944534,
		name: "状态54",
		ruleSymbol: "equal",
		ruleVal: "路口名",
		text: {
			fontSize: "14px",
			fontFamily: "Microsoft Yahei",
			fontWeight: "normal",
			color: "#ffffff",
		},
		defaultIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／路口名@2x-mxX7nuFmWT6ozG3vSyye9y.png",
		highIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／路口名@2x-mxX7nuFmWT6ozG3vSyye9y.png",
		columnTitle: "状态54",
	},
	{
		id: "55",
		key: 1671001962329,
		name: "状态55",
		ruleSymbol: "equal",
		ruleVal: "道路名",
		text: {
			fontSize: "14px",
			fontFamily: "Microsoft Yahei",
			fontWeight: "normal",
			color: "#ffffff",
		},
		defaultIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／道路名@2x-d5FtcFaBwR3ocSD2icmVGL.png",
		highIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／道路名@2x-d5FtcFaBwR3ocSD2icmVGL.png",
		columnTitle: "状态55",
	},
	{
		id: "56",
		key: 1671001989880,
		name: "状态56",
		ruleSymbol: "equal",
		ruleVal: "体育休闲服务场所",
		text: {
			fontSize: "14px",
			fontFamily: "Microsoft Yahei",
			fontWeight: "normal",
			color: "#ffffff",
		},
		defaultIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／体育休闲服务场所@2x-w8mu2dgJNys1Jr4VrHUYkL.png",
		highIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／体育休闲服务场所@2x-w8mu2dgJNys1Jr4VrHUYkL.png",
		columnTitle: "状态56",
	},
	{
		id: "57",
		key: 1671005107629,
		name: "状态57",
		ruleSymbol: "equal",
		ruleVal: "综合体育馆",
		text: {
			fontSize: "14px",
			fontFamily: "Microsoft Yahei",
			fontWeight: "normal",
			color: "#ffffff",
		},
		defaultIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／综合体育馆@2x-rLE5aEkLQgEPTfkMQQbs8m.png",
		highIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／综合体育馆@2x-rLE5aEkLQgEPTfkMQQbs8m.png",
		columnTitle: "状态57",
	},
	{
		id: "58",
		key: 1671005264773,
		name: "状态58",
		ruleSymbol: "equal",
		ruleVal: "行政区点位",
		text: {
			fontSize: "14px",
			fontFamily: "Microsoft Yahei",
			fontWeight: "normal",
			color: "#ffffff",
		},
		defaultIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／行政区点位@2x-nQe2rT9RHN4tSy3CWfiqeY.png",
		highIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／行政区点位@2x-nQe2rT9RHN4tSy3CWfiqeY.png",
		columnTitle: "状态58",
	},
	{
		id: "59",
		key: 1671005378808,
		name: "状态59",
		ruleSymbol: "equal",
		ruleVal: "社区点位",
		text: {
			fontSize: "14px",
			fontFamily: "Microsoft Yahei",
			fontWeight: "normal",
			color: "#ffffff",
		},
		defaultIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／社区点位@2x-2S3FznnYR3WedmNZzQuP9u.png",
		highIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／社区点位@2x-2S3FznnYR3WedmNZzQuP9u.png",
		columnTitle: "状态59",
	},
	{
		id: "60",
		key: 1671005389015,
		name: "状态60",
		ruleSymbol: "equal",
		ruleVal: "小区点位",
		text: {
			fontSize: "14px",
			fontFamily: "Microsoft Yahei",
			fontWeight: "normal",
			color: "#ffffff",
		},
		defaultIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／小区点位@2x-1eNj5P7MKjcaVcLzrv7BXg.png",
		highIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／小区点位@2x-aNJ7bbcfUJdS3E1NEnsoVA.png",
		columnTitle: "状态60",
	},
	{
		id: "61",
		key: 1671005399618,
		name: "状态61",
		ruleSymbol: "equal",
		ruleVal: "街道点位",
		text: {
			fontSize: "14px",
			fontFamily: "Microsoft Yahei",
			fontWeight: "normal",
			color: "#ffffff",
		},
		defaultIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／街道点位@2x-gtcQ5RURLLkTJvZiLCpfVJ.png",
		highIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／街道点位@2x-gtcQ5RURLLkTJvZiLCpfVJ.png",
		columnTitle: "状态61",
	},
	{
		id: "62",
		key: 1671005434816,
		name: "状态62",
		ruleSymbol: "equal",
		ruleVal: "加油站",
		text: {
			fontSize: "14px",
			fontFamily: "Microsoft Yahei",
			fontWeight: "normal",
			color: "#ffffff",
		},
		defaultIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／加油站@2x-kR5wD1KABtuJe3LwZodoE3.png",
		highIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／加油站@2x-kR5wD1KABtuJe3LwZodoE3.png",
		columnTitle: "状态62",
	},
	{
		id: "63",
		key: 1671005469356,
		name: "状态63",
		ruleSymbol: "equal",
		ruleVal: "危化企业",
		text: {
			fontSize: "14px",
			fontFamily: "Microsoft Yahei",
			fontWeight: "normal",
			color: "#ffffff",
		},
		defaultIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／危化企业@2x-uFxrXToshNfRbwnodsHvcB.png",
		highIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／危化企业@2x-uFxrXToshNfRbwnodsHvcB.png",
		columnTitle: "状态63",
	},
	{
		id: "64",
		key: 1671005573191,
		name: "状态64",
		ruleSymbol: "equal",
		ruleVal: "沈阳市重点项目",
		text: {
			fontSize: "14px",
			fontFamily: "Microsoft Yahei",
			fontWeight: "normal",
			color: "#ffffff",
		},
		defaultIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／重点项目@2x-aNvuY7FwZqyRGozwsraCSf.png",
		highIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／重点项目@2x-aNvuY7FwZqyRGozwsraCSf.png",
		columnTitle: "状态64",
	},
	{
		id: "65",
		key: 1671005648175,
		name: "状态65",
		ruleSymbol: "equal",
		ruleVal: "避难场所",
		text: {
			fontSize: "14px",
			fontFamily: "Microsoft Yahei",
			fontWeight: "normal",
			color: "#ffffff",
		},
		defaultIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／应急避难场所@2x-7DpLAts4J9cViJap4x6H1c.png",
		highIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／应急避难场所@2x-7DpLAts4J9cViJap4x6H1c.png",
		columnTitle: "状态65",
	},
	{
		id: "66",
		key: 1671008550961,
		name: "状态66",
		ruleSymbol: "equal",
		ruleVal: "购物服务",
		text: {
			fontSize: "14px",
			fontFamily: "Microsoft Yahei",
			fontWeight: "normal",
			color: "#ffffff",
		},
		defaultIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／购物服务@2x-5YWSdH3NTsHKpxFnvZFAv8.png",
		highIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／购物服务@2x-5YWSdH3NTsHKpxFnvZFAv8.png",
		columnTitle: "状态66",
	},
	{
		id: "67",
		key: 1671008675036,
		name: "状态67",
		ruleSymbol: "equal",
		ruleVal: "科教文化",
		text: {
			fontSize: "14px",
			fontFamily: "Microsoft Yahei",
			fontWeight: "normal",
			color: "#ffffff",
		},
		defaultIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／科教文化@2x-9qq1icJYs54CYR5Dhjy75R.png",
		highIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／科教文化@2x-9qq1icJYs54CYR5Dhjy75R.png",
		columnTitle: "状态67",
	},
	{
		id: "68",
		key: 1671008754652,
		name: "状态68",
		ruleSymbol: "equal",
		ruleVal: "旅游景点",
		text: {
			fontSize: "14px",
			fontFamily: "Microsoft Yahei",
			fontWeight: "normal",
			color: "#ffffff",
		},
		defaultIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／旅游景点@2x-fdvEj7fX7jWvp9kA23u2Dd.png",
		highIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／旅游景点@2x-fdvEj7fX7jWvp9kA23u2Dd.png",
		columnTitle: "状态68",
	},
	{
		id: "69",
		key: 1671008774685,
		name: "状态69",
		ruleSymbol: "equal",
		ruleVal: "公共文化",
		text: {
			fontSize: "14px",
			fontFamily: "Microsoft Yahei",
			fontWeight: "normal",
			color: "#ffffff",
		},
		defaultIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／公共文化@2x-jtegSkERgBhHkStPckzojZ.png",
		highIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／公共文化@2x-jtegSkERgBhHkStPckzojZ.png",
		columnTitle: "状态69",
	},
	{
		id: "70",
		key: 1671008849327,
		name: "状态70",
		ruleSymbol: "equal",
		ruleVal: "医疗机构",
		text: {
			fontSize: "14px",
			fontFamily: "Microsoft Yahei",
			fontWeight: "normal",
			color: "#ffffff",
		},
		defaultIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／医疗机构@2x-7T88rFE8PpxeSr8uE7AiKx.png",
		highIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／医疗机构@2x-7T88rFE8PpxeSr8uE7AiKx.png",
		columnTitle: "状态70",
	},
	{
		id: "71",
		key: 1671008869871,
		name: "状态71",
		ruleSymbol: "equal",
		ruleVal: "政府机构",
		text: {
			fontSize: "14px",
			fontFamily: "Microsoft Yahei",
			fontWeight: "normal",
			color: "#ffffff",
		},
		defaultIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／政府机构@2x-uTDC64YTR5G7JSdopygSAm.png",
		highIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／政府机构@2x-uTDC64YTR5G7JSdopygSAm.png",
		columnTitle: "状态71",
	},
	{
		id: "72",
		key: 1671008890800,
		name: "状态72",
		ruleSymbol: "equal",
		ruleVal: "交通出行",
		text: {
			fontSize: "14px",
			fontFamily: "Microsoft Yahei",
			fontWeight: "normal",
			color: "#ffffff",
		},
		defaultIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／交通出行@2x-ptVHGseVzBFsGtyu9E6E6T.png",
		highIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／交通出行@2x-ptVHGseVzBFsGtyu9E6E6T.png",
		columnTitle: "状态72",
	},
	{
		id: "73",
		key: 1671008909024,
		name: "状态73",
		ruleSymbol: "equal",
		ruleVal: "体育场馆",
		text: {
			fontSize: "14px",
			fontFamily: "Microsoft Yahei",
			fontWeight: "normal",
			color: "#ffffff",
		},
		defaultIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／体育场馆@2x-1pX68AhyE1B166mxVGUrEU.png",
		highIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／体育场馆@2x-1pX68AhyE1B166mxVGUrEU.png",
		columnTitle: "状态73",
	},
	{
		id: "75",
		key: 1671009006989,
		name: "状态75",
		ruleSymbol: "equal",
		ruleVal: "重点监测对象",
		text: {
			fontSize: "14px",
			fontFamily: "Microsoft Yahei",
			fontWeight: "normal",
			color: "#ffffff",
		},
		defaultIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／重点监测对象@2x-t66nAuCVE71kYET3Xs9Lao.png",
		highIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／重点监测对象@2x-t66nAuCVE71kYET3Xs9Lao.png",
		columnTitle: "状态74",
	},
	{
		id: "76",
		key: 1671009047161,
		name: "状态76",
		ruleSymbol: "equal",
		ruleVal: "应急资源",
		text: {
			fontSize: "14px",
			fontFamily: "Microsoft Yahei",
			fontWeight: "normal",
			color: "#ffffff",
		},
		defaultIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／应急资源@2x-tPBXPABQT7Gw3TWsuuE3Bi.png",
		highIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／应急资源@2x-tPBXPABQT7Gw3TWsuuE3Bi.png",
		columnTitle: "状态75",
	},
	{
		id: "77",
		key: 1671675371044,
		name: "状态77",
		ruleSymbol: "equal",
		ruleVal: "购物中心",
		text: {
			fontSize: "14px",
			fontFamily: "Microsoft Yahei",
			fontWeight: "normal",
			color: "#ffffff",
		},
		defaultIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／购物服务111@2x.png",
		highIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／购物服务111@2x.png",
		columnTitle: "状态76",
	},
	{
		id: "78",
		key: 1672309605297,
		name: "状态78",
		ruleSymbol: "equal",
		ruleVal: "电梯",
		text: {
			fontSize: "14px",
			fontFamily: "Microsoft Yahei",
			fontWeight: "normal",
			color: "#ffffff",
		},
		defaultIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／电梯@2x-skJovoYn2AQeaTq5Cvp7QM.png",
		highIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／电梯@2x-skJovoYn2AQeaTq5Cvp7QM.png",
		columnTitle: "状态77",
	},
	{
		id: "79",
		key: 1672309628876,
		name: "状态79",
		ruleSymbol: "equal",
		ruleVal: "监测对象",
		text: {
			fontSize: "14px",
			fontFamily: "Microsoft Yahei",
			fontWeight: "normal",
			color: "#ffffff",
		},
		defaultIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／监测对象 copy@2x.png",
		highIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／监测对象 copy@2x.png",
		columnTitle: "状态78",
	},
	{
		id: "80",
		key: 1672309653906,
		name: "状态80",
		ruleSymbol: "equal",
		ruleVal: "视频监控",
		text: {
			fontSize: "14px",
			fontFamily: "Microsoft Yahei",
			fontWeight: "normal",
			color: "#ffffff",
		},
		defaultIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／监视频监控@2x-xobF1vEmKjqqcw5XHkKPhQ.png",
		highIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／监视频监控@2x-xobF1vEmKjqqcw5XHkKPhQ.png",
		columnTitle: "状态79",
	},
	{
		id: "81",
		key: 1672309676061,
		name: "状态81",
		ruleSymbol: "equal",
		ruleVal: "监测设备",
		text: {
			fontSize: "14px",
			fontFamily: "Microsoft Yahei",
			fontWeight: "normal",
			color: "#ffffff",
		},
		defaultIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／监测设备@2x-vb3yUfQSr9CghCooNQ2Ac5.png",
		highIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／监测设备@2x-vb3yUfQSr9CghCooNQ2Ac5.png",
		columnTitle: "状态80",
	},
	{
		id: "82",
		key: 1672309696878,
		name: "状态82",
		ruleSymbol: "equal",
		ruleVal: "报警信息",
		text: {
			fontSize: "14px",
			fontFamily: "Microsoft Yahei",
			fontWeight: "normal",
			color: "#ffffff",
		},
		defaultIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／行业报警.png",
		highIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／行业报警.png",
		columnTitle: "状态81",
	},
	{
		id: "83",
		key: 1672309716621,
		name: "状态83",
		ruleSymbol: "equal",
		ruleVal: "电梯困人报警",
		text: {
			fontSize: "14px",
			fontFamily: "Microsoft Yahei",
			fontWeight: "normal",
			color: "#ffffff",
		},
		defaultIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／电梯困人报警@2x-nnhrmq9k2Q5nGXisNbDL7D.png",
		highIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／电梯困人报警@2x-nnhrmq9k2Q5nGXisNbDL7D.png",
		columnTitle: "状态82",
	},
	{
		id: "84",
		key: 1672309750225,
		name: "状态84",
		ruleSymbol: "equal",
		ruleVal: "电梯监测设备",
		text: {
			fontSize: "14px",
			fontFamily: "Microsoft Yahei",
			fontWeight: "normal",
			color: "#ffffff",
		},
		defaultIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／电梯监测设备@2x.png",
		highIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／电梯监测设备@2x.png",
		columnTitle: "状态83",
	},
	{
		id: "85",
		key: 1678171079655,
		name: "应急队伍",
		ruleSymbol: "equal",
		ruleVal: "应急队伍",
		text: {
			fontSize: "14px",
			fontFamily: "Microsoft Yahei",
			fontWeight: "normal",
			color: "#ffffff",
		},
		defaultIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／应急救援队伍@2x-s8apyKzuo1DCAsCMu1uvdD.png",
		highIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／应急救援队伍@2x-s8apyKzuo1DCAsCMu1uvdD.png",
		columnTitle: "状态84",
	},
	{
		id: "86",
		key: 1681525244012,
		name: "行政区范围",
		ruleSymbol: "equal",
		ruleVal: "行政区范围",
		text: {
			fontSize: "14px",
			fontFamily: "Microsoft Yahei",
			fontWeight: "normal",
			color: "#ffffff",
		},
		defaultIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／行政区范围@2x (1).png",
		highIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／行政区范围@2x (1).png",
		columnTitle: "状态85",
	},
	{
		id: "87",
		key: 1681525272783,
		name: "社区范围",
		ruleSymbol: "equal",
		ruleVal: "社区范围",
		text: {
			fontSize: "14px",
			fontFamily: "Microsoft Yahei",
			fontWeight: "normal",
			color: "#ffffff",
		},
		defaultIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／社区范围@2x (1).png",
		highIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／社区范围@2x (1).png",
		columnTitle: "状态86",
	},
	{
		id: "88",
		key: 1681525318254,
		name: "街道范围",
		ruleSymbol: "equal",
		ruleVal: "街道范围",
		text: {
			fontSize: "14px",
			fontFamily: "Microsoft Yahei",
			fontWeight: "normal",
			color: "#ffffff",
		},
		defaultIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／街道范围@2x (1).png",
		highIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／街道范围@2x (1).png",
		columnTitle: "状态87",
	},
	{
		id: "89",
		key: 1681525456016,
		name: "行政区划",
		ruleSymbol: "equal",
		ruleVal: "行政区划",
		text: {
			fontSize: "14px",
			fontFamily: "Microsoft Yahei",
			fontWeight: "normal",
			color: "#ffffff",
		},
		defaultIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／行政区点位@2x-cBMYS7XDF4XdSMfLCXt77w.png",
		highIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／行政区点位@2x-cBMYS7XDF4XdSMfLCXt77w.png",
		columnTitle: "状态88",
	},
	{
		id: "90",
		key: 1681716553474,
		name: "行政区域",
		ruleSymbol: "equal",
		ruleVal: "行政区域",
		text: {
			fontSize: "14px",
			fontFamily: "Microsoft Yahei",
			fontWeight: "normal",
			color: "#ffffff",
		},
		defaultIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／行政区点位@2x-cBMYS7XDF4XdSMfLCXt77w.png",
		highIcon:
			"/iocoss/datai/screen/1598510631806693376/images/icon／行政区点位@2x-cBMYS7XDF4XdSMfLCXt77w.png",
		columnTitle: "状态89",
	},
];
let treeKey = "daa24582f95c4128a7eec648ab28c767";
let tarArr = DataI.getComList(treeKey)[0].customStyles.iconTab.status;
list.forEach((item) => {
	let flag = true;
	tarArr.forEach((item2) => {
		if (item.ruleVal === item2.ruleVal) {
			item2.defaultIcon = item.defaultIcon;
			item2.highIcon = item.highIcon;
			flag = false;
		}
	});
	if (flag) {
		tarArr.push(item);
	}
});
