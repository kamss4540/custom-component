import React, { useEffect, useRef, useState } from "react";
import NumberDisplay from "./NumberDisplay";
import styles from "./index.module.less";

export default (props) => {
    const { data: { value, config = {}, clickFlag } } = props;

    const timer = useRef();

    const [count, setCount] = useState(0);

    useEffect(() => {
        if (timer) {
            clearInterval(timer.current);
        }
        timer.current = setInterval(() => {
            triggeredUpdates();
        }, 10 * 1000);
        triggeredUpdates()
        return () => {
            clearInterval(timer.current);
        };
    }, [value, clickFlag]);

    const triggeredUpdates = () => {
        setCount(new Date().valueOf());
    };

    return (
        <div className={styles.layout}>
            {typeof value === "string" || typeof value === "number"
                ? value
                    .toString()
                    .split("")
                    .map((item, index) => (
                        <NumberDisplay
                            key={index}
                            data={item}
                            count={count}
                            config={config}
                        />
                    ))
                : null}
        </div>
    );
};
