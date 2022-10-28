import React from "react";

const FeaturedApplication = (props) => {
  const { data } = props;

  return (
    <div
    // className={styles.layout}
    >
      {data.map((item, index) => (
        <div
          key={index}
          // className={styles.element}
        >
          999
        </div>
      ))}
    </div>
  );
};

export default FeaturedApplication;
