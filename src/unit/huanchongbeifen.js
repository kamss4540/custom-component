let treekey = "@com_aV7JgBSa5k1m2ZyGJg3Umv"; //类型
setTimeout(() => {
	let keyid = getDataByKey(
		"store_group_543cae17cbe0415bb57760303e974f9c-8thmxc1gpfqNhXVS4tBy35"
	).sys_moid; //装备1
	setStoreData(
		"store_group_543cae17cbe0415bb57760303e974f9c-5c9NhTF5Jd6yuSGdfEyb6p",
		[{ layerKey: treekey, dataId: [keyid], type: "定位" }]
	);
}, 1000); //定位2

let tree = [
	{
		key: treekey, //类型
		name: "处置装备",
		type: "定位",
	},
];

return tree;
