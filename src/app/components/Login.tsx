import {useState} from "react";
import {useGoogleLogin} from "@react-oauth/google";
import axios from "axios";
import Tippy from "@tippyjs/react";
import {Avatar, Button, Space} from "antd";
import {CaretDownOutlined, LogoutOutlined} from "@ant-design/icons";

interface User {
    name?: string;
    picture?: string;
    email?: string;
    given_name?: string
}
const Login = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState<User | undefined>(undefined);
    const login = useGoogleLogin({
        onSuccess: async (response) => {
            try {
                const res = await axios.get(
                    "https://www.googleapis.com/oauth2/v3/userinfo",
                    {
                        headers: {
                            Authorization: `Bearer ${response.access_token}`,
                        },
                    }
                );
                setUser(res.data);
                setIsLoggedIn(true);
            } catch (err) {
                console.log(err);
            }
        },
    });

    const handleSignOut = () => {
        setIsLoggedIn(false);
        setUser(undefined);
    };
    return (
        <div className="text-white ml-2">
            {!isLoggedIn && (
                <Button type={"primary"}
                        size={"large"}
                    className="bg-sky-500"
                    onClick={() => login()}
                >
                    Đăng nhập
                </Button>
            )}
            {isLoggedIn && (
                <div>
                    {user && (
                        <Tippy
                            interactive
                            hideOnClick="toggle"
                            delay={[0, 700]}
                            offset={[12, 8]}
                            placement="bottom-end"
                            render={(attrs) => (
                                <div
                                    className="min-w-[270px] bg-[#1e293b] h-auto rounded-lg shadow-3xl"
                                    tabIndex={-1}
                                    {...attrs}
                                >
                                    <div className=" text-[#e2e8f0]">
                                        {/* info user */}
                                        <Space className="px-3 border-b border-dashed border-slate-600">
                                            <Avatar
                                                size={"large"}
                                                src={user?.picture}
                                                alt={user?.name}
                                            />
                                            <div className="flex flex-col justify-between text-sm">
                                                <p className="font-semibold text-sky-500">{user?.name}</p>
                                                <p className="text-[#999]">{user?.email}</p>
                                            </div>
                                        </Space>
                                        {/* Logout */}
                                        <div
                                            className="px-3 text-[15px] hover:cursor-pointer hover:bg-slate-600/30 hover:rounded-bl-lg hover:rounded-br-lg"
                                            onClick={() => handleSignOut()}
                                        >
                                            <Space >
                                                <LogoutOutlined />
                                                <p className="text-[15px]">Đăng xuất</p>
                                            </Space>
                                        </div>
                                    </div>
                                </div>
                            )}
                        >
                            <Space className="flex items-center  cursor-pointer">
                                <Avatar
                                    // className="w-8 h-8 object-cover rounded-full mr-2"
                                    src={user?.picture}
                                    alt={'user'}
                                />
                                <p>{user?.given_name}</p>
                                <CaretDownOutlined/>
                            </Space>
                        </Tippy>
                    )}
                </div>
            )}
        </div>
    );
};

export default Login;