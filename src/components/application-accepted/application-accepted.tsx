import React, { useEffect } from "react";
import styles from './application-accepted.module.css';
import { Paragraph, Headings } from "../index";
import { IApplicationAcceptedProps } from "./application-accepted.props";
import { useNavigate } from "react-router-dom";

export const ApplicationAccepted: React.FC<IApplicationAcceptedProps> = ({acceptForm}) => {

	const navigate = useNavigate();

	useEffect(() => {
		const timerId = setTimeout(() => {
			acceptForm();
			navigate('/')
		}, 5000)

		return () => {
			clearTimeout(timerId)
		}
	}, [])

	return (
		<div className={styles.wrapper}>
			<Headings className={styles.title} heading='h2' children={`ЗАЯВКА\nПРИНЯТА`}/>
			<Paragraph className={styles.paragraph} tag='accept' children={`Держите телефон под рукой.\nСкоро с Вами свяжется наш менеджер.`}/>
		</div>
	)
}