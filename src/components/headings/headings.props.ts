import { HTMLAttributes, ReactNode } from "react";

export interface IHeadingsProps extends HTMLAttributes<HTMLHeadingElement>{
	heading: 'h1' | 'h2';
	children: ReactNode;
}