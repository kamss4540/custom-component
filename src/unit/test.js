globalEventEmitter.on("onVideoSelect_1612713203928182784", (e) => {
	console.info("onVideoSelect=>", e);
	$.get(e.videoUrl, (res) => {
		console.info("res=>", res);
		if (res.code === 0) {
			setStoreData(
				"store_group_d63riPukrhCqg2eXYvv7iw-iR4tZPWEvkHTNuQz3Cdxhf",
				res.data.ws_flv
			);
		} else if (res.code === 100) {
			setStoreData(
				"store_group_d63riPukrhCqg2eXYvv7iw-iR4tZPWEvkHTNuQz3Cdxhf",
				""
			);
		}
	});
});
