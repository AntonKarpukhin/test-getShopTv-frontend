import { Headings, Paragraph } from "../../components";
import { NavLink } from "react-router-dom";

export const NotFound = () => {
	return (
		<div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
			<Headings heading="h2">Такой страницы не существует</Headings>
			<NavLink to='/' style={{textDecoration: 'none'}}><Paragraph tag='error' children="Главная страница"/></NavLink>
		</div>
	)
}