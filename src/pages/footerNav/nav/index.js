import { useState } from "react";
import styles from "./index.module.less";

const Nav = (props) => {
	const { data } = props;

	const [active, setActive] = useState(0);

	const onClick = (index) => {
		setActive(index);
		// window.location.href = item.path;
	};

	return (
		<div className={styles.layout}>
			{data.map((item, index) => (
				<div
					key={item.name}
					className={`${styles.nav}  ${
						styles["type_" + data.length]
					} ${styles["index_" + index]} ${
						active === index ? styles.active : ""
					}`}
					onClick={() => onClick(index)}
				>
					{item.name}
				</div>
			))}
		</div>
	);
};

export default Nav;
