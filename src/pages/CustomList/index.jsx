import { useState, useEffect, useRef } from "react";
import styles from "./index.module.less";
import mockData from "./mockData";

export default (props) => {
	const {
		data: {
			dataKey, // 数据key
			options: {
				// columns, // 列
				// rowKey, // 行key
				// interval, // 切换时间间隔
			},
			selectedKey, // 选中行key
		},
	} = props;

	const tableRef = useRef(null);
	const rowRef = useRef(null);
	const timerRef = useRef(null);

	const [rows, setRows] = useState([]);
	const [selectedRow, setSelectedRow] = useState(null);
	const [columns, setColumns] = useState([]);
	const [rowKey, setRowKey] = useState("");
	const [interval, setIntervalNum] = useState(null);

	useEffect(() => {
		getData();
		window.$tableRef = tableRef.current;
	}, [props.data]);

	// 获取数据
	const getData = () => {
		let _columns = props.data.options?.columns;
		_columns && setColumns(_columns);
		let _rowKey = props.data.options?.rowKey;
		_rowKey && setRowKey(_rowKey);
		let _interval = props.data.options?.interval;
		_interval && setIntervalNum(_interval);
		if (window.globalEventEmitter) {
			getRows(window.getDataByKey(dataKey));
			window.globalEventEmitter.on(dataKey, (e) => {
				getRows(e);
			});
			setSelectedRow(window.getDataByKey(selectedKey));
			window.globalEventEmitter.on(selectedKey, (e) => {
				setSelectedRow(e);
			});
		} else {
			setRows(mockData.data);
			setSelectedRow(mockData.selectedRow);
		}
	};

	const getRows = (val) => {
		if (val) {
			Object.hasOwnProperty.call(val, "list")
				? setRows(val.list)
				: setRows(val);
		} else {
			setRows([]);
		}
	};

	// 自动切换
	useEffect(() => {
		if (interval) {
			clearInterval(timerRef.current);
			timerRef.current = setInterval(() => {
				const selectedIndex = selectedRow
					? rows.findIndex((row) => row[rowKey] === selectedRow[rowKey])
					: -1;
				const nextIndex = (selectedIndex + 1) % rows.length;
				console.info('nextIndex=>', nextIndex);
				setSelectedRow(rows[nextIndex]);
				window.setStoreData &&
					window.setStoreData(selectedKey, rows[nextIndex]);
			}, interval);
		}
		return () => clearInterval(timerRef.current);
	}, [selectedRow, rows, interval]);

	// 点击行
	const handleRowClick = (row) => {
		setSelectedRow(row);
		window.setStoreData && window.setStoreData(selectedKey, row);
	};

	// 滚动到选中行
	useEffect(() => {
		if (rowRef.current) {
			if (
				rowRef.current.offsetTop >=
				tableRef.current.scrollTop + tableRef.current.clientHeight
			) {
				tableRef.current.scrollTop =
					rowRef.current.offsetTop - tableRef.current.clientHeight + 31;
			}
			if (rowRef.current.offsetTop < tableRef.current.scrollTop) {
				tableRef.current.scrollTop =
					rowRef.current.offsetTop < 31 ? 0 : rowRef.current.offsetTop - 31;
			}
		}
	}, [selectedRow]);

	return (
		<div className={styles.table_container} ref={tableRef}>
			<table>
				<thead>
					<tr>
						{columns?.length
							? columns.map((column) => (
									<th key={column.dataIndex}>{column.title}</th>
							  ))
							: null}
					</tr>
				</thead>
				<tbody>
					{rows.map((row, index) => (
						<tr
							key={index}
							onClick={() => handleRowClick(row)}
							className={
								JSON.stringify(selectedRow) === JSON.stringify(row)
									? styles.selected
									: ""
							}
							ref={selectedRow === row ? rowRef : null}
						>
							{columns?.length
								? columns.map((column) => (
										<td key={column.dataIndex}>{row[column.dataIndex]}</td>
								  ))
								: null}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};
