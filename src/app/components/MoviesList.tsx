'use client'
import React, {useEffect, useState} from 'react';
import {getMoviesList} from "@/app/services/moviesListService";
import {Button, Flex, Image, Space, Spin} from "antd";
import {LoadingOutlined, PlayCircleOutlined} from "@ant-design/icons";
import {useRouter} from "next/navigation";
import Link from "next/link";

interface Movie {
    id?: number;
    title?: string;
    original_title?: string;
    backdrop_path?: string | null;
    poster_path?: string | null;
}

interface MoviesListProps {
    title?: string;
    genres: number | null;
    path?: string;
    params?: any;
}
const MoviesList: React.FC<MoviesListProps> = ({ title, genres, path, params }) => {
    const [data, setData] = useState<Movie[]>([]);

    const router = useRouter()
    useEffect(() => {
        const fetchApi = async () => {
            const result = await getMoviesList(genres, path);
            return setData(result.results);
        };
        fetchApi();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleRouter = () => {
        router.push(params)
    }
    return (
        <>
            {!data ? <Spin indicator={<LoadingOutlined className={'text-6xl'} spin />} fullscreen /> : <Space direction={"vertical"}>
                <Flex justify={"space-between"} align={"center"}>
                    <h1 className={'text-primary font-extrabold text-sm lg:text-2xl md:text-2xl uppercase'}>{title}</h1>
                    <Button onClick={handleRouter} className={'text-white'}>Xem tất cả</Button>
                </Flex>
                <div className="grid md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5 grid-cols-2 auto-rows-auto gap-2 lg:gap-[10px]">
                    {data?.map((movie, index) => (
                        <Link
                            key={movie.id}
                            href={`pages/detail/${movie.id}`}
                            className={`${
                                index === 0
                                    ? "col-span-2 row-span-2 relative lg:text-xl overflow-hidden select-none origin-center sm:max-h-80 lg:max-h-full cursor-pointer group"
                                    : "relative overflow-hidden select-none origin-center cursor-pointer group"
                            }`}
                        >
                            <Image
                                width={'100%'}
                                preview={false}
                                className="w-full object-cover rounded transition-all lg:hover:scale-125"
                                src={`https://image.tmdb.org/t/p/w500/${
                                    movie?.backdrop_path || movie?.poster_path
                                }`}
                                alt={movie?.title || movie?.original_title}
                            />
                            <div
                                className="absolute flex items-center p-[5px] md:p-2 lg:p-2 bg-[rgba(0,0,0,.7)] bottom-0 left-0 right-0 text-white w-full rounded-b">
                                <p className="text-sm md:text-base lg:text-base w-60 overflow-hidden whitespace-nowrap text-ellipsis">
                                    {movie?.title || movie?.original_title}
                                </p>
                            </div>
                            <div className={'flex items-center justify-center absolute h-[50px] w-[50px] top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%]'}>
                                <PlayCircleOutlined
                                    className={`${index === 0 ? 'text-6xl' : 'text-4xl'} scale-150 transition-all text-primary opacity-0 group-hover:scale-100 group-hover:opacity-80`}/>
                            </div>
                        </Link>
                    ))}
                </div>
            </Space>}
        </>
    );
};

export default MoviesList;
