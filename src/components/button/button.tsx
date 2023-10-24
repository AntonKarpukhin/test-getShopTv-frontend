import React from "react";
import cn from 'classnames';
import styles from './button.module.css';
import { IButtonProps } from "./button.props";

export const Button: React.FC<IButtonProps> = ({isActive = false, cursor, count, setHovered, changeNumber, className}) => {
	return (
		<input
			className={cn(styles.button, {
				[styles.buttonActive]: isActive,
				[styles.buttonHovered]: cursor
				}, className)}
			type='button'
			name={`${count}`}
			defaultValue={`${count === 10 ? String(count).slice(1) : count}`}
			readOnly={true}

			onMouseEnter={() => setHovered(count)}
			onMouseLeave={() => setHovered(50)}

			onClick={() => changeNumber(count - 1)}

		/>
	)
}

