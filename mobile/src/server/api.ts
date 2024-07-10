import axios from "axios";

const baseURL = process.env.EXPO_PUBLIC_BASE_URL;

export const api = axios.create({
	baseURL: `${baseURL}:3333`,
});
