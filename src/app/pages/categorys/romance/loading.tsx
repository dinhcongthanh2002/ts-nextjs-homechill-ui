import React from 'react';
import {Spin} from "antd";
import {LoadingOutlined} from "@ant-design/icons";

const Loading = () => {
    return (
    <Spin indicator={<LoadingOutlined className={'text-6xl'} spin />} fullscreen />
    );
};

export default Loading;
