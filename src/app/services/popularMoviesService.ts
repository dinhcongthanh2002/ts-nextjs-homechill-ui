import axios, {AxiosResponse} from "axios";

const API_KEY: string = "7231178ff0746cf499bae0fd41f7ace1";
const BASE_URL: string = "https://api.themoviedb.org/3";

export const getPopularMoviesList = async (): Promise<any> => {
    try {
        const response: AxiosResponse<any, any> = await axios.get(`${BASE_URL}/trending/movie/day`, {
            params: {
                api_key: API_KEY,
            },
        });
        return response.data;
    } catch (error) {
        console.log("Get Action API error ", error);
    }
};