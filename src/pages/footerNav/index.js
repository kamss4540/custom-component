import Nav from "./nav";

const mockData1 = [
	{
		name: "行业态势",
		path: "/industryTrend",
	},
	{
		name: "部门态势",
		path: "/industryTrend",
	},
	{
		name: "区域态势",
		path: "/industryTrend",
	},
	{
		name: "安全专题",
		path: "/industryTrend",
	},
	// {
	// 	name: "安全运行",
	// 	path: "/industryTrend",
	// },
];

const FooterNav = () => {
	return <Nav data={mockData1} />;
};

export default FooterNav;
