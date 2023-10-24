import cn from 'classnames';
import styles from './promo-page.module.css';
import { ReactComponent as QrCode } from '../../images/qr.svg';
import { Paragraph, ApplicationForm, ApplicationAccepted } from "../../components";
import { NavLink, useNavigate } from "react-router-dom";
import { useButtons } from "../../hooks/useButtons";
import { useEffect, useState } from "react";
import { useIdleTimer } from "react-idle-timer";

export const PromoPage = () => {

    const {escape} = useButtons();
	const navigate = useNavigate();
	const [remaining, setRemaining] = useState<number>();
	const [accept, setAccept] = useState(false);

	const { getRemainingTime } = useIdleTimer({
		timeout: 10_000,
		throttle: 500
	})

	useEffect(() => {
		const interval = setInterval(() => {
			setRemaining(Math.ceil(getRemainingTime() / 1000))
		}, 500)

		return () => {
			clearInterval(interval)
		}
	})

	useEffect(() => {
		if (remaining === 0) {
			navigate('/')
		}
	}, [remaining])

    useEffect(() => {
		if (escape) navigate('/');
    }, [escape])

	const changeAcceptPage = () => {
		setAccept(state => !state);
	}

    return (
        <section className={styles.promo}>
            <div className={styles.layout}>
				{!accept ? <ApplicationForm acceptForm={changeAcceptPage}/> : <ApplicationAccepted acceptForm={changeAcceptPage}/>}
            </div>
            <div className={styles.wrapperClose}>
                <NavLink to='/'>
                    <button className={styles.button} type='button'>
                        <div className={cn(styles.line, styles.lineOne)}></div>
                        <div className={cn(styles.line,styles.lineTwo)}></div>
                    </button>
                </NavLink>
                <div className={styles.WrapperQr}>
                    <Paragraph className={styles.paragraph} tag='qrWhite' children='Сканируйте QR-код ДЛЯ ПОЛУЧЕНИЯ ДОПОЛНИТЕЛЬНОЙ ИНФОРМАЦИИ'/>
                    <QrCode/>
                </div>
            </div>
        </section>
    )
}

