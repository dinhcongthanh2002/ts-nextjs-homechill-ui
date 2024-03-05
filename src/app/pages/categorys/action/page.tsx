'use client'
import React, {useEffect, useState} from 'react';
import {getActionMovies} from "@/app/services/genres/actionService";
import {Alert, Col, Flex, Image, Pagination, PaginationProps, Row, Space} from "antd";
import Link from "next/link";
import {PlayCircleOutlined} from "@ant-design/icons";

interface Movie {
    id: number;
    title: string;
    original_title: string;
    backdrop_path: string | null;
    poster_path: string | null;
}

const ActionMovies = () => {
    const [data, setData] = useState<Movie[]>([]);
    const [current, setCurrent] = useState(1);
    const onChange: PaginationProps['onChange'] = (page) => {
        setCurrent(page);
    };
    const fetchApi = async () => {
        const result = await getActionMovies(current);
        return setData(result.results);
    };
    useEffect(() => {
        fetchApi();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [current])
    return (
        <Space direction={"vertical"} size={"large"}>
            <Flex justify={"space-between"} align={"center"}>
                <h1 className={'text-primary font-extrabold text-sm lg:text-2xl md:text-2xl uppercase'}>Phim hành động</h1>
            </Flex>
            <Alert className={'bg-[#303b42] text-white py-5'} showIcon={false} message={`Phim hay mới nhất, tổng hợp danh sách các bộ phim hay được web cập nhật liên tục. Tải hơn 10.000 bộ phim hành động năm 
          ${new Date().getFullYear() - 1}, ${new Date().getFullYear()} vietsub,
          thuyết minh mới nhất, hay nhất.`} banner/>
            <Row gutter={[10, 10]}>
                {data.length > 0 &&
                    data.map((movie, index) => (
                        <Col key={movie.id} xs={12} sm={12} md={8} lg={8} xl={6} xxl={4}>
                            <Link className={'relative group'} href={`/pages/detail/${movie.id}`}>
                                <div className={'relative'}>
                                    <Image
                                        className={'rounded'}
                                        height={151}
                                        preview={false}
                                        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path || movie.poster_path}`}
                                        alt={movie.title || movie.original_title}/>
                                    <PlayCircleOutlined
                                        className={'text-4xl flex items-center justify-center absolute h-[50px] w-[50px] top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%] scale-150 transition-all text-primary opacity-0 group-hover:scale-100 group-hover:opacity-80'}/>
                                </div>
                                <Alert
                                    className={'absolute bottom-0 left-0 right-0 bg-[rgba(0,0,0,.7)] text-white rounded-b'}
                                    showIcon={false} message={movie.title || movie.original_title} banner/>
                            </Link>
                        </Col>
                    ))}
            </Row>
            <Flex justify={"end"} className={'text-white'}>
                <Pagination className={'text-white'} current={current} total={5000} size={"default"}
                            showSizeChanger={false} onChange={onChange}/>
            </Flex>
        </Space>
    );
};

export default ActionMovies;
