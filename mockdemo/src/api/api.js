import Vue from 'vue'
import axios from 'axios'
 
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
  
// 请求拦截器
axios.interceptors.request.use(function(config) {
  return config;
 }, function(error) {
  return Promise.reject(error);
 })
 // 响应拦截器
axios.interceptors.response.use(function(response) {
 return response;
}, function(error) {
 return Promise.reject(error);
})
  
// 封装axios的get请求用params
export function fetch(url, params) {
 return new Promise((resolve, reject) => {
  axios.get(url, params)
   .then(response => {
    resolve(response.data);
   })
   .catch((error) => {
    reject(error);
   })
 })
}

//封装axios的post请求不用
export function post(url,params){
    return new Promise((resolve,reject) => {
      axios.post(url,params)
      .then(response => {
        resolve(response.data);
       })
       .catch((error) => {
        reject(error);
       })
    })
  }

//封装axios的put请求不用params
export function put(url,params){
    return new Promise((resolve,reject) => {
      axios.put(url,params)
      .then(response => {
        resolve(response.data);
       })
        .catch((error) => {
        reject(error);
       })
    })
}

//封装axios的delete请求需要params
export function del(url,params){
    return new Promise((resolve,reject) => {
      axios.delete(url,params)
      .then(response => {
        resolve(response.data);
       })
       .catch((error) => {
        reject(error);
       })
    })
}

export default {
    get_data(url, params) {
        return fetch(url, params);
    },
    post_data(url,params){
        return post(url,params)
    },
    put_data(url,params){
        return put(url,params)
    },
    del_data(url,params){
        return del(url,params)
    }
}