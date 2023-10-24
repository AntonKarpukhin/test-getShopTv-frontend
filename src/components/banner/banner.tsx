import React from "react";
import styles from './banner.module.css';
import { IBannerProps } from "./banner.props";
import { ReactComponent as QrCode } from '../../images/qr.svg';
import { Paragraph } from "../index";
import { NavLink } from "react-router-dom";

export const Banner: React.FC<IBannerProps> = ({setPause}) => {
	return (
		<aside className={styles.banner}>
			<Paragraph className={styles.title} tag='qrBlack' children={`ИСПОЛНИТЕ МЕЧТУ ВАШЕГО МАЛЫША!\n ПОДАРИТЕ ЕМУ СОБАКУ!`}/>
			<QrCode/>
			<Paragraph className={styles.description} tag='accept' children={`Сканируйте QR-код\n или нажмите ОК`}/>
			<NavLink to='/promo'><button onClick={() => setPause(false)}  type='button' className={styles.button} >ok</button></NavLink>
		</aside>
	)
}