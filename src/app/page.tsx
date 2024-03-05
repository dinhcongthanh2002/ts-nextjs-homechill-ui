'use client'
import MoviesList from "@/app/components/MoviesList";
import {Space} from "antd";
import React from "react";
import PopularMovies from "@/app/components/MoviesPopularSlider";

export default function Home() {
  return (
    <>
          <Space direction={"vertical"} size={50}>
              <PopularMovies />
              <MoviesList title={'Phim hành động'} genres={28} params="/pages/categorys/action" path="discover/movie" />
              <MoviesList title="Phim kinh dị" genres={27} params="/pages/categorys/horror" path="discover/movie" />
              <MoviesList
                  title="Phim tình cảm"
                  genres={10749}
                  params="/pages/categorys/romance"
                  path="discover/movie"
              />
              <MoviesList
                  genres={null}
                  title="Phim mới sắp chiếu"
                  params="/pages/categorys/upcoming"
                  path="movie/upcoming"
              />
          </Space>
    </>
  );
}
