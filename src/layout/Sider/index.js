import {
	AppstoreOutlined,
	BarChartOutlined,
	CloudOutlined,
	ShopOutlined,
	TeamOutlined,
	UploadOutlined,
	UserOutlined,
	VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import React from "react";
const { Header, Content, Footer, Sider } = Layout;
const items = [
	UserOutlined,
	VideoCameraOutlined,
	UploadOutlined,
	BarChartOutlined,
	CloudOutlined,
	AppstoreOutlined,
	TeamOutlined,
	ShopOutlined,
].map((icon, index) => ({
	key: String(index + 1),
	icon: React.createElement(icon),
	label: `nav ${index + 1}`,
}));
const App = () => (
	<Sider width={200} className="site-layout-background">
		<Menu
			mode="inline"
			defaultSelectedKeys={["1"]}
			defaultOpenKeys={["sub1"]}
			style={{
				height: "100%",
				borderRight: 0,
			}}
			items={items}
		/>
	</Sider>
);
export default App;
