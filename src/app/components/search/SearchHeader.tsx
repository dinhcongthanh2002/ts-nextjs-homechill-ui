'use client'
import React, {useEffect, useState} from 'react';
import {getSearchResult} from "@/app/services/searchService";
import {Input, List, Popover} from 'antd';
import {SearchProps} from "antd/es/input";
import MovieItem from "@/app/components/search/MovieItem";
import VirtualList from 'rc-virtual-list';

const {Search} = Input;

interface SearchResultItem {
    id: number;
    title: string;
    media_type: string
}

const SearchHeader = () => {
    const [data, setData] = useState<SearchResultItem[]>([])
    const [searchValue, setSearchValue] = useState("");
    const [open, setOpen] = useState(false);
    const onSearch: SearchProps['onSearch'] = (value: string) => setSearchValue(value);
    const contents: React.ReactElement = (
        <>
            <List className={'w-[300px]'} size={'small'}>
                <VirtualList
                    data={data}
                    height={400}
                    itemHeight={47}
                    itemKey={(item: SearchResultItem) => item.id}
                >
                    {(item: SearchResultItem) => (
                        <MovieItem key={item.id} data={item}/>
                    )}
                </VirtualList>
            </List>
        </>
    )
    const handleOpenChange = (newOpen: boolean) => {
        setOpen(newOpen);
    };
    const fetchApi = async () => {
        const result = await getSearchResult(searchValue);
        setData(result.results);
    };
    useEffect(() => {
        fetchApi();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchValue])
    return (
        <>
            <Popover
                placement="topRight"
                content={contents}
                title={`Tìm kiếm phim: ${searchValue}`}
                trigger="click"
                open={open}
                arrow={false}
                onOpenChange={handleOpenChange}
            >
                <Search
                    className={'w-[400px]'}
                    placeholder="Tìm kiếm tên phim..."
                    allowClear
                    enterButton="Search"
                    size="large"
                    onSearch={onSearch}
                />
            </Popover>
        </>
    );
};

export default SearchHeader;
