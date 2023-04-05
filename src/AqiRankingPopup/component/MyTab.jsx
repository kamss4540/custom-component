import React, { useState } from "react";
import styles from "./MyTab.module.less";

const Tab = ({ tab, activeTab, onTabClick }) => {
	const handleClick = () => {
		onTabClick(tab.id);
	};

	const isActive = activeTab === tab.id;

	return (
		<div
			className={`${styles.tab} ${isActive ? styles.active : ""}`}
			onClick={handleClick}
		>
			{tab.title}
		</div>
	);
};

const TabContent = ({ tab }) => {
	return <div className={styles.tab_content}>{tab.content}</div>;
};

const Tabs = (props) => {
	const { tabs } = props;
	const [activeTab, setActiveTab] = useState(tabs?.[0]?.id);

	const handleTabClick = (tabId) => {
		setActiveTab(tabId);
	};

	const activeTabIndex = tabs && tabs.findIndex((tab) => tab.id === activeTab);

	if (!tabs) return null;
	return (
		<div className={styles.tabs}>
			<div className={styles.tab_list}>
				{tabs.length
					? tabs.map((tab) => (
							<Tab
								key={tab.id}
								tab={tab}
								activeTab={activeTab}
								onTabClick={handleTabClick}
							/>
					  ))
					: null}
			</div>
			<div className={styles.tab_content_list}>
				<TabContent tab={tabs[activeTabIndex]} />
			</div>
		</div>
	);
};

export default Tabs;
