import React from "react";
import styles from "./headings.module.css";
import cn from "classnames";
import { IHeadingsProps } from "./headings.props";

export const Headings: React.FC<IHeadingsProps> = ({heading, children, className}) => {
	switch ( heading ) {
		case "h1":
			return <h1 className={cn(styles.heading, className)}>{children}</h1>
		case "h2":
			return <h2 className={cn(styles.heading, styles.h2, className)}>{children}</h2>
		default:
			return <></>
	}
}