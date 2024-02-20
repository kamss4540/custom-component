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
import React, { useMemo } from "react";
import { useNavigate } from "react-router-dom";

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
const App = (props) => {
	const { data } = props;

	// const navigate = useNavigate();

	const items = useMemo(() => {
		return data.map((item) => ({
			key: item.path,
			label: item.name,
			extra: item,
		}));
	}, [data]);

	const onClick = (e) => {
		console.log("click ", e);
		// navigate(e.key);
	};

	return (
		<Sider width={200} className="site-layout-background">
			<Menu
				mode="inline"
				// defaultSelectedKeys={["1"]}
				// defaultOpenKeys={["sub1"]}
				style={{
					height: "100%",
					borderRight: 0,
				}}
				items={items}
				onClick={onClick}
			/>
		</Sider>
	);
};
export default App;
