import React, { useEffect, useRef } from "react";
import { IVideoProps } from "./video.props";
import video from '../../videos/van.mp4';
import { ReactComponent as IconPlay } from '../../images/play.svg'
import styles from './video.module.css';


export const Video: React.FC<IVideoProps> = ({playPause, handleStartVideo}) => {

	const videoRef = useRef <HTMLVideoElement | null>(null);

	useEffect(() => {
		if (!playPause) {

			videoRef?.current?.pause();
		} else {
			videoRef?.current?.play();
		}
	}, [playPause])

	return (
		<div className={styles.wrapper}>
			<video onClick={handleStartVideo} ref={videoRef}  style={{width: '100%', height: '100%'}} controls={false}>
				<source  src={video} type="video/mp4"/>
			</video>
			{!playPause ? <IconPlay onClick={handleStartVideo} className={styles.icon}/> : null}
		</div>
	)
}