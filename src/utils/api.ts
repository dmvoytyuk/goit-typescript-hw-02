import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.unsplash.com/",
});

axiosInstance.defaults.headers.common["Authorization"] =
  "Client-ID cP1i_US6CxcYojs6I04AtV8BC1JoXhBCzAIWy90xAek";
axiosInstance.defaults.headers.common["Accept"] = "v1";

export const getImages = async (page: number, query: string) => {
  const images = await axiosInstance.get(
    `/search/photos?page=${page}&query=${query}`,
  );
  console.log(images.data);
  return images.data;
};
