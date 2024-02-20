import { createBrowserRouter } from "react-router-dom";
import FooterNav from "@/pages/footerNav";
import AnalysisTree from "@/pages/analysisTree";
import Pie from "@/pages/pie";
import Pie3 from "@/pages/3pie";

const router = createBrowserRouter([
	{
		path: "/",
		element: (
			<div>
				<h1>Hello World</h1>
				{/* <Link to="about">About Us</Link> */}
			</div>
		),
		hidden: true,
	},
	{
		path: "about",
		element: <div>About</div>,
		hidden: true,
	},
	{
		path: "h1",
		name: "一类",
		children: [
			{
				path: "footerNav",
				name: "驾驶舱底部导航",
				element: <FooterNav />,
			},
			{
				path: "analysisTree",
				name: "研判分析树",
				element: <AnalysisTree />,
			},
			{
				path: "pie",
				name: "一个圆",
				element: <Pie />,
			},
			{
				path: "3pie",
				name: "三个圆",
				element: <Pie3 />,
			},
		],
	},
]);

export default router;
