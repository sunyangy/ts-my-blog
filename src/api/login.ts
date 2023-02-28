// 登录或者注册的请求
import service from "../service";
type user = {
    username: string,
    password: string
}
export const reqLogin = (data: user) => {
    return service({ url: "/user/login", method: "POST", data })
}

export const reqRegister = (data: user) => {
    return service({ url: "/user", method: "POST", data })
}