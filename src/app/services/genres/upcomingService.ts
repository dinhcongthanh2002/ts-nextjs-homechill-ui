import axios, {AxiosResponse} from "axios";

const API_KEY: string = "7231178ff0746cf499bae0fd41f7ace1";
const BASE_URL: string = "https://api.themoviedb.org/3";
export const getUpcomingMovies = async (page: number): Promise<any> => {
    try {
        const response: AxiosResponse<any, any> = await axios.get(`${BASE_URL}/movie/upcoming`, {
            params: {
                api_key: API_KEY,
                language: "vi-VN",
                page,
            },
        });
        return response.data;
    } catch (error) {
        console.log("Get Upcoming API error ", error);
    }
};