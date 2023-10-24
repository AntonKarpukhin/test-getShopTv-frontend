import { Paragraph } from "../paragraph/paragraph";
import { Button } from "../button/button";
import { SyntheticEvent, useCallback, useEffect, useState } from "react";
import { Headings } from "../headings/headings";
import InputMask from 'react-input-mask';
import styles from './application-form.module.css';
import {Checkbox} from '../checkbox/checkbox'
import cn from "classnames";
import { setArrowDown } from "../../helpers/set-arrow-down";
import { setArrowUp } from "../../helpers/set-arrow-up";
import { useButtons } from "../../hooks/useButtons";
import { validateApi } from "../../utils/validate-api";
import { a } from "../../constants/data";
import { useNavigate } from "react-router-dom";
import { useIdleTimer } from 'react-idle-timer'

export const ApplicationForm = () => {

	const [selected, setSelected] = useState<string>('');
	const [cursor, setCursor] = useState( 50);
	const [hovered, setHovered] = useState<number | undefined>(undefined);
	const [checked, setChecked] = useState<boolean>(false);
	const [errorMessage, setErrorMessage] = useState<boolean>(false);
	const [activeButton, setActiveButton] = useState<boolean>(true);
	const navigate = useNavigate();
	const [remaining, setRemaining] = useState<number>();
	const {
		upPress,
		downPress,
		rightPress,
		leftPress,
		enterPress,
		backspace,
		number0,
		number1,
		number2,
		number3,
		number4,
		number5,
		number6,
		number7,
		number8,
		number9} = useButtons();

	const { getRemainingTime } = useIdleTimer({
		timeout: 10_000,
		throttle: 500
	})

	useEffect(() => {
		if (a.length && upPress) setCursor(setArrowUp(cursor)!);
	}, [upPress]);

	useEffect(() => {
		if (a.length && downPress) setCursor(setArrowDown(cursor)!);
	}, [downPress]);

	useEffect(() => {
		if (a.length && rightPress) {
			setCursor(prevState =>
				prevState < a.length - 1 ? prevState + 1 : 0
			);
		}
	}, [rightPress]);

	useEffect(() => {
		if (a.length && leftPress) setCursor(prevState => (prevState > 0 ? prevState - 1 : a.length - 1));
	}, [leftPress]);

	useEffect(() => {
		if (cursor > 13) return
		if (cursor === 12 && enterPress) onChangeSelect();
		if (cursor === 11 && enterPress) {
			deleteNumber();
			return;
		}
		if (cursor === 13 && enterPress) submitForm();
		if (enterPress) changeNumber(cursor)

	}, [cursor, enterPress]);

	useEffect(() => {
		if ((selected && backspace)) {
			deleteNumber();
			setErrorMessage(false);
		}
	}, [backspace]);

	useEffect(() => {
		if (a.length && hovered) setCursor(a.indexOf(hovered));
	}, [hovered]);

	useEffect(() => {
		if (number0) setSelected(state => state + '0')
		if (number1) changeNumber(0)
		if (number2) changeNumber(1)
		if (number3) changeNumber(2)
		if (number4) changeNumber(3)
		if (number5) changeNumber(4)
		if (number6) changeNumber(5)
		if (number7) changeNumber(6)
		if (number8) changeNumber(7)
		if (number9) changeNumber(8)
	}, [number0, number1, number2, number3, number4, number5, number6, number7, number8, number9])

	useEffect(() => {
		if (selected.length === 10 && checked) setActiveButton(false);
		else setActiveButton(true)
	}, [checked, selected])

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

	const submitForm = (e?: SyntheticEvent | KeyboardEvent) => {
		e?.preventDefault();
		validateApi.validate(+selected)
			.then(res => {
				if (res.data.valid) {
					setChecked(false);
					setErrorMessage(false);
					setSelected('');
					navigate('/promo/:accept');
				} else {
					setErrorMessage(true);
				}
			})
	}

	const changeNumber = (count: number) => {
		let counter = count + 1
		if (selected.length === 10) return;
		if (counter === 10) {
			counter = 0
		}
		setSelected(state => state + counter)
	}

	const deleteNumber = useCallback(() => {
		setSelected(state => state.slice(0, -1));
		setErrorMessage(false);
	}, [selected])

	const onChangeSelect = useCallback(() => {
		setChecked((state: boolean) => !state);
	}, [checked])

	const renderButtons = () => {
		return a.slice(0, 10).map((item, i) => {
			return (
				<label
					className={cn({
						[styles.rrr1]: item === 10
					})}
					key={i} htmlFor={String(item)}>
					<Button
						id={String(item)}
						isActive={false}
						count={item}
						changeNumber={changeNumber}
						setHovered={setHovered}
						cursor={i === cursor}
 					/>
				</label>
			)
		})
	}

	return (
		<form onSubmit={submitForm} className={styles.form} name="Form">
			<Headings className={styles.title} heading={'h1'} children={'Введите ваш номер мобильного телефона'}/>
			<div>
				<label htmlFor="Phone">
					<InputMask
						className={cn(styles.phone, {
							[styles.phoneError]: errorMessage
						})}
						id="Phone"
						alwaysShowMask={true}
						mask="+7\(999) 999 99 99"
						maskChar="_"
						value={selected}
						readOnly
						required
					>
					</InputMask>
				</label>
			</div>
			<Paragraph className={styles.paragraph} tag={'accept'} children={'и с Вами свяжется наш менеждер для дальнейшей консультации'}/>
					<div className={styles.wrapperButton}>
						{renderButtons()}
						<button
							className={cn(styles.buttonClear, {
								[styles.buttonClearHover]: cursor === 11
							})}
							type='button'
							name={'Удалить цифру'}
							onMouseEnter={() => setHovered(11)}
							onMouseLeave={() => setHovered(undefined)}
							onClick={deleteNumber}
						>
							Стереть
						</button>
					</div>
			<div className={styles.wrapperCheck}>
				{errorMessage ?
					<Paragraph children='Неверно введён номер' className={styles.errorParagraph} tag='error'/> :
					<>
						<Checkbox
							name={'Согласие на обработку данных'}
							setChecked={onChangeSelect}
							checked={checked}
							onMouseEnter={() => setHovered(12)}
							onMouseLeave={() => setHovered(undefined)}
							active={12 === cursor}
						/>
						<Paragraph className={styles.paragraphAccept} tag={'accept'} children={'Согласие на обработку персональных данных'}/>
					</>
				}
			</div>

			<button className={cn(styles.buttonAccept, {
				[styles.buttonAcceptActive]: !activeButton,
				[styles.buttonAcceptActiveHover]: !activeButton && 13 === cursor
			})}
					type='submit'
					name={'Отправить номер'}
					disabled={activeButton}
			>
				Подтвердить номер
			</button>
		</form>
	)
}