import {
	LaptopOutlined,
	NotificationOutlined,
	UserOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu } from "antd";
import React, { useMemo } from "react";
import Sider from "./Sider";
import router from "@/route";

const { Header, Content } = Layout;

const items = router.routes
	.filter((item) => !item.hidden)
	.map((item) => ({
		key: item.path,
		label: item.name,
		extra: item,
	}));
const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
	(icon, index) => {
		const key = String(index + 1);
		return {
			key: `sub${key}`,
			icon: React.createElement(icon),
			label: `subnav ${key}`,
			children: new Array(4).fill(null).map((_, j) => {
				const subKey = index * 4 + j + 1;
				return {
					key: subKey,
					label: `option${subKey}`,
				};
			}),
		};
	}
);

const MyLayout = (props) => {
	const { children } = props;

	const onHeaderClick = (e) => {
		console.log("onHeaderClick=>", e.item);
	};

	const item3 = useMemo(() => {
		return items[0].extra.children.map((item) => ({
			key: item.path,
			label: item.name,
			extra: item,
		}));
	}, [items]);

	console.log("items3=>", item3);

	return (
		<Layout style={{ height: "100%" }}>
			<Header className="header">
				<div className="logo" />
				<Menu
					theme="dark"
					mode="horizontal"
					defaultSelectedKeys={[items[0].key]}
					items={items}
					onClick={onHeaderClick}
				/>
			</Header>
			<Layout>
				<Sider data={items[0].extra.children} />
				<Layout
					style={{
						padding: "0 24px 24px",
					}}
				>
					<Breadcrumb
						style={{
							margin: "16px 0",
						}}
					>
						<Breadcrumb.Item>Home~</Breadcrumb.Item>
						<Breadcrumb.Item>List</Breadcrumb.Item>
						<Breadcrumb.Item>App</Breadcrumb.Item>
					</Breadcrumb>
					<Content
						className="site-layout-background"
						style={{
							padding: 24,
							margin: 0,
							minHeight: 280,
						}}
					>
						{children}
					</Content>
				</Layout>
			</Layout>
		</Layout>
	);
};
export default MyLayout;
