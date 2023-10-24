import { Banner, Video } from "../../components";
import styles from './video-page.module.css'
import { useEffect, useState } from "react";

export const VideoPage = () => {

	const [banner, setBanner] = useState<boolean>(false);
	const [playVideo, setPlayVideo] = useState<boolean>(false);

	const pauseStartVideo = () => {
		setPlayVideo(state => !state)
	}

	useEffect(() => {
		let timerId: NodeJS.Timer;
		if (playVideo) {
			timerId = setTimeout(() => {
				setBanner(true);

			}, 5000)
		}
		return () => {
			clearTimeout(timerId);
		}
	}, [playVideo])

	return (
		<section className={styles.video}>
			<Video handleStartVideo={pauseStartVideo} playPause={playVideo}/>
			{banner ? <Banner setPause={setPlayVideo}/> : null}
		</section>
	)
}