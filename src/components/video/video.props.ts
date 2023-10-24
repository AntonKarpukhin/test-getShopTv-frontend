import { HTMLAttributes, SyntheticEvent } from "react";

export interface IVideoProps extends HTMLAttributes<HTMLDivElement> {
	handleStartVideo: () => void;
	playPause: boolean;
}