//对API进行统一管理
import requests from './request';  //此处requests等于axios

let weatherQueryURL = 'http://wthrcdn.etouch.cn/weather_mini?city='

//测试用api
export const LoginRequest = (params) => {
  return requests({
    method: 'post',
    url: `/login`,
    data: params
  });
}
export const WeatherQuery = (city) => {
  return requests({
    method: 'get',
    url: `${weatherQueryURL}${city}`,
  });
}

//用户登录
export const reqUserLogin = (params) => {
  return requests({
    method: 'post',
    url: `/login`,
    data: params
  });
}

//获取学生用户信息
export const reqStuInfo = (params) => {
  return requests({
    method: 'get',
    url: `/student/info`,
    data: params
  });
}




