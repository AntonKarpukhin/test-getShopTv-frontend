import { HTMLAttributes, ReactNode } from "react";

export interface IParagraphProps extends HTMLAttributes<HTMLParagraphElement>{
	tag: 'subtitle' |  'accept' | 'qrBlack' | 'qrWhite' | 'error';
	children: ReactNode;
}