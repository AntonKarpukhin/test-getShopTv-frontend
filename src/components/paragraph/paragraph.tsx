import React from "react";
import styles from './paragraph.module.css';
import cn from 'classnames';
import { IParagraphProps } from "./paragraph.props";

export const Paragraph: React.FC<IParagraphProps> = ({tag, className, children}) => {
	return (
		<p className={cn(styles.paragraph, className, {
			[styles.subtitle]: tag === 'subtitle',
			[styles.accept]: tag === 'accept',
			[styles.qrBlack]: tag === 'qrBlack',
			[styles.qrWhite]: tag === 'qrWhite',
			[styles.error]: tag === 'error',
		})}>
			{children}
		</p>
	)
}
