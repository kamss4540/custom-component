import React from "react";
import { Table } from "antd";
import styles from "./index.module.less";

const TableGroup = (props) => {
	const { dataSource1, dataSource2, columns1, columns2 } = props;

	return (
		<div className={styles.tableGroup}>
			<Table
				dataSource={dataSource1}
				columns={columns1}
				pagination={false}
				rowSelection={{
					type: "radio",
				}}
				rowClassName={(record, index) =>
					index % 2 === 0 ? styles.evenRow : styles.oddRow
				}
				scroll={{
					y: true,
				}}
			/>

			<Table
				dataSource={dataSource2}
				columns={columns2}
				pagination={false}
				scroll={{
					y: true,
				}}
				rowClassName={(record, index) =>
					index % 2 === 0 ? styles.evenRow : styles.oddRow
				}
			/>
		</div>
	);
};

export default TableGroup;
