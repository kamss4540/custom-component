export default {
	autoModel: [
		{
			modelName: "气体持续扩散模型",
			modelCode: "hcDiffuseCmbi",
			legendTree: {
				checkedKeys: [
					"爆炸上限",
					"爆炸下限",
					"人员死亡",
					"人员重伤",
					"人员轻伤",
				],
				expandedKeys: ["爆炸", "毒性"],
				treeData: [
					{
						id: "爆炸",
						title: "爆炸",
						key: "爆炸",
						children: [
							{
								id: "爆炸上限",
								title: "爆炸上限",
								key: "爆炸上限",
								color: "rgba(255, 0, 0, 0.8)",
							},
							{
								id: "爆炸下限",
								title: "爆炸下限",
								key: "爆炸下限",
								color: "rgba(255, 105, 0, 0.8)",
							},
						],
					},
					{
						id: "毒性",
						title: "毒性",
						key: "毒性",
						children: [
							{
								id: "人员死亡",
								title: "人员死亡",
								key: "人员死亡",
								color: "rgba(255, 0, 0, 0.8)",
							},
							{
								id: "人员重伤",
								title: "人员重伤",
								key: "人员重伤",
								color: "rgba(255, 105, 0, 0.8)",
							},
							{
								id: "人员轻伤",
								title: "人员轻伤",
								key: "人员轻伤",
								color: "rgba(255, 255, 0, 0.8)",
							},
						],
					},
				],
			},
		},
		{
			modelName: "气体瞬时扩散模型",
			modelCode: "hcDiffuseInstant",
			legendTree: {
				checkedKeys: [
					"爆炸上限",
					"爆炸下限",
					"人员死亡",
					"人员重伤",
					"人员轻伤",
				],
				expandedKeys: ["爆炸", "毒性"],
				treeData: [
					{
						id: "爆炸",
						title: "爆炸",
						key: "爆炸",
						children: [
							{
								id: "爆炸上限",
								title: "爆炸上限",
								key: "爆炸上限",
								color: "rgba(255, 0, 0, 0.8)",
							},
							{
								id: "爆炸下限",
								title: "爆炸下限",
								key: "爆炸下限",
								color: "rgba(255, 105, 0, 0.8)",
							},
						],
					},
					{
						id: "毒性",
						title: "毒性",
						key: "毒性",
						children: [
							{
								id: "人员死亡",
								title: "人员死亡",
								key: "人员死亡",
								color: "rgba(255, 0, 0, 0.8)",
							},
							{
								id: "人员重伤",
								title: "人员重伤",
								key: "人员重伤",
								color: "rgba(255, 105, 0, 0.8)",
							},
							{
								id: "人员轻伤",
								title: "人员轻伤",
								key: "人员轻伤",
								color: "rgba(255, 255, 0, 0.8)",
							},
						],
					},
				],
			},
		},
		{
			modelName: "重气持续扩散模型",
			modelCode: "hcHeavyDiffuseContinue",
			legendTree: {
				checkedKeys: ["爆炸上限", "爆炸下限", "人员死亡"],
				expandedKeys: ["爆炸", "毒性"],
				treeData: [
					{
						id: "爆炸",
						title: "爆炸",
						key: "爆炸",
						children: [
							{
								id: "爆炸上限",
								title: "爆炸上限",
								key: "爆炸上限",
								color: "rgba(255, 0, 0, 0.8)",
							},
							{
								id: "爆炸下限",
								title: "爆炸下限",
								key: "爆炸下限",
								color: "rgba(255, 105, 0, 0.8)",
							},
						],
					},
					{
						id: "毒性",
						title: "毒性",
						key: "毒性",
						children: [
							{
								id: "人员死亡",
								title: "人员死亡",
								key: "人员死亡",
								color: "rgba(255, 0, 0, 0.8)",
							},
						],
					},
				],
			},
		},
		{
			modelName: "重气瞬时扩散模型",
			modelCode: "hcHeavyDiffuseInstant",
			legendTree: {
				checkedKeys: ["爆炸上限", "人员死亡"],
				expandedKeys: ["爆炸", "毒性"],
				treeData: [
					{
						id: "爆炸",
						title: "爆炸",
						key: "爆炸",
						children: [
							{
								id: "爆炸上限",
								title: "爆炸上限",
								key: "爆炸上限",
								color: "rgba(255, 0, 0, 0.8)",
							},
						],
					},
					{
						id: "毒性",
						title: "毒性",
						key: "毒性",
						children: [
							{
								id: "人员死亡",
								title: "人员死亡",
								key: "人员死亡",
								color: "rgba(255, 0, 0, 0.8)",
							},
						],
					},
				],
			},
		},
		{
			modelName: "沸腾液体扩展蒸气爆炸模型",
			modelCode: "hcBleve",
			legendTree: {
				checkedKeys: ["三度烧伤区", "二度烧伤区", "一度烧伤区"],
				expandedKeys: ["烧伤区"],
				treeData: [
					{
						id: "烧伤区",
						title: "烧伤区",
						key: "烧伤区",
						children: [
							{
								id: "三度烧伤区",
								title: "三度烧伤区",
								key: "三度烧伤区",
								color: "rgba(255, 0, 0, 0.8)",
							},
							{
								id: "二度烧伤区",
								title: "二度烧伤区",
								key: "二度烧伤区",
								color: "rgba(255, 105, 0, 0.8)",
							},
							{
								id: "一度烧伤区",
								title: "一度烧伤区",
								key: "一度烧伤区",
								color: "rgba(255, 255, 0, 0.8)",
							},
						],
					},
				],
			},
		},
		{
			modelName: "液池火模型",
			modelCode: "hcMultiPool",
			legendTree: {
				checkedKeys: ["三度烧伤区", "二度烧伤区", "一度烧伤区"],
				expandedKeys: ["烧伤区"],
				treeData: [
					{
						id: "烧伤区",
						title: "烧伤区",
						key: "烧伤区",
						children: [
							{
								id: "三度烧伤区",
								title: "三度烧伤区",
								key: "三度烧伤区",
								color: "rgba(255, 0, 0, 0.8)",
							},
							{
								id: "二度烧伤区",
								title: "二度烧伤区",
								key: "二度烧伤区",
								color: "rgba(255, 105, 0, 0.8)",
							},
							{
								id: "一度烧伤区",
								title: "一度烧伤区",
								key: "一度烧伤区",
								color: "rgba(255, 255, 0, 0.8)",
							},
						],
					},
				],
			},
		},
		{
			modelName: "喷射火模型",
			modelCode: "hcSprayFire",
			legendTree: {
				checkedKeys: ["三度烧伤区", "二度烧伤区", "一度烧伤区"],
				expandedKeys: ["烧伤区"],
				treeData: [
					{
						id: "烧伤区",
						title: "烧伤区",
						key: "烧伤区",
						children: [
							{
								id: "三度烧伤区",
								title: "三度烧伤区",
								key: "三度烧伤区",
								color: "rgba(255, 0, 0, 0.8)",
							},
							{
								id: "二度烧伤区",
								title: "二度烧伤区",
								key: "二度烧伤区",
								color: "rgba(255, 105, 0, 0.8)",
							},
							{
								id: "一度烧伤区",
								title: "一度烧伤区",
								key: "一度烧伤区",
								color: "rgba(255, 255, 0, 0.8)",
							},
						],
					},
				],
			},
		},
		{
			modelName: "气体蒸汽云爆炸模型",
			modelCode: "hcExplode",
			legendTree: {
				checkedKeys: [
					"人员灾损:三级:死亡",
					"人员灾损:二级:重伤",
					"人员灾损:一级:轻伤",
					"建筑物灾损:五级:倒塌",
					"建筑物灾损:四级:严重破坏",
					"建筑物灾损:三级:中度破坏",
					"建筑物灾损:二级:轻度破坏",
					"建筑物灾损:一级:玻璃破坏",
				],
				expandedKeys: ["人员灾损", "建筑物灾损"],
				treeData: [
					{
						id: "人员灾损",
						title: "人员灾损",
						key: "人员灾损",
						children: [
							{
								id: "人员灾损:三级:死亡",
								title: "人员灾损:三级:死亡",
								key: "人员灾损:三级:死亡",
								color: "rgba(255, 0, 0, 0.8)",
							},
							{
								id: "人员灾损:二级:重伤",
								title: "人员灾损:二级:重伤",
								key: "人员灾损:二级:重伤",
								color: "rgba(255, 105, 0, 0.8)",
							},
							{
								id: "人员灾损:一级:轻伤",
								title: "人员灾损:一级:轻伤",
								key: "人员灾损:一级:轻伤",
								color: "rgba(255, 255, 0, 0.8)",
							},
						],
					},
					{
						id: "建筑物灾损",
						title: "建筑物灾损",
						key: "建筑物灾损",
						children: [
							{
								id: "建筑物灾损:五级:倒塌",
								title: "建筑物灾损:五级:倒塌",
								key: "建筑物灾损:五级:倒塌",
								color: "rgba(255, 0, 0, 0.8)",
							},
							{
								id: "建筑物灾损:四级:严重破坏",
								title: "建筑物灾损:四级:严重破坏",
								key: "建筑物灾损:四级:严重破坏",
								color: "rgba(255, 105, 0, 0.8)",
							},
							{
								id: "建筑物灾损:三级:中度破坏",
								title: "建筑物灾损:三级:中度破坏",
								key: "建筑物灾损:三级:中度破坏",
								color: "rgba(255, 255, 0, 0.8)",
							},
							{
								id: "建筑物灾损:二级:轻度破坏",
								title: "建筑物灾损:二级:轻度破坏",
								key: "建筑物灾损:二级:轻度破坏",
								color: "rgba(0, 0, 255, 0.8)",
							},
							{
								id: "建筑物灾损:一级:玻璃破坏",
								title: "建筑物灾损:一级:玻璃破坏",
								key: "建筑物灾损:一级:玻璃破坏",
								color: "rgba(0, 255, 255, 0.8)",
							},
						],
					},
				],
			},
		},
	],
	evoModel: [
		{
			modelName: "气体瞬时扩散模型",
			modelCode: "hcDiffuseInstant",
			legendTree: {
				checkedKeys: [
					"爆炸上限",
					"爆炸下限",
					"人员死亡",
					"人员重伤",
					"人员轻伤",
				],
				expandedKeys: ["爆炸", "毒性"],
				treeData: [
					{
						id: "爆炸",
						title: "爆炸",
						key: "爆炸",
						children: [
							{
								id: "爆炸上限",
								title: "爆炸上限",
								key: "爆炸上限",
								color: "rgba(255, 0, 0, 0.8)",
							},
							{
								id: "爆炸下限",
								title: "爆炸下限",
								key: "爆炸下限",
								color: "rgba(255, 105, 0, 0.8)",
							},
						],
					},
					{
						id: "毒性",
						title: "毒性",
						key: "毒性",
						children: [
							{
								id: "人员死亡",
								title: "人员死亡",
								key: "人员死亡",
								color: "rgba(255, 0, 0, 0.8)",
							},
							{
								id: "人员重伤",
								title: "人员重伤",
								key: "人员重伤",
								color: "rgba(255, 105, 0, 0.8)",
							},
							{
								id: "人员轻伤",
								title: "人员轻伤",
								key: "人员轻伤",
								color: "rgba(255, 255, 0, 0.8)",
							},
						],
					},
				],
			},
		},
		{
			modelName: "重气瞬时扩散模型",
			modelCode: "hcHeavyDiffuseInstant",
			legendTree: {
				checkedKeys: ["爆炸上限", "人员死亡"],
				expandedKeys: ["爆炸", "毒性"],
				treeData: [
					{
						id: "爆炸",
						title: "爆炸",
						key: "爆炸",
						children: [
							{
								id: "爆炸上限",
								title: "爆炸上限",
								key: "爆炸上限",
								color: "rgba(255, 0, 0, 0.8)",
							},
						],
					},
					{
						id: "毒性",
						title: "毒性",
						key: "毒性",
						children: [
							{
								id: "人员死亡",
								title: "人员死亡",
								key: "人员死亡",
								color: "rgba(255, 0, 0, 0.8)",
							},
						],
					},
				],
			},
		},
		{
			modelName: "液池火模型",
			modelCode: "hcMultiPool",
			legendTree: {
				checkedKeys: ["三度烧伤区", "二度烧伤区", "一度烧伤区"],
				expandedKeys: ["烧伤区"],
				treeData: [
					{
						id: "烧伤区",
						title: "烧伤区",
						key: "烧伤区",
						children: [
							{
								id: "三度烧伤区",
								title: "三度烧伤区",
								key: "三度烧伤区",
								color: "rgba(255, 0, 0, 0.8)",
							},
							{
								id: "二度烧伤区",
								title: "二度烧伤区",
								key: "二度烧伤区",
								color: "rgba(255, 105, 0, 0.8)",
							},
							{
								id: "一度烧伤区",
								title: "一度烧伤区",
								key: "一度烧伤区",
								color: "rgba(255, 255, 0, 0.8)",
							},
						],
					},
				],
			},
		},
		{
			modelName: "重气持续扩散模型",
			modelCode: "hcHeavyDiffuseContinue",
			legendTree: {
				checkedKeys: ["爆炸上限", "爆炸下限", "人员死亡"],
				expandedKeys: ["爆炸", "毒性"],
				treeData: [
					{
						id: "爆炸",
						title: "爆炸",
						key: "爆炸",
						children: [
							{
								id: "爆炸上限",
								title: "爆炸上限",
								key: "爆炸上限",
								color: "rgba(255, 0, 0, 0.8)",
							},
							{
								id: "爆炸下限",
								title: "爆炸下限",
								key: "爆炸下限",
								color: "rgba(255, 105, 0, 0.8)",
							},
						],
					},
					{
						id: "毒性",
						title: "毒性",
						key: "毒性",
						children: [
							{
								id: "人员死亡",
								title: "人员死亡",
								key: "人员死亡",
								color: "rgba(255, 0, 0, 0.8)",
							},
						],
					},
				],
			},
		},
		{
			modelName: "气体持续扩散模型",
			modelCode: "hcDiffuseCmbi",
			legendTree: {
				checkedKeys: [
					"爆炸上限",
					"爆炸下限",
					"人员死亡",
					"人员重伤",
					"人员轻伤",
				],
				expandedKeys: ["爆炸", "毒性"],
				treeData: [
					{
						id: "爆炸",
						title: "爆炸",
						key: "爆炸",
						children: [
							{
								id: "爆炸上限",
								title: "爆炸上限",
								key: "爆炸上限",
								color: "rgba(255, 0, 0, 0.8)",
							},
							{
								id: "爆炸下限",
								title: "爆炸下限",
								key: "爆炸下限",
								color: "rgba(255, 105, 0, 0.8)",
							},
						],
					},
					{
						id: "毒性",
						title: "毒性",
						key: "毒性",
						children: [
							{
								id: "人员死亡",
								title: "人员死亡",
								key: "人员死亡",
								color: "rgba(255, 0, 0, 0.8)",
							},
							{
								id: "人员重伤",
								title: "人员重伤",
								key: "人员重伤",
								color: "rgba(255, 105, 0, 0.8)",
							},
							{
								id: "人员轻伤",
								title: "人员轻伤",
								key: "人员轻伤",
								color: "rgba(255, 255, 0, 0.8)",
							},
						],
					},
				],
			},
		},
		{
			modelName: "气体蒸汽云爆炸模型",
			modelCode: "hcExplode",
			legendTree: {
				checkedKeys: [
					"人员灾损:三级:死亡",
					"人员灾损:二级:重伤",
					"人员灾损:一级:轻伤",
					"建筑物灾损:五级:倒塌",
					"建筑物灾损:四级:严重破坏",
					"建筑物灾损:三级:中度破坏",
					"建筑物灾损:二级:轻度破坏",
					"建筑物灾损:一级:玻璃破坏",
				],
				expandedKeys: ["人员灾损", "建筑物灾损"],
				treeData: [
					{
						id: "人员灾损",
						title: "人员灾损",
						key: "人员灾损",
						children: [
							{
								id: "人员灾损:三级:死亡",
								title: "人员灾损:三级:死亡",
								key: "人员灾损:三级:死亡",
								color: "rgba(255, 0, 0, 0.8)",
							},
							{
								id: "人员灾损:二级:重伤",
								title: "人员灾损:二级:重伤",
								key: "人员灾损:二级:重伤",
								color: "rgba(255, 105, 0, 0.8)",
							},
							{
								id: "人员灾损:一级:轻伤",
								title: "人员灾损:一级:轻伤",
								key: "人员灾损:一级:轻伤",
								color: "rgba(255, 255, 0, 0.8)",
							},
						],
					},
					{
						id: "建筑物灾损",
						title: "建筑物灾损",
						key: "建筑物灾损",
						children: [
							{
								id: "建筑物灾损:五级:倒塌",
								title: "建筑物灾损:五级:倒塌",
								key: "建筑物灾损:五级:倒塌",
								color: "rgba(255, 0, 0, 0.8)",
							},
							{
								id: "建筑物灾损:四级:严重破坏",
								title: "建筑物灾损:四级:严重破坏",
								key: "建筑物灾损:四级:严重破坏",
								color: "rgba(255, 105, 0, 0.8)",
							},
							{
								id: "建筑物灾损:三级:中度破坏",
								title: "建筑物灾损:三级:中度破坏",
								key: "建筑物灾损:三级:中度破坏",
								color: "rgba(255, 255, 0, 0.8)",
							},
							{
								id: "建筑物灾损:二级:轻度破坏",
								title: "建筑物灾损:二级:轻度破坏",
								key: "建筑物灾损:二级:轻度破坏",
								color: "rgba(0, 0, 255, 0.8)",
							},
							{
								id: "建筑物灾损:一级:玻璃破坏",
								title: "建筑物灾损:一级:玻璃破坏",
								key: "建筑物灾损:一级:玻璃破坏",
								color: "rgba(0, 255, 255, 0.8)",
							},
						],
					},
				],
			},
		},
		{
			modelName: "喷射火模型",
			modelCode: "hcSprayFire",
			legendTree: {
				checkedKeys: ["三度烧伤区", "二度烧伤区", "一度烧伤区"],
				expandedKeys: ["烧伤区"],
				treeData: [
					{
						id: "烧伤区",
						title: "烧伤区",
						key: "烧伤区",
						children: [
							{
								id: "三度烧伤区",
								title: "三度烧伤区",
								key: "三度烧伤区",
								color: "rgba(255, 0, 0, 0.8)",
							},
							{
								id: "二度烧伤区",
								title: "二度烧伤区",
								key: "二度烧伤区",
								color: "rgba(255, 105, 0, 0.8)",
							},
							{
								id: "一度烧伤区",
								title: "一度烧伤区",
								key: "一度烧伤区",
								color: "rgba(255, 255, 0, 0.8)",
							},
						],
					},
				],
			},
		},
		{
			modelName: "沸腾液体扩展蒸气爆炸模型",
			modelCode: "hcBleve",
			legendTree: {
				checkedKeys: ["三度烧伤区", "二度烧伤区", "一度烧伤区"],
				expandedKeys: ["烧伤区"],
				treeData: [
					{
						id: "烧伤区",
						title: "烧伤区",
						key: "烧伤区",
						children: [
							{
								id: "三度烧伤区",
								title: "三度烧伤区",
								key: "三度烧伤区",
								color: "rgba(255, 0, 0, 0.8)",
							},
							{
								id: "二度烧伤区",
								title: "二度烧伤区",
								key: "二度烧伤区",
								color: "rgba(255, 105, 0, 0.8)",
							},
							{
								id: "一度烧伤区",
								title: "一度烧伤区",
								key: "一度烧伤区",
								color: "rgba(255, 255, 0, 0.8)",
							},
						],
					},
				],
			},
		},
	],
};
