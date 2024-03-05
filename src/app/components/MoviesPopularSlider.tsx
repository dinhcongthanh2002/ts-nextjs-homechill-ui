import React, {useEffect, useState} from 'react';
import {getPopularMoviesList} from "@/app/services/popularMoviesService";
import {Flex, Image, Space} from "antd";
import {A11y, Autoplay, Navigation} from "swiper/modules";
import "swiper/swiper-bundle.css";
import {Swiper, SwiperSlide} from "swiper/react";
import {PlayCircleOutlined} from "@ant-design/icons";
import Link from "next/link";

interface Movie {
    id: number;
    title: string;
    name: string;
    original_title: string;
    backdrop_path: string | null;
    poster_path: string | null;
}
const PopularMovies = () => {
    const [data, setData] = useState<Movie[]>([]);
    useEffect(() => {
        const fetchApi = async () => {
            const result = await getPopularMoviesList();
            return setData(result.results);
        };
        fetchApi();
    }, []);

    const breakpoints = {
        320: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 10,
        },
        480: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 15,
        },
        980: {
            slidesPerView: 4,
            slidesPerGroup: 4,
            spaceBetween: 15,
        },
        1200: {
            slidesPerView: 4,
            slidesPerGroup: 4,
            spaceBetween: 15,
        },
        1600: {
            slidesPerView: 5,
            slidesPerGroup: 5,
            spaceBetween: 15,
        },
    };
    return (
        <>
            <Space direction={"vertical"}>
                <Flex justify={"space-between"} align={"center"}>
                    <h1 className={'text-primary font-extrabold text-sm lg:text-2xl md:text-2xl uppercase'}>Phim phổ biến</h1>
                </Flex>
                <Swiper
                    className={'max-w-[350px] sm:max-w-[640px] md:max-w-[9' +
                        '820px] lg:max-w-[1024px] xl:max-w-[1280px] 2xl:max-w-[1600px]'}
                    breakpoints={breakpoints}
                    modules={[Autoplay, Navigation, A11y]}
                    navigation
                    autoplay={{
                        delay: 7000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                >
                    {data?.length > 0 &&
                        data?.map((movie, index) => (
                            <SwiperSlide key={movie?.id}>
                                <Link
                                    href={`pages/detail/${movie?.id}`}
                                    className="relative overflow-hidden select-none origin-center w-full cursor-pointer group"
                                >
                                    <Image
                                        preview={false}
                                        className="overflow-hidden max-[480px]:w-full w-full object-cover transition-all rounded-t lg:rounded"
                                        src={`https://image.tmdb.org/t/p/w500${
                                            movie?.backdrop_path || movie?.poster_path
                                        }`}
                                        alt={movie?.title || movie?.name}
                                    />
                                    <div className="lg:absolute p-2 lg:p-3 bg-[rgba(0,0,0,.7)] left-0 right-0 bottom-0 text-white w-full rounded-b">
                                        <p className="w-44 lg:w-60 overflow-hidden whitespace-nowrap text-ellipsis">
                                            {movie?.original_title || movie?.name}
                                        </p>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        ))}
                </Swiper>
            </Space>
        </>
    );
};

export default PopularMovies;
