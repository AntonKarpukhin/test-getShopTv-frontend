import { ButtonHTMLAttributes } from 'react';

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
	isActive: boolean;
	count: number;
	setHovered: ( e: number | undefined) => void;
	cursor: boolean
	changeNumber: (count: number) => void;
}