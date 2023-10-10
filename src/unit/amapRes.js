setTimeout(function(){
	console.info('地图区域查询 mmmmmmmmmmmmmmmmmmm start')
   let map = comList.get('@com_1d95771e8b584d7d92ee2898acbc1e84').instance._map; // 地图实例, key为二维地图中在线底图的key
   let mapDrawData = null; // 绘制区域信息
   let polylineText = null; // 文本标记
   let delMarker = null; // 删除标记
   let resultKey = 'store_group_4h3sfhvaCcHeb26ZMqrbPT-btppnjcAUbJvmiTsjVVT5j';  // 图层查询结果数据
   let resultPointsKey = 'store_group_4h3sfhvaCcHeb26ZMqrbPT-aXbo3s8jWkoiikz7N3xQsC'; // 单个图层选中点数据

   globalEventEmitter.on("drawAreaQuery", (data) => {
	   console.info('mmmmmmmmmmmmmmmmmmm drawAreaQuery')
	   if(mapDrawData){
		   clearAreaMap();
	   }
	   drawArea()
   })

   globalEventEmitter.on("areaTreeChange", (data) => {
	   console.info('areaTreeChange  mmmmmmmmmmmmmmmmmmm', data)
	   if(data && data.length == 1 && data[0].type == '定位'){
		   return
	   }
	   if(!mapDrawData){
		   return;
	   }
	   setTimeout(()=>{
		   queryLayerData();
	   }, 1000)
	   
   })  // 图层数选中图层变更

   function drawArea(){
	   let type = 'Circle';
	   map.drawFeature(type,{
		   // regularSides:regularSides,//边数，类型为Regular时生效
		   // regularSquare:regularSides==6,//边数为6时为正多边形，类型为Regular时生效
		   style: {
			   background: 'rgba(0, 101, 255, 0.20)',
			   borderColor: 'rgba(0, 101, 255, 1)',
			   borderWidth: 2
		   },
		   endStyle: {
			   background: 'rgba(0, 101, 255, 0.20)',
			   borderColor: 'rgba(0, 101, 255, 1)',
			   borderWidth: 2
		   },
		   start:function(){
			   console.info('开始绘制---------------') 
		   },
		   drawing: function(event){
			   // console.info('绘制中---------------', event);
			   addText(event);
		   },
		   end:function(event){
			   console.info('绘制完成---------------', event) 
			   event.stopDraw();
			   mapDrawData = event;
			   queryLayerData();
			   // map.remove(polylineText);
			   // map.remove(delMarker);
			   addText(mapDrawData);
			   addDelBtn(mapDrawData);

		   }
		   // setStoreData('store_group_6a5968043ad6474285802176f1eeb954-6cc91ccab518415a8ab5f63d45cc127c', event);  //绘制数据
	   });
   }

   function clearAreaMap(){
	   map.clearDraw();
	   map.remove(polylineText);
	   map.remove(delMarker);

	   mapDrawData = null;
	   polylineText = null;
	   delMarker = null;
	   
	   queryLayerData();
   }

   function queryLayerData(){
	   let result = []; // 查询结果集合
	   let drawData = mapDrawData; // getDataByKey('store_group_6a5968043ad6474285802176f1eeb954-6cc91ccab518415a8ab5f63d45cc127c') //绘制数据
	   let treeData =getDataByKey('store_group_40e6ff6d020948edafc41c91e0364956-3dc9a5e8a2b642709a0a980378463064'); //图层树选中值
	   setStoreData(resultKey, []);  // 选中图层及其对应点数据集合 （图层查询结果数据）
	   setStoreData(resultPointsKey, {}); // 默认选中第一个图层数据
	   console.info('treeData 2----------', treeData)
	   // addDrawMarker(drawData);
	   
	   treeData.forEach((v, i) => {
		   //   console.info('tree data',i, v)
		   let itemLayer = {
			   key: v.key,
			   layerName: v.name,
			   count: 0,
			   features: [],
			   icon: ''
		   }
		   if(comList.get(v.key).englishName != "BasePointLayer"){
			   return;
		   }

		   let getLayerFeatures = comList.get(v.key).instance.layer_instance.current_features //获取图层的全量数据
		   console.info(comList.get(v.key), 'treeData getLayerFeatures-----------', getLayerFeatures) //图层所有信息
		   
		   getLayerFeatures.forEach(i=>{
			   // item.hide();
			   if(drawData){
				   i.setVisible(false);
			   }else{
				   i.setVisible(true);
			   } // 如果已经绘制了区域，默认先隐藏所有已选图层点，再展示过滤后的点
			   
		   }) // 隐藏未覆盖到的数据

		   if(!drawData){
			   return;
		   }
		   //获取过滤的数据
		   let selecteds = map.spaceQueryOverlays({
			   coordinates: drawData.coordinates,
			   overlays: getLayerFeatures,
			   radius: drawData.radius,
			   // 矩形标绘返回坐标串实际为面数据
			   queryType: drawData.type === 'Rectangle' ? 'Polygon' : drawData.type
		   });

		   if(selecteds && selecteds.length){
			   itemLayer.count = selecteds.length;
		   }

		   selecteds.forEach((item, index) => {
			   // console.info('item-----', item instanceof YunliMap.Marker, item)
			   // item.show();
			   item.setVisible(true);

			   if (item instanceof YunliMap.Marker) {
				   item.setIcon(item.currentImg);  // item.currentImg
			   } else if (item instanceof YunliMap.Point) {
				   item.setStyle({
					   color: "red",
					   lineWidth: 6
				   });
			   } else if (item instanceof YunliMap.Polyline) {
				   item.setStyle({
					   color: "red",
					   lineWidth: 6
				   });
			   } else if (item instanceof YunliMap.Polygon) {
				   item.setStyle({
					   background: 'rgba(255,255,255,0.65)',
					   borderColor: 'red',
					   borderWidth: 2
				   });
			   }

			   let filterKey = comList.get(v.key)?._attr?.filterKey?.text || '';
			   item._extData.dataId = item._extData[filterKey]; // 获取地图子组件中 默认配置-指定的key字段 用于点定位
			   item._extData.layerKey = v.key;
			   
			   item._extData.index = index +1;
			   if(!item._extData.attr_ItemName){
				   item._extData.attr_ItemName = item._extData.ItemName || item._extData.Name;
			   }
			   itemLayer.icon = item.currentImg;
			   itemLayer.features.push(item._extData);
			   // 显示层级
			   // item.setZIndex(2);
		   });
		   console.info(itemLayer, 'NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN')
		   if(itemLayer.features.length){
			   result.push(itemLayer);
		   }
	   
	   })
	   result = result.map((item, index)=> {
		   item.index = index+1;
		   return item
	   })

	   console.info(result, 'NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN')

	   setStoreData(resultKey, result);  // 选中图层及其对应点数据集合
	   setStoreData(resultPointsKey, result[0]); // 默认选中第一个图层数据
   }

   function addDelBtn(drawData){
	   let circleQueryCenter = drawData.coordinates;

	   let degrees = YunliMap.metersToUnits(
		   circleQueryCenter,
		   drawData.radius
	   );
	   let delCoors = [circleQueryCenter[0]+degrees, circleQueryCenter[1]]; //获取点移动位置
	   delMarker = new YunliMap.Text({
		   coordinate: delCoors,
		   textAlign: 'center',
		   textBaseline: 'middle',
		   offsetX: 25,
		   offsetY: 0,
		   scale: 1,
		   radius: 3,
		   //zooms: [8, 18],
		   rotation: 0,
		   text: '删除',
		   zIndex: 991,
		   color: '#fff',
		   padding: [5, 10, 5, 10],
		   background: 'rgba(236,56,114,0.9)',
	   });
	   map.add(delMarker);  // 添加删除按钮

	   delMarker.on('click',function(){
		   // alert("您点击了点标记");
		   // marker.off('click');//移除marker下所有click事件
		   clearAreaMap();
	   });
   }

   function formatLength(val) {
	   let num = val;
	   let unit = 'm';
	   if (num / 1000 > 1) {
	   num = num / 1000;
	   unit = 'km';
	   }
	   let lenArr = num.toString().split('.');
	   if (lenArr.length > 1 && lenArr[1].length > 3) {
	   num = num.toFixed(3);
	   }
	   return num + unit;
   }; // 距离单位转换

   function addText(drawData){
	   let circleQueryCenter = drawData.coordinates;

	   let degrees = YunliMap.metersToUnits(
		   circleQueryCenter,
		   drawData.radius
	   );
	   let delCoors = [circleQueryCenter[0] + degrees, circleQueryCenter[1]]; //获取点移动位置

	   if(polylineText){
		   polylineText.setCoordinates([circleQueryCenter, delCoors]); // 绘制过程中 动态显示 半径线
		   let label = {
			   text: formatLength(drawData.radius)
		   }
		   polylineText.setLabel(label); // 动态展示文本信息
	   }else{
		   // 沿线显示的半径信息
		   polylineText = new YunliMap.Polyline({
			   coordinates: [circleQueryCenter, delCoors],
			   style: {
			   color: "rgba(0, 101, 255, 1)",
			   lineWidth: 1,
			   },
			   label: {
				   fontSize: 16,
				   offset: [0, -10],
				   text: formatLength(drawData.radius),
				   color: "#fff",
				   // textStroke: "#fff",
				   strokeWidth: 0,
				   borderWidth: 0,
				   placement: "line"// 文本放置。可选值：线条中心点显示(point)、沿线显示(line)。
			   }
		   });
		   map.add(polylineText);
	   }
   }

  console.info('地图区域查询 mmmmmmmmmmmmmmmmmmm end')
}, 3000)

