import cn from 'classnames';
import styles from './promo-page.module.css';
import { ReactComponent as QrCode } from '../../images/qr.svg';
import { Paragraph } from "../../components";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useButtons } from "../../hooks/useButtons";
import { useEffect } from "react";



export const PromoPage = () => {

    const {escape} = useButtons();
	const navigate = useNavigate();

    useEffect(() => {
		if (escape) navigate('/');
    }, [escape])

    return (
        <section className={styles.promo}>
            <div className={styles.layout}>
                <Outlet/>
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

