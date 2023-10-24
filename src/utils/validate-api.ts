import axios from "axios"
import { access_key } from "../constants/api";

const baseURL = axios.create({
	baseURL: "http://apilayer.net/api/",
})

export const validateApi = {
	validate: async (num: number) => await baseURL.get("validate", {
		params: {
			"access_key": access_key,
			"country_code": "RU",
			"number": `${num}`
		}
	})
}