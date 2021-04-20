import axios from 'axios';
import router from '../router/index';
import { Message } from 'element-ui';
import store from '@/store';

/**
 *提示框函数
 */
export type MessageType = 'success' | 'warning' | 'info' | 'error';
const tipBox = (msg: string, type?: MessageType) => {
    Message({
        message: msg,
        type: type,
        duration: 3 * 1000,
    })
}

/**
 * 跳转登录页
 */
const goLogin = () => {
    router.replace({
        path: '/login',
        query: {
            redirect: router.currentRoute.fullPath
        }
    })
}

/**
 * 请求失败错误处理
 */
const errorHandle = (status: number, cb: any) => {
    // 状态码判断
    switch (status) {
        // 401未登录状态
        case 401:
            tipBox('当前未登录，请先登录', 'warning');
            goLogin();
            break;
        // 403token过期
        case 403:
            tipBox('当前登录状态已过期，请重新登录', 'warning');
            localStorage.removeItem('token');
            goLogin();
            break;
        // 404 页面不存在
        case 404:
            tipBox('当前请求页面不存在', 'error');
            break;
        default:
            cb();
    }
}

// 接口地址
const base: string = '';
// 创建axios实例
const instance = axios.create({ baseURL: base, timeout: 1000 * 12 });
// 设置post请求头
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

/**
 * 请求拦截器
 */
instance.interceptors.request.use(function (config: any) {
    config.headers['token'] = localStorage.getItem('token') || ''
    return config
}, function (error) {
    // 请求错误时弹框提示，或做些其他事
    return Promise.reject(error)
})

/**
 * 响应拦截
 */
instance.interceptors.response.use(
    // 请求成功
    function (res: any): any {
        res.status === 200 ? Promise.resolve(res) : Promise.reject(res);
    },
    // 请求失败
    function (error: any): any {
        const { response } = error;
        if (response) {
            // 请求已发出，响应结果不在2xx里
            errorHandle(response.status, response.data.message)
        } else {
            // 处理断网的情况，用state中的netWork状态控制全局断网提示组件展示
            if(!window.navigator.onLine) {
                store.dispatch('setNetWork','offline');
            } else {
                return Promise.reject(error);
            }
        }
    }
)
export default instance;