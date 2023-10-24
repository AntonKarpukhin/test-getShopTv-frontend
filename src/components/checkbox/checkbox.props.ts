import { ButtonHTMLAttributes } from "react";

export interface ICheckboxProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	name: string;
	setChecked: () => void;
	checked: boolean;
	active: boolean;
}