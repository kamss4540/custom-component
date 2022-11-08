import React, { useEffect, useRef } from "react";
import styles from "./index.module.less";

const TextScroll = (props) => {
  const { children, speed = 50 } = props;

  const containerRef = useRef();
  const textRef = useRef();
  const animatingRef = useRef(false);

  useEffect(() => {
    start(speed);
  }, [speed]);

  const start = (speed) => {
    const container = containerRef.current;
    const text = textRef.current;
    if (!container || !text) return;

    if (container.offsetWidth >= text.offsetWidth) {
      animatingRef.current = false;
      text.style.removeProperty("transition-duration");
      text.style.removeProperty("transform");
      return;
    }

    if (animatingRef.current) return;
    const initial = !text.style.transform;
    text.style.transitionDuration = "0s";
    if (initial) {
      text.style.transform = "translateX(0)";
    } else {
      console.log("container.offsetWidth=>", container.offsetWidth);
      text.style.transform = `translateX(${container.offsetWidth}px)`;
    }

    const distance = initial
      ? text.offsetWidth
      : container.offsetWidth + text.offsetWidth;
    animatingRef.current = true;
    text.style.transitionDuration = `${Math.round(distance / speed)}s`;
    text.style.transform = `translateX(-${text.offsetWidth}px)`;
  };

  return (
    <div
      ref={(ref) => (containerRef.current = ref)}
      className={styles.container}
    >
      <span
        ref={(ref) => (textRef.current = ref)}
        onTransitionEnd={() => {
          animatingRef.current = false;
          start(speed);
        }}
      >
        {children}
      </span>
    </div>
  );
};

export default TextScroll;
