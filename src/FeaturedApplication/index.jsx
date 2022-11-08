import React from "react";
import styles from "./index.module.less";
import TextScroll from "./TextScroll";

const FeaturedApplication = (props) => {
  //   const { data } = props;

  const data = [
    {
      label: "建德市 - 数字治气",
      imgUrl: "/iocoss/ioc-screen/screen/1585817538669359104/images/位图.png",
    },
    {
      label: "淳安县 - 秀水卫士",
      imgUrl: "/iocoss/ioc-screen/screen/1585817538669359104/images/位图.png",
    },
    {
      label: "桐庐县 - 排污许可",
      imgUrl:
        "/iocoss/ioc-screen/screen/1585817538669359104/images/13.排污许可e证通（杭州市桐庐县）.png",
    },

    {
      label: "江北区 - 固定污染",
      imgUrl: "",
    },
    {
      label: "镇海区 - 辐射安全",
      imgUrl:
        "/iocoss/ioc-screen/screen/1585817538669359104/images/位图(2).png",
    },
    {
      label: "北仑区 - 绿岛在线",
      imgUrl:
        "/iocoss/ioc-screen/screen/1585817538669359104/images/位图(1).png",
    },
    {
      label: "经开区 - “113N”",
      imgUrl:
        "/iocoss/ioc-screen/screen/1585817538669359104/images/17.“113N”数字污水零直排平台（温州市经开）.png",
    },
    {
      label: "安吉县 - 饮用水水源地信息化管理平台",
      imgUrl:
        "/iocoss/ioc-screen/screen/1585817538669359104/images/18.饮用水水源地信息化管理平台（湖州市安吉县）.png",
    },
    {
      label: "德清县 - 泄漏检测",
      imgUrl:
        "/iocoss/ioc-screen/screen/1585817538669359104/images/19.泄漏检测与修复监管应用（湖州市德清县）.png",
    },
    {
      label: "南浔区 - 化工园区",
      imgUrl:
        "/iocoss/ioc-screen/screen/1585817538669359104/images/20.化工园区“污水零直排”监管（湖州市南浔区）.png",
    },
    {
      label: "柯桥区 - 数智蓝网",
      imgUrl:
        "/iocoss/ioc-screen/screen/1585817538669359104/images/24.数智蓝网（绍兴市柯桥区）.png",
    },
    {
      label: "义乌市 - 工业VOCs场景管控应用",
      imgUrl:
        "/iocoss/ioc-screen/screen/1585817538669359104/images/25.工业VOCs场景管控应用(金华市义乌市）.png",
    },
    {
      label: "义乌市 - 非道路移动机械监管应用",
      imgUrl:
        "/iocoss/ioc-screen/screen/1585817538669359104/images/26.非道路移动机械监管应用（金华市义乌市）.png",
    },
    {
      label: "岱山县 - 扬尘在线",
      imgUrl: "",
    },
    {
      label: "路桥区 - 农田灌溉",
      imgUrl:
        "/iocoss/ioc-screen/screen/1585817538669359104/images/29.农田灌溉用水水质监管应用（台州市路桥区）.png",
    },
    {
      label: "云和县 - 生态环境",
      imgUrl:
        "/iocoss/ioc-screen/screen/1585817538669359104/images/30.生态环境与健康管理在线应用（丽水市云和县）.png",
    },
    {
      label: "遂昌县 - “环保预警”一件事",
      imgUrl:
        "/iocoss/ioc-screen/screen/1585817538669359104/images/31.“环保预警”一件事（丽水市遂昌县）.png",
    },
    {
      label: "南湖市 - 无废地图",
      imgUrl:
        "/iocoss/ioc-screen/screen/1585817538669359104/images/21.无废地图（嘉兴市南湖区）.png",
    },
    {
      label: "海宁市 - 企业环境选址查一次",
      imgUrl:
        "/iocoss/ioc-screen/screen/1585817538669359104/images/22.企业环境选址查一次（嘉兴市海宁县）.png",
    },
    {
      label: "桐乡市 - 工况智管",
      imgUrl:
        "/iocoss/ioc-screen/screen/1585817538669359104/images/23.工况智管（嘉兴市桐乡市）.png",
    },
    {
      label: "浦江县 - 水生态保护与修复应用",
      imgUrl:
        "/iocoss/ioc-screen/screen/1585817538669359104/images/27.水生态保护与修复应用（金华市浦江县）.png",
    },
  ];

  return (
    <div className={styles.layout}>
      {data.map((item, index) => (
        <div key={index} className={styles.element}>
          <img src={item.imgUrl} alt="" className={styles.pic} />
          <span>
            <TextScroll>{item.label}</TextScroll>
          </span>
        </div>
      ))}
    </div>
  );
};

export default FeaturedApplication;
