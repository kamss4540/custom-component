data.data.filter((item) =>
	["超速报警", "疲劳驾驶", "当天累计驾驶超时", "线路偏移报警"].includes(
		item.alarmStatus
	)
);
let a = [
	{
		label: "报警类型",
		value: "",
	},
	{
		label: "超速报警",
		value: "超速报警",
	},
	{
		label: "疲劳驾驶",
		value: "疲劳驾驶",
	},
	{
		label: "当天累计驾驶超时",
		value: "当天累计驾驶超时",
	},
	{
		label: "线路偏移报警",
		value: "线路偏移报警",
	},
];

// 编写函数，变量data为接口的返回值，
// 函数的返回值为最终的过滤器结果，下面是一个例子

return data.data.filter((i) => {
	let flag = false;
	["超速报警", "疲劳驾驶", "当天累计驾驶超时", "线路偏移报警"].forEach((j) => {
		if (i.alarmStatus.includes(j)) {
			flag = true;
		}
	});
	return flag;
});
