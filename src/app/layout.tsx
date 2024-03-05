'use client'

import { Inter } from "next/font/google";
import "./styles/globals.css";
import {Col, ConfigProvider, Image, Input, Layout, Menu, Row, Space} from 'antd';
import theme from "@/app/theme/themeConfig";
import Link from "next/link";
import Login from "@/app/components/Login";
import {GoogleOAuthProvider} from "@react-oauth/google";
import SearchHeader from "@/app/components/search/SearchHeader";

const { Header, Content, Sider, Footer } = Layout;
const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

const items =[
    {
        key: '1',
        // icon: ,
        label: <Link href={'/pages/categorys/action'}>Phim Hành Động</Link>,
    },
    {
        key: '2',
        // icon: ,
        label: <Link href={'/pages/categorys/adventure'}>Phim Phiêu Lưu</Link>,
    },
    {
        key: '3',
        // icon: ,
        label: <Link href={'/pages/categorys/cartoon'}>Phim Hoạt Hình</Link>,
    },
    {
        key: '4',
        // icon: ,
        label: <Link href={'/pages/categorys/comedy'}>Phim Hài Hước</Link>,
    },
    {
        key: '5',
        // icon: ,
        label: <Link href={'/pages/categorys/criminal'}>Phim Hình Sự</Link>,
    },
    {
        key: '6',
        // icon: ,
        label: <Link href={'/pages/categorys/document'}>Phim Tài Liệu</Link>,
    },
    {
        key: '7',
        // icon: ,
        label: <Link href={'/pages/categorys/family'}>Phim Gia Đình</Link>,
    },
    {
        key: '8',
        // icon: ,
        label: <Link href={'/pages/categorys/horror'}>Phim Kinh Dị</Link>,
    },
    {
        key: '9',
        // icon: ,
        label: <Link href={'/pages/categorys/music'}>Phim Ca Nhạc</Link>,
    },
    {
        key: '10',
        // icon: ,
        label: <Link href={'/pages/categorys/romance'}>Phim Tình Cảm</Link>,
    },
    {
        key: '11',
        // icon: ,
        label: <Link href={'/pages/categorys/sciencefiction'}>Phim Khoa Học Viễn Tưởng</Link>,
    },
    {
        key: '12',
        // icon: ,
        label: <Link href={'/pages/categorys/causingexcitement'}>Phim Gây Cấn</Link>,
    },
    {
        key: '13',
        // icon: ,
        label: <Link href={'/pages/categorys/war'}>Phim Chiến Tranh</Link>,
    },
]

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <GoogleOAuthProvider clientId="433955474460-qm4491sbucooaefamccrarre4gee2lc4.apps.googleusercontent.com">
      <ConfigProvider theme={theme}>
          <Layout>
              <Sider
                  width={250}
                  breakpoint="lg"
                  collapsedWidth="0"
              >
                  <Link href={'/'}>
                      <Image preview={false} src={'https://allimages.sgp1.digitaloceanspaces.com/motphimtipeduvn/2022/06/33.png'} alt={'Logo primary'} />
                  </Link>
                  <Menu style={{ fontSize: '18px' }} theme="dark" mode="inline" items={items} />
              </Sider>
              <Layout>
                  <Header className={'flex items-center justify-end sticky top-0 z-10'}>
                          <SearchHeader />
                          <Login />
                  </Header>
                  <Content className={'bg-[#242e34]'}>
                      <div
                          style={{
                              padding: 24,
                              minHeight: '100vh',
                          }}
                      >
                          {children}
                      </div>
                  </Content>
                  <Footer className={'bg-[#0d253f] text-white'}>
                      <Row gutter={[16, 16]}>
                          <Col span={6} className={'hidden sm:block md:block lg:block xl:block 2xl:block'}>
                              <Space direction={"vertical"} align={"center"}>
                                  <Image width={110} src={'https://allimages.sgp1.digitaloceanspaces.com/motphimtipeduvn/2022/06/33.png'} alt={'Logo primary'} />
                                  <Row gutter={[16, 8]}>
                                      <Col span={12} offset={6} >Tận hưởng trải nghiệm xem phim mới nhất miễn phí ngay tại phimchill và dành thời gian thư giãn chill cùng gia đình và bạn bè. Với một thư viện phim phong phú
                                      </Col>
                                  </Row>
                              </Space>
                          </Col>
                          <Col span={6}>
                              <Space direction="vertical" align={"center"}>
                                  <span className={'text-primary font-bold'}>Phim mới</span>
                                  <Row gutter={[16, 8]}>
                                      <Col span={12}>Phim Hành Động</Col>
                                      <Col span={12}>Phim Phiêu Lưu</Col>
                                      <Col span={12}>Phim Hoạt Hình</Col>
                                      <Col span={12}>Phim Hài</Col>
                                      <Col span={12}>Phim Hình Sự</Col>
                                      <Col span={12}>Phim Tài Liệu</Col>
                                      <Col span={12}>Phim Gia Đình</Col>
                                      <Col span={12}>Phim Kinh Dị</Col>
                                      <Col span={12}>Phim Ca Nhạc</Col>
                                      <Col span={12}>Phim Lãng Mạn</Col>
                                      <Col span={12}>Phim Khoa Học Viễn Tưởng</Col>
                                      <Col span={12}>Phim Gây Cấn</Col>
                                      <Col span={12}>Phim Chiến Tranh</Col>
                                  </Row>
                              </Space>
                          </Col>
                          <Col span={6}>
                              <Space direction="vertical">
                                  <span className={'text-primary font-bold'}>Trợ giúp</span>
                                  <Row gutter={[0, 8]}>
                                      <Col span={12}>Hỏi đáp</Col>
                                      <Col span={12}>Liên hệ</Col>
                                      <Col span={12}>Tin tức</Col>
                                      <Col span={12}>Về chúng tôi</Col>
                                      <Col span={12}>Homechill</Col>
                                  </Row>
                              </Space>
                          </Col>
                          <Col span={6}>
                              <Space direction="vertical">
                                  <span className={'text-primary font-bold'}>Thông tin</span>
                                  <Row gutter={[16, 8]}>
                                      <Col span={24}>Điểu khoản sử dụng</Col>
                                      <Col span={24}>Chính sách riêng tư</Col>
                                      <Col span={24}>Khiếu nại bản quyền</Col>
                                      <Col span={24}>&copy; {new Date().getFullYear()} HomeChill.com</Col>
                                  </Row>
                              </Space>
                          </Col>
                      </Row>
                  </Footer>
              </Layout>
          </Layout>
      </ConfigProvider>
      </GoogleOAuthProvider>
      </body>
    </html>
  );
}
