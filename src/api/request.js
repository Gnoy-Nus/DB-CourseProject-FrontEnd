//对axios二次封装
import axios from "axios";
import store from '@/store';
const requests = axios.create({
    Timeout:5000,
});

//请求拦截
requests.interceptors.request.use((config)=>{
//需要携带token带给服务器
  if(store.state.user.token){
    config.headers.Authorization = store.state.user.token;
  }
    return config;
});
//响应拦截
requests.interceptors.response.use(
    (res)=>{
    return res.data;
},
(err) => {
    alert("服务器响应数据失败");
  }
);

//对外暴露
export default requests;
