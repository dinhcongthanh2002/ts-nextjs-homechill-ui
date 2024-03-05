import axios, {AxiosResponse} from "axios";

const API_KEY: string = "7231178ff0746cf499bae0fd41f7ace1";
const BASE_URL: string = "https://api.themoviedb.org/3";
export const getRomanceMovies = async (page: number): Promise<any> => {
    try {
        const response: AxiosResponse<any, any> = await axios.get(`${BASE_URL}/discover/movie`, {
            params: {
                api_key: API_KEY,
                language: "vi-VN",
                with_genres: 10749,
                page,
            },
        });
        return response.data;
    } catch (error) {
        console.log("Get Romance API error ", error);
    }
};