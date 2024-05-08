import axios from "axios";

const axiosInstance = axios.create({
	baseURL: "https://api.unsplash.com/",
});

axiosInstance.defaults.headers.common["Authorization"] =
	"Client-ID cP1i_US6CxcYojs6I04AtV8BC1JoXhBCzAIWy90xAek";
axiosInstance.defaults.headers.common["Accept"] = "v1";

export const getImages = async <T>(page: number, query: string): Promise<T> => {
	const images = await axiosInstance.get(
		`/search/photos?page=${page}&query=${query}`,
	);
	return images.data;
};
