import axios from '@/util/axios';
import qs from 'qs';

const login = {
    // 登录
    login() {
        return axios.post('/login');
    },
    // 登出
    loginout() {
        return axios.get('/loginout');
    }
}