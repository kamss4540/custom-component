import React, { useEffect, useState } from "react";
import moment from "moment";
import MyChart from "./MyChart";

const Element = (props) => {
	const { data } = props;

	const [list, setList] = useState([]);

	useEffect(() => {
		fetchData();
	}, [data]);

	const fetchData = () => {
		const params = {
			itemType: data.sys_type,
			equipmentId: data.sys_moid,
			startTime: moment().startOf("year").format("YYYY-MM-DD HH:mm:ss"),
			endTime: moment().format("YYYY-MM-DD HH:mm:ss"),
		};
		let str = new URLSearchParams(params).toString();
		window.$.ajax({
			url: `/easydata/api/center/JK1642694429480001536?` + str,
			type: "GET",
			success: (res) => {
				if (res.code === "200") {
					setList(res.data);
				}
			},
		});
	};

	return (
		<div>
			{list.length
				? list.map((item, index) => <MyChart key={index} data={item} />)
				: null}
		</div>
	);
};

export default Element;
