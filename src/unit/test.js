var map2d = new YunliMap.Map({
	container: "map",
	layers: ["tianditu", "tianditu_anno"],
	zoom: 11,
	center: [116.39, 39.91],
});

var resultList = document.querySelector(".result_list");
var marker;
var timer = null;

const searchKeyword = (keyword) => {
	clearTimeout(timer); //取消少一次输入的延迟请求

	if (!keyword) {
		//没有关键词时清空并隐藏列表
		resultList.innerHTML = "";
		resultList.style.display = "none";
		return;
	}

	timer = setTimeout(function () {
		//延迟300毫秒请求接口

		YunliMap.searchPOI(
			{
				keyword, //关键字

				online: true, //请求在线数据
			},
			function (data) {
				//回调

				data.length
					? (resultList.style.display = "block")
					: (resultList.style.display = "none");

				resultList.innerHTML = "";

				data.forEach(function (item) {
					//遍历返回结果

					var eleLi = document.createElement("li");

					eleLi.innerHTML = `<span>${item.name}</span><i>${item.address}</i>`; //显示当前项名称和地址

					resultList.appendChild(eleLi);

					eleLi.onclick = function () {
						if (marker) marker.removeTo(map2d); //清除上一次点击添加的标记

						marker = new YunliMap.Marker({
							//添加标记
							icon: "http://172.30.3.102:31700/gis/static/images/marker.png",
							position: item.coordinate,
							offset: [-10, -28],
						});
						map2d.add(marker);

						map2d.fit({
							feature: marker,
						});
					};
				});
			}
		);
	}, 300);
}
