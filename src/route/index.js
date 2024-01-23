import { createBrowserRouter } from "react-router-dom";
import FooterNav from "@/pages/footerNav";
import AnalysisTree from "@/pages/analysisTree";

const router = createBrowserRouter([
	{
		path: "/",
		element: (
			<div>
				<h1>Hello World</h1>
				{/* <Link to="about">About Us</Link> */}
			</div>
		),
		isMenu: false,
	},
	{
		path: "about",
		element: <div>About</div>,
		isMenu: false,
	},
	{
		path: "h1",
		name: "nav 1",
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
		],
	},
]);

export default router;
