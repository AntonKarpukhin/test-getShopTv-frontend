import React, { forwardRef } from "react";
import styles from "./checkbox.module.css";
import cn from 'classnames';
import { ICheckboxProps } from "./checkbox.props";


export const Checkbox = forwardRef<HTMLInputElement, ICheckboxProps>(({ name, className, setChecked, checked, active}, ref) => {

	return (
		<label className={cn(styles.labelChecked, className)} htmlFor="check">
			<input
				ref={ref}
				className={styles.inputChecked}
				id="check"
				type="checkbox"
				name={name}
				checked={checked}
				onChange={setChecked}
				required
			/>
			<span className={cn(styles.checkmark, {
				[styles.checkmarkActive]: active
			})}></span>
		</label>
	)
})