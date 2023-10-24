import { access_key } from "../constants/api";

export const checkValidity = async (num: number) => {
	const res = await fetch(`http://apilayer.net/api/validate?access_key=${access_key}&number=${num}&country_code=RU&format=1`);
	return await res.json()
};