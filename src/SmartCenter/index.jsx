import React, { useEffect, useState } from "react";
import styles from "./index.module.less";

const SmartCenter = (props) => {
  const [active, setActive] = useState({
    label: "",
    imgs: [],
  });

  useEffect(() => {
    setActive(btnlist[0]);
  }, []);

  const onNameClick = (data) => {
    window.globalEventEmitter.emit(data.event, data.data);
  };

  const onClick = (btn) => {
    if (btn.imgs.length) setActive(btn);
  };

  return (
    <div className={styles.smartCenter_layout}>
      <div className={styles.header}>
        <i className={styles.header_icon} />
        <span>智能中心</span>
      </div>
      <div className={styles.content}>
        <div
          className={`${styles.center_bg} ${
            styles["num_" + active.imgs.length]
          } `}
        >
          {active.imgs.map((item) => (
            <div key={item.url} onClick={() => onNameClick(item)}>
              <img src={item.url} alt="" />
              <span>{item.name}</span>
            </div>
          ))}
        </div>
        <div>
          {btnlist.map((item, index) => (
            <div
              key={item.label}
              className={`${styles.btn} ${styles["position_" + index]} ${
                index > 4 ? styles.right : ""
              } ${item.label === active.label ? styles.active : ""}`}
              onClick={() => onClick(item)}
            >
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
      <div style={{ display: "none" }}>
        {btnlist.map((i) => i.imgs.map((j) => <img src={j.url} alt="" />))}
      </div>
    </div>
  );
};

export default SmartCenter;

const btnlist = [
  {
    label: "精准治气",
    imgs: [
      {
        name: "精准治气主页",
        url: "/iocoss/$[bucketName]/custom/1588449679633207296/images/精准治气.png",
        event: "goToPreciseAir",
        data: { target: "_blank" },
      },
      {
        name: "大气预测预警",
        url: "/iocoss/$[bucketName]/custom/1588449679633207296/images/大气预测预警.png",
        event: "outLinkTo",
        data: "dqjcyj",
      },
      {
        name: "大气热点网格筛查",
        url: "/iocoss/$[bucketName]/custom/1588449679633207296/images/大气热点网格筛查.png",
        event: "outLinkTo",
        data: "dqrdwgsb",
      },
      {
        name: "大气管理风险识别",
        url: "/iocoss/$[bucketName]/custom/1588449679633207296/images/大气管理风险识别.png",
        event: "outLinkTo",
        data: "dqfxgl",
      },
    ],
  },
  {
    label: "精准治水",
    imgs: [
      {
        name: "精准治水主页",
        url: "/iocoss/$[bucketName]/custom/1588449679633207296/images/精准治水.png",
        event: "goToPreciseWater",
        data: { target: "_blank" },
      },
      {
        name: "污染溯源",
        url: "/iocoss/$[bucketName]/custom/1588449679633207296/images/污染溯源.png",
        event: "outLinkTo",
        data: "szwrsy",
      },
      {
        name: "水质风险预警",
        url: "/iocoss/$[bucketName]/custom/1588449679633207296/images/水质风险预警.png",
        event: "outLinkTo",
        data: "szfxyj",
      },
      {
        name: "水生态健康评价",
        url: "/iocoss/$[bucketName]/custom/1588449679633207296/images/水生态健康评价.png",
        event: "outLinkTo",
        data: "sstjkpj",
      },
      {
        name: "水质预测分析",
        url: "/iocoss/$[bucketName]/custom/1588449679633207296/images/水质预测分析.png",
        event: "outLinkTo",
        data: "szycfx",
      },
    ],
  },
  {
    label: "精准治废",
    imgs: [
      {
        name: "精准治废主页",
        url: "/iocoss/$[bucketName]/custom/1588449679633207296/images/精准治废.png",
        event: "outLinkTo",
        data: "wfjzzf",
      },
      {
        name: "建设监测",
        url: "/iocoss/$[bucketName]/custom/1588449679633207296/images/画像分析(无废指数).png",
        event: "outLinkTo",
        data: "zshxfx",
      },
      {
        name: "监测预警",
        url: "/iocoss/$[bucketName]/custom/1588449679633207296/images/监测预警(闭环跟踪).png",
        event: "outLinkTo",
        data: "zsjcyj",
      },
      {
        name: "风险识别",
        url: "/iocoss/$[bucketName]/custom/1588449679633207296/images/风险识别.png",
        event: "outLinkTo",
        data: "zsfxsb",
      },
    ],
  },
  {
    label: "精准治土",
    imgs: [],
  },
  {
    label: "陆海协同",
    imgs: [
      {
        name: "陆海协同治污主页",
        url: "/iocoss/$[bucketName]/custom/1588449679633207296/images/陆海协同治污.png",
        event: "outLinkTo",
        data: "lhxtzw",
      },
    ],
  },
  {
    label: "减污降碳",
    imgs: [],
  },
  {
    label: "环评准入",
    imgs: [
      {
        name: "环评准入智能研判",
        url: "/iocoss/$[bucketName]/custom/1588449679633207296/images/环境准入智能研判.png",
        event: "outLinkTo",
        data: "hjzr_znyp",
      },
      {
        name: "项目环评预测预警",
        url: "/iocoss/$[bucketName]/custom/1588449679633207296/images/项目环评预测预警.png",
        event: "outLinkTo",
        data: "hjzr_znyj",
      },
    ],
  },
  {
    label: "环境问题发现",
    imgs: [],
  },
  {
    label: "环保监管",
    imgs: [
      {
        name: "分级分类监管",
        url: "/iocoss/$[bucketName]/custom/1588449679633207296/images/分级分类监管.png",
        event: "outLinkTo",
        data: "fjfljg",
      },
    ],
  },
];
