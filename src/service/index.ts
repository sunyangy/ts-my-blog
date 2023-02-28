import config from './config'
import axios from 'axios'
import NProgress from "nprogress"
import 'nprogress/nprogress.css'
import localCache from './../util/cache'

// NProgress.configure({
//     easing: 'ease', // 动画方式
//     speed: 1000, // 递增进度条的速度
//     showSpinner: false, // 是否显示加载ico
//     trickleSpeed: 200, // 自动递增间隔
//     minimum: 0.3, // 更改启动时使用的最小百分比
//     parent: 'body', //指定进度条的父容器
// })

const service = axios.create({
    baseURL: config.baseURL,
    timeout: 5000
})

// 设置请求拦截器
service.interceptors.request.use((configs: { headers: { token: any } }) => {
    const token = localCache.getCache('blog_token')
    if (token) {
        configs.headers.authorization = token
    }
    console.log()
    NProgress.start()
    return configs
})

// 设置响应拦截器
service.interceptors.response.use(
    (res: { data: any }) => {
        NProgress.done()
        return res.data
    },
    (err: { message: any }) => {
        console.log('请求失败')
        console.log(err.message)
        return
    }
)
export default service