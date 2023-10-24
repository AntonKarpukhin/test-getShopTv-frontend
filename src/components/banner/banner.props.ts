import { HTMLAttributes } from "react";


export interface IBannerProps extends HTMLAttributes<HTMLDivElement> {
	setPause: (state: boolean) => void;
}