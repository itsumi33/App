import axios from 'axios'
import qs from 'qs'

const baseUrl = '/api'
axios.interceptors.response.use(res=>{
    // console.log(res);
    return res
})

//获取限时秒杀信息
export const reKillList = ()=>{
    return axios({
        url:baseUrl + "/api/getseckill",
        method:"get",
    })
}
//获取商品信息首页
export const reGoodsList = ()=>{
    return axios({
        url:baseUrl + "/api/getindexgoods",
        method:"get",
    })
}
//获取分类信息首页
export const reCateList = ()=>{
    return axios({
        url:baseUrl + "/api/getcatetree",
        method:"get",
    })
}
//获取分类商品信息
export const reCaGoodsList = (id)=>{
    return axios({
        url:baseUrl + "/api/getgoods",
        method:"get",
        params:{
            id:id
        }
    })
}
//获取一个商品信息
export const reGoodsInfo = (id)=>{
    return axios({
        url:baseUrl + "/api/getgoodsinfo",
        method:"get",
        params:{
            id:id
        }
    })
}


//会员登录
export const reUserLogin = (user)=>{
    return axios({
        url:baseUrl +"/api/login",
        method:"post",
        data:qs.stringify(user)
    })
}