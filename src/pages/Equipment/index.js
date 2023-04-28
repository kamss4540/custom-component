import { Tabs, ConfigProvider, Empty } from "antd";
import styles from "./index.module.less";
import Element from "./Element";
import zhCN from "antd/es/locale/zh_CN";

const { TabPane } = Tabs;

const Equipment = (props) => {
	const { data } = props;

	return (
		<div className={styles.eq_frame}>
			<ConfigProvider locale={zhCN}>
				{data?.length ? (
					<Tabs
						defaultActiveKey="1"
						tabPosition="left"
						className={styles.equipment_layout}
					>
						{data?.length
							? data.map((item) => (
									<TabPane
										tab={item.attr_ItemName}
										key={item.sys_moid}
										className={styles.tabPane}
									>
										<Element data={item} />
									</TabPane>
							  ))
							: null}
					</Tabs>
				) : (
					<Empty />
				)}
			</ConfigProvider>
		</div>
	);
};

export default Equipment;
