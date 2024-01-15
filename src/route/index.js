import { createBrowserRouter } from "react-router-dom";
import FooterNav from "@/pages/footerNav";

const router = createBrowserRouter([
	{
		path: "/",
		element: (
			<div>
				<h1>Hello World</h1>
				{/* <Link to="about">About Us</Link> */}
			</div>
		),
	},
	{
		path: "about",
		element: <div>About</div>,
	},
	{
		path: "footerNav",
		element: <FooterNav />,
	},
]);

export default router;
