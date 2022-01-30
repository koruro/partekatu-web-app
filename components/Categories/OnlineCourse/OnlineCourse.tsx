import classNames from "classnames";
import Link from "next/link";
import styles from "./styles.module.css";

const OnlineCourse = () => {
	return (
		<Link href={"/curso-euskera-online"}>
			<a
				className={classNames(
					styles["online-course-button"],
					"button-padding-1",
					"elevate-1"
				)}
			>
				Curso Online
			</a>
		</Link>
	);
};

export default OnlineCourse;
